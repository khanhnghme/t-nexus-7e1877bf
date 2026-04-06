"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [18881, 22542], {
        27507: (e, t, n) => {
            n.d(t, {
                h: () => o
            });
            var r = n(296540),
                a = n(474848);
            let o = r.forwardRef(function({
                children: e,
                style: t,
                isRightAligned: o,
                className: l
            }, i) {
                let {
                    baseStyles: s
                } = (0, r.useContext)(n(422575).L8), u = (0, n(960253).I)(() => ({
                    tokenWrapStyle: { ...s.tokenWrapStyle,
                        ...o ? {
                            justifyContent: "end"
                        } : void 0,
                        ...t
                    }
                }), [s.tokenWrapStyle, t, o]);
                return (0, a.jsx)("div", {
                    ref: i,
                    style: u.tokenWrapStyle,
                    className: l,
                    children: e
                })
            })
        },
        227232: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            var r = n(296540),
                a = n(474848);
            let o = r.memo(function(e) {
                var t;
                let {
                    actorOrGroupPointer: o,
                    style: l,
                    shouldShrink: i,
                    withComma: s,
                    avatarSize: u
                } = e, {
                    store: c,
                    baseStyles: d,
                    shouldRenderTooltip: p,
                    propertySchema: y
                } = (0, r.useContext)(n(422575).L8), m = e.tokenFormat ? ? (0, n(916769).Ug)(null == d ? void 0 : d.tokenFormat), v = (0, n(960253).I)(() => ({
                    actorStyle: {
                        margin: 0,
                        lineHeight: 1.5,
                        ...l,
                        ...m === n(696654).NY.Inline && {
                            pointerEvents: "auto"
                        },
                        display: "inline-block"
                    }
                }), [m, l]), x = (0, n(682985).K8)(() => {
                    if (c) return c.getSpaceStore()
                }, [c]), g = (0, n(682985).K8)(() => {
                    if ((0, n(659341).I6)(o)) return;
                    let e = null == c ? void 0 : c.getRecordModel;
                    if (e) return (0, n(197018).xC)({
                        pointer: o,
                        getRecordModel: e
                    })
                }, [o, null == c ? void 0 : c.getRecordModel]);
                if ((0, n(659341).I6)(o)) return void 0 === c ? null : (0, a.jsxs)(r.Fragment, {
                    children: [(0, a.jsx)(n(11444).UISpacePermissionGroupToken, {
                        groupPointer: o,
                        parentStore: c,
                        format: m,
                        isSingle: !1,
                        style: v.actorStyle,
                        avatarSize: u
                    }), s ? ", " : ""]
                });
                let h = g ? ? (0, n(197018).MR)(void 0);
                return (0, a.jsxs)(r.Fragment, {
                    children: [(0, a.jsx)(n(72461).Ay, {
                        actor: h,
                        showRemoveButton: !1,
                        format: m,
                        isSingle: !1,
                        shouldShrink: i,
                        style: v.actorStyle,
                        hasPersonHoverCard: !p || m === n(696654).NY.Inline,
                        tooltipHeader: null == y ? void 0 : y.name,
                        avatarSize: u,
                        spaceStore: x
                    }, null == (t = h.asActor) ? void 0 : t.id), s ? ", " : ""]
                })
            })
        },
        296012: (e, t, n) => {
            n.d(t, {
                a: () => o
            });
            var r = n(296540),
                a = n(474848);
            let o = r.memo(function(e) {
                let {
                    recordPointer: t,
                    parentStore: o,
                    linkify: l,
                    withComma: i,
                    style: s,
                    noUnderline: u,
                    noWrap: c,
                    disableTooltip: d
                } = e, {
                    canEdit: p,
                    shouldWrap: y,
                    baseStyles: m,
                    containerRef: v
                } = (0, r.useContext)(n(422575).L8), x = (0, n(916769).Ug)(null == m ? void 0 : m.tokenFormat), g = n(970831).B.createChildStore(o, {
                    table: n(832375).evP,
                    id: t.id
                }), h = (0, n(682985).K8)(() => (null == g ? void 0 : g.getType()) === "external_object_instance_page", [g]), f = (0, n(960253).I)(() => ({
                    relationToken: {
                        margin: 0,
                        ...s
                    }
                }), [s]);
                return (0, a.jsxs)(r.Fragment, {
                    children: [(0, a.jsx)(n(448860).A, {
                        blockId: t.id,
                        isSingle: !1,
                        parentStore: o,
                        shouldWrap: y && !c,
                        format: x,
                        style: f.relationToken,
                        containingParentRef: v,
                        noUnderline: u,
                        disableTooltip: d,
                        disableLinks: "never" === l || "whenReadOnly" === l && p && !h
                    }, t.id), i ? ", " : ""]
                })
            })
        },
        302675: (e, t, n) => {
            n.d(t, {
                X: () => o
            });
            var r = n(296540),
                a = n(474848);
            let o = r.memo(function(e) {
                let {
                    linkValue: t,
                    style: o,
                    store: l,
                    shouldDisableLinks: i,
                    shouldLockImageAspectRatio: s
                } = e, u = l.pointer, {
                    url: c,
                    name: d
                } = t, {
                    baseStyles: p
                } = (0, r.useContext)(n(422575).L8), y = (0, n(533992).v3)(), m = y.device.isRetina, v = (0, r.useRef)(null), x = (null == p ? void 0 : p.sizing) ? ? "default", g = "small" === x ? 20 : "large" === x ? 28 : 24, h = (0, n(960253).I)(() => ({
                    fileTextStyle: {
                        display: "inline-block",
                        height: g,
                        lineHeight: `${g}px`,
                        borderRadius: 4,
                        background: n(632079).Tj.background.tertiaryTranslucent,
                        fontSize: n(418676).Kw,
                        padding: "0px 6px",
                        maxWidth: 120,
                        minWidth: 40,
                        ...i ? {} : {
                            cursor: "pointer"
                        },
                        ...n(699422).RC,
                        ...o
                    },
                    fileImageStyle: {
                        maxHeight: g,
                        borderRadius: 4,
                        ...i ? {} : {
                            cursor: "zoom-in"
                        },
                        ...s ? {
                            maxHeight: g,
                            minHeight: g,
                            maxWidth: g,
                            minWidth: g,
                            objectFit: "cover"
                        } : {},
                        ...o
                    }
                }), [i, g, s, o]), f = (0, r.useCallback)((e, t) => {
                    if (!t) return null;
                    let r = i ? void 0 : (0, n(702407).T)({
                        imageRef: v,
                        url: c,
                        blockStore: l,
                        environment: y
                    });
                    return (0, a.jsx)("img", {
                        ref: v,
                        src: t,
                        style: h.fileImageStyle,
                        onClick: r
                    }, c)
                }, [i, y, l, h.fileImageStyle, c]);
                return (0, n(939438).rS)({
                    url: c
                }) ? (0, a.jsx)(n(738251).A, {
                    url: c,
                    isAuthenticated: !0,
                    permissionRecord: u,
                    width: m ? 2 * g : g,
                    render: f
                }, c) : (0, a.jsx)("span", {
                    style: h.fileTextStyle,
                    onClick: i ? void 0 : e => {
                        e.preventDefault(), e.stopPropagation();
                        let t = n(218744).default.getConfigKey("file_block_download", "force_download_extensions"),
                            r = (0, n(728601).YR)({
                                url: c,
                                forceDownloadExtensions: t
                            });
                        n(222365).OG(y, {
                            url: c,
                            type: "file",
                            from: "view_original",
                            downloadName: d,
                            permissionRecord: u,
                            download: r
                        })
                    },
                    children: (0, a.jsx)(n(503473).j, {
                        children: d
                    })
                }, c)
            })
        },
        348565: (e, t, n) => {
            n.d(t, {
                X: () => o
            });
            var r = n(296540),
                a = n(474848);
            let o = r.memo(function(e) {
                let t, {
                        value: o,
                        description: l,
                        color: i,
                        shouldShrink: s,
                        type: u,
                        style: c,
                        shouldShowTooltip: d
                    } = e,
                    p = "status" === u ? e.groupColor ? ? "default" : void 0,
                    {
                        baseStyles: y
                    } = (0, r.useContext)(n(422575).L8),
                    m = (0, n(916769).Ug)(e.tokenFormat ? ? (null == y ? void 0 : y.tokenFormat)),
                    v = (0, n(960253).I)(() => ({
                        token: {
                            margin: 0,
                            ...n(699422).RC,
                            ...c
                        }
                    }), [c]);
                if (!o) return null;
                let {
                    textColor: x,
                    backgroundColor: g
                } = (0, n(632079).LD)(n(632079).Tj, i ? ? p);
                return "status" === u && (t = i || p || "gray"), (0, a.jsx)(n(628462).A, {
                    format: m,
                    value: (0, a.jsx)(n(93594).A, {
                        children: o
                    }),
                    description: l,
                    color: x,
                    backgroundColor: g,
                    showRemoveButton: !1,
                    shouldShrink: s,
                    isRound: "status" === u,
                    isSingle: !1,
                    showColoredDot: t,
                    showTooltip: d ? "always" : "never",
                    tooltipPlacement: "top",
                    style: v.token,
                    tooltipClassName: n(828432).Efz
                })
            })
        },
        349761: (e, t, n) => {
            function r(e) {
                return "type" in e && (e.type === n(944897).IA.CalledFunctionOnEmptyValue || e.type === n(944897).IA.CallingFunctionWithUnknownTarget || e.type === n(944897).IA.CallingFunctionWithUnknownArgument) ? "warning" : "error"
            }

            function a(e) {
                switch (e) {
                    case "checkbox":
                        return "boolean";
                    case "number":
                        return "number";
                    case "text":
                        return "text";
                    case "date":
                        return "date";
                    case "array":
                        return "array";
                    case "block":
                        return "block";
                    case "person":
                        return "person";
                    case "select":
                        return "select";
                    case "function":
                        return "function";
                    case "unknown":
                        return "unknown";
                    case "undefined":
                        return "undefined";
                    default:
                        (0, n(722371).HB)(e)
                }
            }

            function o(e) {
                switch (e.type) {
                    case n(944897).M9.InvalidCharacter:
                        return { ...n(649210).x0.InvalidCharacter,
                            values: {
                                errorCharacter: e.character
                            }
                        };
                    case n(944897).M9.UnclosedStringLiteral:
                        return n(649210).x0.UnclosedStringLiteral;
                    case n(944897).M9.UnclosedComment:
                        return n(649210).x0.UnclosedComment;
                    case n(944897).M9.TokenExpected:
                        return { ...n(649210).x0.TokenExpected,
                            values: {
                                expectedToken: e.token
                            }
                        };
                    case n(944897).M9.StringLiteralContainsToken:
                        return n(649210).x0.StringLiteralContainsToken;
                    case n(944897).M9.ExpressionExpected:
                        return n(649210).x0.ExpressionExpected;
                    case n(944897).M9.PropertyTokenOrFunctionExpected:
                        return n(649210).x0.PropertyTokenOrFunctionExpected;
                    case n(944897).M9.EndOfInputExpected:
                        return n(649210).x0.EndOfInputExpected;
                    case n(944897).M9.UnexpectedError:
                        return n(649210).x0.UnexpectedError;
                    case n(944897).M9.TooDeeplyNested:
                        return n(649210).x0.TooDeeplyNested;
                    default:
                        (0, n(722371).HB)(e)
                }
            }

            function l(e) {
                switch (e.type) {
                    case n(944897).IA.FunctionCallArgumentWrongType:
                    case n(944897).IA.FunctionCallUnexpectedArgument:
                        return e.argument;
                    default:
                        return e.node
                }
            }

            function i(e, t) {
                let r;
                switch (t.type) {
                    case n(944897).IA.ThisRowTypeNotFound:
                        r = n(649210).Xz.ThisRowTypeNotFound;
                        break;
                    case n(944897).IA.ThisRowNotBlockWithCollection:
                        r = n(649210).Xz.ThisRowNotBlockWithCollection;
                        break;
                    case n(944897).IA.MissingPropertyOnThisRow:
                        r = { ...n(649210).Xz.MissingPropertyOnThisRow,
                            values: {
                                propertyName: t.property
                            }
                        };
                        break;
                    case n(944897).IA.MissingContextVariable:
                        {
                            let e = (0, n(297493).ix)(t.token) ? t.token.contextValueId : t.token.valueId;r = { ...n(649210).Xz.MissingContextVariable,
                                values: {
                                    valueId: e
                                }
                            }
                        }
                        break;
                    case n(944897).IA.MissingBlock:
                        r = { ...n(649210).Xz.MissingBlock,
                            values: {
                                blockId: t.token.blockId
                            }
                        };
                        break;
                    case n(944897).IA.CallingNotFunction:
                        r = { ...n(649210).Xz.CallingNotFunction,
                            values: {
                                expressionType: a(t.callee.type.type)
                            }
                        };
                        break;
                    case n(944897).IA.FunctionCallTooFewArguments:
                        r = { ...n(649210).Xz.FunctionCallTooFewArguments,
                            values: {
                                minNumParameters: t.minNumParameters,
                                functionName: t.libraryFunction.name,
                                numArguments: t.numArguments
                            }
                        };
                        break;
                    case n(944897).IA.FunctionCallUnexpectedArgument:
                        r = { ...n(649210).Xz.FunctionCallUnexpectedArgument,
                            values: {
                                functionName: t.libraryFunction.name
                            }
                        };
                        break;
                    case n(944897).IA.FunctionCallArgumentWrongType:
                        r = { ...n(649210).Xz.FunctionCallArgumentWrongType,
                            values: {
                                argumentType: a(t.argument.type.type),
                                functionName: t.libraryFunction.name
                            }
                        };
                        break;
                    case n(944897).IA.CallingFunctionWithUnknownArgument:
                        {
                            let e = Array.isArray(t.expectedParameter.type) ? t.expectedParameter.type[0] : t.expectedParameter.type,
                                o = "expression" === e.type ? "expression" : a(e.type);r = { ...n(649210).Xz.CallingFunctionWithUnknownArgument,
                                values: {
                                    functionName: t.libraryFunction.name,
                                    expectedType: o
                                }
                            };
                            break
                        }
                    case n(944897).IA.MemberPropertyMismatchCollection:
                        r = { ...n(649210).Xz.MemberPropertyMismatchCollection,
                            values: {
                                propertyName: t.token.property
                            }
                        };
                        break;
                    case n(944897).IA.MemberPropertyMissing:
                        r = { ...n(649210).Xz.MemberPropertyMissing,
                            values: {
                                propertyName: t.property
                            }
                        };
                        break;
                    case n(944897).IA.MemberPropertyTargetNotBlock:
                        r = n(649210).Xz.MemberPropertyTargetNotBlock;
                        break;
                    case n(944897).IA.MemberPropertyTypeInvalid:
                        r = { ...n(649210).Xz.MemberPropertyTypeInvalid,
                            values: {
                                propertyName: t.propertyName,
                                propertyType: t.propertyType
                            }
                        };
                        break;
                    case n(944897).IA.UndefinedIdentifier:
                        r = { ...n(649210).Xz.UndefinedIdentifier,
                            values: {
                                identifier: t.node.text
                            }
                        };
                        break;
                    case n(944897).IA.InvalidPropCall:
                        r = { ...n(649210).Xz.InvalidPropCall,
                            values: {
                                propertyName: t.name
                            }
                        };
                        break;
                    case n(944897).IA.InvalidContextCall:
                        r = { ...n(649210).Xz.InvalidContextCall,
                            values: {
                                variableName: t.name
                            }
                        };
                        break;
                    case n(944897).IA.InvalidVariableCall:
                        r = { ...n(649210).Xz.InvalidVariableCall,
                            values: {
                                variableName: t.name
                            }
                        };
                        break;
                    case n(944897).IA.UnifiedFunctionCannotFindFunction:
                        r = { ...n(649210).Xz.UnifiedFunctionCannotFindFunction,
                            values: {
                                functionName: t.name
                            }
                        };
                        break;
                    case n(944897).IA.UnifiedFunctionNoArguments:
                        r = { ...n(649210).Xz.UnifiedFunctionNoArguments,
                            values: {
                                functionName: t.libraryFunction.name
                            }
                        };
                        break;
                    case n(944897).IA.UnifiedFunctionTargetWrongType:
                        r = { ...n(649210).Xz.UnifiedFunctionTargetWrongType,
                            values: {
                                functionName: t.libraryFunction.name,
                                targetType: a(t.expression.type.type)
                            }
                        };
                        break;
                    case n(944897).IA.CallingFunctionWithUnknownTarget:
                        {
                            let e = Array.isArray(t.expectedParameter.type) ? t.expectedParameter.type[0] : t.expectedParameter.type,
                                o = "expression" === e.type ? "expression" : a(e.type);r = { ...n(649210).Xz.CallingFunctionWithUnknownTarget,
                                values: {
                                    functionName: t.libraryFunction.name,
                                    expectedType: o
                                }
                            };
                            break
                        }
                    case n(944897).IA.CannotRelativelyCompareTypes:
                        r = { ...n(649210).Xz.CannotRelativelyCompareTypes,
                            values: {
                                lhsType: a(t.lhsType.type),
                                rhsType: a(t.rhsType.type)
                            }
                        };
                        break;
                    case n(944897).IA.CannotDoMathOnType:
                        r = { ...n(649210).Xz.CannotDoMathOnType,
                            values: {
                                lhsType: a(t.lhsType.type),
                                rhsType: a(t.rhsType.type)
                            }
                        };
                        break;
                    case n(944897).IA.UnaryMinusOnNonNumber:
                        r = { ...n(649210).Xz.UnaryMinusOnNonNumber,
                            values: {
                                type: a(t.expression.type.type)
                            }
                        };
                        break;
                    case n(944897).IA.IdentifierExpected:
                        r = n(649210).Xz.IdentifierExpected;
                        break;
                    case n(944897).IA.FunctionCallExpected:
                        r = { ...n(649210).Xz.FunctionCallExpected,
                            values: {
                                functionName: t.functionName
                            }
                        };
                        break;
                    case n(944897).IA.RenamedIdentifier:
                        r = { ...n(649210).Xz.RenamedIdentifier,
                            values: {
                                identifier: t.identifier,
                                renamedTo: t.renamedTo
                            }
                        };
                        break;
                    case n(944897).IA.RemovedFunction:
                        r = { ...n(649210).Xz.RemovedFunction,
                            values: {
                                functionName: t.functionName,
                                alternative: t.alternative
                            }
                        };
                        break;
                    case n(944897).IA.ContextVariableNotBlockWithCollection:
                        r = { ...n(649210).Xz.ContextVariableNotBlockWithCollection,
                            values: {
                                valueId: t.token.contextValueId
                            }
                        };
                        break;
                    case n(944897).IA.MissingPropertyOnContextVariable:
                        r = { ...n(649210).Xz.MissingPropertyOnContextVariable,
                            values: {
                                propertyName: t.property,
                                valueId: t.token.contextValueId
                            }
                        };
                        break;
                    case n(944897).IA.BlockPropertyTypeInvalid:
                        r = { ...n(649210).Xz.BlockPropertyTypeInvalid,
                            values: {
                                propertyName: t.propertyName
                            }
                        };
                        break;
                    case n(944897).IA.DisallowedReturnType:
                        {
                            let a = t.allowedReturnTypes.map(t => e.formatMessage((0, n(345091).getHumanReadableType)(t)).toLocaleLowerCase());r = { ...n(649210).Xz.DisallowedReturnType,
                                values: {
                                    allowedReturnType: e.formatList(a, {
                                        style: "long",
                                        type: "conjunction"
                                    }),
                                    allowedReturnTypeCount: t.allowedReturnTypes.length,
                                    returnType: e.formatMessage((0, n(345091).getHumanReadableType)(t.returnType)).toLocaleLowerCase()
                                }
                            };
                            break
                        }
                    case n(944897).IA.CrossSpacePropertyNotSupported:
                        r = { ...n(649210).Xz.CrossSpacePropertyNotSupported
                        };
                        break;
                    case n(944897).IA.CalledFunctionOnEmptyValue:
                        r = { ...n(649210).Xz.CalledFunctionOnEmptyValue
                        };
                        break;
                    case n(944897).IA.UnsafeRegexPattern:
                        r = "too_many_quantifiers" === t.reason ? { ...n(649210).tB.TooManyQuantifiers
                        } : { ...n(649210).Xz.UnsafeRegexPattern
                        };
                        break;
                    default:
                        (0, n(722371).HB)(t)
                }
                return { ...r,
                    values: { ...r.values,
                        startOffset: t.node.startOffset,
                        endOffset: t.node.endOffset + 1
                    }
                }
            }

            function s(e, t) {
                let r;
                switch (t.type) {
                    case n(944897).uW.MissingThisRow:
                        r = n(649210).X8.MissingThisRow;
                        break;
                    case n(944897).uW.MissingSchemaPropertyOnThisRow:
                        r = { ...n(649210).X8.MissingSchemaPropertyOnThisRow,
                            values: {
                                propertyName: t.property
                            }
                        };
                        break;
                    case n(944897).uW.ThisRowBlockPropertyMismatchCollection:
                        r = n(649210).X8.ThisRowBlockPropertyMismatchCollection;
                        break;
                    case n(944897).uW.MissingContextVariable:
                        r = { ...n(649210).X8.MissingContextVariable,
                            values: {
                                valueId: t.valueId
                            }
                        };
                        break;
                    case n(944897).uW.IdentifierNotFound:
                        r = { ...n(649210).X8.IdentifierNotFound,
                            values: {
                                identifier: t.node.text
                            }
                        };
                        break;
                    case n(944897).uW.CannotRelativelyCompareTypes:
                        r = { ...n(649210).X8.CannotRelativelyCompareTypes,
                            values: {
                                lhsType: a(t.lhsType),
                                rhsType: a(t.rhsType)
                            }
                        };
                        break;
                    case n(944897).uW.CannotDoMathOnType:
                        r = { ...n(649210).X8.CannotDoMathOnType,
                            values: {
                                valueType: a(t.valueType)
                            }
                        };
                        break;
                    case n(944897).uW.CannotCallNonFunction:
                        r = { ...n(649210).X8.CannotCallNonFunction,
                            values: {
                                calleeType: a(t.calleeType)
                            }
                        };
                        break;
                    case n(944897).uW.UnifiedFunctionPropertyNotFound:
                        r = { ...n(649210).X8.UnifiedFunctionPropertyNotFound,
                            values: {
                                functionName: t.node.name
                            }
                        };
                        break;
                    case n(944897).uW.LibraryFunctionExecutionError:
                        let o = t.error instanceof n(944897).x4 ? t.error : void 0;
                        r = (null == o ? void 0 : o.info.type) === n(944897).v3.DateInvalidDurationUnit ? { ...n(649210).gW.DateInvalidDurationUnit,
                            values: {
                                functionName: t.libraryFunction.name,
                                invalidUnit: o.info.invalidUnit
                            }
                        } : (null == o ? void 0 : o.info.type) === n(944897).v3.CannotUseToNumberOnList ? { ...n(649210).gW.CannotUseToNumberOnList
                        } : (null == o ? void 0 : o.info.type) === n(944897).v3.CannotRoundToNonInteger ? { ...n(649210).gW.CannotRoundToNonInteger,
                            values: {
                                precision: o.info.precision
                            }
                        } : (null == o ? void 0 : o.info.type) === n(944897).v3.CannotRoundToTooManyDecimalPlaces ? { ...n(649210).gW.CannotRoundToTooManyDecimalPlaces,
                            values: {
                                precision: o.info.precision
                            }
                        } : (null == o ? void 0 : o.info.type) === n(944897).v3.NumberFormatInvalid ? { ...n(649210).gW.NumberFormatInvalid,
                            values: {
                                invalidFormat: o.info.invalidFormat
                            }
                        } : { ...n(649210).X8.LibraryFunctionExecutionError,
                            values: {
                                functionName: t.libraryFunction.name
                            }
                        };
                        break;
                    case n(944897).uW.FunctionCallTooFewArguments:
                        r = { ...n(649210).X8.FunctionCallTooFewArguments,
                            values: {
                                functionName: t.libraryFunction.name
                            }
                        };
                        break;
                    case n(944897).uW.FunctionCallUnexpectedArgument:
                        r = { ...n(649210).X8.FunctionCallUnexpectedArgument,
                            values: {
                                functionName: t.libraryFunction.name
                            }
                        };
                        break;
                    case n(944897).uW.FunctionCallArgumentWrongType:
                        r = { ...n(649210).X8.FunctionCallArgumentWrongType,
                            values: {
                                functionName: t.libraryFunction.name,
                                argumentType: a(t.argumentType)
                            }
                        };
                        break;
                    case n(944897).uW.AccessingPropertyOnNonBlock:
                        r = n(649210).X8.AccessingPropertyOnNonBlock;
                        break;
                    case n(944897).uW.MissingDataDependencyBlock:
                        r = { ...n(649210).X8.MissingDataDependencyBlock,
                            values: {
                                blockId: t.blockPointer.id
                            }
                        };
                        break;
                    case n(944897).uW.MissingDataDependencyPerson:
                        r = { ...n(649210).X8.MissingDataDependencyPerson,
                            values: {
                                personId: t.personPointer.id
                            }
                        };
                        break;
                    case n(944897).uW.MemberPropertyMismatchCollection:
                        r = n(649210).X8.MemberPropertyMismatchCollection;
                        break;
                    case n(944897).uW.MissingPropertyOnSchemaForMemberProperty:
                        r = n(649210).X8.MissingPropertyOnSchemaForMemberProperty;
                        break;
                    case n(944897).uW.UnaryMinusOnNonNumber:
                        r = { ...n(649210).X8.UnaryMinusOnNonNumber,
                            values: {
                                expressionType: a(t.expressionType)
                            }
                        };
                        break;
                    case n(944897).uW.UnexpectedRecoveryNode:
                        r = n(649210).X8.UnexpectedRecoveryNode;
                        break;
                    case n(944897).uW.UnexpectedError:
                        r = n(649210).X8.UnexpectedError;
                        break;
                    case n(944897).uW.DepthExceeded:
                        r = n(649210).X8.DepthExceeded;
                        break;
                    case n(944897).uW.CycleDetected:
                        r = n(649210).X8.CycleDetected;
                        break;
                    case n(944897).uW.DownstreamParseFailure:
                        r = n(649210).X8.DownstreamParseFailure;
                        break;
                    case n(944897).uW.MaxEvaluationTimeExceeded:
                        r = n(649210).X8.MaxEvaluationTimeExceeded;
                        break;
                    case n(944897).uW.MissingSchemaPropertyOnCollection:
                        r = { ...n(649210).X8.MissingSchemaPropertyOnCollection,
                            values: {
                                collectionId: t.collectionId,
                                propertyName: t.property
                            }
                        };
                        break;
                    case n(944897).uW.ContextVariableWrongType:
                        r = { ...n(649210).X8.ContextVariableWrongType,
                            values: {
                                expectedType: t.expectedType,
                                propertyType: t.resultType,
                                valueId: t.valueId
                            }
                        };
                        break;
                    case n(944897).uW.DisallowedValueType:
                        {
                            let a = t.allowedValueTypes.map(t => e.formatMessage((0, n(345091).getHumanReadableType)(t)).toLocaleLowerCase());r = { ...n(649210).Xz.DisallowedReturnType,
                                values: {
                                    allowedValueType: e.formatList(a, {
                                        style: "long",
                                        type: "conjunction"
                                    }),
                                    allowedValueTypeCount: t.allowedValueTypes.length,
                                    valueType: e.formatMessage((0, n(345091).getHumanReadableValueType)(t.expressionValue)).toLocaleLowerCase()
                                }
                            };
                            break
                        }
                    case n(944897).uW.TotalDependencyLimitExceeded:
                        r = { ...n(649210).X8.TotalDependencyLimitExceeded,
                            values: {
                                totalLoaded: t.totalLoaded,
                                limit: t.limit
                            }
                        };
                        break;
                    case n(944897).uW.PerFormulaDependencyLimitExceeded:
                        r = { ...n(649210).X8.PerFormulaDependencyLimitExceeded,
                            values: {
                                perFormulaLoaded: t.perFormulaLoaded,
                                limit: t.limit
                            }
                        };
                        break;
                    default:
                        (0, n(722371).HB)(t)
                }
                return (0, n(297493).li)(t) ? { ...r,
                    values: { ...r.values,
                        startOffset: t.node.startOffset,
                        endOffset: t.node.endOffset + 1
                    }
                } : r
            }

            function u(e) {
                let t = null == e ? void 0 : e.values;
                return [n(381453).cJ(e, "values"), t]
            }

            function c(e) {
                return e.type === n(944897).uW.DepthExceeded || e.type === n(944897).uW.CycleDetected || e.type === n(944897).uW.MaxEvaluationTimeExceeded || e.type === n(944897).uW.LibraryFunctionExecutionError
            }
            n.d(t, {
                SA: () => r,
                eJ: () => c,
                ew: () => u,
                ml: () => o,
                rA: () => i,
                yI: () => s,
                zf: () => l
            }), n(581454)
        },
        352711: (e, t, n) => {
            n.d(t, {
                O: () => function e(t, r, a) {
                    if (void 0 === t) return [];
                    switch (t.type) {
                        case "text":
                            let o = (0, n(458230).r4)({
                                textValue: t.value,
                                getRecordModel: r,
                                userTimeZone: a,
                                intl: n(962299).A.getIntl(),
                                deterministic: !0
                            });
                            if (0 === o.length) return [];
                            return [{
                                id: o,
                                type: "text",
                                value: t.value
                            }];
                        case "block":
                            return [{
                                id: t.value.id,
                                type: "relation",
                                value: t.value
                            }];
                        case "date":
                            return [{
                                id: (0, n(850640).ZF)({
                                    allowRelativeDates: !1,
                                    value: t.value,
                                    userTimeZone: (0, n(714350).P)(),
                                    intl: n(962299).A.getIntl()
                                }),
                                type: "date",
                                value: t.value
                            }];
                        case "checkbox":
                            return [{
                                id: t.value,
                                type: "checkbox",
                                value: t.value
                            }];
                        case "number":
                            return [{
                                id: t.value,
                                type: "number",
                                value: t.value
                            }];
                        case "person":
                            return [{
                                id: t.value.id,
                                type: "person",
                                value: t.value
                            }];
                        case "array":
                            return t.values.flatMap(t => e(t, r, a));
                        case "undefined":
                        case "function":
                            return [];
                        default:
                            (0, n(722371).HB)(t)
                    }
                }
            }), n(898992), n(430670)
        },
        361724: (e, t, n) => {
            n.d(t, {
                C: () => o
            });
            var r = n(296540),
                a = n(474848);
            let o = r.forwardRef(function({
                children: e,
                fontColor: t,
                style: o,
                isRightAligned: l,
                isEmpty: i
            }, s) {
                let {
                    baseStyles: u
                } = (0, r.useContext)(n(422575).L8), c = (0, n(960253).I)(() => ({
                    textStyle: { ...i ? u.emptyTextStyle ? ? u.textStyle : u.textStyle,
                        ...o,
                        ...l ? {
                            justifyContent: "right",
                            textAlign: "end"
                        } : {},
                        ..."light" === t ? {
                            color: n(632079).Tj.text.tertiary
                        } : {}
                    }
                }), [i, u.emptyTextStyle, u.textStyle, o, l, t]);
                return (0, a.jsx)("div", {
                    ref: s,
                    style: c.textStyle,
                    children: e
                })
            })
        },
        435524: (e, t, n) => {
            n.d(t, {
                o: () => l
            }), n(898992), n(354520);
            var r = n(296540),
                a = n(474848);
            let o = {
                    maxWidth: "100%"
                },
                l = r.memo(function(e) {
                    var t;
                    let {
                        propertyLabel: l,
                        checked: i,
                        enablePointerEventsForInteractiveTypes: s,
                        onClick: u,
                        disabled: c,
                        tooltip: d,
                        withComma: p,
                        store: y,
                        property: m
                    } = e, {
                        baseStyles: v
                    } = (0, r.useContext)(n(422575).L8), x = (0, n(682985).K8)(() => {
                        if (y) return (0, n(966980).O3)(y, {
                            includePropertyDiscussions: !0
                        }).filter(e => e.getPropertyId() === m)
                    }, [y, m]), g = x && null != (t = x[0]) && t.id ? (0, n(762507).wV)({
                        discussionId: x[0].id
                    }) : void 0, h = (null == v ? void 0 : v.sizing) ? ? "default", f = "small" === h ? 14 : 16, b = (0, n(960253).I)(() => ({
                        cardCheckboxWrapStyle: {
                            display: "flex",
                            alignItems: "center",
                            lineHeight: `${f}px`,
                            height: "100%"
                        },
                        cardCheckboxNameStyle: {
                            marginInlineStart: "small" === h ? 5 : 6,
                            marginInlineEnd: 2,
                            ...n(699422).RC
                        },
                        checkboxStyle: { ...s && {
                                pointerEvents: "auto"
                            }
                        }
                    }), [h, f, s]), k = (0, r.useMemo)(() => (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(n(51831).m, {
                            disableTooltip: !d,
                            content: () => d,
                            children: e => (0, a.jsx)(n(349050).S, {
                                checked: i,
                                disabled: c,
                                style: b.checkboxStyle,
                                onClick: u,
                                size: f,
                                ...e
                            })
                        }), p ? ", " : ""]
                    }), [f, i, c, u, d, p, b.checkboxStyle]);
                    return (0, a.jsx)("div", {
                        className: g,
                        style: o,
                        children: l ? (0, a.jsxs)("div", {
                            style: b.cardCheckboxWrapStyle,
                            children: [k, (0, a.jsx)("div", {
                                style: b.cardCheckboxNameStyle,
                                children: l
                            })]
                        }) : k
                    })
                })
        },
        469316: (e, t, n) => {
            n.d(t, {
                E: () => o
            }), n(898992), n(354520);
            var r = n(296540),
                a = n(474848);

            function o(e) {
                var t, o;
                let l, {
                        numberValue: i,
                        numberFormatOverride: s,
                        numberPrecisionOverride: u,
                        withComma: c,
                        isRightAligned: d,
                        store: p,
                        property: y,
                        fullWidthBar: m
                    } = e,
                    {
                        baseStyles: v,
                        propertySchema: x,
                        shouldRenderTooltip: g,
                        shouldWrap: h
                    } = (0, r.useContext)(n(422575).L8),
                    f = (0, n(960253).e)(),
                    b = (0, n(682985).K8)(() => {
                        if (p) return (0, n(966980).O3)(p, {
                            includePropertyDiscussions: !0
                        }).filter(e => e.getPropertyId() === y)
                    }, [p, y]),
                    k = (0, n(486536).v)({
                        blockId: null == p ? void 0 : p.id,
                        propertyId: y
                    });
                b && null != (t = b[0]) && t.id && (l = (0, n(762507).wV)({
                    discussionId: b[0].id
                }));
                let C = b && b.length > 0,
                    T = (null == v ? void 0 : v.sizing) ? ? "default",
                    I = (0, n(960253).I)(() => {
                        var e, t, r, a, o;
                        let l = (null == x || null == (e = x.show_as) ? void 0 : e.type) === "bar" || (null == x || null == (t = x.show_as) ? void 0 : t.type) === "ring",
                            i = m ? void 0 : 160;
                        return {
                            style: { ...!l && {
                                    display: void 0
                                },
                                ...l ? {
                                    flex: "1 0 auto",
                                    justifyContent: d ? "flex-end" : void 0
                                } : {},
                                ...!h && {
                                    display: l ? "inline-flex" : "inline",
                                    textWrap: "nowrap"
                                },
                                fontSize: null == v || null == (r = v.textStyle) ? void 0 : r.fontSize,
                                lineHeight: null == v || null == (a = v.textStyle) ? void 0 : a.lineHeight,
                                ...(C || k) && (0, n(605351).sQ)(f),
                                ..."large" === T && (null == x || null == (o = x.show_as) ? void 0 : o.type) === "bar" && {
                                    flexDirection: "column",
                                    alignItems: void 0
                                },
                                ...v.textStyle
                            },
                            barStyle: { ..."large" === T && {
                                    flexGrow: 1,
                                    minWidth: 48,
                                    maxWidth: m ? void 0 : "min(100%, 250px)",
                                    height: 10,
                                    marginBottom: 4
                                },
                                ..."small" === T && {
                                    flexGrow: 1,
                                    minWidth: 48,
                                    maxWidth: m ? void 0 : 120
                                },
                                ..."default" === T && {
                                    flexGrow: 1,
                                    minWidth: 48,
                                    maxWidth: i
                                }
                            }
                        }
                    }, [null == x || null == (o = x.show_as) ? void 0 : o.type, d, h, v.textStyle, C, k, f, T, m]),
                    [w, A] = (0, r.useMemo)(() => [s || (null == x ? void 0 : x.type) === "number" && (null == x ? void 0 : x.number_format) || n(700369).C4, u || (null == x ? void 0 : x.type) === "number" && (null == x ? void 0 : x.number_precision) || n(700369).pS], [s, u, x]);
                return (0, a.jsx)(n(578083).l, {
                    style: I.style,
                    barStyle: I.barStyle,
                    progressSize: v.textLineHeight,
                    numberValue: i,
                    barHeight: "large" === T ? 8 : 4,
                    ringWidth: "large" === T ? 3 : 2,
                    numberFormat: w,
                    numberPrecision: A,
                    numberShowAs: null == x ? void 0 : x.show_as,
                    shouldRenderTooltip: !g,
                    withComma: c,
                    className: l
                })
            }
        },
        531070: (e, t, n) => {
            n.d(t, {
                GL: () => c,
                Or: () => o,
                Ye: () => u,
                yZ: () => i
            }), n(898992), n(354520);
            var r = n(296540),
                a = n(474848);
            let o = {
                    id: "empty",
                    type: "empty",
                    value: [
                        ["Empty"]
                    ]
                },
                l = {
                    style0: {
                        display: "inline-flex",
                        cursor: "help",
                        color: n(632079).Tj.red.text.primary,
                        alignItems: "center",
                        gap: 3
                    },
                    style1: {
                        opacity: .8,
                        cursor: "help"
                    },
                    style2: {
                        maxWidth: "100%"
                    }
                };

            function i(e) {
                let {
                    token: t,
                    targetPropertySchema: r,
                    blockStore: o,
                    checkboxPropertyLabel: i,
                    withComma: s,
                    numberRightAlign: u,
                    disableLinks: c,
                    shouldTruncate: d,
                    fullWidthBar: p
                } = e, y = (0, n(109939).tz)(), {
                    type: m,
                    value: v
                } = t;
                switch (m) {
                    case "url":
                    case "email":
                    case "phone_number":
                        return (0, a.jsx)(n(763793).LE, {
                            textValue: v,
                            type: m,
                            useShortenedUrl: !1,
                            withComma: s,
                            disableLinkify: c
                        });
                    case "checkbox":
                        return (0, a.jsx)(n(435524).o, {
                            checked: v,
                            propertyLabel: i,
                            disabled: !0,
                            withComma: s
                        });
                    case "number":
                        return (0, a.jsx)(n(469316).E, {
                            numberValue: v,
                            numberFormatOverride: r && "number_format" in r ? null == r ? void 0 : r.number_format : n(700369).C4,
                            numberPrecisionOverride: r && "number_precision" in r ? null == r ? void 0 : r.number_precision : void 0,
                            withComma: s,
                            isRightAligned: u,
                            fullWidthBar: p
                        });
                    case "date":
                        return (0, a.jsx)(n(638185).b, {
                            dateValue: v,
                            dateFormat: r && "date_format" in r ? r.date_format : void 0,
                            timeFormat: r && "time_format" in r ? r.time_format : void 0,
                            withComma: s
                        });
                    case "file":
                        return (0, a.jsx)(n(302675).X, {
                            linkValue: v,
                            store: o,
                            shouldDisableLinks: c
                        });
                    case "person":
                        return (0, a.jsx)(n(227232).A, {
                            actorOrGroupPointer: v,
                            shouldShrink: d,
                            withComma: s
                        });
                    case "relation":
                        return (0, a.jsx)(n(296012).a, {
                            recordPointer: v,
                            parentStore: o,
                            linkify: c ? "never" : "always",
                            withComma: s,
                            noWrap: d,
                            style: { ...d && l.style2
                            }
                        });
                    case "select":
                        return (0, a.jsx)(n(348565).X, {
                            type: t.groupColor ? "status" : "select",
                            value: v,
                            groupColor: t.groupColor,
                            color: t.color,
                            shouldShrink: d
                        });
                    case "text":
                        return (0, a.jsx)(n(644970).A, {
                            textValue: v,
                            parentStore: o,
                            withComma: s,
                            linkifyUrls: !c,
                            disableCommentHighlight: !0,
                            shouldTruncate: d
                        });
                    case "error":
                        return (0, a.jsx)(n(51831).m, {
                            content: () => (0, a.jsx)(n(109939).sA, { ...(0, n(349761).yI)(y, v)
                            }),
                            placement: "top",
                            alignment: "center",
                            children: e => (0, a.jsxs)("div", {
                                style: l.style0,
                                ...e,
                                children: [(0, a.jsx)(n(16275).I, {
                                    icon: n(966559).exclamationMarkCircleSmallIcon,
                                    size: "sm",
                                    colorPalette: "red",
                                    colorVariant: "accentPrimary"
                                }), (0, a.jsx)(n(109939).sA, {
                                    id: "propertyValueToken.error",
                                    defaultMessage: "Error"
                                })]
                            })
                        });
                    case "empty":
                        return (0, a.jsx)(n(51831).m, {
                            content: () => (0, a.jsx)(n(109939).sA, {
                                id: "propertyValueToken.emptyValueTooltip",
                                defaultMessage: "Empty values aren’t displayed but affect formula calculations."
                            }),
                            placement: "top",
                            alignment: "center",
                            children: e => (0, a.jsx)("div", {
                                style: l.style1,
                                ...e,
                                children: (0, a.jsx)(n(644970).A, {
                                    textValue: v,
                                    parentStore: o,
                                    withComma: s,
                                    linkifyUrls: !0
                                })
                            })
                        });
                    default:
                        return (0, n(722371).HB)(m)
                }
            }
            let s = {
                display: "flex",
                flexWrap: "wrap"
            };

            function u({
                children: e,
                propertyType: t,
                rootPropertySchema: o,
                numberRightAlign: l,
                store: i,
                property_id: d
            }) {
                let {
                    shouldWrap: p
                } = (0, r.useContext)(n(422575).L8), y = "number" === t && l, m = (0, n(486536).v)({
                    blockId: null == i ? void 0 : i.id,
                    propertyId: d
                }), v = (0, n(682985).K8)(() => {
                    if (i) return (0, n(966980).O3)(i, {
                        includePropertyDiscussions: !0
                    }).filter(e => e.getPropertyId() === d)
                }, [i, d]), x = (0, n(960253).e)(), g = (0, n(960253).I)(() => ({
                    commentHighlightWrapperStyle: (null == v ? void 0 : v.length) || m ? { ...(0, n(605351).sQ)(x),
                        paddingTop: 8,
                        height: "fit-content",
                        paddingInlineStart: 5,
                        display: "inline-flex"
                    } : {}
                }), [m, null == v ? void 0 : v.length, x]);
                return c(t, o) ? (0, a.jsx)(n(361724).C, {
                    style: { ...g.commentHighlightWrapperStyle,
                        ...p && s
                    },
                    isRightAligned: y,
                    children: e
                }) : (0, a.jsx)(n(27507).h, {
                    isRightAligned: y,
                    style: g.commentHighlightWrapperStyle,
                    children: e
                })
            }

            function c(e, t) {
                var r, a;
                return void 0 !== e && "title" !== e && !!(0, n(916769).YX)(e) && ("number" !== e || (null == t || null == (r = t.show_as) ? void 0 : r.type) !== "bar" && (null == t || null == (a = t.show_as) ? void 0 : a.type) !== "ring")
            }
        },
        638185: (e, t, n) => {
            n.d(t, {
                b: () => o
            }), n(898992), n(354520);
            var r = n(296540),
                a = n(474848);
            let o = r.memo(function(e) {
                var t, o;
                let l, {
                        dateValue: i,
                        dateFormat: s,
                        timeFormat: u,
                        withComma: c,
                        store: d,
                        property: p,
                        formatWithUltraCompactRelativeFormat: y
                    } = e,
                    m = (0, n(960253).e)(),
                    {
                        baseStyles: v,
                        shouldRenderTooltip: x
                    } = (0, r.useContext)(n(422575).L8),
                    g = (0, n(682985).K8)(() => {
                        if (d) return (0, n(966980).O3)(d, {
                            includePropertyDiscussions: !0
                        }).filter(e => e.getPropertyId() === p)
                    }, [d, p]),
                    h = (0, n(486536).v)({
                        blockId: null == d ? void 0 : d.id,
                        propertyId: p
                    }),
                    f = (0, n(960253).I)(() => ({
                        dateBox: { ...v.textStyle,
                            display: "inline",
                            ...(((null == g ? void 0 : g.length) ? ? !1) || h) && (0, n(605351).sQ)(m)
                        }
                    }), [v.textStyle, null == g ? void 0 : g.length, h, m]);
                if (g && null != (t = g[0]) && t.id && (l = (0, n(762507).wV)({
                        discussionId: null == (o = g[0]) ? void 0 : o.id
                    })), y && i) {
                    let e = n(25825).ln(i, (0, n(714350).P)()),
                        t = (0, n(799843).nl)(e, {
                            useCompactFormat: !0,
                            useWeeks: !0,
                            showDaysToOneWeek: !0
                        });
                    return (0, a.jsx)("div", {
                        className: l,
                        style: f.dateBox,
                        children: t
                    })
                }
                return (0, a.jsx)(n(246467).A, {
                    value: i,
                    dateFormat: s ? ? n(943003).vz,
                    timeFormat: u ? ? n(943003).CE,
                    style: f.dateBox,
                    disableTooltip: x || "relative" !== s,
                    withComma: c,
                    displayInUserTimezone: !0,
                    discussionStore: null == g ? void 0 : g[0],
                    className: l
                })
            })
        },
        644970: (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var r = n(296540),
                a = n(474848);
            let o = {
                    style0: {
                        display: "inline",
                        pointerEvents: "auto",
                        ...(0, n(793550).w_)()
                    }
                },
                l = r.memo(function(e) {
                    var t;
                    let {
                        parentStore: l,
                        withComma: i,
                        linkifyUrls: s,
                        disableCommentHighlight: u,
                        disableLinks: c,
                        shouldTruncate: d,
                        clampLines: p,
                        textValue: y
                    } = e, m = (0, n(533992).v3)(), v = (0, n(960253).e)(), x = (0, n(591404).Ol)(), {
                        collectionContextStore: g,
                        property: h
                    } = (0, r.useContext)(n(422575).L8), {
                        collectionViewBlockId: f,
                        collectionViewId: b
                    } = (0, n(682985).K8)(() => {
                        var e, t;
                        return {
                            collectionViewId: null == g || null == (e = g.collectionViewStore()) ? void 0 : e.id,
                            collectionViewBlockId: null == g || null == (t = g.collectionViewBlockStore()) ? void 0 : t.id
                        }
                    }, [g]), {
                        value: k
                    } = (0, n(815048).fJ)(n(406921).V, {
                        disabled: !(void 0 !== (t = y) && (0, n(247438).IcF)(t).length > 0)
                    }), C = (0, n(682985).K8)(() => {
                        let e = n(847591).qu.state,
                            t = n(847591).wb.state;
                        return e && h && y ? n(536614).nu({
                            textValue: y,
                            blockId: l.id,
                            textProps: {
                                type: "page_property_value_match",
                                collectionViewBlockId: f,
                                collectionViewId: b,
                                propertyId: h
                            },
                            find: e,
                            currentFocusedResult: t,
                            store: l
                        }) : y
                    }, [h, l, y, f, b]), T = (0, n(682985).K8)(() => {
                        if (n(332190).A.getPropertyId() !== h || n(332190).A.getBlockStore() !== l) return C;
                        let e = n(332190).A.getMultiSelection();
                        return e ? n(247438).Mwp({
                            textValue: C,
                            selection: {
                                startIndex: e.start.index,
                                endIndex: e.end.index
                            },
                            annotation: [n(247438).Ifu.TemporaryComment]
                        }) : y ? n(247438).Mwp({
                            textValue: C,
                            selection: {
                                startIndex: 0,
                                endIndex: n(247438).qAZ(y).length
                            },
                            annotation: [n(247438).Ifu.TemporaryComment]
                        }) : C
                    }, [l, h, y, C]), I = (0, n(682985).K8)(() => void 0 === T ? null : n(536614).S5({
                        environment: m,
                        textValue: T && {
                            value: T,
                            spaceId: (0, n(226221).e)(l.pointer.spaceId)
                        },
                        parentStore: l,
                        disableHover: !1,
                        disableStyleAnnotations: !1,
                        disableInsertedDeletedAnnotations: !1,
                        disableDateStyleAnnotations: !1,
                        disableSuggestionAnnotations: !1,
                        disableCommentAnnotations: u ? ? !1,
                        disabled: !0,
                        theme: n(632079).Tj,
                        themeMode: v,
                        disableLinks: c ? ? !1,
                        emojiType: x,
                        katex: k,
                        formulaValueTypes: [],
                        stopLinkPropagation: !0,
                        linkTargetBlank: !0
                    }), [T, m, l, u, c, x, k, v], {
                        silenceRerenderDefender: !0
                    }), w = (0, r.useMemo)(() => {
                        if (!s || void 0 === y) return null;
                        let e = (0, n(247438).k4p)(y);
                        return (0, n(147539).A)(e) ? (0, n(561872).MO)(y) : null
                    }, [s, y]), A = (0, n(960253).I)(() => ({
                        text: { ...d && !p ? n(699422).RC : void 0,
                            ...d && p ? { ...(0, n(418676).pA)(p),
                                overflow: "hidden",
                                textOverflow: "ellipsis"
                            } : {}
                        }
                    }), [d, p]);
                    return (0, a.jsxs)("span", {
                        style: A.text,
                        children: [w ? (0, a.jsx)(n(68774).N, {
                            href: w,
                            style: o.style0,
                            external: !0,
                            onClick: e => e.stopPropagation(),
                            children: I
                        }) : I, i ? ", " : null]
                    })
                })
        },
        702407: (e, t, n) => {
            n.d(t, {
                T: () => o
            }), n(296540);
            var r = n(474848);
            let a = {
                position: "relative",
                maxHeight: "100%",
                maxWidth: "100%",
                margin: 0,
                alignSelf: "center",
                width: "100%"
            };

            function o(e) {
                let {
                    imageRef: t,
                    url: o,
                    blockStore: l,
                    environment: i
                } = e;
                return e => {
                    if (e.stopPropagation(), e.preventDefault(), !t.current) return;
                    let s = t.current.getBoundingClientRect(),
                        u = s.width / s.height;
                    n(515260).o9({
                        environment: i,
                        renderFullScreenNode: () => (0, r.jsx)(n(738251).A, {
                            url: o,
                            isAuthenticated: !0,
                            permissionRecord: l.pointer,
                            width: window.innerWidth,
                            render: (e, t) => (0, r.jsx)("img", {
                                src: t,
                                style: a
                            })
                        }),
                        fullScreenNodeRect: s,
                        contentAspectRatio: u,
                        imageUrl: o,
                        blockStore: l
                    })
                }
            }
        },
        941096: (e, t, n) => {
            n.d(t, {
                C: () => o
            });
            let r = Number(n(627179).Xb),
                a = new(n(345426)).ComputedStore(() => n(218744).default.getConfigKey("collection_request_settings", "clientFormulaTimeoutMs") ? ? r, {
                    debugName: "clientFormulaTimeoutMsStore"
                });

            function o() {
                return (0, n(682985).O$)(a)
            }
        }
    }
]);