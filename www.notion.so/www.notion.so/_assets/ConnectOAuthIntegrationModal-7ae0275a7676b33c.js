"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [13017], {
        391066: (e, t, i) => {
            i.d(t, {
                r: () => o
            }), i(296540);
            var n = i(474848);
            let a = {
                subTitle: {
                    fontWeight: i(699422).Wy.regular,
                    fontSize: i(699422).J.UISmall.desktop,
                    color: i(632079).Tj.text.tertiary,
                    lineHeight: "17px",
                    marginTop: 16
                }
            };

            function o(e) {
                let {
                    signupUrl: t
                } = e;
                return (0, n.jsx)(i(324489).V, {
                    style: a.subTitle,
                    isMultiline: !0,
                    children: (0, n.jsx)(i(109939).sA, {
                        id: "integrations.configureIntegrationModal.partnerAccountPrompt",
                        defaultMessage: "Don’t have an account? <partnerAccountLink>Sign up</partnerAccountLink>",
                        values: {
                            partnerAccountLink: e => (0, n.jsx)(i(428217).V, {
                                href: t,
                                external: !0,
                                children: e
                            })
                        }
                    })
                })
            }
        },
        418443: (e, t, i) => {
            i.r(t), i.d(t, {
                ConnectOAuthIntegrationModal: () => r,
                styles: () => s
            });
            var n = i(296540),
                a = i(474848);
            let o = (0, i(109939).YK)({
                    createButton: {
                        id: "integrations.connectOAuthIntegrationModal.submitButton.create",
                        defaultMessage: "Connect to {integrationName}"
                    },
                    waiting: {
                        id: "integrations.connectOAuthIntegrationModal.submitButton.waiting",
                        defaultMessage: "Waiting for changes in {integrationName}"
                    },
                    waitingTooltip: {
                        id: "integrations.connectOAuthIntegrationModal.submitButton.waitingTooltip",
                        defaultMessage: "You need to complete some steps in {integrationName} to continue"
                    },
                    closeModalAriaLabel: {
                        id: "integrations.connectOAuthIntegrationModal.closeButtonLabel",
                        defaultMessage: "Close integration installation modal"
                    }
                }),
                s = {
                    modal: {
                        maxWidth: 400,
                        padding: "40px 20px 24px",
                        fontSize: 14,
                        textAlign: "center",
                        borderRadius: 10
                    },
                    connect: {
                        marginTop: 40,
                        padding: "0px 12px",
                        width: 360,
                        height: 32
                    },
                    innerStyle: {
                        borderRadius: 10
                    },
                    mobileModal: {
                        fontSize: 14,
                        textAlign: "center"
                    },
                    hovered: {
                        background: i(632079).Tj.buttonPressedBackground
                    },
                    cancelButton: {
                        position: "absolute",
                        top: "10px",
                        insetInlineEnd: "10px",
                        background: i(632079).Tj.buttonHoveredBackground,
                        borderRadius: "100%",
                        width: 20,
                        height: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 10
                    },
                    cancelButtonIcon: {
                        width: i(104509).Ev.sm,
                        height: i(104509).Ev.sm
                    }
                };

            function r() {
                let e = (0, i(109939).tz)(),
                    t = (0, i(533992).v3)(),
                    r = (0, i(682985).K8)(() => i(775754).A.state.open, []),
                    l = (0, i(682985).K8)(() => i(775754).A.state.open ? i(775754).A.state.integrationId : void 0, []),
                    d = (0, i(682985).O$)(i(728372).AppStoreSidebarSpaceStore),
                    g = l && d ? i(183934).C.createChildStore(d, {
                        id: l,
                        table: i(832375).Lij
                    }) : void 0,
                    [c, u] = n.useState(!1),
                    m = (0, i(682985).K8)(() => {
                        if (g) return g.getModel()
                    }, [g]),
                    [p, h, b] = (0, i(682985).K8)(() => {
                        let e = null == m ? void 0 : m.type,
                            t = "internal" === e || null == m ? void 0 : m.getInfo().developer_name;
                        return [null == m ? void 0 : m.getInfo(), e, t]
                    }, [m]),
                    f = (0, i(504692).Hr)(l);
                if (!m || !p || !f || !d || !l || "internal" === h) return null;
                let x = async () => {
                        c || (u(!0), await i(211791).NB({
                            environment: t,
                            integration: m,
                            spaceId: d.id,
                            from: "compliance_connected_apps_settings"
                        }), j())
                    },
                    j = () => {
                        i(775754).A.setState({
                            open: !1
                        }), u(!1)
                    };
                return (0, a.jsx)(i(979479).A, {
                    innerStyle: s.modal,
                    isOpen: r,
                    onDismiss: j,
                    content: () => (0, a.jsxs)("div", {
                        style: s.mobileModal,
                        children: [(0, a.jsxs)(i(4458).VP, {
                            alignItems: "center",
                            children: [(0, a.jsx)(i(374533).A, {
                                icon: i(25094).xMarkSmallIcon,
                                iconStyle: s.cancelButtonIcon,
                                onClick: j,
                                style: s.cancelButton,
                                hoveredStyle: s.hovered,
                                ariaLabel: e.formatMessage(o.closeModalAriaLabel)
                            }), (0, a.jsx)(i(629553).K, {
                                integrationModel: m,
                                integrationConfig: f,
                                spaceStore: d
                            }), (0, a.jsx)(i(51831).m, {
                                placement: "top",
                                content: () => (0, a.jsx)(i(109939).sA, { ...o.waitingTooltip,
                                    values: {
                                        integrationName: b
                                    }
                                }),
                                disableTooltip: !c,
                                children: t => (0, a.jsx)(i(912946).A, {
                                    colorPalette: "blue",
                                    style: s.connect,
                                    onClick: x,
                                    disabled: c,
                                    iconTrailing: {
                                        icon: i(166568).arrowUpRightSquareSmallIcon,
                                        size: "sm",
                                        colorVariant: "inversePrimary"
                                    },
                                    ...t,
                                    children: (0, a.jsx)("span", {
                                        children: c ? e.formatMessage(o.waiting, {
                                            integrationName: b
                                        }) : e.formatMessage(o.createButton, {
                                            integrationName: b
                                        })
                                    })
                                })
                            })]
                        }), f.website_url ? (0, a.jsx)(i(391066).r, {
                            signupUrl: f.signupUrl ? ? f.website_url
                        }) : void 0]
                    })
                })
            }
        },
        629553: (e, t, i) => {
            i.d(t, {
                K: () => o
            }), i(944114), i(296540);
            var n = i(474848);
            let a = {
                style0: {
                    fontWeight: i(699422).Wy.semibold
                },
                integrationIcon: {
                    width: 40,
                    height: 40,
                    borderRadius: 6,
                    overflow: "hidden"
                },
                title: {
                    marginTop: 4,
                    fontSize: 17,
                    fontWeight: i(699422).Wy.semibold,
                    lineHeight: "22px"
                },
                subTitle: {
                    fontWeight: i(699422).Wy.regular,
                    fontSize: i(699422).J.UISmall.desktop,
                    color: i(632079).Tj.text.tertiary,
                    lineHeight: "17px",
                    marginTop: 6.5
                }
            };

            function o(e) {
                var t, o;
                let s, r, l, {
                        integrationModel: d,
                        integrationConfig: g,
                        spaceStore: c
                    } = e,
                    u = (0, i(533992).v3)(),
                    m = (0, i(109939).tz)(),
                    p = (0, i(682985).K8)(() => d.getName() || "Unknown", [d]),
                    h = (0, i(682985).K8)(() => d.getCapabilities(), [d]),
                    b = (0, i(682985).K8)(() => d.getInfo().icon, [d]),
                    f = (0, i(682985).K8)(() => c.getName(), [c]);
                (0, i(697006).qs)(h) && h.webhooks ? l = (0, n.jsx)(i(109939).sA, {
                    id: "integrations.configureIntegrationModal.integrationDescriptionDlp",
                    defaultMessage: "Connect to {integrationName} for real-time monitoring and protection of sensitive content.",
                    values: {
                        integrationName: p
                    }
                }) : h.webhooks && (l = (0, n.jsx)(i(109939).sA, {
                    id: "integrations.configureIntegrationModal.integrationDescriptionSiem",
                    defaultMessage: "Connect to {integrationName} for real-time monitoring, alerting, and analysis of your workspace event logs.",
                    values: {
                        integrationName: p
                    }
                }));
                let x = (0, i(697006).qs)(h);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("div", {
                        style: a.integrationIcon,
                        children: (0, n.jsx)(i(989059).A, {
                            style: a.integrationIcon,
                            src: b
                        })
                    }), (0, n.jsxs)(i(824353).r, {
                        style: a.title,
                        children: [(0, n.jsx)(i(109939).sA, {
                            id: "integrations.configureIntegrationModal.integrationName",
                            defaultMessage: "Connect {integrationName} to Notion",
                            values: {
                                integrationName: p
                            }
                        }), (0, n.jsx)(i(374533).A, {
                            icon: i(211052).questionMarkCircleSmallIcon,
                            ariaLabel: m.formatMessage({
                                defaultMessage: "Workspace connections settings help button, which navigates to the Notion integration gallery",
                                id: "integrations.configureIntegrationModal.helpButton.label"
                            }),
                            onClick: () => (0, i(624621).L)({
                                environment: u,
                                url: g.integrationGalleryUrl
                            })
                        })]
                    }), (0, n.jsx)(i(324489).V, {
                        style: a.subTitle,
                        isMultiline: !0,
                        children: (0, n.jsx)("div", {
                            children: l
                        })
                    }), (0, n.jsx)(i(324489).V, {
                        style: a.subTitle,
                        isMultiline: !0,
                        children: (0, n.jsxs)("div", {
                            children: [h.webhooks ? (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(i(109939).sA, {
                                    id: "integrations.configureIntegrationModal.integrationScope.webhooks",
                                    defaultMessage: "{integrationName} will be authorized to receive event logs on all activity in {spaceName}.",
                                    values: {
                                        integrationName: p,
                                        spaceName: f
                                    }
                                }), " "]
                            }) : void 0, x ? (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(i(109939).sA, {
                                    id: "integrations.configureIntegrationModal.integrationScope.contentCapabilities",
                                    defaultMessage: "{hasPrevious, select, true {For <b>all</b> pages, {integrationName} will also be able to {formattedContentCapabilities}} other {For <b>all</b> pages, {integrationName} will be able to {formattedContentCapabilities}}}.",
                                    values: {
                                        hasPrevious: h.webhooks,
                                        b: e => (0, n.jsx)("span", {
                                            style: a.style0,
                                            children: e
                                        }),
                                        integrationName: p,
                                        formattedContentCapabilities: (s = [], (t = h).read_content && s.push((0, n.jsx)(i(109939).sA, {
                                            id: "integrations.configureIntegrationModal.integrationCapabilities.readContent",
                                            defaultMessage: "view content"
                                        })), t.read_comment && s.push((0, n.jsx)(i(109939).sA, {
                                            id: "integrations.configureIntegrationModal.integrationCapabilities.readComment",
                                            defaultMessage: "view comments"
                                        })), t.update_content && s.push((0, n.jsx)(i(109939).sA, {
                                            id: "integrations.configureIntegrationModal.integrationCapabilities.updateContent",
                                            defaultMessage: "edit content"
                                        })), t.insert_comment && s.push((0, n.jsx)(i(109939).sA, {
                                            id: "integrations.configureIntegrationModal.integrationCapabilities.updateComment",
                                            defaultMessage: "edit comments"
                                        })), t.insert_content && s.push((0, n.jsx)(i(109939).sA, {
                                            id: "integrations.configureIntegrationModal.integrationCapabilities.insertContent",
                                            defaultMessage: "create content"
                                        })), t.insert_comment && s.push((0, n.jsx)(i(109939).sA, {
                                            id: "integrations.configureIntegrationModal.integrationCapabilities.insertComment",
                                            defaultMessage: "create comments"
                                        })), (0, n.jsx)(i(109939).dT, {
                                            value: s,
                                            type: "conjunction"
                                        }))
                                    }
                                }), " "]
                            }) : void 0, h.read_user_without_email ? (0, n.jsx)(i(109939).sA, {
                                id: "integrations.configureIntegrationModal.integrationScope.userCapabilities",
                                defaultMessage: "{hasPrevious, select, true {{integrationName} will also be able to see basic information about all workspace members and guests, including their {formattedUserCapabilities}} other {{integrationName} will be able to see basic information about all workspace members and guests, including their {formattedUserCapabilities}}}.",
                                values: {
                                    hasPrevious: h.webhooks || x,
                                    b: e => (0, n.jsx)("span", {
                                        style: a.style0,
                                        children: e
                                    }),
                                    integrationName: p,
                                    formattedUserCapabilities: (r = [], (o = h).read_user_without_email && (r.push((0, n.jsx)(i(109939).sA, {
                                        id: "integrations.configureIntegrationModal.integrationCapabilities.readUserNames",
                                        defaultMessage: "names"
                                    })), r.push((0, n.jsx)(i(109939).sA, {
                                        id: "integrations.configureIntegrationModal.integrationCapabilities.readUserProfileImages",
                                        defaultMessage: "profile images"
                                    }))), o.read_user_with_email && r.push((0, n.jsx)(i(109939).sA, {
                                        id: "integrations.configureIntegrationModal.integrationCapabilities.readUserEmails",
                                        defaultMessage: "email addresses"
                                    })), (0, n.jsx)(i(109939).dT, {
                                        value: r,
                                        type: "conjunction"
                                    }))
                                }
                            }) : void 0]
                        })
                    })]
                })
            }
        },
        775754: (e, t, i) => {
            i.d(t, {
                A: () => o
            });
            var n = () => i(546605);
            class a extends n().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let o = new a
        },
        824353: (e, t, i) => {
            i.d(t, {
                r: () => o
            }), i(296540);
            var n = i(474848);
            let a = {
                marginBottom: 16,
                paddingBottom: 8,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            };

            function o(e) {
                let {
                    title: t,
                    byline: o,
                    bylineWidth: s,
                    divider: r,
                    children: l,
                    hasMarginTop: d,
                    style: g,
                    smallMarginBottom: c,
                    fontSize: u,
                    fontWeight: m
                } = e, p = (0, i(649476).Tf)(), h = "full" === r, b = void 0 !== o, f = t ? (0, n.jsx)(i(111010).D, {
                    styleKey: "titleLgSemibold",
                    children: t
                }) : l, x = t ? { ...a,
                    ...b ? {
                        marginBottom: 0,
                        paddingBottom: 0
                    } : {}
                } : void 0, j = b ? (0, n.jsx)("div", {
                    style: {
                        width: s ? ? "80%",
                        marginTop: 12,
                        marginBottom: 22
                    },
                    children: (0, n.jsx)(i(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        children: o
                    })
                }) : void 0;
                return p ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(i(111010).D, {
                        styleKey: "titleSmSemibold",
                        colorVariant: "primary",
                        style: {
                            marginTop: 16 * !!d,
                            paddingBottom: 12 * !!h
                        },
                        children: f
                    }), j]
                }) : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("div", {
                        style: {
                            borderBottom: h ? `1px solid ${i(632079).Tj.border.secondaryTranslucent}` : 0,
                            marginBottom: h ? 16 : c ? 2 : 8,
                            marginTop: 16 * !!d,
                            paddingBottom: 12 * !!h,
                            fontSize: u ? ? h ? 16 : 14,
                            fontWeight: m ? ? h ? i(699422).Wy.medium : 400,
                            color: i(632079).Tj.text.primary,
                            ...x,
                            ...g
                        },
                        children: f
                    }), j]
                })
            }
        }
    }
]);