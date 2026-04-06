"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [52903], {
        355819: (e, i, t) => {
            t.r(i), t.d(i, {
                ConfirmPrivilegedActionModal: () => r
            });
            var n = t(296540),
                a = t(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.07 2.17 13.85 15.65",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M10 12.125a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m0-5.875c.345 0 .625.28.625.625v3.5a.625.625 0 0 1-1.25 0v-3.5c0-.345.28-.625.625-.625"
                        }), (0, a.jsx)("path", {
                            d: "M9.788 2.212a.63.63 0 0 1 .491.03l1.89.944a7.5 7.5 0 0 0 3.344.789h.787c.345 0 .625.28.625.625v6.933a5.13 5.13 0 0 1-3.106 4.71l-3.573 1.532a.63.63 0 0 1-.492 0l-3.572-1.532a5.13 5.13 0 0 1-3.107-4.71V4.6c0-.345.28-.625.625-.625h.788c1.16 0 2.305-.27 3.343-.79l1.89-.944zM8.39 4.304a8.7 8.7 0 0 1-3.902.92h-.163v6.309c0 1.55.924 2.95 2.349 3.561L10 16.519l3.326-1.425a3.88 3.88 0 0 0 2.349-3.561V5.225h-.162a8.7 8.7 0 0 1-3.903-.921L10 3.498z"
                        })]
                    })
                },
                l = (0, t(104509).wt)("exclamationShield", o, "default"),
                s = {
                    innerModal: {
                        borderRadius: 8,
                        padding: 20,
                        width: 300
                    },
                    title: {
                        marginTop: 8,
                        color: t(632079).Tj.text.primary,
                        fontWeight: t(699422).Wy.semibold,
                        fontSize: 17
                    },
                    description: {
                        color: t(632079).Tj.text.secondary,
                        textAlign: "center",
                        fontSize: t(699422).J.UIRegular.desktop,
                        marginTop: 8,
                        marginBottom: 24
                    },
                    button: {
                        width: "100%",
                        justifyContent: "center"
                    },
                    buttonGap: {
                        paddingTop: 5
                    }
                };

            function r({}) {
                let e, i = (0, t(682985).O$)(t(367154).A),
                    o = (0, n.useCallback)(() => {
                        i.open && (i.onAccept(), t(367154).A.setState({
                            open: !1
                        }))
                    }, [i]),
                    c = (0, n.useCallback)(() => {
                        i.open && (i.onCancel(), t(367154).A.setState({
                            open: !1
                        }))
                    }, [i]);
                if (!i.open) return null;
                switch (i.type) {
                    case "joinTeamAsOwner":
                    case "upgradeToOwner":
                        e = (0, a.jsx)(t(109939).sA, {
                            id: "confirmPrivilegedActionModal.becomeOwnerConfirmation.description",
                            defaultMessage: "Becoming an owner in a Teamspace is a privileged action, which appears in your workspace’s audit log."
                        });
                        break;
                    case "joinClosedOrPrivateTeamAsMember":
                        e = (0, a.jsx)(t(109939).sA, {
                            id: "confirmPrivilegedActionModal.joinPrivateOrClosedTeamConfirmation.description",
                            defaultMessage: "Joining a private or closed Teamspace is a privileged action, which appears in your workspace’s audit log."
                        });
                        break;
                    default:
                        (0, t(722371).HB)(i.type)
                }
                return (0, a.jsx)(t(979479).A, {
                    innerStyle: s.innerModal,
                    onDismiss: c,
                    content: () => (0, a.jsxs)(t(4458).VP, {
                        justifyContent: "center",
                        alignItems: "center",
                        children: [(0, a.jsx)(t(16275).I, {
                            icon: l,
                            colorPalette: "yellow",
                            colorVariant: "accentPrimary"
                        }), (0, a.jsx)("div", {
                            style: s.title,
                            children: (0, a.jsx)(t(109939).sA, {
                                id: "confirmPrivilegedActionModal.title",
                                defaultMessage: "This is a privileged action"
                            })
                        }), (0, a.jsx)("div", {
                            style: s.description,
                            children: e
                        }), (0, a.jsx)(t(912946).A, {
                            colorPalette: "blue",
                            style: s.button,
                            onClick: o,
                            children: (0, a.jsx)(t(109939).sA, {
                                id: "confirmPrivilegedActionModal.continueAnyway",
                                defaultMessage: "Continue anyway"
                            })
                        }), (0, a.jsx)("div", {
                            style: s.buttonGap
                        }), (0, a.jsx)(t(406910).p, {
                            style: s.button,
                            colorPalette: "gray",
                            onClick: c,
                            children: (0, a.jsx)(t(109939).sA, {
                                id: "confirmPrivilegedActionModal.cancel",
                                defaultMessage: "Cancel"
                            })
                        })]
                    }),
                    isOpen: i.open
                })
            }
        },
        367154: (e, i, t) => {
            t.d(i, {
                A: () => o
            });
            var n = () => t(546605);
            class a extends n().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let o = new a
        }
    }
]);