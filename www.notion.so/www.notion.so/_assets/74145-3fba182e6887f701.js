"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [74145], {
        132866: (e, s, t) => {
            t.d(s, {
                Y: () => o,
                R: () => l
            }), t(296540);
            let i = (0, t(109939).YK)({
                fullAccessLabel: {
                    id: "workflowPermissions.fullAccess.label",
                    defaultMessage: "Full Access"
                },
                fullAccessCaption: {
                    id: "workflowPermissions.fullAccess.caption",
                    defaultMessage: "Edit settings, interact, get notified, and share agent with others"
                },
                canEditAndInteractLabel: {
                    id: "workflowPermissions.canEditAndInteract.label",
                    defaultMessage: "Can Edit"
                },
                canEditAndInteractCaption: {
                    id: "workflowPermissions.canEditAndInteract.caption",
                    defaultMessage: "Edit settings and interact with agent"
                },
                canInteractLabel: {
                    id: "workflowPermissions.canInteract.label",
                    defaultMessage: "Can View and Interact"
                },
                canInteractCaption: {
                    id: "workflowPermissions.canInteract.caption",
                    defaultMessage: "View settings and interact anywhere agent is accessible"
                }
            });
            var a = t(474848);
            let n = {
                labelContainer: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    minWidth: 0
                },
                labelText: {
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden"
                },
                attentionDot: {
                    position: "absolute",
                    top: 2,
                    insetInlineEnd: 2,
                    width: 9,
                    height: 9,
                    borderRadius: "50%",
                    background: t(632079).Tj.orange.icon.accentPrimary,
                    border: `1px solid ${t(632079).Tj.background.primary}`,
                    flexShrink: 0
                }
            };

            function o({
                type: e,
                role: s,
                events: i,
                disabled: r,
                buttonStyle: d,
                buttonContents: c,
                buttonColorPalette: u,
                buttonIconColorPalette: p,
                icon: m,
                table: b,
                isCurrentUser: g,
                from: f,
                isNoneOverride: x,
                displayRoleInButton: h,
                canCreate: y,
                prefixIcon: _
            }) {
                let v = "shareMenu" === f,
                    A = void 0 !== h && (0, t(642157).PW)(s) && h !== s,
                    j = !(0, t(803254).F)() && v && "user_permission" === e && A && !0 !== r,
                    w = _ || j,
                    S = (0, t(960253).I)(() => ({
                        button: j ? { ...d,
                            position: (null == d ? void 0 : d.position) ? ? "relative"
                        } : d ? ? {},
                        icon: {
                            width: 14,
                            height: 14,
                            marginInlineStart: 4,
                            fill: "blue" === p ? t(632079).Tj.blue.text.secondary : t(632079).Tj.icon.secondary
                        },
                        iconContainer: {
                            fill: "blue" === p ? t(632079).Tj.blue.text.secondary : t(632079).Tj.icon.secondary,
                            padding: 2,
                            position: "relative"
                        }
                    }), [d, p, j]),
                    M = m || !r && t(595453).arrowChevronSingleDownSmallIcon;
                return t(986939).A.isMobile && v ? r ? null : (0, a.jsx)(t(988022).p, { ...i,
                    disabled: r,
                    style: S.iconContainer,
                    colorPalette: u,
                    children: (0, a.jsx)(t(16275).I, {
                        icon: t(397900).ellipsisIcon,
                        size: "lg",
                        colorPalette: p
                    })
                }) : (0, a.jsxs)(t(988022).p, {
                    id: void 0,
                    ...i,
                    disabled: r,
                    style: S.button,
                    colorPalette: u,
                    children: [c || (w ? (0, a.jsxs)("span", {
                        className: "notranslate",
                        style: n.labelContainer,
                        children: [_, (0, a.jsx)("span", {
                            style: n.labelText,
                            children: (0, a.jsx)(t(109939).sA, { ...l({
                                    type: e,
                                    role: h ? ? s,
                                    table: b,
                                    isRemovable: !1,
                                    isNoneOverride: x,
                                    canCreate: y
                                }).label
                            })
                        })]
                    }) : (0, a.jsx)("span", {
                        className: "notranslate",
                        style: n.labelText,
                        children: (0, a.jsx)(t(109939).sA, { ...l({
                                type: e,
                                role: h ? ? s,
                                table: b,
                                isRemovable: !1,
                                isNoneOverride: x,
                                canCreate: y
                            }).label
                        })
                    })), j ? (0, a.jsx)("span", {
                        "aria-hidden": !0,
                        style: n.attentionDot
                    }) : void 0, M ? M(S.icon) : void 0]
                })
            }
            let r = {
                marginInlineEnd: 4
            };

            function l({
                type: e,
                role: s,
                table: n,
                isRemovable: o,
                isNoneOverride: d,
                canCreate: c,
                omitSuggestFromCaptions: u
            }) {
                if (n === t(832375).C0E && "access" !== s && "limited" !== s && 1) {
                    let e = function(e) {
                        switch (e) {
                            case "editor":
                                return {
                                    label: i.fullAccessLabel,
                                    caption: i.fullAccessCaption
                                };
                            case "read_and_write":
                                return {
                                    label: i.canEditAndInteractLabel,
                                    caption: i.canEditAndInteractCaption
                                };
                            case "reader":
                            case "comment_only":
                                return {
                                    label: i.canInteractLabel,
                                    caption: i.canInteractCaption
                                };
                            default:
                                return {
                                    label: t(805186).S.noAccessLabel,
                                    caption: void 0
                                }
                        }
                    }(s);
                    if ("none" !== s || !o) return e
                }
                if ("access" === s) return {
                    label: t(805186).S.variousAccessLabel
                };
                if ("limited" === s) return {
                    label: t(805186).S.limitedAccessLabel
                };
                if ((0, t(138798).II)(s)) return (0, t(579825).sK)(s, "workflow" === n ? "block" : n);
                let p = u ? t(805186).S.canEditCaptionNoSuggest : t(805186).S.canEditCaptionV2,
                    m = u ? t(805186).S.canCommentCaptionNoSuggest : t(805186).S.canCommentCaptionV2;
                switch (s) {
                    case "editor":
                        return {
                            label: t(805186).S.fullAccessLabel,
                            caption: t(805186).S.fullAccessCaption
                        };
                    case "membership_admin":
                    case "read_and_write":
                        return {
                            label: t(805186).S.canEditLabel,
                            caption: p
                        };
                    case "content_only_editor":
                        return {
                            label: t(805186).S.canEditContentLabel,
                            caption: t(805186).S.canEditContentCaption
                        };
                    case "reader":
                        return {
                            label: c ? t(805186).S.canReadAndCreateLabel : t(805186).S.canReadLabel,
                            caption: void 0
                        };
                    case "comment_only":
                        return {
                            label: c ? t(805186).S.canCommentAndCreateLabel : t(805186).S.canCommentLabel,
                            caption: m
                        };
                    case "none":
                        if ("public_permission" === e) return {
                            label: o ? t(805186).S.publicShareLinkRemoveLabel : t(805186).S.publicShareLinkNoAccessLabel,
                            hideSelectionCheckIcon: o
                        };
                        if (o) return {
                            label: "collection_property_permission" === e ? t(805186).S.removePermissionRuleLabel : t(805186).S.removeWorkspaceLabel,
                            style: {
                                color: t(632079).oZ.red
                            },
                            icon: (0, a.jsx)(t(16275).I, {
                                icon: t(968411).trashIcon,
                                style: r
                            }),
                            hideSelectionCheckIcon: o
                        };
                        if (d) return {
                            label: t(805186).S.customAgentsNoneLabel,
                            style: {
                                color: t(632079).oZ.red
                            }
                        };
                        return {
                            label: c ? t(805186).S.canOnlyCreateLabel : t(805186).S.noAccessLabel,
                            style: {
                                color: t(632079).oZ.red
                            }
                        };
                    default:
                        (0, t(722371).HB)(s)
                }
            }
        },
        270054: (e, s, t) => {
            t.d(s, {
                $: () => o,
                N: () => n
            }), t(898992), t(354520), t(581454);
            var i = t(296540),
                a = t(474848);
            let n = (0, i.createContext)({
                organizationOwnerRecordCache: void 0,
                updateCacheWithRecordMap: e => {},
                updateCacheWithRecordMaps: e => {}
            });

            function o({
                children: e
            }) {
                let s = (0, t(533992).v3)(),
                    [d, c] = (0, i.useState)(void 0);
                (0, i.useEffect)(() => {
                    c(l(s))
                }, [s]);
                let u = (0, i.useCallback)(e => {
                        var i;
                        let a = null == (i = t(728372).AppStoreCurrentUserStore.state) ? void 0 : i.id;
                        if (!a || !e.data.organizationOwnerRecordMap || !e.data.organizationOwnerRecordMap) return;
                        let n = t(412951).RecordMap.create(e.data.organizationOwnerRecordMap);
                        c(e => r({
                            environment: s,
                            currentUserId: a,
                            prevCache: e,
                            recordMap: n
                        }))
                    }, [s]),
                    p = (0, i.useCallback)(e => {
                        var i;
                        let a = null == (i = t(728372).AppStoreCurrentUserStore.state) ? void 0 : i.id;
                        if (!a) return;
                        let n = e.map(e => {
                                if (e.data.organizationOwnerRecordMap && e.data.organizationOwnerRecordMap) return t(412951).RecordMap.create(e.data.organizationOwnerRecordMap)
                            }).filter(t(722371).O9),
                            o = t(412951).RecordMap.merge(n);
                        c(e => r({
                            environment: s,
                            currentUserId: a,
                            prevCache: e,
                            recordMap: o
                        }))
                    }, [s]);
                return d ? (0, a.jsx)(n.Provider, {
                    value: {
                        organizationOwnerRecordCache: d,
                        updateCacheWithRecordMap: u,
                        updateCacheWithRecordMaps: p
                    },
                    children: e
                }) : null
            }

            function r(e) {
                let {
                    environment: s,
                    currentUserId: t,
                    prevCache: i,
                    recordMap: a
                } = e;
                if (!i) return l(s);
                for (let {
                        pointer: e,
                        model: s
                    } of a) i.setModelAndRole({
                    pointer: e,
                    userId: t
                }, s, "editor");
                return l(s, i.data)
            }

            function l(e, s) {
                let i = new(t(870941)).A({
                    name: "organizationSettingsConsoleCache",
                    data: s
                });
                return i.addCacheFallback(e.defaultRecordCache.inMemoryRecordCache), i
            }
            n.displayName = "OrganizationCacheContext"
        },
        339168: (e, s, t) => {
            t.d(s, {
                _: () => n
            });
            var i = t(296540),
                a = t(474848);

            function n({
                permissionItem: e,
                from: s
            }) {
                let o = (0, t(533992).v3)(),
                    {
                        organizationOwnerRecordCache: r
                    } = (0, i.useContext)(t(270054).N),
                    l = (0, t(682985).O$)(t(728372).AppStoreSidebarSpaceStore),
                    d = (0, t(682985).K8)(() => null == l ? void 0 : l.getName(), [l]),
                    c = (0, t(682985).K8)(() => {
                        if ("group_permission" === e.type && l) return (0, t(13717).E)({
                            spaceStore: l,
                            groupId: e.group_id
                        }).getName()
                    }, [e, l]),
                    u = (0, t(682985).K8)(() => {
                        if ("explicit_team_permission" !== e.type && "explicit_team_owner_permission" !== e.type) return;
                        let s = e.team_id;
                        return new(t(681735)).h(o, {
                            id: s,
                            table: t(832375).yKj
                        }, {
                            inMemoryRecordCache: r
                        }).getName()
                    }, [e, o, r]),
                    p = (0, t(682985).K8)(() => {
                        if ("collection_property_permission" !== e.type || (null == s ? void 0 : s.table) !== t(832375).VlP) return;
                        let i = s.collectionId;
                        return new(t(356912)).m(o, {
                            id: i,
                            table: t(832375).VlP
                        }).getName()
                    }, [o, s, e.type]);
                switch (e.type) {
                    case "space_permission":
                        return d ? (0, a.jsx)(t(109939).sA, {
                            id: "searchTargetPermissionItem.spacePermission",
                            defaultMessage: "Everyone at {spaceName}",
                            values: {
                                spaceName: d
                            }
                        }) : null;
                    case "space_owner_permission":
                    case "integration_space_owner_permission":
                    case "user_permission":
                    case "bot_permission":
                    case "exclusive_user_permission":
                    case "public_permission":
                    case "deleted_permission":
                    case "restricted_permission":
                    case "trusted_domain_permission":
                    default:
                        return null;
                    case "explicit_team_permission":
                    case "team_permission":
                        return (0, a.jsx)(t(109939).sA, {
                            id: "searchTargetPermissionItem.teamPermission",
                            defaultMessage: "{name} teamspace",
                            values: {
                                name: u
                            }
                        });
                    case "team_owner_permission":
                    case "explicit_team_owner_permission":
                        return (0, a.jsx)(t(109939).sA, {
                            id: "searchTargetPermissionItem.teamOwnersPermission",
                            defaultMessage: "{name} teamspace",
                            values: {
                                name: u
                            }
                        });
                    case "explicit_team_guest_permission":
                        return (0, a.jsx)(t(109939).sA, {
                            id: "searchTargetPermissionItem.teamGuestsPermission",
                            defaultMessage: "Team guests"
                        });
                    case "group_permission":
                        return c ? (0, a.jsx)(t(109939).sA, {
                            id: "searchTargetPermissionItem.groupPermission",
                            defaultMessage: "{groupName} group",
                            values: {
                                groupName: c
                            }
                        }) : (0, a.jsx)(t(109939).sA, {
                            id: "searchTargetPermissionItem.groupPermissionWithoutName",
                            defaultMessage: "Group"
                        });
                    case "collection_property_permission":
                        return p ? (0, a.jsx)(t(109939).sA, {
                            id: "searchTargetPermissionItem.collectionPropertyPermission",
                            defaultMessage: "permission rule on the {collectionName} database",
                            values: {
                                collectionName: p
                            }
                        }) : (0, a.jsx)(t(109939).sA, {
                            id: "searchTargetPermissionItem.collectionPropertyPermissionWithoutName",
                            defaultMessage: "permission rule on a database"
                        })
                }
            }
        },
        357194: (e, s, t) => {
            t.d(s, {
                EL: () => i,
                KG: () => d,
                L5: () => l,
                PA: () => u,
                Q$: () => n,
                Wc: () => b,
                X5: () => p,
                X6: () => h,
                YU: () => f,
                jL: () => m,
                mx: () => g,
                pn: () => r,
                sP: () => a,
                uH: () => o,
                vx: () => c
            });
            let i = {
                    role: "none"
                },
                a = {
                    role: "read_and_write"
                },
                n = {
                    role: "content_only_editor"
                },
                o = {
                    role: "comment_only"
                },
                r = {
                    role: "reader"
                },
                l = {
                    role: "editor"
                },
                d = [],
                c = [{
                    role: "none"
                }],
                u = [{
                    role: "reader"
                }, {
                    role: "none"
                }],
                p = [{
                    role: "editor"
                }, {
                    role: "read_and_write"
                }, {
                    role: "comment_only"
                }, {
                    role: "reader"
                }],
                m = [{
                    role: "read_and_write"
                }, {
                    role: "comment_only"
                }, {
                    role: "reader"
                }],
                b = [{
                    role: "read_and_write"
                }, {
                    role: "comment_only"
                }, {
                    role: "reader"
                }, {
                    role: "none"
                }],
                g = [{
                    role: "editor"
                }, {
                    role: "read_and_write"
                }, {
                    role: "content_only_editor"
                }, {
                    role: "comment_only"
                }, {
                    role: "reader"
                }, {
                    role: "none"
                }],
                f = [{
                    role: "editor"
                }, {
                    role: "read_and_write"
                }, {
                    role: "reader"
                }, {
                    role: "none"
                }],
                x = (0, t(109939).YK)({
                    fullAccessTeamGuestsDisabledMessage: {
                        id: "permissionRoleSelect.teamGuestPermissionItem.disabledPermissionitem.tooltip",
                        defaultMessage: "Teamspace guests can’t have full access."
                    }
                }),
                h = {
                    role: "editor",
                    disabledInfo: {
                        isDisabled: !0,
                        disabledMessage: t(962299).A.formatMessage(x.fullAccessTeamGuestsDisabledMessage)
                    }
                }
        },
        408033: (e, s, t) => {
            t.d(s, {
                F: () => n
            }), t(296540);
            var i = t(474848);
            let a = {
                marginTop: 4
            };

            function n(e) {
                let {
                    role: s
                } = e, n = (0, t(109939).tz)(), o = (0, t(625921).I2)(s);
                return (0, i.jsx)(t(636518).Ay, { ...e,
                    title: (0, i.jsx)(t(111010).D, {
                        styleKey: "captionMedium",
                        colorVariant: "secondary",
                        children: n.formatMessage((0, t(579825).sK)(s, void 0).label)
                    }),
                    shouldWrapCaption: !0,
                    style: t(986939).A.isMobile ? {
                        padding: "12px 4px"
                    } : {
                        padding: 4,
                        marginTop: 2,
                        marginBottom: 2
                    },
                    captionStyle: a,
                    caption: (0, i.jsx)("div", {
                        children: o
                    })
                })
            }
        },
        426901: (e, s, t) => {
            t.d(s, {
                S: () => i
            });

            function i(e) {
                return !!(0, t(216260).dL)() && ((0, t(663842).m)({
                    environment: e
                }) ? "personal" : "plus")
            }
        },
        532087: (e, s, t) => {
            t.d(s, {
                $: () => n,
                J: () => a
            }), t(296540);
            var i = t(474848);

            function a(e) {
                let {
                    permissionItem: s,
                    permissionFrom: a,
                    sourceName: n
                } = e;
                return function(e) {
                    switch (e.type) {
                        case "space_permission":
                        case "explicit_team_permission":
                        case "team_permission":
                        case "team_owner_permission":
                        case "explicit_team_owner_permission":
                        case "explicit_team_guest_permission":
                        case "group_permission":
                        case "collection_property_permission":
                            return !0;
                        default:
                            return !1
                    }
                }(s) ? (0, i.jsx)(t(339168)._, {
                    permissionItem: s,
                    from: a
                }) : "user_permission" === s.type ? (0, i.jsx)(t(109939).sA, {
                    id: "searchTargetPermissionItem.userPermission",
                    defaultMessage: "user access on {sourceName}",
                    values: {
                        sourceName: n
                    }
                }) : "public_permission" === s.type && (0, t(809934).v)(s) ? (0, i.jsx)(t(109939).sA, {
                    id: "searchTargetPermissionItem.publicPermission.anyoneWithTheLink",
                    defaultMessage: "anyone on the web with link"
                }) : (t(773352).log({
                    level: "info",
                    from: "getPermissionItemNameComponent",
                    type: "unhandledPermissionItemType",
                    data: {
                        miscDataToConvertToString: {
                            permissionItem: JSON.stringify(s)
                        }
                    }
                }), null)
            }

            function n(e) {
                let {
                    role: s,
                    table: n,
                    type: o,
                    mostPermissivePermissions: r,
                    canCreate: l
                } = e, d = (0, t(533992).v3)(), c = (0, t(109939).tz)(), u = r && r.length > 0 ? r[0] : void 0, {
                    label: p
                } = (0, t(132866).R)({
                    type: o,
                    role: s,
                    table: n,
                    isRemovable: !1,
                    isNoneOverride: !1,
                    canCreate: l
                }), m = null == u ? void 0 : u.permissionItem, b = null == u ? void 0 : u.from, g = (0, t(682985).K8)(() => {
                    if (m && "user_permission" === m.type) {
                        if ((null == b ? void 0 : b.table) === t(832375).evP) {
                            let e = new(t(970831)).B(d, {
                                id: b.blockId,
                                table: t(832375).evP
                            }).getTitleValue();
                            return (0, t(247438).q4_)(e) || (0, t(543464).L)(c)
                        }
                        if ((null == b ? void 0 : b.table) === t(832375).yKj) return new(t(681735)).h(d, {
                            id: b.teamId,
                            table: t(832375).yKj
                        }).getName()
                    }
                }, [b, m, d, c]), f = m && (0, t(642157).PW)(m.role) ? function(e) {
                    let {
                        permissionItem: s,
                        permissionFrom: n,
                        sourceName: o
                    } = e, r = a({
                        permissionItem: s,
                        permissionFrom: n,
                        sourceName: o
                    });
                    return r ? (0, i.jsx)(t(109939).sA, {
                        id: "PermissionRoleSelect.currentAccessSection.viaSource",
                        defaultMessage: "via {permissionItemName}",
                        values: {
                            permissionItemName: (0, i.jsx)(t(111010).D, {
                                as: "span",
                                styleKey: "captionSemibold",
                                children: r
                            })
                        }
                    }) : null
                }({
                    permissionItem: m,
                    permissionFrom: b,
                    sourceName: g
                }) : void 0;
                return (0, i.jsx)(t(636518).Ay, {
                    title: (0, i.jsx)(t(109939).sA, { ...p
                    }),
                    caption: f,
                    shouldWrapCaption: !0,
                    style: t(986939).A.isMobile ? t(761163).$w : void 0
                })
            }
        },
        625921: (e, s, t) => {
            t.d(s, {
                AC: () => r,
                I2: () => n,
                YC: () => o
            }), t(296540);
            var i = t(474848);

            function a(e) {
                let {
                    enabled: s,
                    labelIfEnabled: a,
                    labelIfDisabled: n
                } = e;
                return (0, i.jsx)(t(4458).fI, {
                    gap: 4,
                    alignItems: "center",
                    children: s ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(t(16275).I, {
                            icon: t(971730).checkmarkSmallIcon,
                            size: "sm",
                            colorPalette: "blue",
                            colorVariant: "accentPrimary"
                        }), (0, i.jsx)(t(111010).D, {
                            styleKey: "captionRegular",
                            colorVariant: "secondary",
                            children: a
                        })]
                    }) : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(t(16275).I, {
                            icon: t(25094).xMarkSmallIcon,
                            size: "sm",
                            colorVariant: "tertiary"
                        }), (0, i.jsx)(t(111010).D, {
                            styleKey: "captionRegular",
                            colorVariant: "tertiary",
                            children: n
                        })]
                    })
                })
            }

            function n(e) {
                let s = "none" !== e;
                return [(0, i.jsx)(a, {
                    enabled: s && e.read_content,
                    labelIfEnabled: (0, i.jsx)(t(109939).sA, {
                        id: "capabilitiesTooltip.mixedAccess.readContent.enabled",
                        defaultMessage: "Can read content"
                    }),
                    labelIfDisabled: (0, i.jsx)(t(109939).sA, {
                        id: "capabilitiesTooltip.mixedaccess.readContent.disabled",
                        defaultMessage: "Cannot read content"
                    })
                }, "read_content"), (0, i.jsx)(a, {
                    enabled: s && e.insert_content,
                    labelIfEnabled: (0, i.jsx)(t(109939).sA, {
                        id: "capabilitiesTooltip.mixedaccess.insertContent.enabled",
                        defaultMessage: "Can insert content"
                    }),
                    labelIfDisabled: (0, i.jsx)(t(109939).sA, {
                        id: "capabilitiesTooltip.mixedaccess.insertContent.disabled",
                        defaultMessage: "Cannot insert content."
                    })
                }, "insert_content"), (0, i.jsx)(a, {
                    enabled: s && e.update_content,
                    labelIfEnabled: (0, i.jsx)(t(109939).sA, {
                        id: "capabilitiesTooltip.mixedaccess.updateContent.enabled",
                        defaultMessage: "Can update content"
                    }),
                    labelIfDisabled: (0, i.jsx)(t(109939).sA, {
                        id: "capabilitiesTooltip.mixedaccess.updateContent.disabled",
                        defaultMessage: "Cannot update content"
                    })
                }, "update_content"), (0, i.jsx)(a, {
                    enabled: s && e.insert_comment,
                    labelIfEnabled: (0, i.jsx)(t(109939).sA, {
                        id: "capabilitiesTooltip.insertComment.enabled",
                        defaultMessage: "Can comment"
                    }),
                    labelIfDisabled: (0, i.jsx)(t(109939).sA, {
                        id: "capabilitiesTooltip.insertComment.disabled",
                        defaultMessage: "Cannot comment"
                    })
                }, "insert_comment"), (0, i.jsx)(a, {
                    enabled: s && e.read_comment,
                    labelIfEnabled: (0, i.jsx)(t(109939).sA, {
                        id: "capabilitiesTooltip.readComment.enabled",
                        defaultMessage: "Can read comments"
                    }),
                    labelIfDisabled: (0, i.jsx)(t(109939).sA, {
                        id: "capabilitiesTooltip.readComment.disabled",
                        defaultMessage: "Cannot read comments"
                    })
                }, "read_comment")]
            }

            function o(e) {
                return [(0, i.jsx)(a, {
                    enabled: e.read_user_without_email,
                    labelIfEnabled: (0, i.jsx)(t(109939).sA, {
                        id: "capabilitiesTooltip.userAccess.readUsers.enabled",
                        defaultMessage: "Can view users"
                    }),
                    labelIfDisabled: (0, i.jsx)(t(109939).sA, {
                        id: "capabilitiesTooltip.userAccess.readUsers.disabled",
                        defaultMessage: "Cannot view users"
                    })
                }, "read_user_without_email"), (0, i.jsx)(a, {
                    enabled: e.read_user_with_email,
                    labelIfEnabled: (0, i.jsx)(t(109939).sA, {
                        id: "capabilitiesTooltip.userAccess.readUserEmailAddresses.enabled",
                        defaultMessage: "Can view user email addresses"
                    }),
                    labelIfDisabled: (0, i.jsx)(t(109939).sA, {
                        id: "capabilitiesTooltip.userAccess.readUserEmailAddresses.disabled",
                        defaultMessage: "Cannot view user email addresses"
                    })
                }, "read_user_with_email")]
            }

            function r(e) {
                return [(0, i.jsx)(a, {
                    enabled: e.link_preview,
                    labelIfEnabled: (0, i.jsx)(t(109939).sA, {
                        id: "capabilitiesTooltip.linkPreview.enabled",
                        defaultMessage: "Can preview links."
                    }),
                    labelIfDisabled: (0, i.jsx)(t(109939).sA, {
                        id: "capabilitiesTooltip.linkPreview.disabled",
                        defaultMessage: "Cannot preview links."
                    })
                }, "link_preview"), (0, i.jsx)(a, {
                    enabled: e.synced_database,
                    labelIfEnabled: (0, i.jsx)(t(109939).sA, {
                        id: "capabilitiesTooltip.syncedDatabase.enabled",
                        defaultMessage: "Can sync databases."
                    }),
                    labelIfDisabled: (0, i.jsx)(t(109939).sA, {
                        id: "capabilitiesTooltip.syncedDatabase.disabled",
                        defaultMessage: "Cannot sync databases."
                    })
                }, "synced_database")]
            }
        },
        731512: (e, s, t) => {
            t.d(s, {
                A: () => n
            }), t(296540);
            var i = t(474848);
            let a = {
                display: "flex",
                alignItems: "center",
                borderRadius: 4
            };

            function n(e) {
                let s = (0, t(533992).Y0)(),
                    n = (0, t(960253).I)(() => ({
                        innerStyle: {
                            padding: "2px 6px",
                            borderRadius: 4,
                            color: t(632079).Tj.text.secondary,
                            background: t(632079).Tj.background.tertiary,
                            fontSize: t(986939).A.isMobile ? 11 : 9,
                            lineHeight: s.isAndroid ? 1.5 : 1,
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                            whiteSpace: "nowrap"
                        }
                    }), [s.isAndroid]);
                return t(986939).A.isMobile ? (0, i.jsx)(t(64960).Ay, {
                    style: { ...a,
                        ...e.mobileStyle
                    },
                    disabled: void 0 === e.onClick,
                    children: (0, i.jsx)("div", {
                        style: { ...n.innerStyle,
                            ...e.innerStyle
                        },
                        children: e.children
                    })
                }) : (0, i.jsx)(t(64960).Ay, {
                    style: { ...a,
                        ...e.desktopStyle
                    },
                    disabled: void 0 === e.onClick,
                    ...e,
                    children: (0, i.jsx)("div", {
                        style: { ...n.innerStyle,
                            ...e.innerStyle
                        },
                        children: e.children
                    })
                })
            }
        },
        761163: (e, s, t) => {
            t.d(s, {
                $w: () => n,
                Ay: () => l
            }), t(944114), t(898992), t(354520), t(672577), t(430670);
            var i = t(296540),
                a = t(474848);
            let n = {
                    paddingTop: 12,
                    paddingBottom: 12
                },
                o = {
                    viewSettingsMenuItem: t(986939).A.isMobile ? n : {}
                };
            async function r(e) {
                let {
                    message: s
                } = e;
                return new Promise(e => {
                    t(647095).ui({
                        showCancel: !0,
                        keepFocus: !1,
                        handleCancel: () => e(!1),
                        message: s,
                        items: [{
                            label: (0, a.jsx)(t(109939).sA, {
                                id: "userPermissionsMenu.removePermissionsModal.removeUserButton.label",
                                defaultMessage: "Remove"
                            }),
                            color: "red",
                            onAccept: () => e(!0)
                        }]
                    })
                })
            }
            let l = function({
                isUserPermission: e,
                workflowId: s,
                type: n,
                table: r,
                role: l,
                isInvite: d,
                availableRoleItems: c,
                roleItemOverrides: m,
                blockType: g,
                onClick: x,
                onClose: y,
                origin: _,
                isMenuItem: v,
                isRemovableOverride: A,
                showNoneRoleWithOtherRolesOverride: j,
                isNoneOverride: w,
                omitSuggestFromCaptions: S,
                disabled: M,
                buttonContents: C,
                buttonPopupStore: I,
                buttonStyle: k,
                buttonColorPalette: P,
                buttonIconColorPalette: R,
                placementToOrigin: T,
                alignmentToOrigin: E = "end",
                upgradeButtonName: B,
                onUpgradeButtonClick: L,
                onChange: N,
                additionalCapabilities: O,
                onRemoveMemberClick: W,
                onRemoveSelfClick: U,
                header: D,
                footer: F,
                showPermissionOverrideWarning: K,
                from: V,
                spaceStore: z,
                overlayContainerZIndex: Y,
                renderCurrentAccessSection: $,
                displayRoleInButton: H,
                canCreate: G,
                buttonPrefixIcon: X
            }) {
                let Z, q, J, {
                        navigate: Q
                    } = (0, i.useContext)(t(44894).E),
                    ee = (0, t(533992).v3)(),
                    es = (0, t(682985).uB)(I, t(510969).A),
                    et = !!e,
                    ei = (0, t(682985).K8)(() => (function({
                        type: e,
                        table: s,
                        role: i,
                        isInvite: a,
                        availableRoleItems: n,
                        roleItemOverrides: o,
                        blockType: r,
                        showNoneRoleWithOtherRolesOverride: l
                    }) {
                        if (n && n.length > 0) return n;
                        if ("trusted_domain_permission" === e) return t(357194).PA;
                        if ("collection_property_permission" === e) return t(357194).Wc;
                        if (s === t(832375).VlP) return t(357194).mx;
                        if (s === t(832375).C0E) return t(357194).YU;
                        let d = [];
                        return ("explicit_team_guest_permission" === e ? d.push(t(357194).X6) : "bot_permission" !== e && "public_permission" !== e && d.push(t(357194).L5), d.push(t(357194).sP), ("collection_view" === r || "collection_view_page" === r) && ("bot_permission" !== e || "content_only_editor" === i) && "public_permission" !== e && d.push(t(357194).Q$), "bot_permission" !== e && d.push(t(357194).uH), ("bot_permission" !== e || "reader" === i) && d.push(t(357194).pn), (!a || l) && d.push(t(357194).EL), o) ? d.map(e => {
                            let s = o.find(s => s.role === e.role);
                            return s || e
                        }) : d
                    })({
                        type: n,
                        table: r,
                        role: l,
                        isInvite: d,
                        showNoneRoleWithOtherRolesOverride: j,
                        availableRoleItems: c,
                        roleItemOverrides: m,
                        blockType: g
                    }), [n, r, l, d, c, m, g, j], {
                        equalityFn: t(795676).k
                    }),
                    ea = "shareMenu" === V,
                    en = (0, t(682985).K8)(() => es.state.open, [es]),
                    eo = (0, t(682985).K8)(() => !!s && !!z && t(360851).N.createChildStore(z, {
                        table: t(832375).C0E,
                        id: s,
                        spaceId: z.id
                    }).canEdit(), [s, z]),
                    er = (0, i.useCallback)(() => s ? [] : [{
                        key: "bot_capabilities_warning",
                        render: e => (0, a.jsx)(t(844565).A, { ...e,
                            topBorder: !0
                        }),
                        items: [{
                            key: "warning_details",
                            render: e => (0, a.jsx)(t(636518).Ay, { ...e,
                                shouldWrapCaption: !0,
                                caption: (0, a.jsx)(t(109939).sA, {
                                    id: "PermissionRoleSelect.botRole.capabilitiesWarning",
                                    defaultMessage: "Integration permissions cannot be changed on a page. You can manage integrations in settings."
                                })
                            }),
                            action: () => {}
                        }]
                    }], [s]),
                    el = (0, i.useCallback)(i => (0, t(381453).oE)([s && eo ? {
                        key: "agent_access",
                        render: e => (0, a.jsx)(t(844565).A, { ...e,
                            topBorder: !0
                        }),
                        items: [{
                            key: "view_agent_settings",
                            render: e => (0, a.jsx)(t(95582).A, { ...e,
                                style: o.viewSettingsMenuItem,
                                title: (0, a.jsx)(t(4458).fI, {
                                    alignItems: "center",
                                    children: (0, a.jsx)("div", {
                                        children: (0, a.jsx)(t(109939).sA, {
                                            id: "PermissionRoleSelect.workflowBot.viewSettings",
                                            defaultMessage: "Manage agent access"
                                        })
                                    })
                                })
                            }),
                            action: () => {
                                Q({
                                    environment: ee,
                                    url: (0, t(453573).Lm)({
                                        workflowId: s,
                                        pageVisitSource: t(254656).y8.ShareMenu,
                                        params: {
                                            workflowViewType: "settings"
                                        }
                                    })
                                }), i()
                            }
                        }]
                    } : void 0, {
                        key: "remove_bot",
                        render: e => (0, a.jsx)(t(844565).A, { ...e,
                            topBorder: !0
                        }),
                        items: [{
                            key: "none",
                            render: e => (0, a.jsx)(b, {
                                role: l,
                                upgradeButtonName: B,
                                onUpgradeButtonClick: L,
                                focused: e.focused,
                                props: e,
                                availableRole: t(357194).EL,
                                isRemovableOverride: A,
                                table: r,
                                type: n,
                                omitSuggestFromCaptions: S,
                                spaceStore: z,
                                isFromShareMenu: ea,
                                workflowId: s,
                                shouldDisableRole: !1
                            }),
                            action: () => {
                                p({
                                    newRole: "none",
                                    table: r,
                                    role: l,
                                    type: n,
                                    upgradeButtonName: B,
                                    environment: ee,
                                    availableRoles: ei,
                                    isPublicShareLinkEnabled: !0,
                                    spaceStore: z,
                                    onChange: N,
                                    onUpgradeButtonClick: L,
                                    isUserPermission: e,
                                    onRemoveMemberClick: W,
                                    onRemoveSelfClick: U
                                }), i()
                            }
                        }]
                    }]), [ei, eo, ee, ea, A, e, Q, N, W, U, L, S, l, z, r, n, B, s]),
                    ed = [];
                if ($) {
                    let e = $();
                    e && (q = e.lowestSelectableRole, J = e.disabledRoleTooltipContext, ed.push(e.section), Z = (0, a.jsx)(t(109939).sA, {
                        id: "PermissionRoleSelect.rolesSection.title",
                        defaultMessage: "User access"
                    }))
                }
                return (0, a.jsx)(t(656252).A, {
                    onClick: e => {
                        e.preventDefault(), e.stopPropagation(), x && x()
                    },
                    onClose: y,
                    popupType: t(986939).A.isMobile ? t(656252).z.BottomSheet : t(656252).z.Popup,
                    bottomSheetInitialState: "half",
                    buttonPopupStore: es,
                    open: en,
                    overlayContainerZIndex: Y,
                    placementToOrigin: T || "bottom",
                    alignmentToOrigin: E,
                    originGap: 4,
                    content: i => {
                        let o, d;
                        if ((0, t(138798).II)(l)) o = [{
                            key: "mixed_role_section",
                            render: e => (0, a.jsx)(t(844565).A, { ...e,
                                topBorder: !1
                            }),
                            items: [{
                                key: "mixed_role_description",
                                render: () => (0, a.jsx)(t(408033).F, {
                                    role: l
                                }),
                                action: () => {}
                            }]
                        }, ...er(), ...el(i.close)];
                        else {
                            o = [...ed, {
                                key: "roles",
                                render: e => (0, a.jsx)(t(844565).A, { ...e,
                                    title: Z,
                                    topBorder: 0 !== e.index
                                }),
                                items: ei.flatMap(o => {
                                    let d = void 0 !== q && (0, t(138798).sG)(o.role, q),
                                        c = {
                                            key: o.role,
                                            render: e => (0, a.jsx)(b, {
                                                bodyContent: o.bodyContent,
                                                role: l,
                                                upgradeButtonName: B,
                                                onUpgradeButtonClick: L,
                                                focused: e.focused,
                                                props: e,
                                                availableRole: o,
                                                isRemovableOverride: !j && A,
                                                isNoneOverride: w,
                                                table: r,
                                                type: n,
                                                omitSuggestFromCaptions: S,
                                                spaceStore: z,
                                                workflowId: s,
                                                shouldDisableRole: d,
                                                disabledRoleTooltipContext: J
                                            }),
                                            action: () => {
                                                p({
                                                    newRole: o.role,
                                                    table: r,
                                                    role: l,
                                                    type: n,
                                                    upgradeButtonName: B,
                                                    environment: ee,
                                                    availableRoles: ei,
                                                    isPublicShareLinkEnabled: !0,
                                                    spaceStore: z,
                                                    onChange: N,
                                                    onUpgradeButtonClick: L,
                                                    isUserPermission: e,
                                                    onRemoveMemberClick: W,
                                                    onRemoveSelfClick: U
                                                }), o.bodyContent || i.close()
                                            }
                                        };
                                    return ea && "none" === o.role && !j ? [] : [o.prefixItem, c].filter(t(722371).O9)
                                })
                            }], O && O.length > 0 && o.push({
                                key: "additional-capabilities",
                                render: e => (0, a.jsx)(t(844565).A, { ...e,
                                    topBorder: !(t(986939).A.isMobile && ea)
                                }),
                                items: O
                            });
                            let d = !j || u(n, A);
                            if (ea && d) {
                                let d = ei.find(e => "none" === e.role);
                                (null == d ? void 0 : d.prefixItem) && !t(986939).A.isMobile && o.push({
                                    key: "prefix-item",
                                    render: e => (0, a.jsx)(t(844565).A, { ...e,
                                        topBorder: !0
                                    }),
                                    items: [null == d ? void 0 : d.prefixItem].filter(t(722371).O9)
                                });
                                let c = ei.filter(e => "none" === e.role);
                                c.length > 0 && o.push({
                                    key: "none-role",
                                    render: e => (0, a.jsx)(t(844565).A, { ...e,
                                        topBorder: !(t(986939).A.isMobile && ea)
                                    }),
                                    items: c.flatMap(o => {
                                        let d = {
                                            key: o.role,
                                            render: e => (0, a.jsx)(b, {
                                                role: l,
                                                upgradeButtonName: B,
                                                onUpgradeButtonClick: L,
                                                focused: e.focused,
                                                props: e,
                                                availableRole: o,
                                                isRemovableOverride: A,
                                                isNoneOverride: w,
                                                table: r,
                                                spaceStore: z,
                                                type: n,
                                                omitSuggestFromCaptions: S,
                                                workflowId: s,
                                                shouldDisableRole: !1
                                            }),
                                            action: () => {
                                                p({
                                                    newRole: o.role,
                                                    table: r,
                                                    role: l,
                                                    type: n,
                                                    upgradeButtonName: B,
                                                    environment: ee,
                                                    availableRoles: ei,
                                                    isPublicShareLinkEnabled: !0,
                                                    spaceStore: z,
                                                    onChange: N,
                                                    onUpgradeButtonClick: L,
                                                    isUserPermission: e,
                                                    onRemoveMemberClick: W,
                                                    onRemoveSelfClick: U,
                                                    isRemovingPermission: !0
                                                }), i.close()
                                            }
                                        };
                                        return t(986939).A.isMobile ? [o.prefixItem, d].filter(t(722371).O9) : [d].filter(t(722371).O9)
                                    })
                                })
                            }
                        }
                        return d = t(986939).A.isMobile ? {
                            menuType: t(649476).gu.Modal,
                            title: (0, a.jsx)(t(109939).sA, {
                                defaultMessage: "Change access",
                                id: "PermissionRoleSelect.Header.ChangeAccess"
                            }),
                            right: (0, a.jsx)(h, {}),
                            onClickRight: i.close,
                            height: "100%"
                        } : {
                            menuType: t(649476).gu.Popup,
                            width: 264
                        }, (0, a.jsx)(t(747369).A, {
                            className: t(828432).yw8,
                            header: D,
                            footer: (0, a.jsxs)(a.Fragment, {
                                children: [F, K ? (0, a.jsx)(f, {}) : void 0]
                            }),
                            ...d,
                            children: (0, a.jsx)(t(558045).A, {
                                type: t(558045).O.Vertical,
                                initialFocus: void 0,
                                sections: o
                            })
                        })
                    },
                    children: e => _ || (v ? (0, a.jsx)(t(95582).A, { ...e,
                        title: (0, a.jsx)(t(109939).sA, { ...(0, t(132866).R)({
                                type: n,
                                role: l,
                                table: r,
                                isRemovable: !1,
                                isNoneOverride: w
                            }).label
                        }),
                        focused: !1,
                        showExtensionArrow: !0
                    }) : (0, a.jsx)(t(132866).Y, {
                        type: n,
                        role: l,
                        events: e,
                        disabled: M,
                        buttonContents: C,
                        buttonStyle: k,
                        buttonColorPalette: P,
                        buttonIconColorPalette: R,
                        table: r,
                        isCurrentUser: et,
                        from: V,
                        isNoneOverride: w,
                        displayRoleInButton: H,
                        canCreate: G,
                        prefixIcon: X
                    }))
                })
            };

            function d(e, s, i) {
                let a = t(642157).p2(e) && !t(642157).Km(e);
                return !i && !!a && "public_permission" !== s && "bot_permission" !== s
            }

            function c() {
                return (0, a.jsx)(t(916612).A, {
                    imageURL: t(896221).A.images.tooltips.upsells.userReadAndWritePng,
                    imageWidth: 240,
                    imageHeight: 100,
                    caption: (0, a.jsx)(t(109939).sA, {
                        defaultMessage: "Users with edit access can edit a page but not share it with others.",
                        id: "permissionRoleSelect.userReadAndWriteUpgradeTooltip.caption"
                    }),
                    title: (0, a.jsx)(t(109939).sA, {
                        defaultMessage: "Upgrade to add editors",
                        id: "permissionRoleSelect.userReadAndWriteUpgradeTooltip.title"
                    })
                })
            }

            function u(e, s) {
                if (void 0 !== s) return s;
                switch (e) {
                    case "user_permission":
                    case "bot_permission":
                    case "group_permission":
                    case "collection_property_permission":
                        return !0;
                    case "space_permission":
                    case "space_owner_permission":
                    case "integration_space_owner_permission":
                    case "explicit_team_permission":
                    case "team_permission":
                    case "team_owner_permission":
                    case "explicit_team_owner_permission":
                    case "explicit_team_guest_permission":
                    case "public_permission":
                    case "trusted_domain_permission":
                    case "exclusive_user_permission":
                        return !1;
                    default:
                        (0, t(722371).HB)(e)
                }
            }
            async function p(e) {
                var s;
                let {
                    newRole: i,
                    table: n,
                    role: o,
                    type: l,
                    upgradeButtonName: c,
                    environment: u,
                    availableRoles: p,
                    spaceStore: m,
                    onChange: b,
                    onUpgradeButtonClick: g,
                    isUserPermission: f,
                    onRemoveMemberClick: x,
                    onRemoveSelfClick: h,
                    isRemovingPermission: y
                } = e;
                if (o === i && !y) return;
                let _ = () => {
                    b && b(i, y)
                };
                (t(594311).Uo({
                    newRole: i,
                    availableRoles: p
                }), d(i, l, await (0, t(655293).S)(u, {
                    name: "block_read_and_write_role",
                    spaceId: null == m ? void 0 : m.id,
                    userId: null == (s = t(728372).AppStoreCurrentUserStore.state) ? void 0 : s.id
                })) && !t(986939).A.isAdminMode) ? (t(907063).K(u, {
                    from: c,
                    upsell: {
                        type: "product",
                        product: (0, t(426901).S)(u) || "plus",
                        limit: {
                            type: "none"
                        },
                        trialability: "none"
                    },
                    spaceStore: m
                }), g && g()) : f && (0, t(138798).$q)(o, i) === o && "none" === i ? h ? h() : t(647095).ui({
                    showCancel: !0,
                    keepFocus: !1,
                    message: n === t(832375).NXh || n === t(832375).y75 ? (0, a.jsx)(t(109939).sA, {
                        id: "userPermissionsMenu.removePermissionsModal.removeSelfFromWorkspace.confirmationMessage",
                        defaultMessage: "Are you sure you want to remove your own access? You will lose access to the workspace, and any private pages will be lost."
                    }) : (0, a.jsx)(t(109939).sA, {
                        id: "userPermissionsMenu.removePermissionsModal.removeSelfFromPage.confirmationMessage",
                        defaultMessage: "Are you sure you want to remove your own access?"
                    }),
                    items: [{
                        label: (0, a.jsx)(t(109939).sA, {
                            id: "userPermissionsMenu.removePermissionsModal.removeSelfButton.label",
                            defaultMessage: "Remove"
                        }),
                        color: "red",
                        onAccept: async () => {
                            _();
                            let e = t(728372).AppStoreSidebarSpaceViewStore.state;
                            if (!e) return;
                            let s = (0, t(335751).c)({
                                environment: u,
                                spaceViewStore: e,
                                userSettingsStore: t(728372).AppStoreCurrentUserSettingsStore.state
                            });
                            s.length > 0 ? (0, t(545586).navigateToBlock)({
                                environment: u,
                                store: s[0],
                                pageVisitSource: t(254656).y8.LeaveOrRemove
                            }) : await (0, t(72713).t)({
                                environment: u,
                                spaceViewStore: e,
                                userSettingsStore: t(728372).AppStoreCurrentUserSettingsStore.state,
                                userRootStore: t(728372).AppStoreCurrentUserRootStore.state,
                                pageVisitSource: t(254656).y8.LeaveOrRemove,
                                navigationType: "switchingToOrLoadingSpace"
                            })
                        }
                    }]
                }) : f && (0, t(138798).$q)(o, i) === o ? t(647095).ui({
                    showCancel: !0,
                    keepFocus: !1,
                    message: (0, a.jsx)(t(109939).sA, {
                        id: "userPermissionsMenu.downgradePermissionsModal.downgradeSelfFromWorkspaceOrPage.confirmationMessage",
                        defaultMessage: "Are you sure you want to downgrade your own access?"
                    }),
                    items: [{
                        label: (0, a.jsx)(t(109939).sA, {
                            id: "userPermissionsMenu.downgradePermissionsModal.downgradeSelfButton.label",
                            defaultMessage: "Downgrade"
                        }),
                        color: "red",
                        onAccept: _
                    }]
                }) : (n === t(832375).NXh || n === t(832375).y75) && "none" === i ? x ? x() : await r({
                    message: (0, t(216260).OX)() ? (0, a.jsx)(t(109939).sA, {
                        id: "userPermissionsMenu.removePermissionsModal.removeUserFromWorkspace.enterprise.confirmationMessage",
                        defaultMessage: "If you remove this member, they will lose workspace access. After their removal, you may transfer their private pages to another member. <transferpagelink>Learn more</transferpagelink>.",
                        values: {
                            transferpagelink: e => (0, a.jsx)(t(428217).V, {
                                href: (0, t(442564).x)("guides.transferContent"),
                                external: !0,
                                children: e
                            })
                        }
                    }) : (0, a.jsx)(t(109939).sA, {
                        id: "userPermissionsMenu.removePermissionsModal.removeUserFromWorkspace.confirmationMessage",
                        defaultMessage: "Are you sure you want to remove this person? They will lose access to the workspace, and any private pages will be lost."
                    })
                }) && _() : _()
            }
            let m = {
                disabledButtonMenuItem: t(986939).A.isMobile ? { ...n,
                    color: t(632079).Tj.text.tertiary
                } : {},
                style1: {
                    marginInlineStart: 7
                }
            };

            function b(e) {
                let s, i, {
                        availableRole: o,
                        role: r,
                        table: l,
                        type: p,
                        isRemovableOverride: b,
                        isNoneOverride: g,
                        omitSuggestFromCaptions: f,
                        upgradeButtonName: x,
                        onUpgradeButtonClick: h,
                        spaceStore: y,
                        workflowId: _,
                        bodyContent: v,
                        shouldDisableRole: A = !1,
                        disabledRoleTooltipContext: j
                    } = e,
                    {
                        label: w,
                        caption: S,
                        hideSelectionCheckIcon: M,
                        icon: C
                    } = (0, t(132866).R)({
                        type: p,
                        role: o.role,
                        table: l,
                        isRemovable: u(p, b),
                        isNoneOverride: g,
                        omitSuggestFromCaptions: f
                    });
                if (j) {
                    let e = j.mostPermissiveNonUserPermission,
                        a = e.permissionItem;
                    (0, t(642157).PW)(a.role) && (s = (0, t(132866).R)({
                        type: a.type,
                        role: a.role,
                        table: l,
                        isRemovable: !1,
                        isNoneOverride: !1
                    }).label), i = (0, t(532087).J)({
                        permissionItem: a,
                        permissionFrom: e.from,
                        sourceName: j.pageName
                    })
                }
                let I = null == y ? void 0 : y.id,
                    k = (0, t(345776).T)(),
                    P = (0, t(533992).Y0)(),
                    R = (0, t(83208).X)("upgrade_system_sharing"),
                    {
                        onClick: T,
                        key: E,
                        ...B
                    } = e.props,
                    L = o.disabledInfo,
                    N = (0, t(217844)._)({
                        name: "block_read_and_write_role",
                        spaceId: I,
                        userId: k
                    }),
                    O = (0, t(682985).K8)(() => d(o.role, p, (null == N ? void 0 : N.type) === "available"), [o, p, N]),
                    W = O ? (0, a.jsx)(c, {}) : void 0,
                    U = (0, t(682985).K8)(() => t(986939).A.isMobile && !t(717274).S$(), []),
                    D = (0, t(682985).K8)(() => {
                        var e;
                        return null == (e = t(728372).AppStoreSidebarSpaceStore.state) ? void 0 : e.canAdmin()
                    }, []),
                    F = O && (!D || U) || A,
                    K = A && j && s ? (0, a.jsx)(t(109939).sA, {
                        id: "PermissionRoleSelect.disabledRoleTooltip",
                        defaultMessage: "{roleLabel} is disabled because the user is granted at least {highestRoleLabel} via {permissionSource}.",
                        values: {
                            roleLabel: (0, a.jsx)(t(109939).sA, { ...w
                            }),
                            highestRoleLabel: (0, a.jsx)(t(109939).sA, { ...s
                            }),
                            permissionSource: i || (0, a.jsx)(t(109939).sA, {
                                id: "PermissionRoleSelect.defaultPermissionSource",
                                defaultMessage: "another source"
                            })
                        }
                    }) : void 0,
                    V = (0, t(960253).I)(() => ({
                        buttonMenuItem: { ...t(986939).A.isMobile ? n : void 0,
                            ..."none" === o.role && (t(986939).A.isMobile || _) ? {
                                color: t(632079).Tj.red.text.accentPrimary
                            } : void 0,
                            ...o.bodyContent ? {
                                paddingTop: 4,
                                paddingBottom: 4
                            } : void 0
                        }
                    }), [o.role, _, o.bodyContent]);
                if (P.isMobileNative && O) return null;
                let z = K ? ? (L && L.isDisabled ? L.disabledMessage : void 0);
                return z ? (0, a.jsx)(t(51831).m, {
                    delayThreshold: 0,
                    content: e => (0, a.jsx)("div", { ...e,
                        children: z
                    }),
                    placement: "right",
                    textWrap: !0,
                    children: s => (0, a.jsx)(t(95582).A, {
                        style: m.disabledButtonMenuItem,
                        ...s,
                        focused: e.focused,
                        disabled: !0,
                        disabledFeedback: !0,
                        isChecked: r === o.role && !M,
                        title: (0, a.jsx)(t(4458).fI, {
                            alignItems: "center",
                            children: (0, a.jsx)("div", {
                                style: { ...e.style,
                                    marginInlineEnd: 6 * !!W
                                },
                                children: (0, a.jsx)(t(109939).sA, { ...w
                                })
                            })
                        }),
                        caption: S && (0, a.jsx)(t(109939).sA, { ...S
                        }),
                        shouldWrapCaption: !0
                    })
                }) : R ? (0, a.jsx)(t(233305).N, {
                    source: x,
                    featureName: "block_read_and_write_role",
                    spaceStore: y,
                    upsell: O ? null == N ? void 0 : N.upsell : void 0,
                    tooltipMessage: W || void 0,
                    tooltipPlacement: "left",
                    buttonMenuItemProps: { ...B,
                        onClick: T,
                        focused: B.focused || e.focused,
                        caption: S && (0, a.jsx)(t(109939).sA, { ...S
                        }),
                        shouldWrapCaption: !0,
                        style: V.buttonMenuItem,
                        isChecked: r === o.role && !M,
                        disabled: F,
                        disabledFeedback: F,
                        isRedOnHover: !!(!F && "none" === o.role && u(p, b))
                    },
                    title: ({
                        upgradeLabel: s
                    }) => (0, a.jsxs)(t(4458).fI, {
                        gap: 0,
                        alignItems: "center",
                        justifyContent: "space-between",
                        children: [(0, a.jsxs)(t(4458).fI, {
                            gap: 0,
                            alignItems: "center",
                            marginInlineEnd: 6 * !!W,
                            style: e.style,
                            children: [C, (0, a.jsx)(t(109939).sA, { ...w
                            })]
                        }), s, o.tag ? (0, a.jsx)(t(731512).A, {
                            desktopStyle: m.style1,
                            children: e.availableRole.tag
                        }) : void 0]
                    })
                }) : (0, a.jsx)(t(804301).k, {
                    upsell: O && ((null == N ? void 0 : N.type) === "unavailable" ? N.upsell : void 0),
                    spaceStore: y,
                    analyticsName: x,
                    renderUpgradeTooltip: () => W,
                    tooltipPlacement: "left",
                    onClick: T,
                    onUpgradeClick: h,
                    render: (s, i) => {
                        let {
                            focused: n,
                            ...l
                        } = (0, t(63390).A)(B, s);
                        return (0, a.jsx)(t(95582).A, { ...l,
                            style: F ? m.disabledButtonMenuItem : V.buttonMenuItem,
                            focused: n || e.focused,
                            isChecked: r === o.role && !M,
                            title: (0, a.jsxs)(t(4458).fI, {
                                alignItems: "center",
                                children: [(0, a.jsxs)("div", {
                                    style: { ...e.style,
                                        marginInlineEnd: 6 * !!W,
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    children: [C, (0, a.jsx)(t(109939).sA, { ...w
                                    })]
                                }), i, e.availableRole.tag ? (0, a.jsx)(t(731512).A, {
                                    desktopStyle: m.style1,
                                    children: e.availableRole.tag
                                }) : void 0]
                            }),
                            caption: S && (0, a.jsx)(t(109939).sA, { ...S
                            }),
                            shouldWrapCaption: !0,
                            disabled: F,
                            disabledFeedback: F,
                            isRedOnHover: !F && "none" === o.role && u(p, b),
                            body: v
                        })
                    }
                })
            }
            let g = {
                label: {
                    padding: 12,
                    backgroundColor: t(632079).Tj.sidebarSecondaryBackground,
                    boxShadow: `0 -1px 0 ${t(632079).Tj.border.secondaryTranslucent}`,
                    marginTop: t(986939).A.isMobile ? 28 : 1
                }
            };

            function f() {
                return (0, a.jsx)(t(324489).V, {
                    style: g.label,
                    isMultiline: !0,
                    isSmall: !0,
                    children: (0, a.jsx)(t(109939).sA, {
                        id: "permissionRoleSelect.overrideMessage.caption",
                        defaultMessage: "You’ll override permissions from the parent page if you change this role."
                    })
                })
            }
            let x = {
                exitButton: {
                    height: 32,
                    width: 32,
                    backgroundColor: t(632079).Tj.palette.gray[75],
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: t(632079).Tj.text.primary
                }
            };

            function h() {
                return (0, a.jsx)("div", {
                    style: x.exitButton,
                    children: (0, a.jsx)(t(16275).I, {
                        icon: t(519529).xMarkFillSmallIcon,
                        size: "sm"
                    })
                })
            }
        },
        804301: (e, s, t) => {
            t.d(s, {
                k: () => n
            }), t(296540);
            var i = t(474848);
            let a = {
                display: "inline-block",
                pointerEvents: "none"
            };

            function n(e) {
                let s, n = (0, t(533992).v3)(),
                    {
                        render: o,
                        upsell: r,
                        analyticsName: l,
                        spaceStore: d,
                        renderUpgradeTooltip: c,
                        onUpgradeClick: u,
                        alwaysAllowClick: p,
                        tooltipPlacement: m,
                        upgradeButtonDesktopStyle: b,
                        upgradeButtonMobileStyle: g
                    } = e,
                    {
                        onClick: f,
                        renderTooltip: x
                    } = e;
                return r && "product" === r.type && (s = (0, i.jsx)(t(889316).B, {
                    upsell: r,
                    analyticsName: l,
                    desktopStyle: { ...a,
                        ...b
                    },
                    mobileStyle: { ...a,
                        ...g
                    }
                }), p || (f = e => {
                    t(907063).K(n, {
                        from: l,
                        upsell: r,
                        spaceStore: d
                    }), u && u(e)
                }, x = c)), (0, i.jsx)(t(51831).m, {
                    content: x || (() => null),
                    disableTooltip: !x,
                    placement: m,
                    children: e => o((0, t(63390).A)(e, {
                        onClick: f
                    }), s)
                })
            }
        },
        889316: (e, s, t) => {
            t.d(s, {
                B: () => n
            }), t(296540);
            var i = t(474848);
            let a = {
                maxWidth: 500
            };

            function n({
                upsell: e,
                mobileStyle: s,
                desktopStyle: o,
                analyticsName: r,
                onClick: l,
                disableTooltip: d
            }) {
                let c = (0, t(960253).e)(),
                    u = (0, t(533992).v3)(),
                    {
                        device: p
                    } = u,
                    m = (0, t(682985).K8)(() => {
                        let e = t(728372).AppStoreSidebarSpaceStore.state;
                        return null == e ? void 0 : e.canAdmin()
                    }, []);
                if ("none" === e.type || p.isMobileNative) return null;
                let b = (() => {
                    switch (e.product) {
                        case "personal":
                            return (0, i.jsx)(t(109939).sA, {
                                defaultMessage: "Personal Pro",
                                id: "upgradeButton.personal.text"
                            });
                        case "plus":
                            return (0, i.jsx)(t(109939).sA, {
                                defaultMessage: "Plus ↗",
                                id: "upgradeButton.plus.textWithArrow"
                            });
                        case "business":
                            return (0, i.jsx)(t(109939).sA, {
                                defaultMessage: "Business ↗",
                                id: "upgradeButton.business.textWithArrow"
                            });
                        case "enterprise":
                            return (0, i.jsx)(t(109939).sA, {
                                defaultMessage: "Enterprise ↗",
                                id: "upgradeButton.enterprise.textWithArrow"
                            });
                        case "ai":
                            return (0, i.jsx)(t(109939).sA, {
                                defaultMessage: "AI ↗",
                                id: "upgradeButton.ai.textWithArrow"
                            });
                        case "ai_credit_pack":
                            return (0, i.jsx)(t(109939).sA, {
                                defaultMessage: "AI Credit Pack ↗",
                                id: "upgradeButton.ai_credit_pack.textWithArrow"
                            });
                        case "sites_custom_hostnames":
                            return (0, i.jsx)(t(109939).sA, {
                                defaultMessage: "Custom Hostnames ↗",
                                id: "upgradeButton.sites_custom_hostnames.textWithArrow"
                            });
                        default:
                            e.product, (0, t(722371).HB)(e.product)
                    }
                })();
                return t(986939).A.isMobile || !m ? (0, i.jsx)(t(731512).A, {
                    mobileStyle: s,
                    children: b
                }) : (0, i.jsx)(t(51831).m, {
                    delayThreshold: 120,
                    disableTooltip: d,
                    placement: "bottom",
                    content: () => (0, i.jsx)("div", {
                        style: a,
                        children: (0, i.jsx)(t(109939).sA, {
                            defaultMessage: "Upgrade to use this feature.",
                            id: "premiumFeatureUpgradeButton.upgrade.tooltip"
                        })
                    }),
                    originGap: 6,
                    children: s => (0, i.jsx)(t(731512).A, {
                        desktopStyle: o,
                        innerStyle: function(e, s) {
                            switch (e) {
                                case "plus":
                                case "business":
                                case "enterprise":
                                    return {
                                        color: t(632079).Tj.blue.text.accentPrimary,
                                        background: "light" === s ? t(632079).oZ.diffBackground : "rgba(35, 131, 226, 0.2)",
                                        fontWeight: t(699422).Wy.medium
                                    };
                                default:
                                    return {}
                            }
                        }(e.product, c),
                        onClick: s => {
                            var i, a, n, o, d;
                            return i = s, a = r, n = e, o = u, d = l, void(t(907063).K(o, {
                                from: a,
                                upsell: n,
                                spaceStore: (0, t(328765).S)()
                            }), d && d(i))
                        },
                        ...s,
                        children: b
                    })
                })
            }
        }
    }
]);