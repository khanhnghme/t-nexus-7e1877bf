! function() {
    try {
        var r = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            a = (new r.Error).stack;
        a && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[a] = "3f890c86-6802-4456-a6b3-4a2cdc268708", r._sentryDebugIdIdentifier = "sentry-dbid-3f890c86-6802-4456-a6b3-4a2cdc268708")
    } catch (r) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [73454], {
        996803: function(r, a, c) {
            c.d(a, {
                Fq: function() {
                    return l
                },
                HI: function() {
                    return t
                },
                Vi: function() {
                    return e.Vi
                }
            });
            var e = c(55230),
                o = c(965875),
                v = c(586349),
                i = c(332811),
                n = c(761331);

            function l(r, a) {
                return "string" == typeof r && r.startsWith("var(") ? `rgb(from ${r} r g b / ${a})` : t((0, e.Vi)(r).alpha(a))
            }

            function t(r) {
                return r.minify({
                    hex: !1,
                    hsl: !1
                })
            }(0, e.l7)([i.Z, o.Z, v.Z, n.Z])
        },
        973454: function(r, a, c) {
            c.d(a, {
                O9: function() {
                    return s
                },
                hH: function() {
                    return u
                },
                BC: function() {
                    return y
                }
            });
            var e = c(185934);
            c(914775);
            var o = c(996803),
                v = c(524320);
            let i = [1, .7, .5, .3, .15],
                n = ["gray", "red", "orange", "yellow", "green", "teal", "blue", "purple", "pink", "brown"].reduce((r, a) => (r[a] = i.map(r => 1 === r ? v.L[a].light.background.accentSecondary : (0, o.Fq)(v.L[a].light.background.accentSecondary, r)), r), {});
            ({
                colorful: ["blue", "yellow", "green", "purple", "orange", "pink", "teal", "red"].map(r => n[r][0]),
                ...n
            });
            var l = c(239624);
            let t = "rgb(15, 15, 15)",
                d = "rgb(15, 15, 15)";

            function B({
                elevation: r,
                color: a = (0, o.Vi)({
                    h: 0,
                    s: 1,
                    l: 7
                }),
                opacity: c = .1,
                inner: e = !1
            }) {
                let v = e ? "inset" : "";
                switch (r) {
                    case 1:
                        return `
					${v} 0 0 0 1px ${(0,o.Fq)(a,c)}
				`;
                    case 2:
                        return `
					${v} 0 0 0 1px ${(0,o.Fq)(a,c)},
					${v} 0 2px 4px ${(0,o.Fq)(a,c)}
				`;
                    default:
                        return `
					${v} 0 0 0 1px ${(0,o.Fq)(a,c/2)},
					${v} 0 ${Number(r)}px ${2*r}px ${(0,o.Fq)(a,c)},
					${v} 0 ${3*r}px ${8*r}px ${(0,o.Fq)(a,2*c)}
				`
                }
            }
            l.l.light.uiBlue[600], l.l.light.red[500], (0, o.Fq)(t, .05), (0, o.Fq)(t, .1), (0, o.Fq)(d, .05), (0, o.Fq)(t, .1), (0, o.Fq)(t, .1), (0, o.Fq)(t, .1), (0, o.Fq)(d, .2), (0, o.Fq)(d, .1), B({
                elevation: 2,
                color: t,
                opacity: .1
            }), B({
                elevation: 2,
                color: d,
                opacity: .2
            }), B({
                inner: !1,
                elevation: 1,
                color: "black",
                opacity: .05
            }), B({
                inner: !1,
                elevation: 1,
                color: "black",
                opacity: .1
            }), B({
                inner: !1,
                elevation: 1,
                color: "black",
                opacity: .06
            }), B({
                inner: !1,
                elevation: 1,
                color: "black",
                opacity: .12
            }), B({
                inner: !0,
                elevation: 1,
                color: "white",
                opacity: .05
            }), B({
                inner: !0,
                elevation: 1,
                color: "white",
                opacity: .05
            }), v.o.border.dark.primary, v.o.border.light.primaryTranslucent, v.o.border.dark.primaryTranslucent, v.o.border.dark.primary;
            let u = {
                    transparent: "transparent",
                    black: "black",
                    white: "white",
                    red: "#EB5757",
                    contentBorder: "#E4E3E2",
                    contentGrayBackground: "#F7F6F5",
                    contentPlaceholder: "#C4C4C4",
                    defaultText: "rgb(66, 66, 65)",
                    uiBlack: "#333",
                    uiExtraLightGray: "#E2E2E2",
                    uiGray: "#A5A5A5",
                    uiLightBlack: "#888",
                    uiLightBorder: "#F2F1F0",
                    uiLightGray: "#C4C4C4",
                    EmailBaseColor: "#333333",
                    EmailBorderColor: "#EEEEEE",
                    EmailCaptionColor: "#AAAAAA",
                    EmailPasswordBackground: "#F4F4F4",
                    EmailSecondaryTextColor: "#787774",
                    EmailLinkBackground: "#F9F9F8",
                    EmailTitleColor: "#1D1B16",
                    EmailFooterSecondaryTextColor: "#ACABA9",
                    PendingInvitationTextColor: "#ACABA9",
                    frontText: "#040404",
                    frontTextLight: "rgba(0,0,0,0.4)",
                    frontTextMedium: "rgba(0,0,0,0.6)",
                    frontTextDark: "#111111",
                    frontBorder: "rgba(0, 0, 0, 0.1)",
                    frontCreamBackground: "#FFFEFC",
                    frontCreamBackgroundDark: "#F9F5F1",
                    frontCreamText: "#463D34",
                    frontCreamBorder: "#D4CFCB",
                    frontBlueBackground: "#EFF3F5",
                    frontBlueBackgroundDark: "#D7E3E8",
                    frontBlueText: "#2383E2",
                    frontBlueBorder: "#B5C7D8",
                    frontPurpleBackground: "#E7E6EA",
                    frontPurpleBackgroundDark: "#D9D7DF",
                    frontPurpleText: "#382F49",
                    frontPurpleBorder: "#ACA8BD",
                    frontOrangeBackground: "#F8EDE7",
                    frontOrangeBackgroundDark: "#F2DCCF",
                    frontOrangeText: "#5B3322",
                    frontOrangeBorder: "#DEBEAC",
                    frontRed: "#eb5757",
                    frontPrimaryButtonBackground: "#E16259",
                    frontPrimaryButtonBackgroundHovered: "#CF534A",
                    frontPrimaryButtonBackgroundPressed: "#BF4D45",
                    frontPrimaryButtonBorder: "#BE5643",
                    frontRedButtonBackground: "#E16259",
                    frontRedButtonBackgroundHovered: "#CF534A",
                    frontRedButtonBackgroundPressed: "#BF4D45",
                    frontRedButtonBorder: "#BE5643",
                    frontSecondaryButtonBackground: "#FDF5F2",
                    frontSecondaryButtonBackgroundHovered: "#FBEBE8",
                    frontSecondaryButtonBackgroundPressed: "#F9E5E2",
                    frontTertiaryButtonBackground: "transparent",
                    frontTertiaryButtonBackgroundHovered: "rgba(55, 53, 47, 0.08)",
                    frontTertiaryButtonBackgroundPressed: "rgba(55, 53, 47, 0.16)",
                    frontQuaternaryButtonBackground: "#2383E2",
                    frontQuaternaryButtonBackgroundHovered: "#2383E2",
                    frontQuaternaryButtonBackgroundPressed: "#2383E2",
                    frontQuaternaryButtonBorder: "#2383E2",
                    frontMobilePhoneBackground: "#1d1d1d",
                    frontTransparent: "transparent",
                    frontBlackButtonBackground: "#323232",
                    frontBlackButtonBackgroundHovered: "#404040",
                    frontBlackButtonBackgroundPressed: "#4B4B4B",
                    frontBlueButtonBackground: "#2383E2",
                    frontBlueButtonHoveredBackground: "rgba(0, 119, 212, 1.0)",
                    frontBlueButtonPressedBackground: "rgba(0, 107, 199, 1.0)",
                    regularTextColor: "rgba(55, 53, 47, 1.0)",
                    mediumTextColor: "rgba(55, 53, 47, 0.7)",
                    lightTextColor: "rgba(55, 53, 47, 0.4)",
                    mediumIconColor: "rgba(55, 53, 47, 0.4)",
                    lightIconColor: "rgba(55, 53, 47, 0.2)",
                    dividerColor: "rgba(55, 53, 47, 0.09)",
                    invertedTextColor: "rgba(255, 255, 255, 0.9)",
                    selectionColor: "rgba(35, 131, 226, 0.28)",
                    halfWhite: "rgba(255, 255, 255, 0.5)",
                    diffTextColor: "#2383E2",
                    diffBackground: "rgba(35, 131, 226, 0.1)",
                    diffBackgroundHover: "rgba(35, 131, 226, 0.2)"
                },
                s = {
                    palette: {
                        uiBlue: {
                            50: "var(--ca-palUiBlu50)",
                            75: "var(--ca-palUiBlu75)",
                            100: "var(--ca-palUiBlu100)",
                            150: "var(--cd-palUiBlu150)",
                            200: "var(--ca-palUiBlu200)",
                            300: "var(--ca-palUiBlu300)",
                            400: "var(--ca-palUiBlu400)",
                            500: "var(--ca-palUiBlu500)",
                            600: "var(--c-palUiBlu600)",
                            700: "var(--c-palUiBlu700)"
                        },
                        pink: {
                            30: "var(--cl-palPin30)",
                            50: "var(--cd-palPin50)",
                            75: "var(--cd-palPin75)",
                            100: "var(--cl-palPin100)",
                            200: "var(--ca-palPin200)",
                            300: "var(--cl-palPin300)",
                            400: "var(--ca-palPin400)",
                            500: "var(--cd-palPin500)",
                            600: "var(--cd-palPin600)",
                            700: "var(--cd-palPin700)",
                            800: "var(--c-palPin800)",
                            900: "var(--c-palPin900)"
                        },
                        purple: {
                            30: "var(--cl-palPur30)",
                            50: "var(--cd-palPur50)",
                            75: "var(--cd-palPur75)",
                            100: "var(--cl-palPur100)",
                            200: "var(--ca-palPur200)",
                            300: "var(--cl-palPur300)",
                            400: "var(--ca-palPur400)",
                            500: "var(--cd-palPur500)",
                            600: "var(--cd-palPur600)",
                            700: "var(--cd-palPur700)",
                            800: "var(--c-palPur800)",
                            900: "var(--c-palPur900)"
                        },
                        green: {
                            30: "var(--cl-palGre30)",
                            50: "var(--cd-palGre50)",
                            75: "var(--cd-palGre75)",
                            100: "var(--cl-palGre100)",
                            200: "var(--ca-palGre200)",
                            300: "var(--cl-palGre300)",
                            400: "var(--ca-palGre400)",
                            500: "var(--cd-palGre500)",
                            600: "var(--cd-palGre600)",
                            700: "var(--cd-palGre700)",
                            800: "var(--c-palGre800)",
                            900: "var(--c-palGre900)"
                        },
                        gray: {
                            0: "var(--c-palGra0)",
                            30: "var(--cl-palGra30)",
                            50: "var(--c-palGra50)",
                            75: "var(--cl-palGra75)",
                            90: "var(--cl-palGra90)",
                            100: "var(--cl-palGra100)",
                            200: "var(--cl-palGra200)",
                            300: "var(--cl-palGra300)",
                            400: "var(--cl-palGra400)",
                            500: "var(--c-palGra500)",
                            600: "var(--c-palGra600)",
                            700: "var(--c-palGra700)",
                            800: "var(--c-palGra800)",
                            850: "var(--c-palGra850)",
                            900: "var(--c-palGra900)"
                        },
                        translucentGray: {
                            30: "var(--cl-palTraGra30)",
                            50: "var(--cl-palTraGra50)",
                            75: "var(--ca-palTraGra75)",
                            100: "var(--ca-palTraGra100)",
                            200: "var(--ca-palTraGra200)",
                            300: "var(--ca-palTraGra300)",
                            400: "var(--ca-palTraGra400)",
                            500: "var(--ca-palTraGra500)",
                            600: "var(--ca-palTraGra600)",
                            700: "var(--ca-palTraGra700)",
                            800: "var(--ca-palTraGra800)",
                            850: "var(--ca-palTraGra850)",
                            900: "var(--ca-palTraGra900)"
                        },
                        orange: {
                            30: "var(--cl-palOra30)",
                            50: "var(--cd-palOra50)",
                            75: "var(--cd-palOra75)",
                            100: "var(--cl-palOra100)",
                            200: "var(--ca-palOra200)",
                            300: "var(--cl-palOra300)",
                            400: "var(--ca-palOra400)",
                            500: "var(--cd-palOra500)",
                            600: "var(--cd-palOra600)",
                            700: "var(--cd-palOra700)",
                            800: "var(--c-palOra800)",
                            900: "var(--c-palOra900)"
                        },
                        brown: {
                            30: "var(--cl-palBro30)",
                            50: "var(--cd-palBro50)",
                            75: "var(--cd-palBro75)",
                            100: "var(--cl-palBro100)",
                            200: "var(--ca-palBro200)",
                            300: "var(--cl-palBro300)",
                            400: "var(--ca-palBro400)",
                            500: "var(--cd-palBro500)",
                            600: "var(--cd-palBro600)",
                            700: "var(--cd-palBro700)",
                            800: "var(--c-palBro800)",
                            900: "var(--c-palBro900)"
                        },
                        red: {
                            30: "var(--cl-palRed30)",
                            50: "var(--cd-palRed50)",
                            75: "var(--cd-palRed75)",
                            100: "var(--cl-palRed100)",
                            200: "var(--ca-palRed200)",
                            300: "var(--cl-palRed300)",
                            400: "var(--ca-palRed400)",
                            500: "var(--cd-palRed500)",
                            600: "var(--cd-palRed600)",
                            700: "var(--cd-palRed700)",
                            800: "var(--c-palRed800)",
                            900: "var(--c-palRed900)"
                        },
                        yellow: {
                            30: "var(--cl-palYel30)",
                            50: "var(--cd-palYel50)",
                            75: "var(--cd-palYel75)",
                            100: "var(--cl-palYel100)",
                            200: "var(--ca-palYel200)",
                            300: "var(--cl-palYel300)",
                            400: "var(--ca-palYel400)",
                            500: "var(--cd-palYel500)",
                            600: "var(--cd-palYel600)",
                            700: "var(--cd-palYel700)",
                            800: "var(--c-palYel800)",
                            900: "var(--c-palYel900)"
                        },
                        blue: {
                            30: "var(--cl-palBlu30)",
                            50: "var(--cd-palBlu50)",
                            75: "var(--cd-palBlu75)",
                            100: "var(--cl-palBlu100)",
                            200: "var(--ca-palBlu200)",
                            300: "var(--cl-palBlu300)",
                            400: "var(--ca-palBlu400)",
                            500: "var(--cd-palBlu500)",
                            600: "var(--cd-palBlu600)",
                            700: "var(--cd-palBlu700)",
                            800: "var(--c-palBlu800)",
                            900: "var(--c-palBlu900)"
                        },
                        pageGlass: {
                            0: "var(--ca-palPagGla0)"
                        },
                        washGlass: {
                            0: "var(--ca-palWasGla0)"
                        }
                    },
                    blue: {
                        text: {
                            primary: "var(--c-bluTexPri)",
                            secondary: "var(--c-bluTexSec)",
                            tertiary: "var(--c-bluTexTer)",
                            disabled: "var(--c-bluTexDis)",
                            accentPrimary: "var(--c-bluTexAccPri)",
                            inversePrimary: "var(--c-bluTexInvPri)",
                            inverseSecondary: "var(--c-bluTexInvSec)",
                            disabledTranslucent: "var(--ca-bluTexDisTra)"
                        },
                        icon: {
                            primary: "var(--c-bluIcoPri)",
                            secondary: "var(--c-bluIcoSec)",
                            tertiary: "var(--c-bluIcoTer)",
                            disabled: "var(--c-bluIcoDis)",
                            accentPrimary: "var(--c-bluIcoAccPri)",
                            inversePrimary: "var(--c-bluIcoInvPri)",
                            inverseSecondary: "var(--c-bluIcoInvSec)"
                        },
                        border: {
                            primary: "var(--c-bluBorPri)",
                            secondary: "var(--c-bluBorSec)",
                            inversePrimary: "var(--c-bluBorInvPri)",
                            accentPrimary: "var(--c-bluBorAccPri)",
                            strong: "var(--c-bluBorStr)",
                            primaryTranslucent: "var(--ca-bluBorPriTra)",
                            secondaryTranslucent: "var(--ca-bluBorSecTra)",
                            strongTranslucent: "var(--ca-bluBorStrTra)"
                        },
                        background: {
                            primary: "var(--c-bluBacPri)",
                            secondary: "var(--c-bluBacSec)",
                            tertiary: "var(--c-bluBacTer)",
                            elevated: "var(--c-bluBacEle)",
                            accentPrimary: "var(--c-bluBacAccPri)",
                            accentSecondary: "var(--c-bluBacAccSec)",
                            primaryTranslucent: "var(--ca-bluBacPriTra)",
                            secondaryTranslucent: "var(--ca-bluBacSecTra)",
                            tertiaryTranslucent: "var(--ca-bluBacTerTra)"
                        }
                    },
                    brown: {
                        text: {
                            primary: "var(--c-broTexPri)",
                            secondary: "var(--c-broTexSec)",
                            tertiary: "var(--c-broTexTer)",
                            disabled: "var(--c-broTexDis)",
                            accentPrimary: "var(--c-broTexAccPri)",
                            inversePrimary: "var(--c-broTexInvPri)",
                            inverseSecondary: "var(--c-broTexInvSec)",
                            disabledTranslucent: "var(--ca-broTexDisTra)"
                        },
                        icon: {
                            primary: "var(--c-broIcoPri)",
                            secondary: "var(--c-broIcoSec)",
                            tertiary: "var(--c-broIcoTer)",
                            disabled: "var(--c-broIcoDis)",
                            accentPrimary: "var(--c-broIcoAccPri)",
                            inversePrimary: "var(--c-broIcoInvPri)",
                            inverseSecondary: "var(--c-broIcoInvSec)"
                        },
                        border: {
                            primary: "var(--c-broBorPri)",
                            secondary: "var(--c-broBorSec)",
                            inversePrimary: "var(--c-broBorInvPri)",
                            accentPrimary: "var(--c-broBorAccPri)",
                            strong: "var(--c-broBorStr)",
                            primaryTranslucent: "var(--ca-broBorPriTra)",
                            secondaryTranslucent: "var(--ca-broBorSecTra)",
                            strongTranslucent: "var(--ca-broBorStrTra)"
                        },
                        background: {
                            primary: "var(--c-broBacPri)",
                            secondary: "var(--c-broBacSec)",
                            tertiary: "var(--c-broBacTer)",
                            elevated: "var(--c-broBacEle)",
                            accentPrimary: "var(--c-broBacAccPri)",
                            accentSecondary: "var(--c-broBacAccSec)",
                            primaryTranslucent: "var(--ca-broBacPriTra)",
                            secondaryTranslucent: "var(--ca-broBacSecTra)",
                            tertiaryTranslucent: "var(--ca-broBacTerTra)"
                        }
                    },
                    gray: {
                        text: {
                            primary: "var(--c-graTexPri)",
                            secondary: "var(--c-graTexSec)",
                            tertiary: "var(--c-graTexTer)",
                            disabled: "var(--c-graTexDis)",
                            accentPrimary: "var(--c-graTexAccPri)",
                            inversePrimary: "var(--c-graTexInvPri)",
                            inverseSecondary: "var(--c-graTexInvSec)",
                            disabledTranslucent: "var(--ca-graTexDisTra)"
                        },
                        icon: {
                            primary: "var(--c-graIcoPri)",
                            secondary: "var(--c-graIcoSec)",
                            tertiary: "var(--c-graIcoTer)",
                            disabled: "var(--c-graIcoDis)",
                            accentPrimary: "var(--c-graIcoAccPri)",
                            inversePrimary: "var(--c-graIcoInvPri)",
                            inverseSecondary: "var(--c-graIcoInvSec)"
                        },
                        border: {
                            primary: "var(--c-graBorPri)",
                            secondary: "var(--c-graBorSec)",
                            inversePrimary: "var(--c-graBorInvPri)",
                            accentPrimary: "var(--c-graBorAccPri)",
                            strong: "var(--c-graBorStr)",
                            primaryTranslucent: "var(--ca-graBorPriTra)",
                            secondaryTranslucent: "var(--ca-graBorSecTra)",
                            strongTranslucent: "var(--ca-graBorStrTra)"
                        },
                        background: {
                            primary: "var(--c-graBacPri)",
                            secondary: "var(--c-graBacSec)",
                            tertiary: "var(--c-graBacTer)",
                            elevated: "var(--c-graBacEle)",
                            accentPrimary: "var(--c-graBacAccPri)",
                            accentSecondary: "var(--c-graBacAccSec)",
                            primaryTranslucent: "var(--ca-graBacPriTra)",
                            secondaryTranslucent: "var(--ca-graBacSecTra)",
                            tertiaryTranslucent: "var(--ca-graBacTerTra)"
                        }
                    },
                    green: {
                        text: {
                            primary: "var(--c-greTexPri)",
                            secondary: "var(--c-greTexSec)",
                            tertiary: "var(--c-greTexTer)",
                            disabled: "var(--c-greTexDis)",
                            accentPrimary: "var(--c-greTexAccPri)",
                            inversePrimary: "var(--c-greTexInvPri)",
                            inverseSecondary: "var(--c-greTexInvSec)",
                            disabledTranslucent: "var(--ca-greTexDisTra)"
                        },
                        icon: {
                            primary: "var(--c-greIcoPri)",
                            secondary: "var(--c-greIcoSec)",
                            tertiary: "var(--c-greIcoTer)",
                            disabled: "var(--c-greIcoDis)",
                            accentPrimary: "var(--c-greIcoAccPri)",
                            inversePrimary: "var(--c-greIcoInvPri)",
                            inverseSecondary: "var(--c-greIcoInvSec)"
                        },
                        border: {
                            primary: "var(--c-greBorPri)",
                            secondary: "var(--c-greBorSec)",
                            inversePrimary: "var(--c-greBorInvPri)",
                            accentPrimary: "var(--c-greBorAccPri)",
                            strong: "var(--c-greBorStr)",
                            primaryTranslucent: "var(--ca-greBorPriTra)",
                            secondaryTranslucent: "var(--ca-greBorSecTra)",
                            strongTranslucent: "var(--ca-greBorStrTra)"
                        },
                        background: {
                            primary: "var(--c-greBacPri)",
                            secondary: "var(--c-greBacSec)",
                            tertiary: "var(--c-greBacTer)",
                            elevated: "var(--c-greBacEle)",
                            accentPrimary: "var(--c-greBacAccPri)",
                            accentSecondary: "var(--c-greBacAccSec)",
                            primaryTranslucent: "var(--ca-greBacPriTra)",
                            secondaryTranslucent: "var(--ca-greBacSecTra)",
                            tertiaryTranslucent: "var(--ca-greBacTerTra)"
                        }
                    },
                    orange: {
                        text: {
                            primary: "var(--c-oraTexPri)",
                            secondary: "var(--c-oraTexSec)",
                            tertiary: "var(--c-oraTexTer)",
                            disabled: "var(--c-oraTexDis)",
                            accentPrimary: "var(--c-oraTexAccPri)",
                            inversePrimary: "var(--c-oraTexInvPri)",
                            inverseSecondary: "var(--c-oraTexInvSec)",
                            disabledTranslucent: "var(--ca-oraTexDisTra)"
                        },
                        icon: {
                            primary: "var(--c-oraIcoPri)",
                            secondary: "var(--c-oraIcoSec)",
                            tertiary: "var(--c-oraIcoTer)",
                            disabled: "var(--c-oraIcoDis)",
                            accentPrimary: "var(--c-oraIcoAccPri)",
                            inversePrimary: "var(--c-oraIcoInvPri)",
                            inverseSecondary: "var(--c-oraIcoInvSec)"
                        },
                        border: {
                            primary: "var(--c-oraBorPri)",
                            secondary: "var(--c-oraBorSec)",
                            inversePrimary: "var(--c-oraBorInvPri)",
                            accentPrimary: "var(--c-oraBorAccPri)",
                            strong: "var(--c-oraBorStr)",
                            primaryTranslucent: "var(--ca-oraBorPriTra)",
                            secondaryTranslucent: "var(--ca-oraBorSecTra)",
                            strongTranslucent: "var(--ca-oraBorStrTra)"
                        },
                        background: {
                            primary: "var(--c-oraBacPri)",
                            secondary: "var(--c-oraBacSec)",
                            tertiary: "var(--c-oraBacTer)",
                            elevated: "var(--c-oraBacEle)",
                            accentPrimary: "var(--c-oraBacAccPri)",
                            accentSecondary: "var(--c-oraBacAccSec)",
                            primaryTranslucent: "var(--ca-oraBacPriTra)",
                            secondaryTranslucent: "var(--ca-oraBacSecTra)",
                            tertiaryTranslucent: "var(--ca-oraBacTerTra)"
                        }
                    },
                    pink: {
                        text: {
                            primary: "var(--c-pinTexPri)",
                            secondary: "var(--c-pinTexSec)",
                            tertiary: "var(--c-pinTexTer)",
                            disabled: "var(--c-pinTexDis)",
                            accentPrimary: "var(--c-pinTexAccPri)",
                            inversePrimary: "var(--c-pinTexInvPri)",
                            inverseSecondary: "var(--c-pinTexInvSec)",
                            disabledTranslucent: "var(--ca-pinTexDisTra)"
                        },
                        icon: {
                            primary: "var(--c-pinIcoPri)",
                            secondary: "var(--c-pinIcoSec)",
                            tertiary: "var(--c-pinIcoTer)",
                            disabled: "var(--c-pinIcoDis)",
                            accentPrimary: "var(--c-pinIcoAccPri)",
                            inversePrimary: "var(--c-pinIcoInvPri)",
                            inverseSecondary: "var(--c-pinIcoInvSec)"
                        },
                        border: {
                            primary: "var(--c-pinBorPri)",
                            secondary: "var(--c-pinBorSec)",
                            inversePrimary: "var(--c-pinBorInvPri)",
                            accentPrimary: "var(--c-pinBorAccPri)",
                            strong: "var(--c-pinBorStr)",
                            primaryTranslucent: "var(--ca-pinBorPriTra)",
                            secondaryTranslucent: "var(--ca-pinBorSecTra)",
                            strongTranslucent: "var(--ca-pinBorStrTra)"
                        },
                        background: {
                            primary: "var(--c-pinBacPri)",
                            secondary: "var(--c-pinBacSec)",
                            tertiary: "var(--c-pinBacTer)",
                            elevated: "var(--c-pinBacEle)",
                            accentPrimary: "var(--c-pinBacAccPri)",
                            accentSecondary: "var(--c-pinBacAccSec)",
                            primaryTranslucent: "var(--ca-pinBacPriTra)",
                            secondaryTranslucent: "var(--ca-pinBacSecTra)",
                            tertiaryTranslucent: "var(--ca-pinBacTerTra)"
                        }
                    },
                    purple: {
                        text: {
                            primary: "var(--c-purTexPri)",
                            secondary: "var(--c-purTexSec)",
                            tertiary: "var(--c-purTexTer)",
                            disabled: "var(--c-purTexDis)",
                            accentPrimary: "var(--c-purTexAccPri)",
                            inversePrimary: "var(--c-purTexInvPri)",
                            inverseSecondary: "var(--c-purTexInvSec)",
                            disabledTranslucent: "var(--ca-purTexDisTra)"
                        },
                        icon: {
                            primary: "var(--c-purIcoPri)",
                            secondary: "var(--c-purIcoSec)",
                            tertiary: "var(--c-purIcoTer)",
                            disabled: "var(--c-purIcoDis)",
                            accentPrimary: "var(--c-purIcoAccPri)",
                            inversePrimary: "var(--c-purIcoInvPri)",
                            inverseSecondary: "var(--c-purIcoInvSec)"
                        },
                        border: {
                            primary: "var(--c-purBorPri)",
                            secondary: "var(--c-purBorSec)",
                            inversePrimary: "var(--c-purBorInvPri)",
                            accentPrimary: "var(--c-purBorAccPri)",
                            strong: "var(--c-purBorStr)",
                            primaryTranslucent: "var(--ca-purBorPriTra)",
                            secondaryTranslucent: "var(--ca-purBorSecTra)",
                            strongTranslucent: "var(--ca-purBorStrTra)"
                        },
                        background: {
                            primary: "var(--c-purBacPri)",
                            secondary: "var(--c-purBacSec)",
                            tertiary: "var(--c-purBacTer)",
                            elevated: "var(--c-purBacEle)",
                            accentPrimary: "var(--c-purBacAccPri)",
                            accentSecondary: "var(--c-purBacAccSec)",
                            primaryTranslucent: "var(--ca-purBacPriTra)",
                            secondaryTranslucent: "var(--ca-purBacSecTra)",
                            tertiaryTranslucent: "var(--ca-purBacTerTra)"
                        }
                    },
                    red: {
                        text: {
                            primary: "var(--c-redTexPri)",
                            secondary: "var(--c-redTexSec)",
                            tertiary: "var(--c-redTexTer)",
                            disabled: "var(--c-redTexDis)",
                            accentPrimary: "var(--c-redTexAccPri)",
                            inversePrimary: "var(--c-redTexInvPri)",
                            inverseSecondary: "var(--c-redTexInvSec)",
                            disabledTranslucent: "var(--ca-redTexDisTra)"
                        },
                        icon: {
                            primary: "var(--c-redIcoPri)",
                            secondary: "var(--c-redIcoSec)",
                            tertiary: "var(--c-redIcoTer)",
                            disabled: "var(--c-redIcoDis)",
                            accentPrimary: "var(--c-redIcoAccPri)",
                            inversePrimary: "var(--c-redIcoInvPri)",
                            inverseSecondary: "var(--c-redIcoInvSec)"
                        },
                        border: {
                            primary: "var(--c-redBorPri)",
                            secondary: "var(--c-redBorSec)",
                            inversePrimary: "var(--c-redBorInvPri)",
                            accentPrimary: "var(--c-redBorAccPri)",
                            strong: "var(--c-redBorStr)",
                            primaryTranslucent: "var(--ca-redBorPriTra)",
                            secondaryTranslucent: "var(--ca-redBorSecTra)",
                            strongTranslucent: "var(--ca-redBorStrTra)"
                        },
                        background: {
                            primary: "var(--c-redBacPri)",
                            secondary: "var(--c-redBacSec)",
                            tertiary: "var(--c-redBacTer)",
                            elevated: "var(--c-redBacEle)",
                            accentPrimary: "var(--c-redBacAccPri)",
                            accentSecondary: "var(--c-redBacAccSec)",
                            primaryTranslucent: "var(--ca-redBacPriTra)",
                            secondaryTranslucent: "var(--ca-redBacSecTra)",
                            tertiaryTranslucent: "var(--ca-redBacTerTra)"
                        }
                    },
                    teal: {
                        text: {
                            primary: "var(--c-teaTexPri)",
                            secondary: "var(--c-teaTexSec)",
                            tertiary: "var(--c-teaTexTer)",
                            disabled: "var(--c-teaTexDis)",
                            accentPrimary: "var(--c-teaTexAccPri)",
                            inversePrimary: "var(--c-teaTexInvPri)",
                            inverseSecondary: "var(--c-teaTexInvSec)",
                            disabledTranslucent: "var(--ca-teaTexDisTra)"
                        },
                        icon: {
                            primary: "var(--c-teaIcoPri)",
                            secondary: "var(--c-teaIcoSec)",
                            tertiary: "var(--c-teaIcoTer)",
                            disabled: "var(--c-teaIcoDis)",
                            accentPrimary: "var(--c-teaIcoAccPri)",
                            inversePrimary: "var(--c-teaIcoInvPri)",
                            inverseSecondary: "var(--c-teaIcoInvSec)"
                        },
                        border: {
                            primary: "var(--c-teaBorPri)",
                            secondary: "var(--c-teaBorSec)",
                            inversePrimary: "var(--c-teaBorInvPri)",
                            accentPrimary: "var(--c-teaBorAccPri)",
                            strong: "var(--c-teaBorStr)",
                            primaryTranslucent: "var(--ca-teaBorPriTra)",
                            secondaryTranslucent: "var(--ca-teaBorSecTra)",
                            strongTranslucent: "var(--ca-teaBorStrTra)"
                        },
                        background: {
                            primary: "var(--c-teaBacPri)",
                            secondary: "var(--c-teaBacSec)",
                            tertiary: "var(--c-teaBacTer)",
                            elevated: "var(--c-teaBacEle)",
                            accentPrimary: "var(--c-teaBacAccPri)",
                            accentSecondary: "var(--c-teaBacAccSec)",
                            primaryTranslucent: "var(--ca-teaBacPriTra)",
                            secondaryTranslucent: "var(--ca-teaBacSecTra)",
                            tertiaryTranslucent: "var(--ca-teaBacTerTra)"
                        }
                    },
                    yellow: {
                        text: {
                            primary: "var(--c-yelTexPri)",
                            secondary: "var(--c-yelTexSec)",
                            tertiary: "var(--c-yelTexTer)",
                            disabled: "var(--c-yelTexDis)",
                            accentPrimary: "var(--c-yelTexAccPri)",
                            inversePrimary: "var(--c-yelTexInvPri)",
                            inverseSecondary: "var(--c-yelTexInvSec)",
                            disabledTranslucent: "var(--ca-yelTexDisTra)"
                        },
                        icon: {
                            primary: "var(--c-yelIcoPri)",
                            secondary: "var(--c-yelIcoSec)",
                            tertiary: "var(--c-yelIcoTer)",
                            disabled: "var(--c-yelIcoDis)",
                            accentPrimary: "var(--c-yelIcoAccPri)",
                            inversePrimary: "var(--c-yelIcoInvPri)",
                            inverseSecondary: "var(--c-yelIcoInvSec)"
                        },
                        border: {
                            primary: "var(--c-yelBorPri)",
                            secondary: "var(--c-yelBorSec)",
                            inversePrimary: "var(--c-yelBorInvPri)",
                            accentPrimary: "var(--c-yelBorAccPri)",
                            strong: "var(--c-yelBorStr)",
                            primaryTranslucent: "var(--ca-yelBorPriTra)",
                            secondaryTranslucent: "var(--ca-yelBorSecTra)",
                            strongTranslucent: "var(--ca-yelBorStrTra)"
                        },
                        background: {
                            primary: "var(--c-yelBacPri)",
                            secondary: "var(--c-yelBacSec)",
                            tertiary: "var(--c-yelBacTer)",
                            elevated: "var(--c-yelBacEle)",
                            accentPrimary: "var(--c-yelBacAccPri)",
                            accentSecondary: "var(--c-yelBacAccSec)",
                            primaryTranslucent: "var(--ca-yelBacPriTra)",
                            secondaryTranslucent: "var(--ca-yelBacSecTra)",
                            tertiaryTranslucent: "var(--ca-yelBacTerTra)"
                        }
                    },
                    text: {
                        primary: "var(--c-texPri)",
                        secondary: "var(--c-texSec)",
                        tertiary: "var(--c-texTer)",
                        disabled: "var(--c-texDis)",
                        accentPrimary: "var(--c-texAccPri)",
                        inversePrimary: "var(--c-texInvPri)",
                        inverseSecondary: "var(--c-texInvSec)",
                        disabledTranslucent: "var(--ca-texDisTra)"
                    },
                    icon: {
                        primary: "var(--c-icoPri)",
                        secondary: "var(--c-icoSec)",
                        tertiary: "var(--c-icoTer)",
                        disabled: "var(--c-icoDis)",
                        accentPrimary: "var(--c-icoAccPri)",
                        inversePrimary: "var(--c-icoInvPri)",
                        inverseSecondary: "var(--c-icoInvSec)"
                    },
                    border: {
                        primary: "var(--c-borPri)",
                        secondary: "var(--c-borSec)",
                        inversePrimary: "var(--c-borInvPri)",
                        accentPrimary: "var(--c-borAccPri)",
                        strong: "var(--c-borStr)",
                        primaryTranslucent: "var(--ca-borPriTra)",
                        secondaryTranslucent: "var(--ca-borSecTra)",
                        strongTranslucent: "var(--ca-borStrTra)"
                    },
                    background: {
                        primary: "var(--c-bacPri)",
                        secondary: "var(--c-bacSec)",
                        tertiary: "var(--c-bacTer)",
                        elevated: "var(--c-bacEle)",
                        accentPrimary: "var(--c-bacAccPri)",
                        accentSecondary: "var(--c-bacAccSec)",
                        primaryTranslucent: "var(--ca-bacPriTra)",
                        secondaryTranslucent: "var(--ca-bacSecTra)",
                        tertiaryTranslucent: "var(--ca-bacTerTra)"
                    },
                    primaryBlack: "var(--c-priBla)",
                    pageTitlePlaceholderTextColor: "var(--cl-pagTitPlaTexCol)",
                    tableFrozenFilterDividerColor: "var(--c-tabFroFilDivCol)",
                    tableFrozenSelectedDividerColor: "var(--c-tabFroSelDivCol)",
                    linkDecorationColor: "var(--cl-linDecCol)",
                    opacityLinkDecorationColor: "var(--ca-opaLinDecCol)",
                    regularEmojiColor: "var(--c-regEmoCol)",
                    sidebarSecondaryColor: "var(--c-sidSecCol)",
                    sidebarItemSelectedBackground: "var(--ca-sidIteSelBac)",
                    sidebarSecondaryBackground: "var(--ca-sidSecBac)",
                    contentBackgroundTransparent: "var(--ca-conBacTra)",
                    cardContentBackgroundTransparent: "var(--ca-carConBacTra)",
                    overlaySmokescreen: "var(--ca-oveSmo)",
                    calendarItemBackground: "var(--c-calIteBac)",
                    calendarItemHoveredBackground: "var(--cl-calIteHovBac)",
                    popoverBackground: "var(--c-popBac)",
                    popoverWaxPaperBackground: "var(--ca-popWaxPapBac)",
                    boardItemDefaultBackground: "var(--cd-boaIteDefBac)",
                    collectionGalleryPreviewCardBackground: "var(--cd-colGalPreCarBac)",
                    collectionGalleryPreviewCardCover: "var(--ca-colGalPreCarCov)",
                    modalUnderlayBackground: "var(--ca-modUndBac)",
                    beigeBannerBackground: "var(--c-beiBanBac)",
                    darkBannerBackground: "var(--c-darBanBac)",
                    keyboardDoneBarBackground: "var(--c-keyDonBarBac)",
                    keyboardActionBarBackground: "var(--c-keyActBarBac)",
                    UIUserAvatarInnerOutline: "var(--ca-UIUseAvaInnOut)",
                    UIUserAvatarIdleOutline: "var(--c-UIUseAvaIdlOut)",
                    suspendedUIUserAvatarBackground: "var(--cl-susUIUseAvaBac)",
                    codeBlockBackground: "var(--cd-codBloBac)",
                    codeStickyBlockBackground: "var(--c-codStiBloBac)",
                    tableHeaderRowColumnBackground: "var(--cd-tabHeaRowColBac)",
                    embedPlaceholderBackground: "var(--cd-embPlaBac)",
                    tokenInputMenuItemBackground: "var(--ca-tokInpMenIteBac)",
                    hoveredDiscussionBackground: "var(--cl-hovDisBac)",
                    hoveredMarginDiscussionBackground: "var(--c-hovMarDisBac)",
                    selectedMarginDiscussionBackground: "var(--c-selMarDisBac)",
                    buttonHoveredBackground: "var(--ca-butHovBac)",
                    tableRowHoveredBackground: "var(--ca-tabRowHovBac)",
                    outlineButtonHoveredBackground: "var(--ca-outButHovBac)",
                    outlineButtonPressedBackground: "var(--cl-outButPreBac)",
                    buttonPressedBackground: "var(--ca-butPreBac)",
                    buttonPressedBackgroundLight: "var(--ca-butPreBacLig)",
                    cardHoveredBackground: "var(--cl-carHovBac)",
                    cardPressedBackground: "var(--cl-carPreBac)",
                    blueButtonHoveredBackground: "var(--c-bluButHovBac)",
                    blueButtonPressedBackground: "var(--c-bluButPreBac)",
                    white: "var(--c-whi)",
                    whiteButtonBackground: "var(--c-whiButBac)",
                    assistantCornerButtonBackground: "var(--c-assCorButBac)",
                    assistantCornerButtonBackgroundHovered: "var(--c-assCorButBacHov)",
                    assistantCornerButtonBackgroundPressed: "var(--c-assCorButBacPre)",
                    lightGrayButtonHoveredBackground: "var(--ca-ligGraButHovBac)",
                    lightGrayButtonPressedBackground: "var(--ca-ligGraButPreBac)",
                    buttonGroupBackground: "var(--c-butGroBac)",
                    whiteButtonHoveredBackground: "var(--c-whiButHovBac)",
                    whiteButtonPressedBackground: "var(--c-whiButPreBac)",
                    timelineBackground: "var(--c-timBac)",
                    peekTimelineBackground: "var(--c-peeTimBac)",
                    timelineDarkerBackground: "var(--cd-timDarBac)",
                    topbarFavorite: "var(--c-topFav)",
                    home: {
                        emptyStatePreview: {
                            joinButtonBackground: "var(--cl-homEmpStaPreJoiButBac)",
                            calendarIndicator: "var(--cl-homEmpStaPreCalInd)"
                        },
                        scrollButtonBackground: {
                            base: "var(--c-homScrButBacBas)",
                            pressed: "var(--cl-homScrButBacPre)"
                        },
                        tile: {
                            background: "var(--ca-homTilBac)"
                        },
                        cards: {
                            coverPhoto: {
                                base: "var(--ca-homCarCovPhoBas)"
                            },
                            background: {
                                base: "var(--cd-homCarBacBas)",
                                hovered: "var(--cd-homCarBacHov)",
                                pressed: "var(--ca-homCarBacPre)"
                            },
                            templateCardBackground: {
                                base: "var(--cd-homCarTemCarBacBas)",
                                hovered: "var(--cd-homCarTemCarBacHov)",
                                pressed: "var(--ca-homCarTemCarBacPre)"
                            }
                        }
                    },
                    personalHomeBackgroundPhone: "var(--cl-perHomBacPho)",
                    sitesPagePreviewWindowsChromeBar: "var(--c-sitPagPreWinChrBar)",
                    seoPreviewTitle: "var(--c-seoPreTit)",
                    sitesBuilderBackground: "var(--c-sitBuiBac)",
                    sitesInstructionStep: "var(--cl-sitInsSte)",
                    selectLightGray: {
                        30: "var(--cl-selLigGra30)",
                        50: "var(--cl-selLigGra50)",
                        100: "var(--cl-selLigGra100)",
                        200: "var(--cl-selLigGra200)",
                        300: "var(--cl-selLigGra300)",
                        400: "var(--cl-selLigGra400)",
                        500: "var(--cl-selLigGra500)",
                        700: "var(--cl-selLigGra700)"
                    },
                    equationTemporaryPlaceholderBackground: "var(--ca-equTemPlaBac)",
                    findHighlightMatch: {
                        selectedBackground: "var(--ca-finHigMatSelBac)",
                        unselectedBackground: "var(--cl-finHigMatUnsBac)"
                    },
                    marketplaceStarDefault: "var(--ca-marStaDef)",
                    marketplaceStarSelected: "var(--c-marStaSel)",
                    pill: {
                        background: {
                            yellow: "var(--ca-pilBacYel)",
                            blue: "var(--ca-pilBacBlu)",
                            red: "var(--ca-pilBacRed)",
                            white: "var(--cl-pilBacWhi)"
                        },
                        border: {
                            yellow: "var(--cd-pilBorYel)",
                            blue: "var(--ca-pilBorBlu)",
                            red: "var(--c-pilBorRed)",
                            white: "var(--ca-pilBorWhi)"
                        },
                        icon: {
                            yellow: "var(--c-pilIcoYel)",
                            blue: "var(--c-pilIcoBlu)",
                            red: "var(--c-pilIcoRed)",
                            white: "var(--cl-pilIcoWhi)"
                        },
                        outline: {
                            yellow: "var(--ca-pilOutYel)",
                            blue: "var(--ca-pilOutBlu)",
                            red: "var(--ca-pilOutRed)",
                            white: "var(--cl-pilOutWhi)"
                        },
                        hover: {
                            background: {
                                yellow: "var(--c-pilHovBacYel)",
                                blue: "var(--ca-pilHovBacBlu)",
                                red: "var(--c-pilHovBacRed)",
                                white: "var(--ca-pilHovBacWhi)"
                            },
                            border: {
                                yellow: "var(--cl-pilHovBorYel)",
                                blue: "var(--ca-pilHovBorBlu)",
                                red: "var(--ca-pilHovBorRed)",
                                white: "var(--ca-pilHovBorWhi)"
                            },
                            text: {
                                yellow: "var(--cd-pilHovTexYel)",
                                blue: "var(--c-pilHovTexBlu)",
                                red: "var(--c-pilHovTexRed)",
                                white: "var(--c-pilHovTexWhi)"
                            }
                        },
                        pressed: {
                            background: {
                                yellow: "var(--ca-pilPreBacYel)",
                                blue: "var(--ca-pilPreBacBlu)",
                                red: "var(--ca-pilPreBacRed)",
                                white: "var(--ca-pilPreBacWhi)"
                            },
                            border: {
                                yellow: "var(--cl-pilPreBorYel)",
                                blue: "var(--ca-pilPreBorBlu)",
                                red: "var(--cl-pilPreBorRed)",
                                white: "var(--ca-pilPreBorWhi)"
                            }
                        },
                        selected: {
                            background: {
                                yellow: "var(--cd-pilSelBacYel)",
                                blue: "var(--cl-pilSelBacBlu)",
                                red: "var(--c-pilSelBacRed)",
                                white: "var(--cl-pilSelBacWhi)"
                            },
                            border: {
                                yellow: "var(--ca-pilSelBorYel)",
                                blue: "var(--cl-pilSelBorBlu)",
                                red: "var(--ca-pilSelBorRed)",
                                white: "var(--ca-pilSelBorWhi)"
                            },
                            hover: {
                                background: {
                                    yellow: "var(--cl-pilSelHovBacYel)",
                                    blue: "var(--ca-pilSelHovBacBlu)",
                                    red: "var(--ca-pilSelHovBacRed)",
                                    white: "var(--ca-pilSelHovBacWhi)"
                                },
                                border: {
                                    yellow: "var(--ca-pilSelHovBorYel)",
                                    blue: "var(--cl-pilSelHovBorBlu)",
                                    red: "var(--ca-pilSelHovBorRed)",
                                    white: "var(--ca-pilSelHovBorWhi)"
                                }
                            },
                            pressed: {
                                background: {
                                    yellow: "var(--c-pilSelPreBacYel)",
                                    blue: "var(--ca-pilSelPreBacBlu)",
                                    red: "var(--cl-pilSelPreBacRed)",
                                    white: "var(--ca-pilSelPreBacWhi)"
                                },
                                border: {
                                    yellow: "var(--ca-pilSelPreBorYel)",
                                    blue: "var(--cl-pilSelPreBorBlu)",
                                    red: "var(--ca-pilSelPreBorRed)",
                                    white: "var(--ca-pilSelPreBorWhi)"
                                }
                            }
                        }
                    },
                    marketplaceTopic: {
                        text: {
                            hover: {
                                red: "var(--c-marTopTexHovRed)",
                                yellow: "var(--c-marTopTexHovYel)",
                                blue: "var(--c-marTopTexHovBlu)",
                                white: "var(--cl-marTopTexHovWhi)"
                            },
                            pressed: {
                                red: "var(--c-marTopTexPreRed)",
                                yellow: "var(--c-marTopTexPreYel)",
                                blue: "var(--c-marTopTexPreBlu)",
                                white: "var(--c-marTopTexPreWhi)"
                            },
                            dropdownViewAll: {
                                red: "var(--c-marTopTexDroVieAllRed)",
                                yellow: "var(--c-marTopTexDroVieAllYel)",
                                blue: "var(--c-marTopTexDroVieAllBlu)",
                                white: "var(--c-marTopTexDroVieAllWhi)"
                            }
                        }
                    },
                    marketplaceEditorialIllustration: {
                        red: "var(--cl-marEdiIllRed)",
                        yellow: "var(--cl-marEdiIllYel)",
                        blue: "var(--cl-marEdiIllBlu)",
                        white: "var(--cl-marEdiIllWhi)"
                    },
                    marketplaceEditorial: {
                        icon: {
                            red: "var(--c-marEdiIcoRed)",
                            yellow: "var(--c-marEdiIcoYel)",
                            blue: "var(--c-marEdiIcoBlu)",
                            white: "var(--cl-marEdiIcoWhi)"
                        },
                        border: {
                            red: "var(--cd-marEdiBorRed)",
                            yellow: "var(--cd-marEdiBorYel)",
                            blue: "var(--cd-marEdiBorBlu)",
                            white: "var(--ca-marEdiBorWhi)",
                            hover: {
                                red: "var(--ca-marEdiBorHovRed)",
                                yellow: "var(--ca-marEdiBorHovYel)",
                                blue: "var(--cd-marEdiBorHovBlu)",
                                white: "var(--ca-marEdiBorHovWhi)"
                            },
                            pressed: {
                                red: "var(--ca-marEdiBorPreRed)",
                                yellow: "var(--ca-marEdiBorPreYel)",
                                blue: "var(--ca-marEdiBorPreBlu)",
                                white: "var(--ca-marEdiBorPreWhi)"
                            }
                        },
                        background: {
                            red: "var(--ca-marEdiBacRed)",
                            yellow: "var(--ca-marEdiBacYel)",
                            blue: "var(--ca-marEdiBacBlu)",
                            white: "var(--ca-marEdiBacWhi)",
                            hover: {
                                red: "var(--c-marEdiBacHovRed)",
                                yellow: "var(--c-marEdiBacHovYel)",
                                blue: "var(--cd-marEdiBacHovBlu)",
                                white: "var(--ca-marEdiBacHovWhi)"
                            },
                            pressed: {
                                red: "var(--cl-marEdiBacPreRed)",
                                yellow: "var(--cl-marEdiBacPreYel)",
                                blue: "var(--cd-marEdiBacPreBlu)",
                                white: "var(--ca-marEdiBacPreWhi)"
                            }
                        },
                        illustration: {
                            red: "var(--c-marEdiIllRed2)",
                            yellow: "var(--c-marEdiIllYel2)",
                            blue: "var(--c-marEdiIllBlu2)",
                            white: "var(--c-marEdiIllWhi2)"
                        }
                    },
                    creatorProfile: {
                        inReviewText: "var(--c-creProInRevTex)",
                        inReviewHoveredText: "var(--c-creProInRevHovTex)",
                        inReviewBackground: "var(--c-creProInRevBac)"
                    },
                    shadowColor: "var(--c-shaCol)",
                    bottomActionBarShadow: "var(--c-botActBarSha)",
                    buttonBoxShadow: "var(--c-butBoxSha)",
                    avatarBoxShadow: "var(--c-avaBoxSha)",
                    buttonBlueFocusRing: "var(--c-butBluFocRin)",
                    inputRedFocusRing: "var(--c-inpRedFocRin)",
                    inputBlueFocusRing: "var(--c-inpBluFocRin)",
                    secondarySidebarBorderBoxShadow: "var(--c-secSidBorBoxSha)",
                    topbarAndroidShadow: "var(--c-topAndSha)",
                    topbarAndroidShadowCollapsed: "var(--c-topAndShaCol)",
                    homeScrollButtonShadow: "var(--c-homScrButSha)",
                    homeShadow: {
                        card: {
                            base: "var(--c-homShaCarBas)",
                            hovered: "var(--c-homShaCarHov)"
                        },
                        templateCard: {
                            base: "var(--c-homShaTemCarBas)",
                            hovered: "var(--c-homShaTemCarHov)"
                        }
                    },
                    focusedShadow: "var(--c-focSha)",
                    shadowSMThickerOutline: "var(--c-shaSMThiOut)",
                    shadowMDPrimaryOutline: "var(--c-shaMDPriOut)",
                    shadowMDThickerOutline: "var(--c-shaMDThiOut)",
                    shadow: {
                        outline: {
                            md: "var(--c-shaOutMd)",
                            sm: "var(--c-shaOutSm)",
                            lg: "var(--c-shaOutLg)",
                            diffuse: "var(--c-shaOutDif)",
                            scrim: "var(--c-shaOutScr)"
                        },
                        base: {
                            lg: "var(--c-shaBasLg)",
                            md: "var(--c-shaBasMd)",
                            sm: "var(--c-shaBasSm)",
                            scrim: "var(--c-shaBasScr)",
                            diffuse: "var(--c-shaBasDif)"
                        }
                    },
                    aiChatButton: {
                        unselected: "var(--ca-aiChaButUns)",
                        unselectedHover: "var(--ca-aiChaButUnsHov)",
                        selected: "var(--cd-aiChaButSel)",
                        selectedHover: "var(--cd-aiChaButSelHov)",
                        pressed: "var(--cd-aiChaButPre)"
                    },
                    state: {
                        hover: "var(--ca-staHov)",
                        pressed: "var(--ca-staPre)"
                    },
                    glass: {
                        page: "var(--ca-glaPag)",
                        wash: "var(--ca-glaWas)"
                    },
                    popupOverlayBackground: "var(--ca-popOveBac)",
                    frozenColumnDividerShadowBackgroundFiltered: "var(--c-froColDivShaBacFil)",
                    frozenColumnDividerShadowBackground: "var(--c-froColDivShaBac)",
                    switcherButtonTeackBg: "var(--ca-swiButTeaBg)",
                    switcherToggleDesktopTrackBg: "var(--ca-swiTogDesTraBg)",
                    switcherToggleDesktopTrackBgVariant: "var(--ca-swiTogDesTraBgVar)",
                    embedBlockResizerInnerBg: "var(--ca-embBloResInnBg)",
                    calendarEventHoveredBackground: "var(--ca-calEveHovBac)"
                },
                p = {
                    light: .1,
                    dark: .2
                };

            function y(r) {
                return p[r]
            }
            let T = {
                    comment: (0, o.Vi)({
                        r: 255,
                        g: 203,
                        b: 0
                    }),
                    update: (0, o.Vi)({
                        r: 35,
                        g: 131,
                        b: 226
                    }),
                    remove: (0, o.Vi)({
                        r: 120,
                        g: 119,
                        b: 116
                    })
                },
                P = {
                    comment: {
                        light: .8,
                        dark: .8
                    },
                    update: {
                        light: .4,
                        dark: .6
                    },
                    remove: {
                        light: .4,
                        dark: .6
                    }
                },
                g = {
                    comment: {
                        background: .15,
                        underline: .4375
                    },
                    update: {
                        underline: .25,
                        background: .09
                    },
                    remove: {
                        underline: .25,
                        background: .09
                    }
                };
            e.HP(({
                annotationType: r,
                type: a,
                selected: c,
                hovered: e,
                overlapping: v,
                mode: i
            }) => {
                let n = T[r],
                    l = P[r][i],
                    t = g[r][a];
                return (0, o.HI)(n.alpha(Math.min(l * t * (1 + ((e || c ? "underline" === a ? 3 : 1 : 0) + (v ? 2 : 0))), 1.25 * l)))
            }, r => Object.values(r).join("_")), e.HP(r => (0, o.HI)(T.comment.alpha(.8 * P.comment[r])))
        }
    }
]);