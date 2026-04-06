"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [3079], {
        31256: (e, a, t) => {
            t.d(a, {
                J: () => o
            }), t(296540);
            var n = t(474848);
            let i = {
                marginTop: 12,
                marginBottom: 4
            };

            function o() {
                let e = (0, t(533992).v3)();
                return (0, n.jsx)(t(321412).b, {
                    id: "languageAndRegionSettingsLanguage",
                    title: (0, n.jsx)(t(109939).sA, {
                        id: "languageRegionSettings.language.label",
                        defaultMessage: "Language"
                    }),
                    byline: (0, n.jsx)(t(109939).sA, {
                        id: "languageSettings.languageSwitcher.subtitle",
                        defaultMessage: "Choose the language you want to use Notion in"
                    }),
                    item: (0, n.jsx)(t(548436).A, {
                        size: "lg",
                        style: i,
                        onClick: () => {
                            (0, t(104310).u)({
                                event: {
                                    eventName: "change_language_button_clicked",
                                    eventProperties: {}
                                }
                            }), e.mobileNative && e.mobileNative.openAppLanguageSettings()
                        },
                        iconLeading: t(695142).arrowDiagonalUpRightFillIcon,
                        children: (0, n.jsx)(t(109939).sA, {
                            id: "languageSettings.languageSection.androidChangeLanguageButton",
                            defaultMessage: "Change Language"
                        })
                    })
                })
            }
        },
        100410: (e, a, t) => {
            t.r(a), t.d(a, {
                iPhoneIcon: () => o,
                iconDefinition: () => i
            }), t(296540);
            var n = t(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "5.12 2.37 9.75 15.25",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M7.375 15c0-.345.28-.625.625-.625h4a.625.625 0 1 1 0 1.25H8A.625.625 0 0 1 7.375 15M9 4.375a.625.625 0 1 0 0 1.25h2a.625.625 0 1 0 0-1.25z"
                        }), (0, n.jsx)("path", {
                            d: "M5.125 4.5c0-1.174.951-2.125 2.125-2.125h5.5c1.174 0 2.125.951 2.125 2.125v11a2.125 2.125 0 0 1-2.125 2.125h-5.5A2.125 2.125 0 0 1 5.125 15.5zm2.125-.875a.875.875 0 0 0-.875.875v11c0 .483.392.875.875.875h5.5a.875.875 0 0 0 .875-.875v-11a.875.875 0 0 0-.875-.875z"
                        })]
                    })
                },
                o = (0, t(104509).wt)("iPhone", i, "default")
        },
        166863: (e, a, t) => {
            t.d(a, {
                P: () => i
            });
            let n = (0, t(109939).YK)({
                    languageTitle: {
                        id: "languageRegionSettings.language.label",
                        defaultMessage: "Language"
                    },
                    languageDescription: {
                        id: "languageSettings.languageSwitcher.subtitle",
                        defaultMessage: "Choose the language you want to use Notion in"
                    },
                    numberFormatTitle: {
                        id: "languageRegionSettings.numberFormat.label",
                        defaultMessage: "Number format"
                    },
                    numberFormatDescription: {
                        id: "languageRegionSettings.numberFormat.description",
                        defaultMessage: "Choose how numbers and currencies are formatted. Default uses your language setting."
                    },
                    spellcheckerTitle: {
                        id: "languageRegionSettings.spellchecker.label",
                        defaultMessage: "Spellchecker languages"
                    },
                    spellcheckerDescription: {
                        id: "languageSettings.spellcheckerSwitcher.subtitle",
                        defaultMessage: "Change the languages used by the spellchecker."
                    },
                    textDirectionTitle: {
                        id: "textDirectionControlsSetting.title",
                        defaultMessage: "Always show text direction controls"
                    },
                    textDirectionDescription: {
                        id: "textDirectionControlsSetting.caption",
                        defaultMessage: "Show the option to change text direction (left to right or right to left) in the editor, regardless of what language you’re using"
                    },
                    startWeekOnMondayTitle: {
                        id: "calendarSettings.startWeekOnMonday.label",
                        defaultMessage: "Start week on Monday"
                    },
                    startWeekOnMondayDescription: {
                        id: "calendarSettings.startWeekOnMonday.message",
                        defaultMessage: "This will affect the way your calendars appear in Notion"
                    },
                    dateFormatTitle: {
                        id: "dateMentionFormatSettings.title",
                        defaultMessage: "Date format"
                    },
                    dateFormatDescription: {
                        id: "dateMentionFormatSettings.caption",
                        defaultMessage: "Set the default format for new @date mentions"
                    },
                    autoTimezoneTitle: {
                        id: "dateAndTimeSettings.autoTimeZone.title",
                        defaultMessage: "Set time zone automatically using your location"
                    },
                    autoTimezoneDescription: {
                        id: "dateAndTimeSettings.autoTimeZone.caption",
                        defaultMessage: "Reminders, notifications, and emails will be delivered to you based on your time zone"
                    },
                    timezoneTitle: {
                        id: "dateAndTimeSettings.timeZone.title",
                        defaultMessage: "Time zone"
                    },
                    timezoneDescription: {
                        id: "dateAndTimeSettings.timeZone.caption",
                        defaultMessage: "Choose your time zone"
                    }
                }),
                i = {
                    language: {
                        id: "languageAndRegionSettingsLanguage",
                        title: n.languageTitle,
                        description: n.languageDescription
                    },
                    numberFormat: {
                        id: "languageAndRegionSettingsNumberFormat",
                        title: n.numberFormatTitle,
                        description: n.numberFormatDescription
                    },
                    spellchecker: {
                        id: "languageAndRegionSettingsSpellchecker",
                        title: n.spellcheckerTitle,
                        description: n.spellcheckerDescription
                    },
                    textDirection: {
                        id: "languageAndRegionSettingsTextDirection",
                        title: n.textDirectionTitle,
                        description: n.textDirectionDescription
                    },
                    startWeekOnMonday: {
                        id: "languageAndRegionSettingsStartWeekOnMonday",
                        title: n.startWeekOnMondayTitle,
                        description: n.startWeekOnMondayDescription
                    },
                    dateFormat: {
                        id: "languageAndRegionSettingsDateFormat",
                        title: n.dateFormatTitle,
                        description: n.dateFormatDescription
                    },
                    autoTimezone: {
                        id: "languageAndRegionSettingsAutoTimezone",
                        title: n.autoTimezoneTitle,
                        description: n.autoTimezoneDescription
                    },
                    timezone: {
                        id: "languageAndRegionSettingsTimezone",
                        title: n.timezoneTitle,
                        description: n.timezoneDescription
                    }
                }
        },
        321412: (e, a, t) => {
            t.d(a, {
                b: () => l
            });
            var n = t(296540),
                i = t(474848);
            let o = {
                highlight: {
                    height: "calc(100% + 12px)",
                    width: "calc(100% + 24px)",
                    insetBlockStart: "-6px",
                    insetInlineStart: "-12px",
                    position: "absolute",
                    backgroundColor: t(632079).Tj.yellow.background.secondaryTranslucent,
                    borderRadius: 6,
                    pointerEvents: "none"
                }
            };

            function s({
                itemId: e,
                itemRef: a
            }) {
                let r = (0, t(533992).v3)(),
                    l = (0, n.useContext)(t(700587).U),
                    g = (0, t(682985).K8)(() => t(488301).J.state.highlightedSetting === e, [e]);
                return (0, n.useEffect)(() => {
                    g && a.current && (0, t(341471).h)({
                        element: a.current,
                        environment: r,
                        scrollerContext: l,
                        vertical: {
                            reveal: "closest"
                        },
                        horizontal: void 0,
                        animate: !0
                    })
                }, [g, r, a, l]), (0, i.jsx)(t(654979).A, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    visible: !!g,
                    config: {
                        duration: 250,
                        timingFunction: "ease-in-out"
                    },
                    style: o.highlight
                })
            }
            let r = {
                flex: 3,
                minWidth: 200
            };

            function l({
                id: e,
                title: a,
                titleId: o,
                byline: g,
                bylineId: d,
                item: u,
                badge: c,
                layout: f = "inline"
            }) {
                let p = (0, n.useRef)(null),
                    m = (0, t(960253).I)(() => ({
                        settingContainer: {
                            display: "flex",
                            width: "100%",
                            flexWrap: "wrap",
                            position: "relative",
                            gap: 12,
                            ..."stacked" === f ? {
                                flexDirection: "column"
                            } : {
                                justifyContent: "space-between",
                                alignItems: "center"
                            }
                        },
                        settingItem: {
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            ..."stacked" === f ? {
                                width: "100%"
                            } : {
                                alignItems: "flex-end"
                            }
                        }
                    }), [f]);
                return (0, i.jsxs)("div", {
                    ref: p,
                    style: m.settingContainer,
                    children: [(0, i.jsx)("div", {
                        style: r,
                        children: (0, i.jsx)(t(741489).j, {
                            title: a,
                            titleId: o,
                            byline: g,
                            bylineId: d,
                            badge: c
                        })
                    }), (0, i.jsx)("div", {
                        style: m.settingItem,
                        children: u
                    }), (0, i.jsx)(s, {
                        itemId: e,
                        itemRef: p
                    })]
                })
            }
        },
        352668: (e, a, t) => {
            t.d(a, {
                default: () => o
            }), t(296540);
            var n = t(474848);
            let i = {
                style0: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    userSelect: "none",
                    WebkitUserSelect: "none",
                    height: "100%"
                },
                style1: {
                    marginTop: 24,
                    marginBottom: 64
                },
                style2: {
                    fontSize: 28,
                    fontWeight: t(699422).Wy.semibold,
                    marginTop: t(986939).A.isMobile ? 30 : 90,
                    textAlign: "center",
                    lineHeight: 1.1
                },
                style3: {
                    fontSize: 14,
                    color: t(632079).Tj.text.secondary,
                    width: 350,
                    marginTop: 12,
                    marginBottom: 20,
                    textAlign: "center",
                    lineHeight: 1.3
                }
            };

            function o({
                title: e,
                description: a,
                isSignup: g,
                redirectURL: d,
                disableLoginLink: u,
                titleAriaId: c,
                descriptionAriaId: f,
                trustedDomain: p
            }) {
                let m = (0, t(682985).K8)(() => {
                    if (t(83879).b.isMfa()) return t(83879).b.state.settings
                }, []);
                return (0, n.jsxs)("div", {
                    style: i.style0,
                    children: [m ? void 0 : (0, n.jsx)(s, {
                        title: e,
                        titleAriaId: c
                    }), !m && a ? (0, n.jsx)(r, {
                        description: a,
                        descriptionAriaId: f
                    }) : void 0, (0, n.jsx)(t(369064).N, {
                        debugName: "LoginModalContent",
                        capture: !0,
                        onBackspace: t(763230).D_,
                        onLeft: t(763230).D_,
                        onRight: t(763230).D_,
                        onSelectAll: t(763230).D_,
                        onRedo: t(763230).D_,
                        onUndo: t(763230).D_,
                        onCut: t(763230).D_,
                        onCopy: t(763230).D_,
                        onPaste: t(763230).D_,
                        onKeypress: t(763230).D_,
                        onDelete: t(763230).D_,
                        onTab: t(763230).D_,
                        children: m && m.length > 0 ? (0, n.jsx)(t(660983).A, {}) : (0, n.jsx)(t(891418).Ay, {
                            style: { ...i.style1,
                                ...l()
                            },
                            isSignup: g,
                            emailLabelType: "email",
                            disableDisclaimer: !0,
                            redirectURL: p ? window.location.href : d,
                            disableLoginLink: u,
                            from: "loginModal"
                        })
                    })]
                })
            }

            function s({
                title: e,
                titleAriaId: a
            }) {
                return (0, n.jsx)("div", {
                    id: a,
                    style: { ...i.style2,
                        ...l()
                    },
                    children: e
                })
            }

            function r({
                description: e,
                descriptionAriaId: a
            }) {
                return (0, n.jsx)("div", {
                    id: a,
                    style: { ...i.style3,
                        ...l()
                    },
                    children: e
                })
            }

            function l() {
                return t(986939).A.isMobile ? {
                    maxWidth: 343
                } : {}
            }
        },
        405072: (e, a, t) => {
            t.d(a, {
                J: () => n
            });

            function n(e) {
                var a;
                let {
                    isMobileNative: n,
                    isAndroid: i
                } = e, o = t(218744).default.checkGate({
                    gateName: "android_show_language_settings"
                }), s = null == (a = (0, t(663250).getMobileNativeDeviceInfo)()) ? void 0 : a.mobileNativeAndroidApiLevel;
                return o && n && i && "number" == typeof s && s >= 33
            }
        },
        574657: (e, a, t) => {
            t.r(a), t.d(a, {
                checkmarkCircleFillSmallIcon: () => i,
                iconDefinition: () => n
            }), t(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.94 1.95 12.11 12.11",
                    svg: (0, t(474848).jsx)("path", {
                        d: "M1.95 8a6.05 6.05 0 1 1 12.1 0 6.05 6.05 0 0 1-12.1 0m8.444-1.623a.55.55 0 0 0-.944-.566L7.443 9.156 6.339 7.87a.55.55 0 1 0-.835.716l1.6 1.867a.55.55 0 0 0 .89-.075z"
                    })
                },
                i = (0, t(104509).wt)("checkmarkCircleFillSmall", n, "fillSmall")
        },
        601587: (e, a, t) => {
            function n(e, a) {
                let n = s(a);
                return (0, t(722371).objectKeys)(n).filter(a => e.includes(a)).sort((e, t) => n[e].languageNameInCurrentLanguage.localeCompare(n[t].languageNameInCurrentLanguage, a.locale))
            }
            t.d(a, {
                O8: () => n,
                Vn: () => s,
                W$: () => r,
                tr: () => i,
                vC: () => o
            }), t(898992), t(354520);
            let i = (0, t(109939).YK)({
                    "en-US": {
                        defaultMessage: "English (US)",
                        id: "languagePicker.captions.englishUS"
                    },
                    "de-DE": {
                        defaultMessage: "German",
                        id: "languagePicker.captions.germanDE"
                    },
                    "ko-KR": {
                        defaultMessage: "Korean",
                        id: "languagePicker.captions.koreanKo"
                    },
                    "zh-CN": {
                        defaultMessage: "Simplified Chinese",
                        id: "languagePicker.captions.chineseS"
                    },
                    "zh-TW": {
                        defaultMessage: "Traditional Chinese",
                        id: "languagePicker.captions.chineseT"
                    },
                    "ja-JP": {
                        defaultMessage: "Japanese",
                        id: "languagePicker.captions.japaneseJa"
                    },
                    "es-ES": {
                        defaultMessage: "Spanish (Spain)",
                        id: "languagePicker.captions.spanishEs"
                    },
                    "es-LA": {
                        defaultMessage: "Spanish (Latin America)",
                        id: "languagePicker.captions.spanishLatam"
                    },
                    "pt-BR": {
                        defaultMessage: "Portuguese (Brazil)",
                        id: "languagePicker.captions.portugueseBr"
                    },
                    "fr-FR": {
                        defaultMessage: "French (France)",
                        id: "languagePicker.captions.frenchFr"
                    },
                    "da-DK": {
                        defaultMessage: "Danish",
                        id: "languagePicker.captions.danishDk"
                    },
                    "fi-FI": {
                        defaultMessage: "Finnish",
                        id: "languagePicker.captions.finnishFi"
                    },
                    "nb-NO": {
                        defaultMessage: "Norwegian",
                        id: "languagePicker.captions.norwegianNo"
                    },
                    "nl-NL": {
                        defaultMessage: "Dutch",
                        id: "languagePicker.captions.dutchNl"
                    },
                    "sv-SE": {
                        defaultMessage: "Swedish",
                        id: "languagePicker.captions.swedishSe"
                    },
                    "en-GB": {
                        defaultMessage: "English (UK)",
                        id: "languagePicker.captions.englishGB"
                    },
                    "th-TH": {
                        defaultMessage: "Thai",
                        id: "languagePicker.captions.thaiTh"
                    },
                    "id-ID": {
                        defaultMessage: "Indonesian",
                        id: "languagePicker.captions.indonesianId"
                    },
                    "vi-VN": {
                        defaultMessage: "Vietnamese",
                        id: "languagePicker.captions.vietnameseVn"
                    },
                    "he-IL": {
                        defaultMessage: "Hebrew",
                        id: "languagePicker.captions.hebrewIl"
                    },
                    "ar-SA": {
                        defaultMessage: "Arabic",
                        id: "languagePicker.captions.arabicSa"
                    },
                    pseudo: {
                        defaultMessage: "Pseudolocale",
                        id: "languagePicker.captions.pseudolocale"
                    }
                }),
                o = {
                    "en-US": "English (US)",
                    "de-DE": "Deutsch",
                    "ko-KR": "한국어",
                    "zh-CN": "简体中文",
                    "zh-TW": "繁體中文",
                    "ja-JP": "日本語",
                    "es-ES": "Español (España)",
                    "es-LA": "Español (Latinoamérica)",
                    "pt-BR": "Português (Brasil)",
                    "fr-FR": "Français (France)",
                    "da-DK": "Dansk",
                    "fi-FI": "Suomi",
                    "nb-NO": "Norsk",
                    "nl-NL": "Nederlands",
                    "sv-SE": "Svenska",
                    "en-GB": "English (UK)",
                    "th-TH": "ภาษาไทย",
                    "id-ID": "Bahasa Indonesia",
                    "vi-VN": "Tiếng Việt",
                    "he-IL": "עברית",
                    "ar-SA": "العربية",
                    pseudo: "🤡Pseudolocale🤡"
                };

            function s(e) {
                let a = {};
                for (let n of (0, t(722371).objectKeys)(o)) a[n] = {
                    languageNameInThatLanguage: o[n],
                    languageNameInCurrentLanguage: e.formatMessage(i[n])
                };
                return a
            }

            function r(e) {
                return {
                    en: {
                        name: e.formatMessage({
                            defaultMessage: "English",
                            id: "languagePicker.name.english"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "EN",
                            id: "languagePicker.abbreviation.english"
                        })
                    },
                    de: {
                        name: e.formatMessage({
                            defaultMessage: "German",
                            id: "languagePicker.name.german"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "DE",
                            id: "languagePicker.abbreviation.german"
                        })
                    },
                    ko: {
                        name: e.formatMessage({
                            defaultMessage: "Korean",
                            id: "languagePicker.name.korean"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "KO",
                            id: "languagePicker.abbreviation.korean"
                        })
                    },
                    zh: {
                        name: e.formatMessage({
                            defaultMessage: "Chinese",
                            id: "languagePicker.name.chinese"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "ZH",
                            id: "languagePicker.abbreviation.chinese"
                        })
                    },
                    ja: {
                        name: e.formatMessage({
                            defaultMessage: "Japanese",
                            id: "languagePicker.name.japanese"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "JA",
                            id: "languagePicker.abbreviation.japanese"
                        })
                    },
                    es: {
                        name: e.formatMessage({
                            defaultMessage: "Spanish",
                            id: "languagePicker.name.spanish"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "ES",
                            id: "languagePicker.abbreviation.spanish"
                        })
                    },
                    pt: {
                        name: e.formatMessage({
                            defaultMessage: "Portuguese",
                            id: "languagePicker.name.portuguese"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "PT",
                            id: "languagePicker.abbreviation.portuguese"
                        })
                    },
                    fr: {
                        name: e.formatMessage({
                            defaultMessage: "French",
                            id: "languagePicker.name.french"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "FR",
                            id: "languagePicker.abbreviation.french"
                        })
                    },
                    da: {
                        name: e.formatMessage({
                            defaultMessage: "Danish",
                            id: "languagePicker.name.danish"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "DA",
                            id: "languagePicker.abbreviation.danish"
                        })
                    },
                    fi: {
                        name: e.formatMessage({
                            defaultMessage: "Finnish",
                            id: "languagePicker.name.finnish"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "FI",
                            id: "languagePicker.abbreviation.finnish"
                        })
                    },
                    nb: {
                        name: e.formatMessage({
                            defaultMessage: "Norwegian",
                            id: "languagePicker.name.norwegian"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "NB",
                            id: "languagePicker.abbreviation.norwegian"
                        })
                    },
                    nl: {
                        name: e.formatMessage({
                            defaultMessage: "Dutch",
                            id: "languagePicker.name.dutch"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "NL",
                            id: "languagePicker.abbreviation.dutch"
                        })
                    },
                    sv: {
                        name: e.formatMessage({
                            defaultMessage: "Swedish",
                            id: "languagePicker.name.swedish"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "SV",
                            id: "languagePicker.abbreviation.swedish"
                        })
                    },
                    th: {
                        name: e.formatMessage({
                            defaultMessage: "Thai",
                            id: "languagePicker.name.thai"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "TH",
                            id: "languagePicker.abbreviation.thai"
                        })
                    },
                    vi: {
                        name: e.formatMessage({
                            defaultMessage: "Vietnamese",
                            id: "languagePicker.name.vietnamese"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "VI",
                            id: "languagePicker.abbreviation.vietnamese"
                        })
                    },
                    id: {
                        name: e.formatMessage({
                            defaultMessage: "Indonesian",
                            id: "languagePicker.name.indonesian"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "ID",
                            id: "languagePicker.abbreviation.indonesian"
                        })
                    },
                    he: {
                        name: e.formatMessage({
                            defaultMessage: "Hebrew",
                            id: "languagePicker.name.hebrew"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "HE",
                            id: "languagePicker.abbreviation.hebrew"
                        })
                    },
                    ar: {
                        name: e.formatMessage({
                            defaultMessage: "Arabic",
                            id: "languagePicker.name.arabic"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "AR",
                            id: "languagePicker.abbreviation.arabic"
                        })
                    }
                }
            }
        },
        662886: (e, a, t) => {
            t.d(a, {
                K: () => s
            }), t(296540);
            var n = t(474848);
            let i = (0, t(109939).YK)({
                    menu: {
                        defaultMessage: "Menu",
                        id: "topbar.appMenuButton.title"
                    }
                }),
                o = {
                    style0: {
                        position: "absolute",
                        top: "10px",
                        insetInlineStart: "14px",
                        width: 24,
                        height: 24,
                        zIndex: 1e5,
                        ...(0, t(1249).g)({
                            noDrag: !0
                        })
                    }
                };

            function s() {
                let e = (0, t(109939).tz)();
                return (0, t(682985).O$)(t(584257).b) ? null : (0, n.jsx)(t(374533).A, {
                    style: o.style0,
                    colorVariant: "primary",
                    onClick: () => {
                        var e;
                        null === t(775657).electronApi || void 0 === t(775657).electronApi || null == (e = t(775657).electronApi.openAppMenu) || e.call(t(775657).electronApi)
                    },
                    icon: t(898378).notionTintableIcon,
                    ariaLabel: e.formatMessage(i.menu)
                })
            }
        },
        678064: (e, a, t) => {
            t.d(a, {
                A: () => i
            }), t(581454), t(296540);
            var n = t(474848);
            let i = function({
                    currentLocale: e,
                    confirm: a,
                    onChange: i,
                    origin: o,
                    showGlobeIcon: r,
                    showVisibleLabelPrefix: l = !1
                }) {
                    (0, t(533992).v3)();
                    let g = (0, t(109939).tz)(),
                        d = (0, t(682985).uB)(void 0, t(510969).A),
                        u = (0, t(83208).X)("polyglot");
                    if (t(986939).A.isMobile) return null;
                    let c = (0, t(601587).Vn)(g)[e].languageNameInThatLanguage,
                        f = r ? t(988022).p : t(548436).A;
                    return (0, n.jsx)(t(656252).A, {
                        onClick: () => {
                            (0, t(104310).u)({
                                event: {
                                    eventName: "change_locale_clicked",
                                    eventProperties: {
                                        origin: o
                                    }
                                }
                            })
                        },
                        ariaPopupType: "listbox",
                        popupType: t(656252).z.Popup,
                        buttonPopupStore: d,
                        ariaLabel: g.formatMessage({
                            id: "languagePicker.popup.ariaLabel",
                            defaultMessage: "Select language"
                        }),
                        placementToOrigin: "bottom",
                        alignmentToOrigin: "start",
                        content: o => {
                            let r = u ? [...t(619157).fy, ...t(619157).Tf] : [...t(619157).fy],
                                l = [{
                                    key: "languages",
                                    render: e => (0, n.jsx)(t(844565).A, { ...e,
                                        topBorder: 0 !== e.index
                                    }),
                                    items: (0, t(601587).O8)(r, g).map(r => ({
                                        key: r,
                                        render: e => (function(e, a, i, o) {
                                            let {
                                                languageNameInThatLanguage: r,
                                                languageNameInCurrentLanguage: l
                                            } = (0, t(601587).Vn)(o)[e];
                                            return (0, n.jsx)(s, {
                                                label: r,
                                                caption: l,
                                                focused: a,
                                                props: i,
                                                locale: e
                                            })
                                        })(r, e.focused, e, g),
                                        action: () => {
                                            var s, l, d, u, c;
                                            s = r, l = e, d = g, u = a, c = i, l !== s && function(e, a, i, o) {
                                                let {
                                                    languageNameInThatLanguage: s
                                                } = (0, t(601587).Vn)(a)[e];
                                                i ? t(647095).ui({
                                                    showCancel: !0,
                                                    keepFocus: !1,
                                                    message: (0, n.jsx)(t(109939).sA, {
                                                        id: "languagePicker.changeLanguage.confirmationMessage",
                                                        defaultMessage: "Are you sure you want to update the language to {language}?",
                                                        values: {
                                                            language: s
                                                        }
                                                    }),
                                                    items: [{
                                                        label: (0, n.jsx)(t(109939).sA, {
                                                            id: "languagePicker.changeLanguage.updateButton.label",
                                                            defaultMessage: "Update"
                                                        }),
                                                        color: "red",
                                                        onAccept: () => {
                                                            o(e)
                                                        }
                                                    }]
                                                }) : o(e)
                                            }(s, d, u, c), o.close()
                                        }
                                    }))
                                }],
                                d = {
                                    menuType: t(649476).gu.Popup,
                                    width: 240
                                };
                            return (0, n.jsx)(t(747369).A, {
                                className: t(828432).jtA,
                                ...d,
                                children: (0, n.jsx)(t(558045).A, {
                                    type: t(558045).O.Vertical,
                                    role: "listbox",
                                    initialFocus: void 0,
                                    sections: l
                                })
                            })
                        },
                        children: e => (0, n.jsx)(f, {
                            "aria-label": g.formatMessage({
                                id: "languagePicker.ariaLabel",
                                defaultMessage: "Language: {language}"
                            }, {
                                language: c
                            }),
                            colorPalette: r ? "gray" : void 0,
                            iconLeading: r ? t(515388).globeIcon : void 0,
                            iconTrailing: {
                                icon: t(595453).arrowChevronSingleDownSmallIcon,
                                size: "xs",
                                colorVariant: "secondary"
                            },
                            ...e,
                            children: l ? (0, n.jsx)(t(109939).sA, {
                                id: "languagePicker.visibleLabel",
                                defaultMessage: "Language: {language}",
                                values: {
                                    language: c
                                }
                            }) : c
                        })
                    })
                },
                o = {
                    style1: {
                        marginInlineEnd: 0
                    },
                    style2: {
                        color: t(632079).Tj.text.secondary
                    }
                };

            function s(e) {
                return (0, n.jsx)(t(95582).A, { ...e.props,
                    title: (0, n.jsx)(t(4458).fI, {
                        alignItems: "center",
                        children: (0, n.jsx)("div", {
                            style: { ...e.style,
                                ...o.style1
                            },
                            children: e.label
                        })
                    }),
                    caption: e.caption && (0, n.jsx)("span", {
                        style: o.style2,
                        children: e.caption
                    }),
                    shouldWrapCaption: !0
                })
            }
        },
        741489: (e, a, t) => {
            t.d(a, {
                j: () => i
            }), t(296540);
            var n = t(474848);

            function i({
                title: e,
                titleId: a,
                byline: o,
                bylineId: s,
                badge: r
            }) {
                return (0, n.jsxs)(t(4458).VP, {
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: 4,
                    children: [(0, n.jsxs)(t(4458).fI, {
                        alignItems: "center",
                        gap: 6,
                        children: [(0, n.jsx)(t(111010).D, {
                            id: a,
                            styleKey: t(986939).A.isMobile ? "captionMedium" : "bodyMedium",
                            colorVariant: "primary",
                            children: e
                        }), r]
                    }), o ? (0, n.jsx)(t(111010).D, {
                        id: s,
                        styleKey: t(986939).A.isMobile ? "captionSmRegular" : "bodySmRegular",
                        colorVariant: "secondary",
                        style: {
                            textWrap: "pretty"
                        },
                        children: o
                    }) : void 0]
                })
            }
        },
        801510: (e, a, t) => {
            t.d(a, {
                A: () => r
            });
            var n = t(296540),
                i = t(474848);
            let o = {
                    marginInlineEnd: 4,
                    marginInlineStart: "auto"
                },
                s = {
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "center"
                },
                r = n.memo(n.forwardRef(function(e, a) {
                    let {
                        id: n,
                        children: r,
                        disabledFeedback: l,
                        isFullWidth: g,
                        isLoading: d,
                        onClick: u,
                        style: c,
                        variant: f,
                        disabled: p,
                        ...m
                    } = e, h = (0, t(960253).e)(), b = {
                        display: "inline-grid",
                        alignItems: "center",
                        justifyContent: "center",
                        whiteSpace: "nowrap",
                        height: 36,
                        borderRadius: 4,
                        fontSize: 14,
                        lineHeight: 1,
                        paddingInlineStart: 12,
                        paddingInlineEnd: 12,
                        fontWeight: t(699422).Wy.medium,
                        ...d && {
                            gridTemplateColumns: "1fr auto 1fr"
                        },
                        transition: "background-color color 150ms ease"
                    };
                    return (0, i.jsxs)(t(64960).Ay, {
                        ref: a,
                        id: n,
                        onClick: u,
                        style: { ...b,
                            ... function(e) {
                                switch (e) {
                                    case "primary":
                                        return {
                                            background: t(632079).oZ.frontBlueButtonBackground,
                                            boxShadow: t(632079).Tj.buttonBoxShadow,
                                            color: "white"
                                        };
                                    case "secondary":
                                        return {
                                            background: t(632079).oZ.frontSecondaryButtonBackground,
                                            boxShadow: "0 1px 2px rgba(15, 15, 15, 0.1), inset 0 0 0 1px rgba(235, 87, 87, 0.3)",
                                            color: t(632079).oZ.red
                                        };
                                    case "tertiary":
                                    case "aiTertiary":
                                        return {
                                            background: t(632079).oZ.white,
                                            color: t(632079).oZ.frontTextDark,
                                            border: "1px solid rgba(15, 15, 15, 0.15)",
                                            width: "100%",
                                            boxShadow: "0 1px 2px rgba(15, 15, 15, 0.05)"
                                        };
                                    case "quaternary":
                                        return {
                                            background: t(632079).oZ.frontQuaternaryButtonBackground,
                                            border: `1px solid ${t(632079).oZ.frontQuaternaryButtonBorder}`,
                                            boxShadow: "0 1px 2px rgba(15, 15, 15, 0.1)",
                                            color: "white"
                                        };
                                    case "aiPrimary":
                                        return {
                                            background: "#CA59FF",
                                            color: "white"
                                        };
                                    case "lightGray":
                                        return {
                                            background: t(632079).Tj.background.tertiaryTranslucent,
                                            color: t(632079).Tj.text.secondary
                                        };
                                    default:
                                        (0, t(722371).HB)(e)
                                }
                            }(f),
                            ...c,
                            ...g && {
                                width: "100%",
                                justifyContent: "center"
                            }
                        },
                        hoveredStyle: function(e, a) {
                            switch (e) {
                                case "primary":
                                    return {
                                        background: t(632079).oZ.frontBlueButtonHoveredBackground
                                    };
                                case "secondary":
                                    return {
                                        background: t(632079).oZ.frontSecondaryButtonBackgroundHovered
                                    };
                                case "tertiary":
                                    return {
                                        background: "light" === a ? t(632079).Tj.buttonHoveredBackground : "rgba(255, 255, 255, 0.8)"
                                    };
                                case "quaternary":
                                    return {
                                        background: t(632079).oZ.frontQuaternaryButtonBackgroundHovered
                                    };
                                case "aiPrimary":
                                case "aiTertiary":
                                    return {
                                        background: "#C592DD"
                                    };
                                case "lightGray":
                                    return {
                                        background: t(632079).Tj.background.tertiaryTranslucent,
                                        color: t(632079).Tj.text.primary
                                    };
                                default:
                                    (0, t(722371).HB)(e)
                            }
                        }(f, h),
                        pressedStyle: function(e, a) {
                            switch (e) {
                                case "primary":
                                    return {
                                        background: t(632079).oZ.frontBlueButtonPressedBackground
                                    };
                                case "secondary":
                                    return {
                                        background: t(632079).Tj.buttonPressedBackground
                                    };
                                case "tertiary":
                                    return {
                                        background: "light" === a ? t(632079).Tj.buttonPressedBackground : "rgba(255, 255, 255, 0.85)"
                                    };
                                case "quaternary":
                                    return {
                                        background: t(632079).oZ.frontQuaternaryButtonBackgroundPressed
                                    };
                                case "aiPrimary":
                                case "aiTertiary":
                                    return {
                                        background: "#946EA6"
                                    };
                                case "lightGray":
                                    return {
                                        background: t(632079).Tj.state.pressed,
                                        color: t(632079).Tj.text.primary
                                    };
                                default:
                                    (0, t(722371).HB)(e)
                            }
                        }(f, h),
                        disabled: p || d,
                        disabledFeedback: l,
                        ...m,
                        children: [d ? (0, i.jsx)(t(517334).k, {
                            style: o
                        }) : null, (0, i.jsx)("div", {
                            style: s,
                            children: r
                        })]
                    })
                }), t(795676).A)
        },
        823811: (e, a, t) => {
            t.d(a, {
                o: () => i
            }), t(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.12 15.25 11.75",
                    svg: (0, t(474848).jsx)("path", {
                        d: "M2.375 6.25c0-1.174.951-2.125 2.125-2.125h11c1.174 0 2.125.951 2.125 2.125v7.5a2.125 2.125 0 0 1-2.125 2.125h-11a2.125 2.125 0 0 1-2.125-2.125zm1.25 7.49L7.366 10 3.625 6.259zm.884.885H15.49l-3.74-3.741-1.309 1.308a.625.625 0 0 1-.884 0L8.25 10.884zM12.634 10l3.741 3.741V6.26zM4.509 5.375 10 10.866l5.491-5.491z"
                    })
                },
                i = (0, t(104509).wt)("envelope", n, "default")
        },
        976800: (e, a, t) => {
            t.d(a, {
                o: () => l
            });
            var n = t(296540),
                i = t(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.87 3.47 16.26 12.66",
                    directional: !0,
                    svg: (0, i.jsx)("path", {
                        d: "M12.231 4.969A.875.875 0 1 1 13.47 3.73l4.4 4.4a.875.875 0 0 1 0 1.238l-4.4 4.4a.875.875 0 1 1-1.238-1.238l2.906-2.906H6a2.375 2.375 0 1 0 0 4.75h1.42a.875.875 0 0 1 0 1.75H6a4.125 4.125 0 1 1 0-8.25h9.138z"
                    })
                },
                s = (0, t(104509).wt)("arrowUTurnUpRightFill", o, "fill"),
                r = {
                    skipLink: {
                        position: "absolute",
                        insetInlineStart: 12,
                        top: 12,
                        width: 200,
                        height: 48,
                        overflow: "hidden",
                        zIndex: 9999,
                        padding: 12,
                        background: t(632079).Tj.blue.background.accentPrimary,
                        color: "white",
                        textAlign: "center",
                        textDecoration: "none",
                        borderRadius: 16
                    },
                    buttonHoveredStyle: {
                        background: t(632079).Tj.blueButtonHoveredBackground
                    },
                    buttonPressedStyle: {
                        background: t(632079).Tj.blueButtonPressedBackground
                    },
                    style1: {
                        width: "auto"
                    }
                };

            function l({
                sidebarAware: e = !0
            }) {
                let a = (0, t(533992).v3)(),
                    o = (0, t(682985).O$)(t(984858).sidebarWidthStore),
                    g = e ? o : void 0,
                    d = (0, t(682985).K8)(() => !!e && (0, t(712358).K)(a), [a, e]),
                    [u, c] = (0, n.useState)(!1),
                    f = (0, n.useRef)(null),
                    p = (0, t(960253).e)(),
                    m = (0, t(960253).I)(() => ({
                        container: {
                            background: d ? "light" === p ? t(632079).Tj.background.secondary : t(632079).Tj.background.elevated : void 0,
                            height: 68,
                            position: "fixed",
                            top: 0,
                            insetInlineStart: 0,
                            insetInlineEnd: 0,
                            bottom: 0,
                            zIndex: 1e3
                        }
                    }), [d, p]);
                return (0, i.jsx)(t(654979).A, {
                    tag: "div",
                    animate: { ...void 0 !== g && {
                            width: g
                        },
                        translateY: u ? 0 : -100
                    },
                    style: { ...m.container,
                        ...void 0 === g && r.style1
                    },
                    className: "notion-print-ignore",
                    children: (0, i.jsx)(t(64960).Ay, {
                        style: r.skipLink,
                        hoveredStyle: r.buttonHoveredStyle,
                        pressedStyle: r.buttonPressedStyle,
                        href: "#main",
                        id: "skip-to-content",
                        ref: f,
                        onClick: e => {
                            let a = 0 === e.detail || 0 === e.screenX && 0 === e.screenY,
                                n = document.getElementById("main");
                            if (n) {
                                let e = (0, t(949054).Kr)(n);
                                e.length > 0 && e[0].focus()
                            }
                            c(!1), (0, t(104310).u)({
                                event: {
                                    eventName: "skip_to_content_click",
                                    eventProperties: {
                                        user_navigation_type: a ? "keyboard" : "mouse"
                                    }
                                }
                            })
                        },
                        onFocus: () => {
                            c(!0)
                        },
                        onBlur: () => {
                            c(!1)
                        },
                        children: (0, i.jsxs)(t(4458).fI, {
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 8,
                            children: [(0, i.jsx)(t(109939).sA, {
                                defaultMessage: "Skip to content",
                                id: "skipToContent.skipToContent"
                            }), (0, i.jsx)(t(16275).I, {
                                icon: s
                            })]
                        })
                    })
                })
            }
        },
        989068: (e, a, t) => {
            async function n(e) {
                var a;
                return null === t(775657).electronApi || void 0 === t(775657).electronApi || null == (a = t(775657).electronApi.checkLocaleSupport) ? void 0 : a.call(t(775657).electronApi, e)
            }
            t.d(a, {
                o: () => l,
                i: () => s
            }), t(296540);
            var i = t(474848);
            let o = (0, t(109939).YK)({
                title: {
                    id: "desktop.unsupportedLocale.title",
                    defaultMessage: "Language not supported on desktop"
                },
                message: {
                    id: "desktop.unsupportedLocale.message",
                    defaultMessage: "The {localeName} locale isn’t supported in this version of the desktop app. Try updating to the latest desktop version."
                }
            });
            async function s({
                locale: e,
                environment: a,
                origin: i,
                intl: r
            }) {
                var l;
                if (a.device.isElectron) {
                    let a = await n(e);
                    if ((null == a ? void 0 : a.supported) === !1) return void t(819652).HK({
                        id: "unsupported_locale",
                        title: r.formatMessage(o.title),
                        message: r.formatMessage(o.message, {
                            localeName: e
                        })
                    })
                }(0, t(195857).DO_NOT_USE_trackLegacy)("locale_changed", {
                    locale: e,
                    origin: i
                });
                let g = await a.api.callApi({
                    eventName: "setlocale",
                    environment: a,
                    data: {
                        locale: e
                    }
                });
                "success" === g.type ? (t(467008).A.set("preferredLocale", e), await t(941701).transactionQueue.drain(), a.device.isElectron) ? (null === t(775657).electronApi || void 0 === t(775657).electronApi || null == (l = t(775657).electronApi.setLocale) || l.call(t(775657).electronApi, e), (0, t(518531).F)({
                    includeFocusedWindow: !0
                })) : window.location.reload(!0) : t(647095).Qg(g)
            }

            function r(e) {
                let a = (0, t(533992).v3)(),
                    n = (0, t(109939).tz)();
                return (0, i.jsx)(t(321412).b, {
                    id: "languageAndRegionSettingsLanguage",
                    title: (0, i.jsx)(t(109939).sA, { ...t(166863).P.language.title
                    }),
                    byline: (0, i.jsx)(t(109939).sA, { ...t(166863).P.language.description
                    }),
                    item: (0, i.jsx)(t(678064).A, {
                        confirm: !0,
                        onChange: e => s({
                            locale: e,
                            environment: a,
                            origin: "languageSettings",
                            intl: n
                        }),
                        currentLocale: e.locale,
                        origin: "languageSettings"
                    })
                })
            }

            function l(e) {
                let {
                    device: a
                } = (0, t(533992).v3)();
                return (0, t(682985).K8)(() => (0, t(405072).J)({
                    isMobileNative: a.isMobileNative,
                    isAndroid: a.isAndroid
                }), [a.isMobileNative, a.isAndroid]) ? (0, i.jsx)(t(31256).J, {}) : t(986939).A.isMobile ? null : (0, i.jsx)(r, { ...e
                })
            }
        }
    }
]);