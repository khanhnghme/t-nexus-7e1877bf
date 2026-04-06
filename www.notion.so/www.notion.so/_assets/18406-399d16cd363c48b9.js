"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [18406], {
        19299: (e, t, n) => {
            n.d(t, {
                A: () => o
            }), n(581454);
            var i = n(296540),
                r = n(474848);
            let a = {
                    container: {
                        position: "relative",
                        width: "100%",
                        maxWidth: 400,
                        padding: "20px"
                    },
                    topIconRow: {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: 4,
                        width: "100%"
                    },
                    titleIconRow: {
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: 15
                    },
                    dismissButtonContainer: {
                        marginTop: -5,
                        marginInlineEnd: -5
                    },
                    dismissButton: {
                        borderRadius: "100%",
                        background: n(632079).Tj.gray.background.secondaryTranslucent
                    },
                    backButton: {
                        marginTop: -5,
                        marginInlineStart: -5
                    },
                    title: {
                        margin: "10px 0",
                        textAlign: "center"
                    },
                    error: {
                        color: n(632079).oZ.red,
                        width: "100%",
                        marginBottom: 8,
                        textAlign: "center",
                        fontSize: n(699422).J.UISmall.desktop
                    },
                    alert: {
                        color: n(632079).oZ.red,
                        width: "100%",
                        marginBottom: 10,
                        textAlign: "center",
                        fontSize: n(699422).J.UISmall.desktop
                    },
                    header: {
                        textAlign: "center",
                        marginBottom: "24px"
                    },
                    hiddenButton: {
                        display: "none"
                    }
                },
                s = {
                    dismissButtonHovered: {
                        background: (0, n(64960)._S)({
                            color: n(632079).Tj.gray.background.secondaryTranslucent
                        }).hovered
                    }
                };

            function o({
                onDismiss: e,
                onBack: t,
                disableBackButton: l,
                primaryAction: d,
                secondaryActions: c,
                title: u,
                header: f,
                children: m,
                errorMessage: p,
                alertMessage: g,
                icon: h,
                containerStyles: x,
                headerBottomMargin: y,
                headerStyleKey: j
            }) {
                let b = (0, n(109939).tz)(),
                    v = (0, i.useMemo)(() => (0, r.jsxs)(i.Fragment, {
                        children: [(0, r.jsxs)("div", {
                            style: t && e ? a.topIconRow : { ...a.topIconRow,
                                justifyContent: "flex-end"
                            },
                            children: [t ? (0, r.jsx)("div", {
                                style: a.backButton,
                                children: (0, r.jsx)(n(374533).A, {
                                    size: "xs",
                                    onClick: t,
                                    disabled: l,
                                    icon: n(374241).arrowStraightLeftSmallIcon,
                                    ariaLabel: b.formatMessage({
                                        id: "mfa.prompt.backButton.ariaLabel",
                                        defaultMessage: "Back"
                                    })
                                })
                            }) : null, e ? (0, r.jsx)("div", {
                                style: a.dismissButtonContainer,
                                children: (0, r.jsx)(n(374533).A, {
                                    size: "xs",
                                    onClick: e,
                                    style: a.dismissButton,
                                    hoveredStyle: s.dismissButtonHovered,
                                    icon: n(25094).xMarkSmallIcon,
                                    ariaLabel: b.formatMessage({
                                        id: "mfa.prompt.dismissButton.ariaLabel",
                                        defaultMessage: "Dismiss"
                                    })
                                })
                            }) : null]
                        }), h ? (0, r.jsx)("div", {
                            style: a.titleIconRow,
                            children: h
                        }) : null]
                    }), [t, e, l, b, h]),
                    C = (0, i.useMemo)(() => d ? (0, r.jsx)(n(912946).A, {
                        size: "lg",
                        width: "fill",
                        onClick: d.onClick,
                        disabled: d.disabled,
                        colorPalette: d.isRed ? "red" : "blue",
                        children: d.text
                    }) : null, [d]),
                    k = (0, i.useMemo)(() => null == c ? void 0 : c.map((e, t) => (0, i.createElement)(n(570787).A, { ...e,
                        key: t
                    })), [c]),
                    w = (0, i.useCallback)(e => {
                        e.preventDefault(), d && !d.disabled && d.onClick()
                    }, [d]),
                    I = p ? (0, r.jsx)("div", {
                        style: a.error,
                        children: p
                    }) : void 0,
                    S = g ? (0, r.jsx)("div", {
                        style: a.alert,
                        children: g
                    }) : void 0;
                return (0, r.jsxs)("form", {
                    style: { ...a.container,
                        ...x
                    },
                    onSubmit: w,
                    children: [v, (0, r.jsx)("div", {
                        style: a.title,
                        children: (0, r.jsx)(n(111010).D, {
                            colorVariant: "primary",
                            styleKey: "titleSmSemibold",
                            children: u
                        })
                    }), (0, r.jsx)("div", {
                        style: { ...a.header,
                            marginBottom: y ? ? a.header.marginBottom
                        },
                        children: (0, r.jsx)(n(111010).D, {
                            styleKey: j ? ? "bodyRegular",
                            colorVariant: "secondary",
                            children: f
                        })
                    }), I, S, m, C || k ? (0, r.jsxs)(n(4458).VP, {
                        gap: 8,
                        paddingTop: 16,
                        children: [C, k]
                    }) : null, (0, r.jsx)("button", {
                        style: a.hiddenButton
                    })]
                })
            }
        },
        30399: (e, t, n) => {
            n.d(t, {
                A: () => s
            });
            var i = n(296540),
                r = n(474848);
            let a = {
                buttonInner: {
                    minWidth: 0
                },
                caption: {
                    fontSize: n(699422).J.UISmall.desktop,
                    lineHeight: 1.35,
                    color: n(632079).Tj.text.secondary,
                    whiteSpace: "normal"
                }
            };

            function s(e) {
                let {
                    type: t,
                    isActive: s,
                    title: o,
                    caption: l,
                    onClick: d,
                    isLoading: c,
                    style: u,
                    disabled: f
                } = e, [m, p] = (0, i.useState)(!1), g = (0, i.useCallback)(() => p(!0), [p]), h = (0, i.useCallback)(() => p(!1), [p]), x = (0, n(960253).I)(() => ({
                    button: {
                        justifyContent: "left",
                        padding: "10px 16px",
                        alignItems: "start",
                        height: "auto",
                        border: `1px solid ${n(632079).Tj.border.primary}`,
                        ...u
                    },
                    buttonLoading: {
                        height: 59,
                        ...u,
                        border: `1px solid ${n(632079).Tj.border.primary}`
                    },
                    icon: {
                        width: n(104509).Ev.default,
                        height: n(104509).Ev.default,
                        marginInlineEnd: 10,
                        fill: s || m && !f ? n(632079).Tj.blue.icon.accentPrimary : n(632079).Tj.icon.primary
                    }
                }), [s, m, f, u]), y = c ? x.buttonLoading : x.button, j = {
                    totp: (0, r.jsx)(n(16275).I, {
                        icon: n(901869).K,
                        style: x.icon
                    }),
                    sms: (0, r.jsx)(n(16275).I, {
                        icon: n(100410).iPhoneIcon,
                        style: x.icon
                    }),
                    backup_code: (0, r.jsx)(n(16275).I, {
                        icon: n(115601).i,
                        style: x.icon
                    })
                }[t];
                return (0, r.jsx)(n(548436).r, {
                    size: "lg",
                    width: "fill",
                    style: y,
                    onClick: d,
                    onMouseEnter: g,
                    onMouseLeave: h,
                    hovered: m,
                    disabled: f,
                    disabledFeedback: f,
                    children: c ? (0, r.jsx)(n(517334).k, {}) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            style: x.icon,
                            children: j
                        }), (0, r.jsxs)("div", {
                            style: a.buttonInner,
                            children: [(0, r.jsx)(n(324489).V, {
                                children: o
                            }), (0, r.jsx)("span", {
                                style: a.caption,
                                children: l
                            })]
                        })]
                    })
                })
            }
        },
        74306: (e, t, n) => {
            n.d(t, {
                By: () => a,
                qX: () => s,
                xc: () => r
            }), n(296540);
            var i = n(474848);
            let r = {
                    unexpectedError: (0, i.jsx)(n(109939).sA, {
                        id: "general.mfa.error.unexpectedError",
                        defaultMessage: "Something went wrong, please try again."
                    }),
                    smsIncorrectCode: (0, i.jsx)(n(109939).sA, {
                        id: "general.mfa.error.incorrectSMSCode",
                        defaultMessage: "The code didn’t work, try typing it again or resend code."
                    }),
                    smsInvalidCountryCode: (0, i.jsx)(n(109939).sA, {
                        id: "general.mfa.error.smsInvalidCountryCode",
                        defaultMessage: "The country code is not valid."
                    }),
                    smsInvalidPhoneCode: (0, i.jsx)(n(109939).sA, {
                        id: "general.mfa.error.smsInvalidPhoneNumber",
                        defaultMessage: "The phone number is not valid."
                    }),
                    smsUnsupportedCountryCodeForEnrollment: (0, i.jsx)(n(109939).sA, {
                        id: "general.mfa.error.smsUnsupportedCountryCodeForEnrollment",
                        defaultMessage: "SMS authentication is currently not supported for this country. You may consider using an authenticator app as an alternative authentication method."
                    }),
                    smsEmptyPhoneNumber: (0, i.jsx)(n(109939).sA, {
                        id: "general.mfa.error.smsEmptyPhoneNumber",
                        defaultMessage: "Phone number cannot be empty."
                    }),
                    smsAlreadyVerifiedPhoneNumber: (0, i.jsx)(n(109939).sA, {
                        id: "general.mfa.error.smsAlreadyVerifedPhoneNumber",
                        defaultMessage: "This phone number has already been verified."
                    }),
                    smsUnsupportedPhoneNumber: e => (0, i.jsx)(n(109939).sA, {
                        id: "general.mfa.error.unsupportedPhoneNumber",
                        defaultMessage: "SMS authentication is currently not available in {countryName}. You may consider using an authenticator app as an alternative authentication method.",
                        values: {
                            countryName: e
                        }
                    }),
                    totpIncorrectCode: (0, i.jsx)(n(109939).sA, {
                        id: "general.mfa.error.incorrectTOTPCode",
                        defaultMessage: "The code didn’t work, try typing it again."
                    }),
                    totpEmptyFriendlyName: (0, i.jsx)(n(109939).sA, {
                        id: "general.mfa.error.totpEmptyFriendlyName",
                        defaultMessage: "Authenticator name cannot be empty."
                    }),
                    totpDuplicateFriendlyName: (0, i.jsx)(n(109939).sA, {
                        id: "general.mfa.error.totpDuplicateFriendlyName",
                        defaultMessage: "Authenticator name is already in use."
                    }),
                    totpBadFriendlyName: (0, i.jsx)(n(109939).sA, {
                        id: "general.mfa.error.totpBadFriendlyName",
                        defaultMessage: "Authenticator name cannot be used."
                    }),
                    backupCodeIncorrectCode: (0, i.jsx)(n(109939).sA, {
                        id: "general.mfa.error.incorrectBackupCode",
                        defaultMessage: "The backup code didn’t work, try typing it again or use a different one."
                    }),
                    incorrectPassword: (0, i.jsx)(n(109939).sA, {
                        id: "general.mfa.error.incorrectPassword",
                        defaultMessage: "Incorrect password."
                    }),
                    unableToSavePasskey: (0, i.jsx)(n(109939).sA, {
                        id: "passkey.error.unableToSave",
                        defaultMessage: "The passkey could not be saved; please try again."
                    })
                },
                a = {
                    passwordResentLinkSent: e => (0, i.jsx)(n(109939).sA, {
                        id: "general.mfa.passwordResentLinkSent",
                        defaultMessage: "A password reset link has been sent to {email}.",
                        values: {
                            email: e
                        }
                    })
                };

            function s(e) {
                switch (e) {
                    case "totp":
                        return r.totpIncorrectCode;
                    case "sms":
                        return r.smsIncorrectCode;
                    case "backup_code":
                        return r.backupCodeIncorrectCode;
                    default:
                        throw (0, n(722371).HB)(e)
                }
            }
        },
        115601: (e, t, n) => {
            n.d(t, {
                i: () => r
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.38 5.51 19.25 8.97",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M8.793 6.767c-.816 0-1.472.465-1.71 1.036a.625.625 0 1 1-1.154-.482C6.38 6.242 7.52 5.517 8.794 5.517c1.618 0 3.068 1.181 3.068 2.786a2.62 2.62 0 0 1-.762 1.835l-3.312 3.095h3.637a.625.625 0 1 1 0 1.25h-5.22a.625.625 0 0 1-.427-1.081l4.453-4.163a1.37 1.37 0 0 0 .381-.936c0-.775-.742-1.536-1.818-1.536m7.576 0c-.868 0-1.508.425-1.724.877a.625.625 0 0 1-1.127-.54c.473-.99 1.629-1.587 2.85-1.587.799 0 1.546.247 2.107.675.56.429.962 1.066.962 1.819s-.401 1.39-.962 1.819l-.036.026q.085.056.165.116c.595.448 1.02 1.114 1.02 1.902s-.425 1.454-1.02 1.903c-.595.448-1.388.706-2.236.706-1.287 0-2.488-.6-3.008-1.6a.625.625 0 1 1 1.108-.577c.252.484.952.927 1.9.927.602 0 1.125-.185 1.484-.455.358-.27.522-.595.522-.904 0-.308-.164-.634-.522-.904-.359-.27-.882-.455-1.484-.455h-.554a.625.625 0 0 1 0-1.25h.44a1 1 0 0 1 .114-.01c.549 0 1.023-.17 1.348-.419.323-.247.47-.544.47-.825s-.147-.579-.47-.826c-.325-.247-.8-.418-1.348-.418M3.731 6.22l.005.078v7.56a.625.625 0 0 1-1.25 0V7.21l-1.182.658a.625.625 0 0 1-.608-1.092L2.806 5.6a.625.625 0 0 1 .925.62"
                    })
                },
                r = (0, n(104509).wt)("numbers123", i, "default")
        },
        141342: (e, t, n) => {
            n.d(t, {
                l: () => i().l
            });
            var i = () => n(748356)
        },
        162895: (e, t, n) => {
            n.d(t, {
                SY: () => i,
                Su: () => a,
                WS: () => r
            }), n(898992), n(672577), (0, n(109939).YK)({
                sms: {
                    id: "mfaMethod.sms",
                    defaultMessage: "SMS"
                },
                totp: {
                    id: "mfaMethod.totp",
                    defaultMessage: "Authenticator"
                },
                backupCode: {
                    id: "mfaMethod.backupCode",
                    defaultMessage: "Backup code"
                }
            });
            let i = {
                "data-1p-ignore": "true",
                "data-lpignore": "true"
            };

            function r(e) {
                let t = ["totp", "sms", "backup_code"];
                return e.sort((e, n) => {
                    let i = t.indexOf(e.mfaMethod),
                        r = t.indexOf(n.mfaMethod);
                    return i === r ? e.createdAt - n.createdAt : i - r
                })
            }
            async function a(e) {
                let t = await e.api.callMainCellApi({
                    eventName: "authGetLoginConfiguration",
                    environment: e,
                    data: {}
                });
                if ("success" === t.type) {
                    let e = t.data,
                        n = "required" !== e.samlSignIn && e.hasAccount && e.passwordSignIn,
                        i = "required" === e.samlSignIn,
                        r = "required" !== e.samlSignIn && e.hasAccount && e.mfaOptions.length > 0,
                        a = n && !i ? r ? "on" : "off" : "disabled",
                        s = e.mfaOptions.find(e => "backup_code" === e.mfaMethod),
                        o = e.passkeys.length > 0;
                    return {
                        hasPassword: n,
                        canConfigurePassword: !i,
                        isSamlEnforced: i,
                        mfaStatus: a,
                        numMfaSettings: e.mfaOptions.length,
                        regenerateBackupCodes: void 0 === s && "on" === a,
                        hasPasskeys: o
                    }
                }
                throw t.error
            }
        },
        182797: (e, t, n) => {
            n.d(t, {
                A: () => a
            }), n(581454), n(296540);
            var i = n(474848);
            let r = {
                pane: {
                    display: "flex",
                    whiteSpace: "pre-line",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 4,
                    backgroundColor: n(632079).Tj.yellow.background.primaryTranslucent,
                    paddingTop: 8,
                    paddingBottom: 8,
                    marginBottom: 10
                },
                textCode: {
                    fontFamily: (0, n(699422).xf)({
                        pageFont: "mono",
                        locale: n(849917).locale
                    }),
                    fontWeight: n(699422).Wy.regular,
                    fontSize: n(699422).J.UIRegular.desktop,
                    font: n(699422).Tf.emailMono,
                    color: n(632079).Tj.yellow.text.secondary,
                    textAlign: "center"
                },
                redactedBackupCode: {
                    textDecoration: "line-through",
                    opacity: .2
                }
            };

            function a(e) {
                let {
                    type: t
                } = e;
                return (0, i.jsx)("div", {
                    style: r.pane,
                    children: (0, i.jsx)("div", {
                        style: r.textCode,
                        children: "status" === t ? e.status.map((e, t) => (0, i.jsx)("div", {
                            style: e.hasBeenUsed ? r.redactedBackupCode : {},
                            children: n(885915).O
                        }, t)) : "unencryptedCodes" === t ? e.backupCodes.map(n(885915).H).join("\n") : (0, n(722371).HB)(t)
                    })
                })
            }
        },
        184641: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => r,
                shieldLockIcon: () => a
            }), n(296540);
            var i = n(474848);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.07 2.17 13.85 15.65",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M10 5.607c1.173 0 2.124.951 2.124 2.125v1.093c.525.194.9.697.9 1.29v2.291c0 .76-.615 1.375-1.375 1.375h-3.3a1.374 1.374 0 0 1-1.373-1.375v-2.292c0-.592.374-1.095.899-1.289V7.732c0-1.174.951-2.125 2.125-2.125m0 4.846a.756.756 0 1 0 0 1.512.756.756 0 0 0 0-1.512m0-3.622a.9.9 0 0 0-.9.9V8.74h1.8V7.732a.9.9 0 0 0-.9-.9"
                        }), (0, i.jsx)("path", {
                            d: "M9.788 2.212a.63.63 0 0 1 .491.03l1.89.944a7.5 7.5 0 0 0 3.344.789h.787c.345 0 .625.28.625.625v6.933a5.13 5.13 0 0 1-3.106 4.71l-3.573 1.532a.63.63 0 0 1-.492 0l-3.572-1.532a5.13 5.13 0 0 1-3.107-4.71V4.6c0-.345.28-.625.625-.625h.788c1.16 0 2.305-.27 3.343-.79l1.89-.944zM8.39 4.304a8.7 8.7 0 0 1-3.902.92h-.163v6.309c0 1.55.924 2.95 2.349 3.561L10 16.519l3.326-1.425a3.88 3.88 0 0 0 2.349-3.561V5.225h-.162a8.7 8.7 0 0 1-3.903-.921L10 3.498z"
                        })]
                    })
                },
                a = (0, n(104509).wt)("shieldLock", r, "default")
        },
        266581: (e, t, n) => {
            n.d(t, {
                d2: () => o,
                Vx: () => a
            }), n(898992), n(354520);
            var i = n(296540),
                r = n(474848);

            function a(e) {
                return /^\d$/.test(e)
            }
            n(632079).Tj.text.accentPrimary;
            let s = {
                inputRow: {
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    position: "relative"
                },
                focusedCell: {
                    boxShadow: "rgba(35, 131, 226, 0.57) 0px 0px 0px 1px inset, rgba(35, 131, 226, 0.35) 0px 0px 0px 2px"
                },
                cellInput: {
                    textAlign: "center",
                    color: n(632079).Tj.text.accentPrimary
                }
            };

            function o({
                numInputs: e,
                disabled: t,
                value: l,
                format: d,
                onChange: c,
                autoFocus: u,
                isValidKey: f,
                id: m
            }) {
                let p = (0, n(960253).e)(),
                    g = (0, n(960253).I)(() => ({
                        cell: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: ["login", "verification"].includes(d) ? 40 : 48,
                            aspectRatio: 3 / 4,
                            paddingInline: 0,
                            fontSize: 18,
                            background: "light" === p ? n(632079).oZ.EmailPasswordBackground : n(632079).Tj.background.secondaryTranslucent,
                            lineHeight: "20px",
                            borderRadius: 4,
                            boxShadow: `${n(632079).Tj.border.primaryTranslucent} 0 0 0 1px`,
                            borderWidth: 0
                        }
                    }), [d, p]),
                    [h, x] = (0, i.useState)(-1),
                    y = (0, i.useRef)([]),
                    j = (0, i.useCallback)(e => t => {
                        y.current[e] = t
                    }, []),
                    b = (0, i.useCallback)(e => {
                        var t;
                        null == (t = y.current[e]) || t.focus()
                    }, []);
                (0, i.useEffect)(() => {
                    u && b(0)
                }, [u, b]);
                let v = (0, i.useCallback)(e => {
                        x(e);
                        let t = y.current[e];
                        t && t.value && requestAnimationFrame(() => {
                            t.setSelectionRange(0, t.value.length)
                        })
                    }, []),
                    C = (0, i.useCallback)(e => {
                        b(Math.min(e, l.length))
                    }, [b, l.length]),
                    k = (0, i.useCallback)(t => n => {
                        let {
                            value: i
                        } = n.target, r = i.split("").filter(f), a = [...l];
                        0 === r.length ? (a.splice(t, 1), b(Math.max(t - 1, 0))) : (a.splice(t, r.length, ...r), b(Math.min(t + r.length, e - 1))), c(a.slice(0, e))
                    }, [c, l, f, e, b]),
                    w = (0, i.useCallback)(t => {
                        var n;
                        t.preventDefault();
                        let i = null == (n = t.clipboardData) ? void 0 : n.getData("text/plain").trim().split("").filter(f).slice(0, e);
                        i && (c(i), b(i.length === e ? e - 1 : i.length))
                    }, [c, f, e, b]),
                    I = (0, i.useCallback)(t => n => {
                        if ("Backspace" === n.key && 0 === n.currentTarget.selectionEnd && t > 0 && l[t - 1]) {
                            n.preventDefault();
                            let i = [...l];
                            i.splice(t - 1, 1), c(i.slice(0, e)), b(t - 1)
                        } else "ArrowLeft" === n.key && 0 === n.currentTarget.selectionEnd && t > 0 ? (n.preventDefault(), b(t - 1)) : "ArrowRight" === n.key && n.currentTarget.selectionStart === n.currentTarget.value.length && t < e - 1 && t < l.length && (n.preventDefault(), b(t + 1))
                    }, [c, l, e, b]);
                return (0, r.jsxs)("div", {
                    style: s.inputRow,
                    onBlur: () => x(-1),
                    id: m,
                    children: [(0, n(381453).Hn)(e, n => (0, r.jsx)("input", {
                        ref: j(n),
                        style: { ...g.cell,
                            ...s.cellInput,
                            ...h === n ? s.focusedCell : {}
                        },
                        onFocus: () => v(n),
                        onClick: () => C(n),
                        value: l[n] || "",
                        onInput: k(n),
                        onPaste: w,
                        onKeyUp: I(n),
                        disabled: t,
                        "aria-label": 0 === n ? "Enter verification code digit 1" : `Digit ${n+1}`,
                        "aria-describedby": "sr-helper-text",
                        autoComplete: 0 === n ? "one-time-code" : "off",
                        autoCorrect: "off",
                        autoCapitalize: "off",
                        spellCheck: "false",
                        inputMode: "verification" !== d || 0 !== n && a(l[0]) ? "numeric" : "text",
                        pattern: "verification" === d ? "[a-zA-Z0-9]*" : "[0-9]*",
                        tabIndex: n === l.length || n === e - 1 && l.length === e ? 0 : -1
                    }, n)), (0, r.jsx)("div", {
                        id: "sr-helper-text",
                        style: n(69916).Qg,
                        "aria-live": "polite",
                        children: (0, r.jsx)(n(109939).sA, {
                            id: "mfa.verificationCodeSingleInput.helperText",
                            defaultMessage: "After typing in each verification code input field, focus will automatically move to the next input"
                        })
                    })]
                })
            }
        },
        324589: (e, t, n) => {
            n.d(t, {
                A: () => s,
                _: () => a
            });
            var i = n(296540),
                r = n(474848);
            let a = 6;

            function s({
                isLoading: e,
                phoneNumber: t,
                errorMessage: o,
                resentStatus: l,
                resentAt: d,
                onDismiss: c,
                onBack: u,
                onVerifyCode: f,
                onResendLink: m
            }) {
                let [p, g] = (0, i.useState)([]), h = (0, r.jsx)(n(109939).sA, {
                    id: "profileSettings.mfa.sms.verifyCodeTitle",
                    defaultMessage: "Verify phone number"
                }), x = (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(n(109939).sA, {
                        id: "profileSettings.mfa.sms.verifyCodeHeader.default",
                        defaultMessage: "Enter the code sent to {phoneNumber} to complete setup.",
                        values: {
                            phoneNumber: t
                        }
                    }), " ", (0, r.jsx)(n(506619).n, {
                        resentAt: d,
                        resentStatus: l,
                        onResendLink: m
                    })]
                }), y = {
                    text: e ? (0, r.jsx)(n(517334).k, {}) : (0, r.jsx)(n(109939).sA, {
                        id: "profileSettings.mfa.sms.verifyCodeButton",
                        defaultMessage: "Verify code"
                    }),
                    onClick: () => f(p.join("")),
                    disabled: e || "resending" === l || (0, n(381453).oE)(p).length !== a
                }, j = [{
                    text: (0, r.jsx)(n(109939).sA, {
                        id: "profileSettings.mfa.sms.verifyCodeNeedHelp",
                        defaultMessage: "Need help?"
                    }),
                    href: (0, n(442564).x)("guides.mfa"),
                    isExternal: !0,
                    type: "link",
                    view: "plain"
                }];
                return (0, r.jsx)(n(19299).A, {
                    title: h,
                    header: x,
                    errorMessage: o,
                    primaryAction: y,
                    secondaryActions: j,
                    onDismiss: c,
                    onBack: u,
                    disableBackButton: e,
                    children: (0, r.jsx)(n(4458).VP, {
                        width: "100%",
                        justifyContent: "center",
                        marginTop: 16,
                        marginBottom: 4,
                        children: (0, r.jsx)(n(266581).d2, {
                            numInputs: a,
                            format: "settings",
                            disabled: !1,
                            value: p,
                            onChange: g,
                            autoFocus: !0,
                            isValidKey: n(266581).Vx
                        })
                    })
                })
            }
        },
        393501: (e, t, n) => {
            n.d(t, {
                A: () => c,
                _: () => s
            }), n(898992), n(672577);
            var i = n(296540),
                r = n(474848);

            function a(e) {
                let {
                    placeholder: t,
                    value: i,
                    maxlength: a,
                    onChange: s
                } = e;
                return (0, r.jsx)(n(36481).p, {
                    value: i,
                    placeholder: t,
                    maxlength: a,
                    inputStyle: n(699422).RC,
                    autoFocus: !0,
                    spellCheck: !1,
                    onChange: s,
                    autoComplete: "off",
                    customElementAttributes: n(162895).SY
                })
            }
            let s = 6,
                o = ["totpDuplicateFriendlyName", "totpEmptyFriendlyName", "totpBadFriendlyName"],
                l = ["unexpectedError", "totpIncorrectCode"],
                d = {
                    qrCodeContainer: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: 116,
                        height: 116,
                        marginBottom: 15
                    },
                    qrCode: {
                        width: "100%"
                    },
                    textCodeContainer: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        height: 50,
                        marginBottom: 15
                    },
                    textCode: {
                        fontWeight: n(699422).Wy.medium,
                        fontSize: n(699422).J.UIRegular.desktop,
                        color: n(632079).Tj.text.accentPrimary,
                        textAlign: "center",
                        verticalAlign: "middle"
                    },
                    inputLabel: {
                        color: n(632079).Tj.text.tertiary,
                        fontWeight: n(699422).Wy.medium,
                        alignSelf: "flex-start",
                        fontSize: n(699422).J.UISmall.desktop,
                        marginBottom: 6
                    },
                    error: {
                        color: n(632079).oZ.red,
                        width: "100%",
                        marginTop: 4,
                        textAlign: "start",
                        fontSize: n(699422).J.UISmall.desktop
                    }
                };

            function c({
                isLoading: e,
                qrCode: t,
                textCode: u,
                friendlyName: f,
                errorMessage: m,
                errorKeys: p,
                onDismiss: g,
                onBack: h,
                onContinue: x
            }) {
                let y = (0, n(109939).tz)(),
                    [j, b] = (0, i.useState)(f ? ? ""),
                    [v, C] = (0, i.useState)([]),
                    [k, w] = (0, i.useState)(!0),
                    [I, S] = (0, i.useState)(!1),
                    A = (0, i.useCallback)(() => {
                        b(""), C([]), S(!0)
                    }, [b, C]),
                    M = k ? (0, r.jsx)(n(109939).sA, {
                        id: "profileSettings.mfa.totp.scanQRCodeTitle",
                        defaultMessage: "Scan code in authenticator"
                    }) : (0, r.jsx)(n(109939).sA, {
                        id: "profileSettings.mfa.totp.typeTextCodeTitle",
                        defaultMessage: "Type code in authenticator"
                    }),
                    T = (0, r.jsx)(n(109939).sA, {
                        id: "profileSettings.mfa.totp.scanQRCodeHeader",
                        defaultMessage: "Name your authenticator and enter the verification code to complete setup"
                    }),
                    B = {
                        text: (0, r.jsx)(n(109939).sA, {
                            id: "profileSettings.mfa.totp.continueButton",
                            defaultMessage: "Continue"
                        }),
                        onClick: () => {
                            S(!1), x(j, v.join(""))
                        },
                        disabled: !t || e || 0 === j.length || (0, n(381453).oE)(v).length !== s
                    },
                    V = k ? [{
                        text: (0, r.jsx)(n(109939).sA, {
                            id: "profileSettings.mfa.totp.cantScanCodeButton",
                            defaultMessage: "Can’t scan code?"
                        }),
                        onClick: () => {
                            w(!1), A()
                        },
                        type: "button",
                        view: "plain",
                        disabled: e
                    }] : [{
                        text: (0, r.jsx)(n(109939).sA, {
                            id: "profileSettings.mfa.totp.scanQRCodeButton",
                            defaultMessage: "Scan QR code"
                        }),
                        onClick: () => {
                            w(!0), A()
                        },
                        type: "button",
                        view: "plain",
                        disabled: e
                    }],
                    D = y.formatMessage({
                        id: "profileSettings.mfa.totp.authenticatorNameInput.placeholder",
                        defaultMessage: "e.g. Duo, Authy"
                    }),
                    P = null == p ? void 0 : p.find(e => o.includes(e)),
                    E = null == p ? void 0 : p.find(e => null == l ? void 0 : l.includes(e));
                return (0, r.jsx)(n(19299).A, {
                    onDismiss: g,
                    onBack: h,
                    title: M,
                    header: T,
                    icon: (0, r.jsx)(n(16275).I, {
                        icon: n(184641).shieldLockIcon,
                        size: "xl",
                        colorVariant: "secondary"
                    }),
                    errorMessage: m,
                    primaryAction: B,
                    secondaryActions: V,
                    children: (0, r.jsxs)(n(4458).VP, {
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        children: [k ? (0, r.jsx)("div", {
                            style: d.qrCodeContainer,
                            children: t ? (0, r.jsx)("img", {
                                style: d.qrCode,
                                src: t
                            }) : (0, r.jsx)(n(517334).k, {})
                        }) : (0, r.jsx)("div", {
                            style: d.textCodeContainer,
                            children: (0, r.jsx)("div", {
                                style: d.textCode,
                                children: u
                            })
                        }), (0, r.jsx)("div", {
                            style: d.inputLabel,
                            children: (0, r.jsx)(n(109939).sA, {
                                id: "profileSettings.mfa.totp.authenticatorNameInput.label",
                                defaultMessage: "Authenticator name"
                            })
                        }), (0, r.jsxs)(n(4458).VP, {
                            width: "100%",
                            justifyContent: "center",
                            marginBottom: 8,
                            children: [(0, r.jsx)(a, {
                                placeholder: D,
                                value: j,
                                maxlength: 30,
                                onChange: e => {
                                    b(e.target.value), S(!0)
                                }
                            }), !I && P ? (0, r.jsx)("div", {
                                style: d.error,
                                children: n(74306).xc[P]
                            }) : void 0]
                        }), (0, r.jsx)("div", {
                            style: d.inputLabel,
                            children: (0, r.jsx)(n(109939).sA, {
                                id: "profileSettings.mfa.totp.authenticatorVerifyCode.label",
                                defaultMessage: "One-time code"
                            })
                        }), (0, r.jsxs)(n(4458).VP, {
                            width: "100%",
                            justifyContent: "center",
                            marginBottom: 8,
                            children: [(0, r.jsx)(n(266581).d2, {
                                numInputs: s,
                                format: "settings",
                                disabled: e,
                                value: v,
                                onChange: e => {
                                    C(e), S(!0)
                                },
                                autoFocus: !1,
                                isValidKey: n(266581).Vx
                            }), !I && E ? (0, r.jsx)("div", {
                                style: d.error,
                                children: n(74306).xc[E]
                            }) : void 0]
                        })]
                    })
                })
            }
        },
        414243: (e, t, n) => {
            n.d(t, {
                v: () => r
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "4.65 2.91 5.84 10.18",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M4.87 7.47a.75.75 0 0 0 0 1.06l4.32 4.32a.75.75 0 1 0 1.06-1.06L6.46 8l3.79-3.79a.75.75 0 1 0-1.06-1.06z"
                    })
                },
                r = (0, n(104509).wt)("arrowChevronSingleLeftFillSmall", i, "fillSmall")
        },
        506619: (e, t, n) => {
            n.d(t, {
                n: () => o
            });
            var i = n(296540),
                r = n(474848);
            let a = 60 * n(627179).TD,
                s = {
                    cursor: "default"
                };

            function o({
                resentStatus: e,
                resentAt: t,
                onResendLink: l
            }) {
                let [d, c] = (0, i.useState)(() => Date.now());
                (0, i.useEffect)(() => {
                    if (t + a > d) {
                        let e = setTimeout(() => {
                            c(Date.now())
                        }, 1e3);
                        return () => {
                            clearTimeout(e)
                        }
                    }
                }, [t, c, d]);
                let u = Math.max(Math.floor((t + a - d) / 1e3), 0);
                if ("not-resent" === e || "resent" === e && 0 === u) return (0, r.jsx)(n(988022).p, {
                    size: "sm",
                    colorPalette: "blue",
                    onClick: l,
                    children: (0, r.jsx)(n(109939).sA, {
                        id: "mfa.sms.resend.resend.link",
                        defaultMessage: "Resend"
                    })
                });
                if ("resending" === e) return (0, r.jsxs)(n(4458).fI, {
                    gap: 4,
                    alignItems: "center",
                    justifyContent: "center",
                    height: n(64960).RO.sm,
                    children: [(0, r.jsx)(n(109939).sA, {
                        id: "mfa.sms.resend.sending.label",
                        defaultMessage: "Sending"
                    }), (0, r.jsx)(n(517334).k, {
                        size: "sm"
                    })]
                });
                if ("resent" === e) return (0, r.jsx)(n(51831).m, {
                    placement: "bottom",
                    content: () => (0, r.jsx)(n(109939).sA, {
                        id: "mfa.sms.resend.resent.tooltip",
                        defaultMessage: "You can send a code again in {resendTimeout} seconds",
                        values: {
                            resendTimeout: u
                        }
                    }),
                    children: e => (0, r.jsx)("span", { ...e,
                        style: s,
                        children: (0, r.jsxs)(n(4458).fI, {
                            gap: 4,
                            alignItems: "center",
                            justifyContent: "center",
                            height: n(64960).RO.sm,
                            children: [(0, r.jsx)(n(109939).sA, {
                                id: "mfa.sms.resend.resent.message",
                                defaultMessage: "Resent"
                            }), (0, r.jsx)(n(16275).I, {
                                icon: n(574657).checkmarkCircleFillSmallIcon,
                                size: "xs",
                                colorPalette: "green",
                                colorVariant: "accentPrimary"
                            })]
                        })
                    })
                });
                throw (0, n(722371).HB)(e)
            }
        },
        570787: (e, t, n) => {
            n.d(t, {
                A: () => a
            }), n(296540);
            var i = n(474848);

            function r({
                onClick: e,
                disabled: t,
                view: a,
                isRed: s,
                href: o,
                isExternal: l,
                saveAs: d,
                style: c,
                children: u
            }) {
                let f = (0, n(64960).qq)({
                        size: "md",
                        width: "fill",
                        isButtonGapEnabled: !0
                    }),
                    m = (0, n(107332).P)({
                        variant: a,
                        colorPalette: s ? "red" : void 0
                    }),
                    p = { ...f,
                        ...m.resting,
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        cursor: t ? void 0 : "pointer",
                        textDecoration: "none",
                        ...c
                    };
                return (0, i.jsx)("a", {
                    style: p,
                    target: l ? "_blank" : void 0,
                    href: o,
                    download: d,
                    onClick: e,
                    rel: "noopener noreferrer",
                    children: u
                })
            }

            function a(e) {
                let {
                    type: t,
                    view: a,
                    text: s,
                    disabled: o,
                    isRed: l
                } = e;
                if ("button" === t)
                    if ("outline" === a) return (0, i.jsx)(n(548436).A, {
                        size: "lg",
                        width: "fill",
                        onClick: e.onClick,
                        colorPalette: l ? "red" : void 0,
                        disabled: o,
                        children: s
                    });
                    else return (0, i.jsx)(n(406910).p, {
                        size: "lg",
                        width: "fill",
                        style: {
                            justifyContent: "center"
                        },
                        onClick: e.onClick,
                        colorPalette: l ? "red" : "gray",
                        disabled: o,
                        children: s
                    });
                if ("link" === t) return (0, i.jsx)(r, {
                    onClick: e.onClick,
                    view: a,
                    isExternal: e.isExternal,
                    isRed: l,
                    href: e.href,
                    saveAs: e.saveAs,
                    disabled: o,
                    children: s
                });
                throw (0, n(722371).HB)(t)
            }
        },
        695142: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowDiagonalUpRightFillIcon: () => r,
                iconDefinition: () => i
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.16 4.17 11.67 11.67",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M15.825 5.05a.875.875 0 0 0-.875-.875H7.313a.875.875 0 1 0 0 1.75h5.524L4.393 14.37c-.32.32-.303.857.039 1.198.341.342.878.36 1.198.039l8.445-8.444v5.524a.875.875 0 1 0 1.75 0z"
                    })
                },
                r = (0, n(104509).wt)("arrowDiagonalUpRightFill", i, "fill")
        },
        748356: (e, t, n) => {
            n.d(t, {
                f: () => c,
                l: () => h
            }), n(581454), n(296540);
            var i = n(474848);
            let r = (0, n(109939).YK)({
                learnMore: {
                    id: "banner.learnMore",
                    defaultMessage: "Learn more"
                },
                dismiss: {
                    id: "banner.dismiss",
                    defaultMessage: "Dismiss"
                }
            });

            function a(e, t) {
                return (0, n(960253).I)(() => ({
                    container: {
                        position: "relative",
                        backgroundColor: n(632079).Tj[e].background.secondary,
                        padding: "8px 12px",
                        minHeight: 44,
                        flexShrink: 0
                    },
                    icon: {
                        width: n(986939).A.isMobile ? n(104509).Ev.default : n(104509).Ev.sm,
                        height: n(986939).A.isMobile ? n(104509).Ev.default : n(104509).Ev.sm,
                        fill: t ? n(632079).Tj[t].icon.accentPrimary : n(632079).Tj[e].icon.secondary
                    },
                    content: {
                        color: n(632079).Tj[e].text.secondary
                    },
                    contentAutoLayout: {
                        position: "relative",
                        color: n(632079).Tj[e].text.secondary
                    },
                    learnMoreIcon: {
                        fill: n(632079).Tj[e].icon.secondary
                    },
                    titleIcon: {
                        marginInlineEnd: 8
                    }
                }), [e, t])
            }

            function s(e) {
                let {
                    onDismiss: t
                } = e, a = (0, n(109939).tz)();
                return t ? (0, i.jsx)(n(374533).A, {
                    size: "xs",
                    onClick: t,
                    icon: n(25094).xMarkSmallIcon,
                    colorVariant: "primary",
                    ariaLabel: a.formatMessage(r.dismiss)
                }) : (0, i.jsx)("div", {})
            }

            function o(e) {
                let {
                    tint: t,
                    iconGroup: r,
                    style: a
                } = e;
                return r ? (0, i.jsx)(n(708966).Q, {
                    iconGroup: r,
                    variantName: "small",
                    colorPalette: t,
                    colorVariant: "secondary",
                    style: a
                }) : null
            }
            let l = {
                    k1xSpc: "x78zum5",
                    kXwgrk: "x1q0g3np",
                    kGNEyG: "x6s0dn4",
                    $$css: !0
                },
                d = {
                    kVAEAm: "x1n2onr6",
                    $$css: !0
                };

            function c(e) {
                let {
                    tint: t,
                    action: r
                } = e, {
                    label: a,
                    onClick: s,
                    icon: o
                } = r, d = (0, n(960253).I)(() => ({
                    button: {
                        color: "gray" === t ? n(632079).Tj.text.primary : n(632079).Tj[t].text.secondary,
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: n(632079).Tj[t].border.strongTranslucent
                    },
                    buttonHovered: {
                        backgroundColor: n(632079).Tj[t].background.secondaryTranslucent
                    },
                    buttonPressed: {
                        backgroundColor: n(632079).Tj[t].background.tertiaryTranslucent
                    }
                }), [t]);
                return (0, i.jsx)(n(548436).A, {
                    iconLeading: o ? {
                        icon: o,
                        size: "sm"
                    } : void 0,
                    onClick: s,
                    style: d.button,
                    hoveredStyle: d.buttonHovered,
                    pressedStyle: d.buttonPressed,
                    children: (0, i.jsx)(n(111010).D, {
                        styleKey: "bodyMedium",
                        style: l,
                        children: a
                    })
                })
            }

            function u(e) {
                let {
                    label: t,
                    iconGroup: l,
                    tint: u,
                    onDismiss: f,
                    actions: m,
                    onLearnMoreClick: p
                } = e, g = a(u), h = (0, n(109939).tz)();
                return (0, i.jsxs)(n(4458).fI, {
                    style: g.container,
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-between",
                    children: [(0, i.jsxs)(n(4458).fI, {
                        style: g.contentAutoLayout,
                        alignItems: "center",
                        justifyContent: "center",
                        children: [(0, i.jsx)(o, {
                            tint: u,
                            iconGroup: l,
                            style: g.titleIcon
                        }), (0, i.jsx)(n(111010).D, {
                            styleKey: "bodyMedium",
                            children: t
                        }), p ? (0, i.jsx)(n(374533).A, {
                            onClick: p,
                            icon: () => (0, i.jsx)(n(708966).Q, {
                                iconGroup: n(799472).u,
                                variantName: "default",
                                colorPalette: u,
                                colorVariant: "secondary"
                            }),
                            ariaLabel: h.formatMessage(r.learnMore)
                        }) : void 0]
                    }), (0, i.jsxs)(n(4458).fI, {
                        gap: 12,
                        alignItems: "center",
                        justifyContent: "flex-end",
                        style: d,
                        flex: "1 1 0",
                        children: [(0, i.jsx)(n(4458).fI, {
                            gap: 8,
                            alignItems: "center",
                            justifyContent: "center",
                            style: d,
                            children: null == m ? void 0 : m.map((e, t) => e.isCustom ? e.render() : (0, i.jsx)(c, {
                                tint: u,
                                action: e
                            }, t))
                        }), (0, i.jsx)(s, {
                            onDismiss: f
                        })]
                    })]
                })
            }

            function f(e) {
                let {
                    label: t,
                    iconGroup: l,
                    staticIcon: u,
                    iconColor: f,
                    tint: m,
                    onDismiss: p,
                    actions: g,
                    onLearnMoreClick: h,
                    alignment: x = "center"
                } = e, y = a(m, f), j = (0, n(109939).tz)(), b = l ? (0, i.jsx)(o, {
                    tint: m,
                    iconGroup: l,
                    style: y.titleIcon
                }) : u ? u({ ...y.icon,
                    ...y.titleIcon
                }) : null;
                return (0, i.jsxs)(n(4458).fI, {
                    style: y.container,
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "space-between",
                    gap: 8,
                    children: [(0, i.jsxs)(n(4458).fI, {
                        style: y.contentAutoLayout,
                        gap: 24,
                        flexGrow: 1,
                        alignItems: "center",
                        justifyContent: "start" === x ? "space-between" : "center",
                        children: [(0, i.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            justifyContent: "center",
                            style: d,
                            children: [b, (0, i.jsx)(n(111010).D, {
                                styleKey: "bodyMedium",
                                children: t
                            }), h ? (0, i.jsx)(n(51831).m, {
                                content: () => j.formatMessage(r.learnMore),
                                children: e => (0, i.jsx)(n(374533).A, {
                                    onClick: h,
                                    icon: () => (0, i.jsx)(n(708966).Q, {
                                        iconGroup: n(799472).u,
                                        variantName: "default",
                                        colorPalette: m,
                                        colorVariant: "secondary"
                                    }),
                                    ariaLabel: j.formatMessage(r.learnMore),
                                    ...e
                                })
                            }) : void 0]
                        }), g ? (0, i.jsx)(n(4458).fI, {
                            gap: 8,
                            style: d,
                            children: null == g ? void 0 : g.map((e, t) => e.isCustom ? e.render() : (0, i.jsx)(c, {
                                tint: m,
                                action: e
                            }, t))
                        }) : null]
                    }), (0, i.jsx)(s, {
                        onDismiss: p
                    })]
                })
            }

            function m(e) {
                let {
                    label: t,
                    description: r,
                    iconGroup: l,
                    staticIcon: u,
                    iconColor: f,
                    tint: m,
                    onDismiss: p,
                    actions: g,
                    noRoundedCorners: h
                } = e, x = a(m, f), y = (0, n(960253).I)(() => ({
                    container: {
                        position: "relative",
                        backgroundColor: n(632079).Tj[m].background.secondary,
                        padding: 16,
                        borderRadius: 8 * !h,
                        minHeight: 44,
                        flexShrink: 0
                    }
                }), [m, h]), j = l ? (0, i.jsx)(o, {
                    tint: m,
                    iconGroup: l
                }) : u ? u(x.icon) : null;
                return (0, i.jsxs)(n(4458).fI, {
                    style: y.container,
                    gap: 8,
                    width: "100%",
                    children: [j ? (0, i.jsx)(n(4458).fI, {
                        height: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        children: j
                    }) : null, (0, i.jsxs)(n(4458).VP, {
                        style: x.content,
                        gap: 8,
                        flex: "1 1 0",
                        children: [(0, i.jsxs)(n(4458).VP, {
                            gap: 4,
                            style: d,
                            children: [(0, i.jsx)(n(111010).D, {
                                styleKey: "bodyMedium",
                                colorVariant: "gray" === m ? "primary" : void 0,
                                children: t
                            }), r ? (0, i.jsx)(n(111010).D, {
                                styleKey: "bodyRegular",
                                children: r
                            }) : null]
                        }), g ? (0, i.jsx)(n(4458).fI, {
                            gap: 8,
                            style: d,
                            children: null == g ? void 0 : g.map((e, t) => e.isCustom ? e.render() : (0, i.jsx)(c, {
                                tint: m,
                                action: e
                            }, t))
                        }) : null]
                    }), (0, i.jsx)(s, {
                        onDismiss: p
                    })]
                })
            }

            function p(e) {
                let {
                    label: t,
                    staticIcon: r,
                    tint: o,
                    iconColor: l,
                    onDismiss: u,
                    actions: f
                } = e, m = a(o, l), p = (0, n(960253).I)(() => ({
                    container: {
                        position: "relative",
                        backgroundColor: n(632079).Tj[o].background.secondary,
                        paddingTop: 8,
                        paddingInlineEnd: 8,
                        paddingBottom: 8,
                        paddingInlineStart: 12,
                        borderRadius: 8,
                        minHeight: 44,
                        flexShrink: 0
                    }
                }), [o]);
                return (0, i.jsxs)(n(4458).fI, {
                    style: p.container,
                    gap: 8,
                    alignItems: f ? "center" : void 0,
                    justifyContent: f ? "center" : void 0,
                    width: "100%",
                    children: [r ? (0, i.jsx)(n(4458).fI, {
                        height: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        children: r(m.icon)
                    }) : null, (0, i.jsxs)(n(4458).fI, {
                        style: m.content,
                        alignItems: "center",
                        justifyContent: "space-between",
                        flex: "1 1 0",
                        children: [(0, i.jsx)(n(4458).VP, {
                            gap: 4,
                            style: d,
                            flex: "1 1 0",
                            children: (0, i.jsx)(n(111010).D, {
                                styleKey: "bodyRegular",
                                children: t
                            })
                        }), f ? (0, i.jsx)(n(4458).fI, {
                            gap: 8,
                            style: d,
                            children: null == f ? void 0 : f.map((e, t) => e.isCustom ? e.render() : (0, i.jsx)(c, {
                                tint: o,
                                action: e
                            }, t))
                        }) : null]
                    }), (0, i.jsx)(s, {
                        onDismiss: u
                    })]
                })
            }

            function g(e) {
                let {
                    tint: t,
                    onDismiss: r,
                    content: o,
                    alignment: l = "center",
                    verticalAlignment: d = "center"
                } = e, c = a(t);
                return (0, i.jsxs)(n(4458).fI, {
                    style: c.container,
                    gap: 8,
                    alignItems: d,
                    justifyContent: "space-between",
                    width: "100%",
                    children: [(0, i.jsx)(n(4458).fI, {
                        style: c.content,
                        flexGrow: 1,
                        justifyContent: l,
                        children: o
                    }), (0, i.jsx)(s, {
                        onDismiss: r
                    })]
                })
            }

            function h(e) {
                let {
                    display: t
                } = e;
                switch (t) {
                    case "inline":
                        return (0, i.jsx)(m, { ...e
                        });
                    case "full-width":
                        if (n(986939).A.isMobile) return (0, i.jsx)(u, { ...e
                        });
                        return (0, i.jsx)(f, { ...e
                        });
                    case "full-width-no-content":
                        return (0, i.jsx)(g, { ...e
                        });
                    case "inline-compact":
                        return (0, i.jsx)(p, { ...e
                        })
                }
                return (0, i.jsx)(i.Fragment, {})
            }
        },
        885915: (e, t, n) => {
            n.d(t, {
                H: () => r,
                O: () => i
            });
            let i = "XXXX-XXXX";

            function r(e) {
                return e.replace(/[^a-z0-9A-Z]/g, "").replace(/^(.{4})/, "$1-")
            }
        },
        891390: (e, t, n) => {
            n.d(t, {
                _: () => i
            });
            class i {
                debugName;
                store;
                constructor(e, t) {
                    this.store = e, this.debugName = t
                }
                getState() {
                    return this.store.getState()
                }
                getCurrentStep() {
                    return this.store.getState()
                }
                async withStep(e, t) {
                    let n = this.store.getState();
                    if (!(Array.isArray(e) ? e.includes(n.step) : n.step === e)) return;
                    let i = await t(n),
                        r = this.store.getState();
                    if (r.step === n.step) return {
                        result: i,
                        state: r
                    }
                }
                checkStep(e) {
                    let t = this.store.getState();
                    if (Array.isArray(e) ? e.includes(t.step) : t.step === e) return t
                }
                handleUnexpectedError = e => {
                    let t = { ...this.store.getState()
                    };
                    if ("object" == typeof e && null !== e) {
                        let i, {
                            body: r,
                            error: a,
                            data: s
                        } = e;
                        if (r ? i = r : s && (i = s.responseBody), i) {
                            if ("object" == typeof i && null !== i) {
                                let {
                                    clientData: e
                                } = i;
                                if (e) {
                                    let i = (0, n(115964).$)(e);
                                    if (i) {
                                        let e = n(962299).A.getIntl();
                                        this.store.setState({ ...t,
                                            error: e.formatMessage(i)
                                        })
                                    }
                                }
                            }
                        } else n(773352).log({
                            level: "error",
                            from: this.debugName,
                            type: "handleUnexpectedError",
                            error: (0, n(416607).convertErrorToLog)(a)
                        }), this.store.setState({ ...t,
                            error: n(74306).xc.unexpectedError
                        })
                    } else this.store.setState({ ...t,
                        error: n(74306).xc.unexpectedError
                    })
                }
            }
        },
        901869: (e, t, n) => {
            n.d(t, {
                K: () => a
            }), n(296540);
            var i = n(474848);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.35 2.37 19.3 15.26",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M17.002 6.715c.165 0 .324.067.441.184l2.02 2.03a.625.625 0 0 1-.886.882l-.952-.957V10a7.625 7.625 0 0 1-12.814 5.588.625.625 0 0 1 .851-.916A6.375 6.375 0 0 0 16.375 10V8.844l-.964.959a.625.625 0 0 1-.882-.886l2.03-2.02a.63.63 0 0 1 .442-.182"
                        }), (0, i.jsx)("path", {
                            d: "M10 4.8a.625.625 0 0 0-.625.625V9.7c0 .345.28.625.625.625h2.6a.625.625 0 1 0 0-1.25h-1.975v-3.65A.625.625 0 0 0 10 4.8"
                        }), (0, i.jsx)("path", {
                            d: "m2.375 11.146-.952-.957a.625.625 0 1 0-.886.882l2.02 2.03a.625.625 0 0 0 .884.002l2.03-2.02a.625.625 0 1 0-.882-.886l-.964.96V10a6.375 6.375 0 0 1 10.713-4.672.625.625 0 0 0 .85-.916A7.625 7.625 0 0 0 2.374 10z"
                        })]
                    })
                },
                a = (0, n(104509).wt)("clockArrow2CirclePath", r, "default")
        },
        913825: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                personKeyFillIcon: () => r
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.68 2.37 15.23 17.3",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M10 2.375c-1.137 0-2.054.47-2.674 1.242-.608.757-.9 1.765-.9 2.824s.292 2.066.9 2.824c.62.772 1.537 1.241 2.674 1.241s2.055-.469 2.675-1.241c.608-.758.9-1.766.9-2.824 0-1.059-.292-2.067-.9-2.824-.62-.773-1.538-1.242-2.675-1.242m0 9.255c-2.7 0-5.101 1.315-6.12 3.305-.361.706-.199 1.421.23 1.923.412.48 1.06.767 1.74.767h7.88v-1.79a3.96 3.96 0 0 1-1.439-3.876 8 8 0 0 0-2.291-.33m8.906 1.09a2.72 2.72 0 0 1-1.51 2.436v1.34l-.906 1.057.906 1.057-1.209 1.058-1.208-1.058v-3.454a2.719 2.719 0 1 1 3.927-2.436m-2.02-.604a.698.698 0 1 0-1.396 0 .698.698 0 0 0 1.395 0"
                    })
                },
                r = (0, n(104509).wt)("personKeyFill", i, "fill")
        }
    }
]);