"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [22542, 23639], {
        168925: (e, t, o) => {
            o.d(t, {
                f: () => n
            });
            let r = (0, o(109939).YK)({
                removeSortingConfirmation: {
                    id: "databaseActions.removeSortingConfirmationDialog.prompt",
                    defaultMessage: "Would you like to remove sorting?"
                },
                removeSortingButton: {
                    id: "databaseActions.removeSortingConfirmationDialog.removeSortingButton.label",
                    defaultMessage: "Remove"
                },
                removeSortingCancel: {
                    id: "databaseActions.removeSortingConfirmationDialog.cancelRemoveSortingButton.label",
                    defaultMessage: "Don’t remove"
                },
                removeCollectionSortingLibraryConfirmation: {
                    id: "databaseActions.removeCollectionSortingLibraryConfirmationDialog.prompt",
                    defaultMessage: "Would you like to change to manual sorting?"
                },
                removeCollectionSortingLibraryButton: {
                    id: "databaseActions.removeCollectionSortingLibraryConfirmationDialog.removeSortingButton.label",
                    defaultMessage: "Yes, use manual sort"
                },
                removeCollectionSortingLibraryCancel: {
                    id: "databaseActions.removeCollectionSortingLibraryConfirmationDialog.cancelRemoveSortingButton.label",
                    defaultMessage: "No, keep last edited"
                }
            });

            function n(e) {
                let {
                    environment: t,
                    collectionContextStore: n
                } = e, i = (0, o(845001).q)(n.capabilitiesStore, n.permissionScopesStore), a = n.collectionViewBlockStore(), l = n.collectionViewStore();
                if (!l || !a) return !1;
                let s = n.currentViewHasSort(),
                    c = (0, o(951390).gv)(n),
                    d = l.getType(),
                    u = n.isInLibraryBlock();
                if ((s || c) && d && o(799514).gP[d] && i) {
                    let {
                        confirmationMessage: e,
                        confirmButtonLabel: i,
                        cancelButtonLabel: a
                    } = u ? {
                        confirmationMessage: r.removeCollectionSortingLibraryConfirmation,
                        confirmButtonLabel: r.removeCollectionSortingLibraryButton,
                        cancelButtonLabel: r.removeCollectionSortingLibraryCancel
                    } : {
                        confirmationMessage: r.removeSortingConfirmation,
                        confirmButtonLabel: r.removeSortingButton,
                        cancelButtonLabel: r.removeSortingCancel
                    };
                    return o(647095).ui({
                        message: o(962299).A.formatMessage(e),
                        items: [{
                            label: o(962299).A.formatMessage(i),
                            color: u ? "blue" : "red",
                            onAccept: () => {
                                var e;
                                let r = null == (e = n.collectionStore()) ? void 0 : e.getSpaceId();
                                (0, o(377796).createAndCommit)({
                                    userAction: "collectionGroupActions.offerToRemoveSort",
                                    environment: t,
                                    cellTarget: r ? {
                                        spaceWithId: r
                                    } : void 0,
                                    canUndo: !0,
                                    perform: e => {
                                        if ((0, o(66177).f)({
                                                collectionViewStore: l,
                                                update: {
                                                    sort: []
                                                },
                                                transaction: e
                                            }), u && (0, o(962165).b)({
                                                collectionContextStore: n
                                            })) {
                                            var r;
                                            let i = o(728372).AppStoreSidebarSpaceViewStore.state,
                                                a = null == (r = n.collectionViewStore()) || null == (r = r.getCollectionSource()) ? void 0 : r.type;
                                            i && (0, o(190566).gX)(a) && (0, o(536806).c)({
                                                environment: t,
                                                transaction: e,
                                                spaceViewStore: i,
                                                update: {
                                                    type: "sortOption",
                                                    value: "manual"
                                                },
                                                sectionType: a
                                            })
                                        }
                                    }
                                });
                                let i = n.temporaryStateStore.state;
                                n.temporaryStateStore.setState({ ...i,
                                    sorts: void 0
                                })
                            }
                        }, {
                            label: o(962299).A.formatMessage(a),
                            onAccept: () => {}
                        }],
                        showCancel: !1,
                        keepFocus: !0
                    }), !0
                }
                return !1
            }
        },
        170013: (e, t, o) => {
            async function r(e) {
                let {
                    navigateToTarget: t,
                    skipUserFacingMessages: r,
                    ...i
                } = e, {
                    environment: a,
                    from: l
                } = i, s = n;
                s = (0, o(94228).yE)(s, o(94228).Nf), s = (0, o(94228).ME)(s), r || (s = (0, o(94228).yE)(s, o(94228).vd), s = (0, o(94228).$2)(s)), t && (s = (0, o(94228).em)(s));
                let c = `duplicateSubtree.${l}`;
                return s = (0, o(94228).NU)({
                    environment: a,
                    runner: s,
                    userAction: c,
                    method: "server_duplicate_subtree",
                    from: l
                }), s = (0, o(94228).E0)({
                    runner: s,
                    userAction: c
                }), await (0, o(94228).Fe)({
                    runner: s,
                    args: i
                })
            }
            async function n(e) {
                let {
                    environment: t,
                    destination: r,
                    options: n,
                    from: i,
                    sourceBlocks: a,
                    listener: l,
                    appendWithoutAfter: s,
                    unlockPages: c
                } = e, d = a[0].getSpaceId(), u = r.parent.spaceId, p = {
                    allowDuplicateSourceIds: n.allowDuplicateSourceIds,
                    allowMixedExistingBlockParents: n.allowMixedExistingBlockParents,
                    allowRedundancy: n.allowRedundancy,
                    appendNumericTitleSuffix: n.addCopyName,
                    resolveTemplateVariables: n.resolveTemplateVariables ? {
                        currentUserId: t.currentUser.id,
                        currentTimeZone: (0, o(714350).P)()
                    } : void 0,
                    excludeCollectionChildren: n.duplicateOnlyCollectionSchema,
                    excludeTransclusionContainerChildren: !n.deepCopyTransclusionContainers,
                    isTemplateInstantiation: n.isTemplateInstantiation,
                    unlockPages: c,
                    sourceBlockUpdateStrategy: n.sourceBlockUpdateStrategy,
                    shouldNavToFirstTarget: n.shouldNavToFirstTarget
                };
                o(773352).log({
                    level: "info",
                    from: "duplicateTo",
                    type: "duplicateSubtree",
                    data: {
                        miscDataToConvertToString: {
                            from: i,
                            duplicateSubtreeOptions: p,
                            sourceSpaceId: d,
                            targetSpaceId: u
                        }
                    }
                }), (0, o(494010).Wy)(r) && !s && void 0 === r.siblingId && a[a.length - 1].getParentId() === r.parent.id && (r.siblingId = a[a.length - 1].id);
                let f = {
                        source: {
                            ids: a.map(e => e.id),
                            spaceId: d
                        },
                        destination: r,
                        options: p,
                        userAction: `duplicateSubtree.${i}`
                    },
                    g = (0, o(259242).UT)({
                        environment: t,
                        eventName: o(916501).$,
                        request: f,
                        multiCellRouting: {
                            spaceIds: (0, o(763230).sb)([d, u])
                        }
                    });
                await (0, o(94228).nN)({
                    environment: t,
                    iterator: g,
                    listener: l,
                    targetSpaceId: u,
                    retryOnMainCell: () => (0, o(259242).UT)({
                        environment: t,
                        eventName: o(916501).$,
                        request: f,
                        multiCellRouting: {
                            spaceIds: []
                        }
                    })
                })
            }

            function i(e) {
                let {
                    options: t,
                    gateName: r,
                    appendWithoutAfter: n,
                    templateInstallationMetadata: i,
                    from: a,
                    sourceBlocks: l,
                    destination: s
                } = e;
                if (!r || !o(218744).default.checkGate({
                        gateName: r
                    })) return !1;
                let c = !t.shouldTranslate && !t.targetLanguage && !t.sourceLanguage && !t.returnRecordIdMap && !n && (!i || !(0, o(252822).Fe)(i.source));
                return c || o(773352).log({
                    level: "warning",
                    from: "duplicateTo",
                    type: "duplicateSubtree_not_supported",
                    data: {
                        miscDataToConvertToString: {
                            options: t,
                            from: a,
                            sourceBlocksIds: l.map(e => e.id),
                            destination: s
                        }
                    }
                }), c
            }
            o.d(t, {
                B: () => i,
                V: () => r
            }), o(581454)
        },
        219083: (e, t, o) => {
            function r(e, t) {
                let r = o(371562).create({
                    arrays: {
                        detectMove: !1,
                        includeValueOnMove: !0
                    }
                }).diff(e, t);
                if (!r) return {
                    beforeOps: {},
                    removeOps: new Set
                };
                let n = [],
                    i = [];
                for (let e in r) "_t" !== e && ("_" === e[0] ? n.push(parseInt(e.slice(1), 10)) : 1 === r[e].length && i.push({
                    index: parseInt(e, 10),
                    value: r[e][0]
                }));
                let a = {},
                    l = new Set,
                    s = [...e];
                n = n.sort((e, t) => e - t);
                for (let e = n.length - 1; e >= 0; e--) {
                    let t = n[e],
                        o = s.splice(t, 1)[0];
                    l.add(o)
                }
                i = i.sort((e, t) => e.index - t.index);
                for (let e = 0; e < i.length; e++) {
                    let t = i[e];
                    a[t.value] = s[t.index], s.splice(t.index, 0, t.value)
                }
                return {
                    beforeOps: a,
                    removeOps: l
                }
            }
            o.d(t, {
                i: () => r
            }), o(944114), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698), o(371562)
        },
        265255: (e, t, o) => {
            o.d(t, {
                d: () => r
            });

            function r() {
                let e = o(728372).AppStoreMainEditorCurrentBlockStore.state;
                return o(475097).default.state.open && o(475097).default.state.targetStore || e
            }
        },
        274749: (e, t, o) => {
            o.d(t, {
                i: () => r
            });

            function r(e) {
                var t;
                return null == (t = e.getSetting("getting_started_templates")) ? void 0 : t.default[0].page_id
            }
        },
        329171: (e, t, o) => {
            o.d(t, {
                n: () => r
            });

            function r(e) {
                return (0, o(862085).Jh)(e) || (0, o(862085).K1)(e)
            }
        },
        340661: (e, t, o) => {
            function r(e) {
                let {
                    environment: t,
                    collectionStore: o,
                    duplicate: r,
                    droppedStores: n,
                    transaction: i,
                    duplicateActions: a,
                    existingBlocks: l,
                    handleDropModule: s
                } = e, {
                    movedStores: c,
                    reparentedStores: d
                } = n.reduce((e, t) => (r || t.getAssociatedCollectionId() !== (null == o ? void 0 : o.id) ? e.reparentedStores.push(t) : e.movedStores.push(t), e), {
                    movedStores: [],
                    reparentedStores: []
                });
                return [...c, ...s ? s.handleDrop({
                    environment: t,
                    droppedStores: d,
                    duplicate: r,
                    transaction: i,
                    resolveTemplateVariables: !1,
                    duplicateActions: a,
                    targetStore: o,
                    existingBlocks: l
                }) : []]
            }
            o.d(t, {
                T: () => r
            }), o(944114), o(898992), o(908872)
        },
        349761: (e, t, o) => {
            function r(e) {
                return "type" in e && (e.type === o(944897).IA.CalledFunctionOnEmptyValue || e.type === o(944897).IA.CallingFunctionWithUnknownTarget || e.type === o(944897).IA.CallingFunctionWithUnknownArgument) ? "warning" : "error"
            }

            function n(e) {
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
                        (0, o(722371).HB)(e)
                }
            }

            function i(e) {
                switch (e.type) {
                    case o(944897).M9.InvalidCharacter:
                        return { ...o(649210).x0.InvalidCharacter,
                            values: {
                                errorCharacter: e.character
                            }
                        };
                    case o(944897).M9.UnclosedStringLiteral:
                        return o(649210).x0.UnclosedStringLiteral;
                    case o(944897).M9.UnclosedComment:
                        return o(649210).x0.UnclosedComment;
                    case o(944897).M9.TokenExpected:
                        return { ...o(649210).x0.TokenExpected,
                            values: {
                                expectedToken: e.token
                            }
                        };
                    case o(944897).M9.StringLiteralContainsToken:
                        return o(649210).x0.StringLiteralContainsToken;
                    case o(944897).M9.ExpressionExpected:
                        return o(649210).x0.ExpressionExpected;
                    case o(944897).M9.PropertyTokenOrFunctionExpected:
                        return o(649210).x0.PropertyTokenOrFunctionExpected;
                    case o(944897).M9.EndOfInputExpected:
                        return o(649210).x0.EndOfInputExpected;
                    case o(944897).M9.UnexpectedError:
                        return o(649210).x0.UnexpectedError;
                    case o(944897).M9.TooDeeplyNested:
                        return o(649210).x0.TooDeeplyNested;
                    default:
                        (0, o(722371).HB)(e)
                }
            }

            function a(e) {
                switch (e.type) {
                    case o(944897).IA.FunctionCallArgumentWrongType:
                    case o(944897).IA.FunctionCallUnexpectedArgument:
                        return e.argument;
                    default:
                        return e.node
                }
            }

            function l(e, t) {
                let r;
                switch (t.type) {
                    case o(944897).IA.ThisRowTypeNotFound:
                        r = o(649210).Xz.ThisRowTypeNotFound;
                        break;
                    case o(944897).IA.ThisRowNotBlockWithCollection:
                        r = o(649210).Xz.ThisRowNotBlockWithCollection;
                        break;
                    case o(944897).IA.MissingPropertyOnThisRow:
                        r = { ...o(649210).Xz.MissingPropertyOnThisRow,
                            values: {
                                propertyName: t.property
                            }
                        };
                        break;
                    case o(944897).IA.MissingContextVariable:
                        {
                            let e = (0, o(297493).ix)(t.token) ? t.token.contextValueId : t.token.valueId;r = { ...o(649210).Xz.MissingContextVariable,
                                values: {
                                    valueId: e
                                }
                            }
                        }
                        break;
                    case o(944897).IA.MissingBlock:
                        r = { ...o(649210).Xz.MissingBlock,
                            values: {
                                blockId: t.token.blockId
                            }
                        };
                        break;
                    case o(944897).IA.CallingNotFunction:
                        r = { ...o(649210).Xz.CallingNotFunction,
                            values: {
                                expressionType: n(t.callee.type.type)
                            }
                        };
                        break;
                    case o(944897).IA.FunctionCallTooFewArguments:
                        r = { ...o(649210).Xz.FunctionCallTooFewArguments,
                            values: {
                                minNumParameters: t.minNumParameters,
                                functionName: t.libraryFunction.name,
                                numArguments: t.numArguments
                            }
                        };
                        break;
                    case o(944897).IA.FunctionCallUnexpectedArgument:
                        r = { ...o(649210).Xz.FunctionCallUnexpectedArgument,
                            values: {
                                functionName: t.libraryFunction.name
                            }
                        };
                        break;
                    case o(944897).IA.FunctionCallArgumentWrongType:
                        r = { ...o(649210).Xz.FunctionCallArgumentWrongType,
                            values: {
                                argumentType: n(t.argument.type.type),
                                functionName: t.libraryFunction.name
                            }
                        };
                        break;
                    case o(944897).IA.CallingFunctionWithUnknownArgument:
                        {
                            let e = Array.isArray(t.expectedParameter.type) ? t.expectedParameter.type[0] : t.expectedParameter.type,
                                i = "expression" === e.type ? "expression" : n(e.type);r = { ...o(649210).Xz.CallingFunctionWithUnknownArgument,
                                values: {
                                    functionName: t.libraryFunction.name,
                                    expectedType: i
                                }
                            };
                            break
                        }
                    case o(944897).IA.MemberPropertyMismatchCollection:
                        r = { ...o(649210).Xz.MemberPropertyMismatchCollection,
                            values: {
                                propertyName: t.token.property
                            }
                        };
                        break;
                    case o(944897).IA.MemberPropertyMissing:
                        r = { ...o(649210).Xz.MemberPropertyMissing,
                            values: {
                                propertyName: t.property
                            }
                        };
                        break;
                    case o(944897).IA.MemberPropertyTargetNotBlock:
                        r = o(649210).Xz.MemberPropertyTargetNotBlock;
                        break;
                    case o(944897).IA.MemberPropertyTypeInvalid:
                        r = { ...o(649210).Xz.MemberPropertyTypeInvalid,
                            values: {
                                propertyName: t.propertyName,
                                propertyType: t.propertyType
                            }
                        };
                        break;
                    case o(944897).IA.UndefinedIdentifier:
                        r = { ...o(649210).Xz.UndefinedIdentifier,
                            values: {
                                identifier: t.node.text
                            }
                        };
                        break;
                    case o(944897).IA.InvalidPropCall:
                        r = { ...o(649210).Xz.InvalidPropCall,
                            values: {
                                propertyName: t.name
                            }
                        };
                        break;
                    case o(944897).IA.InvalidContextCall:
                        r = { ...o(649210).Xz.InvalidContextCall,
                            values: {
                                variableName: t.name
                            }
                        };
                        break;
                    case o(944897).IA.InvalidVariableCall:
                        r = { ...o(649210).Xz.InvalidVariableCall,
                            values: {
                                variableName: t.name
                            }
                        };
                        break;
                    case o(944897).IA.UnifiedFunctionCannotFindFunction:
                        r = { ...o(649210).Xz.UnifiedFunctionCannotFindFunction,
                            values: {
                                functionName: t.name
                            }
                        };
                        break;
                    case o(944897).IA.UnifiedFunctionNoArguments:
                        r = { ...o(649210).Xz.UnifiedFunctionNoArguments,
                            values: {
                                functionName: t.libraryFunction.name
                            }
                        };
                        break;
                    case o(944897).IA.UnifiedFunctionTargetWrongType:
                        r = { ...o(649210).Xz.UnifiedFunctionTargetWrongType,
                            values: {
                                functionName: t.libraryFunction.name,
                                targetType: n(t.expression.type.type)
                            }
                        };
                        break;
                    case o(944897).IA.CallingFunctionWithUnknownTarget:
                        {
                            let e = Array.isArray(t.expectedParameter.type) ? t.expectedParameter.type[0] : t.expectedParameter.type,
                                i = "expression" === e.type ? "expression" : n(e.type);r = { ...o(649210).Xz.CallingFunctionWithUnknownTarget,
                                values: {
                                    functionName: t.libraryFunction.name,
                                    expectedType: i
                                }
                            };
                            break
                        }
                    case o(944897).IA.CannotRelativelyCompareTypes:
                        r = { ...o(649210).Xz.CannotRelativelyCompareTypes,
                            values: {
                                lhsType: n(t.lhsType.type),
                                rhsType: n(t.rhsType.type)
                            }
                        };
                        break;
                    case o(944897).IA.CannotDoMathOnType:
                        r = { ...o(649210).Xz.CannotDoMathOnType,
                            values: {
                                lhsType: n(t.lhsType.type),
                                rhsType: n(t.rhsType.type)
                            }
                        };
                        break;
                    case o(944897).IA.UnaryMinusOnNonNumber:
                        r = { ...o(649210).Xz.UnaryMinusOnNonNumber,
                            values: {
                                type: n(t.expression.type.type)
                            }
                        };
                        break;
                    case o(944897).IA.IdentifierExpected:
                        r = o(649210).Xz.IdentifierExpected;
                        break;
                    case o(944897).IA.FunctionCallExpected:
                        r = { ...o(649210).Xz.FunctionCallExpected,
                            values: {
                                functionName: t.functionName
                            }
                        };
                        break;
                    case o(944897).IA.RenamedIdentifier:
                        r = { ...o(649210).Xz.RenamedIdentifier,
                            values: {
                                identifier: t.identifier,
                                renamedTo: t.renamedTo
                            }
                        };
                        break;
                    case o(944897).IA.RemovedFunction:
                        r = { ...o(649210).Xz.RemovedFunction,
                            values: {
                                functionName: t.functionName,
                                alternative: t.alternative
                            }
                        };
                        break;
                    case o(944897).IA.ContextVariableNotBlockWithCollection:
                        r = { ...o(649210).Xz.ContextVariableNotBlockWithCollection,
                            values: {
                                valueId: t.token.contextValueId
                            }
                        };
                        break;
                    case o(944897).IA.MissingPropertyOnContextVariable:
                        r = { ...o(649210).Xz.MissingPropertyOnContextVariable,
                            values: {
                                propertyName: t.property,
                                valueId: t.token.contextValueId
                            }
                        };
                        break;
                    case o(944897).IA.BlockPropertyTypeInvalid:
                        r = { ...o(649210).Xz.BlockPropertyTypeInvalid,
                            values: {
                                propertyName: t.propertyName
                            }
                        };
                        break;
                    case o(944897).IA.DisallowedReturnType:
                        {
                            let n = t.allowedReturnTypes.map(t => e.formatMessage((0, o(345091).getHumanReadableType)(t)).toLocaleLowerCase());r = { ...o(649210).Xz.DisallowedReturnType,
                                values: {
                                    allowedReturnType: e.formatList(n, {
                                        style: "long",
                                        type: "conjunction"
                                    }),
                                    allowedReturnTypeCount: t.allowedReturnTypes.length,
                                    returnType: e.formatMessage((0, o(345091).getHumanReadableType)(t.returnType)).toLocaleLowerCase()
                                }
                            };
                            break
                        }
                    case o(944897).IA.CrossSpacePropertyNotSupported:
                        r = { ...o(649210).Xz.CrossSpacePropertyNotSupported
                        };
                        break;
                    case o(944897).IA.CalledFunctionOnEmptyValue:
                        r = { ...o(649210).Xz.CalledFunctionOnEmptyValue
                        };
                        break;
                    case o(944897).IA.UnsafeRegexPattern:
                        r = "too_many_quantifiers" === t.reason ? { ...o(649210).tB.TooManyQuantifiers
                        } : { ...o(649210).Xz.UnsafeRegexPattern
                        };
                        break;
                    default:
                        (0, o(722371).HB)(t)
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
                    case o(944897).uW.MissingThisRow:
                        r = o(649210).X8.MissingThisRow;
                        break;
                    case o(944897).uW.MissingSchemaPropertyOnThisRow:
                        r = { ...o(649210).X8.MissingSchemaPropertyOnThisRow,
                            values: {
                                propertyName: t.property
                            }
                        };
                        break;
                    case o(944897).uW.ThisRowBlockPropertyMismatchCollection:
                        r = o(649210).X8.ThisRowBlockPropertyMismatchCollection;
                        break;
                    case o(944897).uW.MissingContextVariable:
                        r = { ...o(649210).X8.MissingContextVariable,
                            values: {
                                valueId: t.valueId
                            }
                        };
                        break;
                    case o(944897).uW.IdentifierNotFound:
                        r = { ...o(649210).X8.IdentifierNotFound,
                            values: {
                                identifier: t.node.text
                            }
                        };
                        break;
                    case o(944897).uW.CannotRelativelyCompareTypes:
                        r = { ...o(649210).X8.CannotRelativelyCompareTypes,
                            values: {
                                lhsType: n(t.lhsType),
                                rhsType: n(t.rhsType)
                            }
                        };
                        break;
                    case o(944897).uW.CannotDoMathOnType:
                        r = { ...o(649210).X8.CannotDoMathOnType,
                            values: {
                                valueType: n(t.valueType)
                            }
                        };
                        break;
                    case o(944897).uW.CannotCallNonFunction:
                        r = { ...o(649210).X8.CannotCallNonFunction,
                            values: {
                                calleeType: n(t.calleeType)
                            }
                        };
                        break;
                    case o(944897).uW.UnifiedFunctionPropertyNotFound:
                        r = { ...o(649210).X8.UnifiedFunctionPropertyNotFound,
                            values: {
                                functionName: t.node.name
                            }
                        };
                        break;
                    case o(944897).uW.LibraryFunctionExecutionError:
                        let i = t.error instanceof o(944897).x4 ? t.error : void 0;
                        r = (null == i ? void 0 : i.info.type) === o(944897).v3.DateInvalidDurationUnit ? { ...o(649210).gW.DateInvalidDurationUnit,
                            values: {
                                functionName: t.libraryFunction.name,
                                invalidUnit: i.info.invalidUnit
                            }
                        } : (null == i ? void 0 : i.info.type) === o(944897).v3.CannotUseToNumberOnList ? { ...o(649210).gW.CannotUseToNumberOnList
                        } : (null == i ? void 0 : i.info.type) === o(944897).v3.CannotRoundToNonInteger ? { ...o(649210).gW.CannotRoundToNonInteger,
                            values: {
                                precision: i.info.precision
                            }
                        } : (null == i ? void 0 : i.info.type) === o(944897).v3.CannotRoundToTooManyDecimalPlaces ? { ...o(649210).gW.CannotRoundToTooManyDecimalPlaces,
                            values: {
                                precision: i.info.precision
                            }
                        } : (null == i ? void 0 : i.info.type) === o(944897).v3.NumberFormatInvalid ? { ...o(649210).gW.NumberFormatInvalid,
                            values: {
                                invalidFormat: i.info.invalidFormat
                            }
                        } : { ...o(649210).X8.LibraryFunctionExecutionError,
                            values: {
                                functionName: t.libraryFunction.name
                            }
                        };
                        break;
                    case o(944897).uW.FunctionCallTooFewArguments:
                        r = { ...o(649210).X8.FunctionCallTooFewArguments,
                            values: {
                                functionName: t.libraryFunction.name
                            }
                        };
                        break;
                    case o(944897).uW.FunctionCallUnexpectedArgument:
                        r = { ...o(649210).X8.FunctionCallUnexpectedArgument,
                            values: {
                                functionName: t.libraryFunction.name
                            }
                        };
                        break;
                    case o(944897).uW.FunctionCallArgumentWrongType:
                        r = { ...o(649210).X8.FunctionCallArgumentWrongType,
                            values: {
                                functionName: t.libraryFunction.name,
                                argumentType: n(t.argumentType)
                            }
                        };
                        break;
                    case o(944897).uW.AccessingPropertyOnNonBlock:
                        r = o(649210).X8.AccessingPropertyOnNonBlock;
                        break;
                    case o(944897).uW.MissingDataDependencyBlock:
                        r = { ...o(649210).X8.MissingDataDependencyBlock,
                            values: {
                                blockId: t.blockPointer.id
                            }
                        };
                        break;
                    case o(944897).uW.MissingDataDependencyPerson:
                        r = { ...o(649210).X8.MissingDataDependencyPerson,
                            values: {
                                personId: t.personPointer.id
                            }
                        };
                        break;
                    case o(944897).uW.MemberPropertyMismatchCollection:
                        r = o(649210).X8.MemberPropertyMismatchCollection;
                        break;
                    case o(944897).uW.MissingPropertyOnSchemaForMemberProperty:
                        r = o(649210).X8.MissingPropertyOnSchemaForMemberProperty;
                        break;
                    case o(944897).uW.UnaryMinusOnNonNumber:
                        r = { ...o(649210).X8.UnaryMinusOnNonNumber,
                            values: {
                                expressionType: n(t.expressionType)
                            }
                        };
                        break;
                    case o(944897).uW.UnexpectedRecoveryNode:
                        r = o(649210).X8.UnexpectedRecoveryNode;
                        break;
                    case o(944897).uW.UnexpectedError:
                        r = o(649210).X8.UnexpectedError;
                        break;
                    case o(944897).uW.DepthExceeded:
                        r = o(649210).X8.DepthExceeded;
                        break;
                    case o(944897).uW.CycleDetected:
                        r = o(649210).X8.CycleDetected;
                        break;
                    case o(944897).uW.DownstreamParseFailure:
                        r = o(649210).X8.DownstreamParseFailure;
                        break;
                    case o(944897).uW.MaxEvaluationTimeExceeded:
                        r = o(649210).X8.MaxEvaluationTimeExceeded;
                        break;
                    case o(944897).uW.MissingSchemaPropertyOnCollection:
                        r = { ...o(649210).X8.MissingSchemaPropertyOnCollection,
                            values: {
                                collectionId: t.collectionId,
                                propertyName: t.property
                            }
                        };
                        break;
                    case o(944897).uW.ContextVariableWrongType:
                        r = { ...o(649210).X8.ContextVariableWrongType,
                            values: {
                                expectedType: t.expectedType,
                                propertyType: t.resultType,
                                valueId: t.valueId
                            }
                        };
                        break;
                    case o(944897).uW.DisallowedValueType:
                        {
                            let n = t.allowedValueTypes.map(t => e.formatMessage((0, o(345091).getHumanReadableType)(t)).toLocaleLowerCase());r = { ...o(649210).Xz.DisallowedReturnType,
                                values: {
                                    allowedValueType: e.formatList(n, {
                                        style: "long",
                                        type: "conjunction"
                                    }),
                                    allowedValueTypeCount: t.allowedValueTypes.length,
                                    valueType: e.formatMessage((0, o(345091).getHumanReadableValueType)(t.expressionValue)).toLocaleLowerCase()
                                }
                            };
                            break
                        }
                    case o(944897).uW.TotalDependencyLimitExceeded:
                        r = { ...o(649210).X8.TotalDependencyLimitExceeded,
                            values: {
                                totalLoaded: t.totalLoaded,
                                limit: t.limit
                            }
                        };
                        break;
                    case o(944897).uW.PerFormulaDependencyLimitExceeded:
                        r = { ...o(649210).X8.PerFormulaDependencyLimitExceeded,
                            values: {
                                perFormulaLoaded: t.perFormulaLoaded,
                                limit: t.limit
                            }
                        };
                        break;
                    default:
                        (0, o(722371).HB)(t)
                }
                return (0, o(297493).li)(t) ? { ...r,
                    values: { ...r.values,
                        startOffset: t.node.startOffset,
                        endOffset: t.node.endOffset + 1
                    }
                } : r
            }

            function c(e) {
                let t = null == e ? void 0 : e.values;
                return [o(381453).cJ(e, "values"), t]
            }

            function d(e) {
                return e.type === o(944897).uW.DepthExceeded || e.type === o(944897).uW.CycleDetected || e.type === o(944897).uW.MaxEvaluationTimeExceeded || e.type === o(944897).uW.LibraryFunctionExecutionError
            }
            o.d(t, {
                SA: () => r,
                eJ: () => d,
                ew: () => c,
                ml: () => i,
                rA: () => l,
                yI: () => s,
                zf: () => a
            }), o(581454)
        },
        356622: (e, t, o) => {
            o.d(t, {
                V: () => r
            });

            function r(e) {
                let {
                    environment: t,
                    spaceStore: r,
                    errors: n
                } = e, i = (0, o(274749).i)(r);
                if (!i) return;
                let a = r.getSetting("getting_started_template_errors");
                (0, o(377796).createAndCommit)({
                    userAction: "spaceActions.setGettingStartedTemplateError",
                    environment: t,
                    cellTarget: {
                        spaceWithId: r.id
                    },
                    canUndo: !0,
                    perform: e => {
                        (0, o(818116).R)(r, e, {
                            getting_started_template_errors: { ...a,
                                [i]: n
                            }
                        })
                    }
                })
            }
        },
        366518: (e, t, o) => {
            o.d(t, {
                O8: () => s,
                Yf: () => a,
                fS: () => l
            });
            var r = () => o(56477),
                n = () => o(11266),
                i = () => o(993189);

            function a(e) {
                let {
                    environment: t,
                    textStore: r,
                    blockStore: n,
                    url: i,
                    oldTextValue: a,
                    urlSelection: l
                } = e;
                if (o(764615).Ay.state.open || o(994872).A.state.open || o(498368).Ay.state.open || o(385125).b.state.open) return !1;
                let s = o(239134).get();
                if (!s) return !1;
                let c = o(239134).getRect(s);
                if (!c) return !1;
                let d = (0, o(132702).parseRoute)({
                    url: i,
                    baseUrl: o(986939).A.domainBaseUrl,
                    publicDomainName: o(986939).A.publicDomainName,
                    isMobile: o(986939).A.isMobile,
                    protocol: o(986939).A.protocol,
                    currentUrl: window.location.href,
                    requestedOnAlternateDomain: (0, o(700473).wasRequestedOnAlternateDomain)()
                });
                if ("page" === d.name && d.discussionId && d.discussionId) {
                    let e = d.discussionId,
                        s = d.blockId;
                    if (!s) return !1;
                    let u = n.getParentBlockStore();
                    if (!u) return !1;
                    let p = o(970831).B.createChildStore(u, {
                            table: o(832375).evP,
                            id: s,
                            spaceId: u.getSpaceId()
                        }),
                        f = o(581068).c.createChildStore(p, {
                            table: o(832375).$YH,
                            id: e,
                            spaceId: u.getSpaceId()
                        });
                    if ("none" === f.getRole()) return !1;
                    let g = new(o(345426)).ComputedStore(() => f.getCommentStoresSortedByCreatedTime()[0], {
                            debugName: "firstCommentStore"
                        }),
                        m = new(o(870941)).A({
                            name: "internalUnfurlingMenuActions.activate",
                            isTemporaryData: !0
                        });
                    t.defaultRecordCache.inMemoryRecordCache.addCacheOverride(m);
                    let b = n.clone(m),
                        y = r.clone(m),
                        v = u.clone(m);
                    return o(705023).A.setState({
                        args: {
                            commentStore: g
                        },
                        stores: {
                            blockStore: n,
                            textStore: r,
                            parentStore: u
                        },
                        temporaryStores: {
                            blockStore: b,
                            textStore: y,
                            parentStore: v
                        },
                        temporaryRecordCache: m,
                        focusedIndex: o(679125).A.Preview,
                        selectionRect: c,
                        oldTextValue: a,
                        open: !0,
                        url: i,
                        urlSelection: l
                    }), o(595053).wQ(t, {
                        url: i
                    }), !0
                }
                return !1
            }

            function l(e) {
                let {
                    actionType: t,
                    environment: a,
                    commentStore: l,
                    useTempStores: s
                } = e, c = o(705023).A.state;
                if (!c.open) return;
                let {
                    oldTextValue: d
                } = c, {
                    textStore: u,
                    blockStore: p,
                    parentStore: f
                } = s ? c.temporaryStores : c.stores, g = a.currentUser.id;
                if (g) {
                    if (s)
                        for (let e in c.temporaryRecordCache.clearCache(), c.temporaryStores) {
                            let t = c.temporaryStores[e],
                                o = {
                                    userId: g,
                                    pointer: t.pointer
                                },
                                l = a.defaultRecordCache.inMemoryRecordCache.getRecord(o);
                            l ? (0, n().P)({
                                currentUserId: a.currentUser.id,
                                defaultRecordCache: a.defaultRecordCache,
                                inMemoryRecordCache: c.temporaryRecordCache,
                                pointer: t.pointer,
                                model: i().Bj6.fromValue(t.pointer.table, l.value),
                                role: l.role,
                                updatePaths: [
                                    []
                                ],
                                userId: g,
                                force: !0,
                                debugSource: "setUnfurlType"
                            }) : (0, r().o)({
                                inMemoryRecordCache: c.temporaryRecordCache,
                                persistedRecordCache: void 0,
                                pointer: t.pointer,
                                userId: g
                            })
                        } else a.defaultRecordCache.inMemoryRecordCache.removeCacheOverride(c.temporaryRecordCache);
                    switch (t) {
                        case o(679125).A.Link:
                            (0, o(182553).h)({
                                environment: a,
                                store: c.stores.blockStore
                            }), (0, o(627974).t)({
                                store: c.stores.textStore,
                                selection: {
                                    startIndex: c.urlSelection.endIndex,
                                    endIndex: c.urlSelection.endIndex
                                }
                            }), o(705023).A.setState({ ...c,
                                focusedIndex: o(679125).A.Link
                            });
                            break;
                        case o(679125).A.Mention:
                            if (!l) return;
                            let e = u.pointer.spaceId;
                            if (!e) return;
                            let m = l.id;
                            (0, o(377796).createAndCommit)({
                                environment: a,
                                userAction: "internalUnfurlingMenuActions.mention",
                                canUndo: !0,
                                cellTarget: {
                                    spaceWithId: e
                                },
                                perform: t => {
                                    o(41403).R9({
                                        environment: a,
                                        store: u,
                                        value: d,
                                        transaction: t
                                    }), o(41403).Gf({
                                        environment: a,
                                        editorMode: "default",
                                        store: u,
                                        selection: {
                                            startIndex: c.urlSelection.startIndex,
                                            endIndex: c.urlSelection.startIndex
                                        },
                                        annotation: o(247438).hiQ(m, e),
                                        transaction: t,
                                        analyticsFrom: "block"
                                    })
                                }
                            }), o(705023).A.setState({ ...c,
                                focusedIndex: o(679125).A.Mention
                            });
                            break;
                        case o(679125).A.Preview:
                            if (!l) return;
                            (0, o(377796).createAndCommit)({
                                environment: a,
                                userAction: "internalUnfurlingMenuActions.preview",
                                canUndo: !0,
                                cellTarget: u.pointer.spaceId ? {
                                    spaceWithId: u.pointer.spaceId
                                } : void 0,
                                perform: e => {
                                    o(41403).R9({
                                        environment: a,
                                        store: u,
                                        value: d,
                                        transaction: e
                                    });
                                    let t = o(966980).eK(l);
                                    if (!t || !o(966980).No(t) || !f || !t.getParentId()) return;
                                    let r = o(3).s({
                                        environment: a,
                                        parentBlockStore: f,
                                        targetStore: l,
                                        transaction: e
                                    });
                                    if ((0, o(51929).W)({
                                            parentStore: f.getContentStore(),
                                            insertStore: r,
                                            afterStore: p,
                                            transaction: e
                                        }), 0 === o(247438).q4_(c.oldTextValue).trim().length) {
                                        let t = o(970831).B.createChildStore(f.getContentStore(), c.stores.blockStore.pointer);
                                        (0, o(818646).T)({
                                            parentStore: f.getContentStore(),
                                            childToRemoveStore: t,
                                            transaction: e
                                        })
                                    }
                                }
                            }), o(705023).A.setState({ ...c,
                                focusedIndex: o(679125).A.Preview
                            });
                            break;
                        default:
                            throw (0, o(722371).HB)(t)
                    }
                    s || o(705023).A.setState({
                        open: !1
                    })
                }
            }

            function s(e) {
                var t, r;
                let {
                    blockStore: n,
                    transaction: i,
                    environment: a
                } = e, l = n.getType(), s = n.getFormat(), c = n.getSpaceId();
                if (!n.isDefined() || l !== o(955630).xd.alias || !(null != s && null != (t = s.alias_pointer) && t.id)) return;
                let d = [o(247438).wmz(o(247438).hiQ(null == s || null == (r = s.alias_pointer) ? void 0 : r.id, c))];
                (0, o(173157).z)({
                    store: n,
                    data: {
                        type: o(955630).xd.text
                    },
                    transaction: i
                }), (0, o(173157).z)({
                    store: n.getFormatStore(),
                    data: {
                        alias_pointer: null
                    },
                    transaction: i
                }), o(41403).R9({
                    environment: a,
                    store: n.getBlockTitleStore(),
                    value: d,
                    transaction: i
                })
            }
        },
        450228: (e, t, o) => {
            o.r(t), o.d(t, {
                duplicateBlock: () => f
            }), o(16280), o(898992), o(823215), o(581454), o(737550);
            var r = () => o(728372);
            class n {
                metricName;
                startMetric;
                prevLapMetric;
                extraData;
                constructor(e) {
                    this.metricName = e.metricName, this.startMetric = o(680007).default.mark(e.metricName), this.prevLapMetric = o(680007).default.mark(e.metricName), this.extraData = e.extraData ? ? {}
                }
                mark(e) {
                    o(680007).default.measure(this.prevLapMetric, {
                        data: {
                            type: e,
                            ...this.extraData
                        },
                        sampleDecision: "default"
                    }), this.prevLapMetric = o(680007).default.mark(this.metricName)
                }
                end() {
                    o(680007).default.measure(this.startMetric, {
                        data: {
                            type: "total",
                            ...this.extraData
                        },
                        sampleDecision: "default"
                    })
                }
            }
            var i = () => o(746473),
                a = () => o(681735),
                l = () => o(955630),
                s = () => o(832375),
                c = () => o(549960),
                d = () => o(205103),
                u = () => o(633171);
            let p = (0, o(109939).YK)({
                blocksDuplicated: {
                    id: "duplication.a11y.blocksDuplicated",
                    defaultMessage: "{count, plural, one {# block duplicated} other {# blocks duplicated}}"
                }
            });

            function f(e) {
                if (e.skipUserFacingMessages) return g(e);
                let t = o(617154).CU({
                    sourceBlocks: e.stores
                });
                try {
                    let r = g({ ...e,
                        onRedundantDuplicationError: () => {
                            (0, o(977283).Yv)()
                        }
                    });
                    return { ...r,
                        onComplete: r.onComplete.then(r => ("success" === r.status ? (o(617154).MK(t), (0, o(663123).l)(o(962299).A.formatMessage(p.blocksDuplicated, {
                            count: e.stores.length
                        }))) : o(617154).UO(t), r)).catch(e => {
                            throw o(617154).UO(t), e
                        })
                    }
                } catch (e) {
                    throw o(617154).UO(t), e
                }
            }

            function g(e) {
                let {
                    environment: t,
                    stores: p,
                    transaction: f,
                    targetSpaceId: g,
                    executionTarget: m,
                    from: b,
                    options: y,
                    installationImprint: v,
                    templateInstallationMetadata: h,
                    shouldUseSynchronousDuplicationAPI: S,
                    skipUserFacingMessages: k,
                    onRedundantDuplicationError: C
                } = e, I = "local" === (o(730125).A.getState().executionTarget ? ? m) ? "local_duplication" : S ? "server_synchronous_duplication" : "server_duplication", T = new n({
                    metricName: "duplicate_block_stopwatch",
                    extraData: {
                        duplication_type: I,
                        from: b
                    }
                });
                if (0 === p.length) throw Error("Must duplicate at least one block");
                let x = p[0].getSpaceId();
                if (!p.every(e => e.getSpaceId() === x)) throw Error("All stores must be in the same space");
                if (p.length > 1 && !y.useSharedContext && !p.every(e => e.isTypedCollectionViewBlock())) throw Error("Multiple source blocks only supported for grouped typed DB duplication unless useSharedContext option is true");
                (function(e) {
                    let {
                        environment: t,
                        stores: o
                    } = e;
                    for (let e of o) {
                        let o, n = (0, i().zH)(e).getValue();
                        if (!n) continue;
                        let d = r().AppStoreSidebarSpaceStore.state;
                        d && n.parent_table === s().yKj && (o = a().h.createChildStore(d, {
                            table: s().yKj,
                            id: n.parent_id
                        }));
                        let {
                            collectionId: p,
                            ownedCollectionCount: f,
                            linkedCollectionCount: g
                        } = (0, u().P)(e, {
                            skipPages: !1
                        }), m = {
                            from: "copy",
                            type: n.type,
                            teamStore: o,
                            is_toggleable: (0, l().Yt)(n.type, n.format),
                            collection_id: p,
                            owned_collection_count: f,
                            linked_collection_count: g,
                            new_page_id: "page" === n.type ? e.id : void 0,
                            creating_block_id: e.id,
                            parent_collection_id: e.getParentCollectionIdUpToTwoLevels(),
                            form_id: e.getFirstFormIdInCollectionViewBlock()
                        };
                        c().tP(n.type) ? c().vH(t, { ...m,
                            type: n.type,
                            collection_id: p || ""
                        }) : c().vH(t, { ...m,
                            type: n.type
                        })
                    }
                })({
                    environment: t,
                    stores: p
                }), T.mark("track_create_blocks"), y.convertExternalObjectInstancesToPlaceholders = x !== g;
                let w = h && (0, o(252822).Fe)(h.source) && h.isListedTemplate;
                if (1 === p.length && "local_duplication" === I && !w) {
                    let e = p[0],
                        r = (0, o(44226).tryLocalDuplicateWithTransaction)({
                            environment: t,
                            store: e,
                            options: y,
                            sourceSpaceId: x,
                            targetSpaceId: g,
                            transaction: f,
                            installationImprint: v,
                            templateInstallationMetadata: h,
                            stopwatch: T,
                            from: b,
                            destinationTable: e.getParentTable()
                        });
                    if (r) {
                        let {
                            targetBlockStore: e
                        } = r;
                        return T.mark("try_local_duplication_success"), T.end(), {
                            blockStores: [e],
                            onComplete: Promise.resolve({
                                status: "success"
                            })
                        }
                    }
                    T.mark("try_local_duplication_failure")
                }
                let M = t.defaultRecordCache.inMemoryRecordCache;
                if (p.some(e => e.inMemoryRecordCache !== M)) throw Error("Can only server duplicate from the environment.defaultRecordCache.inMemoryRecordCache.");
                o(205885).A.state.online || o(647095).f1(o(962299).A.formatMessage(o(450976).V.offlineError));
                let A = (0, o(994731).serverDuplicate)({
                    environment: t,
                    sourceBlocks: p.map(e => ({
                        id: e.id,
                        spaceId: e.getSpaceId()
                    })),
                    targetInMemoryRecordCache: M,
                    transaction: f,
                    targetSpaceId: g,
                    installationImprint: v,
                    templateInstallationMetadata: h,
                    stopwatch: T,
                    shouldUseSynchronousDuplicationAPI: S,
                    options: y,
                    from: b,
                    onRedundantDuplicationError: C,
                    destinationTable: p[0].getParentTable(),
                    blockType: p[0].getType()
                });
                if (T.mark("duplicate_block_immediate_return"), o(300441).Q.isFail(A)) throw k || (0, o(648048).x)({
                    environment: t,
                    duplicateError: A.error
                }), A.error;
                let {
                    blockStores: D,
                    onComplete: P
                } = A.value, B = o(975162).yX();
                return P.then(e => {
                    if (T.end(), o(300441).Q.isSuccess(e)) {
                        for (let e of D)
                            if ("ai_block" === e.getType()) {
                                d().EF.setState(e.pointer.id);
                                break
                            }
                        B.resolve({
                            status: "success",
                            recordIdMap: e.value.recordIdMap
                        })
                    } else {
                        var r;
                        k || (0, o(648048).x)({
                            environment: t,
                            duplicateError: e.error,
                            blockStores: D
                        }), B.resolve({
                            status: "error",
                            error: e.error,
                            errorMessage: null == (r = (0, o(648048).V2)(e.error)) ? void 0 : r.description
                        })
                    }
                }), {
                    blockStores: D,
                    onComplete: B.promise
                }
            }
        },
        488391: (e, t, o) => {
            function r(e) {
                return i(e)
            }

            function n(e) {
                return i(e)
            }
            async function i(e) {
                let {
                    environment: t,
                    htmlValue: r,
                    stringValue: n,
                    copiedMessage: i,
                    manualCopyMessage: a,
                    manualCopyMessageValues: l,
                    showCopyModal: s,
                    copiedMessageValues: c
                } = e;

                function d() {
                    o(392252).A.setState({ ...o(392252).A.state,
                        active: !0,
                        stringValue: n,
                        manualCopyMessage: a,
                        manualCopyMessageValues: l
                    })
                }
                if (s) return void d();
                try {
                    var u;
                    if (t.device.isElectron && null !== o(775657).electronApi && void 0 !== o(775657).electronApi && null != (u = o(775657).electronApi.clipboard) && u.write) {
                        let e = {
                            text: n
                        };
                        r && (e.html = r), await o(775657).electronApi.clipboard.write(e)
                    } else if ("u" < typeof ClipboardItem) await navigator.clipboard.writeText(n);
                    else {
                        let e = {
                            "text/plain": new Blob([n], {
                                type: "text/plain"
                            })
                        };
                        r && (e["text/html"] = new Blob([r], {
                            type: "text/html"
                        }));
                        let t = new ClipboardItem(e);
                        await navigator.clipboard.write([t])
                    }
                    i && o(436555).D6({
                        label: o(962299).A.formatMessage(i, c)
                    })
                } catch {
                    d()
                }
            }
            o.r(t), o.d(t, {
                copyHtml: () => r,
                copyString: () => n
            })
        },
        523288: (e, t, o) => {
            o.d(t, {
                Q: () => r
            });

            function r(e) {
                let {
                    collectionStore: t,
                    blockStore: r
                } = e, n = t ? (0, o(986629).by)(t.getFormat(), t.getSchema(), t.id) : void 0, i = null == n ? void 0 : n.property;
                if (!n || !i) return !1;
                let a = r.getSchema();
                if (!a) return !1;
                let l = a[i];
                return !!l && "relation" === l.type && (0, o(149267).r)({
                    store: r,
                    subitemFormat: n,
                    propertySchema: l,
                    includeNoAccess: !0
                }).length > 0
            }
        },
        558254: (e, t, o) => {
            o.d(t, {
                y: () => i
            }), o(16280), o(944114);
            var r = () => o(678703),
                n = () => o(832375);

            function i(e) {
                let {
                    environment: t,
                    sourceBlocks: i,
                    destination: a,
                    transaction: l,
                    options: s,
                    from: c,
                    installationImprint: d,
                    templateInstallationMetadata: u,
                    appendWithoutAfter: p,
                    unlockPage: f,
                    listener: g
                } = e, m = a.existingBlockIds;
                if (!m || m.length !== i.length) throw Error("Synchronous mixed local server duplication requires existing block IDs for each source block");
                let b = e.userId ? ? t.currentUser.id;
                if (!b) return o(300441).Q.fail(Error("Failed to get user ID"));
                let y = a.parent.spaceId,
                    v = e.targetSpaceViewStore ? ? (0, o(852864).H)({
                        spaceStore: new(r()).SL(t, {
                            table: n().NXh,
                            id: y
                        }),
                        userId: b,
                        environment: t
                    });
                if (!v) return o(300441).Q.fail(Error("Failed to get target space view store"));
                let h = o(730125).A.getState().executionTarget;
                g({
                    type: "started"
                });
                let S = [],
                    k = [],
                    C = [],
                    I = [];
                if ("server" !== h) {
                    let e = (0, o(44226).loadInMemorySubtree)({
                        environment: t,
                        sourceStores: i,
                        options: s,
                        targetSpaceId: y,
                        bailOnMiss: !1
                    });
                    for (let g of (e && (S = (0, o(44226).performLocalDuplication)({
                            environment: t,
                            sourceStores: i,
                            destination: a,
                            options: s,
                            transaction: l,
                            from: c,
                            onMissingLocalSubtree: ({
                                index: e,
                                blockStore: t
                            }) => {
                                k.push(t), C.push(m[e])
                            },
                            targetSpaceId: y,
                            targetSpaceViewStore: v,
                            existingBlockIds: m,
                            installationImprint: d,
                            templateInstallationMetadata: u,
                            unlockPages: f,
                            appendWithoutAfter: p,
                            localSubtrees: e
                        })), C)) {
                        let e = new(r()).Bv(t, {
                            table: n().evP,
                            id: g,
                            spaceId: y
                        });
                        I.push(e)
                    }
                    g({
                        type: "local_completed",
                        createdBlocks: [...S, ...I],
                        recordIdMap: void 0
                    })
                }
                return l.postSubmitCallbacks.push(async e => {
                    if (e) return void await g({
                        type: "error",
                        error: e
                    });
                    if ("server" === h) return void(0, o(170013).V)({
                        environment: t,
                        listener: g,
                        sourceBlocks: i,
                        destination: a,
                        options: { ...s,
                            isTemplateInstantiation: s.isTemplateInstantiation || !!u
                        },
                        from: c,
                        appendWithoutAfter: p
                    });
                    if (k.length > 0) {
                        let e = await (0, o(44226).loadSubtreesForLocalDuplication)({
                                environment: t,
                                sourceStores: k,
                                existingBlockIds: C,
                                targetSpaceId: y,
                                options: s,
                                shouldUseServerBackedDuplication: !0,
                                bailOnMiss: !1
                            }),
                            r = [],
                            n = [],
                            i = [];
                        if (e) {
                            let l = (0, o(377796).createAndCommit)({
                                environment: t,
                                canUndo: !1,
                                userAction: `duplicateToSynchronous.${c}`,
                                cellTarget: {
                                    spaceWithId: y
                                },
                                perform: r => (0, o(44226).performLocalDuplication)({
                                    environment: t,
                                    sourceStores: k,
                                    destination: a,
                                    options: s,
                                    unlockPages: f,
                                    targetSpaceId: y,
                                    transaction: r,
                                    existingBlockIds: C,
                                    localSubtrees: e,
                                    from: c,
                                    installationImprint: d,
                                    templateInstallationMetadata: u,
                                    appendWithoutAfter: p,
                                    targetSpaceViewStore: v,
                                    onMissingLocalSubtree: ({
                                        index: e,
                                        blockStore: t
                                    }) => {
                                        i.push(t), n.push(C[e])
                                    }
                                })
                            });
                            r = l.performResult;
                            try {
                                if (await l.serverCommitResult, 0 === i.length) return void await g({
                                    type: "completed",
                                    createdBlocks: r,
                                    recordIdMap: void 0
                                })
                            } catch (e) {
                                await g({
                                    type: "error",
                                    error: (0, o(161179).A)(e)
                                });
                                return
                            }
                        }
                        if ("local" !== h) {
                            let e = { ...a,
                                existingBlockIds: n
                            };
                            (0, o(170013).V)({
                                environment: t,
                                listener: g,
                                sourceBlocks: i,
                                destination: e,
                                options: { ...s,
                                    isTemplateInstantiation: s.isTemplateInstantiation || !!u
                                },
                                from: c,
                                appendWithoutAfter: p
                            })
                        }
                    } else await g({
                        type: "completed",
                        createdBlocks: S,
                        recordIdMap: void 0
                    })
                }), o(300441).Q.success({
                    createdBlocks: [...S, ...I]
                })
            }
        },
        679125: (e, t, o) => {
            o.d(t, {
                A: () => i
            });
            var r, n = ((r = n || {})[r.Preview = 0] = "Preview", r[r.Mention = 1] = "Mention", r[r.Link = 2] = "Link", r);
            let i = n
        },
        730125: (e, t, o) => {
            o.d(t, {
                A: () => r
            });
            let r = o(546605).Store.createValue({
                executionTarget: null
            }, {
                name: "DuplicationDebuggingStore"
            })
        },
        755744: (e, t, o) => {
            o.d(t, {
                i: () => r
            });

            function r(e) {
                let {
                    environment: t,
                    collectionContextStore: r,
                    subitemPath: n,
                    collectionStore: i,
                    store: a,
                    before: l,
                    insertBlockStore: s,
                    insertDirection: c,
                    transaction: d
                } = e, u = r.currentSubitemFormatStoreForCollectionStore.state;
                if (!u) return;
                let p = i.getSchema()[u.property];
                if (!p || "relation" !== p.type) return;
                if ("into" === c) {
                    var f;
                    let e = n[n.length - 1],
                        r = e.value.store;
                    o(356975).j$({
                        environment: t,
                        sourceStore: r,
                        destStore: s,
                        position: l ? {
                            type: "before",
                            before: null == (f = e.children[0]) ? void 0 : f.value.store.id
                        } : {
                            type: "after"
                        },
                        propertyWithInverse: u,
                        transaction: d
                    });
                    return
                }
                let g = n[n.length - 2];
                if (!g) return;
                let m = g.value.store;
                o(356975).j$({
                    environment: t,
                    sourceStore: m,
                    destStore: s,
                    propertyWithInverse: u,
                    position: l ? {
                        type: "before",
                        before: a.id
                    } : {
                        type: "after",
                        after: a.id
                    },
                    transaction: d
                })
            }
        },
        872952: (e, t, o) => {
            o.d(t, {
                G: () => i
            }), o(944114), o(898992), o(823215), o(354520), o(581454), o(737550);
            var r = () => o(247438),
                n = () => o(189948);

            function i(e) {
                let t, {
                    clipboardActions: i,
                    environment: l,
                    selection: s,
                    currentRows: c,
                    event: d,
                    transaction: u,
                    markdownLinkifyIt: p,
                    tinyMceMicrosoftWordPasteFilter: f
                } = e;
                if (!d.clipboardData) return;
                let g = d.clipboardData.getData(o(41962).sE),
                    m = d.clipboardData.getData("text/html"),
                    b = d.clipboardData.getData("text/plain");
                if (g) t = JSON.parse(g);
                else if (m) {
                    let e = document.createElement("div");
                    e.innerHTML = m;
                    let o = e.querySelector("table");
                    if (o)
                        for (let e of (t = [], Array.from(o.querySelectorAll("tr")))) {
                            let o = [];
                            for (let t of Array.from(e.querySelectorAll("td, th"))) {
                                let e = r().x9d(t.textContent || "");
                                o.push([e, void 0])
                            }
                            t.push(o)
                        }
                }
                if (!t && b) {
                    let e = (0, o(786221).parseCSV)(b);
                    if (e.length > 1 && e.every(t => t.length === e[0].length) && e[0].length > 1)
                        for (let o of (t = [], e)) {
                            let e = [];
                            for (let t of o) {
                                let o = r().x9d(t);
                                e.push([o, void 0])
                            }
                            t.push(e)
                        }
                }
                if (!t) {
                    let e = i.getInlineTextValueFromClipboardData({
                        event: d,
                        markdownLinkifyIt: p,
                        tinyMceMicrosoftWordPasteFilter: f,
                        supportsChatSelectionContextTokens: !1
                    });
                    e && (t = [
                        [
                            [e, void 0]
                        ]
                    ])
                }
                if (t) {
                    let i, d = (0, o(869337).h)(s),
                        {
                            trimmedSelection: p,
                            actualWidth: f,
                            actualHeight: g
                        } = function(e) {
                            if (!e.length) return {
                                trimmedSelection: e,
                                actualWidth: 0,
                                actualHeight: 0
                            };
                            let t = e.length,
                                o = e[0].length;
                            for (; t > 0 && !e[t - 1].some(e => !a(e));) t--;
                            if (0 === t) return {
                                trimmedSelection: [],
                                actualWidth: 0,
                                actualHeight: 0
                            };
                            for (; o > 0;) {
                                let r = !1;
                                for (let n = 0; n < t; n++)
                                    if (!a(e[n][o - 1])) {
                                        r = !0;
                                        break
                                    }
                                if (r) break;
                                o--
                            }
                            return {
                                trimmedSelection: e.slice(0, t).map(e => e.slice(0, o)),
                                actualWidth: o,
                                actualHeight: t
                            }
                        }(t);
                    if (0 === f || 0 === g) return;
                    let m = Math.floor((d.maxCol - d.minCol + 1) / f);
                    0 === m && (m = 1);
                    let b = Math.floor((d.maxRow - d.minRow + 1) / g);
                    if (0 === b && (b = 1), "simpleTableStore" in e) {
                        let t = d.minCol + f * m,
                            {
                                simpleTableStore: r
                            } = e,
                            a = (i = e.columnOrder).length;
                        t > a && (n().eI({
                            count: t - a,
                            simpleTableStore: r,
                            transaction: u
                        }), i = (0, o(979805).$O)(r) || [])
                    }
                    for (let t = 0; t < b; t++)
                        for (let a = 0; a < m; a++) {
                            let s = d.minCol + a * f,
                                m = d.minRow + t * g;
                            for (let t = 0; t < g; t++) {
                                let a = c[m + t];
                                if (!a) {
                                    let t = "selectionKey" in e ? function(e) {
                                        let {
                                            environment: t,
                                            currentRows: r,
                                            collectionContextStore: n,
                                            selectionKey: i,
                                            transaction: a
                                        } = e, {
                                            groupFormat: l
                                        } = i, s = (0, o(127872).Q)({
                                            environment: t,
                                            collectionContextStore: n,
                                            groupsPointer: l ? [l] : [],
                                            insertAtIndex: r.length,
                                            shouldCoerce: !0,
                                            transaction: a,
                                            from: {
                                                createBlock: "table_paste_selection"
                                            },
                                            inMemoryRecordCache: t.defaultRecordCache.inMemoryRecordCache
                                        });
                                        return null == s ? void 0 : s.newStore
                                    }(e) : n().D(e);
                                    t && (e.currentRows.push(t), a = t)
                                }
                                for (let n = 0; n < f; n++) {
                                    var y;
                                    let c = null == (y = p[t]) ? void 0 : y[n];
                                    if (!c) continue;
                                    let d = s + n;
                                    "currentPropertyFormats" in e ? function(e) {
                                        var t, r;
                                        let {
                                            environment: n,
                                            rowStore: i,
                                            x: a,
                                            serializedValue: l,
                                            currentPropertyFormats: s,
                                            transaction: c,
                                            schema: d
                                        } = e, u = s[a];
                                        if (!u || "verification" === (null == (t = d[u.property]) ? void 0 : t.type)) return;
                                        let [p, f] = l, g = i.getPropertyStore(u.property);
                                        if (o(41403).R9({
                                                environment: n,
                                                store: g,
                                                value: p,
                                                transaction: c
                                            }), f) {
                                            let e = p ? o(561872).NS(p) : void 0,
                                                t = null == e || null == (r = e.map(e => {
                                                    var t;
                                                    return null == (t = (0, o(728601).oN)({
                                                        urlOrAlias: e.url
                                                    })) ? void 0 : t.fileId
                                                })) ? void 0 : r.filter(o(722371).O9);
                                            t && t.length > 0 && o(124937).Bn({
                                                store: i,
                                                source: f,
                                                fileIds: t,
                                                transaction: c
                                            })
                                        }
                                    }({
                                        rowStore: a,
                                        x: d,
                                        serializedValue: c,
                                        currentPropertyFormats: e.currentPropertyFormats,
                                        transaction: u,
                                        schema: e.schema,
                                        environment: l
                                    }) : function(e) {
                                        let {
                                            rowStore: t,
                                            x: n,
                                            serializedValue: i,
                                            transaction: a,
                                            columnOrder: l,
                                            environment: s
                                        } = e, c = l[n];
                                        if (!c) return;
                                        let [d, u] = i, p = t.getPropertyStore(c);
                                        o(41403).R9({
                                            environment: s,
                                            store: p,
                                            value: r().Uee(d, {
                                                removeSuggestionAnnotationsAndText: !1,
                                                removeSuggestionAnnotations: !0,
                                                removeDiscussions: !0
                                            }),
                                            transaction: a
                                        })
                                    }({
                                        rowStore: a,
                                        x: d,
                                        serializedValue: c,
                                        columnOrder: i ? ? e.columnOrder,
                                        transaction: u,
                                        environment: l
                                    })
                                }
                            }
                        }
                    let v = {
                        start: {
                            col: d.minCol,
                            row: d.minRow
                        },
                        end: {
                            col: d.minCol + f * m - 1,
                            row: d.minRow + g * b - 1
                        }
                    };
                    "selectionKey" in e ? (0, o(218625).t)({
                        environment: l,
                        selectionKey: e.selectionKey,
                        selection: v
                    }) : (0, o(169274).ep)({
                        environment: l,
                        start: v.start,
                        end: v.end,
                        simpleTableStore: e.simpleTableStore
                    })
                }
            }

            function a(e) {
                if (!e) return !0;
                let [t] = e;
                if (!t || !t.length) return !0;
                let o = r().q4_(t);
                return !o || "" === o.trim()
            }
        },
        941732: (e, t, o) => {
            let r, n;
            o.r(t), o.d(t, {
                convertSimpleBulletsTextSelectionToMarkdown: () => eh,
                copy: () => em,
                copyDirectLinkToContent: () => eG,
                copyFormattedLinkToBlock: () => e$,
                copyLinkToBlock: () => eH,
                copyLinkToCollection: () => ej,
                copyLinksToBlocks: () => eq,
                copyPageContents: () => eJ,
                copySelectionToClipboard: () => eQ,
                copyWithToast: () => eK,
                createSelectedMultiColumnBlockSubtree: () => es,
                cutWithMaybeConfirmation: () => eg,
                getFormulaEditorInformation: () => eR,
                getInlineTextValueFromClipboardData: () => e9,
                getInlineTitleValueFromClipboardTextHtml: () => ew,
                getLinkToBlock: () => eX,
                getNotionSelectionClipboardData: () => en,
                htmlToMultiTextSelectionClipboardData: () => ex,
                insertOrTransformToCodeBlock: () => eW,
                markdownToBlocks: () => e0,
                multiTextSelectionToMarkdown: () => eY,
                paste: () => eL,
                pasteFilesForBlocks: () => eb,
                pasteMarkdown: () => eT,
                serializeLoadedPageContentsAsMarkdown: () => ed,
                serializeMultiTextSelectionToClipboardData: () => ep,
                serializePagePropertiesAsText: () => ec,
                triggerBrowserCopy: () => eZ
            });
            var i = {};
            o.r(i), o.d(i, {
                convertSimpleBulletsTextSelectionToMarkdown: () => eh,
                copy: () => em,
                copyDirectLinkToContent: () => eG,
                copyFormattedLinkToBlock: () => e$,
                copyLinkToBlock: () => eH,
                copyLinkToCollection: () => ej,
                copyLinksToBlocks: () => eq,
                copyPageContents: () => eJ,
                copySelectionToClipboard: () => eQ,
                copyWithToast: () => eK,
                createSelectedMultiColumnBlockSubtree: () => es,
                cutWithMaybeConfirmation: () => eg,
                getFormulaEditorInformation: () => eR,
                getInlineTextValueFromClipboardData: () => e9,
                getInlineTitleValueFromClipboardTextHtml: () => ew,
                getLinkToBlock: () => eX,
                getNotionSelectionClipboardData: () => en,
                htmlToMultiTextSelectionClipboardData: () => ex,
                insertOrTransformToCodeBlock: () => eW,
                markdownToBlocks: () => e0,
                multiTextSelectionToMarkdown: () => eY,
                paste: () => eL,
                pasteFilesForBlocks: () => eb,
                pasteMarkdown: () => eT,
                serializeLoadedPageContentsAsMarkdown: () => ed,
                serializeMultiTextSelectionToClipboardData: () => ep,
                serializePagePropertiesAsText: () => ec,
                triggerBrowserCopy: () => eZ
            }), o(18107), o(944114), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698), o(967357), o(898992), o(823215), o(354520), o(430670), o(803949), o(581454), o(908872), o(737550);
            var a = o.n(o(842838)),
                l = () => o(208360),
                s = () => o(517013),
                c = () => o(970831),
                d = () => o(356912),
                u = () => o(955630),
                p = () => o(656515),
                f = () => o(216465),
                g = () => o(993189),
                m = () => o(488307),
                b = () => o(182830),
                y = () => o(39427),
                v = () => o(832375),
                h = () => o(247438),
                S = () => o(305050),
                k = () => o(722371),
                C = () => o(345889),
                I = () => o(559096),
                T = () => o(124937),
                x = () => o(579695),
                w = () => o(240414);

            function M() {
                var e;
                let t = o(239134).get(),
                    r = null == (e = (0, o(406743).G)({
                        range: t,
                        contentEditableLeafRegistry: void 0,
                        allowInvisibleEndSelection: !0
                    })) ? void 0 : e.multiSelection;
                if (r) {
                    let e = (0, o(58512).$)(r).some(({
                        editable: e
                    }) => e.props.disabled);
                    (0, o(726923).setMultiSelection)({
                        readOnly: e,
                        multiSelection: r
                    })
                }
            }

            function A() {
                if ("editing" !== o(358377).default.state.mode) return !1;
                let e = (0, o(778758).H)(o(358377).default.state.multiSelection);
                return !!e && !!e.store.isTable(v().evP) && 0 !== o(584265).default.state.stores.length && (0, o(746473).zH)(e.store).getType() === u().xd.code && (o(358377).default.isEditingCaption() ? "caption" : "body")
            }
            var D = () => o(593016),
                P = () => o(421439);

            function B(e) {
                var t;
                let {
                    originalHtmlContentSize: r,
                    environment: n
                } = e;
                if (r < 500) return;
                let i = (0, o(904434).R$)(n),
                    a = null == i || null == (t = i.getSettings()) ? void 0 : t.adoption_entry_points,
                    l = a ? a.import_nudge_on_large_paste : void 0;
                if (l) {
                    let e = o(218744).default.getConfigKey("adoption_entry_point_time_delta", "import_nudge_on_large_paste"),
                        t = l[l.length - 1];
                    if (!(Date.now() - t > e.view_delta)) return
                }
                "nudge_on_large_paste" === o(218744).default.getEligibleGroup({
                    experimentId: "adoption_import_entry_point",
                    defaultGroup: "control"
                }) && ((0, o(784293).t)({
                    environment: n,
                    action: "view",
                    from: "import_nudge_on_paste"
                }), o(819652).Iz({
                    message: o(962299).A.formatMessage(_.triggerNudgeOnPasteDescription),
                    presentationType: "persistent",
                    id: "nudge-on-paste",
                    title: o(962299).A.formatMessage(_.triggerNudgeOnPasteTitle),
                    onUserDismiss: () => {
                        (0, o(784293).t)({
                            environment: n,
                            action: "dismiss",
                            from: "import_nudge_on_paste"
                        })
                    },
                    onDismiss: () => {
                        (0, o(658703).p)(n, {
                            entryPoint: "import_nudge_on_large_paste"
                        })
                    },
                    actions: {
                        primary: {
                            title: o(962299).A.formatMessage(_.triggerNudgeOnPastePrimaryAction),
                            onAction: () => {
                                let e = o(47797).A.getOrCreateFlowId();
                                (0, o(784293).t)({
                                    environment: n,
                                    action: "click",
                                    from: "import_nudge_on_paste"
                                }), o(691968).kY({
                                    from: "import_nudge_on_paste",
                                    flowId: e
                                }), o(819652).UW({
                                    id: "nudge-on-paste"
                                }), o(599754).Ow({
                                    currentPage: "imports",
                                    openedFrom: "import_nudge_on_paste"
                                })
                            }
                        }
                    }
                }))
            }
            let _ = (0, o(109939).YK)({
                triggerNudgeOnPasteTitle: {
                    id: "adoption.nudgeOnPaste.title",
                    defaultMessage: "Import content directly"
                },
                triggerNudgeOnPasteDescription: {
                    id: "adoption.nudgeOnPaste.description",
                    defaultMessage: "Get all your content into Notion with a click"
                },
                triggerNudgeOnPastePrimaryAction: {
                    id: "adoption.nudgeOnPaste.primaryAction",
                    defaultMessage: "Import now"
                }
            });

            function F(e) {
                return e.trimEnd().includes("\n")
            }
            o(16280), o(672577);
            var R = () => o(457915),
                N = () => o(626155),
                E = () => o(161606),
                U = () => o(787926);

            function O(e) {
                var t, r;
                let n, {
                    environment: i,
                    clipboardData: a,
                    transaction: l,
                    allowPasteIntoHeaderWithoutChildren: s,
                    selectAll: d,
                    preventLegacyTransclusions: p,
                    spaceStore: f
                } = e;
                if (o(358377).default.isEditingComment() || A() || (t = a, r = null == f ? void 0 : f.id, t.blockSelection.blocks.some(e => {
                        var t;
                        if (!e.blockSubtree) return !0;
                        let n = null == (t = e.blockSubtree.getModel({
                            id: e.blockId,
                            table: v().evP
                        })) ? void 0 : t.spaceId;
                        if (n && r && o(887380).Lw({
                                sourceSpaceId: n,
                                targetSpaceId: r,
                                sourceBlockSubtree: e.blockSubtree
                            })) return !0
                    }))) return !1;
                let g = o(358377).default.state;
                if ("editing" !== g.mode) return !1;
                let m = g.multiSelection.start.store;
                if (!m.isTable(v().evP)) return !1;
                let b = (0, o(534012).T)(m);
                if (!b || m !== b.getBlockTitleStore()) return !1;
                let y = b.getType(),
                    S = b.getFormat();
                if (!y || !(0, u().IU)(y, S) && (!s || !(0, u().CN)(y))) return !1;
                if (s && (0, u().CN)(y)) {
                    let e = a.blockSelection.blocks[0],
                        t = null == e ? void 0 : e.blockId,
                        o = null == e ? void 0 : e.blockSubtree,
                        r = t && o ? o.getModel({
                            id: t,
                            table: "block"
                        }) : void 0;
                    if (null == r ? void 0 : r.getContentLength()) return !1
                }
                let k = (0, U().Ag)({
                    includeNonSelectableListContainer: !0
                });
                if (!k) return !1;
                let C = (0, U().Xs)(b, [k]);
                if (!C) return !1;
                let I = 0;
                for (let e = C.length - 1; e >= 0; e--) {
                    let t = C[e].value.store,
                        o = w().T.findSelectableFromStore(t),
                        r = t.getModel();
                    if (null != r && r.isType(u().U6) || o && !o.props.canSelect) {
                        I = e;
                        break
                    }
                }
                let T = C.slice(I);
                if (0 === T.length) return !1;
                let M = T[0].value.store,
                    D = M.pointer.spaceId,
                    P = (0, o(398346).l)(M);
                l.logDebugMessage("pasteMultiTextSelection: pasting", T, {
                    spaceId: D,
                    pastingIntoTemplate: P,
                    insertionPathRootStore: M
                });
                let B = a.blockSelection.blocks.map(({
                        blockId: e,
                        blockSubtree: t
                    }) => {
                        var r;
                        if (!t) throw Error("Missing data for local duplicate block during paste");
                        let n = (null == (r = t.getModel({
                                table: v().evP,
                                id: e
                            })) ? void 0 : r.getType()) === u().xd.factory,
                            a = (0, o(44226).localDuplicate)({
                                environment: i,
                                sourceBlockId: e,
                                targetBlockPointer: (0, o(295447).zP)({
                                    environment: i,
                                    table: v().evP,
                                    spaceId: D
                                }),
                                sourceBlockSubtree: t,
                                targetInMemoryRecordCache: M.inMemoryRecordCache,
                                transaction: l,
                                from: "paste",
                                destinationTable: v().evP,
                                options: {
                                    addCopyName: !0,
                                    allowRedundancy: !1,
                                    deepCopyTransclusionContainers: !1,
                                    preventLegacyTransclusions: p,
                                    resolveTemplateVariables: !(P || n)
                                }
                            }),
                            s = a.targetBlockStore.getType();
                        if (s) {
                            let e = b.getParentCollectionIdUpToTwoLevels(),
                                t = {
                                    from: "paste",
                                    type: s,
                                    new_page_id: "page" === s ? a.targetBlockStore.id : void 0,
                                    creating_block_id: a.targetBlockStore.id,
                                    parent_collection_id: e
                                };
                            o(549960).tP(s) ? o(549960).vH(i, { ...t,
                                type: s,
                                collection_id: e || ""
                            }) : o(549960).vH(i, { ...t,
                                type: s
                            })
                        }
                        return a
                    }),
                    _ = a.multiTextSelection.start.pointerPath,
                    F = a.multiTextSelection.end.pointerPath,
                    R = [],
                    N = [],
                    E = Math.max(_.length, F.length),
                    O = (T[T.length - E] || T[0]).value.store,
                    z = (0, o(17224).v)({
                        node: a.tree,
                        recordStoreParent: O
                    }, ({
                        node: e,
                        recordStoreParent: t
                    }) => {
                        let o = ((e, t) => {
                                let o;
                                for (let {
                                        originalToDuplicate: e
                                    } of B)
                                    if (o = e.get(t)) break;
                                if (o) return c().B.createChildStore(e, o)
                            })(t, e.value),
                            r = R.length < _.length ? _[R.length] : void 0,
                            n = N.length < F.length ? F[N.length] : void 0,
                            i = !1;
                        if ((null == r ? void 0 : r.id) === e.value.id && (i = !0, R.push(o)), (null == n ? void 0 : n.id) === e.value.id && (i = !0, N.push(o)), !i) return {
                            value: {
                                store: o
                            }
                        };
                        let a = (null == o ? void 0 : o.getContentStore()) || M;
                        return {
                            value: {
                                store: o
                            },
                            children: e.children.map(e => ({
                                node: e,
                                recordStoreParent: a
                            }))
                        }
                    });
                if (R.length !== _.length || 0 === R.length) throw Error(`Failed to hydrate start path during paste (found ${R.length} of ${_.length})`);
                if (N.length !== F.length || 0 === N.length) throw Error(`Failed to hydrate end path during paste (found ${N.length} of ${F.length})`);
                let X = R[R.length - 1],
                    H = N[N.length - 1];
                if (!X || !H) throw Error(`Failed to hydrate position during paste (${X?"":"missing start"} ${H?"":"missing end"})`);
                let j = (0, o(17224).Qe)([z], e => e.value.store === X),
                    $ = (0, o(17224).Qe)([z], e => e.value.store === H),
                    q = j && $ && o(61399).W.fromNearestCommonAncestor(j, $);
                if (!q) throw Error(`Failed to build range for paths: ${j?"":"missing start"} ${$?"":"missing end"}`);
                o(41403).f0({
                    environment: i,
                    multiSelection: g.multiSelection,
                    transaction: l
                });
                let G = o(358377).default.state,
                    Q = "editing" === G.mode ? G.multiSelection : g.multiSelection;
                if (y === u().xd.quote || y === u().xd.callout) {
                    let e = (0, o(374934).aI)(H);
                    if (e) {
                        let t = Q.end.index,
                            r = Q.end.store;
                        o(41403).jN({
                            environment: i,
                            sourceStore: r,
                            sourceIndex: t,
                            targetStore: e,
                            targetIndex: h().qAZ(e.getValue()).length,
                            transaction: l
                        })
                    }
                    for (let {
                            targetBlockStore: e
                        } of B) x().NI({
                        parentStore: b.getContentStore(),
                        childStore: e,
                        transaction: l
                    });
                    W({
                        duplicates: B,
                        duplicateStartStore: X,
                        insertionPathRootStore: M,
                        transaction: l
                    });
                    let t = (0, o(374934).aI)(H);
                    if (t) {
                        let e = h().qAZ(t.getValue()).length;
                        o(374176).default.afterNextFlush(() => {
                            (0, o(726923).setMultiSelection)({
                                multiSelection: {
                                    start: {
                                        index: e,
                                        store: t
                                    },
                                    end: {
                                        index: e,
                                        store: t
                                    }
                                }
                            })
                        })
                    }
                    return !0
                }
                if ((0, o(966980).P4)(b) && 0 === a.multiTextSelection.start.textIndex) {
                    let e = X.getType();
                    e && (0, u().aO)(e) && o(422224).transformBlocks({
                        environment: i,
                        blocks: [b],
                        blockType: e,
                        transaction: l
                    })
                }
                return M.isCrdtEnabled() ? (L({
                    transaction: l,
                    clipboardData: a,
                    startBlockStore: b,
                    duplicateStartStore: X,
                    range: q,
                    insertionPath: T,
                    duplicates: B,
                    insertionPathRootStore: M
                }), n = V({
                    environment: i,
                    transaction: l,
                    clipboardData: a,
                    insertionPoint: Q,
                    textSelectionState: g,
                    duplicateEndStore: H,
                    pastingIntoTemplate: P
                }).newSelectionIndex) : (n = V({
                    environment: i,
                    transaction: l,
                    clipboardData: a,
                    insertionPoint: Q,
                    textSelectionState: g,
                    duplicateEndStore: H,
                    pastingIntoTemplate: P
                }).newSelectionIndex, L({
                    transaction: l,
                    clipboardData: a,
                    startBlockStore: b,
                    duplicateStartStore: X,
                    range: q,
                    insertionPath: T,
                    duplicates: B,
                    insertionPathRootStore: M
                })), o(374176).default.afterNextFlush(() => {
                    let e = (0, U().PY)({
                            rootStore: M,
                            root: k,
                            target: q.end
                        }),
                        t = e && (0, o(374934).aI)(e[e.length - 1]);
                    if (!t) return;
                    let r = {
                        start: {
                            index: d ? Q.start.index : n,
                            store: d ? Q.start.store : t
                        },
                        end: {
                            index: n,
                            store: t
                        }
                    };
                    (0, o(726923).setMultiSelection)({
                        multiSelection: r
                    })
                }), !0
            }

            function V(e) {
                let {
                    insertionPoint: t,
                    duplicateEndStore: r,
                    pastingIntoTemplate: n,
                    environment: i,
                    transaction: a,
                    clipboardData: l
                } = e, s = 0, c = t.end.store, d = t.end.index, u = (0, o(374934).aI)(r);
                if (u) {
                    s = h().qAZ(u.getValue()).length;
                    let e = (0, o(148337).o9)((0, o(534012).T)(c)),
                        t = (0, o(148337).o9)((0, o(534012).T)(u));
                    o(130063).L({
                        store: c,
                        blockStore: e
                    }) && o(130063).L({
                        store: u,
                        blockStore: t
                    }) ? (o(8516).X0({
                        sourceBlockStore: e,
                        targetBlockStore: t,
                        splitAtGraphemeIndex: d,
                        transaction: a,
                        moveIntoNewBlock: !1
                    }), a.logDebugMessage("(CRDT) pasted suffix into end", u)) : (o(41403).jN({
                        environment: i,
                        sourceStore: c,
                        sourceIndex: d,
                        targetStore: u,
                        targetIndex: s,
                        transaction: a
                    }), a.logDebugMessage("pasted suffix into end", u))
                } else o(41403).jQ({
                    environment: i,
                    transaction: a,
                    store: c,
                    selection: {
                        startIndex: d,
                        endIndex: 1 / 0
                    }
                }), a.logDebugMessage("no end title store to paste text into");
                let p = h().Uee(l.multiTextSelection.start.copiedText, {
                    removeSuggestionAnnotationsAndText: !1,
                    removeSuggestionAnnotations: !0,
                    removeDiscussions: !0
                });
                return n || (p = (0, o(664993).f$)(p, {
                    currentUserId: i.currentUser.id,
                    currentTimeZone: (0, o(714350).P)()
                })), o(41403).yr({
                    environment: i,
                    index: t.start.index,
                    store: t.start.store,
                    tokens: p,
                    transaction: a
                }), {
                    newSelectionIndex: s
                }
            }

            function L(e) {
                let {
                    transaction: t,
                    clipboardData: o,
                    startBlockStore: r,
                    duplicateStartStore: n,
                    insertionPath: i,
                    insertionPathRootStore: a,
                    duplicates: l,
                    range: s
                } = e;
                for (let e of s.iterateInsertionAt(i))(0, U().eM)({
                    transaction: t,
                    treeOperation: e,
                    deleteFrom: "tree-parent",
                    preferHighLevelOperations: !0
                }), N().O.applyMutable(e);
                if (o.blockSelection.wasContiguousSelection && o.blockSelection.blocks.length > 0 && !r.hasContent())
                    for (let e of n.getContentStores()) x().NI({
                        parentStore: r.getContentStore(),
                        childStore: e,
                        transaction: t
                    });
                W({
                    duplicates: l,
                    duplicateStartStore: n,
                    insertionPathRootStore: a,
                    transaction: t
                })
            }

            function W(e) {
                let {
                    duplicates: t,
                    duplicateStartStore: o,
                    insertionPathRootStore: r,
                    transaction: n
                } = e, i = new Set;
                for (let {
                        originalToDuplicate: e
                    } of t)
                    for (let {
                            value: t
                        } of e.getByTable(v().evP)) {
                        var a;
                        if (!t || i.has(t.id)) continue;
                        i.add(t.id);
                        let e = c().B.createChildStore(o, t),
                            l = (0, R().g)(e),
                            s = "transclusion_reference" === r.getType() ? null == (a = r.getTransclusionReferenceTargetStore()) ? void 0 : a.id : r.id;
                        l.find(e => e.id === s) || (n.logDebugMessage("disposing of unwanted duplicated block", e, e.id === o.id), E().b({
                            childStore: e,
                            parentStore: r,
                            alive: !1,
                            transaction: n
                        }))
                    }
            }

            function z() {}
            let X = (0, o(109939).YK)({
                    offlineError: {
                        id: "clipboardActions.offlineError.message",
                        defaultMessage: "Please go online to copy this block."
                    },
                    untitled: {
                        defaultMessage: "Untitled",
                        id: "clipboardActions.untitledMessage"
                    }
                }),
                H = { ...o(804518).fileExtensionToCodeLanguageMap,
                    dockerfile: "Docker",
                    javascriptreact: "JavaScript",
                    jsonc: "JSON",
                    "objective-c": "Objective-C",
                    proto: "Protobuf",
                    shellscript: "Shell",
                    typescriptreact: "TypeScript",
                    vb: "Visual Basic"
                },
                j = "text/_notion-blocks-v3-production",
                $ = "text/_notion-text-production",
                q = "text/_notion-multi-text-production",
                G = "text/_notion-page-source-production",
                Q = [j, $, q, G],
                J = new Set(Q),
                Z = {
                    fromJson: e => e,
                    toJson: e => e
                },
                K = {
                    fromJson(e) {
                        let t = (0, o(17224).v)(e.tree, e => e),
                            r = Y.fromJson(e.blockSelection);
                        return { ...e,
                            tree: t,
                            blockSelection: r
                        }
                    },
                    toJson(e) {
                        let t = Y.toJson(e.blockSelection);
                        return { ...e,
                            blockSelection: t
                        }
                    }
                },
                Y = {
                    fromJson: e => ({ ...e,
                        blocks: e.blocks.map(e => ({ ...e,
                            blockSubtree: e.blockSubtree ? o(412951).RecordMap.create(e.blockSubtree) : void 0
                        }))
                    }),
                    toJson: e => ({ ...e,
                        blocks: e.blocks.map(e => ({ ...e,
                            blockSubtree: e.blockSubtree ? e.blockSubtree.toJson() : void 0
                        }))
                    })
                },
                ee = "VirtualClipboard:production",
                et = new(o(274919)).Ay({
                    namespace: o(274919).Bq,
                    important: !0,
                    trackingType: "necessary"
                });

            function eo(e) {
                r = {
                    id: e.id,
                    mimeTypes: e.mimeTypes
                }, n = !0;
                try {
                    et.set(ee, r)
                } catch (t) {
                    o(773352).log({
                        level: "error",
                        from: "clipboardActions",
                        type: e.source,
                        error: {
                            message: "Unable to persistently store virtual clipboard data."
                        }
                    })
                }
            }

            function er(e, t, o) {
                try {
                    let r = e.getData(t),
                        n = JSON.parse(r);
                    return o.fromJson(n)
                } catch (e) {}
            }

            function en(e) {
                let {
                    clipboardData: t
                } = e, {
                    text: r,
                    html: n,
                    isFromMicrosoftOffice: i,
                    isHtmlTable: a
                } = function(e) {
                    var t, r;
                    let n, i, {
                            clipboardData: a,
                            tinyMceMicrosoftWordPasteFilter: s
                        } = e,
                        c = a.getData("text/uri-list"),
                        d = a.getData("text/plain").replace(eO, "\n") || c,
                        u = a.getData("text/html");
                    for (let e of eV) {
                        let t = a.getData(e);
                        if (t) {
                            let {
                                ops: e
                            } = JSON.parse(t);
                            e && (u = new(l()).Ss(e, {}).convert())
                        }
                    }
                    let p = eB(u),
                        {
                            isHtmlTable: f,
                            htmlContainsRichFormatting: g
                        } = (t = {
                            html: u,
                            tinyMceMicrosoftWordPasteFilter: s
                        }, (n = document.createElement("div")).innerHTML = e_(t), i = (null == (r = n.firstElementChild) ? void 0 : r.nodeName.toLowerCase()) === "table", {
                            htmlContainsRichFormatting: o(253050).HZ({
                                node: n,
                                window: function(e) {
                                    return e
                                }(window),
                                emojiData: o(753281).A.state
                            }),
                            isHtmlTable: i
                        });
                    return g || eU.test(u) && eU.test(d) ? {
                        text: d,
                        html: u,
                        isFromMicrosoftOffice: p,
                        isHtmlTable: f
                    } : {
                        text: d,
                        isFromMicrosoftOffice: p,
                        isHtmlTable: f
                    }
                }(e), s = er(t, q, K);
                return {
                    text: r,
                    html: n,
                    multiTextSelectionData: s,
                    textSelectionData: er(t, $, Z),
                    blockSelectionData: er(t, j, Y),
                    isFromMicrosoftOffice: i,
                    isHtmlTable: a
                }
            }

            function ei(e) {
                let {
                    blocks: t,
                    action: r,
                    environment: n
                } = e;
                if (0 === t.length) return {
                    action: r,
                    blocks: [],
                    wasContiguousSelection: !1
                };
                let i = t[0],
                    a = i.inMemoryRecordCache,
                    l = o(381453).sb(o(381453).oE(t.map(e => e.id))),
                    s = i.getParentBlockStore(),
                    c = s ? s.getRenderableContentIds() : [],
                    d = c.indexOf(i.id),
                    u = !!(s && t.every((e, t) => c.indexOf(e.id) === d + t));
                if (a.isTemplatePreview) return {
                    blocks: l.map(e => ({
                        blockId: e,
                        blockSubtree: (0, I().loadLocalSubtree)({
                            environment: n,
                            blockId: e,
                            inMemoryRecordCache: a,
                            options: {
                                allowCopyCollections: !0,
                                requireFullSubtree: !1,
                                skipTransclusionContainerChildren: !0,
                                allowCopyExternalObjectInstances: !0,
                                excludeCrdtData: !0,
                                includeLegacyTransclusionBlockValues: !0
                            }
                        }).recordMap
                    })),
                    action: r,
                    wasContiguousSelection: u
                };
                if (a.snapshotData) {
                    var p;
                    return p = a.snapshotData, (0, o(195857).DO_NOT_USE_trackLegacy)("history_copy", {
                        ageMs: (0, o(382441).S)(p)
                    }), {
                        blocks: l.map(e => ({
                            blockId: e,
                            blockSubtree: (0, I().loadLocalSubtree)({
                                environment: n,
                                blockId: e,
                                inMemoryRecordCache: a,
                                options: {
                                    allowCopyCollections: !0,
                                    requireFullSubtree: !0,
                                    skipNavigableChildren: !0,
                                    skipTransclusionContainerChildren: !0,
                                    allowCopyExternalObjectInstances: !0,
                                    excludeCrdtData: !0,
                                    includeLegacyTransclusionBlockValues: !0
                                }
                            }).recordMap
                        })),
                        action: r,
                        wasContiguousSelection: u,
                        wasSelectionFromSnapshot: !0
                    }
                } {
                    let e = (0, o(210528).x4)(t),
                        i = e && es({
                            environment: n,
                            inMemoryRecordCache: a,
                            multiColumnPasteInfo: e
                        });
                    if (e && i) {
                        let t = !1,
                            o = [];
                        for (let r of l) e.blockIds.has(r) ? t || (o.push({
                            blockId: e.columnListId,
                            blockSubtree: i
                        }), t = !0) : o.push({
                            blockId: r,
                            blockSubtree: (0, I().loadLocalSubtree)({
                                environment: n,
                                blockId: r,
                                inMemoryRecordCache: a,
                                options: {
                                    allowCopyCollections: !1,
                                    requireFullSubtree: !0,
                                    skipTransclusionContainerChildren: !0,
                                    allowCopyExternalObjectInstances: !0,
                                    excludeCrdtData: !0,
                                    includeLegacyTransclusionBlockValues: !0
                                }
                            }).recordMap
                        });
                        return {
                            blocks: o,
                            action: r,
                            wasContiguousSelection: u
                        }
                    }
                    return {
                        blocks: l.map(e => ({
                            blockId: e,
                            blockSubtree: (0, I().loadLocalSubtree)({
                                environment: n,
                                blockId: e,
                                inMemoryRecordCache: a,
                                options: {
                                    allowCopyCollections: !1,
                                    requireFullSubtree: !0,
                                    skipTransclusionContainerChildren: !0,
                                    allowCopyExternalObjectInstances: !0,
                                    excludeCrdtData: !0,
                                    includeLegacyTransclusionBlockValues: !0
                                }
                            }).recordMap
                        })),
                        action: r,
                        wasContiguousSelection: u
                    }
                }
            }

            function ea({
                textToken: e,
                hrefToNumberMetadata: t
            }) {
                if (!h().B8H(e)) return e;
                let o = h().uPN(e),
                    r = h().g2K(o);
                if (!r) return e;
                let n = h().NpB(r);
                if ("block" === n.type && void 0 !== n.citationNumber) return [""];
                let i = n.href,
                    a = t.map.get(i);
                return a || (a = t.currentNumber++, t.map.set(i, a)), h().Ey_(`[${a}]`, [h().Sez(i)])
            }

            function el(e) {
                let {
                    markdown: t,
                    markdownOptions: r,
                    markdownLinkifyIt: n
                } = e;
                if (n) return o(593430).uY({ ...n,
                    markdown: t,
                    plugin: null == r ? void 0 : r.plugin,
                    disable: null == r ? void 0 : r.disable
                })
            }

            function es(e) {
                var t, r;
                let {
                    environment: n,
                    multiColumnPasteInfo: i,
                    inMemoryRecordCache: a
                } = e, {
                    columnListId: l,
                    columnIds: s,
                    spaceId: c
                } = i, d = o(412951).RecordMap.create(), u = null == (t = a.getEntry({
                    pointer: {
                        table: v().evP,
                        id: l,
                        spaceId: c
                    },
                    userId: n.currentUser.id
                })) ? void 0 : t.value.value;
                if ((null == u ? void 0 : u.type) !== "column_list") return;
                let p = { ...u,
                    content: (u.content || []).filter(e => s.has(e))
                };
                for (let e of (d.setValue({
                        table: v().evP,
                        id: l,
                        spaceId: c
                    }, p), s)) {
                    let t = null == (r = a.getEntry({
                        pointer: {
                            table: v().evP,
                            id: e,
                            spaceId: c
                        },
                        userId: n.currentUser.id
                    })) ? void 0 : r.value.value;
                    if ((null == t ? void 0 : t.type) !== "column") return;
                    let o = { ...t,
                        content: (t.content || []).filter(e => i.blockIds.has(e))
                    };
                    d.setValue({
                        table: v().evP,
                        id: e,
                        spaceId: c
                    }, o)
                }
                let f = [d];
                for (let e of i.blockIds) {
                    let t = (0, I().loadLocalSubtree)({
                        environment: n,
                        blockId: e,
                        inMemoryRecordCache: a,
                        options: {
                            allowCopyCollections: !1,
                            requireFullSubtree: !0,
                            skipTransclusionContainerChildren: !0,
                            allowCopyExternalObjectInstances: !0,
                            excludeCrdtData: !0,
                            includeLegacyTransclusionBlockValues: !0
                        }
                    }).recordMap;
                    if (!t) return;
                    f.push(t)
                }
                return o(412951).RecordMap.merge(f)
            }

            function ec(e) {
                let {
                    rootBlock: t,
                    getRecordValue: r,
                    spaceIdCreator: n
                } = e, i = r(t);
                if (!i) return;
                let a = (0, o(975908).zN)({
                    block: i,
                    getRecordValue: r
                });
                if (!a) return;
                let l = (0, o(210528).M9)({
                        rootBlock: t,
                        getRecordValue: r,
                        formulasModule: o(299512),
                        spaceIdCreator: n
                    }),
                    s = g().Bj6.fromCollection(a).getNormalizedSchema(g().b4_.fromGetRecordValueFn(r)),
                    c = Object.keys(s),
                    d = o(381453).Ul(c, e => {
                        let t = s[e];
                        return t && t.name || ""
                    }),
                    u = "";
                for (let e of d) {
                    let t = s[e];
                    if (t && "title" !== e) {
                        let o = (0, f().sL)({
                            property: e,
                            schema: s,
                            block: i,
                            exportArgs: l,
                            renderers: p().z
                        });
                        o && (u += `${t.name}: ${o}
`)
                    }
                }
                return u || void 0
            }

            function ed(e) {
                let {
                    environment: t,
                    pageStore: r
                } = e;
                if (!r.isDefined()) return;
                let n = (0, I().loadLocalSubtree)({
                    environment: t,
                    blockId: r.id,
                    inMemoryRecordCache: r.inMemoryRecordCache,
                    options: {
                        allowCopyCollections: !1,
                        requireFullSubtree: !0,
                        skipTransclusionContainerChildren: !0,
                        allowCopyExternalObjectInstances: !0,
                        excludeCrdtData: !0,
                        includeLegacyTransclusionBlockValues: !0
                    }
                });
                if ("success" !== n.type) return;
                let {
                    markdown: i
                } = (0, o(210528).ZI)({
                    rootBlock: { ...r.pointer,
                        spaceId: r.getSpaceId()
                    },
                    getRecordValue: o(95476).xb.fromRecordMap(n.recordMap),
                    blockValues: r.getRenderableContentIds().map(e => n.recordMap.inner.get({
                        table: v().evP,
                        id: e
                    })).filter(k().O9),
                    isWindows: t.device.isWindows,
                    markdownLinkifyIt: void 0,
                    formulasModule: o(299512),
                    spaceIdCreator: t.idCreator.getSpaceIdCreatorSync(r.getSpaceId())
                });
                return i
            }

            function eu(e) {
                let {
                    treePath: t,
                    textPosition: r,
                    endpoint: n
                } = e, {
                    store: i,
                    index: a
                } = r, l = t.map(e => e.value.store.pointer), s = o(130063).S(r.store) ? ["properties", "title"] : r.store.path, c = h().AI5(i.getValue(), a, a);
                return {
                    copiedText: "end" === n ? c.tokensBeforeRange : c.tokensAfterRange,
                    textIndex: a,
                    attributePath: s,
                    pointerPath: l
                }
            }

            function ep(e) {
                var t, r, n;
                let {
                    multiSelection: i,
                    action: a,
                    environment: l
                } = e;
                (0, o(689461).K)(i) && console.warn("Warning, serializeMultiTextSelectionToClipboardData() was called with a single-store text selection! This function should only be  called with a multi-selection that spans multiple blocks.");
                let s = null == (t = (0, o(358538).Z)({
                    filterCommonAncestors: !0,
                    multiSelection: i,
                    focus: void 0
                })) ? void 0 : t.stores;
                if (!s) return;
                let c = i.start.store.inMemoryRecordCache,
                    d = ei({
                        action: a,
                        blocks: s,
                        environment: l
                    });
                if (0 === d.blocks.length) return;
                let u = (0, o(560917).T)({
                    multiSelection: i,
                    includeNonSelectable: !1
                });
                if (!u) return;
                let {
                    treeRange: p
                } = u, f = [], m = new Map, y = (e, t) => {
                    t.forEach(e => y(e, []));
                    let o = m.get(e),
                        r = o && o.length > t.length ? o : t;
                    m.set(e, r)
                };
                for (let {
                        start: e,
                        end: t
                    } of p.iterateAnalogousNodes()) {
                    if (e) {
                        let t = e.childrenBeforeRange.slice(-1).concat(e.childrenInsideRange);
                        y(e.parent, t)
                    }
                    if (t)
                        for (let e of (y(t.parent, t.childrenInsideRange), t.childrenAfterRange)) f.push({
                            command: "removeChild",
                            path: ["content"],
                            pointer: t.parent.value.store.pointer,
                            args: {
                                id: e.value.store.id
                            }
                        })
                }
                let S = eu({
                        textPosition: i.start,
                        endpoint: "start",
                        treePath: p.startPath
                    }),
                    k = eu({
                        textPosition: i.end,
                        endpoint: "end",
                        treePath: p.endPath
                    });
                for (let e of (f.push(...(0, o(210528).Qr)(S), ...(0, o(210528).Qr)(k)), [null == (r = d.blocks[0]) ? void 0 : r.blockSubtree, null == (n = d.blocks[d.blocks.length - 1]) ? void 0 : n.blockSubtree])) e && ((0, b().applyOperationsToRecordMap)({
                    recordMap: e,
                    operations: f,
                    updateOnly: !0
                }), function(e, t, o) {
                    let r = [];
                    for (let {
                            model: n
                        } of o)
                        if (n instanceof g().zgg && !n.alive) {
                            r.push(n.pointer);
                            let o = (0, I().loadLocalSubtree)({
                                environment: e,
                                blockId: n.pointer.id,
                                inMemoryRecordCache: t,
                                options: {
                                    allowCopyCollections: !0,
                                    requireFullSubtree: !1,
                                    skipTransclusionContainerChildren: !0,
                                    allowCopyExternalObjectInstances: !0,
                                    excludeCrdtData: !0,
                                    includeLegacyTransclusionBlockValues: !0
                                }
                            }).recordMap;
                            if (o)
                                for (let {
                                        pointer: e
                                    } of o) r.push(e)
                        }
                    for (let e of r) o.delete(e)
                }(l, c, e));
                let C = (0, o(17224).v)(p.commonAncestor, e => {
                    let t = m.get(e);
                    if (t) return {
                        value: e.value.store.pointer,
                        children: t
                    }
                });
                if (!C) return;
                let T = {
                    currentNumber: 1,
                    map: new Map
                };
                for (let {
                        blockSubtree: e
                    } of d.blocks) e && function({
                    recordMap: e,
                    hrefToNumberMetadata: t
                }) {
                    for (let o of e.getModelsByTable(v().evP)) {
                        let r = o.getNonCollectionProperty("title");
                        if (!r) continue;
                        let n = h().RQ(r).map(e => ea({
                                textToken: e,
                                hrefToNumberMetadata: t
                            })),
                            i = e.getValue(o.pointer);
                        if (i) {
                            let t = { ...i,
                                properties: { ...i.properties,
                                    title: n
                                }
                            };
                            e.setValue(o.pointer, t)
                        }
                    }
                }({
                    recordMap: e,
                    hrefToNumberMetadata: T
                });
                return S.copiedText = h().RQ(S.copiedText).map(e => ea({
                    textToken: e,
                    hrefToNumberMetadata: T
                })), k.copiedText = h().RQ(k.copiedText).map(e => ea({
                    textToken: e,
                    hrefToNumberMetadata: T
                })), {
                    blockSelection: d,
                    tree: C,
                    multiTextSelection: {
                        start: S,
                        end: k
                    },
                    action: a
                }
            }

            function ef(e) {
                let {
                    environment: t,
                    action: r,
                    markdownLinkifyIt: n
                } = e, i = o(584265).default.state.stores, a = o(358377).default.isEditingComment(), l = o(863182).A.state.open, s = o(169274).wg(), c = "empty" !== o(358377).default.state.mode && o(358377).default.state.multiSelection, d = t.currentUser.id, p = {
                    notionData: []
                }, f = (0, o(385941).Z)();
                f && (0, o(496282).Yt)(f.pointer, v().evP) && (p.pageSource = f.pointer, p.notionData.push({
                    key: G,
                    data: f.pointer,
                    codec: Z
                }));
                let m = c && (0, o(778758).H)(c);
                if (m && m.selection.startIndex !== m.selection.endIndex) {
                    let e = o(962299).A.getIntl(),
                        {
                            store: n,
                            selection: i
                        } = m,
                        a = n.inMemoryRecordCache,
                        l = n.getValue(),
                        s = eR(),
                        c = {
                            currentNumber: 1,
                            map: new Map
                        };
                    if (l && !s) {
                        let e = n.table === v().evP ? (0, o(534012).T)(n) : void 0,
                            t = e && o(381453).n4(n.path, e.getBlockTitleStore().path) ? e.getType() : void 0,
                            a = t && (0, u().aO)(t) ? t : void 0,
                            s = l.map(e => ea({
                                textToken: e,
                                hrefToNumberMetadata: c
                            })).filter(e => !h().jR$(e));
                        p.notionData.push({
                            key: $,
                            data: {
                                blockType: a,
                                editing: s,
                                selection: i,
                                action: r
                            },
                            codec: Z
                        })
                    }
                    let f = h().Ffo(l, i.startIndex, i.endIndex).map(e => ea({
                            textToken: e,
                            hrefToNumberMetadata: c
                        })),
                        b = g().b4_.fromGetRecordValueFn(a.makeGetRecordValueFn(d)),
                        y = a.makeGetRecordRoleFn(d),
                        S = null == s ? void 0 : s.valueTypes,
                        k = new Set,
                        C = f.map(t => {
                            let r = h().uPN(t),
                                n = h().VtW(r);
                            if (n) {
                                let e = h().cQR(n),
                                    o = h().N8A(t);
                                return o === e ? e : `[${o}](${e})`
                            }
                            return (0, o(458230).t2)({
                                token: t,
                                getRecordModel: b,
                                intl: e,
                                prefix: "@",
                                seenBlocks: k,
                                userTimeZone: (0, o(714350).P)(),
                                renderDateAnnotationsAsISO: !1,
                                deterministic: !1,
                                externalIntegrations: o(610463).A.integrations.state,
                                disableInsertedAnnotations: !1,
                                valueTypes: S
                            }) ? ? ""
                        }).join("");
                    p.text = (0, o(210528).Df)(t.device.isWindows, C);
                    let I = (0, o(605351).$e)({
                        textValue: f && {
                            value: f,
                            spaceId: (0, o(226221).e)(n.pointer.spaceId)
                        },
                        getRecordModel: b,
                        getRecordRole: y,
                        userTimeZone: (0, o(714350).P)(),
                        isAndroid: !1,
                        isSafariOrIOS: !1,
                        isFirefox: !1,
                        isWindows: !1,
                        disableLinks: !1,
                        disabled: !0,
                        disableHover: !1,
                        disableStyleAnnotations: !1,
                        disableInsertedDeletedAnnotations: !1,
                        disableDateStyleAnnotations: !1,
                        disableSuggestionAnnotations: !1,
                        baseUrl: o(986939).A.domainBaseUrl,
                        publicDomainName: o(986939).A.publicDomainName,
                        emojiType: "raw",
                        theme: (0, o(632079).x0)(),
                        themeMode: o(632079).Ar,
                        intl: e,
                        katex: void 0,
                        isClient: void 0,
                        currentUserId: void 0,
                        getPublicBaseUrlForPageOrCollection: e => e.table === v().evP ? (0, o(483227).QN)(e) : o(135007).tN(t)(e),
                        externalIntegrations: o(610463).A.integrations.state,
                        formulaValueTypes: [],
                        emojiData: o(753281).A.state,
                        isMobileNative: !1,
                        ignoreNumberedBlockCitationAnnotations: !0
                    });
                    return p.html = (0, o(210528).Df)(t.device.isWindows, I), p
                }
                if (c && !(0, o(971541).k)(c) && !a && c.start.store.table === v().evP && c.end.store.table === v().evP) {
                    let e = ep({
                        environment: t,
                        multiSelection: c,
                        action: r
                    });
                    if (e) {
                        p.notionData.push({
                            key: q,
                            data: e,
                            codec: K
                        });
                        let {
                            markdown: r,
                            html: i
                        } = (0, o(210528).Ij)({
                            clipboardData: e,
                            multiSelection: c,
                            currentUserId: d,
                            isWindows: t.device.isWindows,
                            markdownLinkifyIt: n,
                            formulasModule: o(299512),
                            spaceIdCreator: t.idCreator.getSpaceIdCreatorSync(c.start.store.pointer.spaceId || "")
                        });
                        return r && (p.text = r), i && (p.html = i), p
                    }
                }
                if (c && !(0, o(971541).k)(c) && !a && c.start.store.table === v().SNf && c.end.store.table === v().SNf) {
                    let e = (0, o(58512).$)(c),
                        r = o(962299).A.getIntl(),
                        n = e.map(({
                            store: e,
                            selection: n
                        }) => {
                            if (n.startIndex === n.endIndex) return;
                            let i = e.inMemoryRecordCache,
                                a = g().b4_.fromGetRecordValueFn(i.makeGetRecordValueFn(d)),
                                l = i.makeGetRecordRoleFn(d),
                                s = h().Ffo(e.getValue(), n.startIndex, n.endIndex);
                            return {
                                plainText: (0, o(458230).r4)({
                                    intl: r,
                                    textValue: s,
                                    getRecordModel: a,
                                    userTimeZone: (0, o(714350).P)(),
                                    externalIntegrations: o(610463).A.integrations.state
                                }),
                                htmlContent: (0, o(605351).$e)({
                                    textValue: s && {
                                        value: s,
                                        spaceId: (0, o(226221).e)(e.pointer.spaceId)
                                    },
                                    getRecordModel: a,
                                    getRecordRole: l,
                                    userTimeZone: (0, o(714350).P)(),
                                    isAndroid: !1,
                                    isSafariOrIOS: !1,
                                    isFirefox: !1,
                                    isWindows: !1,
                                    disableLinks: !1,
                                    disabled: !0,
                                    disableHover: !1,
                                    disableStyleAnnotations: !1,
                                    disableInsertedDeletedAnnotations: !1,
                                    disableDateStyleAnnotations: !1,
                                    disableSuggestionAnnotations: !1,
                                    baseUrl: o(986939).A.domainBaseUrl,
                                    publicDomainName: o(986939).A.publicDomainName,
                                    emojiType: "raw",
                                    theme: (0, o(632079).x0)(),
                                    themeMode: o(632079).Ar,
                                    intl: r,
                                    katex: void 0,
                                    isClient: void 0,
                                    currentUserId: void 0,
                                    getPublicBaseUrlForPageOrCollection: o(135007).tN(t),
                                    externalIntegrations: o(610463).A.integrations.state,
                                    formulaValueTypes: [],
                                    emojiData: o(753281).A.state,
                                    isMobileNative: !1
                                }),
                                textValue: s
                            }
                        }).filter(k().O9),
                        i = n.map(e => e.plainText).join("\n\n"),
                        a = `<div>${n.map(e=>e.htmlContent).join("</div><div>")}</div>`;
                    return p.text = (0, o(210528).Df)(t.device.isWindows, i), p.html = (0, o(210528).Df)(t.device.isWindows, a), p
                }
                if (i.length > 0 && !a && !s && !l) {
                    let e = i[0],
                        a = e.inMemoryRecordCache,
                        l = ei({
                            blocks: i,
                            environment: t,
                            action: r
                        });
                    if (p.notionData.push({
                            key: j,
                            data: l,
                            codec: Y
                        }), !e.isDefined()) return p;
                    let s = o(381453).oE(i.map(e => e.computeWithRecordValues(({
                            getRecordValueAndSubscribe: t
                        }) => t(e)))),
                        c = a.makeGetRecordValueFn(d),
                        {
                            markdown: u,
                            html: f
                        } = (0, o(210528).ZI)({
                            rootBlock: {
                                id: e.id,
                                table: v().evP,
                                spaceId: e.getSpaceId()
                            },
                            blockValues: s,
                            getRecordValue: c,
                            isWindows: t.device.isWindows,
                            markdownLinkifyIt: n,
                            formulasModule: o(299512),
                            spaceIdCreator: t.idCreator.getSpaceIdCreatorSync(e.getSpaceId())
                        });
                    u && (p.text = u), f && (p.html = f)
                }
                return p
            }
            async function eg(e) {
                let {
                    event: t,
                    environment: r,
                    markdownLinkifyIt: n
                } = e;
                M();
                let i = o(584265).default.state.stores,
                    a = o(358377).default.isEditingComment(),
                    l = (0, o(428375).f)(),
                    s = "editing" === o(358377).default.state.mode && o(358377).default.state.multiSelection,
                    {
                        phase: c
                    } = o(584265).default.state;
                if (em({
                        environment: r,
                        event: t,
                        disableSyncTextSelection: !0,
                        markdownLinkifyIt: n
                    }), s && !(0, o(971541).k)(s)) {
                    let e = (0, o(746473).aP)(s.start.store),
                        t = e ? o(708929).Uv.getMode(e) : "default",
                        n = null == e ? void 0 : e.getSpaceId();
                    (0, o(377796).createAndCommit)({
                        userAction: "clipboardActions.cutWithMaybeConfirmation",
                        environment: r,
                        cellTarget: n ? {
                            spaceWithId: n
                        } : void 0,
                        canUndo: !0,
                        perform: n => {
                            if ("suggest" === t) {
                                let t = (0, o(714577).R)(r, n, e);
                                (0, o(133803).r)({
                                    environment: r,
                                    multiSelection: s,
                                    transaction: n,
                                    discussionStore: t
                                })
                            } else o(41403).f0({
                                environment: r,
                                multiSelection: s,
                                transaction: n
                            })
                        }
                    })
                } else c !== o(476987).o.Selected && !s || !(i.length > 0) || a || l || i.some(e => e.isLocked()) || await (0, o(660262).A)({
                    environment: r,
                    blocks: i,
                    shouldCheckSuggestEdit: !0
                });
                o(200083).A.setKeyboardMode(!0)
            }

            function em(e) {
                let {
                    environment: t,
                    event: r,
                    disableSyncTextSelection: n,
                    markdownLinkifyIt: i
                } = e;
                n || M(),
                    function(e) {
                        let {
                            environment: t,
                            event: r
                        } = e, n = o(92513).JW();
                        (function(e) {
                            var t;
                            let {
                                environment: o,
                                event: r,
                                markdownLinkifyIt: n
                            } = e;
                            if (!r.clipboardData) return;
                            let i = ef({
                                environment: o,
                                action: "copy" === r.type ? "copy" : "cut",
                                markdownLinkifyIt: n
                            });
                            if (z("copy: serializedData", i), !i || !i.text && !i.html && !(null != (t = i.notionData) && t.length)) return z("copy: doing nothing");
                            if (r.preventDefault(), i.notionData)
                                for (let {
                                        key: e,
                                        data: t,
                                        codec: o
                                    } of i.notionData) ! function({
                                    event: e,
                                    key: t,
                                    codec: o,
                                    data: r
                                }) {
                                    if (!e.clipboardData) return;
                                    let n = JSON.stringify(o.toJson(r));
                                    e.clipboardData.setData(t, n)
                                }({
                                    event: r,
                                    key: e,
                                    codec: o,
                                    data: t
                                });
                            i.text && r.clipboardData.setData("text/plain", i.text), i.html && r.clipboardData.setData("text/html", i.html)
                        })(e), (0, o(210528).dk)(r, n),
                        function({
                            event: e,
                            device: t,
                            customEventId: r
                        }) {
                            if (!e.clipboardData || !t.isAndroid) return;
                            let n = {};
                            for (let t of Q) n[t] = e.clipboardData.getData(t);
                            let i = e.clipboardData.getData("text/html");
                            e.clipboardData.setData("text/html", `${i}${(0,o(210528).uE)(r)}`), eo({
                                id: r,
                                mimeTypes: n,
                                source: "setVirtualClipboardData"
                            })
                        }({
                            event: r,
                            device: t.device,
                            customEventId: n
                        })
                    }({
                        environment: t,
                        event: r,
                        markdownLinkifyIt: i
                    }), o(200083).A.setKeyboardMode(!0)
            }

            function eb(e) {
                var t;
                let {
                    environment: r,
                    files: n,
                    transaction: i,
                    insertBelowBlockStore: a
                } = e, l = o(584265).default.getCurrentRecordCache(), s = (0, o(830479).y)(r);
                if (!l) return;
                let c = o(584265).default.state.stores,
                    d = o(556533).$C({
                        environment: r,
                        files: n,
                        inMemoryRecordCache: l,
                        transaction: i,
                        pageWidth: s,
                        spaceId: 0 !== c.length ? c[0].pointer.spaceId : null == (t = (0, o(385941).Z)()) ? void 0 : t.pointer.spaceId
                    });
                d.forEach(e => {
                    let t = e.getType();
                    t && o(549960).vH(r, {
                        from: "paste",
                        type: t,
                        creating_block_id: e.id
                    })
                }), ek({
                    environment: r,
                    blocks: d,
                    transaction: i,
                    replaceEmptyTextBlock: !0,
                    insertBelowBlockStore: a
                })
            }

            function ey(e) {
                let {
                    environment: t,
                    store: r,
                    tokens: n,
                    index: i,
                    transaction: a,
                    multiTextSelection: l,
                    disableEmbedMenu: s,
                    selectAll: c
                } = e, d = (0, o(778758).H)(l), u = d ? {
                    value: d.store.getValue()
                } : void 0, p = (0, o(746473).aP)(r), f = p ? o(708929).Uv.getMode(p) : "default", g = o(358377).default.isEditingComment() || o(358377).default.isEditingCaption(), m = p && "page" === p.getType() && p.getBlockTitleStore() === r, b = n;
                (g || m) && (b = function(e) {
                    let {
                        tokens: t
                    } = e, r = ev(t);
                    if (r && r.url === r.text) {
                        let e = (0, o(132702).parseRoute)({
                            url: r.url,
                            baseUrl: o(986939).A.domainBaseUrl,
                            publicDomainName: o(986939).A.publicDomainName,
                            isMobile: o(986939).A.isMobile,
                            protocol: o(986939).A.protocol,
                            currentUrl: window.location.href,
                            requestedOnAlternateDomain: (0, o(700473).wasRequestedOnAlternateDomain)()
                        });
                        if ("page" === e.name && e.blockId) {
                            let t = h().ld4(e.scrollToBlockId ? ? e.blockId, void 0);
                            return [h().wmz(t), h().Ey_(" ")]
                        }
                        if ("collection" === e.name) {
                            let t = h().ETy({
                                collectionId: e.collectionId,
                                spaceId: e.space && "id" in e.space ? e.space.id : void 0,
                                parentCvbId: e.parentBlockId
                            });
                            return [h().wmz(t), h().Ey_(" ")]
                        }
                    }
                    return t
                }({
                    environment: t,
                    tokens: n
                })), o(41403).yr({
                    environment: t,
                    store: r,
                    tokens: b,
                    index: i,
                    transaction: a,
                    selectAll: c,
                    editorMode: f
                });
                let y = ev(b);
                !s && u && y && "suggest" !== f && function(e) {
                    let {
                        environment: t,
                        hyperlink: r,
                        oldTextValue: n
                    } = e, i = "editing" === o(358377).default.state.mode && (0, o(778758).H)(o(358377).default.state.multiSelection), a = o(584265).default.state;
                    if (i && a.stores.length > 0) {
                        let e = i.store.getValue(),
                            a = h().q4_(e),
                            l = o(871871).PE(a.substring(0, a.indexOf(r.text))).length,
                            s = l + o(871871).PE(r.text).length;
                        if ((i.store.isTable(v().evP) || i.store.isTable(v().SNf)) && (o(994869).activateFromLinkCreation({
                                environment: t,
                                blockStore: o(584265).default.state.stores[0],
                                textStore: i.store,
                                textValueBeforePaste: n,
                                url: r.url,
                                urlSelection: {
                                    startIndex: l,
                                    endIndex: s
                                }
                            }) || o(366518).Yf({
                                environment: t,
                                textStore: i.store,
                                blockStore: o(584265).default.state.stores[0],
                                oldTextValue: n,
                                url: r.url,
                                urlSelection: {
                                    startIndex: l,
                                    endIndex: s
                                }
                            }))) return;
                        o(374176).default.afterNextFlush(() => {
                            let e = r.url;
                            o(991108).p6({
                                environment: t,
                                textStore: i.store,
                                oldTextValue: n,
                                url: e,
                                urlSelection: {
                                    startIndex: l,
                                    endIndex: s
                                }
                            })
                        })
                    }
                }({
                    environment: t,
                    hyperlink: y,
                    oldTextValue: u.value,
                    transaction: a
                })
            }

            function ev(e) {
                if (1 !== e.length) return;
                let t = e[0];
                if (!h().BEe(t)) return;
                let [o, r] = t;
                if (1 !== r.length) return;
                let n = r[0];
                if (h().sh$(n)) return {
                    text: o,
                    url: h().cQR(n)
                }
            }

            function eh(e) {
                let t = h().q4_(e).split("\n"),
                    o = [],
                    r = !1;
                for (let e of t) {
                    let t = (0, y().CX)(e);
                    if (t) {
                        let n = "  ".repeat(t.depth),
                            i = e.slice(t.prefix.length);
                        o.push(`${n}- ${i}`), r = !0;
                        continue
                    }
                    r && e.trim().length > 0 && o.push(""), o.push(e), r = !1
                }
                let n = o.join("\n");
                return o.length > 1 ? n : `${n}
`
            }

            function eS(e) {
                return e.map(e => {
                    if (!h().qXl(e)) return e;
                    let t = h().uPN(e),
                        o = h().uoE(t);
                    if (!o) return e;
                    let r = h().$sA(o),
                        n = t.filter(e => !h().fts(e));
                    return h().Ey_(r.text, n.length > 0 ? n : void 0)
                })
            }

            function ek(e) {
                let {
                    environment: t,
                    blocks: r,
                    transaction: n,
                    replaceEmptyTextBlock: i,
                    insertBelowBlockStore: a
                } = e, l = o(584265).default.state.stores;
                if (1 === l.length) {
                    let e = l[0];
                    if (e.getType() && e.isType(u().KK) && function(e) {
                            if (!("editing" === o(358377).default.state.mode && o(358377).default.state.multiSelection)) return !1;
                            let t = (0, o(778758).H)(o(358377).default.state.multiSelection);
                            return !!t && t.store === e.getTitleStore()
                        }(e)) {
                        let i = e.getContentStore(),
                            a = o(381453).o8(r).reverse().map(e => (0, o(181472).H)({
                                parentStore: i,
                                prependStore: e,
                                transaction: n
                            }).childStore);
                        return (0, o(854924).t)({
                            environment: t,
                            stores: a
                        }), a
                    }
                }
                return (0, o(210318).L)({
                    environment: t,
                    blocksToInsert: r,
                    target: a ? [a] : l,
                    transaction: n,
                    replaceEmptyTextBlock: i
                })
            }

            function eC(e) {
                let {
                    environment: t,
                    transaction: r,
                    pastedBlocks: n
                } = e, i = (0, o(714577).R)(t, r, n[0]), a = [];
                n.forEach(e => {
                    let t = {
                        type: "insert",
                        id: o(92513).JW(),
                        discussionId: i.id
                    };
                    (0, o(132993).t)(r, e, t), a.push(e.id)
                }), r.preEnqueueActions.push(() => {
                    (0, o(941538).c)({
                        environment: t,
                        transaction: r,
                        discussionStore: i,
                        addModifiedBlockIdsAfter: a
                    })
                }), o(589873).Ug({
                    environment: t,
                    blocks: n,
                    annotation: [h().Ifu.SuggestionInsertText, i.id],
                    transaction: r
                })
            }

            function eI(e) {
                let {
                    environment: t,
                    blockSelectionData: r,
                    pageSource: n,
                    transaction: i
                } = e, a = (0, o(385941).Z)();
                if (!a) return;
                let l = o(584265).default.state.stores,
                    s = 0 !== l.length ? l[0].getSpaceId() : a.getSpaceId(),
                    p = "suggest" === o(708929).Uv.getMode(a, !0),
                    f = function(e, t) {
                        if ("cut" !== t.action) return;
                        let r = "suggest" === o(708929).Uv.getMode(e, !0),
                            n = [];
                        for (let o of t.blocks) {
                            let t = c().B.createChildStore(e, {
                                table: v().evP,
                                id: o.blockId
                            });
                            if (!t.isReady()) return;
                            let i = t.getModel();
                            if (!i || i.getSpaceId() !== e.getSpaceId() || !1 !== i.alive) return;
                            (!r || u().ei[i.getType()]) && n.push(t)
                        }
                        return n
                    }(a, r),
                    m = o(218744).default.checkGate({
                        gateName: "duplicate_subtree_advanced_flows"
                    });
                if (!f && m) return void
                function(e) {
                    let {
                        environment: t,
                        blockSelectionData: r,
                        pageSource: n,
                        rootStore: i,
                        transaction: a,
                        isSuggestMode: l
                    } = e, s = r.blocks.flatMap(({
                        blockId: e,
                        blockSubtree: t
                    }) => {
                        let o = c().B.createChildStore(i, {
                            table: v().evP,
                            id: e,
                            spaceId: null == n ? void 0 : n.spaceId
                        });
                        if (l) {
                            let r;
                            if (o.isDefined()) r = o.getModel();
                            else {
                                let o = null == t ? void 0 : t.getModel({
                                    table: v().evP,
                                    id: e
                                });
                                r = o ? g().Bj6.fromBlock(o) : void 0
                            }
                            if (r && !u().ei[r.getType()]) return []
                        }
                        return [o]
                    });
                    if (0 === s.length) return;
                    let {
                        destination: p,
                        startId: f,
                        selectedBlockStore: m,
                        parentStore: b
                    } = function(e) {
                        let {
                            rootStore: t
                        } = e, r = o(584265).default.state.stores, n = (0, o(494010).vC)(t.getSpaceShardedPointer());
                        if (0 === r.length) return {
                            destination: n,
                            startId: t.getContentIds().at(-1) ? ? "",
                            selectedBlockStore: t,
                            parentStore: t
                        };
                        let i = r.at(-1);
                        if (!i) return {
                            destination: n,
                            selectedBlockStore: t,
                            parentStore: t
                        };
                        let a = i.getParentStore();
                        if ((null == a ? void 0 : a.table) === "collection" && i.id === t.id) return {
                            destination: n,
                            startId: i.getContentIds().at(-1) ? ? "",
                            selectedBlockStore: i,
                            parentStore: i
                        };
                        if ((null == a ? void 0 : a.table) === "collection" && i.id !== t.id) {
                            let e = {
                                table: "collection",
                                id: a.id,
                                spaceId: i.getSpaceId() ? ? ""
                            };
                            if ((0, o(494010).Hu)(e)) return {
                                destination: (0, o(494010).vC)(e),
                                startId: i.id,
                                selectedBlockStore: i,
                                parentStore: a
                            }
                        }
                        if (1 === r.length && "quote" === i.getType()) return {
                            destination: (0, o(494010).vC)(i.getSpaceShardedPointer()),
                            selectedBlockStore: i,
                            parentStore: i
                        };
                        if ((null == a ? void 0 : a.table) === "block") {
                            let e = a.getSpaceShardedPointer();
                            if ((0, o(494010).Hu)(e)) return {
                                destination: (0, o(494010).vC)(e),
                                startId: i.id,
                                selectedBlockStore: i,
                                parentStore: a
                            }
                        }
                        return {
                            destination: n,
                            startId: i.id,
                            selectedBlockStore: i,
                            parentStore: t
                        }
                    }({
                        rootStore: i
                    }), y = function(e) {
                        let {
                            selectedBlockStore: t,
                            sourceBlocks: r,
                            environment: n,
                            transaction: i,
                            parentStore: a,
                            defaultDestination: l
                        } = e, s = [], c = e.startId;
                        for (let e = 0; e < r.length; e++) {
                            let e;
                            "collection" === l.type && a instanceof d().m ? e = (0, C().O)({
                                environment: n,
                                droppedStore: t,
                                collectionStore: a,
                                transaction: i
                            }) : (e = T().Wv({
                                environment: n,
                                type: u().xd.copyIndicator,
                                inMemoryRecordCache: t.inMemoryRecordCache,
                                transaction: i,
                                spaceId: l.parent.spaceId
                            }), (0, x().NI)({
                                childStore: e,
                                parentStore: a,
                                transaction: i,
                                after: c
                            })), s.push(e), c = e.id
                        }
                        return t.isEmptyTextBlock() && (0, o(596740).Z)({
                            environment: n,
                            blocks: [t],
                            transaction: i
                        }), s.map(e => e.id)
                    }({
                        selectedBlockStore: m,
                        sourceBlocks: s,
                        environment: t,
                        transaction: a,
                        defaultDestination: p,
                        parentStore: b,
                        startId: f
                    }), h = { ...p,
                        existingBlockIds: y
                    };
                    (0, o(558254).y)({
                        environment: t,
                        sourceBlocks: s,
                        destination: h,
                        transaction: a,
                        options: {
                            addCopyName: !0,
                            allowRedundancy: !1,
                            deepCopyTransclusionContainers: !1,
                            resolveTemplateVariables: !1,
                            convertExternalObjectInstancesToPlaceholders: !1
                        },
                        from: "paste",
                        listener: e => {
                            if ("local_completed" === e.type) {
                                let a = e.createdBlocks,
                                    l = a.map(e => e.id);
                                o(374176).default.afterNextFlush(() => {
                                    o(374176).default.afterNextFlush(() => {
                                        (0, o(773777).d)(t, l)
                                    })
                                }), n && o(374176).default.afterNextFlush(async () => {
                                    await o(975162).lX(a, 25, e => e.waitUntil(() => e.isReady()));
                                    let e = w().T.filter(e => l.includes(e.props.store.id) && !e.props.isHoverMenu).map(e => e.props.store);
                                    e.length > 0 && o(997547).ei({
                                        environment: t,
                                        blocks: e,
                                        pageSource: n,
                                        copiedStores: s,
                                        action: r.action,
                                        wasContiguousSelection: r.wasContiguousSelection,
                                        rootStore: i
                                    }) && o(997547).gi({
                                        copiedStores: s,
                                        blocks: e,
                                        pageSource: n
                                    })
                                })
                            } else if ("completed" === e.type && ("collection" === h.parent.table && (0, o(773777).d)(t, e.createdBlocks.map(e => e.id)), l)) {
                                let r = i.getSpaceId();
                                (0, o(377796).createAndCommit)({
                                    environment: t,
                                    userAction: "paste.suggestAnnotations",
                                    cellTarget: r ? {
                                        spaceWithId: r
                                    } : void 0,
                                    canUndo: !0,
                                    perform: o => {
                                        eC({
                                            environment: t,
                                            transaction: o,
                                            pastedBlocks: e.createdBlocks
                                        })
                                    }
                                })
                            }
                        }
                    })
                }({
                    environment: t,
                    blockSelectionData: r,
                    pageSource: n,
                    rootStore: a,
                    transaction: i,
                    isSuggestMode: p
                });
                if (!f) {
                    let e = JSON.stringify(r).length > o(386281).vs;
                    o(218744).default.checkGate({
                        gateName: "increased_transaction_size_limit"
                    }) && (e = 16 * JSON.stringify(r).length > .8 * o(386281).He()), f = function(e) {
                        let {
                            environment: t,
                            rootStore: r,
                            blockSelectionData: n,
                            pageSource: i,
                            transaction: a,
                            isSuggestMode: l,
                            spaceId: s,
                            isBlockSelectionTooBig: d
                        } = e;
                        return n.blocks.reduce((e, {
                            blockId: p,
                            blockSubtree: f
                        }) => {
                            var m, b, y, S;
                            let k, C = c().B.createChildStore(r, {
                                table: v().evP,
                                id: p,
                                spaceId: null == i ? void 0 : i.spaceId
                            });
                            if (C.isDefined()) k = C.getModel();
                            else {
                                let e = null == f ? void 0 : f.getModel({
                                    table: v().evP,
                                    id: p
                                });
                                k = e && g().Bj6.fromBlock(e)
                            }
                            if (l && k && !u().ei[k.getType()]) return e;
                            if (null != (m = k) && m.isCollectionView() && f && k.hasLinkedCollections(g().b4_.fromRecordMap(f)) && (null == (b = k) ? void 0 : b.getSpaceId()) !== s) {
                                let r = T().Wv({
                                    environment: t,
                                    type: u().xd.text,
                                    inMemoryRecordCache: C.inMemoryRecordCache,
                                    transaction: a,
                                    spaceId: s
                                });
                                return o(41403).yr({
                                    environment: t,
                                    store: r.getBlockTitleStore(),
                                    tokens: [h().wmz(h().ld4(p, k.getSpaceId()))],
                                    index: 0,
                                    transaction: a
                                }), e.push(r), e
                            }
                            let I = !((0, o(398346).l)(r) || eN() || null != (y = k) && y.isTemplateVariableContainerBlock()),
                                x = f && s && (null == (S = k) ? void 0 : S.getSpaceId()) && o(887380).Lw({
                                    sourceSpaceId: k.getSpaceId(),
                                    targetSpaceId: s,
                                    sourceBlockSubtree: f
                                });
                            if (!f || d || x) {
                                if (n.wasSelectionFromSnapshot) return o(773352).log({
                                    level: "warning",
                                    from: "clipboardActions",
                                    type: "pasteBlockSelection",
                                    data: {
                                        message: "Unable to locally duplicate pasted block selection from snapshot",
                                        miscDataToConvertToString: {
                                            blockId: p,
                                            blockType: C.getType(),
                                            blockSelectionTooBig: d,
                                            missingBlockSubtree: !f
                                        }
                                    }
                                }), e
                            } else {
                                let r = (0, o(44226).localDuplicate)({
                                        environment: t,
                                        sourceBlockId: p,
                                        targetBlockPointer: (0, o(295447).zP)({
                                            environment: t,
                                            table: v().evP,
                                            spaceId: s
                                        }),
                                        sourceBlockSubtree: f,
                                        targetInMemoryRecordCache: C.inMemoryRecordCache,
                                        options: {
                                            addCopyName: !0,
                                            allowRedundancy: !1,
                                            deepCopyTransclusionContainers: !1,
                                            resolveTemplateVariables: I,
                                            preventLegacyTransclusions: !0
                                        },
                                        from: "paste",
                                        destinationTable: v().evP,
                                        transaction: a
                                    }).targetBlockStore,
                                    n = r.getType();
                                if (n) {
                                    let e = C.getParentCollectionIdUpToTwoLevels(),
                                        i = {
                                            from: "paste",
                                            new_page_id: "page" === n ? r.id : void 0,
                                            creating_block_id: r.id,
                                            parent_collection_id: e
                                        };
                                    o(549960).tP(n) ? o(549960).vH(t, { ...i,
                                        type: n,
                                        collection_id: e || ""
                                    }) : o(549960).vH(t, { ...i,
                                        type: n
                                    })
                                }
                                return e.push(r), e
                            }
                            o(205885).A.state.online || o(647095).f1(o(962299).A.formatMessage(X.offlineError));
                            let {
                                blockStores: w,
                                onComplete: M
                            } = o(450228).duplicateBlock({
                                environment: t,
                                stores: [C],
                                transaction: a,
                                from: "paste",
                                options: {
                                    addCopyName: !0,
                                    allowRedundancy: !1,
                                    deepCopyTransclusionContainers: !1,
                                    resolveTemplateVariables: I,
                                    convertExternalObjectInstancesToPlaceholders: !1
                                },
                                targetSpaceId: s,
                                executionTarget: "server",
                                skipUserFacingMessages: !1
                            }), A = w[0], D = A.getType();
                            return M.then(e => {
                                if ("success" === e.status && D) {
                                    let e = C.getParentCollectionIdUpToTwoLevels(),
                                        r = {
                                            from: "paste",
                                            new_page_id: "page" === D ? A.id : void 0,
                                            creating_block_id: A.id,
                                            parent_collection_id: e
                                        };
                                    o(549960).tP(D) ? o(549960).vH(t, { ...r,
                                        type: D,
                                        collection_id: e || ""
                                    }) : o(549960).vH(t, { ...r,
                                        type: D
                                    })
                                }
                            }), e.push(A), e
                        }, [])
                    }({
                        environment: t,
                        rootStore: a,
                        blockSelectionData: r,
                        pageSource: n,
                        transaction: i,
                        spaceId: s,
                        isSuggestMode: p,
                        isBlockSelectionTooBig: e
                    })
                }
                p && eC({
                    environment: t,
                    transaction: i,
                    pastedBlocks: f
                }), ek({
                    environment: t,
                    blocks: f,
                    transaction: i,
                    replaceEmptyTextBlock: !0
                });
                let b = o(584265).default.state.stores,
                    y = b.length > 0 ? b : [a],
                    S = r.blocks.map(e => {
                        let t = y[0];
                        return c().B.createChildStore(t, {
                            table: v().evP,
                            id: e.blockId
                        })
                    });
                o(374176).default.afterNextFlush(async () => {
                    await Promise.all(y.map(e => e.waitUntil(() => {
                        let t = e.getType();
                        return !!(t && t !== u().xd.copyIndicator)
                    }))), await Promise.all(S.map(e => e.load())), n && o(997547).ei({
                        environment: t,
                        blocks: y,
                        pageSource: n,
                        copiedStores: S,
                        action: r.action,
                        wasContiguousSelection: r.wasContiguousSelection,
                        rootStore: a
                    }) && o(997547).gi({
                        copiedStores: S,
                        blocks: y,
                        pageSource: n
                    })
                })
            }

            function eT(e) {
                let {
                    environment: t,
                    disableEmbedMenu: r,
                    transaction: n,
                    overwrite: i,
                    selectAll: a,
                    markdownOptions: l,
                    markdownLinkifyIt: s,
                    text: c,
                    tinyMceMicrosoftWordPasteFilter: d,
                    spaceStore: u
                } = e, p = o(358377).default.state, f = eF(p);
                "editing" !== p.mode || "inline" !== f && F(c) ? i ? (n.logDebugMessage("paste: pasting as markdown overwrite"), function(e) {
                    let {
                        environment: t,
                        text: o,
                        transaction: r,
                        selectAll: n,
                        markdownOptions: i,
                        markdownLinkifyIt: a,
                        tinyMceMicrosoftWordPasteFilter: l,
                        spaceStore: s
                    } = e, c = el({
                        markdown: o,
                        markdownOptions: i,
                        markdownLinkifyIt: a
                    });
                    if (!c) return;
                    let d = ex({
                        environment: t,
                        html: c,
                        wrapInEmptyBlocks: !1,
                        tinyMceMicrosoftWordPasteFilter: l
                    });
                    d || (d = ex({
                        environment: t,
                        html: c,
                        wrapInEmptyBlocks: !0,
                        tinyMceMicrosoftWordPasteFilter: l
                    })), d && O({
                        environment: t,
                        clipboardData: d,
                        transaction: r,
                        allowPasteIntoHeaderWithoutChildren: !0,
                        selectAll: n,
                        preventLegacyTransclusions: !0,
                        spaceStore: s
                    })
                }({
                    environment: t,
                    text: c,
                    transaction: n,
                    selectAll: a,
                    markdownOptions: l,
                    markdownLinkifyIt: s,
                    tinyMceMicrosoftWordPasteFilter: d,
                    spaceStore: u
                })) : c && (n.logDebugMessage("paste: pasting as markdown append"), function(e) {
                    let {
                        environment: t,
                        text: o,
                        transaction: r,
                        markdownOptions: n,
                        markdownLinkifyIt: i,
                        tinyMceMicrosoftWordPasteFilter: a
                    } = e, l = el({
                        markdown: o,
                        markdownOptions: n,
                        markdownLinkifyIt: i
                    });
                    l && eA({
                        environment: t,
                        html: l,
                        transaction: r,
                        tinyMceMicrosoftWordPasteFilter: a
                    })
                }({
                    environment: t,
                    text: c,
                    transaction: n,
                    markdownOptions: l,
                    markdownLinkifyIt: s,
                    tinyMceMicrosoftWordPasteFilter: d
                })) : (n.logDebugMessage("paste: pasting as inline markdown"), function(e) {
                    let {
                        environment: t,
                        text: r,
                        disableEmbedMenu: n,
                        transaction: i,
                        selectAll: a,
                        markdownOptions: l,
                        markdownLinkifyIt: s,
                        tinyMceMicrosoftWordPasteFilter: c
                    } = e, d = "editing" === o(358377).default.state.mode && o(358377).default.state.multiSelection;
                    if (d) {
                        var u;
                        let e, p = (0, o(778758).H)(d);
                        if (p && (u = r, "editing" === (e = o(358377).default.state).mode && !(0, o(971541).k)(e.multiSelection) && (0, o(689461).K)(e.multiSelection) && o(159523).t6(u, "url"))) eE({
                            environment: t,
                            text: r,
                            transaction: i,
                            editingSelection: p,
                            selectAll: a
                        });
                        else if ((0, o(56968).B)("c")) {
                            let e = (0, o(534012).T)(d.start.store);
                            o(41403).$D({
                                environment: t,
                                editorMode: e ? o(708929).Uv.getMode(e) : "default",
                                multiSelection: d,
                                string: r,
                                disableMentions: !0,
                                disableEmojiCommands: !0,
                                disableSlashCommands: !0,
                                transaction: i,
                                selectAll: a
                            })
                        } else {
                            let e = s && o(593430).Z4({ ...s,
                                markdown: r,
                                plugin: null == l ? void 0 : l.plugin
                            });
                            if (!e) return;
                            eM({
                                environment: t,
                                html: e,
                                transaction: i,
                                stripText: !1,
                                stripSurroundingWhitespace: !1,
                                disableEmbedMenu: n,
                                selectAll: a,
                                markdownLinkifyIt: s,
                                tinyMceMicrosoftWordPasteFilter: c
                            })
                        }
                    }
                }({
                    environment: t,
                    text: c,
                    disableEmbedMenu: r,
                    transaction: n,
                    selectAll: a,
                    markdownOptions: l,
                    markdownLinkifyIt: s,
                    tinyMceMicrosoftWordPasteFilter: d
                }))
            }

            function ex(e) {
                var t, r, n, i;
                let a = (0, o(385941).Z)(),
                    {
                        html: l,
                        wrapInEmptyBlocks: s,
                        tinyMceMicrosoftWordPasteFilter: c,
                        environment: d
                    } = e,
                    u = eP({
                        environment: d,
                        html: l,
                        tinyMceMicrosoftWordPasteFilter: c,
                        legacyNonCrdt: !0
                    });
                if (!u) return;
                let p = o(728372).AppStoreCurrentUserStore.state;
                if (!p) return;
                let {
                    allOperations: f,
                    rootContentIds: g
                } = u;
                if (s) {
                    let e = eD(d),
                        t = eD(d);
                    if (!e || !t) return;
                    f = [e.operation, ...f, t.operation], g = [e.id, ...g, t.id]
                }
                let m = o(412951).RecordMap.create();
                (0, b().applyOperationsToRecordMap)({
                    recordMap: m,
                    operations: f,
                    updateOnly: !1
                });
                let y = [],
                    S = function(e) {
                        let {
                            name: t,
                            userId: r,
                            recordMap: n
                        } = e, i = o(412951).RecordMapWithRole.create();
                        for (let {
                                pointer: e,
                                model: t
                            } of n) i.setModelAndRole(e, t, "reader");
                        return new(o(870941)).A({
                            name: t,
                            data: new(o(48202)).UserRecordMap({
                                [r]: i
                            })
                        })
                    }({
                        name: "htmlToMultiTextSelectionClipboardData",
                        userId: p.id,
                        recordMap: m
                    });
                for (let e of g) {
                    let t = (0, I().loadLocalSubtree)({
                        environment: d,
                        blockId: e,
                        inMemoryRecordCache: S,
                        options: {
                            allowCopyCollections: !0,
                            requireFullSubtree: !0,
                            skipTransclusionContainerChildren: !0,
                            allowCopyExternalObjectInstances: !0,
                            excludeCrdtData: !0,
                            includeLegacyTransclusionBlockValues: !0
                        }
                    }).recordMap;
                    y.push({
                        blockId: e,
                        blockSubtree: t
                    })
                }
                let C = new(o(17224)).PH({ ...(0, o(295447).zP)({
                        environment: d,
                        table: v().evP,
                        spaceId: null == a ? void 0 : a.pointer.spaceId
                    })
                }, g.map(e => (function e(t, r) {
                    let n = t.getValue({
                        table: v().evP,
                        id: r
                    });
                    if (!n) return;
                    let i = {
                            table: v().evP,
                            id: r,
                            spaceId: n.space_id
                        },
                        a = (n.content ? ? []).map(o => e(t, o)).filter(k().O9);
                    return new(o(17224)).PH(i, a)
                })(m, e)).filter(k().O9));
                if (0 === C.children.length) return;
                let T = C.children[0],
                    x = null == (t = (0, o(17224).Qe)([C], e => e === T)) ? void 0 : t.map(e => e.value),
                    w = null == (r = m.getValue(T.value)) || null == (r = r.properties) ? void 0 : r.title,
                    M = (0, o(17224).wI)(C),
                    A = null == (n = (0, o(17224).Qe)([C], e => e === M)) ? void 0 : n.map(e => e.value),
                    D = null == (i = m.getValue(M.value)) || null == (i = i.properties) ? void 0 : i.title,
                    P = D ? h().q4_(D).length : 0;
                if (w && x && D && A) return {
                    blockSelection: {
                        blocks: y,
                        wasContiguousSelection: !0,
                        action: "copy"
                    },
                    tree: C,
                    multiTextSelection: {
                        start: {
                            textIndex: 0,
                            copiedText: w,
                            attributePath: ["properties", "title"],
                            pointerPath: x
                        },
                        end: {
                            textIndex: P,
                            copiedText: D,
                            attributePath: ["properties", "title"],
                            pointerPath: A
                        }
                    },
                    action: "copy"
                }
            }

            function ew(e) {
                let {
                    text: t,
                    html: r,
                    stripText: n,
                    stripSurroundingWhitespace: i,
                    markdownLinkifyIt: a,
                    tinyMceMicrosoftWordPasteFilter: l
                } = e, s = r || (t ? el({
                    markdown: t,
                    markdownLinkifyIt: a
                }) : void 0);
                if (!s) return;
                let c = (0, o(210528).Lj)(s);
                if (c) return [h().wmz(h().ld4(c.id, c.spaceId), [])];
                let d = document.createElement("div");
                return d.innerHTML = e_({
                    html: s,
                    tinyMceMicrosoftWordPasteFilter: l
                }), o(253050).Hw({
                    node: d,
                    window: window,
                    stripText: n,
                    stripSurroundingWhitespace: i,
                    emojiData: o(753281).A.state
                })
            }

            function eM(e) {
                let {
                    environment: t,
                    html: r,
                    transaction: n,
                    stripText: i,
                    stripSurroundingWhitespace: a,
                    disableEmbedMenu: l,
                    selectAll: s,
                    markdownLinkifyIt: c,
                    tinyMceMicrosoftWordPasteFilter: d
                } = e, u = "editing" === o(358377).default.state.mode && o(358377).default.state.multiSelection;
                if (u) {
                    let e = ew({
                        html: r,
                        stripText: i,
                        stripSurroundingWhitespace: a,
                        markdownLinkifyIt: c,
                        tinyMceMicrosoftWordPasteFilter: d
                    });
                    if (!e) return;
                    let p = (0, o(534012).T)(u.start.store),
                        f = 1 === e.length;
                    if (f) {
                        if (f && (!e[0][1] || 0 === e[0][1].length)) {
                            n.logDebugMessage("pasteInlineHtml: insertString");
                            let r = e[0][0];
                            o(41403).$D({
                                environment: t,
                                editorMode: p ? o(708929).Uv.getMode(p) : "default",
                                multiSelection: u,
                                string: r,
                                disableMentions: !0,
                                disableSlashCommands: !0,
                                disableEmojiCommands: !0,
                                transaction: n,
                                selectAll: s
                            });
                            return
                        }
                        let r = (0, o(778758).H)(u);
                        if (r && !(0, o(971541).k)(u)) {
                            let [, o] = e[0], i = o && h().VtW(o);
                            if (i) {
                                n.logDebugMessage("pasteInlineHtml: pasteLinkOverText"), eE({
                                    environment: t,
                                    text: h().cQR(i),
                                    transaction: n,
                                    editingSelection: r,
                                    selectAll: s
                                });
                                return
                            }
                        }
                    }
                    n.logDebugMessage("pasteInlineHtml: delete selection and insert"), o(41403).f0({
                        environment: t,
                        multiSelection: u,
                        transaction: n
                    }), ey({
                        environment: t,
                        store: u.start.store,
                        tokens: e,
                        index: u.start.index,
                        transaction: n,
                        disableEmbedMenu: l,
                        multiTextSelection: u,
                        selectAll: s
                    })
                }
            }

            function eA(e) {
                let {
                    environment: t,
                    html: r,
                    transaction: n,
                    tinyMceMicrosoftWordPasteFilter: i
                } = e, a = (0, o(385941).Z)();
                if (!a) return;
                let l = eP({
                    environment: t,
                    html: r,
                    tinyMceMicrosoftWordPasteFilter: i
                });
                if (!l) return;
                let {
                    allOperations: d,
                    rootContentIds: p
                } = l;
                for (let e of d)
                    if ((0, S().ph)(e)) {
                        let t = c().B.createChildStore(a, e.pointer);
                        (0, D().k)({
                            store: t,
                            operation: e,
                            invertedOperation: void 0,
                            transaction: n
                        })
                    } else if ((0, m().$Y)(e)) {
                    let t = (0, s().v3)(a, e.pointer);
                    (0, P().y4)({
                        store: t,
                        operation: e,
                        transaction: n
                    })
                } else(0, k().HB)(e);
                let f = p.map(e => c().B.createChildStore(a, {
                    table: v().evP,
                    id: e
                }));
                f.forEach(e => {
                    let r = e.getType();
                    if (r) {
                        let n = e.getParentCollectionIdUpToTwoLevels(),
                            i = {
                                from: "paste",
                                creating_block_id: e.id,
                                parent_collection_id: n
                            };
                        o(549960).tP(r) ? o(549960).vH(t, { ...i,
                            type: r,
                            collection_id: n || ""
                        }) : o(549960).vH(t, { ...i,
                            type: r
                        })
                    }
                });
                let g = ek({
                    environment: t,
                    blocks: f,
                    transaction: n,
                    replaceEmptyTextBlock: !0
                }).slice().reverse();
                return o(374176).default.afterNextFlush(() => {
                    let e = g.map(e => {
                        if (e.getType() !== u().xd.text) return;
                        let t = ev(e.getTitleValue());
                        if (!t) return;
                        let r = (0, o(132702).parseRoute)({
                            url: t.url,
                            baseUrl: o(986939).A.domainBaseUrl,
                            publicDomainName: o(986939).A.publicDomainName,
                            isMobile: o(986939).A.isMobile,
                            protocol: o(986939).A.protocol,
                            currentUrl: window.location.href,
                            requestedOnAlternateDomain: (0, o(700473).wasRequestedOnAlternateDomain)()
                        });
                        if ("page" === r.name) return r
                    }).filter(k().O9);
                    o(997547).T_({
                        rootStore: a,
                        blocks: g,
                        copiedLinks: e
                    }) || o(997547).Tw({
                        environment: t,
                        blocks: g
                    })
                }), f
            }

            function eD(e) {
                let t = o(728372).AppStoreCurrentUserStore.state,
                    r = (0, o(385941).Z)();
                if (!t || !r) return;
                let n = t.id;
                if (!n) return;
                let i = r.id,
                    a = r.pointer.spaceId,
                    l = (0, o(295447).Z1)({
                        environment: e,
                        table: v().evP,
                        spaceId: a
                    });
                return {
                    operation: {
                        pointer: {
                            table: "block",
                            id: l,
                            spaceId: a
                        },
                        command: "set",
                        path: [],
                        args: {
                            id: l,
                            version: 1,
                            type: "text",
                            properties: {
                                title: [
                                    [""]
                                ]
                            },
                            parent_id: i,
                            parent_table: "block",
                            space_id: a,
                            created_by_table: "notion_user",
                            created_by_id: n,
                            created_time: Date.now(),
                            last_edited_by_table: "notion_user",
                            last_edited_by_id: n,
                            last_edited_time: Date.now(),
                            alive: !0
                        }
                    },
                    id: l
                }
            }

            function eP(e) {
                let {
                    environment: t,
                    legacyNonCrdt: r,
                    ...n
                } = e, i = document.createElement("div");
                i.innerHTML = e_(n);
                let a = o(728372).AppStoreCurrentUserStore.state,
                    l = (0, o(385941).Z)();
                if (!a || !l) return;
                let s = a.getValue();
                if (!s) return;
                let c = l.getSpaceId(),
                    d = (0, o(295447).Gx)({
                        environment: t,
                        spaceId: c
                    }),
                    u = t.idCreator.getSpaceShortIdCreator(c, d);
                return o(253050).aH({
                    actor: (0, o(197018).A7)(s),
                    parent: {
                        id: l.id,
                        table: v().evP,
                        spaceId: c
                    },
                    rootNode: i,
                    deps: {
                        importFileMap: {},
                        window: window,
                        intl: o(962299).A.getIntl(),
                        randomID: o(4962).Ay,
                        spaceIdCreator: u,
                        randomShortID: o(698596).Ay,
                        isPhoneNumber: o(350141).W,
                        emojiData: o(753281).A.state
                    },
                    options: {
                        legacyNonCrdt: r,
                        ignoreBlockCount: !1
                    }
                })
            }

            function eB(e) {
                return /schemas-microsoft-com:office/.test(e) || /xmlns:m="http:\/\/schemas.microsoft.com\/office\/2004\/12\/omml"/.test(e)
            }

            function e_(e) {
                let {
                    html: t,
                    allowExternalContent: o = !0,
                    tinyMceMicrosoftWordPasteFilter: r
                } = e;
                return a().sanitize(r && eB(t) ? r(t) : t, { ...!o ? {
                        FORBID_TAGS: ["img", "picture", "source", "iframe", "video", "audio", "object", "embed", "script"]
                    } : {}
                })
            }

            function eF(e) {
                let t = "editing" === e.mode && e.multiSelection;
                if (!t) return;
                let r = o(521595).n.findEditableWithStore(t.start.store),
                    n = null == r ? void 0 : r.props;
                return n && !n.disabled ? n.pasteBehavior : void 0
            }

            function eR() {
                if ("editing" !== o(358377).default.state.mode) return;
                let e = o(358377).default.state.multiSelection.start,
                    t = e.store.path;
                if ("formula" !== t[t.length - 1]) return;
                let r = (0, o(746473).zH)(e.store);
                if (r.table !== v().evP) return;
                let n = r.getProperties();
                if (!n) return;
                let i = r.getSpaceId(),
                    a = h().q4_(n.value_types);
                if (!a) return;
                let l = (0, o(627179).$l)(a);
                return {
                    start: e,
                    spaceId: i,
                    getRecordModel: r.getRecordModel,
                    valueTypes: l
                }
            }

            function eN() {
                let e = o(584265).default.state.stores;
                if ("editing" !== o(358377).default.state.mode) return e.length > 0 && e[0].isInsideFactoryOrDuplicateBlocksAction();
                if (0 === e.length) return !1;
                let {
                    multiSelection: t
                } = o(358377).default.state, r = t.start.store;
                return !!r.isTable(v().evP) && !!o(977251).E(r)
            }

            function eE(e) {
                let {
                    text: t,
                    transaction: r,
                    environment: n,
                    editingSelection: i,
                    selectAll: a
                } = e, l = (0, o(132702).parseRoute)({
                    url: t,
                    baseUrl: o(986939).A.domainBaseUrl,
                    publicDomainName: o(986939).A.publicDomainName,
                    isMobile: o(986939).A.isMobile,
                    protocol: o(986939).A.protocol,
                    currentUrl: window.location.href,
                    requestedOnAlternateDomain: (0, o(700473).wasRequestedOnAlternateDomain)()
                }), s = "page" === l.name && l.blockId ? (0, o(430733).wv)({
                    pageId: l.blockId,
                    peekViewBlockId: l.peekViewBlockId,
                    peekMode: l.peekMode,
                    discussionId: l.discussionId,
                    scrollToBlockId: l.scrollToBlockId,
                    collectionViewId: l.collectionViewId
                }) : "collection" === l.name ? (0, o(506069).C)({
                    collectionId: l.collectionId,
                    spaceId: l.space && "id" in l.space ? l.space.id : void 0,
                    spaceDomain: l.space && "domain" in l.space ? l.space.domain : void 0,
                    parentCvbId: l.parentBlockId,
                    swapDsPrefix: (0, o(700473).wasRequestedOnAlternateDomain)()
                }) : t, c = o(41403).di({
                    environment: n,
                    store: i.store,
                    selection: i.selection,
                    transaction: r
                }), d = (0, o(534012).T)(i.store);
                if ("suggest" === (d ? o(708929).Uv.getMode(d) : "default")) {
                    let e = {
                        start: {
                            store: i.store,
                            index: c.startIndex
                        },
                        end: {
                            store: i.store,
                            index: c.endIndex
                        }
                    };
                    o(989871).sr({
                        environment: n,
                        multiSelection: e,
                        annotation: ["a", s],
                        transaction: r
                    })
                } else(0, o(364807).g)({
                    environment: n,
                    store: i.store,
                    selection: c,
                    annotationKey: "a",
                    transaction: r,
                    updateSelection: !1
                }), o(589873).Mw({
                    environment: n,
                    store: i.store,
                    selection: c,
                    annotation: ["a", s],
                    transaction: r
                });
                (0, o(627974).t)({
                    store: i.store,
                    selection: {
                        startIndex: a ? c.startIndex : c.endIndex,
                        endIndex: c.endIndex
                    }
                })
            }
            let eU = /\<\!-- wp:/,
                eO = /\u2028/g,
                eV = ["slack/texty"];

            function eL({
                environment: e,
                spaceStore: t,
                event: a,
                disableEmbedMenu: l,
                transaction: s,
                onPasteFiles: c,
                formulasModule: d,
                markdownLinkifyIt: p,
                tinyMceMicrosoftWordPasteFilter: f,
                ignoreKeyboardMode: g
            }) {
                var m;
                let b = o(218744).default.checkGate({
                    gateName: "allow_cut_copy_comment"
                });
                if (a.preventDefault(), M(), !a.clipboardData) return;
                let v = function(e, t) {
                        let i = t.isAndroid,
                            a = o(218744).default.checkGate({
                                gateName: "use_virtual_clipboard_for_programmatic_copies"
                            });
                        if (z("getClipboardReader: virtualClipboardEnabled", i, "isVirtualClipboardForProgrammaticCopiesEnabled", a), !i && !a) return z("virtual clipboard and programmatic copies are not enabled: returning rawClipboardData", e), e;
                        if (i || function() {
                                if (!0 === n) return;
                                let e = et.get(ee);
                                e ? (r = e, n = !0) : n = !1
                            }(), !(i || n)) return z("virtual clipboard is not enabled or has no data: returning rawClipboardData", e), e;
                        let l = e.getData("text/html"),
                            s = (0, o(210528).n8)(l);
                        if (!s) return z("no virtual clipboard id found: returning rawClipboardData", e), e;
                        if (!r || r.id !== s) {
                            if (!(r = et.get(ee)) || r.id !== s) {
                                n = !1, r = void 0;
                                try {
                                    et.remove(ee)
                                } catch {}
                                if (!(r = et.get(ee)) || r.id !== s) return e
                            }
                            n = !0
                        }
                        let c = r;
                        return s === (null == c ? void 0 : c.id) ? {
                            getData(t) {
                                let o = e.getData(t);
                                return !o && J.has(t) ? c.mimeTypes[t] || "" : o
                            },
                            types: [...new Set(e.types.concat(Object.keys(c.mimeTypes)))].filter(t => {
                                let o = c.mimeTypes[t];
                                return "" !== e.getData(t) || o && "" !== o
                            }),
                            items: e.items
                        } : e
                    }(a.clipboardData, e.device),
                    S = Array.from(Array((null == (m = v.items) ? void 0 : m.length) ? ? 0).keys()).flatMap(e => {
                        var t;
                        let o = v.items[e];
                        if ("file" !== o.kind) return [];
                        let r = null == (t = o.getAsFile()) || null == (t = t.name.match(/\.[^.]+$/)) ? void 0 : t[0];
                        return r ? [r] : []
                    }),
                    C = v.getData("text/html"),
                    I = null == C ? void 0 : C.length;
                ! function({
                    source: e,
                    types: t,
                    fileExtensions: r,
                    htmlContent: n
                }) {
                    let i = [...t];
                    i.sort();
                    let a = r.map(e => e.toLowerCase());
                    (0, o(104310).u)({
                        event: {
                            eventName: "paste",
                            eventProperties: {
                                source: e,
                                types: i,
                                file_extensions: a,
                                original_html_content_size: n.length
                            }
                        }
                    })
                }({
                    source: "editor",
                    types: v.types || [],
                    fileExtensions: S,
                    htmlContent: C
                });
                let {
                    text: x,
                    html: w,
                    multiTextSelectionData: D,
                    textSelectionData: P,
                    blockSelectionData: _,
                    isFromMicrosoftOffice: R,
                    isHtmlTable: N
                } = en({
                    clipboardData: v,
                    tinyMceMicrosoftWordPasteFilter: f
                }), E = er(v, G, Z), U = a.clipboardData ? a.clipboardData.items ? o(381453).oE(Array.from(a.clipboardData.items).map(e => {
                    let t = e.getAsFile();
                    if (t && t.size > 0) return new File([t], t.name ? ? o(962299).A.formatMessage(X.untitled), {
                        type: e.type
                    })
                })) : o(871871).PE(a.clipboardData.files) : [], V = (null == _ ? void 0 : _.action) || (null == D ? void 0 : D.action) || (null == P ? void 0 : P.action);
                s.annotateWithUserAction("cut" === V ? "paste.from_cut" : "paste");
                let L = F(x),
                    W = A(),
                    j = "body" === W && !P;
                if ((U.length > 0 || _ || L && !j) && !(0, o(194020).E)(e, t)) return;
                let $ = o(358377).default.state,
                    q = eF($),
                    Q = function(e) {
                        let t = er(e, "vscode-editor-data", Z),
                            o = null == t ? void 0 : t.mode;
                        if (o) return H[o] || "Plain Text"
                    }(v),
                    K = L && Q && "inline" !== q && !W ? eW({
                        codeLanguage: Q,
                        environment: e,
                        transaction: s
                    }) : void 0;
                o(691968).oF({
                    pastedText: x,
                    source: "editor_paste"
                });
                let Y = o(169274).wg(),
                    eo = o(169274).KR(),
                    ei = a.clipboardData.getData(o(41962).sE),
                    ea = eR();
                if (!(U.length > 0) || R || N)
                    if (j) s.logDebugMessage("paste: editing code block contents with no Notion text selection -> pasteRawText"), ez(e, x, s);
                    else if (K) s.logDebugMessage("paste: pasting code in existing empty text block with no selection or new code block after selection  -> pasteRawText"), ez(e, x, s);
                else if (ea) {
                    if (s.logDebugMessage("paste: formulaInformation detected, attempting to paste as formula"), !d) return void ez(e, x, s);
                    "multiSelection" in $ && o(41403).f0({
                        environment: e,
                        multiSelection: $.multiSelection,
                        transaction: s
                    });
                    let {
                        start: t,
                        getRecordModel: r,
                        valueTypes: n,
                        spaceId: i
                    } = ea, a = (0, o(297493).K5)({
                        formulasModule: d,
                        getRecordModel: r,
                        textValue: [
                            [x]
                        ],
                        featureGates: (0, o(457103).i)(),
                        valueTypes: n,
                        spaceId: i
                    });
                    o(41403).yr({
                        environment: e,
                        tokens: a,
                        store: t.store,
                        index: t.index,
                        transaction: s
                    })
                } else if ("plaintext" === q) s.logDebugMessage("paste: plaintext paste behavior detected, pasting as inline html"), eM({
                    environment: e,
                    html: x,
                    transaction: s,
                    stripText: !0,
                    stripSurroundingWhitespace: !0,
                    disableEmbedMenu: l,
                    markdownLinkifyIt: p,
                    tinyMceMicrosoftWordPasteFilter: f
                }), B({
                    environment: e,
                    type: "plaintext",
                    originalHtmlContentSize: I
                });
                else if (D) s.logDebugMessage("paste: multiTextSelectionData detected, attempting to paste as textselection"), ! function(e) {
                    let {
                        environment: t,
                        transaction: r,
                        multiTextSelectionData: n,
                        disableEmbedMenu: i,
                        markdownLinkifyIt: a,
                        tinyMceMicrosoftWordPasteFilter: l,
                        spaceStore: s
                    } = e, c = e.pasteBehavior || "inline", d = e.html || el({
                        markdown: e.text,
                        markdownLinkifyIt: a
                    });
                    if ("editing" === o(358377).default.state.mode) switch (c) {
                        case "inline":
                            if (d) return eM({
                                environment: t,
                                html: d,
                                transaction: r,
                                stripText: !1,
                                stripSurroundingWhitespace: !0,
                                disableEmbedMenu: i,
                                markdownLinkifyIt: a,
                                tinyMceMicrosoftWordPasteFilter: l
                            }), !0;
                            return !1;
                        case "block":
                            return O({
                                environment: t,
                                clipboardData: n,
                                transaction: r,
                                preventLegacyTransclusions: !0,
                                spaceStore: s
                            });
                        default:
                            (0, k().HB)(c)
                    }
                }({
                    multiTextSelectionData: D,
                    environment: e,
                    html: w,
                    text: x,
                    transaction: s,
                    disableEmbedMenu: l,
                    pasteBehavior: q,
                    markdownLinkifyIt: p,
                    tinyMceMicrosoftWordPasteFilter: f,
                    spaceStore: t
                }) && (s.logDebugMessage("paste: could not paste as textSelection -> paste as blockSelection"), eI({
                    environment: e,
                    blockSelectionData: D.blockSelection,
                    pageSource: E,
                    transaction: s
                }));
                else if (null != P && P.editing) {
                    let r = h().Ffo(P.editing, P.selection.startIndex, P.selection.endIndex);
                    if (!Y && (0, y().VS)(h().q4_(r))) {
                        let o = eh(r);
                        if (o) {
                            s.logDebugMessage("paste: converting simple table bullets to markdown list"), eT({
                                environment: e,
                                text: o,
                                disableEmbedMenu: l,
                                transaction: s,
                                markdownLinkifyIt: p,
                                tinyMceMicrosoftWordPasteFilter: f,
                                spaceStore: t
                            });
                            return
                        }
                    }
                    s.logDebugMessage("paste: textSelectionData detected, pasting text selection");
                    let n = (0, o(265255).d)(),
                        i = (null == E ? void 0 : E.id) !== (null == n ? void 0 : n.id);
                    ! function(e) {
                        let {
                            environment: t,
                            textSelectionData: r,
                            transaction: n,
                            disableEmbedMenu: i,
                            removeDiscussions: a
                        } = e, l = o(584265).default.getCurrentRecordCache(), {
                            editing: s,
                            selection: c
                        } = r, {
                            tokensInsideRange: d
                        } = h().AI5(s, c.startIndex, c.endIndex);
                        d = h().Uee(d, {
                            removeSuggestionAnnotationsAndText: !1,
                            removeSuggestionAnnotations: !0,
                            removeDiscussions: a ? ? !0
                        });
                        let p = (0, o(385941).Z)();
                        if (p && !(p.isInsideTemplate() || eN() || p.isInsideFactoryOrDuplicateBlocksAction()) && (d = (0, o(664993).f$)(d, {
                                currentUserId: t.currentUser.id,
                                currentTimeZone: (0, o(714350).P)()
                            })), "body" === A()) {
                            let e = h().Cc8(d);
                            e && (d = e)
                        }
                        let f = "editing" === o(358377).default.state.mode && o(358377).default.state.multiSelection;
                        if (f) {
                            if (!(0, o(971541).k)(f)) {
                                let t = (0, o(778758).H)(f);
                                if (t) {
                                    let o = h().Ffo(r.editing, r.selection.startIndex, r.selection.endIndex);
                                    if (1 === o.length) {
                                        let [r, n] = o[0], i = n && h().VtW(n);
                                        if (i) {
                                            let o = h().cQR(i);
                                            if ([r, `http://${r}`, `https://${r}`].includes(o)) return eE({
                                                environment: e.environment,
                                                text: o,
                                                transaction: e.transaction,
                                                editingSelection: t
                                            })
                                        }
                                    }
                                }
                            }
                            let a = (0, o(534012).T)(f.start.store),
                                l = a ? o(708929).Uv.getMode(a) : "default";
                            if ("suggest" === l) {
                                let e = (0, o(714577).R)(t, n, f);
                                (0, o(133803).r)({
                                    environment: t,
                                    multiSelection: f,
                                    transaction: n,
                                    discussionStore: e
                                }), d = h().Mwp({
                                    textValue: d,
                                    selection: {
                                        startIndex: 0,
                                        endIndex: 1 / 0
                                    },
                                    annotation: [h().Ifu.SuggestionInsertText, e.id]
                                })
                            } else "default" === l && o(41403).f0({
                                environment: t,
                                multiSelection: f,
                                transaction: n
                            });
                            let s = o(358377).default.state;
                            if ("editing" === s.mode) {
                                let e = s.multiSelection,
                                    a = o(521595).n.findEditableWithStore(e.end.store);
                                if (null != a && a.props.enableChatSelectionContextTokens || (d = eS(d)), r.blockType && 0 === c.startIndex) {
                                    let i = (0, o(534012).T)(e.start.store);
                                    i && "page" !== r.blockType && (0, o(966980).P4)(i) && o(422224).transformBlocks({
                                        environment: t,
                                        blocks: [i],
                                        blockType: r.blockType,
                                        transaction: n
                                    })
                                }
                                ey({
                                    environment: t,
                                    store: e.end.store,
                                    tokens: d,
                                    index: e.end.index,
                                    transaction: n,
                                    disableEmbedMenu: "suggest" === l || i,
                                    multiTextSelection: f
                                })
                            }
                        } else if (l) {
                            var g;
                            let e = o(584265).default.state.stores,
                                r = T().Wv({
                                    environment: t,
                                    type: u().xd.text,
                                    inMemoryRecordCache: l,
                                    transaction: n,
                                    spaceId: 0 !== e.length ? e[e.length - 1].pointer.spaceId : null == (g = (0, o(385941).Z)()) ? void 0 : g.pointer.spaceId
                                }),
                                i = r.getTitleStore();
                            i && o(41403).yr({
                                environment: t,
                                store: i,
                                tokens: d,
                                index: 0,
                                transaction: n
                            }), ek({
                                environment: t,
                                blocks: [r],
                                transaction: n,
                                replaceEmptyTextBlock: !1
                            }), o(549960).vH(t, {
                                from: "paste",
                                type: u().xd.text,
                                creating_block_id: r.id,
                                parent_collection_id: r.getParentCollectionIdUpToTwoLevels()
                            })
                        }
                    }({
                        environment: e,
                        textSelectionData: P,
                        transaction: s,
                        disableEmbedMenu: l,
                        removeDiscussions: !b || "copy" === V || i
                    })
                } else if (_ && _.blocks.length > 0 && "inline" !== q) s.logDebugMessage("paste: blockSelectionData detected, pasting block selection"), eI({
                    environment: e,
                    blockSelectionData: _,
                    pageSource: E,
                    transaction: s
                });
                else if (Y && ei) {
                    let {
                        simpleTableStore: t,
                        rowIndex: r,
                        columnIndex: n
                    } = Y.getProps(), l = null == eo ? void 0 : eo.selection;
                    l || (l = o(685840).nj({
                        row: r,
                        col: n
                    }));
                    let c = o(979805).$O(t);
                    l && c && (0, o(872952).G)({
                        clipboardActions: i,
                        environment: e,
                        simpleTableStore: t,
                        selection: l,
                        currentRows: t.getContentStores(),
                        columnOrder: c,
                        event: a,
                        transaction: s,
                        markdownLinkifyIt: p,
                        tinyMceMicrosoftWordPasteFilter: f
                    })
                } else if (w)
                    if (Y && eo && ei) {
                        let {
                            simpleTableStore: t,
                            rowIndex: r,
                            columnIndex: n
                        } = Y.getProps(), {
                            selection: l
                        } = eo;
                        l || (l = o(685840).nj({
                            row: r,
                            col: n
                        }));
                        let c = o(979805).$O(t);
                        l && c && (s.logDebugMessage("paste: pasting selection into simple table"), (0, o(872952).G)({
                            clipboardActions: i,
                            environment: e,
                            simpleTableStore: t,
                            selection: l,
                            currentRows: t.getContentStores(),
                            columnOrder: c,
                            event: a,
                            transaction: s,
                            markdownLinkifyIt: p,
                            tinyMceMicrosoftWordPasteFilter: f
                        }))
                    } else if ((L || N) && "inline" !== q) s.logDebugMessage("paste: pasting as html"), eA({
                    environment: e,
                    html: w,
                    transaction: s,
                    tinyMceMicrosoftWordPasteFilter: f
                }), B({
                    environment: e,
                    type: "html",
                    originalHtmlContentSize: I
                });
                else {
                    s.logDebugMessage("paste: pasting as inline html");
                    let t = !!Y;
                    eM({
                        environment: e,
                        html: w,
                        transaction: s,
                        stripText: t,
                        stripSurroundingWhitespace: t,
                        disableEmbedMenu: l,
                        markdownLinkifyIt: p,
                        tinyMceMicrosoftWordPasteFilter: f
                    }), B({
                        environment: e,
                        type: "inline_html",
                        originalHtmlContentSize: I
                    })
                } else s.logDebugMessage("paste: pasting as markdown"), eT({
                    environment: e,
                    text: x,
                    disableEmbedMenu: l,
                    transaction: s,
                    markdownLinkifyIt: p,
                    tinyMceMicrosoftWordPasteFilter: f,
                    spaceStore: t
                }), B({
                    environment: e,
                    type: "markdown",
                    originalHtmlContentSize: I
                });
                else s.logDebugMessage("paste: file/image detected -> onPasteFiles"), c({
                    environment: e,
                    files: U,
                    transaction: s
                });
                g || o(200083).A.setKeyboardMode(!0)
            }

            function eW(e) {
                let t, r, n, {
                        codeLanguage: i,
                        environment: a,
                        transaction: l
                    } = e,
                    s = o(358377).default.state,
                    c = "editing" === s.mode && s.multiSelection,
                    d = o(584265).default.state.stores;
                if (!c && 0 === d.length || (c ? (t = c.start.store, r = c.end.store, n = (0, o(534012).T)(r)) : (t = d[0], n = r = d[d.length - 1]), !n)) return;
                let p = n;
                if ((0, o(966980).P4)(n)) ! function(e) {
                    let {
                        blockStore: t,
                        environment: r,
                        transaction: n,
                        codeLanguage: i
                    } = e;
                    o(422224).transformBlocks({
                        environment: r,
                        blocks: [t],
                        blockType: "code",
                        transaction: n
                    }), o(760178).IA({
                        blocks: [t],
                        language: i,
                        transaction: n
                    })
                }({
                    blockStore: n,
                    environment: a,
                    transaction: l,
                    codeLanguage: i
                });
                else {
                    let e = (0, o(534012).T)(n);
                    if (!e) return;
                    let i = t.inMemoryRecordCache;
                    if (!i) return;
                    p = T().Wv({
                        environment: a,
                        type: u().xd.code,
                        inMemoryRecordCache: i,
                        transaction: l,
                        spaceId: e.pointer.spaceId
                    }), (0, o(51929).W)({
                        parentStore: e.getContentStore(),
                        afterStore: r,
                        insertStore: p,
                        transaction: l
                    })
                }
                o(239134).clear(a);
                let f = (0, o(374934).aI)(p);
                return f && (0, o(940763).e)({
                    store: f
                }), p
            }

            function ez(e, t, r) {
                let n = "editing" === o(358377).default.state.mode && o(358377).default.state.multiSelection;
                if (n) {
                    let i = (0, o(534012).T)(n.start.store);
                    o(41403).$D({
                        environment: e,
                        editorMode: i ? o(708929).Uv.getMode(i) : "default",
                        multiSelection: n,
                        string: t,
                        disableMentions: !0,
                        disableSlashCommands: !0,
                        disableEmojiCommands: !0,
                        transaction: r
                    })
                }
            }

            function eX(e, t) {
                let r = e.getNavigableBlockStore();
                if (r) {
                    let n = t.RouterStore.state.route,
                        i = "page" === n.name && n.collectionViewId ? n.collectionViewId : void 0;
                    return (0, o(483227).J8)({
                        store: r,
                        scrollToBlockId: r.id === e.id ? void 0 : e.id,
                        fullyQualified: !0,
                        pageVisitSource: o(254656).y8.CopyLink,
                        embedded: !1,
                        collectionViewId: i
                    })
                }
            }

            function eH(e) {
                let {
                    environment: t,
                    blockStore: r,
                    callback: n
                } = e;
                (0, o(602262).y)(), o(169274).wr();
                let i = eX(r, t);
                if (i) {
                    let e = r.isPageBlock() ? o(127373).clipboardMessages.copiedPageLinkToClipboard : r.isFormBlock() ? o(127373).clipboardMessages.copiedFormLinkToClipboard : o(127373).clipboardMessages.copiedBlockLinkToClipboard;
                    (0, o(488391).copyString)({
                        environment: t,
                        stringValue: i,
                        copiedMessage: e
                    }).then(n)
                }
            }

            function ej(e) {
                var t, r;
                let {
                    environment: n,
                    collectionStore: i,
                    callback: a
                } = e;
                (0, o(602262).y)(), o(169274).wr();
                let l = (0, o(506069).C)({
                    collectionId: i.id,
                    spaceId: i.getSpaceId(),
                    spaceDomain: null == (t = i.getSpaceStore()) ? void 0 : t.getEditDomain(),
                    parentCvbId: null == (r = i.getParentPointer()) ? void 0 : r.id,
                    domainBaseUrl: o(986939).A.domainBaseUrl,
                    pageVisitSource: o(254656).y8.CopyLink,
                    swapDsPrefix: (0, o(700473).wasRequestedOnAlternateDomain)()
                });
                if (l) {
                    let e = o(127373).clipboardMessages.copiedLinkToClipboard;
                    (0, o(488391).copyString)({
                        environment: n,
                        stringValue: l,
                        copiedMessage: e
                    }).then(a)
                }
            }

            function e$(e) {
                let {
                    environment: t,
                    blockStore: r,
                    callback: n
                } = e;
                (0, o(602262).y)(), o(169274).wr();
                let i = eX(r, t),
                    a = function(e, t) {
                        var r;
                        let n = eX(t, e);
                        if (!n) return;
                        let i = e.currentUser.id,
                            a = (0, f()._z)({
                                blockId: t.id,
                                intl: o(962299).A.getIntl(),
                                getRecordValue: t.inMemoryRecordCache.makeGetRecordValueFn(i),
                                userTimeZone: (0, o(714350).P)()
                            }),
                            l = null == (r = t.getBlockIconStore()) ? void 0 : r.getValue(),
                            s = [(0, o(312028).A)(l) ? l : void 0, a].filter(k().O9).join(" ");
                        return s ? `<a href="${n}"><span>${s}</span></a>` + (0, o(210528).a0)({
                            id: t.id,
                            spaceId: t.getSpaceId()
                        }) : n
                    }(t, r);
                if (i && a) {
                    let e = r.isPageBlock() ? o(127373).clipboardMessages.copiedPageLinkToClipboard : r.isFormBlock() ? o(127373).clipboardMessages.copiedFormLinkToClipboard : o(127373).clipboardMessages.copiedBlockLinkToClipboard;
                    (0, o(488391).copyHtml)({
                        environment: t,
                        stringValue: i,
                        htmlValue: a,
                        copiedMessage: e
                    }).then(n)
                }
            }

            function eq(e) {
                let {
                    environment: t,
                    blocks: r,
                    callback: n
                } = e;
                (0, o(602262).y)(), o(169274).wr();
                let i = r.map(e => eX(e, t)).filter(k().O9);
                if (i.some(Boolean)) {
                    let e = i.length > 1 ? o(127373).clipboardMessages.copiedLinksToClipboard : o(127373).clipboardMessages.copiedLinkToClipboard;
                    (0, o(488391).copyString)({
                        environment: t,
                        stringValue: i.join("\n\n"),
                        copiedMessage: e
                    }).then(n)
                }
            }

            function eG(e) {
                let t, {
                        environment: r,
                        blocks: n,
                        callback: i
                    } = e,
                    a = n[0];
                if (!a.isDefined()) return;
                let l = a.getModel(),
                    s = a.getFormat();
                if (a.isType(u().xd.bookmark)) t = h().q4_(a.getNonCollectionProperty("link"));
                else if ((0, u().ie)(l.type)) t = h().q4_(a.getNonCollectionProperty("source"));
                else if (a.isType(u().xd.externalObjectInstance) || a.isType(u().xd.externalObjectInstancePage)) t = (null == s ? void 0 : s.original_url) || (null == s ? void 0 : s.uri);
                else if (a.isType(u().xd.collectionView)) {
                    var c, d;
                    let e = null == (c = a.getCollectionStoreIfSingleSource()) ? void 0 : c.getValue();
                    e && (0, o(69499).ek)(e) && (t = null == (d = e.format) ? void 0 : d.original_url)
                } else {
                    if (!a.isType(u().xd.alias)) return;
                    t = null == s ? void 0 : s.comment_alias_url
                }
                if (!t) return;
                if (o(728601)._J(t)) return void o(773352).log({
                    level: "error",
                    from: "clipboardActions",
                    type: "copyDirectLinkToContent",
                    error: {
                        message: "Attempted to copy a direct signed url for S3-housed content."
                    }
                });
                if (!(t = o(758654).q7(t))) return;
                (0, o(602262).y)(), o(169274).wr();
                let p = o(127373).clipboardMessages.copiedLinkToClipboard;
                (0, o(488391).copyString)({
                    environment: r,
                    stringValue: t,
                    copiedMessage: p
                }).then(i)
            }
            async function eQ(e) {
                var t, r;
                let {
                    environment: n,
                    markdownLinkifyIt: i
                } = e, a = ef({
                    environment: n,
                    action: "copy",
                    markdownLinkifyIt: i
                });
                if (z("copySelectionToClipboard: serializedData", a), !a || !a.text && !a.html && !(null != (t = a.notionData) && t.length)) return !1;
                let l = null == (r = a.notionData) ? void 0 : r.map(({
                        key: e,
                        data: t,
                        codec: o
                    }) => ({
                        key: e,
                        json: JSON.stringify(o.toJson(t))
                    })),
                    s = a.html;
                if (s && null != l && l.length) {
                    let e = {};
                    for (let t of l) e[t.key] = t.json;
                    let t = o(92513).JW();
                    eo({
                        id: t,
                        mimeTypes: e,
                        source: "copySelectionToClipboard"
                    }), s = function(e) {
                        let {
                            html: t,
                            virtualClipboardId: r
                        } = e;
                        return t ? `${t}${(0,o(210528).uE)(r)}` : t
                    }({
                        html: s,
                        virtualClipboardId: t
                    })
                }
                return await (0, o(488391).copyString)({
                    environment: n,
                    stringValue: a.text || "",
                    htmlValue: s
                }), !0
            }

            function eJ(e) {
                let {
                    environment: t,
                    markdownLinkifyIt: r
                } = e;
                (0, o(295910).U)(t);
                let n = e => {
                    var o;
                    null == (o = e.stopImmediatePropagation) || o.call(e), em({
                        environment: t,
                        event: e,
                        disableSyncTextSelection: !0,
                        markdownLinkifyIt: r
                    })
                };
                try {
                    window.addEventListener("copy", n, {
                        capture: !0,
                        once: !0
                    }), eZ()
                } finally {
                    window.removeEventListener("copy", n, {
                        capture: !0
                    }), (0, o(471e3).I)({
                        environment: t
                    }), (0, o(525779).clear)({
                        environment: t
                    })
                }
            }

            function eZ() {
                document.queryCommandSupported("copy") && document.execCommand("copy")
            }
            async function eK(e, t) {
                let r;
                (r = "string" == typeof t ? t : JSON.stringify(t)) && await (0, o(488391).copyString)({
                    environment: e,
                    stringValue: r,
                    copiedMessage: o(127373).clipboardMessages.copiedToClipboard
                })
            }

            function eY(e) {
                let {
                    environment: t,
                    textSelection: r,
                    markdownSerializationOptions: n,
                    markdownLinkifyIt: i
                } = e, a = (0, o(778758).H)(r);
                if (a && a.selection.startIndex !== a.selection.endIndex) return function(e) {
                    let {
                        environment: t,
                        singleStoreTextSelection: r,
                        markdownSerializationOptions: n
                    } = e, {
                        store: i,
                        selection: a
                    } = r, l = t.currentUser.id, s = i.inMemoryRecordCache, c = o(962299).A.getIntl(), d = i.getValue(), u = h().Ffo(d, a.startIndex, a.endIndex), p = i.getRecordStoreUIRoot().getValue();
                    if (!p) return;
                    let f = {
                            id: p.id,
                            table: v().evP,
                            spaceId: p.space_id
                        },
                        m = s.makeGetRecordValueFn(l),
                        b = t.idCreator.getSpaceIdCreatorSync(p.space_id);
                    return o(593430).ZR({
                        textValue: u,
                        exportArgs: {
                            root: f,
                            navigableBlockId: f.id,
                            renderParentBlockId: void 0,
                            blockId: f.id,
                            userTimeZone: (0, o(714350).P)(),
                            intl: c,
                            getRecordValue: m,
                            getRecordModel: g().b4_.fromGetRecordValueFn(m),
                            numberedListCache: {},
                            bulletedListCache: {},
                            getRecordsWithParent: () => [],
                            getExportedPathToFile: ({
                                toFileURI: e
                            }) => e,
                            getExportedRenderAsset: ({
                                toFileURI: e
                            }) => e,
                            getExportedPathToPage: ({
                                toPageId: e
                            }) => (0, o(234310).A)({
                                pageId: e,
                                pageValue: m({
                                    table: v().evP,
                                    id: e
                                }),
                                baseUrl: o(986939).A.domainBaseUrl,
                                pageVisitSource: o(254656).y8.Export,
                                addPagePrefix: (0, o(700473).wasRequestedOnAlternateDomain)()
                            }),
                            baseUrl: o(986939).A.domainBaseUrl,
                            publicDomainName: o(986939).A.publicDomainName,
                            transformAnnotation: null == n ? void 0 : n.transformAnnotation,
                            transformBlockMapping: null == n ? void 0 : n.transformBlockMapping,
                            resultCache: new Map,
                            regExpCache: new Map,
                            formatDateCache: new Map,
                            experimentService: o(218744).default,
                            collectionFeatureGates: (0, o(457103).i)(),
                            formulasModule: o(299512),
                            spaceIdCreator: b
                        }
                    })
                }({
                    environment: t,
                    singleStoreTextSelection: a,
                    markdownSerializationOptions: n
                });
                let l = ep({
                    environment: t,
                    multiSelection: r,
                    action: "copy"
                });
                if (!l) return;
                let {
                    markdown: s
                } = (0, o(210528).Ij)({
                    clipboardData: l,
                    multiSelection: r,
                    currentUserId: t.currentUser.id,
                    isWindows: t.device.isWindows,
                    markdownSerializationOptions: n,
                    markdownLinkifyIt: i,
                    formulasModule: o(299512),
                    spaceIdCreator: t.idCreator.getSpaceIdCreatorSync(r.start.store.pointer.spaceId || "")
                });
                return s
            }

            function e0(e) {
                let {
                    environment: t,
                    inMemoryRecordCache: r,
                    text: n,
                    transaction: i,
                    markdownOptions: a,
                    markdownLinkifyIt: l,
                    tinyMceMicrosoftWordPasteFilter: d,
                    parentPointer: u,
                    ignoreImages: p
                } = e, f = el({
                    markdown: n,
                    markdownOptions: a,
                    markdownLinkifyIt: l
                });
                if (!f) return;
                let g = document.createElement("div");
                g.innerHTML = e_({
                    html: f,
                    tinyMceMicrosoftWordPasteFilter: d,
                    allowExternalContent: !p
                });
                let b = o(728372).AppStoreCurrentUserStore.state,
                    y = o(728372).AppStoreSidebarSpaceStore.state;
                if (!b || !y) return;
                let h = b.getValue();
                if (!h) return;
                let C = ((0, o(385941).Z)() ? ? y).id,
                    I = y.id,
                    T = (0, o(295447).Gx)({
                        environment: t,
                        spaceId: I
                    }),
                    x = t.idCreator.getSpaceShortIdCreator(I, T),
                    {
                        allOperations: w,
                        rootContentIds: M
                    } = o(253050).aH({
                        actor: (0, o(197018).A7)(h),
                        parent: u ? ? {
                            id: C,
                            table: v().evP,
                            spaceId: y.id
                        },
                        rootNode: g,
                        deps: {
                            importFileMap: {},
                            window: window,
                            intl: o(962299).A.getIntl(),
                            randomID: o(4962).Ay,
                            spaceIdCreator: x,
                            randomShortID: o(698596).Ay,
                            isPhoneNumber: o(350141).W,
                            emojiData: o(753281).A.state
                        },
                        options: {
                            ignoreBlockCount: !1,
                            codePreviewFormat: r.isSyntheticAssistantData ? "code" : void 0,
                            ignoreImages: p
                        }
                    });
                for (let e of w)
                    if ((0, S().ph)(e)) {
                        let o = new(c()).B(t, e.pointer, {
                            inMemoryRecordCache: r,
                            userId: h.id
                        });
                        (0, D().k)({
                            store: o,
                            operation: e,
                            invertedOperation: void 0,
                            transaction: i
                        })
                    } else if ((0, m().$Y)(e)) {
                    let o = new(s()).pm({
                        environment: t,
                        pointer: e.pointer,
                        recordStoreOptions: {
                            inMemoryRecordCache: r,
                            userId: h.id
                        }
                    });
                    (0, P().y4)({
                        store: o,
                        operation: e,
                        transaction: i
                    })
                } else(0, k().HB)(e);
                return M.map(e => new(c()).B(t, {
                    table: v().evP,
                    id: e
                }, {
                    inMemoryRecordCache: r
                }))
            }

            function e9(e) {
                let {
                    event: t,
                    markdownLinkifyIt: o,
                    tinyMceMicrosoftWordPasteFilter: r,
                    supportsChatSelectionContextTokens: n
                } = e;
                if (!t.clipboardData) return;
                let {
                    text: i,
                    html: a,
                    multiTextSelectionData: l,
                    textSelectionData: s,
                    blockSelectionData: c
                } = en({
                    clipboardData: t.clipboardData,
                    tinyMceMicrosoftWordPasteFilter: r
                });
                if (l) return ew({
                    text: i,
                    html: a,
                    stripText: !1,
                    stripSurroundingWhitespace: !0,
                    markdownLinkifyIt: o,
                    tinyMceMicrosoftWordPasteFilter: r
                });
                if (s) {
                    let {
                        editing: e,
                        selection: t
                    } = s, o = h().Uee(h().AI5(e, t.startIndex, t.endIndex).tokensInsideRange, {
                        removeSuggestionAnnotationsAndText: !1,
                        removeSuggestionAnnotations: !0,
                        removeDiscussions: !0
                    });
                    return n ? o : eS(o)
                }
                if (a || i) return function(e) {
                    let {
                        text: t,
                        html: o,
                        blockSelectionData: r,
                        markdownLinkifyIt: n,
                        tinyMceMicrosoftWordPasteFilter: i
                    } = e;
                    return r && r.blocks.length > 0 || F(t) ? h().x9d(t) : ew({
                        text: t,
                        html: o,
                        stripText: !1,
                        stripSurroundingWhitespace: !0,
                        markdownLinkifyIt: n,
                        tinyMceMicrosoftWordPasteFilter: i
                    })
                }({
                    text: i,
                    html: a,
                    blockSelectionData: c,
                    markdownLinkifyIt: o,
                    tinyMceMicrosoftWordPasteFilter: r
                })
            }
        },
        951390: (e, t, o) => {
            function r(e, t, r) {
                var n, i, a, l;
                let s, c, d = e.collectionViewStore();
                if (!d) return {
                    combinatorFilter: void 0,
                    filters: {
                        moveOps: [],
                        removed: [],
                        updated: [],
                        moved: [],
                        added: []
                    },
                    sorts: void 0
                };
                let u = !e.getIsInDashboardBuildMode() || !!(null == r ? void 0 : r.forceUseTemporaryStateInBuildMode),
                    p = "persisted" === t ? d.getQueryStore().getKeyStore("sort").getValue() || [] : (null == (n = e.normalizedQueryStore.state) ? void 0 : n.sort) || [],
                    f = e.getCurrentSortsValue(!u),
                    g = "persisted" === t ? d.getQueryStore().getKeyStore("filter").getValue() : null == (i = e.normalizedQueryStore.state) ? void 0 : i.filter,
                    m = e.getCurrentCombinatorFilterValue(!u),
                    b = "persisted" === t ? (null == (a = d.getPropertyFiltersStore().getValue()) ? void 0 : a.sort((0, o(655135).I)())) || [] : (s = (l = e).normalizedSchemaStore.state, c = l.normalizedFormatStore.state.property_filters || [], o(381453).oE(c.filter(e => {
                        let t = (0, o(9658).hs)(e.filter, s),
                            r = l.collectionViewBlockStore();
                        if (s[e.filter.property] && t && (0, o(400473).tn)(s, e.filter.property, t.filter, null == r ? void 0 : r.getRecordModel)) return t && {
                            id: e.id,
                            filter: t
                        }
                    }).sort((0, o(655135).I)()))),
                    y = e.getCurrentPropertyFiltersValue(!u),
                    v = "dashboard" === d.getType(),
                    h = v ? "persisted" === t ? d.getFormatStore().getKeyStore("dashboard_global_filters").getValue() : e.normalizedFormatStore.state.dashboard_global_filters : void 0,
                    S = v ? e.getCurrentDashboardGlobalFiltersValue(!u) : void 0,
                    k = b.map(e => e.id),
                    C = y.map(e => e.id),
                    {
                        beforeOps: I,
                        removeOps: T
                    } = (0, o(219083).i)(k, C),
                    x = Array.from(T).filter(e => !C.includes(e)),
                    w = Object.keys(I).map(e => ({
                        id: e,
                        beforeId: I[e]
                    })),
                    M = w.filter(({
                        id: e
                    }) => k.includes(e)).map(({
                        id: e
                    }) => e),
                    A = w.filter(({
                        id: e
                    }) => !k.includes(e)).map(({
                        id: e
                    }) => e),
                    D = y.filter(e => b.find(t => {
                        if (e.id !== t.id) return !1;
                        let r = o(381453).mg(t),
                            n = o(381453).mg(e);
                        return !o(381453).n4((0, o(799150).A)(n, "ignore-class-instances"), (0, o(799150).A)(r, "ignore-class-instances"))
                    })).map(e => e.id);
                return {
                    combinatorFilter: o(381453).n4(g, m) ? void 0 : {
                        value: m
                    },
                    filters: {
                        moveOps: w,
                        removed: x,
                        updated: D,
                        moved: M,
                        added: A
                    },
                    sorts: o(381453).n4(p, f) ? void 0 : {
                        value: f
                    },
                    dashboardGlobalFilters: function({
                        sourceDashboardGlobalFilters: e,
                        localDashboardGlobalFilters: t
                    }) {
                        let r = (null == e ? void 0 : e.filter(e => e.targets && e.targets.length > 0)) ? ? [],
                            n = (null == t ? void 0 : t.filter(e => e.targets && e.targets.length > 0)) ? ? [];
                        return o(381453).n4(r, n) ? void 0 : {
                            value: n
                        }
                    }({
                        sourceDashboardGlobalFilters: h,
                        localDashboardGlobalFilters: S
                    })
                }
            }

            function n(e) {
                if (e.getIsInDashboardBuildMode()) return !1;
                let t = r(e, "normalized");
                return !!(t.filters.moved.length > 0 || t.filters.added.length > 0 || t.filters.removed.length > 0 || t.filters.updated.length > 0 || void 0 !== t.combinatorFilter || void 0 !== t.sorts || void 0 !== t.dashboardGlobalFilters)
            }

            function i(e) {
                if (e.getIsInDashboardBuildMode()) return !1;
                let t = r(e, "normalized");
                return !!(t.filters.moved.length > 0 || t.filters.added.length > 0 || t.filters.removed.length > 0 || t.filters.updated.length > 0 || void 0 !== t.combinatorFilter || void 0 !== t.dashboardGlobalFilters)
            }

            function a(e) {
                if (e.getIsInDashboardBuildMode()) return !1;
                let t = r(e, "normalized"),
                    n = e.currentPropertyFiltersStore.state.filter(e => !(0, o(400473).t_)(e.filter));
                return !!(t.filters.added.some(e => n.some(t => t.id === e)) || t.filters.moved.length > 0 || t.filters.removed.length > 0 || t.filters.updated.length > 0 || void 0 !== t.combinatorFilter || void 0 !== t.dashboardGlobalFilters)
            }

            function l(e) {
                return !e.getIsInDashboardBuildMode() && void 0 !== r(e, "normalized").sorts
            }
            o.d(t, {
                I6: () => i,
                Ml: () => r,
                gv: () => l,
                y_: () => n,
                ye: () => a
            }), o(898992), o(354520), o(672577), o(581454), o(737550)
        }
    }
]);