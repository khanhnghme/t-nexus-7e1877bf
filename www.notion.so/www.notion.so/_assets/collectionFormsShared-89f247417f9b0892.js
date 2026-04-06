"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [10831, 51859], {
        266967: (e, t, o) => {
            o.d(t, {
                DG: () => i,
                Yg: () => a,
                Yx: () => l,
                _N: () => n,
                fY: () => r,
                h8: () => d,
                wG: () => s
            }), o(944114), o(898992), o(803949);
            let s = "forms_add_conditional_logic_tooltip";

            function a({
                currentModule: e,
                nestedModules: t,
                includePlaceholders: o
            }) {
                let s = [{
                        currentModule: e,
                        depth: 1
                    }],
                    n = [],
                    i = 0;
                for (; s.length > 0;) {
                    let e = s.shift();
                    if (!e) continue;
                    let {
                        currentModule: a,
                        depth: r
                    } = e;
                    if (n.push(a), r > i && (i = r), "formQuestion" === a.type) {
                        var l;
                        null == (l = a.conditionalGroups) || l.forEach(e => {
                            for (let a of e.children ? ? []) {
                                let e = t[a];
                                e && ("formQuestion" === e.type || o && "placeholder" === e.type) && s.push({
                                    currentModule: e,
                                    depth: r + 1
                                })
                            }
                        })
                    }
                }
                return {
                    formQuestionDescendants: n,
                    maxDepth: i
                }
            }

            function n(e, t, s) {
                if (!e) return;
                let a = (0, o(758159).A)(e, t.getModules());
                if (!a) return;
                let n = o(680802).c.createChildStore(t, {
                    table: o(832375).lo9,
                    id: a.module.formQuestionId,
                    spaceId: t.getSpaceId() ? ? ""
                }).getPropertyId();
                if (!n) return;
                let i = s.getSchema()[n],
                    l = null == i ? void 0 : i.type;
                if ("select" === l || "multi_select" === l || "checkbox" === l) return l
            }

            function i({
                mouseEntered: e,
                currentQuestionModule: t,
                modulesByArea: s,
                featureAvailable: a,
                inputFocused: n,
                isDragging: l,
                showTutorialTooltip: r
            }) {
                if (void 0 === s) return !1;
                let d = (0, o(703049).Cg)({
                    moduleId: null == t ? void 0 : t.id,
                    modulesByArea: s
                }).length >= o(703049).mh;
                return (e || r) && !d && !n && !l
            }

            function l(e) {
                let {
                    formQuestionId: t,
                    formAddConditionalLogicTooltipStore: a
                } = e;
                if (o(107333).A.state.open || !t || !a) return !1;
                if ("multi_select" === e.type) {
                    let o = e.optionValue;
                    if (!o || a.state.openTooltip !== r({
                            formQuestionId: t,
                            optionValue: o
                        })) return !1
                } else if (a.state.openTooltip !== r({
                        formQuestionId: t
                    })) return !1;
                return o(696190).default.isVisible(s)
            }

            function r({
                formQuestionId: e,
                optionValue: t
            }) {
                return t ? `fqid:${e} value:${t}` : `fqid:${e}`
            }

            function d(e, t) {
                return `${e}:${t}`
            }
        },
        805999: (e, t, o) => {
            o.d(t, {
                C0: () => u,
                CK: () => b,
                Dx: () => f,
                Fc: () => M,
                Gi: () => i,
                Hd: () => A,
                KU: () => v,
                TW: () => y,
                Vm: () => S,
                YA: () => m,
                d0: () => a,
                eb: () => n,
                ls: () => c,
                mY: () => r,
                px: () => p
            }), o(16280), o(296540);
            var s = o(474848);
            let a = 5e3,
                n = 500,
                i = (0, o(109939).YK)({
                    characterLimitReached: {
                        defaultMessage: "Character limit reached.",
                        id: "form.characterLimitReached"
                    },
                    questionLimitReachedTitle: {
                        defaultMessage: "Question limit reached",
                        id: "form.questionLimitReached.title"
                    },
                    questionLimitReachedSubtitle: {
                        defaultMessage: "Please delete a question before creating a new one.",
                        id: "form.questionLimitReached.subtitle"
                    },
                    questionLimitReachedFullMessage: {
                        defaultMessage: "Question limit reached. Please delete a question before creating a new one.",
                        id: "form.questionLimitReached.fullMessage"
                    }
                }),
                l = (0, o(109939).YK)({
                    title: {
                        defaultMessage: "Title",
                        id: "database.questionTypeName.title"
                    },
                    text: {
                        defaultMessage: "Text",
                        id: "database.questionTypeName.text"
                    },
                    number: {
                        defaultMessage: "Number",
                        id: "database.questionTypeName.numberTypeLabel"
                    },
                    url: {
                        defaultMessage: "URL",
                        id: "database.questionTypeName.url"
                    },
                    multi_select: {
                        defaultMessage: "Multiple choice",
                        id: "database.questionTypeName.multi_select"
                    },
                    person: {
                        defaultMessage: "Person",
                        id: "database.questionTypeName.person"
                    },
                    email: {
                        defaultMessage: "Email",
                        id: "database.questionTypeName.email"
                    },
                    phone_number: {
                        defaultMessage: "Phone",
                        id: "database.questionTypeName.phone_number"
                    },
                    date: {
                        defaultMessage: "Date",
                        id: "database.questionTypeName.dateTypeLabel"
                    },
                    file: {
                        defaultMessage: "Files & media",
                        id: "database.questionTypeName.file"
                    },
                    checkbox: {
                        defaultMessage: "Checkbox",
                        id: "database.questionTypeName.checkbox"
                    },
                    relation: {
                        defaultMessage: "Relation",
                        id: "database.questionTypeName.relation"
                    },
                    place: {
                        defaultMessage: "Place",
                        id: "database.questionTypeName.place"
                    }
                }),
                r = {
                    title: o(962299).A.formatMessage(l.title),
                    text: o(962299).A.formatMessage(l.text),
                    number: o(962299).A.formatMessage(l.number),
                    url: o(962299).A.formatMessage(l.url),
                    multi_select: o(962299).A.formatMessage(l.multi_select),
                    person: o(962299).A.formatMessage(l.person),
                    email: o(962299).A.formatMessage(l.email),
                    phone_number: o(962299).A.formatMessage(l.phone_number),
                    date: o(962299).A.formatMessage(l.date),
                    file: o(962299).A.formatMessage(l.file),
                    checkbox: o(962299).A.formatMessage(l.checkbox),
                    relation: o(962299).A.formatMessage(l.relation),
                    place: o(962299).A.formatMessage(l.place)
                },
                d = ["relation", "person"];

            function u({
                isFormPublic: e,
                isFormClosed: t
            }) {
                return t ? "closed" : e ? "shared_to_web" : "shared_to_space"
            }

            function c(e) {
                let {
                    formSharingState: t,
                    isOverBlockLimit: a,
                    spaceName: n
                } = e;
                if (a) return (0, s.jsx)(o(109939).sA, {
                    id: "editorFormResponderWarning.overBlockLimit.message",
                    defaultMessage: "You are over the block limit. No new responses can be submitted through this form."
                });
                switch (t) {
                    case "closed":
                        return (0, s.jsx)(o(109939).sA, {
                            id: "editorFormResponderWarning.closed.message",
                            defaultMessage: "This form is closed. No new responses can be submitted."
                        });
                    case "shared_to_web":
                        return (0, s.jsx)(o(109939).sA, {
                            id: "editorFormResponderWarning.public.message",
                            defaultMessage: "This form is public. Anyone with the link can submit a response."
                        });
                    case "shared_to_space":
                        return (0, s.jsx)(o(109939).sA, {
                            id: "editorFormResponderWarning.internal.message",
                            defaultMessage: "Only members at {spaceName} can fill out this form.",
                            values: {
                                spaceName: n
                            }
                        })
                }
            }

            function p(e, t = !1) {
                return e.getIsFormPublic() ? (0, o(483227).Ay)({
                    store: e,
                    preferPublicLink: !0,
                    pageVisitSource: o(254656).y8.FormPublicPage
                }) : (0, o(483227).Ay)({
                    store: e,
                    openInCenterPeek: t,
                    pageVisitSource: o(254656).y8.FormInternalPage
                })
            }

            function m({
                collectionContextStore: e,
                propertyId: t,
                questionId: s,
                area: a,
                parentModuleId: n,
                layoutStore: i
            }) {
                var l, r;
                let d = e ? (0, o(752242).sl)(e) : void 0,
                    u = null == e ? void 0 : e.collectionViewStore(),
                    c = null == e ? void 0 : e.collectionStore(),
                    p = null == u ? void 0 : u.getFormat(),
                    f = null == p || null == (l = p.form_block_pointer) ? void 0 : l.id,
                    h = null == e || null == (r = e.normalizedSchemaStore.state) || null == (r = r[t]) ? void 0 : r.type;
                if (!c) throw Error("Collection store is undefined");
                return {
                    question_type: h,
                    question_id: s,
                    form_id: f,
                    is_conditional: "form_conditional_modules" === a,
                    parent_question_type: (0, o(266967)._N)(n, i, c),
                    ...d ? ? {}
                }
            }

            function f(e) {
                let t = null == e ? void 0 : e.getFormat().form_layout_pointer;
                if (t) return o(97746).K.createChildStore(e, t)
            }
            let h = new(o(245541)).R({
                    key: "opt_out_form_content_warning",
                    namespace: o(274919).cd,
                    important: !1,
                    trackingType: "preference"
                }),
                g = {
                    style0: {
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: o(699422).Wy.medium
                    },
                    style1: {
                        textAlign: "center",
                        fontSize: 14
                    },
                    style2: {
                        fontWeight: o(699422).Wy.regular
                    }
                };

            function y(e) {
                let t = h.getState(),
                    a = void 0 === t || Date.now() - t > o(627179).nD,
                    n = "file" === e.propertyType ? (0, s.jsx)(o(109939).sA, {
                        id: "collectionFormHelpers.maybeWarnAboutMaliciousContent.file.message",
                        defaultMessage: "Download file?"
                    }) : (0, s.jsx)(o(109939).sA, {
                        id: "collectionFormHelpers.maybeWarnAboutMaliciousContent.url.message",
                        defaultMessage: "Open link?"
                    }),
                    i = (0, s.jsx)(o(109939).sA, {
                        id: "collectionFormHelpers.maybeWarnAboutMaliciousContent.description",
                        defaultMessage: "This content was submitted anonymously. Only proceed if you trust the source."
                    }),
                    l = "file" === e.propertyType ? (0, s.jsx)(o(109939).sA, {
                        id: "collectionFormHelpers.maybeWarnAboutMaliciousContent.file.confirmLabel",
                        defaultMessage: "Download anyway"
                    }) : (0, s.jsx)(o(109939).sA, {
                        id: "collectionFormHelpers.maybeWarnAboutMaliciousContent.url.confirmLabel",
                        defaultMessage: "Open anyway"
                    });
                a ? o(647095).ui({
                    showCancel: !1,
                    showCloseButton: !0,
                    keepFocus: !0,
                    mode: "wide",
                    message: (0, s.jsx)("div", {
                        style: g.style0,
                        children: n
                    }),
                    description: (0, s.jsx)("div", {
                        style: g.style1,
                        children: i
                    }),
                    items: [{
                        label: l,
                        onAccept: e.onConfirm,
                        color: "red",
                        buttonType: "solid"
                    }],
                    selectionItems: [{
                        key: "opt_out",
                        showBelowButtons: !0,
                        text: (0, s.jsx)("span", {
                            style: g.style2,
                            children: (0, s.jsx)(o(109939).sA, {
                                id: "collectionFormHelpers.maybeWarnAboutMaliciousContent.optOut",
                                defaultMessage: "Don’t show again for 24 hours"
                            })
                        }),
                        onSelect: e => {
                            !0 === e ? h.setState(Date.now()) : h.setState(void 0)
                        }
                    }]
                }) : e.onConfirm()
            }

            function b(e) {
                let {
                    environment: t,
                    propertyType: s,
                    propertySchema: a,
                    isPublicForm: n
                } = e;
                if (n && d.includes(s)) {
                    if ("person" === s) return "invalid_property_type_for_public_form";
                    if ((null == a ? void 0 : a.type) === "relation") {
                        let e = (0, o(390768).N)(a);
                        if (e) {
                            let s = new(o(356912)).m(t, e);
                            if (s.isDefined() && !(0, o(862085).qw)(s)) return "related_collection_not_public"
                        }
                    }
                }
            }
            let x = (0, o(109939).YK)({
                checkboxYes: {
                    id: "FormResponseSnapshotModal.Checkbox.Yes",
                    defaultMessage: "Yes"
                },
                checkboxNo: {
                    id: "FormResponseSnapshotModal.Checkbox.No",
                    defaultMessage: "No"
                }
            });

            function M(e) {
                return "true" === e ? o(962299).A.formatMessage(x.checkboxYes) : o(962299).A.formatMessage(x.checkboxNo)
            }

            function S(e) {
                let {
                    formQuestionStore: t,
                    propertySchema: s
                } = e;
                return (0, o(682985).K8)(() => {
                    let e = null == t ? void 0 : t.getModel();
                    return !!e && !!s && ((0, o(703049).Fi)({
                        formQuestionModel: e,
                        propertySchema: s
                    }) || (null == s ? void 0 : s.type) === "select")
                }, [t, s])
            }

            function A(e) {
                let {
                    draftFormBlockStore: t,
                    formQuestionStore: s,
                    propertyId: a,
                    propertySchema: n
                } = e;
                if (!t || !a || !n || "multi_select" !== n.type && "select" !== n.type) return;
                let i = t.getPropertyValue(a);
                if ("select" === n.type) return (0, o(561872).L3)(i, n.options ? ? []);
                let l = s.getModel();
                if (l && !(0, o(703049).Fi)({
                        formQuestionModel: l,
                        propertySchema: n
                    })) return;
                let r = (0, o(561872).o2)(i, n.options ? ? []);
                return 1 === r.length ? r[0] : void 0
            }

            function v(e) {
                var t;
                let {
                    formQuestionStore: s,
                    propertySchema: a
                } = e;
                if (a && (0, o(532792).l)(a)) return (null == (t = s.getPropertyTypeSpecificConfig(a.type)) ? void 0 : t.displayMode) ? ? "list"
            }
        },
        871124: (e, t, o) => {
            o.r(t), o.d(t, {
                default: () => p
            }), o(581454);
            var s = o(296540);

            function a({
                environment: e,
                inMemoryRecordCache: t,
                formSnapshotData: s,
                currentSpaceStore: i,
                currentSpaceViewStore: l,
                handleModalClose: r
            }) {
                let d = i.id;
                (0, o(377796).createAndCommit)({
                    environment: e,
                    userAction: "FormResponseSnapshot.saveFormResponseAsPage",
                    cellTarget: {
                        spaceWithId: d
                    },
                    canUndo: !0,
                    perform: a => {
                        let u = "" !== s.formTitle ? (0, o(247438).x9d)(s.formTitle) : (0, o(247438).x9d)(o(962299).A.formatMessage(n.defaultFormResponseTitle)),
                            c = o(124937).Wv({
                                environment: e,
                                type: o(955630).xd.page,
                                properties: {
                                    title: u
                                },
                                format: {
                                    page_icon: "/icons/drafts_gray.svg"
                                },
                                inMemoryRecordCache: t,
                                transaction: a,
                                spaceId: d
                            });
                        s.questionsAndAnswers.map(s => {
                            let i = "" !== s.question ? (0, o(247438).x9d)(s.question) : (0, o(247438).x9d)(o(962299).A.formatMessage(n.defaultQuestion)),
                                l = o(124937).Wv({
                                    environment: e,
                                    type: o(955630).xd.subHeader,
                                    properties: {
                                        title: i
                                    },
                                    inMemoryRecordCache: t,
                                    transaction: a,
                                    spaceId: d
                                });
                            o(579695).NI({
                                parentStore: c,
                                childStore: l,
                                transaction: a
                            });
                            let r = "checkbox" === s.questionType ? (0, o(805999).Fc)(s.answer) : s.answer,
                                u = "" !== s.answer ? (0, o(247438).x9d)(r) : (0, o(247438).x9d)(o(962299).A.formatMessage(n.defaultAnswer)),
                                p = o(124937).Wv({
                                    environment: e,
                                    type: o(955630).xd.text,
                                    properties: {
                                        title: u
                                    },
                                    inMemoryRecordCache: t,
                                    transaction: a,
                                    spaceId: d
                                });
                            o(579695).NI({
                                parentStore: c,
                                childStore: p,
                                transaction: a
                            })
                        }), o(964232).yM({
                            environment: e,
                            spaceStore: i,
                            spaceViewStore: l,
                            pageStore: c,
                            isPrivate: !0,
                            transaction: a,
                            location: {
                                type: "prepend"
                            }
                        }), (0, o(578825)._)({
                            environment: e,
                            store: c,
                            isLocked: !0,
                            transaction: a
                        }), (0, o(104310).u)({
                            event: {
                                eventName: "form_response_save_page",
                                eventProperties: {
                                    page_id: c.id
                                }
                            }
                        }), r(), (0, o(545586).navigateToBlock)({
                            environment: e,
                            store: c,
                            pageVisitSource: o(254656).y8.FormResponseSnapshot
                        })
                    }
                })
            }
            let n = (0, o(109939).YK)({
                defaultFormResponseTitle: {
                    id: "FormResponseSnapshotModal.saveResponseAsPage.defaultPageTitle",
                    defaultMessage: "Your form response"
                },
                defaultAnswer: {
                    id: "FormResponseSnapshotModal.saveResponseAsPage.defaultAnswer",
                    defaultMessage: "(No answer)"
                },
                defaultQuestion: {
                    id: "FormResponseSnapshotModal.saveResponseAsPage.defaultQuestion",
                    defaultMessage: "(Untitled question)"
                }
            });
            var i = o(474848);
            let l = {
                    padding: 96,
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                },
                r = {
                    marginBottom: 50,
                    width: "100%"
                },
                d = {
                    padding: 20,
                    width: "100%"
                },
                u = {},
                c = {
                    height: "calc(100% - 72px*2)",
                    width: "calc(100% - 72px*2)",
                    maxWidth: 960
                };

            function p() {
                let e = (0, o(533992).v3)(),
                    {
                        isPhone: t
                    } = (0, o(533992).Y0)(),
                    a = (0, o(109939).tz)(),
                    [n, p] = (0, s.useState)(void 0),
                    [m, f] = (0, s.useState)(!1),
                    {
                        open: h,
                        formResponseId: y,
                        secretKey: b,
                        formSpaceId: x
                    } = (0, o(682985).O$)(o(324576).A),
                    S = (0, o(616844).Y5)("top", 24),
                    A = (0, o(960253).I)(() => ({
                        mobilePopup: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "100%",
                            paddingTop: S,
                            paddingBottom: S
                        }
                    }), [S]);
                (0, o(383953).l)(async () => {
                    if (!y || !b || !x) return;
                    let t = e.currentUser.id,
                        s = await e.api.callApi({
                            eventName: "getFormResponseSnapshot",
                            environment: e,
                            data: {
                                snapshotId: y,
                                secretKey: b,
                                spaceId: x
                            },
                            userId: t
                        });
                    "failed" === s.type ? o(436555).D6({
                        label: (0, i.jsx)(o(109939).sA, {
                            defaultMessage: "There was an error loading your form response. Please contact the form creator.",
                            id: "FormResponseSnapshotModal.Error"
                        })
                    }) : (p(s.data.snapshotData), f(!0))
                });
                let v = (0, s.useCallback)(() => {
                    o(324576).A.setState({
                        open: !1,
                        formResponseId: void 0,
                        secretKey: void 0,
                        formSpaceId: void 0
                    })
                }, []);
                return h && (!m || n) ? t ? (0, i.jsx)(o(182718).zD, {
                    popupType: o(182718).nl.SlideUp,
                    style: A.mobilePopup,
                    open: void 0 !== n,
                    onDismiss: v,
                    content: () => n ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(o(126767).H, {
                            type: o(644154).A.Y,
                            style: r,
                            children: (0, i.jsx)("div", {
                                style: d,
                                children: (0, i.jsx)(g, {
                                    formSnapshotData: n
                                })
                            })
                        }), (0, i.jsx)(w, {
                            handleModalClose: v,
                            formSnapshotData: n
                        })]
                    }) : null
                }) : (0, i.jsx)(o(556809).a, {
                    ariaLabel: a.formatMessage({
                        id: "FormResponseSnapshotModal.ariaLabel",
                        defaultMessage: "Form Response"
                    }),
                    style: u,
                    innerStyle: c,
                    open: void 0 !== n,
                    onDismiss: v,
                    children: n ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(M, {
                            formSnapshotData: n,
                            handleModalClose: v
                        }), (0, i.jsx)(o(126767).H, {
                            type: o(644154).A.Y,
                            style: l,
                            children: (0, i.jsx)(g, {
                                formSnapshotData: n
                            })
                        })]
                    }) : null
                }) : null
            }
            let m = {
                height: 75
            };

            function f() {
                let e = (0, o(960253).e)(),
                    t = `/icons/drafts_gray.svg?mode=${e}`;
                return (0, i.jsx)("img", {
                    src: t,
                    style: m
                })
            }
            let h = {
                style0: {
                    maxWidth: 700,
                    wordBreak: "break-word",
                    marginTop: 12
                },
                style1: {
                    color: o(632079).Tj.text.secondary,
                    cursor: "pointer"
                }
            };

            function g({
                formSnapshotData: e
            }) {
                let t = (0, o(533992).Y0)().isPhone,
                    s = e.questionsAndAnswers ? ? [];
                return (0, i.jsxs)("div", {
                    style: h.style0,
                    children: [(0, i.jsx)(f, {}), (0, i.jsx)("h1", {
                        style: {
                            fontSize: t ? 28 : 40,
                            fontWeight: o(699422).Wy.bold,
                            marginBottom: 42,
                            lineHeight: 1.2
                        },
                        children: (0, i.jsx)("span", {
                            children: "" === e.formTitle ? (0, i.jsx)(o(109939).sA, {
                                id: "FormResponseSnapshotModal.yourResponse",
                                defaultMessage: "Your form response"
                            }) : (0, i.jsx)(o(109939).sA, {
                                id: "FormResponseSnapshotModal.yourResponseToTitle",
                                defaultMessage: "Your response to <a>{formTitle}</a>",
                                values: {
                                    a: t => (0, i.jsx)("a", {
                                        href: e.formUrl,
                                        style: h.style1,
                                        children: t
                                    }),
                                    formTitle: e.formTitle
                                }
                            })
                        })
                    }), (0, i.jsx)("div", {
                        children: s.map((e, t) => (0, i.jsx)(b, {
                            questionAndAnswer: e
                        }, t))
                    })]
                })
            }
            let y = {
                style0: {
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: 25
                },
                style1: {
                    fontSize: 24,
                    fontWeight: o(699422).Wy.semibold
                },
                style2: {
                    fontSize: 16,
                    fontWeight: o(699422).Wy.regular,
                    marginTop: 6,
                    wordWrap: "break-word"
                }
            };

            function b({
                questionAndAnswer: e
            }) {
                let t = "" === e.question ? (0, i.jsx)(o(109939).sA, {
                        defaultMessage: "(Untitled question)",
                        id: "FormResponseSnapshotModal.Question.defaultQuestion"
                    }) : e.question,
                    s = "checkbox" === e.questionType ? (0, o(805999).Fc)(e.answer) : e.answer;
                return (0, i.jsxs)("div", {
                    style: y.style0,
                    children: [(0, i.jsx)("span", {
                        style: y.style1,
                        children: t
                    }), (0, i.jsx)("span", {
                        style: y.style2,
                        children: "" !== s ? s : (0, i.jsx)(o(109939).sA, {
                            defaultMessage: "(No answer)",
                            id: "FormResponseSnapshotModal.Answer.defaultAnswer"
                        })
                    })]
                })
            }
            let x = {
                position: "absolute",
                top: 10,
                insetInlineEnd: 10,
                zIndex: 2
            };

            function M({
                formSnapshotData: e,
                handleModalClose: t
            }) {
                let n = (0, o(533992).v3)(),
                    l = (0, o(67499).S)(),
                    r = (0, s.useCallback)(() => {
                        let o = null == l ? void 0 : l.spaceStore,
                            s = null == l ? void 0 : l.spaceViewStore;
                        o && s && a({
                            environment: n,
                            inMemoryRecordCache: n.defaultRecordCache.inMemoryRecordCache,
                            formSnapshotData: e,
                            currentSpaceStore: o,
                            currentSpaceViewStore: s,
                            handleModalClose: t
                        })
                    }, [n, e, t, null == l ? void 0 : l.spaceStore, null == l ? void 0 : l.spaceViewStore]);
                return (0, i.jsx)(o(51831).m, {
                    placement: "bottom",
                    content: () => (0, i.jsx)(o(109939).sA, {
                        defaultMessage: "Save a copy of your response to your private section",
                        id: "FormResponseSnapshotModal.ActionButtons.SavePage.tooltip"
                    }),
                    children: e => (0, i.jsx)("div", {
                        style: x,
                        children: (0, i.jsx)(o(548436).A, {
                            size: "lg",
                            iconLeading: {
                                icon: o(245102).arrowLineDownIcon,
                                colorVariant: "secondary"
                            },
                            onClick: r,
                            ...e,
                            children: (0, i.jsx)(o(109939).sA, {
                                defaultMessage: "Save page",
                                id: "FormResponseSnapshotModal.ActionButtons.SavePage"
                            })
                        })
                    })
                })
            }
            let S = {
                    height: 47,
                    width: "50%",
                    fontSize: 17,
                    borderRadius: 12
                },
                A = {
                    display: "flex",
                    width: "100%",
                    position: "absolute",
                    bottom: 10,
                    gap: 12,
                    zIndex: 2,
                    paddingInlineStart: 10,
                    paddingInlineEnd: 10,
                    paddingBottom: 40
                },
                v = {
                    justifyContent: "center"
                };

            function w({
                handleModalClose: e,
                formSnapshotData: t
            }) {
                let n = (0, o(533992).v3)(),
                    l = (0, o(67499).S)(),
                    r = (0, s.useCallback)(() => {
                        let o = null == l ? void 0 : l.spaceStore,
                            s = null == l ? void 0 : l.spaceViewStore;
                        o && s && a({
                            environment: n,
                            inMemoryRecordCache: n.defaultRecordCache.inMemoryRecordCache,
                            formSnapshotData: t,
                            currentSpaceStore: o,
                            currentSpaceViewStore: s,
                            handleModalClose: e
                        })
                    }, [n, t, e, null == l ? void 0 : l.spaceStore, null == l ? void 0 : l.spaceViewStore]);
                return (0, i.jsxs)("div", {
                    style: A,
                    children: [(0, i.jsx)(o(912946).A, {
                        colorPalette: "blue",
                        onClick: r,
                        style: { ...S,
                            ...v
                        },
                        children: (0, i.jsx)(o(109939).sA, {
                            defaultMessage: "Save",
                            id: "FormResponseSnapshotModal.Mobile.SavePage"
                        })
                    }), (0, i.jsx)(o(548436).A, {
                        size: "lg",
                        onClick: e,
                        style: S,
                        children: (0, i.jsx)(o(109939).sA, {
                            defaultMessage: "Close",
                            id: "FormResponseSnapshotModal.Mobile.Close"
                        })
                    })]
                })
            }
        }
    }
]);