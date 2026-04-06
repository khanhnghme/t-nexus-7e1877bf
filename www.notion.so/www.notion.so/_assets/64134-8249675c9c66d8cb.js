"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [64134], {
        164134: (e, t, i) => {
            i.d(t, {
                $I: () => S,
                $L: () => w,
                $f: () => d,
                Bu: () => P,
                GK: () => f,
                IF: () => C,
                Ln: () => a,
                Nn: () => l,
                OM: () => m,
                OQ: () => v,
                Ui: () => o,
                Uo: () => _,
                bD: () => r,
                ds: () => s,
                dy: () => n,
                fk: () => y,
                g8: () => M,
                kr: () => A,
                sL: () => k,
                uj: () => j,
                xt: () => g
            }), i(944114), i(898992), i(354520), i(803949), i(581454);
            let o = (0, i(109939).YK)({
                defaultPermissionGroupName: {
                    defaultMessage: "Deleted group",
                    id: "pushNotification.permissionGroupName.defaultLabel"
                },
                defaultPageName: {
                    defaultMessage: "a Notion page",
                    id: "pushNotification.pageName.defaultLabel"
                },
                untitledPermissionGroupName: {
                    defaultMessage: "Untitled group",
                    id: "pushNotification.permissionGroupName.untitledLabel"
                },
                userEditedPermissionGroup: {
                    defaultMessage: "{userName} edited {permissionGroupName}",
                    id: "pushNotification.userEditedTarget.label"
                },
                userDeletedPermissionGroup: {
                    defaultMessage: "{userName} deleted {permissionGroupName}",
                    id: "pushNotification.userDeletedTarget.label"
                },
                userCreatedPermissionGroup: {
                    defaultMessage: "{userName} created {permissionGroupName}",
                    id: "pushNotification.userCreatedTarget.label"
                },
                unknownAuthor: {
                    defaultMessage: "Unknown author",
                    id: "pushNotification.authorPhrase.unknown"
                },
                untitledSpaceName: {
                    defaultMessage: "Untitled",
                    id: "pushNotification.untitledSpaceName.label"
                },
                untitledTeamName: {
                    defaultMessage: "Untitled",
                    id: "pushNotification.untitledTeamName.label"
                },
                untitledCollectionName: {
                    defaultMessage: "Untitled",
                    id: "pushNotification.untitledCollectionName.placeholder"
                },
                untitledBlockTitle: {
                    defaultMessage: "Untitled",
                    id: "pushNotification.untitledBlockTitle.placeholder"
                },
                editorPermissionLabel: {
                    defaultMessage: "Full access",
                    id: "pushNotifications.editorPermissionLevel.label"
                },
                readerPermissionLabel: {
                    defaultMessage: "Read only",
                    id: "pushNotifications.readerPermissionLevel.label"
                },
                editOnlyPermissionLabel: {
                    defaultMessage: "Edit only",
                    id: "pushNotifications.editOnlyPermissionLevel.label"
                },
                editPermissionLabel: {
                    defaultMessage: "Edit",
                    id: "pushNotifications.editPermissionLevel.label"
                },
                commentOnlyPermissionLabel: {
                    defaultMessage: "Comment only",
                    id: "pushNotifications.commentOnlyPermissionLevel.label"
                },
                noAccessPermissionLabel: {
                    defaultMessage: "No access",
                    id: "pushNotifications.noAccessPermissionLevel.label"
                },
                publicPermissionRoleLabel: {
                    defaultMessage: "Public ({permissionLevel})",
                    id: "pushNotifications.publicPermissions.label"
                },
                userNameWithRole: {
                    defaultMessage: "{userName} ({permissionLevel})",
                    id: "pushNotifications.userPermissionsWithRole.label"
                },
                botNameWithRole: {
                    defaultMessage: "{botName} ({permissionLevel})",
                    id: "pushNotifications.botPermissionsWithRole.label"
                },
                spaceNameWithRole: {
                    defaultMessage: "{spaceName} ({permissionLevel})",
                    id: "pushNotifications.spacePermissionsWithRole.label"
                },
                imageInPushNotification: {
                    defaultMessage: "{imageEmoji} Image",
                    id: "pushNotification.imageInPushNotification.placeholder"
                },
                topLevelBlockCreated: {
                    defaultMessage: "{userName} created {targetName} in {spaceName}",
                    id: "pushNotification.userCreatedBlockInSpace.message"
                },
                topLevelBlockDeleted: {
                    defaultMessage: "{userName} deleted {targetName} in {spaceName}",
                    id: "pushNotification.userDeletedBlockInSpace.message"
                },
                collectionRowCreated: {
                    defaultMessage: "{userName} created {targetName} in {collectionName}",
                    id: "pushNotification.userCreatedRowInCollection.message"
                },
                collectionRowDeleted: {
                    defaultMessage: "{userName} deleted {targetName} in {collectionName}",
                    id: "pushNotification.userDeletedRowInCollection.message"
                },
                emptyBlockEditedProperty: {
                    defaultMessage: "Empty",
                    id: "pushNotification.emptyBlockPropertyValueEdited.placeholderLabel"
                },
                propertyNameAndValueEdited: {
                    defaultMessage: "{propertyName} ({propertyValue})",
                    id: "pushNotification.propertyNameWithEditedValue.notificationSubject"
                },
                propertyNameAndValueNotificationBody: {
                    defaultMessage: "{propertyName} ({propertyValue})",
                    id: "pushNotification.propertyNameWithEditedValue.notificationBody"
                },
                blockDeletedEditBody: {
                    defaultMessage: "[Deleted] {renderedBlock}",
                    id: "pushNotification.deletedBlock.notificationContents"
                },
                blockEditedNotification: {
                    defaultMessage: "{userName} edited {blockName}",
                    id: "pushNotification.blockEdited.notificationSubject"
                },
                blockPropertyEditedNotification: {
                    defaultMessage: "{userName} updated {blockName}",
                    id: "pushNotification.blockPropertyEdited.notificationSubject"
                },
                mobileBlockPropertyEditedNotification: {
                    defaultMessage: "{userName} updated",
                    id: "pushNotification.mobileBlockPropertyEdited.notificationSubject"
                },
                userEditedPermissionsFor: {
                    defaultMessage: "{userName} edited permissions for {targetName}",
                    id: "pushNotifications.permissionsEditedForPageOrSpace.notificationSubject"
                },
                userMentionedIn: {
                    defaultMessage: "{userName} mentioned you in {targetName}",
                    id: "pushNotifications.userMentionedInPage.notificationSubject"
                },
                mobileUserMentionedIn: {
                    defaultMessage: "{userName} mentioned you",
                    id: "pushNotifications.mobileUserMentionedInPage.notificationSubject"
                },
                permissionGroupMentionedIn: {
                    defaultMessage: "{userName} mentioned {groupName} in {targetName}",
                    id: "pushNotifications.groupMentionedInPage.notificationSubject"
                },
                teamMentionedIn: {
                    defaultMessage: "{userName} mentioned {teamName} in {targetName}",
                    id: "pushNotifications.teamMentionedInPage.notificationSubject"
                },
                userDeletedComment: {
                    defaultMessage: "[Deleted]💬 {commentText}",
                    id: "pushNotifications.userDeletedCommentText.notificationContents"
                },
                userCommentedSubject: {
                    defaultMessage: "{userName} commented in {targetName}",
                    id: "pushNotifications.userCommentedSubject.notificationSubject"
                },
                userSuggestedSubject: {
                    defaultMessage: "{userName} suggested in {targetName}",
                    id: "pushNotifications.userSuggestedSubject.notificationSubject"
                },
                mobileUserCommentedSubject: {
                    defaultMessage: "{userName} commented",
                    id: "pushNotifications.mobileUserCommentedSubject.notificationSubject"
                },
                mobileUserSuggestedSubject: {
                    defaultMessage: "{userName} commented",
                    id: "pushNotifications.mobileUserSuggestedSubject.notificationSubject"
                },
                userAddedToSpace: {
                    defaultMessage: "{userName} added you to {workspaceName}",
                    id: "pushNotifications.userAddedToSpace.notificationSubject"
                },
                mobileUserInvited: {
                    defaultMessage: "{userName} invited you",
                    id: "pushNotifications.mobileUserInvited.notificationSubject"
                },
                mobileUserInvitedByBot: {
                    defaultMessage: "You have been invited",
                    id: "pushNotifications.mobileUserInvitedByBot.notificationSubject"
                },
                userInvitedToSpace: {
                    defaultMessage: "{userName} invited you to {workspaceName}",
                    id: "pushNotifications.userInvitedToSpace.notificationSubject"
                },
                userInvitedToSpaceByBot: {
                    defaultMessage: "You have been invited to {workspaceName}",
                    id: "pushNotifications.userInvitedToSpaceByBot.notificationSubject"
                },
                userEditedCollectionSubject: {
                    defaultMessage: "{userName} edited {collectionName}",
                    id: "pushNotifications.collectionEdited.notificationSubject"
                },
                userEditedCollectionPageLayoutSubject: {
                    defaultMessage: "{userName} edited the layout of {collectionName}",
                    id: "pushNotifications.collectionPageLayoutEdited.notificationSubject"
                },
                userCreatedCollectionSubject: {
                    defaultMessage: "{userName} created {collectionName}",
                    id: "pushNotifications.collectionCreated.notificationSubject"
                },
                collectionDescriptionDeleted: {
                    defaultMessage: "{userName} deleted the description for {collectionName}",
                    id: "pushNotifications.collectionDescriptionDeleted.notificationSubject"
                },
                collectionDescriptionCreated: {
                    defaultMessage: "{userName} added a description for {collectionName}",
                    id: "pushNotifications.collectionDescriptionAdded.notificationSubject"
                },
                untitledCollectionView: {
                    defaultMessage: "Untitled",
                    id: "pushNotifications.untitledCollection.label"
                },
                collectionViewEditedSubject: {
                    defaultMessage: "{userName} edited view {collectionViewName} in {collectionName}",
                    id: "pushNotifications.collectionViewEdited.notificationSubject"
                },
                collectionViewEditedDashboardWidgetSubject: {
                    defaultMessage: "{userName} edited view {collectionViewName} in view {dashboardName} of {databaseName}",
                    id: "pushNotifications.collectionViewEditedDashboardWidget.notificationSubject"
                },
                collectionPropertyEditedUnknown: {
                    defaultMessage: "Unknown",
                    id: "pushNotifications.unknownCollectionPropertyName.label"
                },
                collectionPropertyEditedSubject: {
                    defaultMessage: "{userName} edited property {propertyType} in {collectionName}",
                    id: "pushNotifications.collectionPropertyEdited.subject"
                },
                reminderSubject: {
                    defaultMessage: "Reminder in {pageName}",
                    id: "pushNotifications.reminderChanged.subject"
                },
                pageLockedActivity: {
                    defaultMessage: "{userName} locked {pageName}",
                    id: "pushNotifications.pageLocked.subject"
                },
                pageUnlockedActivity: {
                    defaultMessage: "{userName} unlocked {pageName}",
                    id: "pushNotifications.pageUnlocked.subject"
                },
                emailEditedActivity: {
                    defaultMessage: "{userName} edited their account settings",
                    id: "pushNotifications.emailAccountSettingsEdited.subject"
                },
                emptyPropertyBody: {
                    defaultMessage: "Empty",
                    id: "pushNotifications.emptyPropertyValueInCollection.label"
                },
                unknownRelationValueChange: {
                    defaultMessage: "Unknown",
                    id: "pushNotifications.unknownRelationPropertyChanged.label"
                },
                unknownAuthorInPropertySchemaChange: {
                    defaultMessage: "Unknown author",
                    id: "pushNotifications.unknownAuthorUpdatedProperty.label"
                },
                accessRequestedSubject: {
                    defaultMessage: "{userName} requested access to {pageName}",
                    id: "pushNotifications.accessRequested.subject"
                },
                editAccessRequestedSubject: {
                    defaultMessage: "{userName} requested edit access to {pageName}",
                    id: "pushNotifications.editAccessRequested.subject"
                },
                accessRequestResolvedApprovedSubject: {
                    defaultMessage: "Your request to invite {guestEmail} to {pageName} has been approved",
                    id: "pushNotifications.accessRequestResolved.approved.subject"
                },
                accessRequestResolvedRejectedSubject: {
                    defaultMessage: "Your request to invite {guestEmail} to {pageName} has been rejected",
                    id: "pushNotifications.accessRequestResolved.subject"
                },
                membershipRequestedSubject: {
                    defaultMessage: "{userName} requested to add a new member to {workspaceName}",
                    id: "pushNotifications.membershipRequested.subject"
                },
                guestInviteRequestedSubject: {
                    defaultMessage: "{userName} requested to invite a guest to {workspaceName}",
                    id: "pushNotifications.guestInviteRequested.subject"
                },
                restrictedMemberInviteRequestedSubject: {
                    defaultMessage: "{userName} requested to invite a restricted member to {pageName}",
                    id: "pushNotifications.restrictedMemberInviteRequested.subject"
                },
                blockFormatEditPageIconName: {
                    defaultMessage: "Page Icon",
                    id: "pushNotifications.formatChange.pageIcon.label"
                },
                pageIconImagePlaceholder: {
                    defaultMessage: "Image",
                    id: "pushNotifications.formatChange.pageIcon.imagePlaceholder"
                },
                pageDeletedActivity: {
                    defaultMessage: "{userName} deleted {pageName}",
                    id: "pushNotifications.pageDeleted.subject"
                },
                pageRestoredActivity: {
                    defaultMessage: "{userName} restored {pageName}",
                    id: "pushNotifications.pageRestored.subject"
                },
                pagePermanentlyDeletedActivity: {
                    defaultMessage: "{userName} permanently deleted {pageName}",
                    id: "pushNotifications.pagePermanentlyDeleted.subject"
                },
                userInvitedToTeam: {
                    defaultMessage: "{userName} invited you to {teamName}",
                    id: "pushNotifications.userInvitedToTeam.notificationSubject"
                },
                privateContentTransferred: {
                    defaultMessage: "{author} transferred private content from {fromUserName} to you: {pageName}",
                    id: "pushNotifications.privateContentTransferred.notificationSubject"
                },
                verificationExpired: {
                    defaultMessage: "Verification expired for {pageName}",
                    id: "pushNotifications.verificationExpired.notificationSubject"
                },
                importSuccessful: {
                    defaultMessage: "Your {importSource} import was successful",
                    id: "pushNotifications.importCompleted.notificationSubject"
                },
                importFailed: {
                    defaultMessage: "Your {importSource} import has failed",
                    id: "pushNotifications.importFailed.notificationSubject"
                },
                exportCompleted: {
                    defaultMessage: "Your workspace export is ready",
                    id: "pushNotifications.exportCompleted.notificationSubject"
                },
                exportTeamspaceCompleted: {
                    defaultMessage: "Your export of {count, plural, one {# teamspace} other {# teamspaces}} is ready",
                    id: "pushNotifications.exportTeamspaceCompleted.notificationSubject"
                },
                inAppNotificationAutomationActionTriggered: {
                    defaultMessage: "{automationName} sent you a message",
                    id: "pushNotifications.inAppNotificationAutomationActionTriggered.notificationSubject"
                },
                noConflictsFound: {
                    defaultMessage: "No conflicts found",
                    id: "pushNotifications.noConflictsFound.notificationSubject"
                },
                automationTypecheckErrorRaisedSubject: {
                    defaultMessage: "{automationName} is invalid",
                    id: "pushNotifications.automationTypecheckErrorRaised.notificationSubject"
                },
                automationTypecheckErrorRaisedBody: {
                    defaultMessage: "Resolve any errors or remove failing steps to enable this automation",
                    id: "pushNotifications.automationTypecheckErrorRaised.notificationBody"
                },
                automationPausedDueToExecutionFailureSubject: {
                    defaultMessage: "{automationName} has been paused",
                    id: "pushNotifications.automationPausedDueToExecutionFailure.notificationSubject"
                },
                automationPausedDueToExecutionFailureBody: {
                    defaultMessage: "Resolve any errors or remove failing steps to re-enable this automation",
                    id: "pushNotifications.automationPausedDueToExecutionFailure.notificationBody"
                },
                reactionCreated: {
                    defaultMessage: "{userName} reacted to {targetName}",
                    id: "pushNotifications.reactionCreated.notificationSubject"
                },
                upgradeRequestCreated: {
                    defaultMessage: "{userName} requested an upgrade",
                    id: "pushNotifications.upgradeRequestCreated.notificationSubject"
                },
                appBuilderWorkflowError: {
                    defaultMessage: "A task has failed",
                    id: "pushNotifications.appBuilderWorkflowError.notificationSubject"
                },
                appBuilderWorkflowAction: {
                    defaultMessage: "{workflowName} has sent you a message",
                    id: "pushNotifications.appBuilderWorkflowAction.notificationSubject"
                },
                appBuilderWorkflowNeedsReview: {
                    defaultMessage: "{workflowName} needs your review",
                    id: "pushNotifications.appBuilderWorkflowNeedsReview.notificationSubject"
                },
                customAppBuilderWorkflowActionTitle: {
                    defaultMessage: "From {workflowName}: {customTitle}",
                    id: "pushNotifications.appBuilderWorkflowAction.customNotificationSubject"
                },
                externalIntegrationNotificationDefault: {
                    defaultMessage: "An external integration has sent you a message",
                    id: "pushNotifications.externalIntegrationNotificationDefault.notificationSubject"
                },
                externalIntegrationNotificationJiraSyncTokenExpiryError: {
                    defaultMessage: "Your Jira sync stopped for {site} due to expired Jira token. Please re-authenticate to continue.",
                    id: "pushNotifications.externalIntegrationNotificationJiraSyncTokenExpiryError.notificationSubject"
                },
                appBuilderNotificationDefault: {
                    defaultMessage: "Agent task has notified you",
                    id: "pushNotifications.appBuilderNotificationDefault.notificationSubject"
                },
                appBuilderWorkflowErrorBody: {
                    defaultMessage: "{workflowName} has failed to run",
                    id: "pushNotifications.appBuilderWorkflowError.notificationBody"
                },
                appBuilderWorkflowNeedsReviewBody: {
                    defaultMessage: "{workflowName} needs your review",
                    id: "pushNotifications.appBuilderWorkflowNeedsReview.notificationBody"
                },
                appBuilderWorkflowConnectionError: {
                    defaultMessage: "{workflowName} has a connection issue",
                    id: "pushNotifications.appBuilderWorkflowConnectionError.notificationSubject"
                },
                appBuilderWorkflowConnectionErrorBody: {
                    defaultMessage: "Open settings to check connections",
                    id: "pushNotifications.appBuilderWorkflowConnectionError.notificationBody"
                },
                trialCreated: {
                    defaultMessage: "{userName} started a {days} day trial of Notion {product}",
                    id: "pushNotifications.trialCreated.notificationSubject"
                },
                trialCreatedWithoutUserName: {
                    defaultMessage: "Your space is in a {days} day trial of Notion {product}",
                    id: "pushNotifications.trialCreatedWithoutUserName.notificationSubject"
                },
                trialCreatedBody: {
                    defaultMessage: "You now have access to all {product} plan features until {endDate}",
                    id: "pushNotifications.trialCreatedBody.notificationBody"
                },
                transcriptDeleted: {
                    defaultMessage: "{userName} deleted a transcript from {pageName}",
                    id: "pushNotifications.transcriptDeleted.notificationSubject"
                }
            });

            function a(e) {
                let {
                    activity: t,
                    getRecordValue: o
                } = e, a = t.getEdits();
                return i(381453).oE((0, i(627179).qt)(i(381453).Bq(a.map(e => e.authors || []))).map(e => {
                    let t = o(e);
                    if (t) return (0, i(197018).D3)({
                        table: e.table,
                        value: t
                    })
                }))
            }

            function r(e, t) {
                let a = e.map(e => e ? (0, i(197018).lR)(t, e) : t.formatMessage(o.unknownAuthor));
                if (1 === a.length) return a[0];
                if (2 === a.length) return t.formatMessage(i(561007).U.forTwoAuthorsPushNotification, {
                    firstAuthor: a[0],
                    secondAuthor: a[1]
                });
                if (!(a.length > 2)) return t.formatMessage(i(561007).U.someone); {
                    let e = a.length - 1;
                    return t.formatMessage(i(561007).U.forMoreThanTwoAuthorsPushNotification, {
                        firstAuthor: a[0],
                        numberOfOtherAuthors: e
                    })
                }
            }

            function s(e) {
                var t, o;
                let {
                    recipientUser: a,
                    authors: r
                } = e, s = r.filter(e => e.id !== (null == a ? void 0 : a.id));
                if (0 === s.length) return;
                let n = s[0];
                if (n.table === i(514214).oo && null != (t = n.asActor) && t.profile_photo) return null == (o = n.asActor) ? void 0 : o.profile_photo
            }

            function n(e) {
                if (!i(381453).Im(e)) return e[0].id
            }

            function u(e) {
                let {
                    blockValue: t,
                    getRecordValue: o,
                    userTimeZone: a,
                    intl: r
                } = e, s = i(993189).Bj6.fromBlock(t), n = i(993189).b4_.fromGetRecordValueFn(o);
                return s.getRenderTitleWithEmojiOrPlaceholder({
                    getRecordModel: n,
                    userTimeZone: a,
                    intl: r
                })
            }

            function d(e) {
                return (function(e) {
                    let {
                        activity: t,
                        getRecordValue: a,
                        pageVisitSource: r,
                        userTimeZone: s,
                        intl: n
                    } = e, d = i(993189).b4_.fromGetRecordValueFn(a), l = t.navigable_block_id || t.top_level_block_id || t.collection_row_id;
                    if (l) {
                        let c = a({
                            table: i(682956).ev,
                            id: l,
                            spaceId: t.space_id
                        });
                        return c ? {
                            url: (0, i(492569).Q)({
                                model: i(993189).Bj6.fromBlock(c),
                                getRecordModel: d,
                                baseUrl: e.baseURL,
                                pageVisitSource: r,
                                addPagePrefix: (0, i(386883).L)(e.baseURL)
                            }),
                            title: u({
                                intl: n,
                                blockValue: c,
                                getRecordValue: a,
                                userTimeZone: s,
                                baseURL: e.baseURL
                            })
                        } : {
                            url: e.baseURL || "/",
                            title: n.formatMessage(o.untitledBlockTitle)
                        }
                    }
                    if (t.collection_id) return h(e);
                    if ("user-invited" === t.type) {
                        let o = function(e) {
                                let {
                                    activity: t
                                } = e, o = i(993189).b4_.fromGetRecordValueFn(e.getRecordValue || e.getRecordModel);
                                if (!t.permission_group_id) return;
                                let a = S({
                                    spaceId: t.space_id,
                                    permissionGroupId: t.permission_group_id,
                                    getRecordModel: o
                                });
                                if (a) return {
                                    icon: a.getIcon(),
                                    name: a.getName()
                                }
                            }({
                                activity: t,
                                getRecordValue: a
                            }),
                            r = d({
                                table: i(213003).NX,
                                id: t.space_id
                            });
                        if (r && o) return {
                            title: A(n, o),
                            url: (0, i(492569).Q)({
                                model: r,
                                baseUrl: e.baseURL,
                                addPagePrefix: (0, i(386883).L)(e.baseURL)
                            })
                        }
                    } else if ("team-membership-edited" === t.type) return c(e);
                    else if ("access-requested" === t.type) {
                        let o = d({
                            id: t.getAccessRequestId(),
                            table: i(226962).O,
                            spaceId: t.space_id
                        });
                        if (o && o.isTeamMembershipRequest()) return c(e)
                    }
                    return p(e)
                })(e).title.replaceAll(/[\r\n]+/g, " ")
            }

            function l(e) {
                let {
                    activity: t
                } = e, i = t.navigable_block_id || t.top_level_block_id || t.collection_row_id;
                return i || (t.collection_id ? t.collection_id : void 0)
            }

            function c(e) {
                let {
                    activity: t,
                    getRecordValue: a,
                    intl: r
                } = e, s = i(993189).b4_.fromGetRecordValueFn(a), n = e.baseURL || "/", u = r.formatMessage(o.untitledTeamName);
                if (!t.team_id) return {
                    url: n,
                    title: u
                };
                let d = s({
                        table: i(708628).yK,
                        id: t.team_id
                    }),
                    l = s({
                        table: i(213003).NX,
                        id: t.space_id
                    });
                return {
                    url: (l && (0, i(492569).Q)({
                        model: l,
                        baseUrl: e.baseURL,
                        addPagePrefix: (0, i(386883).L)(e.baseURL)
                    })) ? ? n,
                    title: (null == d ? void 0 : d.getRenderTitleWithEmojiOrPlaceholder({
                        intl: r
                    })) ? ? u
                }
            }

            function f(e) {
                return p(e).title
            }

            function p(e) {
                let {
                    activity: t,
                    getRecordValue: a,
                    intl: r
                } = e, s = a({
                    table: i(213003).NX,
                    id: t.space_id
                });
                if (!s) return {
                    url: e.baseURL || "/",
                    title: r.formatMessage(o.untitledSpaceName)
                }; {
                    let t = i(993189).Bj6.fromSpace(s);
                    return {
                        title: t.getRenderTitleWithEmojiOrPlaceholder({
                            intl: r
                        }),
                        url: (0, i(492569).Q)({
                            model: t,
                            baseUrl: e.baseURL,
                            addPagePrefix: (0, i(386883).L)(e.baseURL)
                        })
                    }
                }
            }

            function m(e) {
                return h(e).title
            }

            function h(e) {
                let {
                    activity: t,
                    getRecordValue: a,
                    pageVisitSource: r,
                    userTimeZone: s,
                    intl: n
                } = e;
                if (!t.collection_id) return {
                    url: e.baseURL || "/",
                    title: n.formatMessage(o.untitledCollectionName)
                }; {
                    let u = a({
                        table: i(46241).V,
                        id: t.collection_id,
                        spaceId: t.space_id
                    });
                    if (!u) return {
                        url: e.baseURL || "/",
                        title: n.formatMessage(o.untitledCollectionName)
                    }; {
                        let t = i(993189).Bj6.fromCollection(u),
                            o = i(993189).b4_.fromGetRecordValueFn(e.getRecordValue),
                            a = t.getRenderTitleWithEmojiOrPlaceholder({
                                getRecordModel: o,
                                userTimeZone: s,
                                intl: n
                            });
                        return {
                            url: (0, i(492569).Q)({
                                model: t,
                                getRecordModel: o,
                                baseUrl: e.baseURL,
                                pageVisitSource: r,
                                swapDsPrefix: (0, i(386883).L)(e.baseURL)
                            }),
                            title: a
                        }
                    }
                }
            }

            function g(e) {
                let {
                    activity: t,
                    getRecordValue: o,
                    intl: a
                } = e;
                if ("in-app-notification-automation-action-triggered" === t.type || "automation-paused-due-to-execution-failure" === t.type || "automation-typecheck-error-raised" === t.type) {
                    let e = i(993189).b4_.fromGetRecordValueFn(o),
                        r = e({
                            table: i(199850).yB,
                            id: t.getEdits()[0].automation_id,
                            spaceId: t.space_id
                        });
                    return (null == r ? void 0 : r.getNameWithDefault(e, a)) ? ? (0, i(658746).PK)(a)
                }
            }

            function b(e) {
                if (e.blockValue.properties) return (0, i(458230).r4)({
                    intl: e.intl,
                    textValue: e.blockValue.properties.title,
                    getRecordModel: i(993189).b4_.fromGetRecordValueFn(e.getRecordValue),
                    userTimeZone: e.userTimeZone
                })
            }

            function N(e, t) {
                let o = (0, i(579825).an)(t, void 0);
                return e.formatMessage(o)
            }

            function y({
                userTimeZone: e,
                activity: t,
                getRecordValue: a,
                pageVisitSource: r,
                intl: s,
                experimentService: n,
                collectionFeatureGates: u,
                spaceIdCreator: d,
                baseURL: l
            }) {
                let c = t.getEdits();
                if (c.length) {
                    let p = [];
                    c.forEach(e => {
                        "permission-created" === e.type ? p.push(e.permission_data) : "permission-deleted" === e.type ? p.push({ ...e.permission_data,
                            role: "none"
                        }) : "permission-restriction-created" === e.type || "permission-restriction-deleted" === e.type ? (e.permission_data.calculated_changes || []).forEach(([e, t]) => {
                            p.push(t)
                        }) : p.push(e.permission_data.after)
                    });
                    let m = i(381453).oE(p.sort(i(579825).zK).map(c => {
                        if ("user_permission" === c.type) {
                            let e = a({
                                    table: i(514214).oo,
                                    id: c.user_id
                                }),
                                t = (0, i(413818).c6)(s, e),
                                r = N(s, c.role);
                            return s.formatMessage(o.userNameWithRole, {
                                userName: t,
                                permissionLevel: r
                            })
                        }
                        if ("space_permission" === c.type) {
                            let i = f({
                                    intl: s,
                                    activity: t,
                                    getRecordValue: a,
                                    userTimeZone: e,
                                    pageVisitSource: r,
                                    experimentService: n,
                                    collectionFeatureGates: u,
                                    spaceIdCreator: d,
                                    baseURL: l
                                }),
                                p = N(s, c.role);
                            return s.formatMessage(o.spaceNameWithRole, {
                                spaceName: i,
                                permissionLevel: p
                            })
                        }
                        if ("public_permission" === c.type) {
                            let e = N(s, c.role);
                            return s.formatMessage(o.publicPermissionRoleLabel, {
                                permissionLevel: e
                            })
                        }
                        if ("bot_permission" === c.type) {
                            let e = a({
                                    table: i(890920).GP,
                                    id: c.bot_id
                                }),
                                t = (0, i(697006).Hg)(e),
                                r = N(s, c.role);
                            return s.formatMessage(o.botNameWithRole, {
                                botName: t,
                                permissionLevel: r
                            })
                        }
                    }));
                    return s.formatList(m, {
                        type: "conjunction",
                        style: "narrow"
                    })
                }
            }

            function M(e) {
                let {
                    intl: t
                } = e;
                switch (e.blockValue.type) {
                    case i(955630).xd.text:
                    case i(955630).xd.header:
                    case i(955630).xd.subHeader:
                    case i(955630).xd.subSubHeader:
                    case i(955630).xd.factory:
                    case i(955630).xd.equation:
                    case i(955630).xd.code:
                        return b(e);
                    case i(955630).xd.toggle:
                        return `▸ ${b(e)}`;
                    case i(955630).xd.bulletedList:
                        return `• ${b(e)}`;
                    case i(955630).xd.numberedList:
                        return `1. ${b(e)}`;
                    case i(955630).xd.quote:
                        return `“${b(e)}”`;
                    case i(955630).xd.toDo:
                        return (! function({
                            blockValue: e
                        }) {
                            let t = i(993189).Bj6.fromBlock(e);
                            return (0, i(896216).w)(t.getNonCollectionProperty("checked"))
                        }(e) ? "▢ " : "✓ ") + b(e);
                    case i(955630).xd.file:
                    case i(955630).xd.bookmark:
                        return `🔗 ${b(e)}`;
                    case i(955630).xd.embed:
                    case i(955630).xd.framer:
                    case i(955630).xd.whimsical:
                    case i(955630).xd.mixpanel:
                    case i(955630).xd.miro:
                    case i(955630).xd.abstract:
                    case i(955630).xd.sketch:
                    case i(955630).xd.excalidraw:
                    case i(955630).xd.replit:
                    case i(955630).xd.hex:
                    case i(955630).xd.deepnote:
                    case i(955630).xd.tweet:
                    case i(955630).xd.gist:
                    case i(955630).xd.maps:
                    case i(955630).xd.invision:
                    case i(955630).xd.video:
                    case i(955630).xd.audio:
                    case i(955630).xd.image:
                        return t.formatMessage(o.imageInPushNotification, {
                            imageEmoji: "🖼"
                        });
                    case i(955630).xd.drive:
                        return function(e) {
                            let {
                                blockValue: t
                            } = e, o = (0, i(565546).v)(i(993189).Bj6.fromBlock(t));
                            return o && o.title ? o.title : u(e)
                        }(e);
                    case i(955630).xd.page:
                    case i(955630).xd.collectionView:
                    case i(955630).xd.collectionViewPage:
                        return u(e);
                    case i(955630).xd.tableRow:
                        return function(e) {
                            var t;
                            let {
                                blockValue: o,
                                getRecordValue: a,
                                userTimeZone: r,
                                intl: s
                            } = e, n = a({
                                table: o.parent_table,
                                id: o.parent_id,
                                spaceId: o.space_id
                            });
                            if (!n || !o) return;
                            let u = o.properties,
                                d = (null == (t = n.format) ? void 0 : t.table_block_column_order) || [];
                            if (d && u) return d.map(e => (0, i(458230).r4)({
                                textValue: u[e],
                                getRecordModel: i(993189).b4_.fromGetRecordValueFn(a),
                                userTimeZone: r,
                                intl: s
                            })).join(", ")
                        }(e)
                }
            }

            function v(e) {
                let {
                    getRecordValue: t,
                    baseURL: a,
                    userTimeZone: r,
                    intl: s,
                    collectionFeatureGates: n,
                    spaceIdCreator: u
                } = e, d = t({
                    table: i(682956).ev,
                    id: e.blockId
                });
                if (d)
                    if ("page" !== d.type) return M({
                        intl: s,
                        blockValue: d,
                        getRecordValue: t,
                        baseURL: a,
                        userTimeZone: r
                    });
                    else {
                        let c = (0, i(975908).zN)({
                            block: d,
                            getRecordValue: t
                        });
                        if (!c) return M({
                            intl: s,
                            blockValue: d,
                            getRecordValue: t,
                            baseURL: a,
                            userTimeZone: r
                        }); {
                            var l;
                            let a = i(993189).b4_.fromGetRecordValueFn(t),
                                r = null == (l = i(993189).Bj6.fromCollection(c)) ? void 0 : l.getNormalizedSchema(a),
                                f = r[e.property],
                                p = f ? f.name : void 0,
                                m = P({
                                    property: e.property,
                                    schema: r,
                                    block: d,
                                    getRecordValue: t,
                                    userTimeZone: e.userTimeZone,
                                    baseURL: e.baseURL,
                                    intl: s,
                                    experimentService: e.experimentService,
                                    collectionFeatureGates: n,
                                    spaceIdCreator: u
                                }) || s.formatMessage(o.emptyPropertyBody);
                            return s.formatMessage(o.propertyNameAndValueNotificationBody, {
                                propertyName: p,
                                propertyValue: m
                            })
                        }
                    }
            }

            function P(e) {
                let {
                    property: t,
                    schema: a,
                    getRecordValue: r,
                    userTimeZone: s,
                    baseURL: n,
                    intl: u,
                    experimentService: d,
                    collectionFeatureGates: l,
                    spaceIdCreator: c
                } = e, f = a[t], p = i(993189).Bj6.fromBlock(e.block), m = i(993189).b4_.fromGetRecordValueFn(r);
                if (!p.getProperties(m) || !f) return;
                let h = p.getProperties(m)[t];
                if ("formula" === f.type) {
                    let e = (0, i(299512).primitiveFormulaValueFromPropertySchema)({
                        schema: a,
                        property: t,
                        blockModel: p,
                        getRecordModel: m,
                        intl: u,
                        userTimeZone: s,
                        depth: 0,
                        resultCache: new Map,
                        regExpCache: new Map,
                        formatDateCache: new Map,
                        experimentService: d,
                        collectionFeatureGates: l,
                        spaceIdCreator: c,
                        getRelationEdgeList: void 0
                    });
                    return i(943003).kC(e) ? (0, i(850640).ZF)({
                        allowRelativeDates: !0,
                        intl: u,
                        value: e,
                        userTimeZone: s
                    }) : "boolean" == typeof e ? e ? i(745680).I1 : i(745680).oP : (0, i(627179).Et)(e) ? e.toString() : e
                }
                if ("person" === f.type) return R({
                    textValue: h,
                    propertySchema: f,
                    blockCreatorPointer: p.getCreatedByPointer(),
                    getRecordValue: r,
                    intl: u
                });
                if ("created_by" === f.type) {
                    let e = p.getCreatedByPointer();
                    if (!e) return u.formatMessage(o.unknownAuthorInPropertySchemaChange);
                    let t = r(e),
                        a = t && (0, i(197018).D3)({
                            table: e.table,
                            value: t
                        });
                    return a ? (0, i(197018).lR)(u, a) : u.formatMessage(o.unknownAuthorInPropertySchemaChange)
                }
                return "created_time" === f.type ? (0, i(850640).W_)(p.getCreatedTime(), "short", u.locale, s) : h ? k({
                    propertySchema: f,
                    textValue: h,
                    getRecordValue: r,
                    userTimeZone: s,
                    baseURL: n,
                    intl: u,
                    experimentService: d,
                    spaceIdCreator: c
                }) : void 0
            }

            function k(e) {
                let {
                    propertySchema: t,
                    textValue: a,
                    getRecordValue: r,
                    userTimeZone: s,
                    baseURL: n,
                    intl: d
                } = e;
                if ("title" === t.type || "text" === t.type || "place" === t.type) return (0, i(458230).r4)({
                    intl: d,
                    textValue: a,
                    getRecordModel: i(993189).b4_.fromGetRecordValueFn(r),
                    userTimeZone: s
                });
                if ("select" === t.type) {
                    let e = t.options || [];
                    return i(561872).L3(a, e)
                }
                if ("multi_select" === t.type) {
                    let e = t.options || [];
                    return d.formatList(i(561872).o2(a, e), {
                        type: "conjunction",
                        style: "narrow"
                    })
                }
                if ("checkbox" === t.type) return (0, i(896216).w)(a) ? i(745680).I1 : i(745680).oP;
                if ("date" === t.type) {
                    let e = (0, i(179358).b)(a);
                    if (e) return (0, i(850640).ZF)({
                        allowRelativeDates: !0,
                        intl: d,
                        value: e,
                        date_format: t.date_format,
                        time_format: t.time_format,
                        userTimeZone: s
                    })
                } else if ("person" === t.type) return R({
                    textValue: a,
                    propertySchema: t,
                    blockCreatorPointer: void 0,
                    getRecordValue: r,
                    intl: d
                });
                else if ("relation" === t.type) {
                    let e = i(561872).bG({
                        relationValue: i(561872).n(a),
                        getRecordModel: i(993189).b4_.fromGetRecordValueFn(r),
                        propertySchema: t,
                        includeNoAccess: !0
                    });
                    return d.formatList(e.map(r).map(e => e ? u({
                        intl: d,
                        blockValue: e,
                        getRecordValue: r,
                        baseURL: n,
                        userTimeZone: s
                    }) : d.formatMessage(o.unknownRelationValueChange)), {
                        type: "conjunction",
                        style: "narrow"
                    })
                } else if ("number" === t.type) {
                    let e = i(588688).M(a);
                    if (void 0 !== e) return e.toString()
                } else if ("auto_increment_id" === t.type) {
                    let e = i(561872).On(a);
                    if (void 0 !== e) return e.toString()
                } else if ("file" === t.type) return d.formatList(i(561872).pJ(a, t).map(e => e.name || e.url), {
                    type: "conjunction",
                    style: "narrow"
                });
                else if ("url" === t.type || "phone_number" === t.type || "email" === t.type) return (0, i(247438).k4p)(a);
                else if ("created_by" === t.type);
                else if ("created_time" === t.type);
                else if ("formula" === t.type);
                else if ("rollup" === t.type);
                else if ("last_edited_by" === t.type);
                else if ("last_edited_time" === t.type);
                else if ("last_visited_time" === t.type);
                else if ("button" === t.type);
                else if ("status" === t.type) return i(561872).RZ(a, t);
                else if ("location" === t.type);
                else if ("verification" === t.type) {
                    let e = i(435137).U1(a),
                        t = e ? i(435137).I7(e) : {
                            type: "none"
                        };
                    if ("none" === t.type) return d.formatMessage(i(435137).nl.none);
                    let o = r(t.actorPointer),
                        n = (0, i(197018).D3)({
                            table: t.actorPointer.table,
                            value: o
                        }),
                        u = (0, i(197018).lR)(d, n);
                    return "archived" === t.type ? d.formatMessage(i(435137).nl.archivedIndefinitely, {
                        actor: u,
                        dateTime: i(931990).OH({
                            dateTime: t.startDateTime,
                            intl: d,
                            shortenDateAndRange: !0
                        })
                    }) : "verified" === t.type && t.isIndefinite ? d.formatMessage(i(435137).nl.verifiedIndefinitely, {
                        actor: u
                    }) : d.formatMessage(i(435137).nl.verifiedUntil, {
                        actor: u,
                        datetime: i(931990).T2({
                            dateTime: t.dateTimeRange.end,
                            intl: d,
                            userTimeZone: s,
                            displayInUserTimezone: !1,
                            alwaysIncludeTimezone: !0
                        })
                    })
                } else(0, i(722371).HB)(t)
            }

            function R(e) {
                let {
                    textValue: t,
                    propertySchema: o,
                    blockCreatorPointer: a,
                    getRecordValue: r,
                    intl: s
                } = e, n = (0, i(465256).e)({
                    textValue: t,
                    propertySchema: o,
                    blockCreatorPointer: a,
                    convertGroupPointersToBeComposite: !0
                }).map(e => (function(e) {
                    let {
                        actorOrGroupPointer: t,
                        getRecordValue: o,
                        intl: a
                    } = e, r = i(993189).b4_.fromGetRecordValueFn(o)(t);
                    if (!r) return a.formatMessage(i(993189).Fvx.messages.anonymousPlaceholder);
                    if (r.table === i(659341).n) return (0, i(95384).n)({
                        intl: a,
                        permissionGroupModel: r
                    });
                    let s = (0, i(197018).D3)(r);
                    return (0, i(197018).lR)(a, s)
                })({
                    actorOrGroupPointer: e,
                    getRecordValue: r,
                    intl: s
                }));
                return s.formatList(n, {
                    type: "conjunction",
                    style: "narrow"
                })
            }

            function w(e) {
                return "page_icon" === e.formatProperty ? e.intl.formatMessage(o.blockFormatEditPageIconName) : void 0
            }

            function j(e) {
                let {
                    formatProperty: t,
                    block: a,
                    getRecordValue: r,
                    intl: s
                } = e;
                if ("page_icon" === t) {
                    let e = i(993189).Bj6.fromBlock(a).getRenderIcon({
                        getRecordModel: i(993189).b4_.fromGetRecordValueFn(r)
                    });
                    return e ? (0, i(312028).A)(e.icon) ? e.icon : s.formatMessage(o.pageIconImagePlaceholder) : s.formatMessage(o.emptyBlockEditedProperty)
                }
            }

            function S(e) {
                let t = i(993189).b4_.fromGetRecordValueFn(e.getRecordValue || e.getRecordModel),
                    {
                        spaceId: o,
                        permissionGroupId: a
                    } = e;
                return t({
                    table: i(659341).n,
                    id: (0, i(659341).gK)({
                        spaceId: o,
                        spacePermissionGroupId: a
                    }),
                    spaceId: o
                })
            }

            function A(e, t) {
                return t ? [(0, i(312028).A)(t.icon) ? t.icon : void 0, t.name.length > 0 ? t.name : e.formatMessage(o.untitledPermissionGroupName)].filter(Boolean).join(" ") : e.formatMessage(o.defaultPermissionGroupName)
            }

            function _(e) {
                let t = i(993189).b4_.fromGetRecordValueFn(e.getRecordValue || e.getRecordModel),
                    {
                        spaceId: o,
                        teamId: a
                    } = e;
                return t({
                    table: i(708628).yK,
                    id: a,
                    spaceId: o
                })
            }

            function C(e) {
                switch (e) {
                    case "block-property-edited":
                    case "reacted":
                    case "commented":
                    case "permission-group-mentioned":
                    case "team-mentioned":
                    case "reminder":
                    case "grouped-block-property-updated":
                    case "grouped-commented":
                    case "grouped-user-mentioned":
                    case "user-invited":
                    case "in-app-notification-automation-action-triggered":
                    case "user-mentioned":
                    case "app-builder-notification":
                        return !0;
                    default:
                        return !1
                }
            }
        },
        561007: (e, t, i) => {
            i.d(t, {
                U: () => o
            });
            let o = (0, i(109939).YK)({
                forOneAuthorCurrentUser: {
                    id: "authorPhrase.forOneAuthorCurrentUser.label",
                    defaultMessage: "You"
                },
                forTwoAuthorsCurrentUser: {
                    id: "authorPhrase.forTwoAuthorsCurrentUser.label",
                    defaultMessage: "<b>{firstAuthor}</b> and you"
                },
                forThreeAuthorsCurrentUser: {
                    id: "authorPhrase.forThreeAuthorsCurrentUser.label",
                    defaultMessage: "<b>{firstAuthor}</b>, <b>{secondAuthor}</b>, and you"
                },
                forMoreThanThreeAuthorsCurrentUser: {
                    id: "authorPhrase.forMoreThanThreeAuthorsCurrentUser.label",
                    defaultMessage: "{numberOfOtherAuthors, plural, one {<b>{firstAuthor}</b>, you, and {numberOfOtherAuthors} other} other {<b>{firstAuthor}</b>, you, and {numberOfOtherAuthors} others}}"
                },
                forOneAuthor: {
                    id: "authorPhrase.forOneAuthor.label",
                    defaultMessage: "<b>{author}</b>"
                },
                forTwoAuthorsCondensed: {
                    id: "authorPhrase.forTwoAuthorsCondensed.label",
                    defaultMessage: "<b>{firstAuthor}</b>, <b>{secondAuthor}</b>"
                },
                forTwoAuthorsPushNotification: {
                    id: "authorPhrase.forTwoAuthorsPushNotification.label",
                    defaultMessage: "{firstAuthor} and {secondAuthor}"
                },
                forTwoAuthors: {
                    id: "authorPhrase.forTwoAuthors.label",
                    defaultMessage: "<b>{firstAuthor}</b> and <b>{secondAuthor}</b>"
                },
                forMoreThanTwoAuthorsCondensed: {
                    id: "authorPhrase.forMoreThanTwoAuthorsCondensed.label",
                    defaultMessage: "{numberOfOtherAuthors, plural, one {<b>{firstAuthor}</b>, {numberOfOtherAuthors} other} other {<b>{firstAuthor}</b>, {numberOfOtherAuthors} others}}"
                },
                forMoreThanTwoAuthorsPushNotification: {
                    id: "authorPhrase.forMoreThanTwoAuthorsPushNotification.label",
                    defaultMessage: "{numberOfOtherAuthors, plural, one {{firstAuthor} and {numberOfOtherAuthors} other} other {{firstAuthor}, {numberOfOtherAuthors} others}}"
                },
                forMoreThanTwoAuthors: {
                    id: "authorPhrase.forMoreThanTwoAuthors.label",
                    defaultMessage: "{numberOfOtherAuthors, plural, =0 {<b>{firstAuthor}</b>, <b>{secondAuthor}</b>} one {<b>{firstAuthor}</b>, <b>{secondAuthor}</b>, and {numberOfOtherAuthors} other} other {<b>{firstAuthor}</b>, <b>{secondAuthor}</b>, and {numberOfOtherAuthors} others}}"
                },
                someone: {
                    id: "authorPhrase.someone.label",
                    defaultMessage: "Someone"
                }
            })
        }
    }
]);