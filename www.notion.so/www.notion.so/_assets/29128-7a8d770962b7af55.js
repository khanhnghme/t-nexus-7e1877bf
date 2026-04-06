"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [29128], {
        101787: (r, e, a) => {
            a.d(e, {
                AMh: () => m,
                Bk6: () => L,
                CSE: () => w,
                Cdc: () => v,
                DfQ: () => N,
                Drb: () => _,
                FgR: () => X,
                IX4: () => B,
                KhW: () => U,
                KxW: () => q,
                LI3: () => S,
                OwV: () => j,
                QkH: () => E,
                USz: () => l,
                UlD: () => A,
                Umn: () => I,
                VHT: () => y,
                WXf: () => n,
                X5e: () => P,
                Xgk: () => G,
                ZgF: () => T,
                _D_: () => Q,
                d5r: () => C,
                iDI: () => i,
                iQE: () => b,
                ico: () => F,
                lV7: () => R,
                m_B: () => M,
                mdR: () => H,
                mh_: () => f,
                mvP: () => u,
                op4: () => s,
                pA8: () => c,
                qQk: () => D,
                rTV: () => $,
                s76: () => O,
                ubK: () => x,
                vP6: () => g,
                yI4: () => p,
                yPR: () => V
            }), a(16280), a(944114);
            let t = ["DatastoreInfraError", "PostgresConnectionError", "PostgresConnectionTerminatedError", "PostgresDeadlockError", "PostgresServerLoginFailingError", "PostgresTimeout", "PgPoolWaitConnectionTimeout", "PgbouncerMaxClientConnExceeded", "CrdtAssertionError", "CrdtIdAlreadyExistsError", "CrdtOperationAlreadyAppliedError", "CrdtOperationLikelyAlreadyAppliedError", "CrdtOldOperationError", "CrdtTimeoutError", "EnqueueSyncTaskTimeout", "EnqueueSyncTaskFailure", "OfflineSyncPageNotFoundDuringVersionCheckError", "TranscribeAudioError", "DictationOpenAIError", "DictationForbiddenError", "DictationUpgradeRequiredError", "DictationRateLimitError", "DictationAudioRecorderFailedError", "DictationMissingUserOrSpaceError", "DictationSystemAudioFailedError", "DictationStartTimeoutError", "DictationSystemAudioHardwareError", "StreamingSocketUnavailableError", "StreamingSocketTimeoutError", "StreamingSocketReconnectingWarning", "LanguageConfigurationTimeoutError", "TraceResponseTimeoutError", "HealthCheckTimeoutError", ...a(71623).Y, "AbortedError", "AgentError", "AWSRequestHandlerError", "AiSourcePickerQueryError", "AiSourcePickerResponseError", "AirtableError", "AppleError", "AsanaError", "AudioProcessorError", "BadRequestError", "BillingSequencingLockError", "BlockPropertiesMaxSize", "BlockLimitExceededError", "CantAccessWorkspaceFromNetworkError", "CantAccessWorkspaceFromEKMError", "CellMappingNotFoundError", "ChartPaywallError", "ChiliPiperError", "ChromeError", "ClientClosedRequestError", "CohereError", "CollectionSchemaOptionSizeTooLarge", "CollectionDeletedSchemaMaxSize", "CollectionSchemaTooLargeError", "CollectionSchemaMaxSize", "CollectionRenameGroupDenylist", "ConfluenceImportError", "ConnectionError", "ContentfulError", "ContentfulNotFoundError", "ContentfulUnauthorizedError", "DatabaseAgentError", "DatabaseLookupError", "DebeziumError", "DecryptionError", "DiffbotError", "DiffbotExtractError", "DirectRequestHandlerError", "DiscordError", "DomainNameUnchangedError", "DuplicationSubtaskError", "DuplicationSubtaskFailures", "Dynamo5XXError", "DynamoConditionalCheckError", "DynamoItemSizeExceededError", "ElasticsearchBulkIndexError", "ElasticsearchError", "ElasticsearchIndexingError", "ElasticsearchLtrError", "EvernoteError", "ExportRateLimitError", "ExportRendererError", "FailedConsolidationError", "FeatureDisabledError", "FileImportError", "FileUploadError", "ForbiddenError", "GetStatusError", "GiphyError", "GlobalOauthError", "GoogleAdsError", "GoogleError", "GroupsV1NotSupportedError", "HttpRequestError", "IframelyError", "ImportError", "IndexActivityEditsError", "InternalApiError", "InternalFetchError", "InternalServerError", "InvalidNameErrorData", "InvalidOrExpiredTokenError", "JiraError", "JiraPermissionError", "JiraApiError", "JiraCloudSubscriptionExpiredError", "JiraSyncBotNotFoundError", "JsonParseError", "LogicalError", "MarketoError", "MarketoRateLimitError", "MarketoServerError", "MemcachedError", "MessageStoreError", "MessageStoreRedisError", "MessageProcessorHungError", "MetronomeError", "MfaBackupCodeExpiredError", "MicrosoftError", "MissingSecretError", "MissingStaticFileError", "MissingTokenError", "MondayError", "FailedToAcquireLockError", "MultiCellLogicalError", "NetworkError", "NoAvailableSearchClustersError", "NoSearchResponseError", "NotFoundError", "NotionCalendarError", "NotionMailError", "OauthError", "OpenAIError", "OperationConflictError", "OrganizationNotFoundError", "PandocError", "PaymentRequiredError", "PdfTodocxError", "PostProcessingTaskError", "PostgresCardinalityViolation", "PostgresCollisionError", "PostgresConnectionError", "PostgresConnectionTerminatedError", "PostgresDeadlockError", "PostgresInvalidTextRepresentation", "PostgresInvalidUnicodeCharacter", "PostgresNullConstraintError", "PostgresProgramLimitExceeded", "PostgresServerLoginFailingError", "PostgresTimeout", "PostgresColumnSizeExceededError", "PostgresUniqueViolation", "ProjectManagementImporterError", "PublicAPIError", "QueueProxyError", "QuipError", "RedisError", "RequestHandlerError", "RequestProxyUpstreamError", "RequestTimeoutCancellationError", "ResourceExpiredError", "RevenueCatError", "S3UploadError", "S3BatchOperationError", "SalesforceError", "InvalidExternalIntegrationTokenError", "SamlConfigurationError", "ServiceUnavailableError", "SlackError", "SpaceFrozenError", "SpaceNotFoundError", "StatsigBootstrapError", "StripeError", "SyncAlreadyInProgressError", "SyncedCollectionUpdateError", "SyntaxError", "TaskQueueDataTooLongError", "TokenRateLimitError", "TokenStoreError", "TooManyRequestsError", "TransactionTimeout", "TranslationError", "TrelloError", "TwilioError", "UnauthorizedError", "UnfurlResponseError", "UniversalRetrievalError", "UnknownCollectionServerError", "UnknownError", "UnprocessableEntity", "UnsavedTransactionsError", "UnsplashError", "UnsupportedMediaTypeError", "UntriedTransactionError", "UserRateLimitResponse", "UserValidationError", "UserValidationResponseError", "ValidationError", "WebhookError", "WorkspaceConsolidationRetrySmallerBatchError", "WorkspaceCreationError", "ZendeskError", "ConfigValidationError", "RequestRecordLoadLimitError", "ZipImportError"],
                o = Error;
            class n extends o {
                level;
                statusCode;
                headers;
                name;
                data;
                error;
                body;
                retryable;
                constructor(r) {
                    var e;
                    super(r.message), this.level = r.level, this.statusCode = r.status, this.name = r.name, this.data = r.data, this.error = r.error, this.body = {
                        errorId: (0, a(4962).lZ)(),
                        name: r.name,
                        clientData: r.clientData,
                        debugMessage: r.message
                    }, void 0 !== r.stack && (this.stack = r.stack), this.retryable = r.retryable || (null == (e = r.error) ? void 0 : e.retryable) || !1
                }
            }

            function l(r) {
                return "object" == typeof r && null !== r && t.includes(r.name)
            }

            function i(r, ...e) {
                if (!l(r)) return !1;
                for (let a of e)
                    if (r.name === a.type || r instanceof a) return !0;
                return !1
            }
            class d extends n {
                body;
                constructor(r) {
                    super(r);
                    const e = this.body;
                    this.body = { ...e,
                        clientData: r.clientData
                    }
                }
            }

            function g(r) {
                return void 0 !== r.clientData
            }

            function s(r) {
                return j(r) && g(r)
            }
            class u extends Error {
                data;
                clientData;
                constructor(r, e, a) {
                    super(r), this.name = "QueueApiError", this.data = e, this.clientData = a
                }
            }

            function c(r) {
                return !!(r && "QueueApiError" === r.name && void 0 !== r.clientData)
            }
            class b extends n {
                static type = "UnprocessableEntity";
                constructor(r, e) {
                    super({
                        level: "info",
                        status: 422,
                        name: "UnprocessableEntity",
                        message: r,
                        data: e
                    })
                }
            }
            class p extends n {
                static type = "ValidationError";
                constructor(r, e = {}) {
                    super({
                        level: "warning",
                        status: 400,
                        name: "ValidationError",
                        message: r,
                        data: e.data,
                        error: e.error,
                        clientData: e.clientData
                    })
                }
            }
            let k = ["CrdtOperationAlreadyAppliedError", "CrdtOperationLikelyAlreadyAppliedError", "CrdtOldOperationError", "CrdtTimeoutError"];
            class h extends n {
                constructor(r, e, a = {}) {
                    super({
                        level: "error",
                        status: a.status ? ? 500,
                        name: r,
                        message: e,
                        data: a.data,
                        error: a.error,
                        clientData: a.clientData,
                        retryable: a.retryable
                    })
                }
                isIntentional() {
                    return k.includes(this.name)
                }
            }

            function x(r) {
                return r instanceof h
            }
            class E extends h {
                constructor(r, e = {}) {
                    super("CrdtAssertionError", r, e)
                }
            }
            class y extends h {
                constructor(r, e = {}) {
                    super("CrdtIdAlreadyExistsError", r, e)
                }
            }
            class m extends h {
                constructor(r, e = {}) {
                    super("CrdtOperationAlreadyAppliedError", r, e)
                }
            }
            class f extends h {
                constructor(r, e = {}) {
                    super("CrdtOperationLikelyAlreadyAppliedError", r, e)
                }
            }
            class B extends h {
                constructor(r, e = {}) {
                    super("CrdtOldOperationError", r, { ...e,
                        status: 400,
                        retryable: !1
                    })
                }
            }
            class $ extends d {
                static type = "UserValidationError";
                constructor(r, e, a = {}) {
                    super({
                        level: "info",
                        status: 400,
                        name: "UserValidationError",
                        message: r,
                        clientData: e,
                        ...a
                    })
                }
            }

            function w(r) {
                return !!(r && "UserValidationResponseError" === r.name && void 0 !== r.clientData)
            }
            class v extends d {
                constructor(r) {
                    super({
                        level: "info",
                        status: 403,
                        name: "CantAccessWorkspaceFromNetworkError",
                        message: "Unfortunately, we can't access this workspace from your network. Please try again from a different network.",
                        clientData: r
                    })
                }
            }

            function C(r) {
                return void 0 !== r && ("cant_access_workspace_from_network" === r.type || "cant_access_workspace_from_client" === r.type)
            }
            class T extends d {
                constructor(r) {
                    super({
                        level: "info",
                        status: 403,
                        name: "CantAccessWorkspaceFromEKMError",
                        message: "This workspace cannot be accessed.",
                        clientData: r
                    })
                }
            }
            class A extends d {
                static type = "UserRateLimitResponse";
                constructor(r, e) {
                    super({
                        level: "warning",
                        status: 429,
                        name: "UserRateLimitResponse",
                        message: "Please try again later.",
                        clientData: r,
                        data: e
                    })
                }
            }
            class D extends n {
                static type = "ForbiddenError";
                constructor(r, e) {
                    super({
                        level: "info",
                        status: 403,
                        name: "ForbiddenError",
                        message: r,
                        data: e
                    })
                }
            }
            class S extends d {
                static type = "ForbiddenError";
                constructor(r, e) {
                    super({
                        level: "info",
                        status: 403,
                        name: "ForbiddenError",
                        message: r,
                        clientData: e
                    })
                }
            }
            class I extends n {
                static type = "LogicalError";
                constructor(r, e = {}) {
                    super({
                        level: "error",
                        status: 400,
                        name: "LogicalError",
                        message: r,
                        data: e.data,
                        error: e.error
                    })
                }
            }
            class _ extends n {
                static type = "NetworkError";
                constructor(r, e = {}) {
                    super({
                        level: "error",
                        status: 502,
                        name: "NetworkError",
                        message: r,
                        data: e.data,
                        error: e.error
                    })
                }
            }
            class P extends n {
                constructor(r, e = {}) {
                    super({
                        level: "error",
                        status: 400,
                        name: "MondayError",
                        message: r,
                        data: e.data,
                        error: e.error,
                        clientData: e.clientData
                    })
                }
            }
            class R extends n {
                constructor(r, e = {}) {
                    super({
                        level: "error",
                        status: 400,
                        name: "TrelloError",
                        message: r,
                        data: e.data,
                        error: e.error
                    })
                }
            }
            class F extends d {
                constructor(r, e) {
                    super({
                        level: "info",
                        status: 400,
                        name: "ConfluenceImportError",
                        message: r,
                        ...e
                    })
                }
            }
            class O extends d {
                constructor(r, e) {
                    super({
                        level: "info",
                        status: 400,
                        name: "FileImportError",
                        message: r,
                        ...e
                    })
                }
            }
            class U extends n {
                constructor(r, e = {}) {
                    super({
                        level: "warning",
                        status: 400,
                        name: "OperationConflictError",
                        message: r,
                        data: e.data,
                        error: e.error,
                        clientData: e.clientData
                    })
                }
            }
            class N extends n {
                constructor(r, e = {}) {
                    super({
                        level: "error",
                        status: 400,
                        name: "EvernoteError",
                        message: r,
                        data: e.data,
                        error: e.error
                    })
                }
            }
            class G extends n {
                constructor(r, e, a) {
                    super({
                        level: "error",
                        status: 400,
                        name: "WorkspaceCreationError",
                        message: r,
                        data: e,
                        error: a
                    })
                }
            }
            class L extends n {
                static type = "UnknownError";
                constructor(r, e = {}) {
                    super({
                        level: "error",
                        status: 500,
                        name: "UnknownError",
                        message: "Unrecognized error.",
                        error: r,
                        retryable: e.retryable
                    })
                }
            }
            class M extends n {
                static type = "NotFoundError";
                constructor(r) {
                    super({
                        level: "error",
                        status: 404,
                        name: "NotFoundError",
                        message: (null == r ? void 0 : r.message) || "Resource not found.",
                        error: null == r ? void 0 : r.error,
                        data: null == r ? void 0 : r.data
                    })
                }
            }

            function H(r) {
                return !!((null == r ? void 0 : r.type) === "unsaved_transactions" && r.errors.length > 0)
            }

            function j(r) {
                return "object" == typeof r && null !== r && r.errorId && r.name
            }
            class q extends n {
                static type = "TranslationError";
                constructor(r, e = {}) {
                    super({
                        level: "error",
                        status: 500,
                        name: "TranslationError",
                        message: r,
                        data: e.data,
                        error: e.error
                    })
                }
            }
            class X extends n {
                static type = "TaskQueueDataTooLongError";
                constructor(r = {}) {
                    super({
                        level: "error",
                        status: 400,
                        name: "TaskQueueDataTooLongError",
                        message: "Task data too long",
                        data: r.data,
                        error: r.error,
                        clientData: r.clientData
                    })
                }
            }
            let Q = 402;
            class V extends n {
                static type = "PaymentRequiredError";
                constructor(r) {
                    super({
                        level: "error",
                        name: "PaymentRequiredError",
                        status: Q,
                        message: r ? ? "Payment is required."
                    })
                }
            }
        },
        104509: (r, e, a) => {
            a.d(e, {
                Ev: () => t().Ev,
                Hj: () => t().Hj,
                cr: () => l,
                lD: () => t().lD,
                lE: () => n,
                wt: () => i,
                xh: () => d
            }), a(898992), a(354520), a(296540);
            var t = () => a(244996),
                o = a(474848);

            function n(r) {
                return "function" == typeof r && "__iconDefinition" in r
            }

            function l(r) {
                return !!(r && (0, a(722371).O)(t().Ev, r))
            }

            function i(r, e, n) {
                let {
                    viewBox: l,
                    fittedViewBox: i,
                    svg: d
                } = e, g = l ? ? `0 0 ${t().Ev.default} ${t().Ev.default}`;
                return Object.assign((t, n, l, s, u) => {
                    let c = [r, e.directional && a(297005).S, n].filter(Boolean).join(" ");
                    return (0, o.jsx)(a(670375).A, {
                        viewBox: g,
                        className: c,
                        style: t,
                        label: l,
                        fittedViewBox: i,
                        fitToViewBox: s,
                        skipBaseStyles: u,
                        children: d
                    })
                }, {
                    __iconDefinition: { ...e,
                        viewBox: g,
                        fittedViewBox: i,
                        variant: n
                    }
                })
            }

            function d(r, e, a) {
                return {
                    name: r,
                    variants: e,
                    searchTerms: a
                }
            }
        },
        244996: (r, e, a) => {
            a.d(e, {
                Ev: () => t,
                Hj: () => n,
                lD: () => o
            });
            let t = {
                    xxs: 12,
                    xs: 14,
                    sm: 16,
                    default: 20,
                    lg: 22,
                    xl: 32
                },
                o = {
                    xxs: 14,
                    xs: 16,
                    sm: 18,
                    default: 22,
                    lg: 26,
                    xl: 36
                },
                n = {
                    default: t.default,
                    small: t.sm,
                    fill: t.default,
                    fillSmall: t.sm,
                    tintable: t.default
                }
        },
        373615: (r, e, a) => {
            a.d(e, {
                $: () => t
            });

            function t(r, {
                positionalEmojiData: e
            }) {
                let o = e[r];
                if (!o) return;
                let [n, l, i, d] = o, {
                    keywords: g,
                    uniqueKeywords: s
                } = a(735303).fB[r] || {};
                return {
                    codepoints: n,
                    sheetX: l,
                    sheetY: i,
                    variations: d,
                    keywords: g,
                    uniqueKeywords: s
                }
            }
        },
        620107: (r, e, a) => {
            a.d(e, {
                O: () => n,
                x: () => o
            }), a(898992), a(908872);
            let t = [1, .7, .5, .3, .15],
                o = a(997500).dK.reduce((r, e) => (r[e] = t.map(r => 1 === r ? a(996583).D[e].light.background.accentSecondary : (0, a(650342).X4)(a(996583).D[e].light.background.accentSecondary, r)), r), {}),
                n = {
                    colorful: ["blue", "yellow", "green", "purple", "orange", "pink", "teal", "red"].map(r => o[r][0]),
                    ...o,
                    ...{
                        white: ["rgba(227, 226, 224, 1)", "rgba(227, 226, 224, .7)", "rgba(227, 226, 224, .5)", "rgba(227, 226, 224, .3)", "rgba(227, 226, 224, .15)"],
                        black: ["rgba(98, 97, 93, 1)", "rgba(98, 97, 93, .7)", "rgba(98, 97, 93, .5)", "rgba(98, 97, 93, .3)", "rgba(98, 97, 93, .15)"],
                        gray: ["rgba(199, 198, 196, 1)"],
                        default: ["rgba(227, 226, 224, 1)"],
                        translucentGray: ["rgba(241, 241, 239, 1)", "rgba(255, 255, 255, .1)"]
                    }
                }
        },
        632079: (r, e, a) => {
            a.d(e, {
                AQ: () => g,
                Ar: () => B,
                C8: () => v,
                Cg: () => P,
                D$: () => Q,
                FK: () => E,
                Fi: () => u,
                JG: () => m,
                LD: () => S,
                Ld: () => _,
                N: () => d,
                Nq: () => j,
                O4: () => i,
                Q: () => I,
                Tj: () => n,
                Wr: () => s,
                aO: () => y,
                cm: () => V,
                eA: () => q,
                eb: () => f,
                ed: () => X,
                k5: () => H,
                oZ: () => o,
                rF: () => p,
                tS: () => c,
                vU: () => T,
                x0: () => $,
                zl: () => C
            }), a(581454);
            let t = {
                    transparent: "transparent",
                    black: "black",
                    white: "white"
                },
                o = { ...t,
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
                n = a(831177).I,
                l = new Map;

            function i(r) {
                let e = `${r.theme}`,
                    n = l.get(e);
                if (n) return n; {
                    let n = function(r) {
                        let e = {
                                palette: a(713101).$,
                                ...a(996583).D,
                                ...a(996583).k,
                                primaryBlack: {
                                    light: o.black,
                                    dark: o.white
                                },
                                pageTitlePlaceholderTextColor: {
                                    light: "rgba(55, 53, 47, 0.15)",
                                    dark: a(713101).$.dark.gray[400]
                                },
                                tableFrozenFilterDividerColor: {
                                    light: "rgb(213, 212, 210)",
                                    dark: "rgb(70, 70, 70)"
                                },
                                tableFrozenSelectedDividerColor: {
                                    light: "rgb(202,212,225)",
                                    dark: "rgb(47,58,72)"
                                },
                                linkDecorationColor: {
                                    light: "rgba(55, 53, 47, 0.25)",
                                    dark: a(713101).$.dark.gray[400]
                                },
                                opacityLinkDecorationColor: {
                                    light: "rgba(55, 53, 47, 0.4)",
                                    dark: a(713101).$.dark.translucentGray[500]
                                },
                                regularEmojiColor: {
                                    light: o.black,
                                    dark: a(713101).$.dark.gray[900]
                                },
                                sidebarSecondaryColor: {
                                    light: "#91918E",
                                    dark: a(713101).$.dark.gray[700]
                                },
                                sidebarItemSelectedBackground: {
                                    light: "rgba(0, 0, 0, 0.03)",
                                    dark: a(713101).$.dark.translucentGray[200]
                                },
                                sidebarSecondaryBackground: {
                                    light: "rgba(0, 0, 0, 0.025)",
                                    dark: "rgba(0, 0, 0, 0.025)"
                                },
                                contentBackgroundTransparent: {
                                    light: "rgba(255,255,255,0)",
                                    dark: "rgba(241, 241, 239, 0)"
                                },
                                cardContentBackgroundTransparent: {
                                    light: "rgba(255, 255, 255, 0)",
                                    dark: "rgba(227, 226, 224, 0)"
                                },
                                overlaySmokescreen: {
                                    light: "rgba(15, 15, 15, 0.6)",
                                    dark: "rgba(15, 15, 15, 0.8)"
                                },
                                calendarItemBackground: {
                                    light: o.white,
                                    dark: a(713101).$.dark.gray[300]
                                },
                                calendarItemHoveredBackground: {
                                    light: a(713101).$.light.gray[75],
                                    dark: a(713101).$.dark.gray[400]
                                },
                                popoverBackground: {
                                    light: o.white,
                                    dark: a(713101).$.dark.gray[200]
                                },
                                popoverWaxPaperBackground: {
                                    light: "rgba(255,255,255,0.9)",
                                    dark: "rgba(32, 32, 32, 0.9)"
                                },
                                boardItemDefaultBackground: {
                                    light: o.white,
                                    dark: a(713101).$.dark.translucentGray[200]
                                },
                                collectionGalleryPreviewCardBackground: {
                                    light: o.white,
                                    dark: a(713101).$.dark.translucentGray[200]
                                },
                                collectionGalleryPreviewCardCover: {
                                    light: "rgba(55, 53, 47, 0.025)",
                                    dark: a(713101).$.dark.translucentGray[100]
                                },
                                modalUnderlayBackground: {
                                    light: "rgba(15, 15, 15, 0.6)",
                                    dark: "rgba(15, 15, 15, 0.8)"
                                },
                                beigeBannerBackground: {
                                    light: "#FBF8F3",
                                    dark: "rgb(55, 60, 63)"
                                },
                                darkBannerBackground: {
                                    light: "#EAE9E7",
                                    dark: "rgb(55, 60, 63)"
                                },
                                keyboardDoneBarBackground: {
                                    light: "#F0F1F2",
                                    dark: "#27292B"
                                },
                                keyboardActionBarBackground: {
                                    light: o.white,
                                    dark: "#272829"
                                },
                                UIUserAvatarInnerOutline: {
                                    light: "rgba(255, 255, 255, 0.3)",
                                    dark: "rgba(25, 25, 25, 0.3)"
                                },
                                UIUserAvatarIdleOutline: {
                                    light: "rgb(241, 241, 239)",
                                    dark: "rgb(85, 85, 83)"
                                },
                                suspendedUIUserAvatarBackground: {
                                    light: a(713101).$.light.gray[75],
                                    dark: a(713101).$.dark.gray[400]
                                },
                                codeBlockBackground: {
                                    light: "rgb(247, 246, 243)",
                                    dark: a(713101).$.dark.translucentGray[100]
                                },
                                codeStickyBlockBackground: {
                                    light: "rgb(247, 246, 243)",
                                    dark: "#272727"
                                },
                                tableHeaderRowColumnBackground: {
                                    light: "rgb(247, 246, 243)",
                                    dark: a(713101).$.dark.translucentGray[100]
                                },
                                embedPlaceholderBackground: {
                                    light: "rgba(242, 241, 238, 1.0)",
                                    dark: a(713101).$.dark.translucentGray[100]
                                },
                                tokenInputMenuItemBackground: {
                                    light: "rgba(242,241,238,0.6)",
                                    dark: a(713101).$.dark.translucentGray[100]
                                },
                                hoveredDiscussionBackground: {
                                    light: "rgba(55, 53, 47, 0.03)",
                                    dark: a(713101).$.dark.gray[100]
                                },
                                hoveredMarginDiscussionBackground: {
                                    light: "rgb(249, 249, 248)",
                                    dark: a(713101).$.dark.gray[100]
                                },
                                selectedMarginDiscussionBackground: {
                                    light: o.white,
                                    dark: a(713101).$.dark.gray[200]
                                },
                                buttonHoveredBackground: {
                                    light: "rgba(55, 53, 47, 0.06)",
                                    dark: a(713101).$.dark.translucentGray[200]
                                },
                                tableRowHoveredBackground: {
                                    light: "rgba(55, 53, 47, 0.025)",
                                    dark: "rgba(255, 255, 255, 0.055)"
                                },
                                outlineButtonHoveredBackground: {
                                    light: "rgba(55, 53, 47, 0.06)",
                                    dark: a(713101).$.dark.translucentGray[200]
                                },
                                outlineButtonPressedBackground: {
                                    light: "rgba(55, 53, 47, 0.16)",
                                    dark: a(713101).$.dark.gray[200]
                                },
                                buttonPressedBackground: {
                                    light: "rgba(55, 53, 47, 0.16)",
                                    dark: a(713101).$.dark.translucentGray[100]
                                },
                                buttonPressedBackgroundLight: {
                                    light: "rgba(55, 53, 47, 0.1)",
                                    dark: a(713101).$.dark.translucentGray[100]
                                },
                                cardHoveredBackground: {
                                    light: "rgba(55, 53, 47, 0.04)",
                                    dark: a(713101).$.dark.gray[300]
                                },
                                cardPressedBackground: {
                                    light: "rgba(55, 53, 47, 0.06)",
                                    dark: a(713101).$.dark.gray[200]
                                },
                                blueButtonHoveredBackground: {
                                    light: "rgba(0, 119, 212, 1.0)",
                                    dark: "rgba(0, 119, 212, 1.0)"
                                },
                                blueButtonPressedBackground: {
                                    light: "rgba(0, 107, 199, 1.0)",
                                    dark: "rgba(0, 107, 199, 1.0)"
                                },
                                white: {
                                    light: o.white,
                                    dark: o.black
                                },
                                whiteButtonBackground: {
                                    light: o.white,
                                    dark: a(713101).$.dark.gray[200]
                                },
                                assistantCornerButtonBackground: {
                                    light: o.white,
                                    dark: a(713101).$.dark.gray[800]
                                },
                                assistantCornerButtonBackgroundHovered: {
                                    light: "rgb(239, 239, 238)",
                                    dark: "rgb(239, 239, 238)"
                                },
                                assistantCornerButtonBackgroundPressed: {
                                    light: "rgb(223, 223, 222)",
                                    dark: "rgb(223, 223, 222)"
                                },
                                lightGrayButtonHoveredBackground: {
                                    light: a(713101).$.light.gray[90],
                                    dark: a(713101).$.dark.translucentGray[200]
                                },
                                lightGrayButtonPressedBackground: {
                                    light: a(713101).$.light.gray[100],
                                    dark: a(713101).$.dark.translucentGray[300]
                                },
                                buttonGroupBackground: {
                                    light: o.white,
                                    dark: a(713101).$.dark.gray[300]
                                },
                                whiteButtonHoveredBackground: {
                                    light: "rgb(239, 239, 238)",
                                    dark: a(713101).$.dark.gray[300]
                                },
                                whiteButtonPressedBackground: {
                                    light: "rgb(223, 223, 222)",
                                    dark: a(713101).$.dark.gray[200]
                                },
                                timelineBackground: {
                                    light: "rgb(253,253,253)",
                                    dark: a(713101).$.dark.gray[50]
                                },
                                peekTimelineBackground: {
                                    light: "rgb(253,253,253)",
                                    dark: a(713101).$.dark.gray[100]
                                },
                                timelineDarkerBackground: {
                                    light: "rgb(247,247,247)",
                                    dark: a(713101).$.dark.translucentGray[100]
                                },
                                topbarFavorite: {
                                    light: "#F6C050",
                                    dark: a(713101).$.dark.yellow[900]
                                },
                                home: {
                                    light: {
                                        emptyStatePreview: {
                                            joinButtonBackground: a(713101).$.light.gray[30],
                                            calendarIndicator: a(713101).$.light.gray[75]
                                        },
                                        scrollButtonBackground: {
                                            base: o.white,
                                            pressed: a(713101).$.light.gray[75]
                                        },
                                        tile: {
                                            background: "rgba(255, 255, 255, 0.9)"
                                        },
                                        cards: {
                                            coverPhoto: {
                                                base: a(713101).$.light.gray[30]
                                            },
                                            background: {
                                                base: o.white,
                                                hovered: o.white,
                                                pressed: a(713101).$.light.gray[75]
                                            },
                                            templateCardBackground: {
                                                base: o.white,
                                                hovered: o.white,
                                                pressed: "rgba(0, 0, 0, 0.025)"
                                            }
                                        }
                                    },
                                    dark: {
                                        emptyStatePreview: {
                                            joinButtonBackground: a(713101).$.dark.gray[200],
                                            calendarIndicator: a(713101).$.dark.gray[300]
                                        },
                                        scrollButtonBackground: {
                                            base: a(713101).$.dark.gray[200],
                                            pressed: a(713101).$.dark.gray[300]
                                        },
                                        tile: {
                                            background: "rgba(32, 32, 32, 0.9)"
                                        },
                                        cards: {
                                            coverPhoto: {
                                                base: "rgba(255, 255, 255, 0.03)"
                                            },
                                            background: {
                                                base: "rgba(255, 255, 255, 0.05)",
                                                hovered: "rgba(255, 255, 255, 0.05)",
                                                pressed: "rgba(255, 255, 255, 0.07)"
                                            },
                                            templateCardBackground: {
                                                base: "rgba(255, 255, 255, 0.05)",
                                                hovered: "rgba(255, 255, 255, 0.05)",
                                                pressed: "rgba(255, 255, 255, 0.07)"
                                            }
                                        }
                                    }
                                },
                                personalHomeBackgroundPhone: {
                                    light: a(713101).$.light.gray[30],
                                    dark: a(713101).$.dark.gray[50]
                                },
                                sitesPagePreviewWindowsChromeBar: {
                                    light: "#F5F5F5",
                                    dark: "#141414"
                                },
                                seoPreviewTitle: {
                                    light: "#1D13A3",
                                    dark: "#9EBDF4"
                                },
                                sitesBuilderBackground: {
                                    light: "#FCFCFC",
                                    dark: "#1F1F1F"
                                },
                                sitesInstructionStep: {
                                    light: a(713101).$.light.gray[75],
                                    dark: a(713101).$.dark.gray[400]
                                },
                                selectLightGray: {
                                    light: {
                                        700: "rgba(72, 71, 67, 0.5)",
                                        500: "rgba(120, 119, 116, 0.5)",
                                        400: "rgba(145, 145, 142, 0.5)",
                                        300: "rgba(172, 171, 169, 0.5)",
                                        200: "rgba(199, 198, 196, 0.5)",
                                        100: "rgba(227, 226, 224, 0.5)",
                                        50: "rgba(241, 241, 239, 0.5)",
                                        30: "rgba(249, 249, 245, 0.5)"
                                    },
                                    dark: {
                                        30: "rgba(21, 21, 21, 1)",
                                        50: "rgba(25, 25, 25, 1)",
                                        100: "rgba(32, 32, 32, 1)",
                                        200: "rgba(37, 37, 37, 1)",
                                        300: "rgba(47, 47, 47, 1)",
                                        400: "rgba(55, 55, 55, 1)",
                                        500: "rgba(90, 90, 90, 1)",
                                        700: "rgba(155, 155, 155, 1)"
                                    }
                                },
                                equationTemporaryPlaceholderBackground: {
                                    light: "rgba(35, 131, 226, 0.14)",
                                    dark: a(713101).$.dark.translucentGray[100]
                                },
                                findHighlightMatch: {
                                    light: {
                                        selectedBackground: "rgba(255,205,56,0.9)",
                                        unselectedBackground: "rgba(255,205,56,0.4)"
                                    },
                                    dark: {
                                        selectedBackground: "rgba(255,205,56,0.9)",
                                        unselectedBackground: "rgba(68,65,55,1)"
                                    }
                                },
                                marketplaceStarDefault: {
                                    light: "rgba(255, 177, 16, 0.3)",
                                    dark: "rgba(255, 177, 16, 0.3)"
                                },
                                marketplaceStarSelected: {
                                    light: "rgb(255, 177, 16)",
                                    dark: "rgb(255, 177, 16)"
                                },
                                pill: {
                                    light: {
                                        background: {
                                            yellow: a(713101).$.light.yellow[30],
                                            blue: a(713101).$.light.uiBlue[50],
                                            red: a(713101).$.light.red[30],
                                            white: a(713101).$.light.gray[30]
                                        },
                                        border: {
                                            yellow: a(713101).$.light.yellow[50],
                                            blue: a(713101).$.light.uiBlue[100],
                                            red: a(713101).$.light.red[50],
                                            white: a(713101).$.light.gray[75]
                                        },
                                        icon: {
                                            yellow: "rgba(255, 177, 16, 1)",
                                            blue: a(713101).$.light.uiBlue[600],
                                            red: a(713101).$.light.red[500],
                                            white: a(713101).$.light.gray[400]
                                        },
                                        outline: {
                                            yellow: a(713101).$.light.yellow[100],
                                            blue: a(713101).$.light.uiBlue[200],
                                            red: a(713101).$.light.red[100],
                                            white: a(713101).$.light.gray[75]
                                        },
                                        hover: {
                                            background: {
                                                yellow: a(713101).$.light.yellow[50],
                                                blue: a(713101).$.light.uiBlue[200],
                                                red: a(713101).$.light.red[50],
                                                white: "rgba(0, 0, 0, 0.1)"
                                            },
                                            border: {
                                                yellow: a(713101).$.light.yellow[100],
                                                blue: a(713101).$.light.uiBlue[100],
                                                red: a(713101).$.light.red[100],
                                                white: a(713101).$.light.gray[100]
                                            },
                                            text: {
                                                yellow: a(713101).$.light.yellow[800],
                                                blue: a(713101).$.light.uiBlue[600],
                                                red: a(713101).$.light.red[500],
                                                white: a(713101).$.light.gray[500]
                                            }
                                        },
                                        pressed: {
                                            background: {
                                                yellow: a(713101).$.light.yellow[100],
                                                blue: a(713101).$.light.uiBlue[300],
                                                red: a(713101).$.light.red[100],
                                                white: "rgba(0, 0, 0, 0.2)"
                                            },
                                            border: {
                                                yellow: a(713101).$.light.yellow[100],
                                                blue: a(713101).$.light.uiBlue[100],
                                                red: a(713101).$.light.red[100],
                                                white: a(713101).$.light.gray[200]
                                            }
                                        },
                                        selected: {
                                            background: {
                                                yellow: a(713101).$.light.yellow[50],
                                                blue: a(713101).$.light.uiBlue[100],
                                                red: a(713101).$.light.red[50],
                                                white: a(713101).$.light.gray[75]
                                            },
                                            border: {
                                                yellow: "rgba(255, 177, 16, 0.5)",
                                                blue: a(713101).$.light.uiBlue[400],
                                                red: a(713101).$.light.red[300],
                                                white: a(713101).$.light.gray[400]
                                            },
                                            hover: {
                                                background: {
                                                    yellow: a(713101).$.light.yellow[100],
                                                    blue: a(713101).$.light.uiBlue[200],
                                                    red: a(713101).$.light.red[100],
                                                    white: a(713101).$.light.gray[100]
                                                },
                                                border: {
                                                    yellow: "rgba(255, 177, 16, 0.5)",
                                                    blue: a(713101).$.light.uiBlue[400],
                                                    red: a(713101).$.light.red[300],
                                                    white: a(713101).$.light.gray[400]
                                                }
                                            },
                                            pressed: {
                                                background: {
                                                    yellow: "rgba(252, 226, 171, 1)",
                                                    blue: a(713101).$.light.uiBlue[300],
                                                    red: a(713101).$.light.red[200],
                                                    white: a(713101).$.light.gray[200]
                                                },
                                                border: {
                                                    yellow: "rgba(255, 177, 16, 0.5)",
                                                    blue: a(713101).$.light.uiBlue[400],
                                                    red: a(713101).$.light.red[300],
                                                    white: a(713101).$.light.gray[400]
                                                }
                                            }
                                        }
                                    },
                                    dark: {
                                        background: {
                                            yellow: a(713101).$.dark.yellow[50],
                                            blue: a(713101).$.dark.blue[50],
                                            red: a(713101).$.dark.red[50],
                                            white: a(713101).$.dark.gray[100]
                                        },
                                        border: {
                                            yellow: a(713101).$.dark.yellow[75],
                                            blue: a(713101).$.dark.uiBlue[100],
                                            red: a(713101).$.dark.red[100],
                                            white: a(713101).$.dark.translucentGray[200]
                                        },
                                        icon: {
                                            yellow: "rgba(255, 177, 16, 1)",
                                            blue: a(713101).$.dark.uiBlue[600],
                                            red: a(713101).$.dark.red[800],
                                            white: a(713101).$.dark.gray[600]
                                        },
                                        outline: {
                                            yellow: a(713101).$.dark.yellow[400],
                                            blue: a(713101).$.dark.uiBlue[400],
                                            red: a(713101).$.dark.red[400],
                                            white: a(713101).$.dark.gray[75]
                                        },
                                        hover: {
                                            background: {
                                                yellow: a(713101).$.dark.yellow[100],
                                                blue: a(713101).$.dark.uiBlue[200],
                                                red: a(713101).$.dark.red[100],
                                                white: "rgba(0, 0, 0, 0.1)"
                                            },
                                            border: {
                                                yellow: a(713101).$.dark.yellow[100],
                                                blue: a(713101).$.dark.uiBlue[100],
                                                red: a(713101).$.dark.red[200],
                                                white: a(713101).$.dark.translucentGray[300]
                                            },
                                            text: {
                                                yellow: a(713101).$.dark.translucentGray[850],
                                                blue: a(713101).$.dark.uiBlue[600],
                                                red: a(713101).$.dark.red[800],
                                                white: a(713101).$.dark.gray[600]
                                            }
                                        },
                                        pressed: {
                                            background: {
                                                yellow: a(713101).$.dark.yellow[200],
                                                blue: a(713101).$.dark.uiBlue[300],
                                                red: a(713101).$.dark.red[200],
                                                white: "rgba(0, 0, 0, 0.2)"
                                            },
                                            border: {
                                                yellow: a(713101).$.dark.yellow[100],
                                                blue: a(713101).$.dark.uiBlue[100],
                                                red: a(713101).$.dark.red[300],
                                                white: a(713101).$.dark.translucentGray[300]
                                            }
                                        },
                                        selected: {
                                            background: {
                                                yellow: a(713101).$.dark.yellow[75],
                                                blue: a(713101).$.dark.blue[100],
                                                red: a(713101).$.dark.red[100],
                                                white: a(713101).$.dark.gray[400]
                                            },
                                            border: {
                                                yellow: "rgba(255, 177, 16, 0.5)",
                                                blue: a(713101).$.dark.uiBlue[600],
                                                red: a(713101).$.dark.red[500],
                                                white: "rgba(255, 255, 255, 0.18)"
                                            },
                                            hover: {
                                                background: {
                                                    yellow: a(713101).$.dark.yellow[100],
                                                    blue: a(713101).$.dark.uiBlue[200],
                                                    red: a(713101).$.dark.red[200],
                                                    white: "rgba(0, 0, 0, 0.1)"
                                                },
                                                border: {
                                                    yellow: "rgba(255, 177, 16, 0.5)",
                                                    blue: a(713101).$.dark.uiBlue[600],
                                                    red: a(713101).$.dark.red[500],
                                                    white: "rgba(255, 255, 255, 0.18)"
                                                }
                                            },
                                            pressed: {
                                                background: {
                                                    yellow: a(713101).$.dark.yellow[300],
                                                    blue: a(713101).$.dark.uiBlue[400],
                                                    red: a(713101).$.dark.red[300],
                                                    white: "rgba(0, 0, 0, 0.2)"
                                                },
                                                border: {
                                                    yellow: "rgba(255, 177, 16, 0.5)",
                                                    blue: a(713101).$.dark.uiBlue[600],
                                                    red: a(713101).$.dark.red[500],
                                                    white: "rgba(255, 255, 255, 0.18)"
                                                }
                                            }
                                        }
                                    }
                                },
                                marketplaceTopic: {
                                    light: {
                                        text: {
                                            hover: {
                                                red: "rgba(246, 73, 50)",
                                                yellow: "rgba(255, 177, 16)",
                                                blue: a(713101).$.light.uiBlue[600],
                                                white: "rgba(0, 0, 0, 0.65)"
                                            },
                                            pressed: {
                                                red: "rgba(186, 29, 8)",
                                                yellow: "rgba(219, 148, 0)",
                                                blue: "rgba(23, 97, 171)",
                                                white: "rgba(0, 0, 0)"
                                            },
                                            dropdownViewAll: {
                                                red: a(713101).$.light.red[500],
                                                yellow: a(713101).$.dark.yellow[800],
                                                blue: a(713101).$.light.uiBlue[600],
                                                white: "rgba(0, 0, 0)"
                                            }
                                        }
                                    },
                                    dark: {
                                        text: {
                                            hover: {
                                                red: "rgba(246, 73, 50)",
                                                yellow: "rgba(255, 177, 16)",
                                                blue: a(713101).$.dark.uiBlue[600],
                                                white: a(713101).$.dark.gray[500]
                                            },
                                            pressed: {
                                                red: "rgba(186, 29, 8)",
                                                yellow: "rgba(219, 148, 0)",
                                                blue: "rgba(23, 97, 171)",
                                                white: a(713101).$.dark.gray[600]
                                            },
                                            dropdownViewAll: {
                                                red: a(713101).$.dark.red[800],
                                                yellow: a(713101).$.light.yellow[500],
                                                blue: a(713101).$.dark.uiBlue[600],
                                                white: a(713101).$.dark.gray[600]
                                            }
                                        }
                                    }
                                },
                                marketplaceEditorialIllustration: {
                                    light: {
                                        red: o.transparent,
                                        yellow: o.transparent,
                                        blue: o.transparent,
                                        white: o.transparent
                                    },
                                    dark: {
                                        red: "rgb(253, 235, 236)",
                                        yellow: "rgb(253, 236, 200)",
                                        blue: "rgb(224, 238, 251)",
                                        white: o.white
                                    }
                                },
                                marketplaceEditorial: {
                                    light: {
                                        icon: {
                                            red: "rgba(246, 73, 50)",
                                            yellow: "rgba(255, 177, 16)",
                                            blue: a(713101).$.light.uiBlue[600],
                                            white: a(713101).$.light.gray[400]
                                        },
                                        border: {
                                            red: a(713101).$.light.red[50],
                                            yellow: a(713101).$.light.yellow[50],
                                            blue: "rgba(240, 246, 253, 1)",
                                            white: "rgba(0, 0, 0, 0.025)",
                                            hover: {
                                                red: a(713101).$.light.red[100],
                                                yellow: a(713101).$.light.yellow[100],
                                                blue: "rgba(224, 238, 251, 1)",
                                                white: a(713101).$.light.translucentGray[75]
                                            },
                                            pressed: {
                                                red: t.transparent,
                                                yellow: t.transparent,
                                                blue: t.transparent,
                                                white: t.transparent
                                            }
                                        },
                                        background: {
                                            red: a(713101).$.light.red[30],
                                            yellow: a(713101).$.light.yellow[30],
                                            blue: a(713101).$.light.uiBlue[50],
                                            white: a(713101).$.light.gray[30],
                                            hover: {
                                                red: a(713101).$.light.red[50],
                                                yellow: "rgba(251, 243, 219, 1)",
                                                blue: "rgba(240, 246, 253, 1)",
                                                white: "rgba(0, 0, 0, 0.08)"
                                            },
                                            pressed: {
                                                red: a(713101).$.light.red[100],
                                                yellow: a(713101).$.light.yellow[100],
                                                blue: "rgba(209, 229, 249, 1)",
                                                white: a(713101).$.light.gray[100]
                                            }
                                        }
                                    },
                                    dark: {
                                        illustration: {
                                            red: "rgba(246, 73, 50)",
                                            yellow: "rgba(246, 73, 50)",
                                            blue: "rgba(246, 73, 50)",
                                            white: "rgba(246, 73, 50)"
                                        },
                                        icon: {
                                            red: "rgba(246, 73, 50)",
                                            yellow: "rgba(255, 177, 16)",
                                            blue: a(713101).$.dark.uiBlue[600],
                                            white: a(713101).$.dark.gray[400]
                                        },
                                        border: {
                                            red: a(713101).$.dark.translucentGray[100],
                                            yellow: a(713101).$.dark.translucentGray[100],
                                            blue: a(713101).$.dark.translucentGray[100],
                                            white: a(713101).$.dark.translucentGray[200],
                                            hover: {
                                                red: a(713101).$.dark.translucentGray[100],
                                                yellow: a(713101).$.dark.translucentGray[100],
                                                blue: a(713101).$.dark.translucentGray[100],
                                                white: a(713101).$.dark.translucentGray[200]
                                            },
                                            pressed: {
                                                red: a(713101).$.dark.translucentGray[100],
                                                yellow: a(713101).$.dark.translucentGray[100],
                                                blue: a(713101).$.dark.translucentGray[100],
                                                white: a(713101).$.dark.translucentGray[200]
                                            }
                                        },
                                        background: {
                                            red: a(713101).$.dark.red[200],
                                            yellow: a(713101).$.dark.yellow[200],
                                            blue: a(713101).$.dark.uiBlue[200],
                                            white: a(713101).$.dark.translucentGray[200],
                                            hover: {
                                                red: a(713101).$.dark.red[300],
                                                yellow: a(713101).$.dark.yellow[300],
                                                blue: a(713101).$.dark.uiBlue[300],
                                                white: a(713101).$.dark.translucentGray[300]
                                            },
                                            pressed: {
                                                red: a(713101).$.dark.red[100],
                                                yellow: a(713101).$.dark.yellow[100],
                                                blue: a(713101).$.dark.uiBlue[100],
                                                white: a(713101).$.dark.translucentGray[100]
                                            }
                                        }
                                    }
                                },
                                creatorProfile: {
                                    light: {
                                        inReviewText: "rgba(249, 123, 45,1)",
                                        inReviewHoveredText: "rgba(199, 98, 36, 1)",
                                        inReviewBackground: "rgba(253, 230, 217, 1)"
                                    },
                                    dark: {
                                        inReviewText: "rgba(253, 230, 217, 1)",
                                        inReviewHoveredText: "rgba(199, 98, 36, 1)",
                                        inReviewBackground: "rgba(253, 230, 217, 1)"
                                    }
                                },
                                ...a(978990).p,
                                ...a(710575).$,
                                aiChatButton: {
                                    light: {
                                        unselected: "transparent",
                                        unselectedHover: "transparent",
                                        selected: o.white,
                                        selectedHover: o.white,
                                        pressed: o.white
                                    },
                                    dark: {
                                        unselected: "transparent",
                                        unselectedHover: "transparent",
                                        selected: "rgba(255, 255, 255, 0.04)",
                                        selectedHover: "rgba(255, 255, 255, 0.06)",
                                        pressed: "rgba(255, 255, 255, 0.12)"
                                    }
                                },
                                state: {
                                    light: {
                                        hover: "rgba(55, 53, 47, 0.04)",
                                        pressed: "rgba(55, 53, 47, 0.1)"
                                    },
                                    dark: {
                                        hover: "rgba(255, 255, 255, 0.055)",
                                        pressed: "rgba(255, 255, 255, 0.13)"
                                    }
                                },
                                glass: {
                                    light: {
                                        page: a(713101).$.light.pageGlass[0],
                                        wash: a(713101).$.light.washGlass[0]
                                    },
                                    dark: {
                                        page: a(713101).$.dark.pageGlass[0],
                                        wash: a(713101).$.dark.washGlass[0]
                                    }
                                },
                                popupOverlayBackground: {
                                    light: "rgba(15, 15, 15, 0.6)",
                                    dark: "rgba(15, 15, 15, 0.6)"
                                },
                                frozenColumnDividerShadowBackgroundFiltered: {
                                    light: "linear-gradient(to right, rgba(135,131,120,.15),rgba(135,131,120,.1),  transparent)",
                                    dark: "linear-gradient(to right, rgba(120,129,135,.15),rgba(120,129,135,.1),  transparent)"
                                },
                                frozenColumnDividerShadowBackground: {
                                    light: "linear-gradient(to right, rgba(135,131,120,.35),rgba(135,131,120,.2),  transparent)",
                                    dark: "linear-gradient(to right, rgba(120,129,135,.35),rgba(120,129,135,.2),  transparent)"
                                },
                                switcherButtonTeackBg: {
                                    light: "rgba(135,131,120,.3)",
                                    dark: "rgba(120,129,135,.3)"
                                },
                                switcherToggleDesktopTrackBg: {
                                    light: "rgba(135,131,120,.4)",
                                    dark: "rgba(120,129,135,.4)"
                                },
                                switcherToggleDesktopTrackBgVariant: {
                                    light: "rgba(206,205,202,.3)",
                                    dark: "rgba(202,204,206,.3)"
                                },
                                embedBlockResizerInnerBg: {
                                    light: "rgba(15,15,15,.6)",
                                    dark: "rgba(15,15,15,.6)"
                                },
                                calendarEventHoveredBackground: {
                                    light: "rgba(55, 53, 47, 0.02)",
                                    dark: "rgba(55, 53, 47, 0.02)"
                                }
                            },
                            n = {};
                        for (let [t, o] of (0, a(722371).WP)(e)) n[t] = o[r];
                        return n
                    }(r.theme);
                    return l.set(e, n), n
                }
            }
            let d = ["default", "gray", "brown", "orange", "yellow", "teal", "blue", "purple", "pink", "red"],
                g = ["default_background", "gray_background", "brown_background", "orange_background", "yellow_background", "teal_background", "blue_background", "purple_background", "pink_background", "red_background"],
                s = [...d, ...g];

            function u(r) {
                switch (r) {
                    case "default":
                    case "gray":
                    case "brown":
                    case "orange":
                    case "yellow":
                    case "teal":
                    case "blue":
                    case "purple":
                    case "pink":
                    case "red":
                    case "default_background":
                    case "gray_background":
                    case "brown_background":
                    case "orange_background":
                    case "yellow_background":
                    case "teal_background":
                    case "blue_background":
                    case "purple_background":
                    case "pink_background":
                    case "red_background":
                        return !0;
                    default:
                        return !1
                }
            }
            let c = ["default", "gray", "brown", "orange", "yellow", "green", "blue", "purple", "pink", "red"],
                b = {
                    light: .1,
                    dark: .2
                };

            function p(r) {
                return b[r]
            }
            let k = {
                    comment: (0, a(650342).Mj)({
                        r: 255,
                        g: 203,
                        b: 0
                    }),
                    update: (0, a(650342).Mj)({
                        r: 35,
                        g: 131,
                        b: 226
                    }),
                    remove: (0, a(650342).Mj)({
                        r: 120,
                        g: 119,
                        b: 116
                    })
                },
                h = {
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
                x = {
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
                },
                E = a(381453).Bj(({
                    annotationType: r,
                    type: e,
                    selected: t,
                    hovered: o,
                    overlapping: n,
                    mode: l
                }) => {
                    let i = k[r],
                        d = h[r][l],
                        g = x[r][e];
                    return (0, a(650342).lY)(i.alpha(Math.min(d * g * (1 + ((o || t ? "underline" === e ? 3 : 1 : 0) + 2 * !!n)), 1.25 * d)))
                }, r => Object.values(r).join("_"));

            function y({
                level: r,
                selected: e,
                hovered: a,
                mode: t
            }) {
                return E({
                    annotationType: "comment",
                    type: "background",
                    selected: e ? ? !1,
                    hovered: a ? ? !1,
                    overlapping: r > 1,
                    mode: t
                })
            }

            function m({
                level: r,
                selected: e,
                hovered: a,
                mode: t
            }) {
                return E({
                    annotationType: "comment",
                    type: "underline",
                    selected: e ? ? !1,
                    hovered: a ? ? !1,
                    overlapping: r > 1,
                    mode: t
                })
            }
            let f = a(381453).Bj(r => (0, a(650342).lY)(k.comment.alpha(.8 * h.comment[r]))),
                B = "light";

            function $() {
                return i({
                    theme: B
                })
            }

            function w(r, e) {
                let t = (0, a(722371).objectKeys)(e).map(t => {
                    let o = e[t];
                    try {
                        let e = (0, a(650342).Mj)(r).delta(o);
                        return {
                            name: t,
                            distance: e
                        }
                    } catch (r) {
                        return {
                            name: t,
                            distance: 360
                        }
                    }
                });
                return a(381453).wq(t, ({
                    distance: r
                }) => r).name
            }

            function v(r) {
                let e = {};
                for (let r of c) {
                    let a = S(i({
                        theme: "light"
                    }), r);
                    e[r] = a.backgroundColor
                }
                return w(r, e)
            }

            function C(r) {
                let e = {};
                for (let [r, a] of Object.entries(i({
                        theme: "light"
                    }).palette))
                    for (let [t, o] of Object.entries(a)) e[`${r}:${t}`] = o;
                let [a, t] = w(r, e).split(":");
                return {
                    colorName: a,
                    shade: parseInt(t)
                }
            }

            function T(r) {
                if (!r) return;
                let e = r.split(/\(|\)/);
                if (3 !== e.length) return;
                let a = e[1].split(/(?:,| )+/),
                    t = "rgb" === e[0] && 3 === a.length,
                    o = "rgba" === e[0] && 4 === a.length;
                if (!t && !o) return;
                let n = Number(a[0]),
                    l = Number(a[1]),
                    i = Number(a[2]),
                    d = `#${A(n)}${A(l)}${A(i)}`,
                    g = 255;
                return o && (g = Math.round(255 * Number(a[3]))), (d = d.concat(A(g))).toUpperCase()
            }

            function A(r) {
                let e = r.toString(16);
                return 1 === e.length && (e = "0".concat(e)), e
            }

            function D(r, e) {
                if (e && "default" !== e && e in r.palette) return e
            }

            function S(r, e) {
                let a = D(r, e),
                    t = a && a in r ? r[a] : r;
                return {
                    textColor: t.text.primary,
                    backgroundColor: t.background.tertiaryTranslucent
                }
            }

            function I(r, e, t) {
                var o, n;
                let l = D(r, e),
                    i = l ? r[l] : r,
                    d = i.text.accentPrimary,
                    g = i.border.secondaryTranslucent,
                    s = l ? r[l].background.primaryTranslucent : r.background.secondaryTranslucent,
                    u = i.background.elevated,
                    c = "light" === t ? (0, a(650342).e0)(s, -.05) : (0, a(650342).e0)(u, .05);
                return {
                    textColor: d,
                    backgroundColor: s,
                    borderColor: g,
                    cardBackgroundColor: u,
                    cardHoveredBackgroundColor: c,
                    cardPressedBackgroundColor: "dark" === t ? u : void 0,
                    chartColor: e ? null == (o = a(620107).O[e]) ? void 0 : o[0] : null == (n = a(620107).O.default) ? void 0 : n[0]
                }
            }
            let _ = {
                default: void 0,
                gray: "gray",
                brown: "brown",
                orange: "orange",
                yellow: "yellow",
                teal: "green",
                blue: "blue",
                purple: "purple",
                pink: "pink",
                red: "red",
                default_background: void 0,
                gray_background: "gray",
                brown_background: "brown",
                orange_background: "orange",
                yellow_background: "yellow",
                teal_background: "green",
                blue_background: "blue",
                purple_background: "purple",
                pink_background: "pink",
                red_background: "red"
            };

            function P(r) {
                switch (r) {
                    case "default_background":
                    case "gray_background":
                    case "brown_background":
                    case "orange_background":
                    case "yellow_background":
                    case "teal_background":
                    case "blue_background":
                    case "purple_background":
                    case "pink_background":
                    case "red_background":
                        return !0;
                    default:
                        return !1
                }
            }
            let R = 100,
                F = 200,
                O = 400,
                U = 500,
                N = 50,
                G = 100,
                L = 100,
                M = 200;

            function H(r, e, a = "solid") {
                if ("default" === r) return {
                    color: "inherit",
                    fill: "inherit"
                };
                let t = _[r];
                return t ? P(r) ? {
                    background: e[t].background["translucent" === a ? "secondaryTranslucent" : "secondary"]
                } : {
                    color: e[t].text.secondary,
                    fill: e[t].text.secondary
                } : {
                    color: "inherit",
                    fill: "inherit"
                }
            }

            function j(r, e) {
                let a = d.filter(r => "default" !== r);
                if (r.startsWith("test_user_")) return "black";
                let t = 0;
                for (let e = 0; e < r.length; e++) t += r.charCodeAt(e);
                return t %= a.length, H(a[t], e).color || e.text.primary
            }

            function q(r, e, a) {
                if ("default" === r) return {
                    color: "inherit",
                    fill: "inherit",
                    hoveredBackground: e.whiteButtonHoveredBackground,
                    pressedBackground: e.whiteButtonPressedBackground
                };
                let t = _[r];
                if (!t) return {
                    color: "inherit",
                    fill: "inherit"
                };
                let o = e.palette[t],
                    n = H(r, e),
                    l = {
                        lightHovered: o[R],
                        lightPressed: o[F],
                        darkHovered: o[O],
                        darkPressed: o[U]
                    },
                    i = {
                        lightHovered: o[N],
                        lightPressed: o[G],
                        darkHovered: o[L],
                        darkPressed: o[M]
                    };
                return P(r) ? {
                    background: n.background,
                    hoveredBackground: "dark" === a ? l.darkHovered : l.lightHovered,
                    pressedBackground: "dark" === a ? l.darkPressed : l.lightPressed
                } : {
                    color: n.color,
                    fill: n.fill,
                    hoveredBackground: "dark" === a ? i.darkHovered : i.lightHovered,
                    pressedBackground: "dark" === a ? i.darkPressed : i.lightPressed
                }
            }

            function X(r, e, a) {
                if ("default" === r) return {
                    color: e.text.primary
                };
                let t = _[r];
                return t ? P(r) ? {
                    background: e[t].background["gray" === t && "light" === a ? "primary" : "secondary"]
                } : {
                    color: e[t].text.secondary,
                    fill: e[t].text.secondary
                } : {
                    color: e.text.primary
                }
            }

            function Q(r, e) {
                return "default" === r || "default_background" === r ? {
                    color: e.text.primary
                } : H(r, e, "translucent")
            }

            function V(r, e) {
                return {
                    color: r[e],
                    fill: r[e]
                }
            }
        },
        650342: (r, e, a) => {
            a.d(e, {
                Mj: () => t().Mj,
                X$: () => t().X$,
                X4: () => n,
                e$: () => i,
                e0: () => l,
                lY: () => d,
                mH: () => o().A
            });
            var t = () => a(983640),
                o = () => a(994675);

            function n(r, e) {
                return "string" == typeof r && r.startsWith("var(") ? `rgb(from ${r} r g b / ${e})` : d((0, t().Mj)(r).alpha(e))
            }

            function l(r, e) {
                let a = 50 * e;
                if (r.startsWith("var(")) return `hsl(from ${r} h s calc(l + ${a}))`;
                let o = (0, t().Mj)(r).toHsl();
                return o.l = Math.max(0, Math.min(100, o.l + a)), d((0, t().Mj)(o))
            }

            function i(r, e) {
                if (r.startsWith("var(")) return `lab(from ${r} calc(l - ${16*e}) a b)`;
                let a = (0, t().Mj)(r).toLab();
                return a.l -= 16 * e, d((0, t().Mj)(a))
            }

            function d(r) {
                return r.minify({
                    hex: !1,
                    hsl: !1
                })
            }(0, t().X$)([a(283439).A, a(920008).A, a(767105).A, a(329309).A])
        },
        654070: (r, e, a) => {
            a.d(e, {
                Mh: () => d,
                PX: () => u,
                f1: () => g,
                kX: () => s,
                nG: () => l,
                xB: () => n
            }), a(16280), a(898992), a(672577), a(581454);
            let t = {
                    INTERNAL_SERVER_ERROR: 500,
                    NOT_IMPLEMENTED: 501,
                    BAD_GATEWAY: 502,
                    SERVICE_UNAVAILABLE: 503,
                    GATEWAY_TIMEOUT: 504,
                    HTTP_VERSION_NOT_SUPPORTED: 505,
                    VARIANT_ALSO_NEGOTIATES: 506,
                    INSUFFICIENT_STORAGE: 507,
                    LOOP_DETECTED: 508,
                    NOT_EXTENDED: 510,
                    NETWORK_AUTHENTICATION_REQUIRED: 511,
                    FORBIDDEN: 403
                },
                o = {
                    BAD_REQUEST: 400,
                    UNAUTHORIZED: 401,
                    PAYMENT_REQUIRED: 402,
                    FORBIDDEN: 403,
                    NOT_FOUND: 404,
                    METHOD_NOT_ALLOWED: 405,
                    NOT_ACCEPTABLE: 406,
                    PROXY_AUTHENTICATION_REQUIRED: 407,
                    REQUEST_TIMEOUT: 408,
                    CONFLICT: 409,
                    GONE: 410,
                    LENGTH_REQUIRED: 411,
                    PRECONDITION_FAILED: 412,
                    PAYLOAD_TOO_LARGE: 413,
                    URI_TOO_LONG: 414,
                    UNSUPPORTED_MEDIA_TYPE: 415,
                    RANGE_NOT_SATISFIABLE: 416,
                    EXPECTATION_FAILED: 417,
                    IM_A_TEAPOT: 418,
                    MISDIRECTED_REQUEST: 421,
                    UNPROCESSABLE_ENTITY: 422,
                    LOCKED: 423,
                    FAILED_DEPENDENCY: 424,
                    TOO_EARLY: 425,
                    UPGRADE_REQUIRED: 426,
                    PRECONDITION_REQUIRED: 428,
                    TOO_MANY_REQUESTS: 429,
                    UNAVAILABLE_FOR_LEGAL_REASONS: 451,
                    RESOURCE_EXPIRED: 419,
                    FETCHING: 439,
                    CLIENT_CLOSED_REQUEST: 499
                },
                n = { ...o,
                    ...t
                },
                l = {
                    OK: 200,
                    CREATED: 201,
                    ACCEPTED: 202,
                    NO_CONTENT: 204,
                    FOUND: 302,
                    TEMPORARY_REDIRECT: 307,
                    ...o,
                    ...t
                };
            n.REQUEST_TIMEOUT, n.TOO_EARLY, n.TOO_MANY_REQUESTS, n.INTERNAL_SERVER_ERROR, n.BAD_GATEWAY, n.SERVICE_UNAVAILABLE, n.GATEWAY_TIMEOUT;
            class i {
                constructor(r, e, a) {
                    this.statusCode = r, this.body = e, this.headers = a
                }
            }

            function d(r) {
                return Object.values(n).includes(r)
            }

            function g(r) {
                return Object.values(t).includes(r)
            }

            function s(r) {
                return "statusCode" in r && d(r.statusCode)
            }

            function u(r) {
                return !s(r)
            }
            Object.assign({}, ...(0, a(722371).WP)(l).map(([r, e]) => ({
                [r]: (r, a) => new i(e, r, a)
            }))), new class {
                constructor(r) {
                    this.processedResponse = r
                }
                get statusCode() {
                    return this.processedResponse.statusCode
                }
            }(Error("missing-status-code"))
        },
        710575: (r, e, a) => {
            a.d(e, {
                $: () => t
            });
            let t = {
                shadow: {
                    dark: {
                        base: {
                            diffuse: "0px 12px 32px 0px rgba(25, 25, 25, 0.4)",
                            scrim: "0px 24px 48px 0px rgba(25, 25, 25, 0.639), 0px 4px 12px 0px rgba(25, 25, 25, 0.56)",
                            lg: "0px 14px 28px -6px rgba(25, 25, 25, 0.2), 0px 2px 4px -1px rgba(25, 25, 25, 0.119)",
                            sm: "0px 2px 4px 0px rgba(25, 25, 25, 0.079)",
                            md: "0px 4px 12px -2px rgba(25, 25, 25, 0.079)"
                        },
                        outline: {
                            md: "0px 0px 0px 1px rgba(56, 56, 54, 1), 0px 4px 12px -2px rgba(25, 25, 25, 0.079)",
                            lg: "0px 0px 0px 1px rgba(56, 56, 54, 1), 0px 14px 28px -6px rgba(25, 25, 25, 0.2), 0px 2px 4px -1px rgba(25, 25, 25, 0.119)",
                            diffuse: "0px 0px 0px 1px rgba(56, 56, 54, 1), 0px 12px 32px 0px rgba(25, 25, 25, 0.4)",
                            scrim: "0px 0px 0px 1px rgba(56, 56, 54, 1), 0px 24px 48px 0px rgba(25, 25, 25, 0.639), 0px 4px 12px 0px rgba(25, 25, 25, 0.56)",
                            sm: "0px 0px 0px 1px rgba(56, 56, 54, 1), 0px 2px 4px 0px rgba(25, 25, 25, 0.079)"
                        }
                    },
                    light: {
                        outline: {
                            md: "0px 8px 12px 0px rgba(25, 25, 25, 0.029), 0px 2px 6px 0px rgba(25, 25, 25, 0.029), 0px 0px 0px 1px rgba(42, 28, 0, 0.07)",
                            sm: "0px 2px 4px 0px rgba(0, 0, 0, 0.039), 0px 0px 0px 1px rgba(42, 28, 0, 0.07)",
                            lg: "0px 20px 24px 0px rgba(25, 25, 25, 0.05), 0px 5px 8px 0px rgba(25, 25, 25, 0.029), 0px 0px 0px 1px rgba(42, 28, 0, 0.07)",
                            diffuse: "0px 12px 32px 0px rgba(25, 25, 25, 0.029), 0px 0px 0px 1px rgba(42, 28, 0, 0.07)",
                            scrim: "0px 24px 48px 0px rgba(25, 25, 25, 0.239), 0px 4px 12px 0px rgba(25, 25, 25, 0.14), 0px 0px 0px 1px rgba(42, 28, 0, 0.07)"
                        },
                        base: {
                            lg: "0px 20px 24px 0px rgba(25, 25, 25, 0.05), 0px 5px 8px 0px rgba(25, 25, 25, 0.029)",
                            md: "0px 8px 12px 0px rgba(25, 25, 25, 0.029), 0px 2px 6px 0px rgba(25, 25, 25, 0.029)",
                            sm: "0px 4px 12px 0px rgba(25, 25, 25, 0.029), 0px 1px 2px 0px rgba(25, 25, 25, 0.019)",
                            scrim: "0px 24px 48px 0px rgba(25, 25, 25, 0.239), 0px 4px 12px 0px rgba(25, 25, 25, 0.14)",
                            diffuse: "0px 12px 32px 0px rgba(25, 25, 25, 0.029)"
                        }
                    }
                }
            }
        },
        735303: (r, e, a) => {
            a.d(e, {
                aI: () => o,
                fB: () => n,
                pi: () => t
            });
            let t = ["✋", "✋🏻", "✋🏼", "✋🏽", "✋🏾", "✋🏿"],
                o = t.length - 1,
                n = {}
        },
        871871: (r, e, a) => {
            a.d(e, {
                AP: () => s,
                FT: () => h,
                Fk: () => b,
                Fq: () => d,
                I: () => t,
                LJ: () => l,
                PE: () => k,
                Se: () => E,
                Yf: () => n,
                Z4: () => x,
                bz: () => i,
                f7: () => g,
                qg: () => y,
                sd: () => u
            }), a(18107), a(944114), a(967357), a(898992), a(354520);
            let t = 60,
                o = /[\u{E0020}-\u{E007E}]/u;

            function n(r, e) {
                var t;
                let o = b(r);
                return null == (t = (0, a(373615).$)(o, e)) || null == (t = t.keywords) ? void 0 : t[0]
            }

            function l(r) {
                return {
                    x: 66 * r.sheetX + 1,
                    y: 66 * r.sheetY + 1,
                    size: 64
                }
            }

            function i(r) {
                return "apple" === r ? a(896221).A.images.emoji.appleEmojiSpritesheet64Png : "twitter" === r ? a(896221).A.images.emoji.twitterEmojiSpritesheet64Png : "google" === r ? a(896221).A.images.emoji.googleEmojiSpritesheet64Png : (0, a(722371).HB)(r)
            }

            function d(r, e) {
                let t = (0, a(373615).$)(r, e);
                return t && t.variations || []
            }

            function g(r) {
                let e = r.toLowerCase().replace(/_/g, " ").replace(/([a-z0-9])-$/g, "$1").replace(/-([a-z])/g, " $1").replace(/\s+/g, " ").trim();
                if (e) return e
            }

            function s(r) {
                var e;
                let a = (null == (e = g(r)) ? void 0 : e.split(/\s+/g).filter(Boolean)) ? ? [];
                return [g(r) ? ? r, ...a]
            }

            function u(r, e) {
                return k(r).filter(r => !(0, a(373615).$)(r, e)).join("")
            }
            let c = ["🏻", "🏼", "🏽", "🏾", "🏿"];

            function b(r) {
                let e = r;
                return c.forEach(r => e = e.replace(r, "")), e
            }
            let p = new(a(759303)).q({
                max: 30,
                ttl: a(627179).Xb,
                updateAgeOnGet: !0
            });

            function k(r) {
                let e = p.get(r);
                if (e) return e;
                if ((0, a(763230).Kg)(r)) {
                    let e = function(r) {
                        let e = [],
                            a = 0;
                        for (; a < r.length;) {
                            let t = r[a];
                            if ("🏴" === r[a] && a + 2 <= r.length) {
                                let e = a;
                                for (a += 1; a < r.length && o.test(r[a]);) a += 1;
                                if (a < r.length && "󠁿" === r[a]) {
                                    let o = a;
                                    t = r.slice(e, o + 1).join("")
                                } else a = e
                            }
                            e.push(t), a += 1
                        }
                        return e
                    }(a(381453).$r(r));
                    return p.set(r, e), e
                }
                return a(381453).$r(r)
            }
            class h {
                codepointToGraphemeMap;
                constructor(r) {
                    this.codepointToGraphemeMap = new Map;
                    let e = 0,
                        a = 0;
                    for (; a < r.length; a++) {
                        const t = r[a].length;
                        for (let r = 0; r < t; r++) this.codepointToGraphemeMap.set(e + r, a);
                        e += t
                    }
                    this.codepointToGraphemeMap.set(e, a)
                }
                getGraphemeIndex(r) {
                    return (0, a(148337).o9)(this.codepointToGraphemeMap.get(r))
                }
            }
            class x {
                graphemeInfoArray;
                constructor(r) {
                    this.graphemeInfoArray = [];
                    let e = 0;
                    for (const a of r) this.graphemeInfoArray.push({
                        char: a,
                        startIndex: e,
                        length: a.length
                    }), e += a.length
                }
                getStringStartIndex(r) {
                    return (0, a(148337).MX)(0 <= r && r <= this.graphemeInfoArray.length, "Invalid grapheme index"), r === this.graphemeInfoArray.length ? this.getStringLength() : this.graphemeInfoArray[r].startIndex
                }
                getStringEndIndex(r) {
                    return (0, a(148337).MX)(0 <= r && r < this.graphemeInfoArray.length, "Invalid grapheme index"), this.graphemeInfoArray[r].startIndex + this.graphemeInfoArray[r].length - 1
                }
                getCharLength(r) {
                    return (0, a(148337).MX)(0 <= r && r < this.graphemeInfoArray.length, "Invalid grapheme index"), this.graphemeInfoArray[r].length
                }
                getStringLength() {
                    return this.graphemeInfoArray.length ? this.graphemeInfoArray.at(-1).startIndex + this.graphemeInfoArray.at(-1).length : 0
                }
                getInclusiveStringRangeForSelection(r) {
                    return {
                        startIndex: this.getStringStartIndex(r.startIndex),
                        endIndex: this.getStringEndIndex(r.endIndex - 1)
                    }
                }
                getLength() {
                    return this.graphemeInfoArray.length
                }
            }

            function E(r) {
                let e = {};
                for (let [a, t] of Object.entries(r.emojiByColorRaw))
                    for (let r of t) e[r] = a;
                return { ...r,
                    emojiByColorProcessed: e
                }
            }
            Symbol("UnicodeEmojiString");
            let y = {
                isCustomEmojiString: r => "string" == typeof r && r.startsWith("notion://custom_emoji/"),
                fromPointer: r => ({
                    type: "custom",
                    pointer: r
                }),
                fromCustomEmojiString: function(r) {
                    let {
                        pathname: e
                    } = (0, a(188835).parse)(r), [t, o, n] = e.split("/");
                    return {
                        type: "custom",
                        pointer: {
                            table: a(996034).e,
                            id: n,
                            spaceId: o
                        }
                    }
                },
                fromUnicodeEmojiString: function(r) {
                    return {
                        type: "unicode",
                        unicode: r
                    }
                },
                toString(r) {
                    switch (r.type) {
                        case "custom":
                            let e = r.pointer.spaceId,
                                t = r.pointer.id;
                            return `notion://custom_emoji/${e}/${t}`;
                        case "unicode":
                            return r.unicode;
                        default:
                            (0, a(722371).HB)(r)
                    }
                }
            }
        },
        978990: (r, e, a) => {
            a.d(e, {
                p: () => i
            });
            let t = "rgb(15, 15, 15)",
                o = "rgb(15, 15, 15)",
                n = a(713101).$.light.uiBlue[600],
                l = a(713101).$.light.red[500],
                i = {
                    shadowColor: {
                        light: t,
                        dark: o
                    },
                    bottomActionBarShadow: {
                        light: `0 -1px 0 1px ${(0,a(650342).X4)(t,.05)}, 0 -3px 6px ${(0,a(650342).X4)(t,.1)}`,
                        dark: `0 -1px 0 1px ${(0,a(650342).X4)(o,.05)}, 0 -3px 6px ${(0,a(650342).X4)(t,.1)}`
                    },
                    buttonBoxShadow: {
                        light: `inset 0 0 0 1px ${(0,a(650342).X4)(t,.1)}, 0 1px 2px ${(0,a(650342).X4)(t,.1)}`,
                        dark: `inset 0 0 0 1px ${(0,a(650342).X4)(o,.2)}, 0 1px 2px ${(0,a(650342).X4)(o,.1)}`
                    },
                    avatarBoxShadow: {
                        light: "0 2px 4px rgba(15, 15, 15, 0.1)",
                        dark: "0 2px 4px rgba(15, 15, 15, 0.2)"
                    },
                    buttonBlueFocusRing: {
                        light: `
			0px 0px 0px 2px #f8f8f7,
            0px 0px 0px 4px #2383E2,
            0px 0px 0px 6px rgba(255,255,255,0.25)
	  `,
                        dark: `
			0px 0px 0px 2px #191919,
            0px 0px 0px 4px #2383E2,
            0px 0px 0px 6px #191919
	  `
                    },
                    inputRedFocusRing: {
                        light: `
            0px 0px 0px 1px ${l} inset,
            0px 0px 0px 1px ${l}
		`,
                        dark: `
			0px 0px 0px 1px ${l} inset,
            0px 0px 0px 1px ${l}
		`
                    },
                    inputBlueFocusRing: {
                        light: `
            0px 0px 0px 1px ${n} inset,
            0px 0px 0px 1px ${n}
		`,
                        dark: `
			0px 0px 0px 1px ${n} inset,
            0px 0px 0px 1px ${n}
		`
                    },
                    secondarySidebarBorderBoxShadow: {
                        light: "inset calc(var(--direction, 1) * -1px) 0px 0px 0px rgba(84, 72, 49, 0.08)",
                        dark: "inset calc(var(--direction, 1) * -1px) 0px 0px 0px rgba(255, 255, 255, 0.095)"
                    },
                    topbarAndroidShadow: {
                        light: `
			rgba(15, 15, 15, 0.1) 0px 2px 4px,
			rgba(15, 15, 15, 0.15) 0px 2px 8px
		`,
                        dark: `
			rgba(15, 15, 15, 0.2) 0px 2px 4px,
			rgba(15, 15, 15, 0.3) 0px 2px 8px
		`
                    },
                    topbarAndroidShadowCollapsed: {
                        light: `
			rgba(15, 15, 15, 0.1) 0px 1px 0px,
			transparent 0px 0px 0px
		`,
                        dark: `
			rgba(15, 15, 15, 0.2) 0px 1px 0px,
			transparent 0px 0px 0px
		`
                    },
                    homeScrollButtonShadow: {
                        light: d({
                            elevation: 2,
                            color: t,
                            opacity: .1
                        }),
                        dark: d({
                            elevation: 2,
                            color: o,
                            opacity: .2
                        })
                    },
                    homeShadow: {
                        light: {
                            card: {
                                base: d({
                                    inner: !1,
                                    elevation: 1,
                                    color: "black",
                                    opacity: .05
                                }),
                                hovered: d({
                                    inner: !1,
                                    elevation: 1,
                                    color: "black",
                                    opacity: .1
                                })
                            },
                            templateCard: {
                                base: d({
                                    inner: !1,
                                    elevation: 1,
                                    color: "black",
                                    opacity: .06
                                }),
                                hovered: d({
                                    inner: !1,
                                    elevation: 1,
                                    color: "black",
                                    opacity: .12
                                })
                            }
                        },
                        dark: {
                            card: {
                                base: "unset",
                                hovered: d({
                                    inner: !0,
                                    elevation: 1,
                                    color: "white",
                                    opacity: .05
                                })
                            },
                            templateCard: {
                                base: "unset",
                                hovered: d({
                                    inner: !0,
                                    elevation: 1,
                                    color: "white",
                                    opacity: .05
                                })
                            }
                        }
                    },
                    focusedShadow: {
                        light: "rgba(35, 131, 226, 0.57) 0px 0px 0px 1px inset, rgba(35, 131, 226, 0.35) 0px 0px 0px 2px",
                        dark: "rgba(35, 131, 226, 0.57) 0px 0px 0px 1px inset, rgba(35, 131, 226, 0.35) 0px 0px 0px 2px"
                    },
                    shadowSMThickerOutline: {
                        light: "0px 4px 12px -2px rgba(0, 0, 0, 0.08), 0 0 0 2px rgba(84, 72, 49, 0.08)",
                        dark: `0 0 0 2px ${a(996583).k.border.dark.primary}, 0px 4px 12px -2px rgba(0, 0, 0, 0.16)`
                    },
                    shadowMDPrimaryOutline: {
                        light: `0px 14px 28px -6px rgba(0, 0, 0, 0.10), 0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0 0 0 1px ${a(996583).k.border.light.primaryTranslucent}`,
                        dark: `inset 0 0 0 1px ${a(996583).k.border.dark.primaryTranslucent}, 0px 14px 28px -6px rgba(0, 0, 0, 0.20), 0px 2px 4px -1px rgba(0, 0, 0, 0.12)`
                    },
                    shadowMDThickerOutline: {
                        light: "0px 14px 28px -6px rgba(0, 0, 0, 0.10), 0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0 0 0 2px rgba(84, 72, 49, 0.08)",
                        dark: `0 0 0 2px ${a(996583).k.border.dark.primary}, 0px 14px 28px -6px rgba(0, 0, 0, 0.20), 0px 2px 4px -1px rgba(0, 0, 0, 0.12)`
                    }
                };

            function d({
                elevation: r,
                color: e = (0, a(650342).Mj)({
                    h: 0,
                    s: 1,
                    l: 7
                }),
                opacity: t = .1,
                inner: o = !1
            }) {
                let n = o ? "inset" : "";
                switch (r) {
                    case 1:
                        return `
					${n} 0 0 0 1px ${(0,a(650342).X4)(e,t)}
				`;
                    case 2:
                        return `
					${n} 0 0 0 1px ${(0,a(650342).X4)(e,t)},
					${n} 0 2px 4px ${(0,a(650342).X4)(e,t)}
				`;
                    default:
                        return `
					${n} 0 0 0 1px ${(0,a(650342).X4)(e,t/2)},
					${n} 0 ${Number(r)}px ${2*r}px ${(0,a(650342).X4)(e,t)},
					${n} 0 ${3*r}px ${8*r}px ${(0,a(650342).X4)(e,2*t)}
				`
                }
            }
        },
        996034: (r, e, a) => {
            a.d(e, {
                e: () => t,
                n: () => o
            });
            let t = "custom_emoji",
                o = {
                    table: t,
                    columnTypes: {
                        id: a(759070).q.UUID,
                        version: a(759070).q.Number,
                        last_version: a(759070).q.Number,
                        space_id: a(759070).q.UUID,
                        name: a(759070).q.String,
                        url: a(759070).q.String,
                        file_ids: a(759070).q.StringArray,
                        created_time: a(759070).q.Number,
                        created_by_id: a(759070).q.UUID,
                        created_by_table: a(759070).q.String,
                        alive: a(759070).q.Boolean
                    },
                    requiredColumns: {
                        version: !0,
                        space_id: !0,
                        name: !0,
                        url: !0,
                        created_time: !0,
                        created_by_id: !0,
                        created_by_table: !0,
                        alive: !0
                    },
                    model: (0, a(68291).P)({
                        RecordStore: !0
                    })
                }
        },
        997500: (r, e, a) => {
            a.d(e, {
                Tk: () => t,
                dK: () => o
            });
            let t = {
                    gray: {
                        0: "rgba(255, 255, 255, 1)",
                        10: "rgba(249, 248, 247, 1)",
                        20: "rgba(240, 239, 237, 1)",
                        30: "rgba(230, 229, 227, 1)",
                        40: "rgba(212, 211, 207, 1)",
                        50: "rgba(188, 186, 182, 1)",
                        60: "rgba(173, 169, 163, 1)",
                        70: "rgba(161, 158, 153, 1)",
                        80: "rgba(142, 139, 134, 1)",
                        90: "rgba(125, 122, 117, 1)",
                        100: "rgba(95, 94, 89, 1)",
                        110: "rgba(73, 72, 70, 1)",
                        120: "rgba(56, 56, 54, 1)",
                        130: "rgba(44, 44, 43, 1)",
                        140: "rgba(32, 32, 32, 1)",
                        150: "rgba(25, 25, 25, 1)"
                    },
                    red: {
                        0: "rgba(255, 255, 255, 1)",
                        10: "rgba(253, 246, 246, 1)",
                        20: "rgba(252, 233, 231, 1)",
                        30: "rgba(247, 217, 213, 1)",
                        40: "rgba(240, 197, 190, 1)",
                        50: "rgba(224, 174, 166, 1)",
                        60: "rgba(208, 152, 141, 1)",
                        70: "rgba(233, 115, 102, 1)",
                        80: "rgba(229, 100, 88, 1)",
                        90: "rgba(207, 81, 72, 1)",
                        100: "rgba(146, 73, 67, 1)",
                        110: "rgba(109, 53, 49, 1)",
                        120: "rgba(80, 44, 41, 1)",
                        130: "rgba(65, 39, 37, 1)",
                        140: "rgba(36, 29, 29, 1)",
                        150: "rgba(28, 25, 24, 1)"
                    },
                    orange: {
                        0: "rgba(255, 255, 255, 1)",
                        10: "rgba(252, 247, 244, 1)",
                        20: "rgba(251, 235, 222, 1)",
                        30: "rgba(243, 221, 203, 1)",
                        40: "rgba(234, 204, 178, 1)",
                        50: "rgba(218, 183, 152, 1)",
                        60: "rgba(203, 162, 125, 1)",
                        70: "rgba(222, 146, 85, 1)",
                        80: "rgba(213, 128, 59, 1)",
                        90: "rgba(210, 123, 45, 1)",
                        100: "rgba(136, 82, 47, 1)",
                        110: "rgba(106, 66, 34, 1)",
                        120: "rgba(83, 54, 31, 1)",
                        130: "rgba(61, 42, 29, 1)",
                        140: "rgba(35, 30, 27, 1)",
                        150: "rgba(27, 25, 23, 1)"
                    },
                    yellow: {
                        0: "rgba(255, 255, 255, 1)",
                        10: "rgba(252, 250, 239, 1)",
                        20: "rgba(249, 243, 220, 1)",
                        30: "rgba(242, 227, 183, 1)",
                        40: "rgba(232, 212, 151, 1)",
                        50: "rgba(226, 202, 136, 1)",
                        60: "rgba(216, 194, 131, 1)",
                        70: "rgba(234, 194, 107, 1)",
                        80: "rgba(216, 163, 47, 1)",
                        90: "rgba(203, 148, 52, 1)",
                        100: "rgba(131, 100, 38, 1)",
                        110: "rgba(101, 81, 33, 1)",
                        120: "rgba(80, 68, 37, 1)",
                        130: "rgba(55, 51, 37, 1)",
                        140: "rgba(35, 34, 26, 1)",
                        150: "rgba(27, 27, 22, 1)"
                    },
                    green: {
                        0: "rgba(255, 255, 255, 1)",
                        10: "rgba(246, 249, 247, 1)",
                        20: "rgba(232, 241, 236, 1)",
                        30: "rgba(215, 230, 221, 1)",
                        40: "rgba(190, 217, 201, 1)",
                        50: "rgba(166, 199, 180, 1)",
                        60: "rgba(139, 183, 157, 1)",
                        70: "rgba(114, 188, 143, 1)",
                        80: "rgba(70, 161, 113, 1)",
                        90: "rgba(80, 148, 110, 1)",
                        100: "rgba(55, 103, 76, 1)",
                        110: "rgba(42, 83, 60, 1)",
                        120: "rgba(38, 61, 48, 1)",
                        130: "rgba(36, 52, 43, 1)",
                        140: "rgba(27, 33, 29, 1)",
                        150: "rgba(23, 27, 23, 1)"
                    },
                    teal: {
                        0: "rgba(255, 255, 255, 1)",
                        10: "rgba(243, 250, 251, 1)",
                        20: "rgba(224, 243, 247, 1)",
                        30: "rgba(202, 233, 240, 1)",
                        40: "rgba(176, 219, 228, 1)",
                        50: "rgba(153, 200, 211, 1)",
                        60: "rgba(126, 182, 194, 1)",
                        70: "rgba(79, 185, 201, 1)",
                        80: "rgba(55, 164, 180, 1)",
                        90: "rgba(44, 139, 158, 1)",
                        100: "rgba(34, 100, 113, 1)",
                        110: "rgba(24, 80, 91, 1)",
                        120: "rgba(20, 61, 69, 1)",
                        130: "rgba(25, 52, 57, 1)",
                        140: "rgba(23, 33, 36, 1)",
                        150: "rgba(20, 26, 28, 1)"
                    },
                    blue: {
                        0: "rgba(255, 255, 255, 1)",
                        10: "rgba(243, 249, 253, 1)",
                        20: "rgba(229, 242, 252, 1)",
                        30: "rgba(206, 227, 247, 1)",
                        40: "rgba(182, 212, 243, 1)",
                        50: "rgba(157, 192, 234, 1)",
                        60: "rgba(131, 171, 225, 1)",
                        70: "rgba(94, 159, 232, 1)",
                        80: "rgba(39, 131, 222, 1)",
                        90: "rgba(56, 125, 201, 1)",
                        100: "rgba(53, 95, 139, 1)",
                        110: "rgba(38, 74, 114, 1)",
                        120: "rgba(35, 56, 80, 1)",
                        130: "rgba(33, 48, 65, 1)",
                        140: "rgba(26, 32, 39, 1)",
                        150: "rgba(23, 26, 29, 1)"
                    },
                    purple: {
                        0: "rgba(255, 255, 255, 1)",
                        10: "rgba(250, 247, 252, 1)",
                        20: "rgba(243, 235, 249, 1)",
                        30: "rgba(232, 219, 242, 1)",
                        40: "rgba(219, 200, 232, 1)",
                        50: "rgba(199, 179, 213, 1)",
                        60: "rgba(180, 156, 198, 1)",
                        70: "rgba(191, 142, 218, 1)",
                        80: "rgba(181, 119, 214, 1)",
                        90: "rgba(154, 107, 180, 1)",
                        100: "rgba(103, 77, 123, 1)",
                        110: "rgba(85, 59, 105, 1)",
                        120: "rgba(60, 45, 71, 1)",
                        130: "rgba(54, 41, 63, 1)",
                        140: "rgba(34, 29, 37, 1)",
                        150: "rgba(27, 24, 29, 1)"
                    },
                    pink: {
                        0: "rgba(255, 255, 255, 1)",
                        10: "rgba(252, 247, 249, 1)",
                        20: "rgba(250, 233, 241, 1)",
                        30: "rgba(244, 216, 228, 1)",
                        40: "rgba(234, 196, 213, 1)",
                        50: "rgba(216, 175, 193, 1)",
                        60: "rgba(200, 151, 173, 1)",
                        70: "rgba(223, 132, 168, 1)",
                        80: "rgba(219, 105, 153, 1)",
                        90: "rgba(193, 76, 138, 1)",
                        100: "rgba(123, 71, 96, 1)",
                        110: "rgba(104, 53, 78, 1)",
                        120: "rgba(78, 43, 60, 1)",
                        130: "rgba(63, 38, 49, 1)",
                        140: "rgba(38, 28, 32, 1)",
                        150: "rgba(29, 23, 26, 1)"
                    },
                    brown: {
                        0: "rgba(255, 255, 255, 1)",
                        10: "rgba(250, 248, 246, 1)",
                        20: "rgba(245, 237, 233, 1)",
                        30: "rgba(235, 223, 215, 1)",
                        40: "rgba(224, 205, 192, 1)",
                        50: "rgba(207, 184, 168, 1)",
                        60: "rgba(188, 162, 144, 1)",
                        70: "rgba(189, 149, 118, 1)",
                        80: "rgba(182, 137, 101, 1)",
                        90: "rgba(159, 118, 90, 1)",
                        100: "rgba(109, 83, 64, 1)",
                        110: "rgba(88, 68, 55, 1)",
                        120: "rgba(69, 54, 45, 1)",
                        130: "rgba(56, 45, 38, 1)",
                        140: "rgba(37, 32, 29, 1)",
                        150: "rgba(28, 24, 22, 1)"
                    }
                },
                o = ["gray", "red", "orange", "yellow", "green", "teal", "blue", "purple", "pink", "brown"]
        }
    }
]);