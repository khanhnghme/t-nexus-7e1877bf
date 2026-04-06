"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [31243], {
        73888: (e, t, i) => {
            i.d(t, {
                y: () => o
            }), i(944114), i(898992), i(354520), i(803949), i(581454);

            function o(e) {
                let {
                    environment: t,
                    transaction: o,
                    spaceStore: a,
                    actors: n,
                    metadata: l
                } = e;
                if (!a.isDefined()) return !1;
                let r = a.id,
                    s = n.filter(e => "user" === e.type).map(e => ({
                        id: (0, i(729052).yO)({
                            spaceId: r,
                            userId: e.userId
                        }),
                        space_id: r,
                        membership_type: e.membershipType,
                        user_id: e.userId
                    })),
                    d = n.filter(e => "bot" === e.type).map(e => {
                        var t, o;
                        return {
                            id: (0, i(611042).YS)({
                                spaceId: a.id,
                                botId: e.botId
                            }),
                            space_id: r,
                            bot_id: e.botId,
                            bot_parent_id: null == e || null == (t = e.parent) ? void 0 : t.id,
                            bot_parent_table: null == e || null == (o = e.parent) ? void 0 : o.table,
                            membership_type: e.membershipType
                        }
                    });
                return s.map(e => [e, i(993189).lJX.create(e).operations[0]]).forEach(([e, t]) => (0, i(421439).y4)({
                    store: (0, i(993077).dp)(a, e.user_id),
                    operation: t,
                    transaction: o
                })), d.map(e => [e, i(993189).p7l.create(e).operations[0]]).forEach(([e, t]) => (0, i(421439).y4)({
                    store: (0, i(993077).Ts)(a, e.bot_id),
                    operation: t,
                    transaction: o
                })), o.postSubmitCallbacks.push(async o => {
                    var r, c;
                    let u = n.map(e => (0, i(283161).z)(e));
                    i(594311).Ah({
                        status: o ? "fail" : "success",
                        location: null == l ? void 0 : l.pagePermissionChangeLocation,
                        permission_items: u
                    }), s.forEach(e => {
                        i(594311).sY({
                            spaceUser: e,
                            from: null == l ? void 0 : l.from,
                            status: o ? "fail" : "success"
                        })
                    }), d.forEach(e => {
                        i(594311).W7({
                            spaceBot: e,
                            from: null == l ? void 0 : l.from,
                            status: o ? "fail" : "success"
                        })
                    }), null != (r = e.metadata) && r.metric && i(680007).default.DO_NOT_USE_measureLegacy(null == (c = e.metadata) ? void 0 : c.metric, {}), o || await i(371151).nO({
                        environment: t,
                        spaceStore: a
                    })
                }), !0
            }
        },
        91790: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => o,
                lightBulbBrightIcon: () => a
            }), i(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.96 2 10.08 15.99",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M12.21 13.71c-.34 0-.62-.28-.62-.62 0-1.31.7-2.45 1.32-3.46.12-.2.24-.39.36-.58.34-.58.53-1.3.53-2.06 0-2.06-1.7-3.73-3.79-3.73S6.22 4.93 6.22 6.99c0 .76.18 1.47.53 2.06.11.19.23.39.35.58l.023.037c.614 1 1.307 2.129 1.297 3.423 0 .34-.24.61-.63.62-.35 0-.62-.28-.62-.63 0-.96-.55-1.85-1.14-2.8q-.091-.15-.185-.3-.095-.15-.185-.3c-.46-.78-.7-1.71-.7-2.69 0-2.74 2.26-4.98 5.04-4.98s5.04 2.23 5.04 4.98c0 .98-.24 1.92-.7 2.69-.12.2-.24.4-.37.61-.59.95-1.14 1.84-1.14 2.8 0 .34-.28.62-.62.63zm-1.26 4.28h-1.9c-.35 0-.62-.28-.62-.62s.28-.62.62-.62h1.9c.34 0 .62.28.62.62s-.28.62-.62.62M8.1 15.85h3.8c.34 0 .62-.28.62-.62s-.28-.62-.62-.62H8.1c-.34 0-.62.28-.62.62s.27.62.62.62"
                    })
                },
                a = (0, i(104509).wt)("lightBulbBright", o, "default")
        },
        103955: (e, t, i) => {
            function o() {
                let {
                    device: e
                } = (0, i(533992).v3)(), t = (0, i(682985).K8)(() => e.isPhone, [e]), o = (0, i(616844).Y5)("left", 14), a = (0, i(616844).Y5)("right", 14);
                return (0, i(960253).I)(() => ({
                    galleryWrap: {
                        display: "flex",
                        flexWrap: "wrap",
                        alignContent: "flex-start",
                        background: i(632079).Tj.popoverBackground,
                        paddingTop: 12 * !!t,
                        paddingBottom: 12 * !!t,
                        paddingInlineStart: t ? o : 9,
                        paddingInlineEnd: t ? a : 9,
                        boxShadow: t ? `0 1px 0 ${i(632079).Tj.border.secondaryTranslucent}` : ""
                    }
                }), [t, o, a])
            }

            function a() {
                return {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 320,
                    flex: 1
                }
            }

            function n(e, t) {
                let {
                    device: o
                } = e, a = o.isPhone ? t ? {
                    background: i(632079).oZ.transparent,
                    paddingInlineStart: (0, i(616844).Y5)("left"),
                    paddingInlineEnd: (0, i(616844).Y5)("right")
                } : {
                    background: i(632079).Tj.popoverBackground,
                    paddingInlineStart: (0, i(616844).Y5)("left", i(703188).H),
                    paddingInlineEnd: (0, i(616844).Y5)("right", i(703188).MP)
                } : o.isTablet ? {
                    background: i(632079).oZ.transparent,
                    paddingInlineStart: i(703188).FU,
                    paddingInlineEnd: i(703188).FU
                } : {
                    background: i(632079).oZ.transparent,
                    paddingInlineStart: i(703188).zG,
                    paddingInlineEnd: i(703188).zG
                };
                return {
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    ...t ? {} : {
                        alignItems: "flex-start"
                    },
                    ...a
                }
            }

            function l(e, t, o) {
                var a, n;
                let {
                    device: l,
                    WindowSizeStore: r
                } = e;
                if (l.isPhone) {
                    let e = o ? 0 : i(703188).H,
                        t = o ? 0 : i(703188).MP;
                    return (window.innerWidth - r.getSafePaddingLeftPx(e) - r.getSafePaddingRightPx(t)) / i(703188).UA
                }
                return l.isTablet ? i(703188).Vq : null != t && null != (a = t.current) && a.offsetWidth ? ((null == t || null == (n = t.current) ? void 0 : n.offsetWidth) - 2 * i(703188).zG) / i(703188).Sq : i(703188).bc
            }

            function r() {
                return i(986939).A.isMobile ? i(703188).zR : i(703188).zf
            }
            i.d(t, {
                $n: () => a,
                b0: () => o,
                so: () => l,
                uu: () => r,
                ze: () => n
            })
        },
        138308: (e, t, i) => {
            i.r(t), i.d(t, {
                arrowBranchIcon: () => a,
                iconDefinition: () => o
            }), i(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.48 3.92 13.04 12.85",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M3.483 4.55c0-.345.28-.625.625-.625h3.5a.625.625 0 1 1 0 1.25H5.617L8.86 8.42A6 6 0 0 1 10 10.007a6 6 0 0 1 1.14-1.588l3.243-3.244h-1.99a.625.625 0 1 1 0-1.25h3.5c.344 0 .624.28.624.625v3.5a.625.625 0 0 1-1.25 0V6.06l-3.243 3.244a4.78 4.78 0 0 0-1.399 3.358v4.108h-1.25v-4.108a4.78 4.78 0 0 0-1.398-3.358L4.733 6.059V8.05a.625.625 0 1 1-1.25 0z"
                    })
                },
                a = (0, i(104509).wt)("arrowBranch", o, "default")
        },
        192922: (e, t, i) => {
            i.d(t, {
                A: () => s
            }), i(944114), i(581454);
            var o = i(296540),
                a = i(474848);
            let n = (0, i(109939).YK)({
                    selectColorLabel: {
                        defaultMessage: "Set color as {color}",
                        id: "horizontalColorPicker.selectColor"
                    }
                }),
                l = {
                    selectedCircleWrapper: {
                        width: i(986939).A.isMobile ? i(703188).UA : 22,
                        height: i(986939).A.isMobile ? i(703188).UA : 22,
                        gridRowStart: 1,
                        gridColumnStart: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    style0: {
                        display: "flex",
                        padding: 4,
                        gap: 4,
                        justifyContent: "center"
                    }
                },
                r = o.forwardRef(function(e, t) {
                    let {
                        color: r,
                        tooltipEvents: s,
                        menuListProps: d,
                        currentColor: c
                    } = e, u = (0, i(109939).tz)(), [p, m] = (0, o.useState)(!1), {
                        isMenuListFocusVisible: g
                    } = (0, o.useContext)(i(842459).V), h = d.focused && g, f = (0, i(960253).e)(), y = (0, i(960253).I)(() => ({
                        colorPickerItem: {
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            cursor: void 0 !== c ? "pointer" : void 0
                        },
                        icon: {
                            height: i(986939).A.isMobile ? 28 : 20,
                            width: i(986939).A.isMobile ? 28 : 20,
                            stroke: i(111012).l8[f][r],
                            fill: i(111012).l8[f][r]
                        },
                        iconButton: {
                            width: i(986939).A.isMobile ? i(703188).UA : 22,
                            height: i(986939).A.isMobile ? i(703188).UA : 22,
                            gridRowStart: 1,
                            gridColumnStart: 1,
                            ...h && {
                                boxShadow: i(632079).Tj.buttonBlueFocusRing
                            }
                        },
                        selectedCircle: {
                            width: i(986939).A.isMobile ? 30 : 22,
                            height: i(986939).A.isMobile ? 30 : 22,
                            borderRadius: "100%",
                            border: `1.5px solid ${i(111012).l8[f][r]}`,
                            opacity: p ? .5 : 1
                        }
                    }), [p, r, h, c, f]), x = (0, o.useCallback)(e => {
                        m(!0), d.onMouseEnter && d.onMouseEnter(e), s.onMouseEnter && s.onMouseEnter(e)
                    }, [d, s]), b = (0, o.useCallback)(e => {
                        m(!1), s.onMouseLeave && s.onMouseLeave(e)
                    }, [s]);
                    return (0, a.jsxs)("div", {
                        style: y.colorPickerItem,
                        ...(0, i(63390).A)(s, {
                            onClick: void 0 !== c ? d.onClick : void 0
                        }),
                        onMouseEnter: x,
                        onMouseLeave: b,
                        children: [(0, a.jsx)(i(374533).A, {
                            ref: t,
                            disabled: void 0 === c,
                            ariaLabel: u.formatMessage(n.selectColorLabel, {
                                color: u.formatMessage(i(111012).jd[r])
                            }),
                            style: y.iconButton,
                            icon: i(196115).circleFillIcon,
                            iconStyle: y.icon,
                            hovered: p,
                            role: d.role,
                            id: d.id,
                            disallowTabbing: !0
                        }), c === r || void 0 !== c && (p || h) ? (0, a.jsx)("div", {
                            style: l.selectedCircleWrapper,
                            children: (0, a.jsx)("div", {
                                style: y.selectedCircle
                            })
                        }) : void 0]
                    })
                }),
                s = o.memo(function(e) {
                    let {
                        parent: t,
                        currentColor: o,
                        onColorSelected: n,
                        additionalItems: s
                    } = e, d = (0, i(533992).v3)(), c = (0, i(109939).tz)(), u = (0, i(960253).I)(() => ({
                        menu: {
                            padding: 4,
                            ...e.menuStyle
                        }
                    }), [e.menuStyle]), p = i(111012).v3.map(e => ({
                        key: e,
                        action: i => {
                            t.close(), n({
                                environment: d,
                                color: e
                            })
                        },
                        render: t => (0, a.jsx)(i(51831).m, {
                            content: () => c.formatMessage(i(111012).jd[e]),
                            placement: "bottom",
                            children: i => (0, a.jsx)(r, {
                                ref: t.ref,
                                color: e,
                                tooltipEvents: i,
                                menuListProps: t,
                                currentColor: o
                            })
                        })
                    }));
                    return s && p.push(...s), (0, a.jsx)(i(519451).A, {
                        debugName: "ColorPicker",
                        capture: !0,
                        allowEsc: !0,
                        children: (0, a.jsx)(i(558045).A, {
                            type: i(558045).O.Grid,
                            getItemsPerRowForSection: () => 5,
                            initialFocus: o ? Math.max(i(111012).v3.indexOf(o), 0) : 10,
                            sections: [{
                                key: "variations",
                                render: e => (0, a.jsx)("div", { ...e
                                }),
                                items: p
                            }],
                            renderRow: (t, i) => {
                                var o;
                                return (0, a.jsx)("div", {
                                    role: "row",
                                    style: { ...l.style0,
                                        ...(null == (o = e.rowStyle) ? void 0 : o.call(e, i)) ? ? {}
                                    },
                                    children: t
                                }, i)
                            },
                            style: u.menu
                        })
                    })
                })
        },
        196115: (e, t, i) => {
            i.r(t), i.d(t, {
                circleFillIcon: () => a,
                iconDefinition: () => o
            }), i(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.26",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M10 2.375a7.625 7.625 0 1 0 0 15.25 7.625 7.625 0 0 0 0-15.25"
                    })
                },
                a = (0, i(104509).wt)("circleFill", o, "fill")
        },
        248196: (e, t, i) => {
            i.d(t, {
                A: () => r,
                h: () => c
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698);
            var o = i(296540),
                a = i(474848);
            let n = (0, i(109939).YK)({
                    nameInputPlaceholder: {
                        defaultMessage: "have-fun-with-it",
                        id: "customEmojiUploadPopup.nameInput.placeholder"
                    },
                    urlPasteInputPlaceholder: {
                        defaultMessage: "Paste a link to an image…",
                        id: "customEmojiUploadPopup.urlPasteInput.placeholder"
                    },
                    nameInputDuplicateError: {
                        defaultMessage: "Name already taken",
                        id: "customEmojiUploadPopup.nameInput.duplicateError"
                    },
                    nameInputCharacterError: {
                        defaultMessage: "Name can only contain lowercase letters, numbers, hyphens, or underscores",
                        id: "customEmojiUploadPopup.nameInput.characterError"
                    },
                    nameInputLengthError: {
                        defaultMessage: "Name must be less than 50 characters",
                        id: "customEmojiUploadPopup.nameInput.lengthError"
                    },
                    fileUploadImageError: {
                        defaultMessage: "Only images are supported",
                        id: "customEmojiUploadPopup.fileUpload.imageError"
                    },
                    urlPasteHintImageError: {
                        defaultMessage: "Pasted link does not contain an image.{br}Use {keyboardShortcut} to paste a different link",
                        id: "customEmojiUploadPopup.urlPasteHint.imageError"
                    },
                    urlPasteInputImageError: {
                        defaultMessage: "Pasted link does not contain an image",
                        id: "customEmojiUploadPopup.urlPasteInput.imageError"
                    },
                    customEmojiLimitError: {
                        defaultMessage: "Your workspace has reached the custom emoji limit of {customEmojiLimit}",
                        id: "customEmojiUploadPopup.customEmojiLimit.error"
                    },
                    uploadReplaceButton: {
                        defaultMessage: "Replace",
                        id: "customEmojiUploadPopup.uploadButton.replace"
                    }
                }),
                l = {
                    wrapper: {
                        padding: "0 16px",
                        display: "flex",
                        flexDirection: "column",
                        fontSize: i(699422).J.UIRegular.desktop
                    },
                    title: {
                        marginTop: 12,
                        fontSize: i(699422).J.UIRegular.desktop,
                        color: i(632079).Tj.text.primary,
                        fontWeight: i(699422).Wy.semibold
                    },
                    description: {
                        marginTop: 2,
                        color: i(632079).Tj.text.secondary,
                        fontSize: i(699422).J.UISmall.desktop
                    },
                    errorDescription: {
                        marginTop: 2,
                        color: i(632079).Tj.red.text.accentPrimary,
                        fontSize: i(699422).J.UISmall.desktop
                    },
                    textInputContainer: {
                        marginTop: 20
                    },
                    textInputLabel: {
                        marginBottom: 6,
                        color: i(632079).Tj.text.secondary,
                        fontWeight: i(699422).Wy.medium,
                        fontSize: i(699422).J.UISmall.desktop
                    },
                    nameErrorText: {
                        marginTop: 10,
                        color: i(632079).Tj.red.text.accentPrimary,
                        fontSize: i(699422).J.UISmall.desktop
                    },
                    imageErrorText: {
                        marginTop: 10,
                        color: i(632079).Tj.red.text.accentPrimary,
                        fontSize: i(699422).J.UISmall.desktop,
                        textAlign: "center"
                    },
                    buttonFooter: {
                        marginTop: 16,
                        marginBottom: 12,
                        display: "flex",
                        flexDirection: i(986939).A.isMobile ? "column-reverse" : "row",
                        gap: 8,
                        justifyContent: "space-between",
                        alignItems: "center"
                    },
                    secondaryButton: {
                        color: i(632079).Tj.text.secondary
                    },
                    primaryButton: { ...i(986939).A.isMobile && {
                            width: "100%"
                        }
                    },
                    pastePrompt: {
                        marginTop: 10,
                        color: i(632079).Tj.text.tertiary,
                        textAlign: "center",
                        fontSize: i(699422).J.UISmall.desktop
                    },
                    disabledCheckbox: {
                        stroke: i(632079).Tj.border.secondary
                    },
                    tooltip: {
                        maxWidth: 240,
                        textWrap: "wrap"
                    },
                    divider: {
                        width: 19,
                        height: 1,
                        borderBottom: `1px solid ${i(632079).Tj.border.primaryTranslucent}`
                    },
                    dividerContainer: {
                        display: "flex",
                        gap: 4,
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 10,
                        marginBottom: 10,
                        color: i(632079).Tj.text.tertiary,
                        textAlign: "center",
                        fontSize: i(699422).J.UISmall.desktop
                    }
                };

            function r(e) {
                let t, r = (0, i(533992).v3)(),
                    s = (0, i(109939).tz)(),
                    [c, p] = (0, o.useState)(""),
                    [g, h] = (0, o.useState)(null),
                    [f, y] = (0, o.useState)(null),
                    [x, b] = (0, o.useState)(null),
                    [j, v] = (0, o.useState)(!1),
                    [C, A] = (0, o.useState)(""),
                    k = e.allowUrlPaste && r.device.isDesktop,
                    M = e.allowUrlPaste && i(986939).A.isMobile,
                    {
                        existingEmojiStore: I,
                        isEditing: S
                    } = (0, i(682985).K8)(() => ({
                        existingEmojiStore: i(757573).A.state.store,
                        isEditing: i(757573).A.state.isEditing
                    }), []),
                    w = (0, i(682985).K8)(() => null == I ? void 0 : I.getName(), [I]),
                    P = (0, i(682985).K8)(() => (0, i(63839).vZ)(), []),
                    T = (0, i(682985).K8)(() => {
                        var e;
                        return P ? (null == (e = i(313033).A.getData(r, {
                            spaceId: P.id
                        })) ? void 0 : e.nameToPointerMap) ? ? new Map : new Set
                    }, [r, P]),
                    E = (0, i(682985).K8)(() => i(753281).A.state.emojiByName, []),
                    B = (0, i(682985).K8)(() => (0, i(63839).wA)({
                        spaceStore: P
                    }), [P]),
                    L = (0, i(682985).K8)(() => i(218744).default.getConfigKey("custom_emojis_config", "limit"), []),
                    _ = (0, o.useCallback)(e => {
                        let t = e.replace(/ /g, "-");
                        (p(t), 0 === t.length) ? h(null): i(445621).x.VALID_NAME_REGEX.test(t) ? t.length > 50 ? h(s.formatMessage(n.nameInputLengthError)) : (t !== w || !S) && (T.has(t) || E.hasOwnProperty(t)) ? h(s.formatMessage(n.nameInputDuplicateError)) : h(null) : h(s.formatMessage(n.nameInputCharacterError))
                    }, [w, S, T, E, s]);

                function R(e) {
                    let t = (0, i(728601).pc)({
                            source: e,
                            secureFileConfigRootpath: i(986939).A.secureFileConfig.rootPath,
                            secureFileConfigHostname: i(986939).A.secureFileConfig.hostname
                        }),
                        o = t ? t.link : e,
                        a = new Image;
                    a.src = o, a.onload = () => {
                        y({
                            type: "url",
                            url: o,
                            isExistingImage: !1
                        }), b(null)
                    }, a.onerror = () => {
                        b(k ? n.urlPasteHintImageError : n.urlPasteInputImageError)
                    }
                }(0, o.useEffect)(() => {
                    null != I && I.isDefined() && (_(I.getName()), y({
                        type: "url",
                        url: I.getUrl(),
                        isExistingImage: !0
                    }))
                }, [I, S, _]);
                let U = void 0 !== P && (!e.confirmToAdd || j),
                    D = !S && T.size >= L,
                    F = U ? !c || !f || !!g || c === w && (null == f ? void 0 : f.isExistingImage) && S || D : !f,
                    z = function(e) {
                        let {
                            customEmojiLimitReached: t
                        } = e;
                        return (0, i(960253).I)(() => ({
                            checkboxContainer: {
                                marginTop: 12,
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                fontSize: i(699422).J.UIRegular.desktop,
                                ...t && {
                                    color: i(632079).Tj.text.disabled
                                }
                            }
                        }), [t])
                    }({
                        customEmojiLimitReached: D
                    }),
                    H = e.showTitle ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            style: l.title,
                            children: S ? (0, a.jsx)(i(109939).sA, {
                                id: "customEmojiUploadPopup.title.edit",
                                defaultMessage: "Edit custom emoji"
                            }) : (0, a.jsx)(i(109939).sA, {
                                id: "customEmojiUploadPopup.title.add",
                                defaultMessage: "Add custom emoji"
                            })
                        }), D ? (0, a.jsx)("div", {
                            style: l.errorDescription,
                            children: (0, a.jsx)(i(109939).sA, { ...n.customEmojiLimitError,
                                values: {
                                    customEmojiLimit: L.toLocaleString()
                                }
                            })
                        }) : (0, a.jsx)("div", {
                            style: l.description,
                            children: (0, a.jsx)(i(109939).sA, {
                                id: "customEmojiUploadPopup.description",
                                defaultMessage: "Custom emoji can be used by anyone in your workspace"
                            })
                        })]
                    }) : null,
                    W = (0, a.jsx)(d, {
                        image: f,
                        onFileChanged: e => {
                            null === e ? y(null) : ((null == e ? void 0 : e.name) && ("" === c || (null == f ? void 0 : f.type) === "file" && m(f.file.name) === c) && _(m(e.name)), y({
                                file: e,
                                type: "file"
                            }))
                        },
                        isSavingAsCustomEmoji: U,
                        largeEmoji: e.largeEmoji,
                        hideReplaceButton: e.allowUrlPaste,
                        setError: b,
                        disabled: D && U
                    }),
                    V = (0, i(682985).K8)(() => {
                        let e = i(62276).getKeyboardShortcuts();
                        return (0, i(406410).dK)({
                            name: "paste",
                            shortcuts: e,
                            environment: r
                        })
                    }, [r]),
                    N = k && null === f && !x ? (0, a.jsx)("div", {
                        style: l.pastePrompt,
                        children: (0, a.jsx)(i(109939).sA, {
                            id: "customEmojiUploadPopup.pastePrompt.label",
                            defaultMessage: "or {keyboardShortcut} to paste an image or link",
                            values: {
                                keyboardShortcut: V
                            }
                        })
                    }) : null,
                    O = M && null === f ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("div", {
                            style: l.dividerContainer,
                            children: [(0, a.jsx)("div", {
                                style: l.divider
                            }), (0, a.jsx)(i(109939).sA, {
                                id: "customEmojiUploadPopup.divider.label",
                                defaultMessage: "or"
                            }), (0, a.jsx)("div", {
                                style: l.divider
                            })]
                        }), (0, a.jsx)(i(36481).p, {
                            placeholder: s.formatMessage(n.urlPasteInputPlaceholder),
                            value: C,
                            onChange: e => A(e.target.value),
                            type: "text",
                            autoComplete: "off"
                        })]
                    }) : null,
                    K = x ? (0, a.jsx)("div", {
                        style: l.imageErrorText,
                        children: (0, a.jsx)(i(109939).sA, { ...x,
                            values: {
                                br: (0, a.jsx)("br", {}),
                                keyboardShortcut: V
                            }
                        })
                    }) : null,
                    G = r.device.isDesktop && B && e.confirmToAdd && null !== f ? (0, a.jsx)(i(51831).m, {
                        style: l.tooltip,
                        placement: "bottom",
                        alignment: "start",
                        disableTooltip: !D,
                        content: () => (0, a.jsx)(i(109939).sA, { ...n.customEmojiLimitError,
                            values: {
                                customEmojiLimit: L.toLocaleString()
                            }
                        }),
                        children: e => (0, a.jsxs)("label", { ...e,
                            style: z.checkboxContainer,
                            htmlFor: "confirmToAddCheckbox",
                            children: [(0, a.jsx)(i(349050).S, {
                                id: "confirmToAddCheckbox",
                                size: 14,
                                checked: j,
                                onClick: () => v(!j),
                                disabled: D,
                                stroke: D ? l.disabledCheckbox.stroke : void 0
                            }), (0, a.jsx)(i(109939).sA, {
                                id: "customEmojiUploadPopup.confirmToAddCheckbox.label",
                                defaultMessage: "Add to workspace emoji library"
                            })]
                        })
                    }) : null,
                    Z = U && (!e.allowUrlPaste || e.allowUrlPaste && null !== f) ? (0, a.jsxs)("label", {
                        style: l.textInputContainer,
                        htmlFor: "emojiName",
                        children: [(0, a.jsx)("div", {
                            style: l.textInputLabel,
                            children: (0, a.jsx)(i(109939).sA, {
                                id: "customEmojiUploadPopup.input.label",
                                defaultMessage: "Emoji name"
                            })
                        }), (0, a.jsx)(i(36481).p, {
                            id: "emojiName",
                            placeholder: s.formatMessage(n.nameInputPlaceholder),
                            value: c,
                            onChange: e => _(e.target.value),
                            type: "text",
                            autoFocus: !0,
                            focus: !0,
                            onSubmit: e => {
                                e.preventDefault()
                            },
                            autoComplete: "off",
                            disabled: D
                        }), g ? (0, a.jsx)("div", {
                            style: l.nameErrorText,
                            children: g
                        }) : void 0]
                    }) : null,
                    $ = (0, a.jsxs)("div", {
                        style: l.buttonFooter,
                        children: [e.allowUrlPaste && null !== f ? (0, a.jsx)(i(988022).p, {
                            style: l.secondaryButton,
                            onClick: () => {
                                y(null), b(null), p(""), h(null), v(!1), A("")
                            },
                            children: (0, a.jsx)(i(109939).sA, {
                                id: "customEmojiUploadPopup.backButton.label",
                                defaultMessage: "Back"
                            })
                        }) : r.device.isDesktop ? (0, a.jsx)(i(988022).p, {
                            style: l.secondaryButton,
                            onClick: () => {
                                var t;
                                i(757573).A.dismiss(), null == (t = e.onCancel) || t.call(e)
                            },
                            children: (0, a.jsx)(i(109939).sA, {
                                id: "customEmojiUploadPopup.cancelButton.label",
                                defaultMessage: "Cancel"
                            })
                        }) : null, M && null === f ? (0, a.jsx)(i(912946).A, {
                            colorPalette: "blue",
                            onClick: () => R(C),
                            disabled: 0 === C.length,
                            style: l.primaryButton,
                            children: (0, a.jsx)(i(109939).sA, {
                                id: "customEmojiUploadPopup.nextButton.label",
                                defaultMessage: "Next"
                            })
                        }) : (0, a.jsx)(i(912946).A, {
                            colorPalette: "blue",
                            onClick: function() {
                                if (!F) {
                                    if (!U) {
                                        var t;
                                        null == (t = e.onUploadWithoutSaving) || t.call(e, f);
                                        return
                                    }
                                    S && void 0 !== I ? u({
                                        environment: r,
                                        name: c,
                                        existingEmojiStore: I,
                                        image: f
                                    }) : ((0, i(104310).u)({
                                        event: {
                                            eventName: "create_custom_emoji",
                                            eventProperties: {
                                                entrypoint: e.entrypoint,
                                                is_first_emoji: 0 === T.size
                                            }
                                        }
                                    }), function(e) {
                                        let {
                                            environment: t,
                                            name: o,
                                            currentSpaceStore: n,
                                            uploadFileEventHandlers: l,
                                            image: r
                                        } = e, s = async e => {
                                            let r = (0, i(295447).JH)({
                                                environment: t,
                                                table: i(832375).e4Z,
                                                spaceId: n.getSpaceId()
                                            });
                                            if ((0, i(377796).createAndCommit)({
                                                    userAction: "customEmojiActions.createCustomEmoji",
                                                    environment: t,
                                                    canUndo: !0,
                                                    cellTarget: {
                                                        spaceWithId: r.spaceId
                                                    },
                                                    perform: a => {
                                                        i(124937).eC({
                                                            environment: t,
                                                            table: i(832375).e4Z,
                                                            inMemoryRecordCache: n.inMemoryRecordCache,
                                                            transaction: a,
                                                            value: {
                                                                id: r.id,
                                                                url: e,
                                                                name: o,
                                                                file_ids: [],
                                                                space_id: r.spaceId,
                                                                created_by_id: t.currentUser.id,
                                                                created_by_table: i(832375).oo9,
                                                                created_time: Date.now(),
                                                                alive: !0
                                                            }
                                                        })
                                                    }
                                                }), await i(941701).transactionQueue.awaitRecordTransaction(r), (0, i(427619).k)(r.spaceId), i(436555).D6({
                                                    label: (0, a.jsx)(i(109939).sA, {
                                                        id: "uploadCustomEmoji.success",
                                                        defaultMessage: "{name} has been added to your workspace",
                                                        values: {
                                                            name: o
                                                        }
                                                    })
                                                }), null != l && l.onComplete) {
                                                let e = i(871871).qg.toString(i(871871).qg.fromPointer(r));
                                                l.onComplete(e)
                                            }
                                        };
                                        "file" === r.type ? i(385475).QM({ ...l,
                                            environment: t,
                                            file: r.file,
                                            bucket: "public",
                                            onComplete: s
                                        }) : "url" === r.type ? s(r.url) : (0, i(722371).HB)(r), i(757573).A.dismiss()
                                    }({
                                        environment: r,
                                        name: c,
                                        currentSpaceStore: P,
                                        uploadFileEventHandlers: e.uploadFileEventHandlers,
                                        image: f
                                    }))
                                }
                            },
                            disabled: F,
                            style: l.primaryButton,
                            children: (0, a.jsx)(i(109939).sA, {
                                id: "customEmojiUploadPopup.saveButton.label",
                                defaultMessage: "Save"
                            })
                        })]
                    });
                return t = i(986939).A.isMobile ? {
                    menuType: i(649476).gu.ActionSheet
                } : {
                    menuType: i(649476).gu.Popup,
                    minWidth: 280
                }, (0, a.jsx)(i(747369).A, { ...t,
                    children: (0, a.jsx)(i(369064).N, {
                        debugName: "CustomEmojiUploadPopup",
                        capture: !0,
                        onUp: i(763230).D_,
                        onDown: i(763230).D_,
                        onLeft: i(763230).D_,
                        onRight: i(763230).D_,
                        onBackspace: i(763230).D_,
                        onSelectAll: i(763230).D_,
                        onUndo: i(763230).D_,
                        onRedo: i(763230).D_,
                        onTab: i(763230).D_,
                        onUntab: i(763230).D_,
                        onPaste: k && null === f ? function(e) {
                            e.preventDefault();
                            let t = (0, i(451753).u)(e.clipboardData, i(149646).Dn);
                            if ("invalid_type" === t.type) return void b(n.fileUploadImageError);
                            if ("image" === t.type) {
                                let e = t.file;
                                e.name && ("" === c || (null == f ? void 0 : f.type) === "file" && m(f.file.name) === c) && _(m(e.name)), y({
                                    file: e,
                                    type: "file"
                                }), b(null);
                                return
                            }
                            let o = e.clipboardData.getData("text/plain");
                            o && R(o)
                        } : i(763230).D_,
                        children: (0, a.jsxs)("div", {
                            style: l.wrapper,
                            children: [H, W, N, O, K, G, Z, $]
                        })
                    })
                })
            }
            let s = {
                dropZone: {
                    backgroundColor: i(632079).Tj.background.secondaryTranslucent,
                    borderRadius: 4
                },
                dropZoneInnerEmpty: {
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    gap: 8,
                    padding: 14,
                    color: i(632079).Tj.text.secondary,
                    justifyContent: "center"
                },
                buttonCaption: {
                    fontSize: i(699422).J.UISmall.desktop,
                    fontWeight: i(699422).Wy.medium
                },
                previewLabel: {
                    fontSize: i(699422).J.UISmall.desktop,
                    color: i(632079).Tj.text.secondary,
                    marginBottom: 4
                },
                darkBackground: {
                    background: i(632079).Tj.primaryBlack
                },
                lightBackground: {
                    background: i(632079).Tj.white
                }
            };

            function d(e) {
                let t = (0, i(533992).v3)(),
                    l = (0, i(109939).tz)(),
                    [r, d] = (0, o.useState)(null),
                    {
                        onFileChanged: c,
                        image: u,
                        isSavingAsCustomEmoji: p,
                        largeEmoji: m,
                        hideReplaceButton: g,
                        setError: h,
                        disabled: f
                    } = e;
                (0, o.useEffect)(() => {
                    if (null === u) return void d(null);
                    if ("file" === u.type)
                        if (u.file instanceof File) {
                            let e = new FileReader;
                            e.onload = e => {
                                e.target && "string" == typeof e.target.result && d(e.target.result)
                            }, e.readAsDataURL(u.file)
                        } else u.file.dataURL && d(u.file.dataURL);
                    else "url" === u.type ? d(u.url) : (0, i(722371).HB)(u)
                }, [u]);
                let y = (0, i(960253).I)(() => ({
                        dropZoneInnerWithEmoji: {
                            display: "flex",
                            flexDirection: "column",
                            padding: m ? 16 : 12,
                            ...!g && {
                                paddingBottom: 4
                            },
                            alignItems: "center",
                            gap: 4
                        },
                        emojiImage: {
                            width: m ? 80 : 48,
                            height: m ? 80 : 48,
                            padding: m ? 6 : 8,
                            borderRadius: 8,
                            borderWidth: 1,
                            borderStyle: "solid",
                            borderColor: i(632079).Tj.border.primaryTranslucent,
                            objectFit: p ? "contain" : "cover"
                        }
                    }), [p, m, g]),
                    x = (0, o.useCallback)(e => {
                        h(null), c(e ? ? null)
                    }, [c, h]),
                    b = (0, o.useCallback)(async () => {
                        let e = await i(385475).dA({
                            environment: t,
                            supportsMobileNativeFileUpload: !1,
                            multiple: !1,
                            accept: "image/jpeg, image/png, image/gif, image/webp, image/avif, image/svg+xml"
                        });
                        if (e.length) {
                            if (!(0, i(149646).B7)({
                                    fileMimeType: e[0].type,
                                    allowedType: i(149646).Dn
                                })) return void h(n.fileUploadImageError);
                            x(e[0])
                        }
                    }, [x, h, t]);
                return (0, a.jsx)(i(4458).VP, {
                    marginTop: 20,
                    alignItems: "stretch",
                    children: (0, a.jsx)(i(777875).V, {
                        type: i(149646).Dn,
                        style: s.dropZone,
                        dropTargetKey: "customEmoji",
                        onDropFile: e => {
                            "invalidFileDrop" === e.type ? h(n.fileUploadImageError) : (h(null), e.file && x(e.file))
                        },
                        disabled: f,
                        children: r ? (0, a.jsxs)("div", {
                            style: y.dropZoneInnerWithEmoji,
                            children: [(0, a.jsx)("div", {
                                style: s.previewLabel,
                                children: (0, a.jsx)(i(109939).sA, {
                                    id: "customEmojiUploadPopup.preview.label",
                                    defaultMessage: "Preview"
                                })
                            }), (0, a.jsxs)(i(4458).fI, {
                                alignItems: "center",
                                gap: 6,
                                children: [(0, a.jsx)("img", {
                                    style: { ...y.emojiImage,
                                        ...s.lightBackground
                                    },
                                    src: r,
                                    alt: "Light Mode Image"
                                }), (0, a.jsx)("img", {
                                    style: { ...y.emojiImage,
                                        ...s.darkBackground
                                    },
                                    src: r,
                                    alt: "Dark Mode Image"
                                })]
                            }), g ? void 0 : (0, a.jsx)(i(988022).p, {
                                colorPalette: "gray",
                                iconLeading: {
                                    icon: i(670989).l,
                                    size: "xs"
                                },
                                onClick: b,
                                "aria-label": l.formatMessage(n.uploadReplaceButton),
                                disabled: f,
                                disabledFeedback: f,
                                children: (0, a.jsx)("div", {
                                    style: s.buttonCaption,
                                    children: l.formatMessage(n.uploadReplaceButton)
                                })
                            })]
                        }) : (0, a.jsxs)(i(988022).p, {
                            style: s.dropZoneInnerEmpty,
                            onClick: b,
                            disabled: f,
                            disabledFeedback: f,
                            children: [(0, a.jsx)(i(16275).I, {
                                icon: i(937233).M,
                                colorVariant: "secondary"
                            }), (0, a.jsx)(i(109939).sA, {
                                id: "customEmojiUploadPopup.uploadButton.label",
                                defaultMessage: "Upload an image"
                            })]
                        })
                    })
                })
            }
            let c = function() {
                let e = (0, i(109939).tz)(),
                    {
                        open: t,
                        originRect: o,
                        entrypoint: n,
                        isEditing: l
                    } = (0, i(682985).K8)(() => i(757573).A.state.open ? {
                        open: !0,
                        originRect: i(757573).A.state.originRect,
                        entrypoint: i(757573).A.state.entrypoint,
                        isEditing: i(757573).A.state.isEditing
                    } : {
                        open: !1,
                        originRect: void 0,
                        entrypoint: void 0,
                        isEditing: !1
                    }, []),
                    s = (0, i(682985).K8)(() => {
                        if (i(757573).A.state.open) return i(757573).A.state.uploadFileEventHandlers
                    }, []);
                return (0, a.jsx)(i(182718).zD, {
                    popupType: i(423291).n.Popup,
                    open: t,
                    originRect: o,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "start",
                    onDismiss: () => i(757573).A.dismiss(),
                    onClosed: () => i(757573).A.reset(),
                    ariaLabel: e.formatMessage(l ? {
                        id: "customEmojiUploadPopup.ariaLabel.edit",
                        defaultMessage: "Edit custom emoji"
                    } : {
                        id: "customEmojiUploadPopup.ariaLabel.add",
                        defaultMessage: "Add custom emoji"
                    }),
                    content: () => (0, a.jsx)(r, {
                        allowUrlPaste: !1,
                        largeEmoji: !1,
                        showTitle: !0,
                        confirmToAdd: !1,
                        entrypoint: n,
                        uploadFileEventHandlers: s
                    }),
                    sameWidthAsOrigin: !1,
                    trapFocus: !0
                })
            };
            async function u(e) {
                let {
                    environment: t,
                    name: o,
                    existingEmojiStore: n,
                    image: l
                } = e, r = n.getModel();
                if (r) {
                    if (l.isExistingImage)(0, i(377796).createAndCommit)({
                        userAction: "customEmojiActions.rename",
                        environment: t,
                        canUndo: !0,
                        cellTarget: {
                            spaceWithId: n.pointer.spaceId
                        },
                        perform: e => {
                            (0, i(421439).y4)({
                                store: n,
                                operation: r.ops.rename(o),
                                transaction: e
                            })
                        }
                    }), await i(941701).transactionQueue.awaitRecordTransaction(n.pointer), (0, i(427619).k)(n.pointer.spaceId), i(436555).D6({
                        label: (0, a.jsx)(p, {
                            name: o
                        })
                    });
                    else {
                        let e = async e => {
                            (0, i(377796).createAndCommit)({
                                userAction: "customEmojiActions.replaceImageAndRename",
                                environment: t,
                                canUndo: !0,
                                cellTarget: {
                                    spaceWithId: n.pointer.spaceId
                                },
                                perform: t => {
                                    (0, i(421439).y4)({
                                        store: n,
                                        operation: r.ops.setUrl(e),
                                        transaction: t
                                    }), (0, i(421439).y4)({
                                        store: n,
                                        operation: r.ops.rename(o),
                                        transaction: t
                                    })
                                }
                            }), await i(941701).transactionQueue.awaitRecordTransaction(n.pointer), (0, i(427619).k)(n.pointer.spaceId), i(436555).D6({
                                label: (0, a.jsx)(p, {
                                    name: o
                                })
                            })
                        };
                        "file" === l.type ? i(385475).QM({
                            environment: t,
                            file: l.file,
                            bucket: "public",
                            onComplete: e
                        }) : "url" === l.type ? e(l.url) : (0, i(722371).HB)(l)
                    }
                    i(757573).A.dismiss()
                }
            }

            function p({
                name: e
            }) {
                return (0, a.jsx)(i(109939).sA, {
                    id: "editCustomEmoji.success",
                    defaultMessage: "{name} has been edited",
                    values: {
                        name: e
                    }
                })
            }

            function m(e) {
                let t = e,
                    o = e.lastIndexOf("."); - 1 !== o && (t = e.slice(0, o));
                let a = RegExp(`[^${i(445621).x.VALID_NAME_TOKENS}]`, "gu");
                return t.toLocaleLowerCase().replace(a, "-")
            }
        },
        269368: (e, t, i) => {
            i.d(t, {
                N: () => o
            });

            function o(e) {
                let {
                    messages: t,
                    values: o
                } = e;
                return i(381453).LG(t, e => ({ ...e,
                    interpolatedValues: o
                }))
            }
        },
        276889: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => o,
                unsplashTintableIcon: () => a
            }), i(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1 1 18 18",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M6.625 6.063V1h6.75v5.063zm6.75 2.812H19V19H1V8.875h5.625v5.063h6.75z"
                    })
                },
                a = (0, i(104509).wt)("unsplashTintable", o, "tintable")
        },
        283161: (e, t, i) => {
            i.d(t, {
                z: () => o
            });

            function o(e) {
                return "user" === e.type ? {
                    type: "user_permission",
                    role: (0, i(729052).ps)(e.membershipType),
                    user_id: e.userId,
                    invite_id: e.inviteId
                } : "bot" === e.type ? {
                    type: "bot_permission",
                    role: (0, i(611042).rf)(e.membershipType),
                    bot_id: e.botId
                } : void(0, i(722371).HB)(e)
            }
        },
        319681: (e, t, i) => {
            i.d(t, {
                e: () => n
            }), i(296540);
            var o = i(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.97 2.72 18.06 14.56",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M3.893 2.875a.626.626 0 0 1 .79-.02l.092.088.126.146.016.035.072.105 11.273 13.15a.624.624 0 0 1-1.036.678l-1.615-1.884c-1.12.408-2.339.633-3.611.633-3.757 0-7.049-1.946-8.707-4.843l-.155-.283a1.46 1.46 0 0 1 0-1.359l.155-.283c.89-1.554 2.249-2.835 3.898-3.688L3.826 3.757l-.072-.105a.626.626 0 0 1 .14-.777M6.031 6.33c-1.564.744-2.842 1.913-3.653 3.33l-.134.243a.21.21 0 0 0 0 .197l.134.243c1.426 2.49 4.292 4.214 7.622 4.214.958 0 1.877-.144 2.734-.406l-1.1-1.284a3.3 3.3 0 0 1-1.634.438l-.17-.004a3.307 3.307 0 0 1-3.132-3.133l-.004-.17c0-.777.269-1.492.718-2.056zm2.904 3.387q-.037.135-.038.281a1.104 1.104 0 0 0 1.218 1.097zM10 4.194c3.878 0 7.26 2.075 8.862 5.127l.074.164c.125.332.125.7 0 1.032l-.074.163a9.3 9.3 0 0 1-2.987 3.327l-.82-.955c1.15-.764 2.084-1.779 2.7-2.953l.02-.048a.2.2 0 0 0 0-.1l-.02-.049C16.382 7.282 13.438 5.445 10 5.445q-.705 0-1.378.1l-.94-1.098A10.7 10.7 0 0 1 10 4.194"
                        }), (0, o.jsx)("path", {
                            d: "M10.17 6.694a3.307 3.307 0 0 1 3.136 3.303l-.005.17a3.3 3.3 0 0 1-.116.702L9.624 6.713A3 3 0 0 1 10 6.691z"
                        })]
                    })
                },
                n = (0, i(104509).wt)("eyeSlash", a, "default")
        },
        333680: (e, t, i) => {
            i.d(t, {
                HR: () => eR,
                aD: () => eA,
                Ay: () => el
            }), i(898992), i(672577), i(581454);
            var o, a = i(296540),
                n = i(474848);
            let l = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.85 2.34 12.3 11.32",
                    directional: !0,
                    svg: (0, n.jsx)("path", {
                        d: "M11.982 2.526a.625.625 0 0 0-.884.884l.915.915H10.93a3.83 3.83 0 0 0-3.27 1.837l-.386.635-.388-.637a3.83 3.83 0 0 0-3.268-1.837H2.48a.625.625 0 0 0 0 1.25h1.14c.9 0 1.733.469 2.2 1.237L6.543 8 5.82 9.19a2.58 2.58 0 0 1-2.2 1.237H2.48a.625.625 0 1 0 0 1.25h1.14A3.83 3.83 0 0 0 6.887 9.84l.388-.638.386.636a3.83 3.83 0 0 0 3.268 1.837h1.085l-.916.915a.625.625 0 1 0 .884.884l1.98-1.98a.625.625 0 0 0 0-.884l-1.98-1.98a.625.625 0 0 0-.884.884l.911.91h-1.08a2.58 2.58 0 0 1-2.2-1.236L8.006 8l.723-1.188a2.58 2.58 0 0 1 2.2-1.237h1.08l-.91.911a.625.625 0 1 0 .883.884l1.98-1.98a.625.625 0 0 0 0-.884z"
                    })
                },
                r = (0, i(104509).wt)("arrowIntersectRightSmall", l, "small");

            function s({
                render: e,
                threshold: t,
                onSwipeLeft: o,
                onSwipeRight: n,
                onSwipeDown: l,
                onSwipeUp: r
            }) {
                let d = (0, a.useRef)(),
                    c = (0, a.useRef)();
                return (0, i(682985).K8)(() => e({
                    onTouchStart: e => {
                        d.current = e.touches[0].clientX, c.current = e.touches[0].clientY
                    },
                    onTouchMove: e => {
                        if (void 0 === d.current) return;
                        let i = t || 120,
                            a = d.current - e.touches[0].clientX;
                        if (a > i && o && (o(), d.current = void 0), a < -1 * i && n && (n(), d.current = void 0), void 0 === c.current) return;
                        let s = c.current - e.touches[0].clientY;
                        s < -1 * i && l && (l(), c.current = void 0), s > i && r && (r(), c.current = void 0)
                    },
                    onTouchEnd: () => {
                        d.current = void 0, c.current = void 0
                    },
                    onTouchCancel: () => {
                        d.current = void 0, c.current = void 0
                    }
                }), [e, t, o, n, l, r])
            }
            var d = () => i(546605);
            class c extends d().Store {
                getInitialState() {
                    return {
                        allIcons: {},
                        recentIcons: [],
                        loadIconCount: 0
                    }
                }
            }
            let u = new c,
                p = i.p + "d47275c1c9fcf85d.png",
                m = i.p + "75f79a6c45af5065.png",
                g = i.p + "2c10eedf5c330425.png",
                h = i.p + "6444abbb6680c85f.png",
                f = i.p + "4d68611c834e8942.png",
                y = {
                    iconButton: {
                        width: 96,
                        height: 96,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%"
                    },
                    buttonGrid: {
                        display: "grid",
                        gridTemplateColumns: "repeat(9, 24px)",
                        gap: 12
                    },
                    shapeButton: {
                        width: 24,
                        height: 24,
                        appearance: "none",
                        border: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: i(632079).Tj.icon.secondary,
                        padding: 0,
                        background: "transparent",
                        borderRadius: "50%",
                        position: "relative"
                    },
                    increasedButtonHitTarget: {
                        position: "absolute",
                        inset: -6,
                        background: "transparent"
                    },
                    shapeButtonHovered: {
                        outline: `2px solid ${i(632079).Tj.border.primaryTranslucent}`,
                        outlineOffset: 2,
                        background: "transparent"
                    },
                    colorButton: {
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        appearance: "none",
                        border: "none",
                        position: "relative"
                    },
                    colorButtonHovered: {
                        outline: `2px solid ${i(632079).Tj.border.primaryTranslucent}`,
                        outlineOffset: 2
                    },
                    separator: {
                        width: "100%",
                        height: 1,
                        backgroundColor: i(632079).Tj.border.secondary
                    }
                };

            function x(e) {
                let {
                    tab: t
                } = e, [o, l] = (0, a.useState)(i(337222).WJ), [r, s] = (0, a.useState)(i(337222).i), [d, c] = (0, a.useState)(), [u, p] = (0, a.useState)(), m = (0, a.useMemo)(() => {
                    let e = d ? ? o,
                        t = u ? ? r;
                    return (0, i(337222).Oy)({
                        baseUrl: i(986939).A.domainBaseUrl || "",
                        shape: e,
                        color: t
                    })
                }, [o, r, d, u]);
                (0, a.useEffect)(() => {
                    if (t.agentIcon) {
                        let {
                            shape: e,
                            color: o
                        } = (0, i(337222).uX)(t.agentIcon);
                        l(e), s(o)
                    }
                }, [t.agentIcon]);
                let g = (0, i(960253).I)(() => ({
                        shapeButtonSelected: {
                            outline: `2px solid ${i(632079).Tj[r].border.primaryTranslucent}`,
                            outlineOffset: 2,
                            color: (0, i(337222).hI)(r),
                            background: "transparent"
                        },
                        colorButtonSelected: {
                            outline: `2px solid ${(0,i(650342).X4)((0,i(337222).hI)(r),.3)}`,
                            outlineOffset: 2
                        }
                    }), [r]),
                    h = (0, a.useCallback)((e, o) => {
                        let a = i(986939).A.domainBaseUrl || "";
                        l(e), s(o), t.onChange((0, i(337222).Oy)({
                            baseUrl: a,
                            shape: e,
                            color: o
                        }), {
                            keepVisible: !0
                        })
                    }, [t]),
                    f = (0, a.useCallback)(e => {
                        c(e)
                    }, []),
                    x = (0, a.useCallback)(() => {
                        c(void 0)
                    }, []),
                    b = (0, a.useCallback)(e => {
                        p(e)
                    }, []),
                    j = (0, a.useCallback)(() => {
                        p(void 0)
                    }, []);
                return (0, n.jsxs)(i(4458).VP, {
                    padding: 20,
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 20,
                    height: "100%",
                    children: [(0, n.jsx)(i(988022).p, {
                        style: y.iconButton,
                        onClick: () => h(o, r),
                        children: (0, n.jsx)("img", {
                            src: m,
                            alt: `${u??r} ${d??o}`,
                            width: 96,
                            height: 96
                        })
                    }), (0, n.jsx)("div", {
                        role: "separator",
                        style: y.separator
                    }), (0, n.jsx)("div", {
                        style: y.buttonGrid,
                        children: i(337222).PF.map(e => (0, n.jsxs)(i(988022).p, {
                            "aria-label": e,
                            hoveredStyle: o === e ? g.shapeButtonSelected : y.shapeButtonHovered,
                            pressedStyle: o === e ? g.shapeButtonSelected : y.shapeButtonHovered,
                            style: { ...y.shapeButton,
                                ...o === e && g.shapeButtonSelected
                            },
                            onClick: () => h(e, r),
                            onMouseEnter: () => f(e),
                            onMouseLeave: x,
                            children: [(0, n.jsx)("div", {
                                style: y.increasedButtonHitTarget
                            }), (0, n.jsx)("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 1020 1020",
                                fill: "currentColor",
                                children: function(e) {
                                    switch (e) {
                                        case "triangle":
                                            return (0, n.jsx)("path", {
                                                d: "M769.398 106.766C780.333 100.443 793.801 100.309 804.874 106.449C816.121 112.687 823.187 124.451 823.41 137.31L835.982 864.884C836.204 877.743 829.548 889.745 818.523 896.367C807.497 902.989 793.777 903.226 782.529 896.989L146.144 544.09C134.896 537.852 127.831 526.088 127.609 513.228C127.387 500.369 134.041 488.367 145.067 481.745L768.879 107.071L769.398 106.766Z"
                                            });
                                        case "square":
                                            return (0, n.jsx)("path", {
                                                d: "M700.418 111.352C719.253 106.467 738.655 117.472 744.046 136.287L905.248 698.836C910.724 717.948 899.67 737.883 880.557 743.36L318.008 904.561C298.896 910.038 278.961 898.982 273.484 879.87L112.283 317.322C106.806 298.209 117.861 278.274 136.974 272.797L699.522 111.596L700.418 111.352Z"
                                            });
                                        case "chat":
                                            return (0, n.jsx)("path", {
                                                d: "M519.493 133.271C519.766 133.278 520.038 133.286 520.311 133.299C685.085 140.795 780.612 205.272 832.655 291.229C882.688 373.864 888.768 470.538 888.818 536.79C888.825 537.072 888.83 537.354 888.83 537.637C888.827 598.578 872.33 646.848 842.298 683.579C812.632 719.862 772.436 741.611 730.655 754.842C655.602 778.608 565.923 777.351 501.479 776.992L395.646 898.952C385.798 910.3 369.938 914.34 355.862 909.084C341.787 903.828 332.455 890.382 332.455 875.357V754.77C271.022 740.986 222.745 721.232 190.079 684.683C151.69 641.73 141.375 583.131 141.375 509.861C141.375 420.559 171.356 326.704 234.14 254.658C297.601 181.834 392.94 133.262 518.675 133.262L519.493 133.271Z"
                                            });
                                        case "check":
                                            return (0, n.jsx)("path", {
                                                d: "M468.711 600.914L396.779 495.019C385.607 478.572 363.218 474.296 346.771 485.468C330.325 496.64 326.049 519.028 337.22 535.475L443.057 691.285C450.181 701.772 462.295 707.738 474.95 706.994C487.605 706.25 498.937 698.904 504.782 687.655L743.923 227.402C750.117 215.48 762.434 208 775.868 208H789.144L790.067 208.012C799.583 208.255 808.63 212.261 815.213 219.172C822.007 226.306 825.581 235.913 825.101 245.753L799.134 778.541C798.199 797.719 782.377 812.788 763.177 812.788H230.843C220.992 812.788 211.57 808.751 204.775 801.617C197.981 794.483 194.407 784.876 194.886 775.036L220.854 242.247L220.909 241.352C222.284 222.602 237.911 208.001 256.811 208H646.52C658.523 208 666.252 220.726 660.718 231.377L468.711 600.914Z"
                                            });
                                        case "hat":
                                            return (0, n.jsx)("path", {
                                                d: "M545.576 127.394C552.866 114.38 567.457 107.186 582.262 109.381C597.302 111.611 609.32 123.05 612.289 137.962L694.202 549.355C717.555 550.212 748.479 552.253 775.634 560.048C796.917 566.157 819.769 576.607 837.766 595.458C856.464 615.044 867.315 640.983 868.456 672.703C869.877 712.188 850.771 742.983 825.002 765.135C800.014 786.616 767.217 801.585 734.562 812.241C668.991 833.639 592.877 841.146 547.656 841.906C501.52 842.681 410.552 834.844 328.263 812.971C287.162 802.047 245.963 787.044 213.179 766.398C180.916 746.081 151.066 716.529 144.759 674.869C140.325 645.581 143.68 618.576 156.4 595.648C169.131 572.702 189.111 557.684 210.875 548.498C245.002 534.093 286.797 532.491 326.446 537.26L545.233 128.018L545.576 127.394Z"
                                            });
                                        case "globe":
                                            return (0, n.jsxs)(n.Fragment, {
                                                children: [(0, n.jsx)("path", {
                                                    d: "M234.479 101.544C248.538 87.4853 271.333 87.4854 285.392 101.544C299.45 115.603 299.45 138.397 285.392 152.456C147.537 290.311 147.537 513.819 285.392 651.674C423.247 789.529 646.754 789.529 784.609 651.674C798.668 637.615 821.462 637.615 835.521 651.674C849.579 665.733 849.579 688.526 835.521 702.585C761.699 776.407 667.476 817.393 571 825.545V876.929H678.304C698.186 876.929 714.304 893.047 714.304 912.929C714.304 932.811 698.186 948.929 678.304 948.929H538.121C537.092 949.017 536.052 949.065 535 949.065C533.948 949.065 532.908 949.017 531.879 948.929H391.918C372.036 948.929 355.918 932.811 355.918 912.929C355.918 893.047 372.036 876.929 391.918 876.929H499V825.545C402.524 817.393 308.301 776.407 234.479 702.585C68.5069 536.612 68.5068 267.517 234.479 101.544Z"
                                                }), (0, n.jsx)("path", {
                                                    d: "M535 110.065C696.267 110.065 827 240.798 827 402.065C827 563.332 696.267 694.065 535 694.065C373.733 694.065 243 563.332 243 402.065C243 240.797 373.733 110.065 535 110.065Z"
                                                })]
                                            });
                                        case "plug":
                                            return (0, n.jsx)("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "M646.088 109C677.257 109 701.723 134.329 700.609 165.471L693.771 357.176H826.411L827.326 357.188C836.763 357.428 845.744 361.368 852.316 368.179C859.1 375.209 862.736 384.696 862.388 394.46L857.157 541.158C855.174 596.706 819.67 627.812 786.416 647.364C770.167 656.917 752.344 664.976 737.566 671.887C721.867 679.229 709.26 685.424 699.227 692.225C677.171 707.177 664.302 717.394 655.457 730.718C647.115 743.283 640.189 762.136 638.923 797.607L636.113 876.312C635.421 895.682 619.517 911.028 600.135 911.028H387.604C377.834 911.028 368.483 907.056 361.699 900.025C354.914 892.994 351.279 883.507 351.627 873.743L354.438 795.039C355.708 759.447 350.066 741.032 343.027 729.152C335.548 716.53 323.992 706.7 303.004 691.75L302.126 691.131C292.967 684.751 281.306 678.811 266.575 671.685C252.358 664.807 234.94 656.673 219.207 647.018C203.293 637.252 186.459 624.414 173.885 606.417C160.783 587.664 153.563 565.093 154.508 538.592L159.739 391.894L159.783 390.989C160.928 372.048 176.636 357.176 195.716 357.176H330.919L337.778 164.899C338.884 133.982 364.798 109 395.745 109C426.914 109 451.379 134.329 450.265 165.471L443.427 357.176H581.263L588.122 164.899C589.228 133.982 615.142 109 646.088 109ZM442.133 159.414C442.124 159.308 442.117 159.201 442.107 159.095L442.102 159.048C442.113 159.17 442.123 159.292 442.133 159.414Z"
                                            });
                                        case "apple":
                                            return (0, n.jsx)("path", {
                                                d: "M623.016 70.9998C667.836 70.9248 716.816 86.2103 750.704 120.77C757.663 127.867 761.379 137.527 760.969 147.458C760.56 157.389 756.062 166.709 748.543 173.21C714.656 202.504 669.51 216.694 626.218 216.995C601.96 217.163 576.99 212.962 553.871 203.66L537.313 287.297C558.378 277.754 583.878 270.252 611.481 271.059L611.48 271.06C668.571 272.728 712.292 291.902 741.759 310.825C756.452 320.261 767.659 329.664 775.349 336.893C779.202 340.515 782.198 343.616 784.333 345.936C785.401 347.097 786.256 348.067 786.898 348.811C787.114 349.062 787.305 349.288 787.472 349.487L788.311 350.458C788.98 351.242 789.864 352.3 790.926 353.621C793.047 356.26 795.893 359.965 799.159 364.645C805.665 373.968 813.988 387.37 821.563 404.093C836.661 437.421 849.501 485.645 836.889 541.056C827.993 580.141 806.44 643.586 785.549 699.576C774.984 727.888 764.352 754.923 755.201 776.841C746.448 797.804 738.063 816.513 732.128 826.386C710.887 861.713 670.786 901.293 608.057 908.327C563.544 913.318 527.479 896.274 504.085 879.979C500.717 877.634 497.559 875.268 494.619 872.936C491.24 875.72 487.583 878.571 483.663 881.399C460.67 897.988 424.21 917.103 380.788 912.233C316.348 905.006 276.85 859.607 256.876 826.386C250.94 816.513 242.556 797.802 233.803 776.839C224.653 774.921 214.022 747.887 203.459 719.575C182.568 663.584 161.017 600.143 152.116 561.061L152.114 561.056C139.503 505.645 152.342 457.421 167.44 424.093C175.016 407.37 183.339 393.968 189.844 384.645C193.11 379.966 195.957 376.26 198.078 373.621C199.139 372.3 200.023 371.242 200.692 370.458C200.998 370.1 201.259 369.798 201.471 369.555C201.652 369.34 201.862 369.092 202.102 368.813C202.744 368.069 203.6 367.1 204.668 365.939C206.803 363.619 209.799 360.517 213.651 356.895C221.341 349.665 232.548 340.261 247.241 330.825C276.707 311.901 320.427 292.728 377.522 291.06C410.516 290.095 440.123 300.991 462.762 313.124L492.184 144.509C492.539 142.719 493.021 140.987 493.618 139.32C494.657 133.776 497.012 128.406 500.721 123.697C530.121 86.3792 578.661 71.0741 623.016 70.9998Z"
                                            });
                                        case "bulb":
                                            return (0, n.jsxs)(n.Fragment, {
                                                children: [(0, n.jsx)("path", {
                                                    d: "M602.444 816.46C592.561 862.564 551.827 895.5 504.677 895.5C464.547 895.5 414.834 895.5 368.449 895.5C323.85 895.5 291.213 853.479 302.23 810.263L302.23 810.263C303.994 803.343 310.227 798.5 317.369 798.5H591.449C599.089 798.5 604.784 805.545 603.182 813.015L602.444 816.46Z"
                                                }), (0, n.jsx)("path", {
                                                    d: "M535.11 145.015C619.554 144.253 707.417 170.85 771.57 220.822C836.634 271.504 878.69 347.972 862.605 442.072C855.528 485.601 841.532 517.345 821.912 543.153C803.014 568.013 779.904 585.779 759.603 601.667L759.602 601.666C721.617 631.395 682.213 647.002 661.575 658.191C650.275 664.318 643.273 669.409 638.322 674.982C633.767 680.109 629.535 687.241 626.699 699.553C625.192 706.099 623.54 713.617 621.802 721.765C620.22 729.178 613.687 734.5 606.107 734.5H333.223C325.616 734.5 319.947 727.515 321.268 720.023C324.575 701.263 326.715 681.747 325.78 663.085C325.069 648.9 321.738 644.004 317.822 640.708C310.039 634.158 262.144 603.61 227.902 563.12C190.913 519.382 160.755 456.175 179.929 373.387C201.425 280.541 257.914 222.563 325.832 188.702C392.328 155.55 469.218 145.611 535.11 145.015Z"
                                                })]
                                            });
                                        case "file":
                                            return (0, n.jsx)("path", {
                                                d: "M337.613 194C365.958 194 390.282 201.976 406.764 221.675C422.718 240.743 423.984 265.342 429.022 288.568H776.371C816.833 288.568 847.894 302.035 867.997 326.272C887.038 349.23 892 376.791 892 397.602C892 414.422 887.992 508.792 884.083 597.216C881.513 655.363 878.886 713.508 876.197 771.649V771.653C875.308 790.868 859.472 805.99 840.236 805.99H165.739C165.257 806 164.773 806.003 164.286 805.993C144.686 805.604 129 789.604 129 770V769.99C129 769.518 129.501 768.573 129.028 768.573L150.449 228.573C151.215 209.261 167.094 194 186.421 194H337.613Z"
                                            });
                                        case "ghost":
                                            return (0, n.jsx)("path", {
                                                d: "M155.626 602.783C213.044 682.296 244.467 553.003 248.426 602.783C257.601 718.161 304.552 790.404 368.696 705.413C410.317 650.264 368.746 878.704 500.191 860.962C595.236 848.133 597.038 685.532 638.532 723.052C767.991 840.115 748.688 573.654 795.253 636.458C846.377 705.413 929.663 583.508 941.326 459.609C947.416 394.913 918.731 339.544 769.596 370.261C683.055 388.085 730.705 139.87 562.731 121.701C433.284 107.698 406.752 260.123 352.646 326.682C298.616 393.146 187.823 285.269 146.131 370.261C104.439 455.251 129.295 566.318 155.626 602.783Z"
                                            });
                                        case "mailbox":
                                            return (0, n.jsx)("path", {
                                                d: "M494.208 69C499.373 69 504.289 71.2187 507.706 75.0918C511.123 78.9651 512.712 84.1204 512.067 89.2451L500.57 180.725C499.439 189.727 491.784 196.48 482.711 196.48H379.131L375.469 273.96H744.281C774.977 273.96 813.112 287.033 843.588 317.277C874.925 348.377 896.271 395.627 896.272 460.479C896.272 551.445 896.272 460.479 888.084 733.135C887.097 752.271 871.293 767.28 852.132 767.28H609.793V907.471C609.793 927.353 593.675 943.471 573.793 943.471H473.113C453.231 943.471 437.114 927.353 437.113 907.471V767.28H159.711C149.537 767.28 139.838 762.974 133.013 755.429C126.188 747.883 122.874 737.802 123.892 727.679C123.932 727.683 152.182 473.427 158.405 444.659C164.678 415.66 178.048 375.679 199.87 341.964C220.563 309.994 254.372 275.714 303.318 274.025C306.906 217.712 310.784 141.823 315.136 85.6104L315.176 85.1729C316.107 76.0123 323.827 69.0002 333.082 69H494.208Z"
                                            });
                                        case "rock":
                                            return (0, n.jsx)("path", {
                                                d: "M660.706 168.198C679.184 168.198 696.525 177.129 707.256 192.173L904.892 469.252C914.397 482.577 917.736 499.338 914.062 515.289L851.302 787.778C845.323 813.733 822.216 832.122 795.582 832.122H265.072C243.928 832.122 224.511 820.453 214.586 801.784L110.289 605.594C102.532 591.002 101.466 573.766 107.37 558.329L242.523 204.95L242.61 204.727L242.846 204.128L242.928 203.922C251.653 182.363 272.601 168.198 295.929 168.198H660.706Z"
                                            });
                                        case "sign":
                                            return (0, n.jsx)("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "M538.859 102.999C548.94 102.999 558.559 107.227 565.377 114.652C572.195 122.078 575.587 132.023 574.728 142.067L568.494 214.957H713.61C722.451 214.957 730.984 218.211 737.58 224.099L923.58 390.099C931.482 397.151 935.878 407.325 935.597 417.912C935.316 428.499 930.387 438.426 922.122 445.049L708.122 616.549C701.735 621.667 693.795 624.457 685.61 624.457H533.479L510.728 890.524C509.135 909.15 493.552 923.458 474.859 923.458H388.359C378.278 923.458 368.658 919.23 361.84 911.805C355.023 904.379 351.631 894.435 352.49 884.391L374.716 624.457H200.61C190.545 624.457 180.939 620.243 174.122 612.838C167.306 605.432 163.901 595.511 164.733 585.48L192.733 247.98L192.816 247.109C194.769 228.871 210.174 214.957 228.61 214.957H409.732L416.49 135.933L416.575 135.063C418.57 116.864 433.957 102.999 452.359 102.999H538.859Z"
                                            });
                                        case "book":
                                            return (0, n.jsx)("path", {
                                                d: "M155.936 241.898C157.178 225.525 168.461 211.462 184.385 207.453C396.964 153.936 471.229 258.474 510.572 323.289C547.309 259.936 646.798 156.773 848.993 207.527C864.681 211.465 875.8 225.267 877.21 241.38L918.57 714C920.215 732.8 908.365 750.149 890.254 755.455L521.959 863.353C514.53 865.529 506.627 865.481 499.226 863.214L147.961 755.607C130.256 750.183 118.673 733.214 120.073 714.749L155.936 241.898Z"
                                            });
                                        case "alarm":
                                            return (0, n.jsxs)(n.Fragment, {
                                                children: [(0, n.jsx)("path", {
                                                    d: "M503.988 261.705C685.331 261.705 832.339 408.712 832.339 590.054C832.339 771.397 685.331 918.405 503.988 918.405C322.646 918.405 175.639 771.397 175.639 590.054C175.639 408.712 322.646 261.705 503.988 261.705Z"
                                                }), (0, n.jsx)("path", {
                                                    d: "M645.24 175.03C689.396 137.837 754.54 132.889 804.572 167.008C854.604 201.128 873.783 263.58 855.282 318.268C848.91 337.102 825.932 341.305 809.506 330.103L650.936 221.966C634.511 210.764 630.034 187.838 645.24 175.03Z"
                                                }), (0, n.jsx)("path", {
                                                    d: "M236.286 144.983C288.732 114.703 353.322 124.514 394.571 164.907C408.777 178.817 402.596 201.344 385.378 211.286L219.16 307.251C201.942 317.193 179.343 311.282 174.398 292.024C160.042 236.105 183.84 175.262 236.286 144.983Z"
                                                })]
                                            });
                                        case "puzzle":
                                            return (0, n.jsx)("path", {
                                                d: "M841.889 338.063C801.785 342.687 770.329 377.999 739.114 393.103L717.31 202.68C714.821 180.94 695.171 165.339 673.432 167.845L577.599 178.893C564.431 180.411 555.209 192.375 554.493 205.61C550.847 273.069 499.065 330.069 429.716 338.064C360.366 346.058 296.973 302.335 278.073 237.476C274.365 224.75 262.663 215.198 249.495 216.716L153.429 227.79C131.781 230.286 116.218 249.802 118.601 271.462L178.959 819.881C181.36 841.699 201.051 857.402 222.857 854.888L742.442 794.991C764.185 792.485 779.772 772.814 777.241 751.074L759.253 596.506C795.503 596.506 834.114 623.207 874.227 618.582C951.665 609.656 1004.52 539.933 995.595 462.468C986.664 385.003 919.327 329.137 841.889 338.063Z"
                                            });
                                        case "unbrella":
                                            return (0, n.jsx)("path", {
                                                d: "M517.241 96.1883C519.899 69.8123 543.434 50.5847 569.81 53.242C596.186 55.8993 615.414 79.4353 612.757 105.811C611.656 116.737 610.143 130.765 608.297 147.291C813.616 195.378 890.768 400.318 910.933 522.923C914.596 545.19 895.154 563.451 872.748 560.764C740.235 544.873 648.47 533.971 563.006 523.741C548.327 641.733 534.982 746.3 530.037 781.65C522.777 833.545 499.836 874.327 466.278 900.905C433.153 927.141 392.571 937.172 354.459 932.827C316.448 928.494 279.515 909.652 254.667 876.7C229.318 843.083 219.517 798.786 228.838 749.568C233.771 723.522 258.884 706.405 284.931 711.338C310.977 716.27 328.093 741.385 323.161 767.431C318.231 793.463 324.231 809.503 331.317 818.901C338.905 828.964 351.045 835.815 365.332 837.444C379.519 839.061 394.462 835.322 406.675 825.649C418.455 816.319 430.668 799.052 434.963 768.349C439.852 733.399 453.103 629.543 467.691 512.285C382.213 501.962 290.134 490.693 157.134 474.167C134.313 471.331 119.766 448.075 128.938 426.987C186.588 294.45 307.137 138.458 512.859 136.944C514.676 120.687 516.162 106.903 517.241 96.1883Z"
                                            })
                                    }
                                }(e)
                            })]
                        }, e))
                    }), (0, n.jsx)("div", {
                        role: "separator",
                        style: y.separator
                    }), (0, n.jsx)("div", {
                        style: y.buttonGrid,
                        children: i(337222).tR.map(e => {
                            let t = (0, i(337222).hI)(e);
                            return (0, n.jsx)(i(988022).p, {
                                "aria-label": e,
                                hoveredStyle: { ...r === e ? g.colorButtonSelected : y.colorButtonHovered,
                                    background: t
                                },
                                pressedStyle: { ...r === e ? g.colorButtonSelected : y.colorButtonHovered,
                                    background: t
                                },
                                onClick: () => h(o, e),
                                onMouseEnter: () => b(e),
                                onMouseLeave: j,
                                style: { ...y.colorButton,
                                    ...r === e && g.colorButtonSelected,
                                    background: t
                                },
                                children: (0, n.jsx)("div", {
                                    style: y.increasedButtonHitTarget
                                })
                            }, e)
                        })
                    })]
                })
            }
            i(354520);
            let b = {
                    paddingBottom: 8
                },
                j = {
                    marginInlineStart: -2
                },
                v = {
                    height: 300
                },
                C = {
                    container: {
                        width: "25%",
                        padding: 3
                    },
                    tooltip: {
                        maxWidth: 180,
                        whiteSpace: "normal"
                    },
                    title: {
                        color: i(632079).Tj.text.inversePrimary
                    },
                    subtitle: {
                        color: i(632079).Tj.text.inverseSecondary
                    },
                    buttonHover: {
                        opacity: .85
                    }
                };

            function A({
                pageCover: e,
                tab: t
            }) {
                let o = (0, i(109939).tz)(),
                    {
                        coverUrl: l,
                        title: r,
                        subtitle: s,
                        position: d,
                        thumbnailPosition: c
                    } = e,
                    u = c ? ? d,
                    p = (0, i(960253).I)(() => ({
                        imageBox: {
                            width: "100%",
                            height: 64,
                            objectFit: "cover",
                            objectPosition: `center ${100*(u||0)}%`,
                            borderRadius: 4
                        }
                    }), [u]),
                    m = (0, a.useCallback)(() => {
                        t.onChange({
                            url: l,
                            position: d
                        })
                    }, [t, l, d]);
                return (0, n.jsx)("div", {
                    style: C.container,
                    children: (0, n.jsx)(i(51831).m, {
                        originGap: 0,
                        placement: "bottom",
                        delayThreshold: 600,
                        content: () => (0, n.jsxs)("div", {
                            style: C.tooltip,
                            children: [(0, n.jsx)("span", {
                                style: C.title,
                                children: o.formatMessage(r)
                            }), " ", (0, n.jsx)("span", {
                                style: C.subtitle,
                                children: s ? o.formatMessage(s) : void 0
                            })]
                        }),
                        children: e => (0, n.jsx)(i(64960).Ay, {
                            hoveredStyle: C.buttonHover,
                            ariaLabel: o.formatMessage(r),
                            ...e,
                            onClick: m,
                            children: (0, n.jsx)(i(738251).A, {
                                url: l,
                                width: 200,
                                isAuthenticated: !1,
                                render: (e, t) => t && (0, n.jsx)(i(989059).A, {
                                    src: t,
                                    style: p.imageBox
                                })
                            })
                        })
                    })
                })
            }
            let k = function({
                    tab: e
                }) {
                    let t = (0, i(109939).tz)(),
                        [o, l] = (0, a.useState)({}),
                        [r, s] = (0, a.useState)(!1),
                        d = (0, i(83208).X)("page_covers_march_2026");
                    (0, a.useEffect)(() => {
                        (async () => {
                            s(!0), await i(974024).f.load().then(e => {
                                l(d ? e : Object.fromEntries(Object.entries(e).filter(([e]) => !(0, i(722371).Xk)(i(123367).J, e)))), s(!1)
                            })
                        })()
                    }, [d]);
                    let c = (0, i(103955).b0)();
                    return r ? (0, n.jsx)("div", {
                        style: v,
                        children: (0, n.jsx)(i(515487).r, {})
                    }) : (0, n.jsx)("div", {
                        style: b,
                        children: Object.keys(o).map(a => {
                            let l = o[a];
                            return (0, n.jsx)(i(844565).A, {
                                title: (0, n.jsx)(i(68774).N, {
                                    style: j,
                                    href: l.url,
                                    external: !0,
                                    children: (0, n.jsx)(i(988022).p, {
                                        colorPalette: "gray",
                                        size: "xs",
                                        children: t.formatMessage(l.title)
                                    })
                                }),
                                noTextOverflow: !0,
                                children: (0, n.jsx)("div", {
                                    style: c.galleryWrap,
                                    children: l.items.map((t, i) => (0, n.jsx)(A, {
                                        pageCover: t,
                                        tab: e
                                    }, i))
                                })
                            }, a)
                        })
                    })
                },
                M = new(i(815048)).O2("GenerateMediaTab", async () => await Promise.all([i.e(49806), i.e(79974), i.e(45414), i.e(15389), i.e(97732), i.e(12001), i.e(81241), i.e(89431)]).then(i.bind(i, 31116))),
                I = (0, i(815048)._h)(M, e => e.GenerateMediaTabComponent),
                S = (0, i(109939).YK)({
                    giphyPlaceholder: {
                        id: "mediaPicker.giphyPlaceholder.text",
                        defaultMessage: "Search GIPHY"
                    }
                }),
                w = {
                    paddingBottom: 8
                },
                P = {
                    marginTop: 8,
                    marginBottom: 6
                },
                T = {
                    loading: (0, i(103955).$n)()
                };

            function E(e) {
                let {
                    tab: t,
                    results: o,
                    ready: l,
                    isSmallWidth: r,
                    giphyRandomId: s
                } = e, d = (0, i(960253).I)(() => ({
                    captionMenuItem: {
                        textAlign: r ? "start" : "center",
                        color: i(632079).Tj.text.secondary
                    }
                }), [r]);
                return l ? o && (!o || o.length) ? (0, n.jsxs)(a.Fragment, {
                    children: [o.map((e, i) => (0, n.jsx)(L, {
                        tab: t,
                        image: e,
                        giphyRandomId: s
                    }, i)), (0, n.jsx)(i(320819).A, {
                        shouldWrapCaption: !0,
                        caption: (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "Search to find more results.",
                            id: "mediaPicker.giphy.searchText"
                        }),
                        style: d.captionMenuItem
                    })]
                }) : (0, n.jsx)(i(320819).A, {
                    shouldWrapCaption: !0,
                    caption: (0, n.jsx)(i(109939).sA, {
                        defaultMessage: "No results found",
                        id: "mediaPicker.giphy.noResultsText"
                    }),
                    style: d.captionMenuItem
                }) : (0, n.jsx)("div", {
                    style: T.loading,
                    children: (0, n.jsx)(i(517334).k, {})
                })
            }
            let B = {
                container: {
                    width: i(986939).A.isMobile ? "33%" : "25%",
                    padding: 3
                },
                hoveredButton: {
                    opacity: .85
                },
                imageBox: {
                    width: "100%",
                    height: 64,
                    objectFit: "cover",
                    objectPosition: "center 0%",
                    borderRadius: 4
                },
                label: {
                    marginTop: 2,
                    marginBottom: 4
                }
            };

            function L({
                tab: e,
                image: t,
                giphyRandomId: o
            }) {
                var l;
                let r = (0, i(533992).v3)(),
                    s = (0, a.useCallback)(async () => {
                        var i, a;
                        if (e.onChange({
                                url: t.imageUrl
                            }), null != (i = t.analytics) && i.onclick) try {
                            await r.api.callApi({
                                eventName: "postGiphyAnalytics",
                                environment: r,
                                data: {
                                    url: null == (a = t.analytics) ? void 0 : a.onclick.url,
                                    timestamp: Date.now(),
                                    random_id: o
                                }
                            })
                        } catch (e) {}
                    }, [r, o, t.imageUrl, e, null == (l = t.analytics) ? void 0 : l.onclick]);
                return (0, n.jsxs)("div", {
                    style: B.container,
                    children: [(0, n.jsx)(i(64960).Ay, {
                        hoveredStyle: B.hoveredButton,
                        onClick: s,
                        children: (0, n.jsx)(i(989059).A, {
                            src: t.thumbUrl,
                            style: B.imageBox
                        })
                    }), (0, n.jsx)(i(324489).V, {
                        isSmall: !0,
                        isSecondaryColor: !0,
                        style: B.label,
                        children: (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "by <inlinetextlink>{authorName}</inlinetextlink>",
                            id: "mediaPicker.giphy.byAuthor",
                            values: {
                                authorName: t.authorName || "GIPHY",
                                inlinetextlink: e => (0, n.jsx)(i(428217).V, {
                                    external: !0,
                                    href: t.imageUrl,
                                    children: e
                                })
                            }
                        })
                    })]
                }, t.id)
            }
            let _ = function({
                tab: e,
                isSmallWidth: t
            }) {
                let o = (0, i(109939).tz)(),
                    [l, r] = (0, a.useState)(""),
                    [s, d] = (0, a.useState)(""),
                    c = (0, i(533992).v3)(),
                    u = (0, i(103955).b0)(),
                    p = (0, a.useCallback)(async () => {
                        if (!i(381453).Im(l)) return l;
                        let e = await c.api.callApi({
                            eventName: "getGiphyRandomId",
                            environment: c,
                            data: {}
                        });
                        if ("success" === e.type) return r(e.data.random_id), e.data.random_id
                    }, [c, l]);
                return (0, n.jsxs)("div", {
                    style: w,
                    children: [(0, n.jsx)(i(844565).A, {
                        desktopStyle: P,
                        children: (0, n.jsx)(i(310324).Ay, {
                            value: s,
                            placeholder: o.formatMessage(S.giphyPlaceholder),
                            showClearButton: !0,
                            focus: !i(986939).A.isMobile || void 0,
                            onChange: e => d(e.target.value)
                        })
                    }), (0, n.jsx)("div", {
                        style: u.galleryWrap,
                        children: (0, n.jsx)(i(814255).A, {
                            request: s,
                            debounce: i(767776).tu,
                            performRequest: async e => {
                                await p();
                                let t = await c.api.callApi({
                                    eventName: "searchGiphyImages",
                                    environment: c,
                                    data: {
                                        query: e,
                                        page: 0
                                    }
                                });
                                if ("success" === t.type) return t.data.results;
                                throw t.error
                            },
                            render: (i, o, a) => (0, n.jsx)(E, {
                                tab: e,
                                results: o,
                                ready: a,
                                isSmallWidth: t,
                                giphyRandomId: l
                            })
                        })
                    })]
                })
            };
            i(944114);
            let R = (0, a.forwardRef)(function(e, t) {
                    let {
                        shouldOpenVariations: o,
                        icon: a,
                        focused: l,
                        color: r,
                        onClick: s,
                        onMouseEnter: d,
                        variations: c,
                        hideTooltip: u,
                        insertIcon: p,
                        id: m,
                        role: g
                    } = e, h = (0, i(682985).uB)(void 0, i(510969).A);
                    return o ? (0, n.jsx)(z, {
                        ref: t,
                        id: m,
                        icon: a,
                        focused: l,
                        color: r,
                        onClick: s,
                        onMouseEnter: d,
                        variations: c,
                        hideTooltip: u,
                        insertIcon: p,
                        buttonPopupStore: h,
                        role: g
                    }) : (0, n.jsx)(D, {
                        ref: t,
                        id: m,
                        icon: a,
                        focused: l,
                        color: r,
                        onClick: s,
                        onMouseEnter: d,
                        variations: c,
                        hideTooltip: u,
                        role: g
                    })
                }),
                U = {
                    iconImage: { ...i(986939).A.isMobile ? {
                            width: i(703188).ru,
                            height: i(703188).ru
                        } : {
                            width: i(703188).Zl,
                            height: i(703188).Zl
                        }
                    }
                },
                D = (0, a.forwardRef)(function(e, t) {
                    let {
                        events: o,
                        icon: l,
                        focused: r,
                        color: s,
                        onClick: d,
                        onMouseEnter: c,
                        variations: u,
                        hideTooltip: p,
                        id: m,
                        role: g
                    } = e, h = (0, i(960253).e)(), {
                        isMenuListFocusVisible: f
                    } = (0, a.useContext)(i(842459).V), y = r && f, x = (0, i(960253).I)(() => ({
                        iconButton: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 4,
                            ...i(986939).A.isMobile ? {
                                width: i(703188).UA,
                                height: i(703188).UA,
                                fontSize: i(703188).ru
                            } : {
                                width: i(703188).Sq,
                                height: i(703188).Sq,
                                fontSize: i(703188).Zl
                            },
                            ...y && {
                                boxShadow: i(632079).Tj.buttonBlueFocusRing,
                                ...i(69916).bQ
                            }
                        }
                    }), [y]), b = (u.tooltip ? u.tooltip : l).replaceAll("-", " ").replaceAll("_", " "), j = `${b} ${s}`, v = "dark" === h ? u.dark : u.light;
                    return (0, n.jsx)(i(51831).m, {
                        forceVisibleState: !!y || void 0,
                        placement: y ? "bottom" : void 0,
                        allowHover: !!(l && !p),
                        disableTooltip: p,
                        content: () => b,
                        closeDelay: 0,
                        children: e => (0, n.jsx)(i(64960).Ay, {
                            ref: t,
                            ariaLabel: j,
                            id: m,
                            role: g,
                            focused: r,
                            onClick: d,
                            ...(0, i(63390).A)(o || {}, (0, i(63390).A)({
                                onMouseEnter: c
                            }, e)),
                            ignoreLocalHoverState: !0,
                            style: x.iconButton,
                            disallowTabbing: !0,
                            children: (0, n.jsx)("img", {
                                alt: j,
                                src: `data:image/svg+xml;utf8,${encodeURIComponent(v[s])}`,
                                style: U.iconImage,
                                onContextMenu: e => e.preventDefault()
                            })
                        }, l)
                    })
                });

            function F(e) {
                let {
                    parent: t,
                    icon: o,
                    variations: a,
                    insertIcon: l
                } = e, r = Object.keys("dark" === (0, i(960253).e)() ? a.light : a.dark).sort((e, t) => i(111012).v3.indexOf(e) - i(111012).v3.indexOf(t)).map(i => {
                    let r = `${o}_${i}`;
                    return {
                        key: r,
                        action: e => {
                            t.close(), l(`/icons/${r}.svg`)
                        },
                        render: t => (0, n.jsx)(R, { ...e,
                            ...t,
                            icon: r,
                            color: i,
                            variations: a,
                            shouldOpenVariations: !1,
                            hideTooltip: !0
                        })
                    }
                });
                return (0, n.jsx)(i(519451).A, {
                    debugName: "IconPickerMenuItem",
                    capture: !0,
                    allowEsc: !0,
                    children: (0, n.jsx)(i(558045).A, {
                        type: i(558045).O.Grid,
                        getItemsPerRowForSection: () => 5,
                        initialFocus: 0,
                        sections: [{
                            key: "variations",
                            render: e => (0, n.jsx)("div", { ...e
                            }),
                            items: r
                        }],
                        renderRow: (e, t) => (0, n.jsx)(i(4458).fI, {
                            role: "row",
                            padding: 2,
                            gap: 1,
                            children: e
                        }, t)
                    })
                })
            }
            let z = (0, a.forwardRef)(function(e, t) {
                    let {
                        icon: o,
                        focused: l,
                        color: r,
                        onClick: s,
                        onMouseEnter: d,
                        variations: c,
                        hideTooltip: u,
                        insertIcon: p,
                        buttonPopupStore: m,
                        id: g,
                        role: h
                    } = e, f = (0, a.useCallback)(() => {
                        m.setState({ ...m.state,
                            open: !1
                        })
                    }, [m]), y = (0, a.useCallback)(e => {
                        e.preventDefault(), m.setState({ ...m.state,
                            open: !0
                        })
                    }, [m]), {
                        isMenuListFocusVisible: x
                    } = (0, a.useContext)(i(842459).V);
                    return (0, n.jsx)(i(369064).N, {
                        debugName: "IconPickerMenuItem",
                        capture: l && x,
                        onEnter: y,
                        children: (0, n.jsx)(i(656252).A, {
                            buttonPopupStore: m,
                            popupType: i(656252).z.Popup,
                            content: e => (0, n.jsx)(i(369064).N, {
                                debugName: "IconPickerMenuItem.VariationMenuComponent",
                                capture: l,
                                onEsc: f,
                                children: (0, n.jsx)(F, {
                                    parent: e,
                                    icon: o,
                                    variations: c,
                                    insertIcon: p
                                })
                            }),
                            children: e => (0, n.jsx)(D, {
                                ref: t,
                                id: g,
                                icon: o,
                                focused: l,
                                color: r,
                                onClick: s,
                                onMouseEnter: d,
                                variations: c,
                                hideTooltip: u,
                                events: e,
                                role: h
                            })
                        })
                    }, o)
                }),
                H = {
                    display: "flex",
                    flexDirection: "column"
                },
                W = "recentIcons",
                V = (0, i(109939).YK)({
                    noResults: {
                        defaultMessage: "No results",
                        id: "iconPicker.noResults.message"
                    }
                }),
                N = {
                    style1: {
                        fontWeight: i(699422).Wy.medium,
                        marginBottom: 2,
                        marginInlineStart: 2,
                        height: 20,
                        boxSizing: "content-box"
                    },
                    style2: {
                        flexGrow: 1
                    }
                };

            function O(e) {
                let t = (0, i(109939).tz)(),
                    {
                        filter: o,
                        enforceIconColor: l,
                        onSubmit: r,
                        menuRef: s,
                        iconLoggingData: d,
                        comboboxProps: c
                    } = e,
                    p = (0, i(533992).v3)(),
                    {
                        isDesktop: m
                    } = (0, i(533992).Y0)(),
                    [g, h] = (0, a.useState)(!0),
                    [f, y] = (0, a.useState)(void 0),
                    {
                        loadIconCount: x,
                        recentIcons: b
                    } = (0, i(682985).O$)(u),
                    j = (0, i(682985).uB)(void 0, i(419110).$),
                    v = (0, i(682985).K8)(() => {
                        var e;
                        return null == (e = i(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettings()) ? void 0 : e.icon_picker_color
                    }, []),
                    C = (0, i(649476).Tf)(),
                    A = (0, i(682985).K8)(() => Math.floor((0, i(103955).so)(p, s, C)), [p, s, C]),
                    k = (0, i(682985).K8)(() => (0, i(103955).uu)(), []);
                (0, i(383953).l)(() => {
                    let e = i(467008).A.get(W);
                    u.update(t => ({ ...t,
                        recentIcons: e || []
                    }))
                });
                let [M] = (0, i(97668).Yb)(async () => {
                    try {
                        let e = await K(i(896221).A.icons.noticonsGeneratedJson, u.state);
                        y(e), h(!1)
                    } catch (e) {
                        throw e
                    }
                }, []), I = (0, a.useMemo)(() => i(871871).f7(e.filter) ? ? "", [e.filter]), S = (0, a.useCallback)(e => {
                    var t, o;
                    let a, n, l, s = e.replace("_dark", "");
                    r(s);
                    let c = s.split(/[/_.]/),
                        m = c[2],
                        g = c[3];
                    t = m, o = i(703188).Te * k, a = i(467008).A.get(W), n = i(381453).KC([t], a), l = i(381453).s(n, o), i(467008).A.set(W, l), u.update(e => ({ ...e,
                        recentIcons: l
                    })), d && i(42071).aU(p, "pick_colored_icon", {
                        icon: m,
                        color: g,
                        ...d
                    })
                }, [p, r, d, k]), w = (0, a.useCallback)((e, t) => {
                    let i = l ? ? v ? ? "gray",
                        o = `${e}_${i}`,
                        a = `/icons/${o}.svg`;
                    return {
                        key: a,
                        action: () => S(a),
                        render: o => (0, n.jsx)(R, { ...o,
                            icon: e,
                            color: i ? ? "gray",
                            variations: t,
                            insertIcon: S,
                            shouldOpenVariations: !l && !v
                        })
                    }
                }, [l, S, v]), P = (0, i(682985).K8)(() => (0, i(103955).ze)(p, C), [p, C]), T = (0, a.useCallback)(e => {
                    var t, a;
                    let l;
                    if (!e) return [];
                    let r = (t = e, a = o.toLowerCase(), l = i(381453).oE(Object.keys(t).map(e => {
                        let i = t[e],
                            o = ((null == i ? void 0 : i.tooltip) ? ? e).replace("-", " "),
                            n = [o, ...i.tags],
                            l = n.findIndex(e => e === a);
                        if (-1 !== l) return [0 === l ? 100 : 50, e];
                        let r = n.findIndex(e => e.startsWith(a)),
                            s = o.includes(a);
                        return 0 !== r && s ? [40, e] : -1 !== r ? [0 === r ? 80 : 30, e] : void 0
                    })), i(381453).Ul(l, e => -e[0]).map(e => e[1]));
                    return 0 === r.length ? [] : [{
                        key: "search-results",
                        items: r.map(t => w(t, e[t])),
                        render: e => (0, n.jsx)(i(844565).A, {
                            children: (0, n.jsx)("div", {
                                style: P,
                                children: e.children
                            })
                        }, e.key)
                    }]
                }, [o, w, P]), E = (0, a.useCallback)((e, t) => {
                    if (!t) return;
                    let o = [];
                    if (0 !== (o = "recent" === e.id ? b || [] : Object.keys(t)).length) return {
                        key: e.id,
                        items: o.map(e => {
                            if (void 0 !== t[e]) return w(e, t[e])
                        }).filter(Boolean),
                        render: t => (0, n.jsx)(i(844565).A, {
                            title: e.title,
                            children: (0, n.jsx)("div", {
                                style: P,
                                children: t.children
                            })
                        }, t.key)
                    }
                }, [b, w, P]), B = (0, a.useCallback)(e => {
                    var t;
                    let a = i(381453).oE((t = o, i(381453).oE([!t && {
                        id: "recent",
                        title: (0, n.jsx)(i(109939).sA, {
                            id: "iconPicker.section.recent",
                            defaultMessage: "Recent"
                        })
                    }, !t && {
                        id: "icons",
                        title: (0, n.jsx)(i(109939).sA, {
                            id: "iconPicker.section.icons",
                            defaultMessage: "Icons"
                        })
                    }])).map(t => E(t, e)));
                    return o && I ? T(e) : a
                }, [o, I, E, T]), L = (0, a.useCallback)(e => {
                    let t = B(e),
                        i = 0;
                    for (let e of t) i += e.items.length;
                    return i
                }, [B]), _ = (0, a.useCallback)(e => {
                    let t = x;
                    0 === x && (t += A * k);
                    let i = [],
                        o = B(e),
                        a = 0;
                    for (let e of o)
                        if (a + e.items.length <= t) i.push(e), a += e.items.length;
                        else {
                            i.push({ ...e,
                                items: e.items.slice(0, t - a)
                            });
                            break
                        }
                    return i
                }, [B, x, A, k]), U = (0, a.useMemo)(() => ({
                    type: i(558045).O.Grid,
                    getItemsPerRowForSection: () => A,
                    renderRow: (e, t) => (0, n.jsx)(i(4458).fI, {
                        role: "row",
                        children: e
                    }, t)
                }), [A]), D = (0, a.useCallback)(e => {
                    if (100 > Math.abs(e)) {
                        let {
                            loadIconCount: e,
                            allIcons: t
                        } = u.state, i = A * k, o = Math.max(i, L(t));
                        u.setState({ ...u.state,
                            loadIconCount: Math.min(o, e + i)
                        })
                    }
                }, [k, A, L]), F = (0, a.useMemo)(() => {
                    let e = _(f),
                        o = m && e.length > 0 ? 0 : void 0;
                    return "resolved" === M.status && 0 === e.length && e.push({
                        key: "no results",
                        items: [{
                            key: "no results",
                            action: i(763230).lQ,
                            render: e => (0, n.jsx)(i(320819).A, { ...e,
                                style: N.style1,
                                caption: t.formatMessage(V.noResults)
                            })
                        }]
                    }), (0, n.jsxs)("div", {
                        style: H,
                        children: [(0, n.jsx)("div", {
                            style: N.style2,
                            children: (0, n.jsx)(i(558045).A, { ...U,
                                store: j,
                                initialFocus: o,
                                sections: e,
                                disableKeyboardArrowWrap: !0,
                                unfocusOnScroll: i(986939).A.isMobile,
                                comboboxProps: c
                            })
                        }), (0, n.jsx)(i(636255).A, {
                            onChange: D
                        })]
                    })
                }, [_, f, m, U, j, D, M.status, c, t]);
                return (0, n.jsxs)("div", {
                    children: [g ? (0, n.jsx)("div", {
                        style: {
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingBottom: "10px"
                        },
                        children: (0, n.jsx)(i(517334).k, {})
                    }) : void 0, F]
                })
            }
            async function K(e, t) {
                if (!i(381453).Im(t.allIcons)) return t.allIcons;
                let o = await (0, i(201790).httpRequest)({
                    url: e,
                    method: "GET",
                    format: "json",
                    mode: "cors"
                });
                if ("success" === o.type) return u.setState({ ...t,
                    allIcons: o.data
                }), o.data;
                throw o.error
            }
            let G = (0, i(109939).YK)({
                selectIconColor: {
                    defaultMessage: "Select icon color",
                    id: "iconPickerColorPicker.selectColor"
                },
                selectIconColorWithCurrentColor: {
                    defaultMessage: "Select icon color, {iconColor} selected",
                    id: "iconPickerColorPicker.selectColorWithCurrentColor"
                },
                noIconColor: {
                    defaultMessage: "no color",
                    id: "iconPickerColorPicker.noColor"
                }
            });

            function Z() {
                let e = (0, i(682985).K8)(() => {
                        var e;
                        return null == (e = i(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettings()) ? void 0 : e.icon_picker_color
                    }, []),
                    t = (0, i(109939).tz)(),
                    o = (0, i(533992).v3)(),
                    a = (0, i(960253).e)(),
                    l = (0, i(533992).Y0)(),
                    r = (0, i(682985).uB)(void 0, i(510969).A);
                return (0, n.jsx)(i(51831).m, {
                    content: () => t.formatMessage(G.selectIconColor),
                    placement: "bottom",
                    children: s => (0, n.jsx)(i(656252).A, {
                        preventBlockRenderQueueOnEnter: !0,
                        buttonPopupStore: r,
                        popupType: i(656252).z.Popup,
                        content: a => (function(e) {
                            let {
                                parent: t,
                                environment: o,
                                currentIconPickerColor: a
                            } = e, l = [];
                            return l.push({
                                key: "askEveryTime",
                                action: () => {
                                    t.close(), q({
                                        environment: o,
                                        color: void 0
                                    })
                                },
                                render: e => (0, n.jsx)(i(296060).A, { ...e,
                                    title: (0, n.jsx)(i(109939).sA, {
                                        id: "iconPickerColorPicker.askEveryTime",
                                        defaultMessage: "Ask every time"
                                    }),
                                    onClick: () => {
                                        void 0 !== a ? q({
                                            environment: o,
                                            color: void 0
                                        }) : q({
                                            environment: o,
                                            color: "gray"
                                        })
                                    },
                                    on: void 0 === a,
                                    style: $.style0,
                                    textWrapperStyle: $.style1,
                                    rightStyle: $.style2
                                })
                            }), (0, n.jsx)(i(192922).A, {
                                parent: t,
                                currentColor: a,
                                onColorSelected: q,
                                additionalItems: l,
                                rowStyle: e => ({ ...e < 2 && {
                                        opacity: void 0 === a ? .5 : 1
                                    },
                                    ...2 === e && {
                                        flexDirection: "row-reverse",
                                        padding: "4px 0 0",
                                        margin: "4px 0 0",
                                        borderTop: `1px solid ${i(632079).Tj.border.secondaryTranslucent}`
                                    }
                                }),
                                menuStyle: $.style3
                            })
                        })({
                            parent: a,
                            environment: o,
                            currentIconPickerColor: e,
                            device: l,
                            intl: t
                        }),
                        children: o => (0, n.jsx)(i(310324).KF, {
                            ariaLabel: t.formatMessage(G.selectIconColorWithCurrentColor, {
                                iconColor: t.formatMessage(e ? i(111012).jd[e] : G.noIconColor)
                            }),
                            icon: i(338698).circleFillSmallIcon,
                            iconStyle: {
                                stroke: e ? i(111012).l8[a][e] : i(111012).l8[a].lightgray,
                                fill: e ? i(111012).l8[a][e] : i(632079).Tj.icon.tertiary
                            },
                            ...(0, i(63390).A)(o, s)
                        })
                    })
                })
            }
            let $ = {
                style0: {
                    boxShadow: "none"
                },
                style1: {
                    marginInlineStart: i(986939).A.isMobile ? 10 : 6
                },
                style2: {
                    marginInlineEnd: 4
                },
                style3: {
                    padding: "4px 0"
                }
            };

            function q(e) {
                let {
                    environment: t,
                    color: o
                } = e, a = i(728372).AppStoreCurrentUserSettingsStore.state;
                a && (0, i(377796).createAndCommit)({
                    userAction: "mediaPicker.setIconPickerColor",
                    environment: t,
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        (0, i(862759).m)({
                            userSettingsStore: a,
                            transaction: e,
                            data: {
                                icon_picker_color: void 0 !== o ? o : null
                            }
                        })
                    }
                })
            }
            let Y = (0, i(109939).YK)({
                    unsplashPlaceholder: {
                        id: "mediaPicker.unsplashPlaceholder.text",
                        defaultMessage: "Search for an image…"
                    }
                }),
                J = {
                    paddingBottom: 8
                },
                Q = {
                    marginTop: 8,
                    marginBottom: 6
                },
                X = {
                    loading: (0, i(103955).$n)()
                };

            function ee(e) {
                let {
                    tab: t,
                    results: o,
                    ready: l,
                    isSmallWidth: r
                } = e, s = (0, i(960253).I)(() => ({
                    captionMenuItem: {
                        textAlign: r ? "start" : "center",
                        color: i(632079).Tj.text.secondary
                    }
                }), [r]);
                return l ? o && (!o || o.length) ? (0, n.jsxs)(a.Fragment, {
                    children: [o.map((e, i) => (0, n.jsx)(ei, {
                        tab: t,
                        image: e
                    }, i)), (0, n.jsx)(i(320819).A, {
                        shouldWrapCaption: !0,
                        caption: (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "Search to find more results.",
                            id: "mediaPicker.unsplash.searchText"
                        }),
                        style: s.captionMenuItem
                    })]
                }) : (0, n.jsx)(i(320819).A, {
                    shouldWrapCaption: !0,
                    caption: (0, n.jsx)(i(109939).sA, {
                        defaultMessage: "No results found",
                        id: "mediaPicker.unsplash.noResultsText"
                    }),
                    style: s.captionMenuItem
                }) : (0, n.jsx)("div", {
                    style: X.loading,
                    children: (0, n.jsx)(i(517334).k, {})
                })
            }
            let et = {
                style0: {
                    width: i(986939).A.isMobile ? "33%" : "25%",
                    padding: 3
                },
                style1: {
                    opacity: .85
                },
                style2: {
                    width: "100%",
                    height: 64,
                    objectFit: "cover",
                    objectPosition: "center 0%",
                    borderRadius: 4
                },
                style3: {
                    marginTop: 2,
                    marginBottom: 4
                }
            };

            function ei({
                tab: e,
                image: t
            }) {
                let o = (0, a.useCallback)(async () => {
                    let o = await (0, i(201790).httpRequest)({
                        url: t.downloadUrl,
                        method: "GET",
                        format: "json"
                    });
                    "success" === o.type && e.onChange({
                        url: o.data.url
                    })
                }, [t.downloadUrl, e]);
                return (0, n.jsxs)("div", {
                    style: et.style0,
                    children: [(0, n.jsx)(i(64960).Ay, {
                        hoveredStyle: et.style1,
                        onClick: o,
                        children: (0, n.jsx)(i(989059).A, {
                            src: t.thumbUrl,
                            style: et.style2
                        })
                    }), (0, n.jsx)(i(324489).V, {
                        isSmall: !0,
                        isSecondaryColor: !0,
                        style: et.style3,
                        children: (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "by <inlinetextlink>{authorName}</inlinetextlink>",
                            id: "mediaPicker.unsplash.byAuthor",
                            values: {
                                authorName: t.authorName,
                                inlinetextlink: e => (0, n.jsx)(i(428217).V, {
                                    external: !0,
                                    href: t.unsplashUrl,
                                    children: e
                                })
                            }
                        })
                    })]
                }, t.id)
            }
            let eo = function({
                    tab: e,
                    isSmallWidth: t
                }) {
                    let o = (0, i(109939).tz)(),
                        [l, r] = (0, a.useState)(""),
                        s = (0, i(533992).v3)(),
                        d = (0, i(103955).b0)();
                    return (0, n.jsxs)("div", {
                        style: J,
                        children: [(0, n.jsx)(i(844565).A, {
                            desktopStyle: Q,
                            children: (0, n.jsx)(i(310324).Ay, {
                                value: l,
                                placeholder: o.formatMessage(Y.unsplashPlaceholder),
                                showClearButton: !0,
                                focus: !i(986939).A.isMobile || void 0,
                                onChange: e => r(e.target.value)
                            })
                        }), (0, n.jsx)("div", {
                            style: d.galleryWrap,
                            children: (0, n.jsx)(i(814255).A, {
                                request: l,
                                debounce: i(767776).tu,
                                performRequest: async e => {
                                    let t = await s.api.callApi({
                                        eventName: "searchUnsplashImages",
                                        environment: s,
                                        data: {
                                            query: e,
                                            page: 0
                                        }
                                    });
                                    if ("success" === t.type) return t.data.results;
                                    throw t.error
                                },
                                render: (i, o, a) => (0, n.jsx)(ee, {
                                    tab: e,
                                    results: o,
                                    ready: a,
                                    isSmallWidth: t
                                })
                            })
                        })]
                    })
                },
                ea = (0, i(109939).YK)({
                    embedPlaceholder: {
                        id: "mediaPicker.embedPlaceholder.text",
                        defaultMessage: "Paste in https://…"
                    },
                    filterPlaceholder: {
                        id: "mediaPicker.emojiFilter.text",
                        defaultMessage: "Filter…"
                    },
                    placeholder: {
                        id: "aiGenerateInput.placeholder.v2",
                        defaultMessage: "Generate a diagram, infographic, comic, image…"
                    },
                    collapsedPlaceholder: {
                        id: "aiGenerateInput.placeholder.collapsed.v1",
                        defaultMessage: "Or describe your idea…"
                    },
                    createWithAiLabel: {
                        id: "mediaPicker.combinedTab.createWithAI",
                        defaultMessage: "Create with AI"
                    },
                    randomEmoji: {
                        id: "mediaPicker.emojiTab.random",
                        defaultMessage: "Random"
                    },
                    pasteImageHint: {
                        id: "mediaPicker.uploadTab.pasteImageHint",
                        defaultMessage: "or {keyboardShortcut} to paste an image"
                    },
                    invalidPasteFileType: {
                        id: "mediaPicker.uploadTab.invalidPasteFileType",
                        defaultMessage: "Sorry, that file type is not supported."
                    }
                }),
                en = ["default", "diagram", "slide", "chart", "infographic", "mockup", "photo", "pattern", "comic", "sketch", "cartoon"],
                el = function(e) {
                    var t, o;
                    let l, r = (0, i(533992).v3)(),
                        d = (0, a.useRef)(null),
                        [c, p] = (0, a.useState)(""),
                        [m, g] = (0, a.useState)({
                            inputValue: "",
                            focus: !1
                        }),
                        [h, f] = (0, a.useState)({
                            inputValue: "",
                            focus: !1
                        }),
                        [y, b] = (0, i(739271).s)(),
                        j = (0, i(67499).S)(),
                        v = (0, i(682985).K8)(() => (0, i(888).$)(j), [j]),
                        C = null != d && null != (t = d.current) && t.offsetWidth ? ((null == d || null == (o = d.current) ? void 0 : o.offsetWidth) - 24) / 32 : 12,
                        A = (0, n.jsxs)(a.Fragment, {
                            children: [(0, n.jsx)(eL, {
                                tabs: e.tabs,
                                onDelete: e.onDelete,
                                currentTab: e.currentTab
                            }), (0, n.jsx)(es, {
                                tabs: e.tabs,
                                currentTab: e.currentTab,
                                onFilterChange: e => {
                                    let t = C * (0, i(103955).uu)();
                                    g({ ...m,
                                        inputValue: e.currentTarget.value
                                    }), f({ ...h,
                                        inputValue: e.currentTarget.value
                                    }), u.setState({ ...u.state,
                                        loadIconCount: t
                                    })
                                },
                                iconInput: h.inputValue,
                                emojiInput: m.inputValue,
                                onRandomButtonClick: t => {
                                    var o, a;
                                    let n;
                                    "emoji" === t.type ? function(e, t) {
                                        let o = e.find(e => e.type === t);
                                        if (o && "emoji" === o.type) {
                                            let e = (0, i(859941).a)();
                                            o.onChange(e, {
                                                keepVisible: !i(986939).A.isMobile
                                            })
                                        }
                                    }(e.tabs, e.currentTab) : "icon" === t.type ? function(e, t) {
                                        let o = e.find(e => e.type === t);
                                        if (o && "icon" === o.type) {
                                            var a;
                                            let e = o.enforceIconColor ? ? (null == (a = i(728372).AppStoreCurrentUserSettingsStore.state) || null == (a = a.getSettings()) ? void 0 : a.icon_picker_color),
                                                t = i(381453).XM(Object.keys(u.getState().allIcons)),
                                                n = e ? ? i(381453).XM(i(111012).v3),
                                                l = `/icons/${t}_${n}.svg`;
                                            o.onChange(l, {
                                                keepVisible: !i(986939).A.isMobile
                                            })
                                        }
                                    }(e.tabs, e.currentTab) : "customAgent" === t.type && (o = e.tabs, a = e.currentTab, (n = o.find(e => e.type === a)) && "customAgent" === n.type && n.onChange("__SHUFFLE__", {
                                        keepVisible: !i(986939).A.isMobile
                                    }))
                                },
                                comboboxProps: y
                            })]
                        });
                    if (i(986939).A.isMobile) l = {
                        menuType: i(649476).gu.Modal,
                        title: e.title,
                        header: A,
                        right: (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "Close",
                            id: "mediaPicker.mobileCloseButton.label"
                        }),
                        onClickRight: e.onCancel,
                        left: e.onDelete && (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "Remove",
                            id: "mediaPicker.mobileRemoveButton.label"
                        }),
                        onClickLeft: e.onDelete
                    };
                    else {
                        l = {
                            menuType: i(649476).gu.Popup,
                            header: A
                        };
                        let t = e.tabs.find(t => t.type === e.currentTab),
                            o = t && "tabHeight" in t ? t.tabHeight : void 0;
                        l.width = e.popupWidth || 300, l.height = o || e.popupHeight, l.maxHeight = e.maxHeight, l.maxWidth = e.maxWidth
                    }
                    return (0, n.jsx)(s, {
                        onSwipeLeft: () => (function(e, t) {
                            if (!i(588466).A.state.isActive) return;
                            let o = e.map(e => e.type).indexOf(i(588466).A.state.currentTab),
                                a = e[o + 1];
                            void 0 !== a && eT(a.type, t)
                        })(e.tabs, r),
                        onSwipeRight: () => (function(e, t) {
                            if (!i(588466).A.state.isActive) return;
                            let o = e.map(e => e.type).indexOf(i(588466).A.state.currentTab),
                                a = e[o - 1];
                            void 0 !== a && eT(a.type, t)
                        })(e.tabs, r),
                        render: t => (0, n.jsx)(i(747369).A, { ...l,
                            ...t,
                            className: i(828432).aIQ,
                            innerRef: d,
                            children: function() {
                                let t = e.tabs.find(t => t.type === e.currentTab);
                                if (!t) return (0, n.jsx)(i(109939).sA, {
                                    defaultMessage: "Uh oh! Something went wrong.",
                                    id: "mediaPicker.errorMessage"
                                });
                                switch (t.type) {
                                    case "embed":
                                        return (0, n.jsx)(eW, {
                                            isSmallWidth: e.isSmallWidth,
                                            embedInputValue: c,
                                            setEmbedInputValue: p,
                                            tab: t
                                        });
                                    case "file":
                                        return (0, n.jsx)(ey, {
                                            isSmallWidth: e.isSmallWidth,
                                            tab: t,
                                            spaceStore: v
                                        });
                                    case "emoji":
                                        return (0, n.jsx)(i(860213).p, {
                                            onSubmit: t.onChange,
                                            filter: m.inputValue || "",
                                            isCallout: e.isCallout,
                                            iconLoggingData: e.recordIconLoggingData,
                                            menuRef: d,
                                            onUpload: t.uploadFileEventHandlers,
                                            isInline: !1,
                                            comboboxProps: b,
                                            hideCustomEmoji: e.hideCustomEmoji
                                        });
                                    case "icon":
                                        return (0, n.jsx)(O, {
                                            filter: h.inputValue || "",
                                            onSubmit: t.onChange,
                                            iconLoggingData: e.recordIconLoggingData,
                                            enforceIconColor: t.enforceIconColor,
                                            menuRef: d,
                                            comboboxProps: b
                                        });
                                    case "gallery":
                                        return (0, n.jsx)(k, {
                                            tab: t
                                        });
                                    case "unsplash":
                                        return (0, n.jsx)(eo, {
                                            tab: t,
                                            isSmallWidth: e.isSmallWidth
                                        });
                                    case "giphy":
                                        return (0, n.jsx)(_, {
                                            tab: t,
                                            isSmallWidth: e.isSmallWidth
                                        });
                                    case "drive":
                                        return (0, n.jsx)(eU, {
                                            tab: t
                                        });
                                    case "box":
                                        return (0, n.jsx)(eP, {
                                            tab: t
                                        });
                                    case "generate":
                                        return (0, n.jsx)(I, {
                                            tab: t
                                        });
                                    case "custom":
                                        return (0, n.jsx)(ez, {
                                            isSmallWidth: e.isSmallWidth,
                                            embedInputValue: c,
                                            setEmbedInputValue: p,
                                            tab: t,
                                            spaceStore: v
                                        });
                                    case "customEmoji":
                                        return (0, n.jsx)(i(248196).A, {
                                            showTitle: !1,
                                            largeEmoji: !0,
                                            allowUrlPaste: !0,
                                            confirmToAdd: !0,
                                            uploadFileEventHandlers: t.uploadFileEventHandlers,
                                            onUploadWithoutSaving: t.onUploadWithoutSaving,
                                            onCancel: e.onCancel,
                                            entrypoint: "upload_tab"
                                        });
                                    case "customAgent":
                                        return (0, n.jsx)(x, {
                                            tab: t,
                                            filter: h.inputValue || ""
                                        });
                                    default:
                                        (0, i(722371).HB)(t)
                                }
                            }()
                        })
                    })
                },
                er = {
                    style1: { ...!i(986939).A.isMobile && {
                            marginTop: 4
                        },
                        marginBottom: 10
                    },
                    style2: {
                        borderBottom: "none"
                    }
                };

            function es(e) {
                let t = (0, i(109939).tz)(),
                    {
                        isAndroid: o
                    } = (0, i(533992).Y0)(),
                    a = (0, i(649476).Tf)(),
                    l = e.tabs.find(t => t.type === e.currentTab);
                if ((null == l ? void 0 : l.type) === "emoji" || (null == l ? void 0 : l.type) === "icon") {
                    let s = "emoji" === l.type ? e.emojiInput : e.iconInput,
                        d = () => e.onRandomButtonClick(l),
                        c = (0, n.jsx)(ep, {
                            tabs: e.tabs,
                            currentTab: e.currentTab,
                            hasRandomButtonOnLeft: !l.hideRandomButton
                        }),
                        u = (0, n.jsx)(i(310324).Ay, {
                            value: s,
                            placeholder: t.formatMessage(ea.filterPlaceholder),
                            autoFocus: !i(986939).A.isMobile || void 0,
                            focusInitial: !i(986939).A.isMobile || void 0,
                            showClearButton: !0,
                            inputLeft: (0, n.jsx)(i(310324).Zf, {
                                icon: i(921048).magnifyingGlassSmallIcon
                            }),
                            onChange: e.onFilterChange,
                            right: (0, n.jsxs)(i(4458).fI, {
                                children: [null != l && l.hideRandomButton ? void 0 : (0, n.jsx)(i(51831).m, {
                                    content: () => t.formatMessage(ea.randomEmoji),
                                    placement: "bottom",
                                    children: e => (0, n.jsx)(i(310324).KF, {
                                        icon: r,
                                        onClick: d,
                                        ariaLabel: t.formatMessage(ea.randomEmoji),
                                        ...e
                                    })
                                }), c]
                            }),
                            isRightLastElementOfInput: !0,
                            style: { ...o && er.style2
                            },
                            ...e.comboboxProps
                        });
                    return (0, n.jsx)("div", {
                        style: er.style1,
                        children: a ? (0, n.jsx)(i(844565).A, {
                            children: u
                        }) : (0, n.jsx)("div", {
                            children: u
                        })
                    }, `input-header-${l.type}`)
                }
                return null
            }

            function ed(e) {
                return e.fileUpload ? i(149646).cM : e.imageUpload ? i(149646).Dn : e.videoUpload ? i(149646).Rt : void 0
            }
            async function ec({
                tab: e,
                environment: t
            }) {
                let o = e.imageUpload ? "image/*" : e.videoUpload ? "video/*" : e.accept,
                    a = await i(385475).dA({
                        environment: t,
                        supportsMobileNativeFileUpload: !0,
                        multiple: e.allowMultipleFileSelection ? ? !1,
                        accept: o
                    });
                null != a && a.length && e.onUpload(a)
            }
            let eu = {
                marginInlineStart: 6
            };

            function ep({
                hasRandomButtonOnLeft: e,
                tabs: t,
                currentTab: o
            }) {
                let a, l = t.find(e => e.type === o);
                return l ? ((null == l ? void 0 : l.type) === "emoji" ? a = (0, n.jsx)(i(885963).A, {}) : (null == l ? void 0 : l.type) === "icon" && void 0 === l.enforceIconColor && (a = (0, n.jsx)(Z, {})), e && a ? (0, n.jsx)("div", {
                    style: eu,
                    children: a
                }) : a ? ? null) : null
            }
            let em = {
                    marginBlockStart: 12,
                    display: "flex",
                    justifyContent: "center",
                    marginInlineEnd: 12,
                    marginInlineStart: 12
                },
                eg = {
                    width: "100%"
                };

            function eh({
                tab: e,
                isSmallWidth: t
            }) {
                let o = (0, i(533992).v3)();
                return e.imageUpload || e.videoUpload ? (0, n.jsxs)(i(844565).A, {
                    desktopStyle: em,
                    children: [e.imageUpload ? (0, n.jsx)(i(548436).A, {
                        size: "lg",
                        onClick: () => ec({
                            tab: e,
                            environment: o
                        }),
                        style: eg,
                        children: (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "Upload file",
                            id: "mediaPicker.chooseImage.buttonText"
                        })
                    }) : void 0, e.videoUpload ? (0, n.jsx)(i(336113).A, {
                        title: (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "Choose a video",
                            id: "mediaPicker.chooseVideo.buttonText"
                        }),
                        onClick: () => ec({
                            tab: e,
                            environment: o
                        }),
                        fullWidth: t
                    }) : void 0]
                }) : null
            }
            let ef = {
                dropzone: {
                    background: i(632079).Tj.blue.background.secondaryTranslucent
                },
                aiSection: {
                    paddingTop: 0,
                    paddingInlineEnd: 12,
                    paddingBottom: 12,
                    paddingInlineStart: 12,
                    marginBottom: 10
                },
                pasteHint: {
                    marginTop: 10,
                    color: i(632079).Tj.text.tertiary,
                    textAlign: "center",
                    fontSize: 12
                },
                style0: {
                    marginTop: -24,
                    paddingTop: 24
                },
                style2: {
                    marginTop: -24,
                    paddingTop: 24,
                    paddingBottom: 10
                },
                style3: {
                    height: 8
                },
                style4: {
                    transition: "height 150ms ease-in-out"
                },
                style1: {
                    marginTop: 8,
                    marginBottom: 16,
                    paddingInlineStart: 12,
                    paddingInlineEnd: 12
                }
            };

            function ey({
                tab: e,
                isSmallWidth: t,
                spaceStore: o
            }) {
                var l;
                let r = (0, i(109939).tz)(),
                    s = (0, i(533992).v3)(),
                    d = (0, i(682985).O$)(i(105692).subscriptionDataStoreInstance),
                    c = e.aiGeneration,
                    u = (0, a.useRef)(null),
                    y = (0, a.useRef)(null),
                    [x, b] = function() {
                        let e = (0, a.useRef)(void 0),
                            [t, i] = (0, a.useState)(!1),
                            o = (0, a.useCallback)(() => {
                                i(!0), void 0 !== e.current && window.clearTimeout(e.current), e.current = window.setTimeout(() => {
                                    i(!1), e.current = void 0
                                }, 150)
                            }, [150]);
                        return (0, a.useEffect)(() => () => {
                            void 0 !== e.current && window.clearTimeout(e.current)
                        }, []), [t, o]
                    }(),
                    [j, v] = (0, a.useState)(!1),
                    C = (0, a.useCallback)(() => {
                        v(!0), b()
                    }, [b]),
                    [A, k] = (0, a.useState)(void 0),
                    [M, I] = (0, a.useState)(0),
                    S = (0, a.useRef)(void 0),
                    [w, P] = (0, a.useState)(void 0),
                    T = Math.max(0, (w ? ? 0) - (void 0 !== A ? Math.max(0, M - A) : 0));
                (0, a.useLayoutEffect)(() => {
                    let e = y.current,
                        t = u.current;
                    if (!e) return;
                    let i = () => {
                        let t = e.getBoundingClientRect().height;
                        I(t), k(e => void 0 === e || t < e ? t : e)
                    };
                    if (i(), void 0 === S.current && t) {
                        let e = Math.max(0, Math.round(370 - t.getBoundingClientRect().height));
                        S.current = e, P(e)
                    }
                    if ("u" < typeof ResizeObserver) return;
                    let o = new ResizeObserver(e => {
                        e[0] && i()
                    });
                    return o.observe(e), () => o.disconnect()
                }, [370]);
                let E = e.allowPaste && s.device.isDesktop,
                    B = (0, i(682985).K8)(() => {
                        if (!E) return;
                        let e = i(62276).getKeyboardShortcuts();
                        return (0, i(406410).dK)({
                            name: "paste",
                            shortcuts: e,
                            environment: s
                        })
                    }, [E, s]),
                    L = (0, a.useCallback)(t => {
                        if (!E) return;
                        let o = ed(e);
                        if (!o) return;
                        let a = (0, i(451753).u)(t.clipboardData, o);
                        if ("no_image" !== a.type) {
                            if (t.preventDefault(), "invalid_type" === a.type) return void i(436555).D6({
                                label: r.formatMessage(ea.invalidPasteFileType)
                            });
                            e.onUpload([a.file])
                        }
                    }, [E, e, r]),
                    _ = (0, i(960253).I)(() => ({
                        caption: {
                            textAlign: t ? "start" : "center",
                            color: i(632079).Tj.text.secondary
                        },
                        combinedTabContent: {
                            minHeight: 370,
                            overflow: "auto",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none"
                        }
                    }), [t, 370]),
                    R = (0, i(682985).K8)(() => i(831779).A.isOnboarding(), []),
                    U = (0, i(217844)._)({
                        name: "file_upload_size",
                        spaceId: null == o ? void 0 : o.id,
                        userId: null == (l = s.currentUser) ? void 0 : l.id
                    }),
                    D = eC({
                        upsell: null == U ? void 0 : U.upsell,
                        subscriptionData: d,
                        isOnboarding: R,
                        existingCaption: e.caption,
                        spaceStore: o
                    }),
                    F = (0, a.useMemo)(() => [{
                        style: "photo",
                        label: i(962299).A.formatMessage(i(865451).Z.stylePhoto),
                        prefill: (0, i(347035).E)("photo"),
                        imageSrc: h
                    }, {
                        style: "slide",
                        label: i(962299).A.formatMessage(i(865451).Z.styleSlide),
                        prefill: (0, i(347035).E)("slide"),
                        imageSrc: f
                    }, {
                        style: "diagram",
                        label: i(962299).A.formatMessage(i(865451).Z.styleDiagram),
                        prefill: (0, i(347035).E)("diagram"),
                        imageSrc: m
                    }, {
                        style: "chart",
                        label: i(962299).A.formatMessage(i(865451).Z.styleChart),
                        prefill: (0, i(347035).E)("chart"),
                        imageSrc: p
                    }, {
                        style: "mockup",
                        label: i(962299).A.formatMessage(i(865451).Z.styleMockup),
                        prefill: (0, i(347035).E)("mockup"),
                        imageSrc: g
                    }], []);
                if (c) return (0, n.jsx)(i(777875).V, {
                    type: ed(e) ? ? i(149646).hy,
                    dropTargetKey: "uploadTab",
                    onDropFile: t => {
                        if ("invalidFileDrop" === t.type) return i(436555).D6({
                            label: (0, n.jsx)(i(109939).sA, {
                                id: "mediaPicker.invalidImageDrop.wrongTypeErrorMessage",
                                defaultMessage: "Sorry, that file type is not supported."
                            })
                        }), null;
                        e.onUpload([t.file])
                    },
                    dropzoneStyle: ef.dropzone,
                    children: (0, n.jsx)("div", {
                        className: "hide-scrollbar",
                        style: { ...ef.style0,
                            ..._.combinedTabContent
                        },
                        children: (0, n.jsxs)("div", {
                            ref: u,
                            children: [(0, n.jsx)(i(844565).A, {
                                style: ef.style1,
                                children: (0, n.jsx)(ev, {
                                    onClick: () => ec({
                                        tab: e,
                                        environment: s
                                    }),
                                    extraHeight: T,
                                    animatePadding: x,
                                    showSubtext: !j
                                })
                            }), (0, n.jsx)("div", {
                                style: { ...ef.aiSection,
                                    ...void 0 !== A && {
                                        height: M ? ? A,
                                        overflow: "hidden",
                                        ...x && ef.style4
                                    }
                                },
                                children: (0, n.jsx)("div", {
                                    ref: y,
                                    children: (0, n.jsx)(i(865451).q, {
                                        aiGeneration: c,
                                        expansionState: "collapsible",
                                        onExpandStart: C,
                                        styleOptionIds: en,
                                        templates: F,
                                        collapsedHeader: r.formatMessage(ea.createWithAiLabel),
                                        collapsedPlaceholder: r.formatMessage(ea.collapsedPlaceholder),
                                        placeholder: r.formatMessage(ea.placeholder)
                                    })
                                })
                            })]
                        })
                    })
                });
                let z = E && B ? (0, n.jsx)("div", {
                        style: ef.pasteHint,
                        children: r.formatMessage(ea.pasteImageHint, {
                            keyboardShortcut: B
                        })
                    }) : void 0,
                    H = (0, n.jsx)(i(777875).V, {
                        type: ed(e) ? ? i(149646).hy,
                        dropTargetKey: "uploadTab",
                        onDropFile: t => {
                            if ("invalidFileDrop" === t.type) return i(436555).D6({
                                label: (0, n.jsx)(i(109939).sA, {
                                    id: "mediaPicker.invalidImageDrop.wrongTypeErrorMessage",
                                    defaultMessage: "Sorry, that file type is not supported."
                                })
                            }), null;
                            e.onUpload([t.file])
                        },
                        dropzoneStyle: ef.dropzone,
                        children: (0, n.jsxs)("div", {
                            style: ef.style2,
                            children: [e.fileUpload ? (0, n.jsx)(i(844565).A, {
                                desktopStyle: {
                                    marginTop: t ? 8 : 24
                                },
                                children: (0, n.jsx)(i(336113).A, {
                                    title: (0, n.jsx)(i(109939).sA, {
                                        defaultMessage: "Choose a file",
                                        id: "mediaPicker.chooseFile.button.label"
                                    }),
                                    onClick: () => ec({
                                        tab: e,
                                        environment: s
                                    }),
                                    fullWidth: t
                                })
                            }) : void 0, (0, n.jsx)(eh, {
                                isSmallWidth: t,
                                tab: e
                            }), z, D ? (0, n.jsx)(i(320819).A, {
                                shouldWrapCaption: !0,
                                caption: D,
                                style: _.caption
                            }) : void 0, d && (0, i(322082).F)(d) ? (0, n.jsx)("div", {
                                style: ef.style3
                            }) : void 0]
                        })
                    });
                return E ? (0, n.jsx)(i(369064).N, {
                    debugName: "UploadTabComponent",
                    capture: !0,
                    onPaste: L,
                    onUp: i(763230).D_,
                    onDown: i(763230).D_,
                    children: H
                }) : H
            }
            let ex = {
                position: "absolute",
                top: 0,
                insetInlineStart: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none"
            };

            function eb({
                borderRadius: e,
                strokeColor: t
            }) {
                return (0, n.jsx)("svg", {
                    style: ex,
                    fill: "none",
                    children: (0, n.jsx)("rect", {
                        x: 1,
                        y: 1,
                        width: "calc(100% - 2px)",
                        height: "calc(100% - 2px)",
                        rx: e,
                        stroke: t,
                        strokeWidth: 2,
                        strokeDasharray: "3 6",
                        strokeDashoffset: 0,
                        strokeLinecap: "square"
                    })
                })
            }
            let ej = (0, i(64960)._S)({
                color: i(632079).Tj.background.secondaryTranslucent
            });

            function ev({
                onClick: e,
                extraHeight: t = 0,
                animatePadding: o,
                showSubtext: l
            }) {
                let [r, s] = (0, a.useState)(!1), [d, c] = (0, a.useState)(!1), u = (0, i(960253).e)(), p = (0, i(960253).I)(() => ({
                    container: {
                        position: "relative",
                        width: "100%"
                    },
                    button: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 4,
                        width: "100%",
                        padding: `${14+t/2}px 16px`,
                        borderRadius: 10,
                        border: "none",
                        backgroundColor: "dark" === u ? d ? ej.pressed : r ? ej.hovered : i(632079).Tj.popoverBackground : r ? i(632079).Tj.background.secondary : i(632079).Tj.background.primary,
                        cursor: "pointer",
                        transition: "background-color 100ms ease-in-out" + (o ? ", padding 150ms ease-in-out" : "")
                    },
                    labelRow: {
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        transform: l ? "none" : "translateY(12px)"
                    },
                    icon: {
                        color: i(632079).Tj.icon.secondary
                    },
                    subtext: {
                        textAlign: "center",
                        minHeight: 20
                    }
                }), [o, t, r, d, l, u, 6, 4, 20]);
                return (0, n.jsxs)("div", {
                    style: p.container,
                    children: [(0, n.jsxs)("button", {
                        type: "button",
                        style: p.button,
                        onClick: e,
                        onMouseEnter: () => s(!0),
                        onMouseLeave: () => {
                            s(!1), c(!1)
                        },
                        onMouseDown: () => c(!0),
                        onMouseUp: () => c(!1),
                        children: [(0, n.jsxs)("div", {
                            style: p.labelRow,
                            children: [(0, n.jsx)(i(16275).I, {
                                icon: i(937233).M,
                                size: "lg",
                                style: p.icon
                            }), (0, n.jsx)(i(111010).D, {
                                styleKey: "bodyMedium",
                                colorVariant: "secondary",
                                children: (0, n.jsx)(i(109939).sA, {
                                    id: "mediaPicker.combinedTab.uploadImage",
                                    defaultMessage: "Upload image"
                                })
                            })]
                        }), (0, n.jsx)(i(111010).D, {
                            styleKey: "bodyRegular",
                            colorVariant: "tertiary",
                            style: { ...p.subtext,
                                ...l ? {} : {
                                    visibility: "hidden"
                                }
                            },
                            children: (0, n.jsx)(i(109939).sA, {
                                id: "mediaPicker.combinedTab.uploadImageSubtext",
                                defaultMessage: "Or drag and drop here"
                            })
                        })]
                    }), (0, n.jsx)(eb, {
                        borderRadius: 10,
                        strokeColor: "dark" === u ? i(632079).Tj.border.primary : i(632079).Tj.border.secondary
                    })]
                })
            }

            function eC(e) {
                let {
                    upsell: t,
                    subscriptionData: o,
                    isOnboarding: a,
                    existingCaption: l,
                    spaceStore: r
                } = e;
                if (!((0, i(811656).wy)(t) && o && !(0, i(322082).F)(o)) || a) return l;
                let s = (0, i(269368).N)({
                    messages: eV,
                    values: {
                        fileSize: i(385475).u1.toString()
                    }
                });
                return (0, n.jsxs)(i(4458).fI, {
                    gap: "inherit",
                    alignItems: "center",
                    justifyContent: l ? "space-between" : "center",
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8,
                    marginBottom: 4,
                    children: [l, (0, n.jsx)(i(754951).UpgradeButton, {
                        upsell: t,
                        source: "media_picker",
                        display: "text",
                        customMessages: s,
                        size: "small",
                        spaceStore: r
                    })]
                })
            }
            let eA = ((o = {}).Drive = "drive", o.Docs = "googleDocs", o);

            function ek({
                tab: e,
                type: t
            }) {
                return t === eA.Docs ? (0, n.jsx)(eS, {
                    tab: e
                }) : (0, n.jsx)(eI, {
                    tab: e
                })
            }
            let eM = {
                buttonItem: {
                    color: i(632079).Tj.blue.text.accentPrimary
                }
            };

            function eI({
                tab: e
            }) {
                return (0, n.jsxs)(i(844565).A, {
                    children: [(0, n.jsx)(i(95582).A, {
                        title: (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "Connect Google account",
                            id: "mediaPicker.menuItem.connectFirstGoogleAccount.label"
                        }),
                        onClick: () => e.onSelect(),
                        focused: !1,
                        style: eM.buttonItem
                    }), (0, n.jsx)(i(320819).A, {
                        shouldWrapCaption: !1,
                        caption: (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "Find and embed your Google Drive files.",
                            id: "mediaPicker.menuItem.connectFirstGoogleAccount.caption"
                        })
                    })]
                })
            }

            function eS({
                tab: e
            }) {
                return (0, n.jsx)(i(844565).A, {
                    children: (0, n.jsx)(i(95582).A, {
                        title: (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "Connect Google account",
                            id: "mediaPicker.menuItem.connectFirstGoogleAccount.label"
                        }),
                        onClick: () => e.onSelect(),
                        focused: !1
                    })
                })
            }
            let ew = {
                connectFirstAccountButton: {
                    color: i(632079).Tj.blue.text.accentPrimary
                },
                connectSecondAccountButton: {
                    color: i(632079).Tj.text.secondary
                }
            };

            function eP({
                tab: e
            }) {
                let {
                    accounts: t
                } = e;
                return 0 === t.length ? (0, n.jsxs)(i(844565).A, {
                    children: [(0, n.jsx)(i(95582).A, {
                        title: (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "Connect Box account",
                            id: "mediaPicker.menuItem.connectFirstBoxAccount.label"
                        }),
                        onClick: () => e.onSelect(),
                        focused: !1,
                        style: ew.connectFirstAccountButton
                    }), (0, n.jsx)(i(320819).A, {
                        shouldWrapCaption: !1,
                        caption: (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "Find and embed your Box files.",
                            id: "mediaPicker.menuItem.connectFirstBoxAccount.caption"
                        })
                    })]
                }) : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(i(844565).A, {
                        children: t.map(t => (0, n.jsx)(i(95582).A, {
                            title: (0, n.jsx)(i(109939).sA, {
                                defaultMessage: "Choose from {accountName}",
                                id: "mediaPicker.menuItem.choosePagesFromAccount.label",
                                values: {
                                    accountName: t.account_name
                                }
                            }),
                            onClick: () => e.onSelect(t),
                            focused: !1
                        }, t.account_key))
                    }), (0, n.jsx)(i(844565).A, {
                        topBorder: !0,
                        children: (0, n.jsx)(i(95582).A, {
                            title: (0, n.jsx)(i(109939).sA, {
                                defaultMessage: "Connect another account",
                                id: "mediaPicker.menuItem.connectMoreBoxAccounts.label"
                            }),
                            onClick: () => e.onSelect(),
                            style: ew.connectSecondAccountButton,
                            focused: !1
                        })
                    })]
                })
            }

            function eT(e, t) {
                i(588466).A.state.isActive && (i(588466).A.setState({ ...i(588466).A.state,
                    currentTab: e
                }), "icon" === e && i(588466).A.state.recordIconLoggingData && i(42071).uZ(t, "select_icon_tab", i(588466).A.state.recordIconLoggingData))
            }
            let eE = {
                    marginInlineStart: 6
                },
                eB = {
                    borderBottom: "none"
                };

            function eL({
                tabs: e,
                onDelete: t,
                currentTab: o
            }) {
                let l = (0, i(533992).v3)(),
                    {
                        device: r
                    } = l;
                if (e.length <= 1 && !t) return null; {
                    let s = {
                            gallery: (0, n.jsx)(i(109939).sA, {
                                id: "mediaPicker.tabs.gallery",
                                defaultMessage: "Gallery"
                            }),
                            embed: (0, n.jsx)(i(109939).sA, {
                                id: "mediaPicker.tabs.embedLink",
                                defaultMessage: "Link"
                            }),
                            file: (0, n.jsx)(i(109939).sA, {
                                id: "mediaPicker.tabs.upload",
                                defaultMessage: "Upload"
                            }),
                            emoji: (0, n.jsx)(i(109939).sA, {
                                id: "mediaPicker.tabs.emoji",
                                defaultMessage: "Emoji"
                            }),
                            icon: (0, n.jsx)(i(109939).sA, {
                                id: "mediaPicker.tabs.icon",
                                defaultMessage: "Icon"
                            }),
                            custom: (0, n.jsx)(i(109939).sA, {
                                id: "mediaPicker.tabs.custom",
                                defaultMessage: "Custom"
                            }),
                            customEmoji: (0, n.jsx)(i(109939).sA, {
                                id: "mediaPicker.tabs.customEmoji",
                                defaultMessage: "Upload"
                            }),
                            unsplash: (0, n.jsxs)(a.Fragment, {
                                children: [(0, i(276889).unsplashTintableIcon)({
                                    width: 12,
                                    marginInlineEnd: 4,
                                    height: 12
                                }), (0, n.jsx)("span", {
                                    children: "Unsplash"
                                })]
                            }),
                            giphy: (0, n.jsxs)(a.Fragment, {
                                children: [(0, i(602098).giphyTintableIcon)({
                                    width: 12,
                                    marginInlineEnd: 4,
                                    height: 12
                                }), (0, n.jsx)("span", {
                                    children: "GIPHY"
                                })]
                            }),
                            drive: (0, n.jsx)(i(109939).sA, {
                                id: "mediaPicker.tabs.browse",
                                defaultMessage: "Browse"
                            }),
                            box: (0, n.jsx)(i(109939).sA, {
                                id: "mediaPicker.tabs.browse",
                                defaultMessage: "Browse"
                            }),
                            customAgent: (0, n.jsx)(i(109939).sA, {
                                id: "mediaPicker.tabs.customAgent",
                                defaultMessage: "Agent"
                            }),
                            generate: (0, n.jsx)(i(109939).sA, {
                                id: "mediaPicker.tabs.generate",
                                defaultMessage: "Generate"
                            })
                        },
                        d = e.findIndex(e => e.type === o),
                        c = e.map(e => {
                            let t = e.title ? e.title : "file" === e.type ? e.aiGeneration ? (0, n.jsx)(i(109939).sA, {
                                id: "mediaPicker.tabs.add",
                                defaultMessage: "Add"
                            }) : s.file : s[e.type];
                            return "generate" === e.type ? (0, n.jsxs)(a.Fragment, {
                                children: [(0, n.jsx)("span", {
                                    children: t
                                }), (0, n.jsx)("div", {
                                    style: eE,
                                    children: (0, n.jsx)(i(129303).m, {
                                        badge_click_url: e.badge_click_url
                                    })
                                })]
                            }, e.type) : t
                        }),
                        u = e.find(e => e.type === o),
                        p = u && "emoji" !== u.type && r.isAndroid;
                    return (0, n.jsx)(i(540336).LZ, {
                        tabs: c,
                        selectedIndex: d,
                        onChange: t => {
                            eT(e[t].type, l)
                        },
                        right: t && !i(986939).A.isMobile && (0, n.jsx)(i(988022).p, {
                            colorPalette: "gray",
                            onClick: t,
                            children: (0, n.jsx)(i(109939).sA, {
                                id: "mediaPicker.tabs.remove",
                                defaultMessage: "Remove"
                            })
                        }),
                        style: { ...p && eB
                        }
                    })
                }
            }
            let e_ = {
                buttonItem: {
                    color: i(632079).Tj.text.secondary
                }
            };

            function eR({
                tab: e,
                accounts: t,
                type: o = eA.Drive
            }) {
                return "accounts" in e ? e.accounts && 0 === e.accounts.length ? (0, n.jsx)(ek, {
                    tab: e,
                    type: o
                }) : (0, n.jsxs)(a.Fragment, {
                    children: [(0, n.jsx)(i(844565).A, {
                        children: e.accounts.map((t, o) => (0, n.jsx)(i(95582).A, {
                            title: (0, n.jsx)(i(109939).sA, {
                                defaultMessage: "Choose from {accountName}",
                                id: "mediaPicker.menuItem.choosePagesFromAccount.label",
                                values: {
                                    accountName: t.account_name
                                }
                            }),
                            onClick: () => e.onSelect(t),
                            focused: !1
                        }, t.account_key))
                    }), (0, n.jsx)(i(844565).A, {
                        topBorder: !0,
                        children: (0, n.jsx)(i(95582).A, {
                            title: (0, n.jsx)(i(109939).sA, {
                                defaultMessage: "Connect another account",
                                id: "mediaPicker.menuItem.connectMoreGoogleAccounts.label"
                            }),
                            onClick: () => e.onSelect(),
                            style: e_.buttonItem,
                            focused: !1
                        })
                    })]
                }) : t ? 0 === t.length ? (0, n.jsx)(ek, {
                    tab: e,
                    type: o
                }) : (0, n.jsxs)(a.Fragment, {
                    children: [(0, n.jsx)(i(844565).A, {
                        children: t.map((t, o) => (0, n.jsx)(i(95582).A, {
                            title: (0, n.jsx)(i(109939).sA, {
                                defaultMessage: "Choose from {accountName}",
                                id: "mediaPicker.menuItem.choosePagesFromAccount.label",
                                values: {
                                    accountName: t.accountName
                                }
                            }),
                            onClick: () => e.onSelect(t),
                            focused: !1
                        }, t.accountId))
                    }), (0, n.jsx)(i(844565).A, {
                        topBorder: !0,
                        children: (0, n.jsx)(i(95582).A, {
                            title: (0, n.jsx)(i(109939).sA, {
                                defaultMessage: "Connect another account",
                                id: "mediaPicker.menuItem.connectMoreGoogleAccounts.label"
                            }),
                            onClick: () => e.onSelect(),
                            style: e_.buttonItem,
                            focused: !1
                        })
                    })]
                }) : null
            }

            function eU({
                tab: e
            }) {
                let t = (0, i(533992).v3)();
                return "accounts" in e ? (0, n.jsx)(eR, {
                    tab: e
                }) : (0, n.jsx)(i(814255).A, {
                    request: t,
                    performRequest: i(29914).QZ,
                    render: (t, o, a) => {
                        if (!a) return (0, n.jsx)(i(844565).A, {
                            children: (0, n.jsx)(i(200261).A, {})
                        });
                        let l = o && o.accounts ? o.accounts : [];
                        return (0, n.jsx)(eR, {
                            tab: e,
                            accounts: l
                        })
                    }
                })
            }

            function eD(e, t, o) {
                return () => {
                    if (o) {
                        let t = (0, i(728601).Zv)(o) || (0, i(728601).ku)(o, i(986939).A.secureFileConfig.hostname);
                        e.onChange({
                            originUrl: o,
                            pastedSecureFile: t
                        }), i(691968).oF({
                            pastedText: o,
                            source: "media_picker"
                        })
                    }
                }
            }
            let eF = {
                dropZone: {
                    background: i(632079).Tj.blue.background.secondaryTranslucent
                },
                style0: {
                    marginTop: 16,
                    display: "flex",
                    paddingTop: 0,
                    paddingBottom: 12
                },
                style1: {
                    marginTop: -24,
                    paddingTop: 24
                },
                style2: {
                    height: 8
                }
            };

            function ez({
                tab: e,
                isSmallWidth: t,
                embedInputValue: o,
                setEmbedInputValue: a,
                spaceStore: l
            }) {
                var r;
                let s = (0, i(109939).tz)(),
                    d = (0, i(533992).v3)(),
                    c = (0, i(533992).Y0)(),
                    u = (0, i(682985).O$)(i(105692).subscriptionDataStoreInstance),
                    p = (0, i(682985).K8)(() => i(831779).A.isOnboarding(), []),
                    m = (0, i(217844)._)({
                        name: "file_upload_size",
                        spaceId: null == l ? void 0 : l.id,
                        userId: null == (r = d.currentUser) ? void 0 : r.id
                    }),
                    g = (0, i(960253).I)(() => ({
                        caption: {
                            textAlign: t ? "start" : "center",
                            color: i(632079).Tj.text.secondary
                        }
                    }), [t]),
                    h = eC({
                        upsell: null == m ? void 0 : m.upsell,
                        subscriptionData: u,
                        isOnboarding: p,
                        existingCaption: e.caption,
                        spaceStore: l
                    }),
                    f = (0, n.jsx)(i(912946).A, {
                        colorPalette: "blue",
                        onClick: eD(e, d, o),
                        disabled: 0 === o.length,
                        hovered: !1,
                        children: e.buttonText || (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "Link",
                            id: "mediaPicker.embedTab.embedLinkButtonText"
                        })
                    }),
                    y = (0, n.jsx)(i(844565).A, {
                        desktopStyle: eF.style0,
                        children: (0, n.jsx)(i(310324).Ay, {
                            type: "url",
                            value: o,
                            placeholder: e.inputPlaceholder || s.formatMessage(ea.embedPlaceholder),
                            autoFocus: !i(986939).A.isMobile || void 0,
                            showClearButton: !0,
                            focus: !i(986939).A.isMobile || void 0,
                            onSubmit: eD(e, d, o),
                            onChange: e => a(e.target.value),
                            inputRight: c.isPhone ? f : void 0,
                            right: c.isPhone ? void 0 : f,
                            isRightLastElementOfInput: !0
                        })
                    }),
                    x = (0, n.jsx)(i(777875).V, {
                        type: ed(e) ? ? i(149646).hy,
                        dropTargetKey: "uploadTab",
                        onDropFile: t => {
                            if ("invalidFileDrop" === t.type) return i(436555).D6({
                                label: (0, n.jsx)(i(109939).sA, {
                                    id: "mediaPicker.invalidImageDrop.wrongTypeErrorMessage",
                                    defaultMessage: "Sorry, that file type is not supported."
                                })
                            }), null;
                            e.onUpload([t.file])
                        },
                        dropzoneStyle: eF.dropZone,
                        children: (0, n.jsxs)("div", {
                            style: eF.style1,
                            children: [e.fileUpload ? (0, n.jsx)(i(844565).A, {
                                desktopStyle: {
                                    marginTop: t ? 8 : 24
                                },
                                children: (0, n.jsx)(i(336113).A, {
                                    title: (0, n.jsx)(i(109939).sA, {
                                        defaultMessage: "Choose a file",
                                        id: "mediaPicker.chooseFile.button.label"
                                    }),
                                    onClick: () => ec({
                                        tab: e,
                                        environment: d
                                    }),
                                    fullWidth: t
                                })
                            }) : void 0, (0, n.jsx)(eh, {
                                isSmallWidth: t,
                                tab: e
                            }), h ? (0, n.jsx)(i(320819).A, {
                                shouldWrapCaption: !0,
                                caption: h,
                                style: g.caption
                            }) : void 0, u && (0, i(322082).F)(u) ? (0, n.jsx)("div", {
                                style: eF.style2
                            }) : void 0]
                        })
                    });
                return (0, n.jsxs)(n.Fragment, {
                    children: [y, x]
                })
            }
            let eH = {
                style0: {
                    marginTop: 8
                },
                style1: {
                    textAlign: i(986939).A.isMobile ? "start" : "center",
                    marginBottom: 4
                }
            };

            function eW({
                tab: e,
                isSmallWidth: t,
                embedInputValue: o,
                setEmbedInputValue: l
            }) {
                let r = (0, i(533992).v3)(),
                    s = (0, i(109939).tz)();
                return (0, n.jsxs)(a.Fragment, {
                    children: [(0, n.jsx)(i(844565).A, {
                        desktopStyle: eH.style0,
                        children: (0, n.jsx)(i(310324).Ay, {
                            type: "url",
                            value: o,
                            placeholder: e.inputPlaceholder || s.formatMessage(ea.embedPlaceholder),
                            autoFocus: !i(986939).A.isMobile || void 0,
                            showClearButton: !0,
                            focus: !i(986939).A.isMobile || void 0,
                            onSubmit: eD(e, r, o),
                            onChange: e => l(e.target.value)
                        })
                    }), (0, n.jsx)(i(844565).A, {
                        style: e.caption ? {} : {
                            marginBottom: 6
                        },
                        children: (0, n.jsx)(i(336113).A, {
                            onClick: eD(e, r, o),
                            title: e.buttonText || (0, n.jsx)(i(109939).sA, {
                                defaultMessage: "Link",
                                id: "mediaPicker.embedTab.embedLinkButtonText"
                            }),
                            fullWidth: t
                        })
                    }), e.caption ? (0, n.jsx)(i(320819).A, {
                        shouldWrapCaption: !0,
                        caption: e.caption,
                        style: eH.style1
                    }) : void 0]
                })
            }
            let eV = (0, i(109939).YK)({
                eligible_to_purchase: {
                    id: "MediaPicker.upgrade.eligibleToPurchase",
                    defaultMessage: "<highlight>Upgrade</highlight> for files larger than {fileSize}MB"
                },
                eligible_for_trial: {
                    id: "MediaPicker.upgrade.eligibleForTrial",
                    defaultMessage: "<highlight>Try</highlight> for files larger than {fileSize}MB"
                },
                sales_eligible: {
                    id: "MediaPicker.upgrade.salesEligible",
                    defaultMessage: "<highlight>Contact sales</highlight> for files larger than {fileSize}MB"
                },
                sales_assisted: {
                    id: "MediaPicker.upgrade.salesAssisted",
                    defaultMessage: "<highlight>Contact sales</highlight> for files larger than {fileSize}MB"
                },
                eligible_to_request: {
                    id: "MediaPicker.upgrade.eligible_to_request",
                    defaultMessage: "<highlight>Request</highlight> for files larger than {fileSize}MB"
                },
                request_pending: {
                    id: "MediaPicker.upgrade.requestPending",
                    defaultMessage: "<highlight>Request pending</highlight> for files larger than {fileSize}MB"
                }
            })
        },
        336113: (e, t, i) => {
            i.d(t, {
                A: () => a
            }), i(296540);
            var o = i(474848);
            let a = function({
                    onClick: e,
                    disabled: t,
                    title: a
                }) {
                    return (0, o.jsx)(i(636518).Ay, {
                        shouldWrapTitle: !0,
                        title: (0, o.jsx)(l, {
                            onClick: e,
                            disabled: t,
                            title: a
                        })
                    })
                },
                n = {
                    width: "100%",
                    maxWidth: 300,
                    display: "flex",
                    margin: "auto"
                };

            function l({
                onClick: e,
                disabled: t,
                title: a
            }) {
                let r = {
                    width: "100%",
                    color: i(632079).Tj.blue.text.accentPrimary
                };
                return i(986939).A.isMobile ? (0, o.jsx)(i(64960).Ay, {
                    onClick: e,
                    disabled: t,
                    style: r,
                    children: a
                }) : (0, o.jsx)(i(912946).A, {
                    colorPalette: "blue",
                    onClick: e,
                    disabled: t,
                    style: n,
                    children: a
                })
            }
        },
        338698: (e, t, i) => {
            i.r(t), i.d(t, {
                circleFillSmallIcon: () => a,
                iconDefinition: () => o
            }), i(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.95 1.94 12.11 12.1",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M8 1.95a6.05 6.05 0 1 0 0 12.1 6.05 6.05 0 0 0 0-12.1"
                    })
                },
                a = (0, i(104509).wt)("circleFillSmall", o, "fillSmall")
        },
        347035: (e, t, i) => {
            i.d(t, {
                E: () => a
            });
            let o = (0, i(109939).YK)({
                templatePrefillPhoto: {
                    id: "aiGenerateInput.templatePrefill.photo",
                    defaultMessage: "Create a photo that represents this page"
                },
                templatePrefillDiagram: {
                    id: "aiGenerateInput.templatePrefill.diagram",
                    defaultMessage: "Create a diagram about this page"
                },
                templatePrefillMockup: {
                    id: "aiGenerateInput.templatePrefill.mockup",
                    defaultMessage: "Create a mockup that represents this page"
                },
                templatePrefillSlide: {
                    id: "aiGenerateInput.templatePrefill.slide",
                    defaultMessage: "Create a presentation slide summarizing this page"
                },
                templatePrefillChart: {
                    id: "aiGenerateInput.templatePrefill.chart",
                    defaultMessage: "Create a chart that visualizes this page"
                }
            });

            function a(e) {
                switch (e) {
                    case "photo":
                        return i(962299).A.formatMessage(o.templatePrefillPhoto);
                    case "slide":
                        return i(962299).A.formatMessage(o.templatePrefillSlide);
                    case "diagram":
                        return i(962299).A.formatMessage(o.templatePrefillDiagram);
                    case "mockup":
                        return i(962299).A.formatMessage(o.templatePrefillMockup);
                    case "chart":
                        return i(962299).A.formatMessage(o.templatePrefillChart)
                }
            }
        },
        406531: (e, t, i) => {
            i.d(t, {
                l: () => a
            }), i(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.03 2.29 11.93 10.46",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M13.165 12.75a.8.8 0 0 0 .69-1.203L8.692 2.693a.8.8 0 0 0-1.382 0l-5.165 8.854a.8.8 0 0 0 .691 1.203z"
                    })
                },
                a = (0, i(104509).wt)("arrowCaretUpFillSmall", o, "fillSmall")
        },
        427619: (e, t, i) => {
            i.d(t, {
                e: () => d,
                k: () => s
            }), i(944114), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(354520), i(581454);
            var o = i(296540),
                a = () => i(412951),
                n = () => i(832375);
            let l = new Map,
                r = new Map;

            function s(e) {
                l.delete(e);
                let t = r.get(e);
                if (t)
                    for (let e of t) e()
            }

            function d(e) {
                let {
                    environment: t,
                    spaceId: i
                } = e, [a, n] = (0, o.useState)([]), [s, d] = (0, o.useState)(0), [u, p] = (0, o.useState)(!1), [m, g] = (0, o.useState)(!1), [h, f] = (0, o.useState)(0);
                return (0, o.useEffect)(() => {
                    let e = () => f(e => e + 1),
                        a = r.get(i) ? ? new Set;
                    r.set(i, a), a.add(e);
                    let s = l.get(i);
                    if (s && s.fetchedAt > 0 && Date.now() - s.fetchedAt < 6e5) return n(s.pointers), d(s.totalCount), p(!0), g(!1), () => {
                        var t;
                        null == (t = r.get(i)) || t.delete(e)
                    };
                    let u = !1;
                    return n([]), d(0), p(!1), g(!1), l.set(i, {
                        pointers: [],
                        totalCount: 0,
                        fetchedAt: -1
                    }), c({
                        environment: t,
                        spaceId: i,
                        isCancelled: () => u,
                        onError: () => {
                            u || (g(!0), l.delete(i))
                        },
                        onBatch: (e, t) => {
                            (0, o.startTransition)(() => {
                                u || (d(t), n(o => {
                                    if (u) return o;
                                    let a = new Set(o.map(e => e.id)),
                                        n = [...o, ...e.filter(e => !a.has(e.id))],
                                        r = l.get(i);
                                    return r && l.set(i, {
                                        pointers: n,
                                        totalCount: t,
                                        fetchedAt: r.fetchedAt > 0 ? r.fetchedAt : -1
                                    }), n
                                }))
                            })
                        },
                        onComplete: () => {
                            (0, o.startTransition)(() => {
                                if (!u) {
                                    p(!0);
                                    let e = l.get(i);
                                    e && l.set(i, { ...e,
                                        fetchedAt: Date.now()
                                    })
                                }
                            })
                        }
                    }), () => {
                        var t;
                        u = !0, null == (t = r.get(i)) || t.delete(e)
                    }
                }, [t, i, h]), {
                    pointers: a,
                    totalCount: s,
                    isFullyLoaded: u,
                    isError: m
                }
            }
            async function c(e) {
                let {
                    environment: t,
                    spaceId: i,
                    isCancelled: o,
                    onError: l,
                    onBatch: r,
                    onComplete: s
                } = e, d = 0, c = !1;
                for (;;) {
                    if (o()) return;
                    let e = await t.api.callCellCompatibleApi({
                        eventName: "getCustomEmojisForSpace",
                        environment: t,
                        data: {
                            spaceId: i,
                            limit: 200,
                            offset: d
                        },
                        cellNavigation: {
                            spaceId: i
                        }
                    });
                    if (o()) return;
                    if ("failed" === e.type) return void l();
                    let {
                        totalCount: s
                    } = e.data, u = a().RecordMapWithRole.create(e.data.recordMap), p = [];
                    for (let {
                            pointer: e
                        } of u.getByTable(n().e4Z)) u.getModel(e) && p.push(e);
                    if (r(p, s), (d += 200) >= s) {
                        c = !0;
                        break
                    }
                }!o() && c && s()
            }
        },
        451753: (e, t, i) => {
            i.d(t, {
                u: () => o
            }), i(898992), i(672577);

            function o(e, t) {
                let o = Array.from(e.files).find(e => e.type.startsWith("image/"));
                return o ? (0, i(149646).B7)({
                    fileMimeType: o.type,
                    allowedType: t
                }) ? {
                    type: "image",
                    file: o
                } : {
                    type: "invalid_type"
                } : {
                    type: "no_image"
                }
            }
        },
        490648: (e, t, i) => {
            i.d(t, {
                d: () => a
            }), i(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.88 2.32 14.24 15.36",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M9.294 2.325h3.103c.484 0 .948.192 1.29.534l2.897 2.898c.343.342.535.806.535 1.29v5.903a1.825 1.825 0 0 1-1.825 1.825H12.53v1.075a1.825 1.825 0 0 1-1.825 1.825h-6A1.825 1.825 0 0 1 2.88 15.85v-8.8c0-1.008.817-1.825 1.825-1.825H7.47V4.15c0-1.008.817-1.825 1.825-1.825M9.1 5.76l2.897 2.897c.342.342.534.806.534 1.29v3.578h2.763a.575.575 0 0 0 .575-.575V7.3h-1.975a1.75 1.75 0 0 1-1.75-1.75V3.575h-2.85a.575.575 0 0 0-.575.575v1.318q.208.12.38.292m6.16.44-2.016-2.016V5.55c0 .359.29.65.65.65zm-10.554.275a.575.575 0 0 0-.575.575v8.8c0 .318.258.575.575.575h6a.575.575 0 0 0 .575-.575V10.2H9.306a1.75 1.75 0 0 1-1.75-1.75V6.475zm3.95.609V8.45c0 .359.291.65.65.65h1.366z"
                    })
                },
                a = (0, i(104509).wt)("docOnDoc", o, "default")
        },
        573970: (e, t, i) => {
            i.d(t, {
                w: () => l
            }), i(944114), i(898992), i(354520), i(581454);
            var o = () => i(642157),
                a = () => i(832375),
                n = () => i(421439);

            function l(e) {
                var t;
                let {
                    environment: l,
                    store: r,
                    permissionItem: s,
                    transaction: d,
                    shouldInherit: c,
                    fromPermissionWrapper: u
                } = e;
                if (!r.isDefined()) return;
                let p = [];
                if (c)
                    for (let e of (0, i(862085).i0)(r).map(e => e.permissionItem).filter(e => !s || !i(138798).nK(e, s))) {
                        let t = !1;
                        "collection_property_permission" === e.type && (t = !0), o().hI(e) && (r.table !== a().evP || r.isCollectionView() || o().P3(e) || "content_only_editor" !== e.role ? t || p.push(e) : p.push({ ...e,
                            role: "read_and_write"
                        }))
                    }
                s && (p.push(s), r.table === a().evP ? i(594311).e1({
                    store: r,
                    newItems: [s],
                    fromPermissionWrapper: u
                }) : r.table === a().VlP || r.table === a().C0E || r.table === a().yKj || (0, i(722371).HB)(r.table));
                let m = l.currentUser.id,
                    g = i(381453).hS([...p, ...r.getPermissionItems() || [], {
                        type: "restricted_permission"
                    }], i(138798).I$);
                !m || d.useSudoMode || (0, i(310248).JF)({
                    store: r,
                    userId: m,
                    updatedPermissionItems: g
                }) || p.push({
                    type: "user_permission",
                    user_id: m,
                    role: "editor"
                });
                let h = r.getPermissionItemsStore();
                for (let e of p)(0, n().y4)({
                    store: h,
                    operation: {
                        pointer: h.pointer,
                        command: "setPermissionItem",
                        path: h.path,
                        args: e
                    },
                    transaction: d
                });
                (0, n().y4)({
                    store: h,
                    operation: {
                        pointer: h.pointer,
                        command: "setSingletonPermissionItem",
                        path: h.path,
                        args: {
                            singletonPermissionItem: {
                                type: "restricted_permission"
                            },
                            set: !0
                        }
                    },
                    transaction: d
                }), t = {
                    type: (null == s ? void 0 : s.role) === "none" ? "remove" : "narrow"
                }, (0, i(195857).DO_NOT_USE_trackLegacy)("restrict_permissions", t), d.postSubmitCallbacks.push(e => {
                    !e && r.pointer.spaceId && i(371151).nO({
                        environment: l,
                        spaceStore: {
                            id: r.pointer.spaceId
                        }
                    })
                })
            }
        },
        577464: (e, t, i) => {
            i.d(t, {
                GO: () => c,
                Ju: () => d,
                KA: () => s,
                L2: () => v,
                MN: () => u,
                Ol: () => g,
                Q0: () => x,
                dA: () => p,
                gI: () => r,
                gX: () => j,
                iN: () => b,
                j5: () => m,
                jw: () => A,
                oG: () => f,
                sK: () => h
            }), i(898992), i(354520), i(803949), i(296540);
            var o = () => i(176609),
                a = () => i(377796),
                n = i(474848);
            let l = (0, i(109939).YK)({
                duplicatingTemplate: {
                    id: "botActions.duplicatingTemplate.loadingMessage",
                    defaultMessage: "Duplicating template…"
                },
                duplicatingTemplateError: {
                    id: "botActions.duplicateTemplateAndShareWithBot.snackbar.failure",
                    defaultMessage: "Failed to duplicate template for to your workspace"
                },
                removeInheritedConnectionTitle: {
                    id: "botActions.removeInheritedConnection.title",
                    defaultMessage: "Disconnect {botName} and unlink share settings from parent page?"
                },
                removeInheritedConnectionDescription: {
                    id: "botActions.removeInheritedConnection.description",
                    defaultMessage: "This page will no longer inherit share settings from its parent. Admins can still restore settings later."
                },
                removeInheritedConnectionAcceptLabel: {
                    id: "botActions.removeInheritedConnection.acceptLabel",
                    defaultMessage: "Disconnect and unlink"
                }
            });

            function r(e) {
                let {
                    environment: t
                } = e, o = e.spaceStore.getSpaceId(), {
                    serverCommitResult: n,
                    performResult: {
                        botStore: l
                    }
                } = (0, a().createAndCommit)({
                    userAction: "botActions.createSpaceBot",
                    environment: t,
                    cellTarget: {
                        spaceWithId: o
                    },
                    canUndo: !0,
                    perform: t => (function(e, t) {
                        let {
                            environment: o,
                            spaceStore: a,
                            membershipType: n
                        } = t, l = function(e) {
                            let {
                                name: t,
                                spaceStore: o,
                                userId: a,
                                icon: n,
                                type: l,
                                environment: r
                            } = e, s = Date.now(), d = {
                                name: t,
                                created_at: s,
                                created_by_table: i(832375).oo9,
                                created_by_id: a,
                                alive: !0,
                                icon: n,
                                space_id: o.id,
                                last_edited_at: s,
                                last_edited_by_id: a,
                                last_edited_by_table: i(832375).oo9
                            };
                            switch (l) {
                                case "guest":
                                    return { ...d,
                                        type: "guest",
                                        capabilities: e.capabilities,
                                        parent_table: i(832375).NXh,
                                        parent_id: o.id,
                                        integration_id: void 0
                                    };
                                case "scim":
                                    return { ...d,
                                        id: (0, i(295447).Z1)({
                                            environment: r,
                                            table: i(832375).GPl,
                                            spaceId: o.id
                                        }),
                                        type: "scim",
                                        parent_table: i(832375).oo9,
                                        parent_id: a
                                    };
                                default:
                                    (0, i(722371).HB)(l)
                            }
                        }(t), r = i(124937).eC({
                            environment: o,
                            table: i(832375).GPl,
                            value: l,
                            inMemoryRecordCache: o.defaultRecordCache.inMemoryRecordCache,
                            transaction: e
                        });
                        return (0, i(73888).y)({
                            environment: o,
                            spaceStore: a,
                            actors: [{
                                type: "bot",
                                membershipType: n,
                                botId: r.id,
                                parent: void 0
                            }],
                            transaction: e
                        }), {
                            botStore: r
                        }
                    })(t, e)
                });
                return {
                    botStore: l,
                    transactionPromise: n
                }
            }
            async function s(e) {
                let {
                    environment: t,
                    botId: o,
                    onSuccess: a
                } = e, n = await t.api.callApi({
                    eventName: "deleteBot",
                    environment: t,
                    data: {
                        botId: o
                    }
                });
                "failed" === n.type ? i(647095).Qg(n) : "success" === n.type && (await i(994869).refreshExternalIntegrationStore({
                    environment: t
                }), a && a())
            }
            async function d(e) {
                let t, {
                    environment: o,
                    table: a,
                    id: n,
                    type: l
                } = e;
                return "failed" === (t = a === i(832375).NXh ? await o.api.callCellCompatibleApi({
                    eventName: "getBots",
                    environment: o,
                    data: {
                        table: a,
                        id: n,
                        type: l
                    },
                    cellNavigation: {
                        spaceId: n
                    }
                }) : await o.api.callApi({
                    eventName: "getBots",
                    environment: o,
                    data: {
                        table: a,
                        id: n,
                        type: l
                    }
                })).type ? (i(647095).Qg(t), {
                    botIds: [],
                    recordMap: {}
                }) : (t.data.integrationManagementPermissions && i(322103).bM.updatePermissions(t.data.integrationManagementPermissions), {
                    botIds: t.data.botIds,
                    recordMap: t.data.recordMap
                })
            }
            async function c(e) {
                let {
                    environment: t,
                    spaceStore: o,
                    botIds: a
                } = e;
                if (!o) return;
                let n = await t.api.callApi({
                    eventName: "getBotSharedPageIds",
                    environment: t,
                    data: {
                        spaceId: o.id,
                        botIds: a
                    }
                });
                return "failed" === n.type ? void i(647095).Qg(n) : (function(e) {
                    let {
                        integrationManagementPermissions: t
                    } = e;
                    t && Object.keys(t).length > 0 && i(322103).bM.updatePermissions(t)
                }({
                    integrationManagementPermissions: n.data.integrationManagementPermissions
                }), n.data)
            }
            async function u(e) {
                let {
                    environment: t,
                    spaceStore: o,
                    botIds: a
                } = e;
                if (!o) return;
                let n = await t.api.callApi({
                    eventName: "getBotSharedAgentIds",
                    environment: t,
                    data: {
                        spaceId: o.id,
                        botIds: a
                    }
                });
                return "failed" === n.type ? void i(647095).Qg(n) : n.data
            }
            async function p(e) {
                let {
                    environment: t,
                    botId: o
                } = e, a = await t.api.callApi({
                    eventName: "getBotToken",
                    environment: t,
                    data: {
                        botId: o
                    }
                });
                return "failed" === a.type ? void i(647095).Qg(a) : a.data.token
            }
            async function m(e) {
                let {
                    environment: t,
                    botId: o,
                    tokenId: a
                } = e, n = await t.api.callApi({
                    eventName: "revokeBotToken",
                    environment: t,
                    data: {
                        botId: o,
                        tokenId: a
                    }
                });
                return "failed" !== n.type || (i(647095).Qg(n), !1)
            }
            async function g(e) {
                let {
                    environment: t,
                    botId: o,
                    oldTokenExpiresInMs: a
                } = e, n = await t.api.callApi({
                    eventName: "refreshBotToken",
                    environment: t,
                    data: {
                        botId: o,
                        oldTokenExpiresInMs: a
                    }
                });
                return "failed" === n.type ? void i(647095).Qg(n) : n.data.token
            }

            function h(e) {
                let {
                    botValue: t,
                    store: n,
                    environment: l
                } = e, {
                    id: r,
                    parent_id: s,
                    parent_table: d,
                    capabilities: c
                } = t, u = {
                    type: "bot_permission",
                    bot_id: r,
                    parent_id: s,
                    parent_table: d,
                    role: (0, i(579825).MD)(c)
                }, p = n.getSpaceId();
                (0, a().createAndCommit)({
                    userAction: "TopbarMoreButton.handleAddingConnection",
                    environment: l,
                    cellTarget: p ? {
                        spaceWithId: p
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, o().z)({
                            environment: l,
                            store: n,
                            permissionItems: [u],
                            transaction: e
                        })
                    }
                })
            }

            function f(e) {
                let {
                    botId: t,
                    store: n,
                    environment: l
                } = e, r = n.getPermissionItems().filter(e => !!(0, i(642157).P3)(e)), s = n.getSpaceId();
                for (let e of r)
                    if (e.bot_id === t) {
                        let t = { ...e,
                            role: "none"
                        };
                        (0, a().createAndCommit)({
                            userAction: "TopbarMoreButton.handleRemovingConnection",
                            environment: l,
                            cellTarget: s ? {
                                spaceWithId: s
                            } : void 0,
                            canUndo: !0,
                            perform: e => {
                                (0, o().z)({
                                    environment: l,
                                    store: n,
                                    permissionItems: [t],
                                    transaction: e
                                })
                            }
                        })
                    }
            }
            let y = {
                marginTop: 8
            };
            async function x(e) {
                let {
                    botId: t,
                    botName: o,
                    store: r,
                    environment: s
                } = e, d = {
                    type: "bot_permission",
                    bot_id: t,
                    role: "none"
                }, c = (await i(647095).Gh({
                    message: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(i(111010).D, {
                            styleKey: "titleSmSemibold",
                            children: i(962299).A.formatMessage(l.removeInheritedConnectionTitle, {
                                botName: o
                            })
                        }), (0, n.jsx)(i(324489).V, {
                            isSmall: !0,
                            isMultiline: !0,
                            style: y,
                            children: (0, n.jsx)(i(109939).sA, { ...l.removeInheritedConnectionDescription
                            })
                        })]
                    }),
                    acceptLabel: i(962299).A.formatMessage(l.removeInheritedConnectionAcceptLabel),
                    icon: (0, n.jsx)(i(16275).I, {
                        icon: i(138308).arrowBranchIcon,
                        size: "xl"
                    })
                })).accept;
                if (c) {
                    let e = r.getSpaceId();
                    (0, a().createAndCommit)({
                        userAction: "TopbarMoreButton.handleRemovingInheritedConnection",
                        environment: s,
                        cellTarget: e ? {
                            spaceWithId: e
                        } : void 0,
                        canUndo: !0,
                        perform: e => {
                            (0, i(573970).w)({
                                environment: s,
                                store: r,
                                permissionItem: d,
                                shouldInherit: !0,
                                transaction: e
                            })
                        }
                    })
                }
                return c
            }
            async function b(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    botStore: o,
                    pageIdAndOperations: a,
                    effectiveAdminOnly: n
                } = e;
                return (0 !== a.length || void 0 !== n) && (await t.api.callApi({
                    eventName: "setBotPermissionsForPages",
                    environment: t,
                    data: {
                        spaceId: i.getSpaceId(),
                        botId: o.id,
                        pageOperations: a,
                        effectiveAdminOnly: n
                    }
                }), !0)
            }
            async function j(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    botStore: o,
                    agentOperations: a
                } = e;
                return 0 !== a.length && (await t.api.callApi({
                    eventName: "setBotPermissionsForAgents",
                    environment: t,
                    data: {
                        spaceId: i.getSpaceId(),
                        botId: o.id,
                        agentOperations: a
                    }
                }), !0)
            }
            async function v(e) {
                let {
                    environment: t,
                    spaceStore: n,
                    spaceViewStore: l,
                    templatePageId: r,
                    botValue: s,
                    pages: d
                } = e;
                if (!n) return;
                let c = i(447003).v.createChildStore(n, {
                    table: i(832375).GPl,
                    id: s.id
                });
                if (r) return await C({
                    environment: t,
                    templatePageId: r,
                    botStore: c,
                    spaceStore: n,
                    spaceViewStore: l
                });
                ! function(e) {
                    let {
                        spaceStore: t,
                        environment: n,
                        pages: l,
                        botStore: r,
                        addPermission: s
                    } = e;
                    if (!t) return;
                    let d = (0, i(862085).Ws)({
                            botStore: r,
                            addPermission: s
                        }),
                        c = t.getSpaceId();
                    l.forEach(e => {
                        let l = i(970831).B.createChildStore(t, {
                            table: i(832375).evP,
                            id: e,
                            spaceId: c
                        });
                        (0, a().createAndCommit)({
                            userAction: "botActions.updateBlockPermissionsForBot",
                            environment: n,
                            cellTarget: {
                                spaceWithId: c
                            },
                            canUndo: !0,
                            perform: e => {
                                (0, o().z)({
                                    environment: n,
                                    store: l,
                                    permissionItems: [d],
                                    transaction: e
                                })
                            }
                        })
                    })
                }({
                    environment: t,
                    spaceStore: n,
                    botStore: c,
                    pages: d,
                    addPermission: !0
                })
            }
            async function C(e) {
                let {
                    environment: t,
                    spaceStore: n,
                    spaceViewStore: r,
                    templatePageId: s,
                    botStore: d
                } = e;
                if (n && r) try {
                    i(262058).m({
                        message: l.duplicatingTemplate
                    });
                    let e = await t.api.callCellCompatibleApi({
                        eventName: "loadBlockSubtree",
                        environment: t,
                        data: {
                            block: {
                                id: s,
                                spaceId: (0, i(226221).e)(void 0)
                            },
                            shallow: !1
                        },
                        cellNavigation: {
                            recordId: s
                        }
                    });
                    if ("failed" === e.type) return;
                    let c = i(412951).RecordMapWithRole.create(e.data.subtreeRecordMap),
                        {
                            createAndDuplicatePageInSpace: u
                        } = await (0, i(411648).nd)(),
                        p = n.getSpaceId(),
                        {
                            performResult: m
                        } = (0, a().createAndCommit)({
                            userAction: "botActions.duplicateTemplateAndShareWithBot",
                            environment: t,
                            cellTarget: {
                                spaceWithId: p
                            },
                            canUndo: !0,
                            perform: e => {
                                let a = u({
                                        environment: t,
                                        recordMap: c,
                                        copyPageId: s,
                                        isPrivate: !0,
                                        spaceStore: n,
                                        spaceViewStore: r,
                                        transaction: e,
                                        allowCopyExternalObjectInstances: !1
                                    }),
                                    l = r.getPrivatePageIds();
                                l.length > 0 && (0, i(173157).z)({
                                    store: r,
                                    data: {
                                        private_pages: [a.id, ...l]
                                    },
                                    transaction: e
                                });
                                let p = (0, i(862085).Ws)({
                                    botStore: d,
                                    addPermission: !0
                                });
                                return (0, o().z)({
                                    environment: t,
                                    store: a,
                                    permissionItems: [p],
                                    transaction: e
                                }), a
                            }
                        });
                    return m
                } catch (e) {
                    i(436555).D6({
                        label: i(962299).A.formatMessage(l.duplicatingTemplateError)
                    })
                } finally {
                    i(262058).V()
                }
            }
            async function A({
                botIds: e,
                environment: t
            }) {
                e && 0 !== e.length && await (0, i(975162).lX)(e, 5, async e => s({
                    environment: t,
                    botId: e,
                    onSuccess: () => {}
                }))
            }
        },
        602098: (e, t, i) => {
            i.r(t), i.d(t, {
                giphyTintableIcon: () => a,
                iconDefinition: () => o
            }), i(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.49 0.36 15 19.29",
                    svg: (0, i(474848).jsx)("path", {
                        fillRule: "evenodd",
                        d: "M13.208 2.507h2.143v2.142h2.142v15h-15V.364h10.715zm-8.571 15H15.35V6.793h-4.286V2.507H4.637z",
                        clipRule: "evenodd"
                    })
                },
                a = (0, i(104509).wt)("giphyTintable", o, "tintable")
        },
        625478: (e, t, i) => {
            i.d(t, {
                A: () => l
            }), i(581454);
            var o = i(296540),
                a = i(474848);
            let n = (0, o.forwardRef)(function(e, t) {
                    let {
                        variations: o,
                        emoji: n,
                        focused: l,
                        onClick: s,
                        onMouseEnter: d,
                        insertEmoji: u,
                        showTooltip: p,
                        id: m,
                        role: g
                    } = e, h = (0, i(682985).uB)(void 0, i(510969).A);
                    return void 0 === (0, i(682985).K8)(() => (0, i(591404).bb)(), []) && o && o.length > 0 ? (0, a.jsx)(c, {
                        role: g,
                        id: m,
                        buttonPopupStore: h,
                        emoji: n,
                        focused: l,
                        insertEmoji: u,
                        onClick: s,
                        onMouseEnter: d,
                        showTooltip: p,
                        variations: o,
                        ref: t
                    }) : (0, a.jsx)(r, {
                        role: g,
                        id: m,
                        emoji: n,
                        focused: l,
                        onClick: s,
                        onMouseEnter: d,
                        ref: t,
                        showTooltip: p
                    })
                }),
                l = n,
                r = (0, o.forwardRef)(function({
                    events: e,
                    emoji: t,
                    focused: n,
                    onClick: l,
                    onMouseEnter: r,
                    showTooltip: s,
                    id: d,
                    role: c
                }, u) {
                    let p = i(871871).qg.isCustomEmojiString(t),
                        {
                            isMenuListFocusVisible: m
                        } = (0, o.useContext)(i(842459).V),
                        g = n && m,
                        h = (0, i(960253).I)(() => ({
                            emojiButton: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 4,
                                ...i(986939).A.isMobile ? {
                                    width: i(703188).UA,
                                    height: i(703188).UA,
                                    fontSize: i(703188).ru
                                } : {
                                    width: i(703188).Sq,
                                    height: i(703188).Sq,
                                    fontSize: i(703188).Zl
                                },
                                ...g && {
                                    boxShadow: i(632079).Tj.buttonBlueFocusRing,
                                    ...i(69916).bQ
                                }
                            }
                        }), [g]),
                        f = i(986939).A.isMobile ? i(703188).ru : i(703188).Zl,
                        y = (0, i(682985).K8)(() => {
                            if (p) {
                                let e = i(871871).qg.fromCustomEmojiString(t);
                                return (0, i(63839).nA)({
                                    parentStore: void 0,
                                    pointer: e.pointer
                                })
                            }
                        }, [t, p]),
                        x = (0, i(682985).K8)(() => p ? null == y ? void 0 : y.getName() : i(871871).Yf(t, i(753281).A.state), [y, t, p]);
                    return (0, a.jsx)(i(51831).m, {
                        forceVisibleState: !!g || void 0,
                        placement: "bottom",
                        allowHover: s,
                        content: () => x,
                        closeDelay: 0,
                        disableTooltip: !s,
                        children: o => (0, a.jsx)(i(64960).Ay, {
                            role: c,
                            ariaLabel: x,
                            ref: u,
                            id: d,
                            focused: n,
                            onClick: l,
                            ...(0, i(63390).A)(e || {}, (0, i(63390).A)({
                                onMouseEnter: r
                            }, o)),
                            ignoreLocalHoverState: !0,
                            style: h.emojiButton,
                            disallowTabbing: !0,
                            children: p ? y ? (0, a.jsx)(i(689479).A, {
                                size: f,
                                emojiStore: y
                            }) : null : (0, a.jsx)(i(945304).A, {
                                size: f,
                                char: t
                            })
                        }, t)
                    })
                });

            function s({
                props: e
            }) {
                return (0, a.jsx)(i(4458).fI, {
                    padding: 4,
                    children: e.children
                })
            }

            function d(e) {
                let {
                    parent: t,
                    emoji: o,
                    variations: l,
                    insertEmoji: r
                } = e, d = (0, i(533992).v3)(), c = (l && l.length > 0 ? [o, ...l] : [o]).map((o, s) => ({
                    key: o,
                    action: e => {
                        t.close(), (null == l ? void 0 : l.length) === i(735303).aI && (0, i(885963).l)({
                            environment: d,
                            skinTone: s
                        }), r(o, s)
                    },
                    render: t => (0, a.jsx)(n, { ...e,
                        ...t,
                        emoji: o,
                        variations: void 0,
                        showTooltip: !1
                    })
                }));
                return (0, a.jsx)(i(519451).A, {
                    debugName: "EmojiPickerMenuItem",
                    capture: !0,
                    allowEsc: !0,
                    children: (0, a.jsx)(i(558045).A, {
                        type: i(558045).O.Horizontal,
                        initialFocus: 0,
                        sections: [{
                            key: "variations",
                            render: e => (0, a.jsx)(s, {
                                props: e
                            }),
                            items: c
                        }]
                    })
                })
            }
            let c = (0, o.forwardRef)(function(e, t) {
                let {
                    emoji: n,
                    focused: l,
                    onClick: s,
                    onMouseEnter: c,
                    showTooltip: u,
                    variations: p,
                    insertEmoji: m,
                    buttonPopupStore: g,
                    id: h,
                    role: f
                } = e, y = (0, o.useCallback)(() => {
                    g.setState({ ...g.state,
                        open: !1
                    })
                }, [g]), x = (0, o.useCallback)(e => {
                    var t;
                    null == (t = e.preventDefault) || t.call(e), g.setState({ ...g.state,
                        open: !0
                    })
                }, [g]);
                return (0, a.jsx)(i(369064).N, {
                    debugName: "EmojiPickerMenuItem",
                    capture: l,
                    onEnter: x,
                    onEsc: y,
                    children: (0, a.jsx)(i(656252).A, {
                        buttonPopupStore: g,
                        popupType: i(656252).z.Popup,
                        content: e => (0, a.jsx)(d, {
                            parent: e,
                            emoji: n,
                            variations: p,
                            insertEmoji: m
                        }),
                        children: e => (0, a.jsx)(r, {
                            ref: t,
                            emoji: n,
                            focused: l,
                            onClick: s,
                            onMouseEnter: c,
                            showTooltip: u,
                            events: e,
                            id: h,
                            role: f
                        })
                    })
                }, n)
            })
        },
        790344: (e, t, i) => {
            i.d(t, {
                R: () => a
            }), i(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.75",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M3.125 5.25c0-1.174.951-2.125 2.125-2.125h9.5c1.174 0 2.125.951 2.125 2.125v9.5a2.125 2.125 0 0 1-2.125 2.125h-9.5a2.125 2.125 0 0 1-2.125-2.125zm2.125-.875a.875.875 0 0 0-.875.875v9.5c0 .483.392.875.875.875h9.5a.875.875 0 0 0 .875-.875v-9.5a.875.875 0 0 0-.875-.875z"
                    })
                },
                a = (0, i(104509).wt)("square", o, "default")
        },
        843671: (e, t, i) => {
            i.d(t, {
                Z: () => a,
                o: () => l
            });
            var o = () => i(546605);
            let a = 100;
            class n extends o().Store {
                getInitialState() {
                    return {
                        stores: {}
                    }
                }
                getStore(e) {
                    if (e) return this.state.stores[e] || (this.state.stores[e] = new(i(245541)).R({
                        key: `emojiFrecency:${e}`,
                        namespace: i(274919).Bq,
                        important: !0,
                        trackingType: "necessary"
                    })), this.state.stores[e]
                }
                getEmojiFrecencyMap(e) {
                    let t = this.getStore(e);
                    return t ? t.state ? ? {} : {}
                }
            }
            let l = new n
        },
        860213: (e, t, i) => {
            i.d(t, {
                D: () => k,
                p: () => w
            }), i(944114), i(269479), i(898992), i(823215), i(354520), i(672577), i(430670), i(803949), i(581454), i(737550);
            var o = i(296540),
                a = () => i(986939),
                n = () => i(735303),
                l = () => i(373615),
                r = i(474848);
            let s = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.39 3.05 15.76 13.89",
                    svg: (0, r.jsx)("path", {
                        d: "M5.29 3.366a.63.63 0 0 1 .54-.311h2.81c.182 0 .356.08.474.218l4.023 4.692h2.983c1.112 0 2.025.897 2.025 2.025v.02a2.03 2.03 0 0 1-2.025 2.025h-2.983l-4.023 4.692a.63.63 0 0 1-.474.218H5.83a.625.625 0 0 1-.542-.936l2.274-3.974H6.496l-1.949 1.358-.026.017c-.24.15-.533.255-.851.255h-.65a.625.625 0 0 1-.597-.81L3.306 10l-.883-2.855a.625.625 0 0 1 .597-.81h.65c.298 0 .61.079.883.276l1.943 1.354h1.066L5.288 3.99a.63.63 0 0 1 .001-.624m1.618.939 2.274 3.974a.625.625 0 0 1-.542.936H6.3a.63.63 0 0 1-.357-.112L3.896 7.677l.661 2.138a.63.63 0 0 1 0 .37l-.661 2.138 2.047-1.426a.63.63 0 0 1 .357-.112h2.34a.625.625 0 0 1 .542.935l-2.274 3.975h1.445l4.023-4.692a.63.63 0 0 1 .474-.218h3.27a.78.78 0 0 0 .775-.775v-.02a.773.773 0 0 0-.775-.775h-3.27a.63.63 0 0 1-.474-.218L8.353 4.305z"
                    })
                },
                d = (0, i(104509).wt)("airplane", s, "default"),
                c = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.67 1.55 16.78 16.78",
                    svg: (0, r.jsx)("path", {
                        d: "M11.375 5.413a4.5 4.5 0 0 1-.152-1.177c0-1.482.673-2.683 1.504-2.683.742 0 1.358.957 1.481 2.217.898-.62 1.846-.767 2.318-.296.471.472.324 1.42-.296 2.318 1.26.123 2.217.74 2.217 1.481 0 .83-1.201 1.504-2.683 1.504a4.5 4.5 0 0 1-1.177-.152 3.23 3.23 0 0 1-1.378 3.606l-9.233 5.853c-1.346.852-2.912-.714-2.06-2.06L7.77 6.791a3.23 3.23 0 0 1 3.606-1.378m.517 1.708a1.976 1.976 0 0 0-3.067.339l-.175.276 1.232 1.232a.55.55 0 1 1-.777.778L8.047 8.688l-.467.736 1.306 1.307a.55.55 0 1 1-.778.778l-1.132-1.132-4.004 6.317a.23.23 0 0 0-.042.16.26.26 0 0 0 .075.14.26.26 0 0 0 .141.076.23.23 0 0 0 .16-.042l3.221-2.042-.561-.561a.55.55 0 1 1 .778-.778l.735.736 5.06-3.208a1.976 1.976 0 0 0 .34-3.067z"
                    })
                },
                u = (0, i(104509).wt)("carrot", c, "default"),
                p = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.92 3.31 16.8 14.56",
                    svg: (0, r.jsx)("path", {
                        d: "M2.545 3.31a.625.625 0 0 0-.625.625c0 5.882 4.312 10.763 9.765 10.763h3.581c.737.8 1.472 1.718 2.306 2.88a.624.624 0 1 0 1.012-.728c-.947-1.32-1.78-2.344-2.621-3.232C15.747 7.94 11.518 3.31 6.207 3.31zm12.024 8.956c-1.239-1.104-2.624-2.118-4.489-3.483l-1.023-.75a.62.62 0 0 0-.872.134.63.63 0 0 0 .137.875l1.013.742c2.007 1.47 3.42 2.505 4.68 3.664h-2.33c-4.46 0-8.208-3.871-8.497-8.888h3.019c4.102 0 7.602 3.276 8.362 7.706"
                    })
                },
                m = (0, i(104509).wt)("leaf", p, "default"),
                g = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.87 1.87 16.26 16.26",
                    svg: (0, r.jsx)("path", {
                        d: "M10 1.875a8.125 8.125 0 1 0 0 16.25 8.125 8.125 0 0 0 0-16.25M4.896 5.393a6.9 6.9 0 0 1 2.298-1.671L9.45 5.36v1.35L7.04 8.46l-1.283-.417zm-1.733 5.334L5.417 9.09l1.284.417.92 2.833-.793 1.091H4.04a6.8 6.8 0 0 1-.878-2.703m5.416 6.001-.861-2.651.793-1.092h2.978l.793 1.092-.861 2.651a6.9 6.9 0 0 1-2.842 0m7.38-3.298h-2.787l-.793-1.091.92-2.833 1.284-.417 2.254 1.638a6.8 6.8 0 0 1-.878 2.703m-.855-8.037-.861 2.65-1.283.417-2.41-1.75V5.36l2.256-1.638c.879.393 1.66.966 2.298 1.671"
                    })
                },
                h = (0, i(104509).wt)("soccerBall", g, "default");
            var f = () => i(381453),
                y = () => i(703188),
                x = () => i(753281);
            let b = {
                wrapper: {
                    borderTop: `solid 1px ${i(632079).Tj.border.secondary}`,
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: 8,
                    paddingBottom: 10,
                    paddingInlineStart: 12,
                    paddingInlineEnd: 12
                },
                style0: {
                    width: 32,
                    height: 32
                }
            };

            function j(e) {
                let t = (0, i(109939).tz)();
                return (0, r.jsx)("div", {
                    style: b.wrapper,
                    children: k.map((a, n) => e.isHidden(a) ? null : (0, r.jsx)(i(51831).m, {
                        alignment: "start",
                        placement: "bottom",
                        content: e => (0, r.jsx)("div", { ...e,
                            children: a.title
                        }),
                        children: n => (0, o.createElement)(i(374533).A, {
                            focused: e.isFocused(a),
                            disabled: e.isDisabled(a),
                            "aria-pressed": e.isFocused(a),
                            ...n,
                            key: a.id,
                            ariaLabel: t.formatMessage({
                                id: "emojiPicker.category.label",
                                defaultMessage: "Jump to category: {category}"
                            }, {
                                category: a.category ? ? a.id
                            }),
                            icon: {
                                icon: a.icon ? ? i(790344).R,
                                size: "lg",
                                colorVariant: "secondary"
                            },
                            style: b.style0,
                            onClick: t => {
                                e.onCategoryClick(a, t)
                            }
                        })
                    }, a.id))
                })
            }
            let v = (0, i(109939).YK)({
                    noResults: {
                        defaultMessage: "No results",
                        id: "emojiPicker.noResults.message"
                    }
                }),
                C = (0, r.jsx)(i(109939).sA, {
                    id: "emojiPicker.addCustomEmoji",
                    defaultMessage: "Add emoji"
                }),
                A = "__ADD_CUSTOM_EMOJI__",
                k = [{
                    id: "recent",
                    title: (0, r.jsx)(i(109939).sA, {
                        id: "emojiPicker.section.recent",
                        defaultMessage: "Recent"
                    }),
                    icon: i(772683).clockIcon
                }, {
                    id: "callout",
                    title: (0, r.jsx)(i(109939).sA, {
                        id: "emojiPicker.section.callout",
                        defaultMessage: "Callout"
                    })
                }, {
                    id: "people",
                    category: "People & Body",
                    title: (0, r.jsx)(i(109939).sA, {
                        id: "emojiPicker.section.people",
                        defaultMessage: "People"
                    }),
                    icon: i(976898).emojiFaceIcon
                }, {
                    id: "nature",
                    category: "Animals & Nature",
                    title: (0, r.jsx)(i(109939).sA, {
                        id: "emojiPicker.section.animals",
                        defaultMessage: "Animals and nature"
                    }),
                    icon: m
                }, {
                    id: "food",
                    category: "Food & Drink",
                    title: (0, r.jsx)(i(109939).sA, {
                        id: "emojiPicker.section.food",
                        defaultMessage: "Food and drink"
                    }),
                    icon: u
                }, {
                    id: "activities",
                    category: "Activities",
                    title: (0, r.jsx)(i(109939).sA, {
                        id: "emojiPicker.section.activity",
                        defaultMessage: "Activity"
                    }),
                    icon: h
                }, {
                    id: "travel",
                    category: "Travel & Places",
                    title: (0, r.jsx)(i(109939).sA, {
                        id: "emojiPicker.section.travel",
                        defaultMessage: "Travel and places"
                    }),
                    icon: d
                }, {
                    id: "objects",
                    category: "Objects",
                    title: (0, r.jsx)(i(109939).sA, {
                        id: "emojiPicker.section.objects",
                        defaultMessage: "Objects"
                    }),
                    icon: i(91790).lightBulbBrightIcon
                }, {
                    id: "symbols",
                    category: "Symbols",
                    title: (0, r.jsx)(i(109939).sA, {
                        id: "emojiPicker.section.symbols",
                        defaultMessage: "Symbols"
                    }),
                    icon: i(853160).checkmarkCircleIcon
                }, {
                    id: "flags",
                    category: "Flags",
                    title: (0, r.jsx)(i(109939).sA, {
                        id: "emojiPicker.section.flags",
                        defaultMessage: "Flags"
                    }),
                    icon: i(999129).M
                }, {
                    id: "custom",
                    title: (0, r.jsx)(i(109939).sA, {
                        id: "emojiPicker.section.custom",
                        defaultMessage: "Custom"
                    }),
                    icon: i(7776).squareGrid2X2Icon
                }, {
                    id: "add",
                    title: C,
                    icon: i(930887).q
                }],
                M = (0, i(722371).MU)(k.map(e => [e.id, e])),
                I = ["💡", "👉", "☝", "👌", "🔑", "🚧", "⚠️", "🔥", "📌", "✂️", "❓", "🚫", "⛔", "⏰", "☎️", "🚨", "♻️", "✅", "🔒", "📎", "📖", "🗣", "➡️", "📢", "🛠", "⚙"],
                S = {
                    style0: {
                        width: 28,
                        height: 28,
                        margin: 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: `1px solid ${i(632079).Tj.border.primary}`,
                        cursor: "pointer",
                        borderRadius: 15
                    },
                    style1: {
                        fontWeight: i(699422).Wy.medium,
                        marginBottom: 2,
                        marginInlineStart: 2,
                        height: 20,
                        boxSizing: "content-box"
                    },
                    style2: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "stretch"
                    },
                    style3: {
                        alignItems: "stretch",
                        width: "100%",
                        position: "relative",
                        height: "100%"
                    },
                    style6: {
                        width: "100%",
                        flexGrow: 1
                    },
                    style7: {
                        width: "100%"
                    },
                    style8: {
                        paddingTop: 16
                    },
                    style9: {
                        paddingTop: 6,
                        lineHeight: "100%"
                    },
                    style10: {
                        paddingTop: 10
                    },
                    style11: {
                        paddingBottom: 10
                    }
                };

            function w(e) {
                let t, {
                        onSubmit: n,
                        isInline: s,
                        onUpload: d,
                        iconLoggingData: c,
                        comboboxProps: u,
                        hideCustomEmoji: p
                    } = e,
                    m = (0, i(682985).K8)(() => {
                        let e = (0, i(330870).a)();
                        return (0, i(974410).f)(e) ? ? (0, i(328765).S)()
                    }, []),
                    g = (0, i(533992).v3)(),
                    h = (0, i(109939).tz)(),
                    b = (0, i(533992).Y0)(),
                    k = (0, i(533992).WS)(),
                    w = (0, i(649476).Tf)(),
                    P = (0, i(682985).K8)(() => Math.floor((0, i(103955).so)(g, e.menuRef, w)), [g, e.menuRef, w]),
                    T = (0, i(103955).uu)(),
                    L = (0, i(682985).K8)(() => (0, i(63839).wA)({
                        spaceStore: (0, i(63839).vZ)()
                    }), []),
                    _ = b.isDesktop && L && !p,
                    R = (0, o.useMemo)(() => i(363256).e.withListenerIgnored(() => i(843671).o.getEmojiFrecencyMap(null == m ? void 0 : m.id)), [null == m ? void 0 : m.id]),
                    U = (0, o.useMemo)(() => Object.keys(R).sort((e, t) => R[t].f !== R[e].f ? R[t].f - R[e].f : R[t].u - R[e].u).slice(0, y().Te * P), [R, P]),
                    D = (0, i(682985).K8)(() => {
                        var e;
                        return null != m && m.id ? (null == (e = i(313033).A.getData(g, {
                            spaceId: m.id
                        })) ? void 0 : e.pointers.map(e => i(871871).qg.toString(i(871871).qg.fromPointer(e)))) ? ? [] : []
                    }, [g, null == m ? void 0 : m.id]),
                    F = (0, o.useCallback)(e => {
                        n(e),
                            function(e, t) {
                                let o = i(843671).o.getStore(t);
                                if (!o) return;
                                let a = o.state ? ? {},
                                    n = Date.now();
                                for (let e in a) {
                                    var l, r;
                                    a[e].f = (l = a[e].f, r = a[e].u, void 0 === l || void 0 === r ? 0 : Math.round(l * Math.pow(.5, (n - r) / 6048e5)))
                                }
                                let s = (0, i(591404).t4)(e);
                                if (s in a ? (a[s].f += 1, a[s].u = n) : a[s] = {
                                        f: 1,
                                        u: n
                                    }, Object.keys(a).length > i(843671).Z) {
                                    let e = Object.entries(a);
                                    e.sort((e, t) => e[1].f !== t[1].f ? t[1].f - e[1].f : t[1].u - e[1].u), a = Object.fromEntries(e.slice(0, i(843671).Z))
                                }
                                o.setState(a)
                            }(e, null == m ? void 0 : m.id), c && i(42071).aU(g, "pick_emoji", {
                                icon: e,
                                ...c
                            })
                    }, [n, c, g, null == m ? void 0 : m.id]),
                    z = (0, x()._)(),
                    H = (0, i(682985).K8)(i(591404).bb, []),
                    W = (0, o.useCallback)(e => {
                        let t = void 0 === H ? i(871871).Fq(e, z) : [];
                        return {
                            key: e,
                            action: () => {
                                0 === t.length && F(e)
                            },
                            render: o => (0, r.jsx)(i(625478).A, { ...o,
                                emoji: e,
                                showTooltip: !0,
                                variations: t,
                                insertEmoji: F
                            })
                        }
                    }, [F, z, H]),
                    V = (0, i(682985).K8)(() => (function(e) {
                        var t;
                        let {
                            environment: o,
                            filter: a,
                            isCallout: n,
                            maxEmojisPerRow: r,
                            showCategoriesThreshold: s,
                            customEmojiStrings: d,
                            shouldShowCustomAddButton: c,
                            frequentlyUsedEmojis: u,
                            emojiFrecencyMap: p,
                            hideCustomEmoji: m
                        } = e, g = (t = {
                            filterIsEmpty: !(null != a && a.trim()),
                            isCallout: n,
                            hideCustomEmoji: m
                        }, f().oE([t.filterIsEmpty ? M.recent : void 0, t.isCallout ? M.callout : void 0, M.people, M.nature, M.food, M.activities, M.travel, M.objects, M.symbols, M.flags, t.hideCustomEmoji ? void 0 : M.custom])), h = i(871871).f7(a) ? ? "", y = a.split(" ").filter(Boolean), b = g.map(e => {
                            var t, a, n;
                            let r = (function(e) {
                                let {
                                    environment: t,
                                    filter: o,
                                    splitFilter: a,
                                    emojiFrecencyMap: n
                                } = e;
                                return f().oE(e.emojis.map(r => {
                                    if (e.hideCustomEmoji && i(871871).qg.isCustomEmojiString(r)) return;
                                    if ("" === o) return {
                                        rank: 100,
                                        emoji: r
                                    };
                                    let s = (0, l().$)(r, x().A.state),
                                        d = [];
                                    if (s && s.keywords) d = s.keywords || [];
                                    else if (i(871871).qg.isCustomEmojiString(r)) {
                                        var c;
                                        let e = i(871871).qg.fromCustomEmojiString(r).pointer,
                                            o = t.currentUser.id;
                                        if (!o) return;
                                        let a = null == (c = t.defaultRecordCache.inMemoryRecordCache.getRecord({
                                            pointer: e,
                                            userId: o
                                        })) ? void 0 : c.value;
                                        if (!a || !a.alive) return;
                                        d = i(871871).AP(a.name)
                                    }
                                    let u = o.length < 3 || o.includes(" ") ? d : d.map(e => e.replaceAll(" ", "")),
                                        p = o.indexOf(r);
                                    if (-1 !== p) return {
                                        rank: 100 - p + B(r, n),
                                        emoji: r
                                    };
                                    let m = u.findIndex(e => e === `:${o}`);
                                    if (-1 !== m) return {
                                        rank: 100 - m + B(r, n),
                                        emoji: r
                                    };
                                    let g = u.findIndex(e => e === o);
                                    if (-1 !== g) return {
                                        rank: (10 - g) * 10 + B(r, n),
                                        emoji: r
                                    };
                                    let h = u.findIndex(e => e.startsWith(o));
                                    if (-1 !== h) return {
                                        rank: 10 - h + B(r, n),
                                        emoji: r
                                    };
                                    if (a.length > 1) {
                                        let e = s && s.uniqueKeywords || [];
                                        if (a.every(t => e.find(e => e.startsWith(t)))) return {
                                            rank: a.length + B(r, n),
                                            emoji: r
                                        }
                                    }
                                    if (u.some(e => e.includes(o))) return {
                                        rank: 1 + B(r, n),
                                        emoji: r
                                    }
                                })).sort((e, t) => t.rank - e.rank)
                            })({
                                environment: o,
                                emojis: (t = e, a = d, n = u, "recent" === t.id ? n : "callout" === t.id ? I : "custom" === t.id ? a : t.category && x().A.state.emojiByCategory[t.category] || []),
                                filter: h,
                                splitFilter: y,
                                emojiFrecencyMap: p,
                                hideCustomEmoji: m
                            }).map(e => ({
                                rank: e.rank,
                                emoji: function(e) {
                                    var t;
                                    let o = (0, i(591404).bb)();
                                    if (void 0 === o || 0 === o) return e;
                                    let a = null == (t = (0, l().$)(e, x().A.state)) ? void 0 : t.variations;
                                    return (null == a ? void 0 : a.length) === 5 || "🤝" === e ? (null == a ? void 0 : a[o - 1]) ? ? e : e
                                }(e.emoji)
                            }));
                            return {
                                category: e,
                                emojis: r
                            }
                        }), j = [], v = 0;
                        for (let {
                                category: e,
                                emojis: t
                            } of b) {
                            if (c && "custom" === e.id) {
                                let e = {
                                    rank: -1 / 0,
                                    emoji: A
                                };
                                t.unshift(e)
                            }
                            let i = 0;
                            for (; i < t.length;) {
                                let o = t.slice(i, i + r);
                                j.push({
                                    id: e.id,
                                    title: 0 === i ? e.title : void 0,
                                    emojis: o
                                }), i += o.length
                            }
                            v += t.length
                        }
                        if ("" === a || v > s) return j.map(e => ({ ...e,
                            emojis: e.emojis.map(({
                                emoji: e
                            }) => e)
                        }));
                        let C = f().Ul(j.flatMap(e => e.emojis), e => -e.rank).map(({
                            emoji: e
                        }) => e);
                        return 0 === C.length ? [] : [{
                            emojis: C
                        }]
                    })({
                        environment: g,
                        filter: e.filter,
                        isCallout: e.isCallout ? ? !1,
                        maxEmojisPerRow: P,
                        showCategoriesThreshold: Math.floor(P * T / 2),
                        customEmojiStrings: D,
                        shouldShowCustomAddButton: _,
                        frequentlyUsedEmojis: U,
                        emojiFrecencyMap: R,
                        hideCustomEmoji: p
                    }), [g, e.filter, e.isCallout, P, T, _, D, U, R, p]),
                    N = (0, o.useRef)(null),
                    O = (0, o.useMemo)(() => {
                        let e = [];
                        for (let [t, i] of V.entries()) {
                            let o;
                            o = a().A.isMobile ? y().UA : y().Sq;
                            let n = void 0 !== i.title,
                                l = t === V.length - 1 || void 0 !== V[t + 1].title;
                            n && (a().A.isMobile ? o += 47.5 : o += 33.5), l && a().A.isMobile && (o += 10), e.push(o)
                        }
                        return e
                    }, [V]),
                    K = (0, i(326361).Te)({
                        count: V.length,
                        getScrollElement: () => {
                            var e;
                            return (null == (e = N.current) ? void 0 : e.getNode()) ? ? null
                        },
                        estimateSize: e => O[e]
                    }),
                    G = (0, o.useCallback)(e => {
                        let t = V.findIndex(t => t.id === e); - 1 !== t && K.scrollToIndex(t, {
                            behavior: "auto",
                            align: "start"
                        })
                    }, [K, V]),
                    Z = (0, o.useRef)(null);
                (0, i(383953).w)(() => {
                    E()
                });
                let $ = (0, i(682985).uB)(void 0, i(419110).$),
                    q = (0, o.useRef)(!1);
                (0, o.useLayoutEffect)(() => {
                    q.current || (q.current = !0, $.setState({ ...$.state,
                        focus: {
                            section: 0,
                            indexLocal: 0,
                            indexGlobal: 0,
                            footerFocused: !1
                        }
                    }))
                }, [$]);
                let Y = _ ? 1 === V.length && V[0].emojis[0] === A : 0 === V.length;
                (0, o.useEffect)(() => {
                    Y ? $.unsetFocus() : $.setState({ ...$.state,
                        focus: {
                            section: 0,
                            indexLocal: 0,
                            indexGlobal: 0,
                            footerFocused: !1
                        }
                    })
                }, [e.filter, $, Y]);
                let J = (0, o.useMemo)(() => _ ? {
                        key: "custom-emoji-add",
                        action: () => {
                            Z.current && i(757573).A.setState({
                                open: !0,
                                isEditing: !1,
                                entrypoint: "picker",
                                originRect: Z.current.getBoundingClientRect(),
                                uploadFileEventHandlers: d
                            })
                        },
                        render: e => (0, r.jsx)(i(51831).m, {
                            content: () => C,
                            children: t => (0, r.jsx)(i(64960).Ay, { ...e,
                                ...t,
                                ref: Z,
                                ignoreLocalHoverState: !1,
                                style: S.style0,
                                children: (0, r.jsx)(i(16275).I, {
                                    icon: i(638501).plusSmallIcon,
                                    size: "sm",
                                    colorVariant: "secondary"
                                })
                            })
                        })
                    } : null, [d, _]),
                    Q = (0, i(682985).K8)(() => (0, i(103955).ze)(g, w), [g, w]),
                    X = [],
                    ee = !1;
                if (Y) X.push({
                    key: "no results",
                    items: [{
                        key: "no results",
                        action: () => {
                            Z.current && _ && i(757573).A.setState({
                                open: !0,
                                isEditing: !1,
                                entrypoint: "no_results",
                                originRect: Z.current.getBoundingClientRect(),
                                uploadFileEventHandlers: d
                            })
                        },
                        render: (e, t) => (0, r.jsxs)("div", {
                            style: { ...s && S.style7,
                                display: "flex",
                                flexDirection: s ? "row" : "column"
                            },
                            children: [(0, r.jsx)(i(320819).A, { ...!_ && e,
                                caption: h.formatMessage(v.noResults),
                                style: S.style1
                            }), _ ? (0, r.jsxs)(i(64960).Ay, { ...e,
                                ref: Z,
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6,
                                    padding: "4px 8px",
                                    margin: s ? "2px 8px" : "0 12px",
                                    height: 28,
                                    borderRadius: 6,
                                    border: `1px solid ${i(632079).Tj.border.primary}`,
                                    fontWeight: i(699422).Wy.medium,
                                    fontSize: i(699422).J.UIRegular.desktop,
                                    whiteSpace: "nowrap"
                                },
                                children: [(0, r.jsx)(i(16275).I, {
                                    icon: i(638501).plusSmallIcon,
                                    size: "sm",
                                    colorVariant: "primary"
                                }), C]
                            }) : null]
                        })
                    }]
                });
                else if (1 === V.length && void 0 === V[0].id) {
                    let e = f().sb(V[0].emojis).map(e => e === A ? J : W(e)).filter(i(722371).Pe);
                    X.push({
                        key: "search-results",
                        items: e,
                        render: e => (0, r.jsx)(i(844565).A, {
                            shouldShowBottomDivider: !0,
                            children: (0, r.jsx)("div", {
                                style: Q,
                                children: e.children
                            })
                        }, e.key)
                    })
                } else ee = !0, K.getVirtualItems().map(e => {
                    var o;
                    let {
                        key: n,
                        index: l,
                        start: s,
                        end: d,
                        size: c
                    } = e, u = V[l], p = void 0 !== u.title, m = l === V.length - 1 || void 0 !== V[l + 1].title, [g, h] = [K.scrollOffset ? ? 0, (K.scrollOffset ? ? 0) + ((null == (o = K.scrollRect) ? void 0 : o.height) ? ? 0)];
                    h < s || g >= d || void 0 !== t || (t = u.id);
                    let f = u.emojis.map(e => e === A ? J : W(e)).filter(i(722371).Pe);
                    return {
                        key: n.toString(),
                        items: f,
                        render: e => (0, r.jsx)("div", {
                            style: {
                                position: "absolute",
                                top: 0,
                                insetInlineStart: 0,
                                width: "100%",
                                height: c,
                                transform: `translateY(${s}px)`
                            },
                            children: (0, r.jsx)("div", {
                                "data-index": l,
                                children: (0, r.jsx)(i(844565).A, {
                                    title: u.title,
                                    disableDesktopPadding: !0,
                                    disableMobilePadding: !0,
                                    disableMobileBorders: !0,
                                    mobileTitleStyle: { ...p ? S.style8 : {}
                                    },
                                    desktopTitleStyle: { ...p ? S.style9 : {}
                                    },
                                    style: S.style2,
                                    children: (0, r.jsx)("div", {
                                        style: { ...Q,
                                            ...p && a().A.isMobile ? S.style10 : {},
                                            ...m && a().A.isMobile ? S.style11 : {},
                                            ...k && {
                                                boxShadow: function(e) {
                                                    let {
                                                        isFirstRowInSection: t,
                                                        isLastRowInSection: o
                                                    } = e;
                                                    return t && o ? `0 1px 0 ${i(632079).Tj.border.secondaryTranslucent}, 0 -1px 0 ${i(632079).Tj.border.secondaryTranslucent}` : t ? `0 -1px 0 ${i(632079).Tj.border.secondaryTranslucent}` : o ? `0 1px 0 ${i(632079).Tj.border.secondaryTranslucent}` : "none"
                                                }({
                                                    isFirstRowInSection: p,
                                                    isLastRowInSection: m
                                                })
                                            }
                                        },
                                        children: e.children
                                    })
                                })
                            }, n.toString())
                        }, l)
                    }
                }).forEach(e => e && X.push(e));
                let et = b.isDesktop && X.length > 0 ? 0 : void 0,
                    ei = (0, r.jsx)(i(558045).A, {
                        style: S.style3,
                        type: i(558045).O.Grid,
                        getItemsPerRowForSection: () => P,
                        renderRow: (e, t) => (0, r.jsx)(i(4458).fI, {
                            role: "row",
                            children: e
                        }, t),
                        store: $,
                        initialFocus: et,
                        sections: X,
                        disableKeyboardArrowWrap: !0,
                        unfocusOnScroll: a().A.isMobile,
                        performHandleEnterOnTab: s,
                        comboboxProps: u,
                        captureKeyboardOnlyWhenFocused: !s
                    });
                if (!ee) return (0, r.jsx)(i(4458).VP, {
                    width: "100%",
                    height: "100%",
                    children: (0, r.jsx)("div", {
                        style: S.style6,
                        children: ei
                    })
                });
                let eo = (0, r.jsx)(j, {
                    isHidden: e => {
                        switch (e.id) {
                            case "callout":
                                return !0;
                            case "custom":
                                return p || !L && 0 === D.length;
                            case "add":
                                return !_;
                            default:
                                return !1
                        }
                    },
                    isFocused: e => t === e.id,
                    isDisabled: e => {
                        if (["custom", "add"].includes(e.id)) return !1;
                        let t = V.find(t => t.id === e.id);
                        return void 0 === t || 0 === t.emojis.length
                    },
                    onCategoryClick: (e, t) => {
                        "add" === e.id ? i(757573).A.setState({
                            open: !0,
                            isEditing: !1,
                            entrypoint: "categories_bar",
                            originRect: t.currentTarget.getBoundingClientRect(),
                            uploadFileEventHandlers: d
                        }) : G(e.id)
                    }
                });
                return (0, r.jsxs)(i(4458).VP, {
                    width: "100%",
                    height: "100%",
                    children: [(0, r.jsx)(i(136508)._, {
                        type: i(644154).A.Y,
                        style: {
                            width: "100%",
                            flexGrow: 1,
                            maxHeight: b.isDesktop ? y().w$ : void 0,
                            paddingBottom: 6
                        },
                        ref: N,
                        children: (0, r.jsx)("div", {
                            style: {
                                height: K.getTotalSize(),
                                width: "100%",
                                position: "relative"
                            },
                            children: ei
                        })
                    }), eo]
                })
            }
            let P = !1;
            async function T() {
                if (!P) {
                    for (let t in await (0, i(895732).x)(), x().A.state.positionalEmojiData) {
                        var e;
                        let i = null == (e = (0, l().$)(t, x().A.state)) ? void 0 : e.keywords;
                        i && (n().fB[t] = { ...n().fB[t],
                            uniqueKeywords: f().sb(i.flatMap(e => e.split(" ")))
                        })
                    }
                    P = !0
                }
            }
            async function E() {
                await (0, i(288442).y)(), await T()
            }

            function B(e, t) {
                let i = t[e];
                return i ? 100 * i.f : 0
            }
        },
        885963: (e, t, i) => {
            i.d(t, {
                A: () => a,
                l: () => l
            }), i(581454), i(296540);
            var o = i(474848);

            function a() {
                let e = (0, i(682985).K8)(() => {
                        var e;
                        return null == (e = i(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettings()) ? void 0 : e.emoji_picker_skin_tone
                    }, []),
                    t = (0, i(533992).v3)(),
                    a = (0, i(682985).uB)(void 0, i(510969).A),
                    r = (0, i(533992).WS)();
                return (0, o.jsx)(i(51831).m, {
                    content: () => (0, o.jsx)(i(109939).sA, {
                        defaultMessage: "Select skin tone",
                        id: "emojiPickerSkinTonePicker.selectSkinTone"
                    }),
                    placement: "bottom",
                    children: s => (0, o.jsx)(i(656252).A, {
                        buttonPopupStore: a,
                        popupType: i(656252).z.Popup,
                        content: a => (function(e) {
                            let {
                                parent: t,
                                environment: a,
                                currentSkinTone: r
                            } = e, s = i(735303).pi.map((e, n) => ({
                                key: e,
                                action: () => {
                                    t.close(), l({
                                        environment: a,
                                        skinTone: n
                                    })
                                },
                                render: t => (0, o.jsx)(i(625478).A, { ...t,
                                    insertEmoji: () => {},
                                    emoji: e,
                                    variations: void 0,
                                    showTooltip: !1
                                })
                            }));
                            return (0, o.jsx)(i(519451).A, {
                                debugName: "EmojiPickerSkinTonePicker",
                                capture: !0,
                                allowEsc: !0,
                                children: (0, o.jsx)(i(558045).A, {
                                    type: i(558045).O.Horizontal,
                                    initialFocus: r,
                                    sections: [{
                                        key: "variations",
                                        render: e => (0, o.jsx)("div", {
                                            style: n,
                                            ...e
                                        }),
                                        items: s
                                    }]
                                })
                            })
                        })({
                            parent: a,
                            environment: t,
                            currentSkinTone: e
                        }),
                        ...s,
                        children: t => (0, o.jsx)(i(988022).p, {
                            size: "sm",
                            style: {
                                fontSize: 20,
                                justifyContent: "center",
                                height: r ? i(310324).LG : i(310324).yD,
                                width: r ? i(310324).LG : i(310324).yD
                            },
                            ...(0, i(63390).A)(t, s),
                            children: void 0 !== e ? i(735303).pi[e] : "✋"
                        })
                    })
                })
            }
            let n = {
                display: "flex",
                padding: 4
            };

            function l(e) {
                let {
                    environment: t,
                    skinTone: o
                } = e, a = i(728372).AppStoreCurrentUserSettingsStore.state;
                a && (0, i(377796).createAndCommit)({
                    userAction: "mediaPicker.setEmojiSkinTone",
                    environment: t,
                    cellTarget: "main",
                    canUndo: !0,
                    perform: e => {
                        (0, i(862759).m)({
                            userSettingsStore: a,
                            transaction: e,
                            data: {
                                emoji_picker_skin_tone: o
                            }
                        })
                    }
                })
            }
        },
        939434: (e, t, i) => {
            i.d(t, {
                w: () => a
            }), i(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.17 0.97 9.66 14.06",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M8.442 1.158a.625.625 0 0 0-.884 0l-4.2 4.2a.625.625 0 0 0 .884.884L8 2.484l3.758 3.758a.625.625 0 0 0 .884-.884L8.445 1.16zm4.2 8.6a.625.625 0 0 0-.884 0L8 13.516 4.242 9.758a.625.625 0 1 0-.884.884l4.2 4.2c.244.244.64.244.884 0l.005-.005 4.195-4.195a.625.625 0 0 0 0-.884"
                    })
                },
                a = (0, i(104509).wt)("arrowChevronDoubleUpAndDownSmall", o, "small")
        },
        969278: (e, t, i) => {
            i.r(t), i.d(t, {
                arrowStraightRightSmallIcon: () => a,
                iconDefinition: () => o
            }), i(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.12 3.05 11.76 9.9",
                    directional: !0,
                    svg: (0, i(474848).jsx)("path", {
                        d: "M9.372 3.238a.625.625 0 1 0-.884.884l3.253 3.253H2.75a.625.625 0 0 0 0 1.25h8.991l-3.253 3.253a.625.625 0 0 0 .884.884l4.32-4.32a.625.625 0 0 0 0-.884z"
                    })
                },
                a = (0, i(104509).wt)("arrowStraightRightSmall", o, "small")
        },
        999129: (e, t, i) => {
            i.d(t, {
                M: () => a
            }), i(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.97 2.68 12.51 14.37",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M10.282 3.66a5.39 5.39 0 0 0-5.217-.54l-.711.305a.63.63 0 0 0-.38.575v12.425a.625.625 0 1 0 1.25 0v-3.913l.333-.142a4.14 4.14 0 0 1 4.008.414 5.39 5.39 0 0 0 5.504.405l1.06-.53a.63.63 0 0 0 .346-.56V4a.625.625 0 0 0-.905-.558l-1.06.53c-1.36.68-2.983.56-4.228-.312m-5.057 7.495V4.412l.332-.142a4.14 4.14 0 0 1 4.008.413 5.39 5.39 0 0 0 5.504.406l.156-.078v6.703l-.715.357c-1.36.68-2.983.56-4.228-.312a5.4 5.4 0 0 0-5.057-.604"
                    })
                },
                a = (0, i(104509).wt)("flag", o, "default")
        }
    }
]);