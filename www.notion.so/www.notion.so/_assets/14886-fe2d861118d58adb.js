"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [14886], {
        9107: (e, t, a) => {
            function o(e) {
                return a(218744).default.getEligibleGroup({
                    experimentId: "special_case_pdf_file_size",
                    defaultGroup: "1073741824"
                })
            }

            function r(e) {
                switch (e) {
                    case "pdf":
                        return a(127201).U;
                    case "markdown":
                    default:
                        return a(822084).pageIcon;
                    case "html":
                        return a(240150).N
                }
            }
            a.d(t, {
                Z: () => r,
                h: () => o
            })
        },
        68796: (e, t, a) => {
            a.d(t, {
                A: () => o
            });
            let o = new(a(510969)).A
        },
        180166: (e, t, a) => {
            a.d(t, {
                Hi: () => c,
                Sb: () => n,
                fF: () => s,
                k2: () => d
            }), a(581454);
            let o = ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.wordprocessingml.template", "application/vnd.ms-word.document.macroEnabled.12", "application/vnd.ms-word.template.macroEnabled.12", ".docx", ".dotx", ".docm", ".dotm"],
                r = ["text/plain", "text/markdown", "text/x-markdown", ".md", ".mdown", ".markdown", ".mkdn", ".mkd", ".Rmd", ".md.txt", ".txt"],
                i = ["text/html", ".html", ".htm"],
                d = {
                    markdown: r,
                    csv: ["text/plain", ".csv"],
                    html: i,
                    docx: o,
                    googleDocs: o,
                    dropbox: o,
                    quip: [...i, ...r],
                    workflowy: ["text/plain"],
                    confluence: ["application/zip", ".zip"],
                    genericImporter: ["application/zip", ".zip"],
                    pdf: ["application/pdf", ".pdf"]
                },
                s = Object.keys(d);

            function n(e) {
                return "markdown" === e || "csv" === e || "html" === e || "docx" === e || "googleDocs" === e || "dropbox" === e || "quip" === e || "workflowy" === e || "confluence" === e || "genericImporter" === e || "pdf" === e || !1
            }

            function c(e, t) {
                if (!n(t)) return e.toLowerCase() === t.toLowerCase();
                let a = d[t].flat().map(e => e.toLowerCase()),
                    o = `.${e.toLowerCase()}`;
                return a.includes(o) || a.includes(e)
            }
        },
        194050: (e, t, a) => {
            a.d(t, {
                mD: () => x,
                n3: () => F,
                Od: () => z,
                U7: () => k,
                lD: () => A,
                ZB: () => P,
                lF: () => Q,
                P7: () => D,
                MW: () => E,
                un: () => T,
                DZ: () => S,
                BA: () => C
            }), a(16280), a(944114), a(898992), a(354520), a(803949), a(581454), a(737550);
            var o = () => a(104310);
            let r = (0, a(109939).YK)({
                    upload_file_size_exceeded: {
                        id: "confluenceImportErrors.uploadFileSizeExceeded.message",
                        defaultMessage: "Import file cannot exceed {maxSize}."
                    },
                    failed_to_extract_zip: {
                        id: "confluenceImportErrors.failedToExtractZip.message",
                        defaultMessage: "Unable to extract ZIP file. ZIP is not in Confluence export format. Please re-export and try again."
                    },
                    no_index_html_file: {
                        id: "confluenceImportErrors.noIndexHtmlFile.message",
                        defaultMessage: "This file doesn’t appear to be a valid Confluence HTML export. When exporting from Confluence, make sure to select HTML format, then try again."
                    },
                    index_html_missing_available_pages: {
                        id: "confluenceImportErrors.indexHtmlMissingAvailablePages.message",
                        defaultMessage: "Your import failed because the index page doesn’t list any available pages. Please check your file and retry."
                    },
                    no_confluence_id_in_page_link: {
                        id: "confluenceImportErrors.noConfluenceIdInPageLink.message",
                        defaultMessage: "Your import failed because we couldn’t find a Confluence ID on the index page. Please check your file and retry."
                    },
                    failed_to_find_element: {
                        id: "confluenceImportErrors.failedToFindElement.message",
                        defaultMessage: "Failed to parse upload."
                    },
                    found_element_is_incorrect_type: {
                        id: "confluenceImportErrors.foundElementIsIncorrectType.message",
                        defaultMessage: "Failed to parse upload."
                    },
                    buffer_upload_failed: {
                        id: "confluenceImportErrors.bufferUploadFailed.message",
                        defaultMessage: "Failed to upload attachment from buffer."
                    },
                    attachment_not_found: {
                        id: "confluenceImportErrors.attachmentNotFound.message",
                        defaultMessage: "Failed to find attachment in ZIP file."
                    },
                    attachment_upload_failed: {
                        id: "confluenceImportErrors.attachmentUploadFailed.message",
                        defaultMessage: "Failed to upload attachment from file."
                    },
                    failed_to_build_page: {
                        id: "confluenceImportErrors.failedToBuildPage.message",
                        defaultMessage: "Failed to import page."
                    },
                    macro_processing_failed: {
                        id: "confluenceImportErrors.macroProcessingFailed.message",
                        defaultMessage: "Failed to process macro."
                    },
                    page_size_exceeded: {
                        id: "confluenceImportErrors.pageSizeExceeded.message",
                        defaultMessage: "Page skipped due to size limit."
                    },
                    api_error: {
                        id: "confluenceImportErrors.apiError.message",
                        defaultMessage: "Failed to fetch data from api."
                    },
                    invalid_site_url_format: {
                        id: "confluenceImportErrors.invalidSiteUrlFormat.message",
                        defaultMessage: "Please enter a valid site URL. Example: https://example.com"
                    },
                    invalid_file_extension: {
                        id: "confluenceImportErrors.invalidFileExtension.message",
                        defaultMessage: "Your import failed because the file doesn’t have a .html extension. Please use an .html file and try again."
                    },
                    incorrect_file_type: {
                        id: "confluenceImportErrors.incorrectFileType.message",
                        defaultMessage: "Invalid file type. Please upload the zip exported from Confluence."
                    },
                    confluence_import_concurrency_limit: {
                        id: "confluenceImportErrors.confluenceImportConcurrencyLimit.message",
                        defaultMessage: "A Confluence import is already in progress for this workspace. Please wait for it to complete before starting a new import."
                    }
                }),
                i = (0, a(109939).YK)({
                    file_size_exceeded: {
                        id: "importActions.fileImportFailedError.customSizeTooLarge.message",
                        defaultMessage: "File is too large. Please upload a file smaller than {maxSize}"
                    },
                    row_limit_exceeded: {
                        id: "row_limit_exceeded",
                        defaultMessage: "Row limit cannot exceed {maxRows}"
                    },
                    column_limit_exceeded: {
                        id: "column_limit_exceeded",
                        defaultMessage: "Column limit cannot exceed {maxColumns}"
                    }
                }),
                d = (0, a(109939).YK)({
                    upload_file_size_exceeded: {
                        id: "zipImportErrors.uploadFileSizeExceeded.message",
                        defaultMessage: "Import file cannot exceed {maxSize}."
                    },
                    invalid_signed_token: {
                        id: "zipImportErrors.invalidSignedToken.message",
                        defaultMessage: "The upload link is invalid or expired. Please try uploading again."
                    },
                    failed_to_download_zip: {
                        id: "zipImportErrors.failedToDownloadZip.message",
                        defaultMessage: "Failed to download the ZIP file. Please try again or contact support if the issue persists."
                    },
                    failed_to_extract_metadata: {
                        id: "zipImportErrors.failedToExtractMetadata.message",
                        defaultMessage: "Failed to read the ZIP file metadata. The file may be corrupted. Please try uploading again."
                    },
                    failed_to_extract_zip: {
                        id: "zipImportErrors.failedToExtractZip.message",
                        defaultMessage: "Unable to extract ZIP file. The file may be corrupted or in an invalid format. Please try uploading again."
                    },
                    failed_to_process_page: {
                        id: "zipImportErrors.failedToProcessPage.message",
                        defaultMessage: "Failed to import page. Please try again."
                    },
                    failed_to_process_attachment: {
                        id: "zipImportErrors.failedToProcessAttachment.message",
                        defaultMessage: "Failed to process attachment."
                    },
                    failed_to_process_logger_page: {
                        id: "zipImportErrors.failedToProcessLoggerPage.message",
                        defaultMessage: "Failed to process import log page."
                    },
                    invalid_s3_operation: {
                        id: "zipImportErrors.invalidS3Operation.message",
                        defaultMessage: "Failed to access storage. Please try again or contact support if the issue persists."
                    },
                    invalid_zip_format: {
                        id: "zipImportErrors.invalidZipFormat.message",
                        defaultMessage: "The uploaded file is not a valid ZIP file. Please upload a valid ZIP file and try again."
                    },
                    feature_disabled: {
                        id: "zipImportErrors.featureDisabled.message",
                        defaultMessage: "ZIP import is not available for this workspace. Please contact support for more information."
                    },
                    validation_error: {
                        id: "zipImportErrors.validationError.message",
                        defaultMessage: "Failed to validate the uploaded file. Please try again."
                    },
                    zip_file_count_exceeded: {
                        id: "zipImportErrors.zipFileCountExceeded.message",
                        defaultMessage: "Maximum file count in zip exceeded. Limit is {maxCount}."
                    },
                    root_page_not_found: {
                        id: "zipImportErrors.rootPageNotFound.message",
                        defaultMessage: "The destination page could not be found. Please try importing again."
                    },
                    page_not_found: {
                        id: "zipImportErrors.pageNotFound.message",
                        defaultMessage: "A required page could not be found. The import may be incomplete."
                    },
                    invalid_parent_block: {
                        id: "zipImportErrors.invalidParentBlock.message",
                        defaultMessage: "Invalid parent page structure. The import may be incomplete."
                    },
                    invalid_parent_table: {
                        id: "zipImportErrors.invalidParentTable.message",
                        defaultMessage: "Cannot import database into this location. Please choose a different destination page."
                    },
                    failed_to_create_zip: {
                        id: "zipImportErrors.failedToCreateZip.message",
                        defaultMessage: "Failed to create ZIP partition. Please try again."
                    },
                    empty_zip_file: {
                        id: "zipImportErrors.emptyZipFile.message",
                        defaultMessage: "The ZIP file is empty or contains no importable content."
                    }
                });
            var s = () => a(218744),
                n = () => a(962299),
                c = () => a(647095),
                l = () => a(101787),
                p = () => a(92513),
                m = () => a(832375),
                f = () => a(161179),
                u = () => a(540234);
            let g = (0, a(477465).Dv)("importGoogleDoc");
            var I = () => a(379731);
            let b = (0, a(477465).Dv)("partitionedUniversalImport");
            var v = () => a(563126),
                h = () => a(262058),
                w = () => a(259242),
                _ = () => a(818646),
                y = () => a(227947),
                R = () => a(377796),
                M = () => a(691968);
            let S = (0, a(109939).YK)({
                uploadingOneFile: {
                    id: "importActions.uploadingOneFile.loadingMessage",
                    defaultMessage: "Uploading… ({percentComplete}%)"
                },
                uploadingMultipleFilesNotStarted: {
                    id: "importActions.uploadingMultipleFilesNotStarted.loadingMessage",
                    defaultMessage: "Uploaded 0 of {totalNumberOfFiles}"
                },
                uploadingMultipleFilesInProgress: {
                    id: "importActions.uploadingMultipleFilesInProgress.loadingMessage",
                    defaultMessage: "Uploaded {numberOfUploadedFiles} of {totalNumberOfFiles}"
                },
                uploadingMultipleFilesComplete: {
                    id: "importActions.uploadingMultipleFilesComplete.loadingMessage",
                    defaultMessage: "Uploaded {totalNumberOfFiles} of {totalNumberOfFiles}"
                },
                importingOneFile: {
                    id: "importActions.importingOneFile.loadingMessage",
                    defaultMessage: "Importing…"
                },
                importingMultipleFilesNotStarted: {
                    id: "importActions.importingMultipleFilesNotStarted.loadingMessage",
                    defaultMessage: "Imported 0 of {totalNumberOfFiles}"
                },
                importingMultipleFilesInProgress: {
                    id: "importActions.importingMultipleFilesInProgress.loadingMessage",
                    defaultMessage: "Imported {numberOfImportedFiles} of {totalNumberOfFiles}"
                },
                importingMultipleFilesComplete: {
                    id: "importActions.importingMultipleFilesComplete.loadingMessage",
                    defaultMessage: "Imported {totalNumberOfFiles} of {totalNumberOfFiles}"
                },
                importingFromTrelloMessage: {
                    id: "importActions.importingFromTrello.loadingMessage",
                    defaultMessage: "{importingCount, plural, one {Importing {importingCount} board from Trello} other {Importing {importingCount} boards from Trello}}"
                },
                importingFromAsanaMessage: {
                    id: "importActions.importingFromAsana.loadingMessage",
                    defaultMessage: "{importingCount, plural, one {Importing {importingCount} project from Asana} other {Importing {importingCount} projects from Asana}}"
                },
                importingFromEvernoteMessage: {
                    id: "importActions.importingFromEvernote.loadingMessage",
                    defaultMessage: "{importingCount, plural, one {Importing {importingCount} notebook from Evernote} other {Importing {importingCount} notebooks from Evernote}}"
                },
                importingFromConfluenceViaAPIMessage: {
                    id: "importActions.importingFromConfluenceViaAPI.loadingMessage",
                    defaultMessage: "Importing confluence space: {confluenceSpaceKey}."
                },
                importFailed: {
                    id: "importActions.importFailedError.message",
                    defaultMessage: "Import failed"
                },
                importFailedWithError: {
                    id: "importActions.importFailedWithError.message",
                    defaultMessage: "Import failed: {error}"
                },
                fileImportFailedSizeTooLarge: {
                    id: "importActions.fileImportFailedError.sizeTooLarge.message",
                    defaultMessage: "Import failed: file exceeds 5MB."
                },
                fileImportFailedCustomSizeTooLarge: {
                    id: "importActions.fileImportFailedError.customSizeTooLarge.message",
                    defaultMessage: "File is too large. Please upload a file smaller than {maxSize}"
                },
                trelloImportFailed: {
                    id: "importActions.trelloImportFailedError.message",
                    defaultMessage: "Trello import failed."
                },
                asanaImportFailed: {
                    id: "importActions.asanaImportFailedError.message",
                    defaultMessage: "Asana import failed."
                },
                evernoteImportFailed: {
                    id: "importActions.evernoteImportFailedError.message",
                    defaultMessage: "Evernote import failed."
                },
                confluenceImportViaAPIFailed: {
                    id: "importActions.confluenceImportViaAPIFailedError.message",
                    defaultMessage: "Confluence space import failed."
                },
                confluenceImportAlreadyRunning: {
                    id: "importActions.confluenceImportAlreadyRunning.message",
                    defaultMessage: "A Confluence import is already in progress for this workspace. Please wait for it to complete before starting a new import."
                },
                confluenceMultiSpaceImportRunning: {
                    id: "importActions.confluenceMultiSpaceImportRunning.message",
                    defaultMessage: "A multi-space Confluence import is already in progress. Please wait for it to complete."
                },
                confluenceCannotStartMultiSpaceWhileOthersRunning: {
                    id: "importActions.confluenceCannotStartMultiSpaceWhileOthersRunning.message",
                    defaultMessage: "Cannot start a multi-space import while other Confluence imports are running. Please wait for them to complete."
                },
                confluenceMaxConcurrentImportsReached: {
                    id: "importActions.confluenceMaxConcurrentImportsReached.message",
                    defaultMessage: "Maximum of 3 concurrent Confluence imports allowed per workspace. Please wait for one to complete."
                },
                importTitle: {
                    id: "importActions.importTitle",
                    defaultMessage: "Import {date}"
                },
                importTitleWithImportName: {
                    id: "importActions.importTitleWithImportName",
                    defaultMessage: "{name}"
                },
                importTitleForGenericFileImporter: {
                    id: "importActions.importTitleForGenericFileImporter",
                    defaultMessage: "{fileName} Import {date}"
                },
                importTitleForMondayV2: {
                    id: "importActions.importTitleForMondayV2",
                    defaultMessage: "Import from Monday - {date}"
                },
                onlyDocxExtensionSupported: {
                    id: "importErrors.onlyDocxExtensionSupported.message",
                    defaultMessage: "Import failed: file type not supported."
                },
                csvImportFailedColumnsTooLarge: {
                    id: "importActions.csvImportFailedColumnsTooLargeError.message",
                    defaultMessage: "Import failed: CSV file has too many columns."
                },
                csvImportFailedRowsTooLarge: {
                    id: "importActions.csvImportFailedRowsTooLargeError.message",
                    defaultMessage: "Your file has too many rows. The maximum allowed is 100000"
                },
                xlsxImportFailedColumnsTooLarge: {
                    id: "importActions.xlsxImportFailedColumnsTooLargeError.message",
                    defaultMessage: "Import failed: XLSX file has too many columns."
                },
                xlsxImportFailedRowsTooLarge: {
                    id: "importActions.xlsxImportFailedRowsTooLargeError.message",
                    defaultMessage: "Import failed: XLSX file has too many rows."
                }
            });
            async function T(e) {
                let {
                    uploadType: t,
                    allowMultiple: o
                } = e, r = await a(385475).dA({
                    environment: e.environment,
                    supportsMobileNativeFileUpload: !1,
                    multiple: o ? ? !0,
                    accept: a(180166).k2[t].join(",")
                });
                return A(e, r)
            }
            async function A(e, t) {
                let o, {
                        environment: g,
                        pageStore: T,
                        spaceStore: A,
                        isTeamPage: P,
                        spaceViewStore: E,
                        uploadType: k,
                        flowId: z,
                        analyticsFrom: Q
                    } = e,
                    D = !1;
                try {
                    if (0 === t.length) return;
                    D = s().default.checkGate({
                        gateName: "zip_importer_v2_enabled"
                    });
                    let e = 1 === t.length,
                        r = performance.now(),
                        i = {};
                    if ("confluence" === k) {
                        let o = 0x40000000 * (Number((0, a(242947).xc)(g)) || 15);
                        if (!e) throw new(l()).yI4("Multiple files not supported", {
                            clientData: {
                                type: "multiple_files_not_supported"
                            }
                        });
                        if (t[0].size > o) throw M()._$({
                            import_source: "confluence",
                            data: {
                                import_type: "file",
                                status: "failure",
                                error: "Maximum upload size exceeded",
                                fileSize: t[0].size
                            },
                            flowId: z
                        }), new(l()).ico("Maximum upload size exceeded", {
                            clientData: {
                                type: "upload_file_size_exceeded",
                                messageValues: {
                                    maxSize: a(700369).z3(o, {
                                        decimals: 1
                                    })
                                }
                            }
                        })
                    } else if ("genericImporter" === k) {
                        let o = (0, a(235704).qr)(g) || 15;
                        if (!e) throw new(l()).yI4("Multiple files not supported", {
                            clientData: {
                                type: "multiple_files_not_supported"
                            }
                        });
                        if (t[0].size > 0x40000000 * o) throw M()._$({
                            import_source: "file",
                            data: {
                                import_type: "file",
                                status: "failure",
                                error: "Maximum upload size exceeded",
                                fileSize: t[0].size
                            },
                            flowId: z
                        }), new(l()).yI4("Maximum upload size exceeded", {
                            clientData: {
                                type: "upload_file_size_exceeded",
                                messageValues: {
                                    maxSize: `${o} GB`
                                }
                            }
                        })
                    } else if ("pdf" === k) {
                        let e = Number((0, a(9107).h)(g));
                        for (let a of t)
                            if (a.size > e) throw M()._$({
                                import_source: "file",
                                data: {
                                    import_type: "file",
                                    status: "failure",
                                    error: "Maximum upload size exceeded",
                                    fileSize: a.size
                                },
                                flowId: z
                            }), new(l()).yI4("Maximum upload size exceeded", {
                                clientData: {
                                    type: "upload_file_size_exceeded",
                                    messageValues: {
                                        maxSize: `${e} GB`
                                    }
                                }
                            })
                    }
                    let d = await new Promise((o, r) => {
                            a(385475).Zn({
                                environment: g,
                                uploadType: k,
                                files: t,
                                bucket: "temporary",
                                bypassFreeFileUploadLimitCheck: !0,
                                flowId: z,
                                spaceId: A.id,
                                onBatchStart: () => {
                                    h().m({
                                        message: e ? S.uploadingOneFile : S.uploadingMultipleFilesNotStarted,
                                        interpolatedValues: {
                                            totalNumberOfFiles: t.length,
                                            percentComplete: 0
                                        }
                                    })
                                },
                                onBatchProgress: ({
                                    uploadedFiles: a,
                                    progressPercent: o
                                }) => {
                                    h().m({
                                        message: e ? S.uploadingOneFile : S.uploadingMultipleFilesInProgress,
                                        interpolatedValues: {
                                            numberOfUploadedFiles: a,
                                            totalNumberOfFiles: t.length,
                                            percentComplete: o
                                        }
                                    })
                                },
                                onBatchCompleteWithToken: a => {
                                    h().m({
                                        message: e ? S.uploadingOneFile : S.uploadingMultipleFilesComplete,
                                        interpolatedValues: {
                                            totalNumberOfFiles: t.length,
                                            percentComplete: 100
                                        }
                                    }), o(a)
                                },
                                onBatchError: r
                            })
                        }),
                        n = performance.now();
                    i.uploadTimeTaken = n - r;
                    let c = "slash_command" === Q && !["googleDocs", "confluence", "genericImporter"].includes(k),
                        f = await F({
                            environment: g,
                            spaceStore: A,
                            spaceViewStore: E,
                            uploadType: k,
                            fileCount: (null == t ? void 0 : t.length) ? ? 0,
                            fileName: null == t ? void 0 : t[0].name,
                            pageStore: T,
                            isTeamPage: P,
                            importAsSubPage: c
                        });
                    o = f.createdPage;
                    let _ = f.importType,
                        R = f.pageId,
                        N = d.map((e, a) => ({
                            fileURL: e.fileUrl,
                            fileName: t[a].name,
                            signedToken: e.signedToken
                        })),
                        L = s().default.checkGate({
                            gateName: "csvimport_faster_navigate_to_page_enabled"
                        }),
                        U = 0;
                    h().m({
                        message: e ? S.importingOneFile : S.importingMultipleFilesInProgress,
                        interpolatedValues: {
                            numberOfImportedFiles: U,
                            totalNumberOfFiles: t.length
                        }
                    });
                    let V = (0, a(714350).P)();
                    if (L && ("ReplaceBlock" === _ || "AppendToBlock" === _) && "csv" === k) {
                        let e = a(970831).B.createChildStore(A, {
                                table: m().evP,
                                id: R
                            }),
                            t = (0, a(483227).Ay)({
                                store: e,
                                preferPublicLink: !1,
                                pageVisitSource: a(254656).y8.Import
                            });
                        (0, a(857400).navigateOnBaseUrl)({
                            environment: g,
                            url: t
                        })
                    }
                    let O = a(175448).R.getOrCreateImportId();
                    for (let {
                            fileURL: a,
                            fileName: o,
                            signedToken: r
                        } of N) {
                        let d = p().JW();
                        if ("confluence" === k) {
                            M()._$({
                                import_source: "confluence",
                                data: {
                                    import_type: "file",
                                    status: "success",
                                    fileSize: t[0].size
                                },
                                flowId: z
                            });
                            let e = x({
                                environment: g,
                                spaceStore: A,
                                spaceViewStore: E
                            });
                            await e.deferred.promise;
                            let i = e.pageId;
                            for await (let e of (M().Pd({
                                import_source: "confluence",
                                import_type: "file",
                                flowId: z
                            }), w().UT({
                                environment: g,
                                eventName: I().S,
                                request: {
                                    fileURL: a,
                                    fileName: o,
                                    page: {
                                        id: R,
                                        spaceId: A.id
                                    },
                                    loggerPageId: i,
                                    flowId: z || p().JW(),
                                    importId: O,
                                    signedToken: r
                                },
                                multiCellRouting: {
                                    spaceIds: [A.id]
                                }
                            }))) {
                                if (e.error) throw e.error;
                                e.value && !e.value.isComplete && h().m(e.value.status)
                            }
                        } else if ("AppendToBlock" === _) {
                            let e, t = {
                                fileURL: a,
                                fileName: o,
                                importType: _,
                                block: {
                                    id: R,
                                    spaceId: f.spaceId
                                },
                                spaceId: f.spaceId,
                                flowId: z,
                                userTimeZone: V,
                                signedToken: r,
                                importEntryPoint: Q,
                                importId: O,
                                importInstanceId: d
                            };
                            M().mM({
                                import_source: "genericImporter" === k ? "universal" : k,
                                data: t,
                                flowId: z
                            });
                            let c = s().default.checkGate({
                                    gateName: "partitioned_universal_importer"
                                }),
                                l = o.toLowerCase().endsWith(".zip"),
                                p = {
                                    fileURL: a,
                                    fileName: o,
                                    importType: "ReplaceBlock",
                                    spaceId: f.spaceId,
                                    rootId: R,
                                    userTimeZone: V,
                                    signedToken: r,
                                    importId: O,
                                    importInstanceId: d
                                };
                            if (D && "genericImporter" === k && l) {
                                let t = x({
                                    environment: g,
                                    spaceStore: A,
                                    spaceViewStore: E
                                });
                                await t.deferred.promise, e = t.pageId
                            }
                            let I = {
                                fileURL: a,
                                fileName: o,
                                spaceId: f.spaceId,
                                rootPageId: R,
                                rootTableId: m().evP,
                                loggerPageId: e,
                                signedToken: r,
                                importId: O,
                                importInstanceId: d,
                                flowId: z,
                                userTimeZone: V,
                                importEntryPoint: Q
                            };
                            M().Pd({
                                import_source: "genericImporter" === k ? "universal" : k,
                                flowId: z,
                                import_instance_id: d
                            });
                            let S = D && "genericImporter" === k && l ? w().UT({
                                    environment: g,
                                    eventName: v().Z,
                                    request: I,
                                    multiCellRouting: {
                                        spaceIds: [f.spaceId]
                                    }
                                }) : "genericImporter" === k && c ? w().UT({
                                    environment: g,
                                    eventName: b,
                                    request: p,
                                    multiCellRouting: {
                                        spaceIds: [f.spaceId]
                                    }
                                }) : w().UT({
                                    environment: g,
                                    eventName: u().V,
                                    request: t,
                                    multiCellRouting: {
                                        spaceIds: [f.spaceId]
                                    }
                                }),
                                T = !1;
                            for await (let e of S) {
                                if (e.error) throw e.error;
                                D && "genericImporter" === k && l && e.value && "isComplete" in e.value && !e.value.isComplete && h().m(e.value.status), L && "csv" === k && "status" in e.value && "created_collection" === e.value.status.message && !T && (T = !0, h().V(), y().A.reset(), i.importingSpinnerSpan || = performance.now() - n)
                            }
                        } else if ("ReplaceBlock" === _) {
                            let e, t = {
                                fileURL: a,
                                fileName: o,
                                importType: _,
                                block: {
                                    id: R,
                                    spaceId: f.spaceId
                                },
                                flowId: z,
                                importId: O,
                                spaceId: f.spaceId,
                                userTimeZone: V,
                                signedToken: r,
                                importEntryPoint: Q,
                                importInstanceId: d
                            };
                            M().mM({
                                import_source: "genericImporter" === k ? "universal" : k,
                                data: t,
                                flowId: z
                            }), M().Pd({
                                import_source: "genericImporter" === k ? "universal" : k,
                                flowId: z,
                                import_instance_id: d
                            });
                            let c = s().default.checkGate({
                                    gateName: "partitioned_universal_importer"
                                }),
                                l = s().default.checkGate({
                                    gateName: "zip_importer_v2_enabled"
                                }),
                                p = o.toLowerCase().endsWith(".zip");
                            if (l && "genericImporter" === k && p) {
                                let t = x({
                                    environment: g,
                                    spaceStore: A,
                                    spaceViewStore: E
                                });
                                await t.deferred.promise, e = t.pageId
                            }
                            let I = {
                                    fileURL: a,
                                    fileName: o,
                                    importType: "ReplaceBlock",
                                    spaceId: f.spaceId,
                                    rootId: R,
                                    userTimeZone: V,
                                    signedToken: r,
                                    importId: O,
                                    importInstanceId: d
                                },
                                S = {
                                    fileURL: a,
                                    fileName: o,
                                    spaceId: f.spaceId,
                                    rootPageId: R,
                                    rootTableId: m().evP,
                                    signedToken: r,
                                    importInstanceId: d,
                                    importId: O,
                                    flowId: z,
                                    userTimeZone: V,
                                    importEntryPoint: Q,
                                    loggerPageId: e
                                },
                                T = l && "genericImporter" === k && p ? w().UT({
                                    environment: g,
                                    eventName: v().Z,
                                    request: S,
                                    multiCellRouting: {
                                        spaceIds: [f.spaceId]
                                    }
                                }) : "genericImporter" === k && c ? w().UT({
                                    environment: g,
                                    eventName: b,
                                    request: I,
                                    multiCellRouting: {
                                        spaceIds: [f.spaceId]
                                    }
                                }) : w().UT({
                                    environment: g,
                                    eventName: u().V,
                                    request: t,
                                    multiCellRouting: {
                                        spaceIds: [f.spaceId]
                                    }
                                }),
                                C = !1;
                            for await (let e of T) {
                                if (e.error) throw e.error;
                                l && "genericImporter" === k && p && e.value && "isComplete" in e.value && !e.value.isComplete && h().m(e.value.status), L && "csv" === k && "status" in e.value && "created_collection" === e.value.status.message && !C && (C = !0, h().V(), y().A.reset(), i.importingSpinnerSpan || = performance.now() - n)
                            }
                        }
                        U++, L && "csv" === k || h().m({
                            message: e ? S.importingOneFile : S.importingMultipleFilesInProgress,
                            interpolatedValues: {
                                numberOfImportedFiles: U,
                                totalNumberOfFiles: t.length
                            }
                        })
                    }
                    return h().V(), i.overallTimeTaken = performance.now() - r, C(g, {
                        uploadType: k,
                        importType: _,
                        importLatencies: i,
                        fileNames: t.map(e => e.name)
                    }), a(970831).B.createChildStore(A, {
                        table: m().evP,
                        id: R
                    })
                } catch (p) {
                    var N, L, U;
                    let e;
                    a(773352).log({
                        level: "error",
                        from: "importFiles",
                        type: "importFilesFailure",
                        error: (0, a(416607).convertErrorToLog)(p),
                        data: {
                            spaceId: A.id
                        }
                    }), h().V(), (0, R().createAndCommit)({
                        userAction: "importActions.importFiles",
                        environment: g,
                        cellTarget: {
                            spaceWithId: A.id
                        },
                        canUndo: !0,
                        perform: e => {
                            o && (0, _().T)({
                                parentStore: A.getPagesStore(),
                                childToRemoveStore: o,
                                transaction: e
                            })
                        }
                    });
                    let t = null,
                        s = null;
                    if (p instanceof l().mvP && p.clientData ? (t = p.clientData, i[p.clientData.type] && "ImportFileSizeTooLargeError" === (0, f().A)(p).message) ? s = i[p.clientData.type] : a(713834).m[p.clientData.type] && "CsvImportError" === (0, f().A)(p).message ? s = a(713834).m[p.clientData.type] : r[p.clientData.type] ? s = r[p.clientData.type] : ("importerType" in (U = p.clientData) && "zip" === U.importerType ? 0 : 1) || !D ? a(194314)._[p.clientData.type] && (s = a(194314)._[p.clientData.type]) : s = d[p.clientData.type] : p instanceof l().ico && (null == (N = p.body) || null == (N = N.clientData) ? void 0 : N.type) === "upload_file_size_exceeded" && r[p.body.clientData.type] ? s = r[(t = p.body.clientData).type] : p instanceof a(310362).C ? (t = {
                            messageValues: {
                                error: "You've reached the maximum number of file uploads for a 12-hour period. We suggest uploading a ZIP file that includes all your files."
                            }
                        }, s = S.importFailedWithError) : p instanceof l().yI4 && (null == (L = p.body) || null == (L = L.clientData) ? void 0 : L.type) === "upload_file_size_exceeded" && (t = p.body.clientData, s = a(194314)._[p.body.clientData.type]), t && s) {
                        let a = "messageValues" in t ? t.messageValues : void 0;
                        e = n().A.formatMessage(s, a)
                    } else e = t && "code" in t && ("fileImportError" === t.code || "confluenceImportError" === t.code || "zipImportError" === t.code) ? n().A.formatMessage(S.importFailedWithError, {
                        error: (0, f().A)(p).message
                    }) : "ImportFileSizeTooLargeError" === (0, f().A)(p).message ? n().A.formatMessage(S.fileImportFailedSizeTooLarge) : "ImportcsvTooManyColumns" === (0, f().A)(p).message ? n().A.formatMessage(S.csvImportFailedColumnsTooLarge) : "ImportcsvTooManyRows" === (0, f().A)(p).message ? n().A.formatMessage(S.csvImportFailedRowsTooLarge) : "ImportxlsxTooManyColumns" === (0, f().A)(p).message ? n().A.formatMessage(S.xlsxImportFailedColumnsTooLarge) : "ImportxlsxTooManyRows" === (0, f().A)(p).message ? n().A.formatMessage(S.xlsxImportFailedRowsTooLarge) : n().A.formatMessage(S.importFailed);
                    throw c().f1(e), p
                }
            }

            function C(e, t) {
                let {
                    uploadType: r,
                    importType: i,
                    importLatencies: d,
                    fileNames: s
                } = t;
                if (("ReplaceBlock" === i || "AppendToBlock" === i) && "csv" === r) {
                    let e = d.uploadTimeTaken,
                        t = d.importingSpinnerSpan,
                        a = t && e ? t + e : d.overallTimeTaken;
                    d.firstTimeNavigateToCollection = a
                }
                for (let [e, t] of (a(773352).log({
                        level: "info",
                        from: "importActions",
                        type: "importFiles",
                        data: {
                            miscDataToConvertToString: {
                                fileNames: s,
                                importLatencies: d,
                                uploadType: r,
                                importType: i
                            },
                            message: "Finished importing file"
                        }
                    }), Object.entries(d)))(0, o().u)({
                    event: {
                        eventName: "import_file_finished",
                        eventProperties: {
                            importUploadType: r,
                            importType: i,
                            importLatency: t,
                            importSource: "file",
                            importLatencyType: e,
                            importFileCount: s.length
                        }
                    }
                })
            }
            async function F(e) {
                var t;
                let o, r, i, {
                        environment: d,
                        spaceStore: s,
                        spaceViewStore: c,
                        uploadType: l,
                        fileCount: p,
                        fileName: f,
                        pageStore: u,
                        isTeamPage: g,
                        importAsSubPage: I,
                        importLocation: b
                    } = e,
                    v = s.id;
                if (a(475097).default.isSidePeekOpen() && a(475097).default.peekTargetStore.state && I) r = a(475097).default.peekTargetStore.state.id, i = "AppendToBlock";
                else if (a(475097).default.isSidePeekOpen() && null != (t = a(475097).default.peekTargetStore.state) && t.isEmptyPage()) r = a(475097).default.peekTargetStore.state.id, i = "ReplaceBlock";
                else if (u && (u.isEmptyPage() || I)) p > 1 || u.isInsideCollection() || I ? (r = u.id, i = "AppendToBlock") : (r = u.id, i = "ReplaceBlock");
                else {
                    let e, t, u;
                    b ? "privatePage" === b.type ? (e = "private", t = !0) : "block" === b.type ? (e = b.pointer, t = !0) : (e = "none", t = !1, u = new(a(681735)).h(d, {
                        table: m().yKj,
                        id: b.teamId,
                        spaceId: s.id
                    })) : (e = g ? "none" : "private", t = !g);
                    let I = {
                        date: (0, a(850640).W_)(Date.now(), "medium", a(849917).locale)
                    };
                    "genericImporter" === l && (I.fileName = f ? f.replace(".zip", "") : "Universal File");
                    let {
                        performResult: h
                    } = (0, R().createAndCommit)({
                        userAction: "importActions.result",
                        environment: d,
                        cellTarget: {
                            spaceWithId: s.id
                        },
                        canUndo: !0,
                        perform: o => {
                            let r = n().A.formatMessage("genericImporter" === l ? S.importTitleForGenericFileImporter : S.importTitle, I),
                                i = a(964232).IT({
                                    environment: d,
                                    spaceStore: s,
                                    spaceViewStore: c,
                                    parent: e,
                                    prepend: t,
                                    title: r,
                                    transaction: o
                                });
                            u && a(89739).sP({
                                teamStore: u,
                                store: i,
                                transaction: o,
                                location: {
                                    type: t ? "prepend" : "append"
                                }
                            });
                            let m = a(975162).yX();
                            return o.postSubmitCallbacks.push(e => {
                                e ? m.reject(e) : m.resolve(void 0)
                            }), {
                                deferred: m,
                                createdPage: i,
                                pageId: i.id,
                                importType: p > 1 ? "AppendToBlock" : "ReplaceBlock",
                                spaceId: i.getSpaceId()
                            }
                        }
                    });
                    o = h.createdPage, r = h.pageId, i = h.importType, v = h.spaceId, await h.deferred.promise
                }
                return {
                    createdPage: o,
                    pageId: r,
                    importType: i,
                    spaceId: v
                }
            }
            async function P(e) {
                let t, {
                    environment: o,
                    fileId: r,
                    fileName: i,
                    token: d,
                    spaceStore: s,
                    spaceViewStore: p,
                    pageStore: u,
                    analyticsFrom: I,
                    flowId: b
                } = e;
                try {
                    h().m({
                        message: S.importingOneFile
                    });
                    let e = await F({
                        environment: o,
                        spaceStore: s,
                        spaceViewStore: p,
                        uploadType: "googleDocs",
                        fileCount: 1,
                        fileName: void 0,
                        pageStore: u,
                        isTeamPage: !1,
                        importAsSubPage: "link_paste" === I || "slash_command" === I
                    });
                    t = e.createdPage;
                    let n = e.importType,
                        c = e.pageId,
                        l = {
                            fileId: r,
                            fileName: i,
                            tokenId: d.id,
                            spaceId: s.id,
                            importType: n,
                            block: {
                                id: c,
                                spaceId: s.id
                            },
                            flowId: b,
                            importId: a(175448).R.getOrCreateImportId()
                        };
                    M().mM({
                        import_source: "googleDocs",
                        data: l,
                        flowId: b
                    }), M().Pd({
                        import_source: "googleDocs",
                        flowId: b
                    });
                    let {
                        value: f
                    } = await w().UT({
                        environment: o,
                        eventName: g,
                        request: l,
                        multiCellRouting: {
                            spaceIds: []
                        }
                    }).next();
                    if (f.error) throw f.error;
                    return h().V(), a(970831).B.createChildStore(s, {
                        table: m().evP,
                        id: c
                    })
                } catch (a) {
                    (0, R().createAndCommit)({
                        userAction: "importActions.importFiles",
                        environment: o,
                        cellTarget: {
                            spaceWithId: s.id
                        },
                        canUndo: !0,
                        perform: e => {
                            t && (0, _().T)({
                                parentStore: s.getPagesStore(),
                                childToRemoveStore: t,
                                transaction: e
                            })
                        }
                    });
                    let e = n().A.formatMessage(S.importFailed);
                    throw a instanceof l().mvP && a.clientData && ("only_docx_extension_supported" === a.clientData.type ? e = n().A.formatMessage(S.onlyDocxExtensionSupported) : "file_size_exceeded" === a.clientData.type && (e = n().A.formatMessage(S.fileImportFailedCustomSizeTooLarge, {
                        maxSize: a.clientData.messageValues.maxSize
                    }))), c().f1(e), h().V(), Error((0, f().A)(a).message)
                }
            }

            function x(e) {
                let {
                    environment: t,
                    spaceStore: o,
                    spaceViewStore: r,
                    append: i,
                    mondayV2: d
                } = e, {
                    performResult: s
                } = (0, R().createAndCommit)({
                    userAction: "importActions.result",
                    environment: t,
                    cellTarget: {
                        spaceWithId: o.id
                    },
                    canUndo: !0,
                    perform: e => {
                        let s = d ? n().A.formatMessage(S.importTitleForMondayV2, {
                                date: (0, a(850640).W_)(Date.now(), "medium", a(849917).locale)
                            }) : n().A.formatMessage(S.importTitle, {
                                date: (0, a(850640).W_)(Date.now(), "medium", a(849917).locale)
                            }),
                            c = a(964232).IT({
                                environment: t,
                                spaceStore: o,
                                spaceViewStore: r,
                                parent: "private",
                                prepend: !i,
                                title: d ? s : `${s} Logs`,
                                transaction: e
                            }),
                            l = a(975162).yX();
                        return e.postSubmitCallbacks.push(e => {
                            e ? l.reject(e) : l.resolve(void 0)
                        }), {
                            deferred: l,
                            pageId: c.id
                        }
                    }
                });
                return s
            }
            async function E(e) {
                let {
                    environment: t,
                    boards: o,
                    spaceStore: r,
                    spaceViewStore: i,
                    flowId: d
                } = e;
                h().m({
                    message: S.importingFromTrelloMessage,
                    interpolatedValues: {
                        importingCount: o.length
                    }
                }), a(381026).A.setState({
                    open: !1
                });
                let {
                    performResult: {
                        deferred: s,
                        pages: p
                    }
                } = (0, R().createAndCommit)({
                    userAction: "importActions.importTrello",
                    environment: t,
                    cellTarget: {
                        spaceWithId: r.id
                    },
                    canUndo: !0,
                    perform: e => {
                        let d = o.map(o => a(964232).IT({
                                environment: t,
                                spaceStore: r,
                                spaceViewStore: i,
                                parent: "private",
                                prepend: !0,
                                loading: !0,
                                title: o.name,
                                transaction: e
                            })),
                            s = a(975162).yX();
                        return e.postSubmitCallbacks.push(e => {
                            e ? s.reject(e) : s.resolve(void 0)
                        }), {
                            deferred: s,
                            pages: d
                        }
                    }
                });
                await s.promise;
                try {
                    return await Promise.all(p.map(async (e, r) => {
                        let i = o[r],
                            {
                                value: s
                            } = await w().UT({
                                environment: t,
                                eventName: a(386126).B,
                                request: {
                                    boardId: i.id,
                                    boardName: i.name,
                                    block: {
                                        id: e.id,
                                        spaceId: (0, a(226221).e)(e.pointer.spaceId)
                                    },
                                    spaceId: e.pointer.spaceId,
                                    importId: a(175448).R.getOrCreateImportId(),
                                    flowId: d
                                },
                                multiCellRouting: {
                                    spaceIds: e.pointer.spaceId ? [e.pointer.spaceId] : []
                                }
                            }).next();
                        if (s.error) throw s.error
                    })), h().V(), p[0]
                } catch (o) {
                    (0, R().createAndCommit)({
                        userAction: "importActions.importTrello",
                        environment: t,
                        cellTarget: {
                            spaceWithId: r.id
                        },
                        canUndo: !0,
                        perform: e => {
                            for (let t of p)(0, _().T)({
                                parentStore: r.getPagesStore(),
                                childToRemoveStore: t,
                                transaction: e
                            })
                        }
                    });
                    let e = n().A.formatMessage(S.trelloImportFailed),
                        a = o instanceof l().lV7 ? o.body.clientData : void 0;
                    throw a && "code" in a && "trelloImportError" === a.code && (e = n().A.formatMessage(S.importFailedWithError, {
                        error: (0, f().A)(o).message
                    })), c().f1(e), h().V(), Error((0, f().A)(o).message)
                }
            }
            async function k(e) {
                let {
                    environment: t,
                    spaceStore: o,
                    spaceViewStore: r,
                    notebooks: i,
                    userSettingsStore: d,
                    flowId: s
                } = e;
                if (0 === i.length) throw Error("Expected at least one notebook");
                h().m({
                    message: S.importingFromEvernoteMessage,
                    interpolatedValues: {
                        importingCount: i.length
                    }
                }), a(68796).A.setState({
                    open: !1
                });
                let l = await L({
                        environment: t,
                        spaceStore: o,
                        spaceViewStore: r,
                        notebooks: i
                    }),
                    p = l[i[0].guid];
                try {
                    return await D({
                        environment: t,
                        waitForNotebookStore: p,
                        notebookMapping: l,
                        notebooks: i,
                        spaceStore: o,
                        spaceViewStore: r,
                        userSettingsStore: d,
                        flowId: s
                    }), h().V(), p
                } catch (e) {
                    throw h().V(), c().f1(n().A.formatMessage(S.evernoteImportFailed)), e
                }
            }
            async function z(e) {
                let t, {
                    environment: o,
                    spaceStore: r,
                    spaceViewStore: i,
                    space: d,
                    flowId: s
                } = e;
                if (!o.currentUser.id) throw Error("User does not exist.");
                let p = await (0, a(242947).h7)(o, r.id);
                if (!p.canStart) throw new(l()).yI4("Confluence import blocked", {
                    clientData: {
                        type: "confluence_import_concurrency_limit",
                        reasonKey: p.reason ? ? "maxConcurrentImportsReached"
                    }
                });
                h().m({
                    message: S.importingFromConfluenceViaAPIMessage,
                    interpolatedValues: {
                        confluenceSpaceKey: d.name
                    }
                }), a(372034).A.setState({
                    open: !1
                });
                let m = x({
                    environment: o,
                    spaceStore: r,
                    spaceViewStore: i
                });
                await m.deferred.promise;
                let u = m.pageId;
                if ((0, a(242947).vY)(o)) {
                    let e = await o.api.callApi({
                        eventName: "createTeam",
                        environment: o,
                        data: {
                            spaceId: r.id,
                            name: d.name,
                            accessLevel: "closed"
                        }
                    });
                    if ("failed" === e.type) throw Error("Cannot create teamspace");
                    t = e.data.teamId
                }
                let {
                    performResult: g
                } = (0, R().createAndCommit)({
                    userAction: "importActions.importConfluenceViaApi",
                    environment: o,
                    cellTarget: {
                        spaceWithId: r.id
                    },
                    canUndo: !0,
                    perform: e => {
                        let t = n().A.formatMessage(S.importTitleWithImportName, {
                                name: d.name
                            }),
                            s = a(964232).IT({
                                environment: o,
                                spaceStore: r,
                                spaceViewStore: i,
                                parent: "private",
                                prepend: !0,
                                title: t,
                                transaction: e
                            }),
                            c = a(975162).yX();
                        return e.postSubmitCallbacks.push(e => {
                            e ? c.reject(e) : c.resolve(void 0)
                        }), {
                            deferred: c,
                            createdPage: s,
                            pageId: s.id
                        }
                    }
                });
                await g.deferred.promise;
                let I = g.createdPage;
                try {
                    if (!I) throw Error("No root page");
                    M().Pd({
                        import_source: "confluence",
                        import_type: "api",
                        flowId: s
                    });
                    let e = (0, a(242947).t3)(o, r);
                    for await (let i of w().UT({
                        environment: o,
                        eventName: e,
                        request: {
                            userId: o.currentUser.id,
                            spaceId: r.id,
                            confluenceSpaceKey: d.key,
                            confluenceSpaceId: d.id,
                            confluenceSpaceName: d.name,
                            page: {
                                id: g.pageId,
                                spaceId: r.id
                            },
                            loggerPageId: u,
                            flowId: s,
                            teamId: t,
                            importId: a(175448).R.getOrCreateImportId()
                        },
                        multiCellRouting: {
                            spaceIds: [r.id]
                        }
                    })) {
                        if (i.error) throw i.error;
                        i.value && !i.value.isComplete && h().m(i.value.status)
                    }
                    return h().V(), I
                } catch (i) {
                    a(773352).log({
                        level: "error",
                        from: "importConfluenceViaAPI",
                        type: "importConfluenceViaAPIFailure",
                        error: (0, a(416607).convertErrorToLog)(i),
                        data: {
                            spaceId: r.id
                        }
                    }), (0, R().createAndCommit)({
                        userAction: "importActions.importConfluenceViaApi",
                        environment: o,
                        cellTarget: {
                            spaceWithId: r.id
                        },
                        canUndo: !0,
                        perform: e => {
                            I && (0, _().T)({
                                parentStore: r.getPagesStore(),
                                childToRemoveStore: I,
                                transaction: e
                            })
                        }
                    });
                    let e = n().A.formatMessage(S.confluenceImportViaAPIFailed),
                        t = i instanceof l().ico || i instanceof l().yI4 ? i.body.clientData : void 0;
                    if (t && "type" in t && "confluence_import_concurrency_limit" === t.type)
                        if ("reasonKey" in t) {
                            let a = t.reasonKey;
                            e = "multiSpaceImportRunning" === a ? n().A.formatMessage(S.confluenceMultiSpaceImportRunning) : "cannotStartMultiSpaceWhileOthersRunning" === a ? n().A.formatMessage(S.confluenceCannotStartMultiSpaceWhileOthersRunning) : "maxConcurrentImportsReached" === a ? n().A.formatMessage(S.confluenceMaxConcurrentImportsReached) : n().A.formatMessage(S.confluenceImportAlreadyRunning)
                        } else e = n().A.formatMessage(S.confluenceImportAlreadyRunning);
                    else t && "code" in t && "confluenceImportError" === t.code && (e = n().A.formatMessage(S.importFailedWithError, {
                        error: (0, f().A)(i).message
                    }));
                    throw c().f1(e), h().V(), Error((0, f().A)(i).message)
                }
            }
            async function Q(e) {
                let {
                    environment: t,
                    spaceStore: o,
                    spaceViewStore: r,
                    spaces: i,
                    flowId: d
                } = e;
                if (!t.currentUser.id) throw Error("User does not exist.");
                let s = await (0, a(242947).h7)(t, o.id, !0);
                if (!s.canStart) throw new(l()).yI4("Confluence import blocked", {
                    clientData: {
                        type: "confluence_import_concurrency_limit",
                        reasonKey: s.reason ? ? "maxConcurrentImportsReached"
                    }
                });
                h().m({
                    message: S.importingFromConfluenceViaAPIMessage,
                    interpolatedValues: {
                        confluenceSpaceKey: `${i.length} spaces`
                    }
                }), a(372034).A.setState({
                    open: !1
                });
                let {
                    performResult: p
                } = (0, R().createAndCommit)({
                    userAction: "importActions.importMultiSpaceConfluenceViaAPI",
                    environment: t,
                    cellTarget: {
                        spaceWithId: o.id
                    },
                    canUndo: !0,
                    perform: e => {
                        let d = i.some(e => void 0 !== e.selectedConfluencePages && e.selectedConfluencePages.length > 0),
                            s = `Confluence ${d?"Pages":"Spaces"} Import Log - ${(0,a(850640).W_)(Date.now(),"medium",a(849917).locale)}`,
                            n = a(964232).IT({
                                environment: t,
                                spaceStore: o,
                                spaceViewStore: r,
                                parent: "private",
                                prepend: !0,
                                title: s,
                                transaction: e
                            }),
                            c = a(975162).yX();
                        return e.postSubmitCallbacks.push(e => {
                            e ? c.reject(e) : c.resolve(void 0)
                        }), {
                            deferred: c,
                            createdPage: n,
                            pageId: n.id
                        }
                    }
                });
                await p.deferred.promise;
                let m = p.createdPage;
                try {
                    M().Pd({
                        import_source: "confluence",
                        import_type: "api",
                        import_sub_type: "multispace",
                        flowId: d
                    });
                    let e = i.map(e => ({
                        confluenceSpaceId: e.id,
                        confluenceSpaceKey: e.key,
                        confluenceSpaceName: e.name,
                        targetTeamSpaceId: e.targetTeamSpaceId,
                        selectedConfluencePages: e.selectedConfluencePages
                    }));
                    for await (let r of w().UT({
                        environment: t,
                        eventName: a(296455).k,
                        request: {
                            userId: t.currentUser.id,
                            spaceId: o.id,
                            spaceConfigs: e,
                            page: {
                                id: void 0,
                                spaceId: o.id
                            },
                            loggerPageId: p.pageId,
                            flowId: d,
                            importId: a(175448).R.getOrCreateImportId()
                        },
                        multiCellRouting: {
                            spaceIds: [o.id]
                        }
                    })) {
                        if (r.error) throw r.error;
                        if (r.value && !r.value.isComplete) {
                            let {
                                message: e,
                                messageValues: t,
                                interpolatedValues: a
                            } = r.value.status;
                            h().m({
                                message: e,
                                interpolatedValues: t ? ? a
                            })
                        }
                    }
                    return h().V(), m
                } catch (i) {
                    (0, R().createAndCommit)({
                        userAction: "importActions.importMultiSpaceConfluenceViaAPI",
                        environment: t,
                        cellTarget: {
                            spaceWithId: o.id
                        },
                        canUndo: !0,
                        perform: e => {
                            m && (0, _().T)({
                                parentStore: o.getPagesStore(),
                                childToRemoveStore: m,
                                transaction: e
                            })
                        }
                    }), a(773352).log({
                        type: "error",
                        level: "error",
                        from: "importMultiSpaceConfluenceViaAPI",
                        error: (0, a(416607).convertErrorToLog)(i)
                    });
                    let e = n().A.formatMessage(S.importFailed),
                        r = i instanceof l().yI4 ? i.body.clientData : void 0;
                    if (r && "type" in r && "confluence_import_concurrency_limit" === r.type)
                        if ("reasonKey" in r) {
                            let t = r.reasonKey;
                            e = "multiSpaceImportRunning" === t ? n().A.formatMessage(S.confluenceMultiSpaceImportRunning) : "cannotStartMultiSpaceWhileOthersRunning" === t ? n().A.formatMessage(S.confluenceCannotStartMultiSpaceWhileOthersRunning) : "maxConcurrentImportsReached" === t ? n().A.formatMessage(S.confluenceMaxConcurrentImportsReached) : n().A.formatMessage(S.confluenceImportAlreadyRunning)
                        } else e = n().A.formatMessage(S.confluenceImportAlreadyRunning);
                    else "object" == typeof i && null !== i && "message" in i && (e = n().A.formatMessage(S.importFailedWithError, {
                        error: (0, f().A)(i).message
                    }));
                    throw c().rG({
                        message: e
                    }), h().V(), Error((0, f().A)(i).message)
                }
            }
            async function D(e) {
                let t, {
                        environment: o,
                        spaceStore: r,
                        spaceViewStore: i,
                        notebooks: d,
                        waitForNotebookStore: s,
                        notebookMapping: n,
                        userSettingsStore: c,
                        flowId: l,
                        waitForAllNotebooks: p = !1
                    } = e,
                    m = a(975162).vA(d, 2, async e => {
                        await Promise.all(e.map(async e => {
                            let r = n[e.guid];
                            if (!r) throw Error(`Missing notebook page ${e.guid}`);
                            let i = a(975162).yX();
                            r === s && (t = i), await N({
                                environment: o,
                                notebookStore: r,
                                notebook: e,
                                firstCompleted: i,
                                flowId: l,
                                waitForComplete: p
                            })
                        }))
                    }),
                    f = c.getSettings();
                if (!(null != f && f.created_evernote_getting_started)) {
                    let e = (0, a(721174).nH)("evernote");
                    await (0, a(730137).U)({
                        environment: o,
                        spaceStore: r,
                        spaceViewStore: i,
                        userSettingsStore: c,
                        template: e
                    })
                }
                if (p) await m;
                else {
                    if (!t) throw Error("waitForNotebookFirstCompleted not defined.");
                    await t.promise
                }
            }
            async function N(e) {
                let {
                    environment: t,
                    notebookStore: o,
                    notebook: r,
                    firstCompleted: i,
                    flowId: d,
                    waitForComplete: s = !1
                } = e, p = w().UT({
                    environment: t,
                    eventName: a(690004).r,
                    request: {
                        notebookId: r.guid,
                        notebookName: r.title,
                        block: {
                            id: o.id,
                            spaceId: (0, a(226221).e)(o.pointer.spaceId)
                        },
                        spaceId: o.getSpaceId(),
                        timestamp: Date.now(),
                        parentTable: m().evP,
                        importId: a(175448).R.getOrCreateImportId(),
                        flowId: d
                    },
                    multiCellRouting: {
                        spaceIds: [o.getSpaceId()]
                    }
                }), u = !1;
                for await (let e of p) {
                    if (e.error) {
                        console.error(e.error);
                        let a = o.getSpaceId();
                        (0, R().createAndCommit)({
                            userAction: "importActions.importEvernoteNotebook",
                            environment: t,
                            cellTarget: a ? {
                                spaceWithId: a
                            } : void 0,
                            canUndo: !0,
                            perform: e => {
                                let t = o.getParentBlockStore();
                                if (t) {
                                    let a = t.getContentStore();
                                    (0, _().T)({
                                        parentStore: a,
                                        childToRemoveStore: o,
                                        transaction: e
                                    })
                                }
                            }
                        });
                        let r = n().A.formatMessage(S.evernoteImportFailed),
                            d = e.error instanceof l().DfQ ? e.error.body.clientData : void 0;
                        if (d && "code" in d && "evernoteImportError" === d.code && (r = n().A.formatMessage(S.importFailedWithError, {
                                error: (0, f().A)(e.error).message
                            })), s) throw Error(r);
                        c().f1(r), i.resolve(void 0);
                        return
                    }
                    if (!s && !u) return void i.resolve(void 0);
                    u = !0
                }
                i.resolve(void 0)
            }
            async function L(e) {
                let {
                    environment: t,
                    spaceStore: o,
                    spaceViewStore: r,
                    notebooks: i
                } = e, {
                    serverCommitResult: d,
                    performResult: {
                        blockStores: s
                    }
                } = (0, R().createAndCommit)({
                    userAction: "importActions.createStacks",
                    environment: t,
                    cellTarget: {
                        spaceWithId: o.id
                    },
                    canUndo: !0,
                    perform: e => {
                        let d = a(381453).sb(a(381453).oE(i.map(e => e.stack))).sort().reverse(),
                            s = {},
                            n = e => !0;
                        return i.length > 1 && d.length > 0 && (d.forEach(d => {
                            let n = a(964232).IT({
                                    environment: t,
                                    spaceStore: o,
                                    spaceViewStore: r,
                                    parent: "private",
                                    prepend: !0,
                                    loading: !1,
                                    title: d,
                                    transaction: e
                                }),
                                c = n.getContentStore();
                            i.filter(e => e.stack === d).forEach(o => {
                                let r = a(124937).Wv({
                                    environment: t,
                                    type: a(955630).xd.copyIndicator,
                                    inMemoryRecordCache: n.inMemoryRecordCache,
                                    transaction: e,
                                    spaceId: c.pointer.spaceId
                                });
                                (0, a(135674).B)({
                                    parentStore: c,
                                    appendStore: r,
                                    transaction: e
                                }), s[o.guid] = r
                            })
                        }), n = e => !e.stack), i.filter(n).reverse().forEach(i => {
                            let d = a(964232).IT({
                                environment: t,
                                spaceStore: o,
                                spaceViewStore: r,
                                parent: "private",
                                prepend: !0,
                                loading: !0,
                                title: i.title,
                                transaction: e
                            });
                            s[i.guid] = d
                        }), {
                            blockStores: s
                        }
                    }
                });
                return await d, s
            }
        },
        296455: (e, t, a) => {
            a.d(t, {
                k: () => r,
                w: () => o
            });
            let o = 10,
                r = (0, a(477465).Dv)("multiSpaceConfluenceImportViaApi")
        },
        372034: (e, t, a) => {
            a.d(t, {
                A: () => o
            });
            let o = new(a(510969)).A
        },
        379731: (e, t, a) => {
            a.d(t, {
                S: () => o
            });
            let o = (0, a(477465).Dv)("parallelImportConfluenceExport")
        },
        381026: (e, t, a) => {
            a.d(t, {
                A: () => o
            });
            let o = new(a(510969)).A
        },
        386126: (e, t, a) => {
            a.d(t, {
                B: () => o
            });
            let o = (0, a(477465).Dv)("importTrello")
        },
        434107: (e, t, a) => {
            a.d(t, {
                x: () => o
            });

            function o(e, t) {
                (0, a(104310).u)({
                    event: {
                        eventName: "debug_getting_started_page_error",
                        eventProperties: t
                    }
                })
            }
        },
        540234: (e, t, a) => {
            a.d(t, {
                V: () => o
            });
            let o = (0, a(477465).Dv)("importFile")
        },
        563126: (e, t, a) => {
            a.d(t, {
                Z: () => o
            });
            let o = (0, a(477465).Dv)("zipImporterParent")
        },
        606430: (e, t, a) => {
            a.d(t, {
                w: () => c,
                y: () => n
            });
            let o = {
                    sources: {
                        "en-US": {
                            previewRootId: "e950a58c-0d6f-42c3-8225-9e7adc5d4182",
                            rootId: "e950a58c-0d6f-42c3-8225-9e7adc5d4182",
                            spaceId: a(54353).rQ
                        }
                    },
                    nameMessage: a(647414).DZ.getStartedPage
                },
                r = {
                    sources: {
                        "en-US": {
                            previewRootId: "89ba9061-3275-4d76-966f-11691fdfd72f",
                            rootId: "89ba9061-3275-4d76-966f-11691fdfd72f",
                            spaceId: a(54353).rQ
                        },
                        "ko-KR": {
                            previewRootId: "0eb824c6-f768-47bc-9204-d94dbb912c6e",
                            rootId: "0eb824c6-f768-47bc-9204-d94dbb912c6e",
                            spaceId: a(54353).rQ
                        },
                        "ja-JP": {
                            previewRootId: "09f3541c-8edb-4603-9bc3-02bd22cd7836",
                            rootId: "09f3541c-8edb-4603-9bc3-02bd22cd7836",
                            spaceId: a(54353).rQ
                        },
                        "fr-FR": {
                            previewRootId: "b13cc3bd-a0a3-4b61-b482-63051d7804b5",
                            rootId: "b13cc3bd-a0a3-4b61-b482-63051d7804b5",
                            spaceId: a(54353).rQ
                        },
                        "de-DE": {
                            previewRootId: "b2b10be2-1b2f-4a48-a453-532657bd8e92",
                            rootId: "b2b10be2-1b2f-4a48-a453-532657bd8e92",
                            spaceId: a(54353).rQ
                        },
                        "es-ES": {
                            previewRootId: "a00ebb82-58f2-4b40-89ee-a65be3befabf",
                            rootId: "a00ebb82-58f2-4b40-89ee-a65be3befabf",
                            spaceId: a(54353).rQ
                        },
                        "es-LA": {
                            previewRootId: "6d1f21ba-36cf-4c90-9ecb-d5e377942f3a",
                            rootId: "6d1f21ba-36cf-4c90-9ecb-d5e377942f3a",
                            spaceId: a(54353).rQ
                        },
                        "pt-BR": {
                            previewRootId: "50a76940-a26e-443a-b752-1412855e6ad7",
                            rootId: "50a76940-a26e-443a-b752-1412855e6ad7",
                            spaceId: a(54353).rQ
                        },
                        "nb-NO": {
                            previewRootId: "4c0f8e8c-3967-43ab-a0a8-a3a8ae837714",
                            rootId: "4c0f8e8c-3967-43ab-a0a8-a3a8ae837714",
                            spaceId: a(54353).rQ
                        },
                        "fi-FI": {
                            previewRootId: "555c9896-0c2d-4af7-a951-1d81f051de2e",
                            rootId: "555c9896-0c2d-4af7-a951-1d81f051de2e",
                            spaceId: a(54353).rQ
                        },
                        "sv-SE": {
                            previewRootId: "751d20c2-e2be-4e61-921a-adb553651c8c",
                            rootId: "751d20c2-e2be-4e61-921a-adb553651c8c",
                            spaceId: a(54353).rQ
                        },
                        "da-DK": {
                            previewRootId: "8e0ffb71-86cb-46bf-abf2-720dcb4378f9",
                            rootId: "8e0ffb71-86cb-46bf-abf2-720dcb4378f9",
                            spaceId: a(54353).rQ
                        },
                        "nl-NL": {
                            previewRootId: "53da1632-5152-4b4f-b440-19b82802360b",
                            rootId: "53da1632-5152-4b4f-b440-19b82802360b",
                            spaceId: a(54353).rQ
                        },
                        "zh-CN": {
                            previewRootId: "a2ca886e-3537-47e1-823b-57633cb94702",
                            rootId: "a2ca886e-3537-47e1-823b-57633cb94702",
                            spaceId: a(54353).rQ
                        },
                        "zh-TW": {
                            previewRootId: "ed24d770-243d-4ef4-b469-0187beadf16e",
                            rootId: "ed24d770-243d-4ef4-b469-0187beadf16e",
                            spaceId: a(54353).rQ
                        },
                        "en-GB": {
                            previewRootId: "22317954-d9c2-81e2-ac8b-ee29b0a7809b",
                            rootId: "22317954-d9c2-81e2-ac8b-ee29b0a7809b",
                            spaceId: a(54353).rQ
                        },
                        "id-ID": {
                            previewRootId: "22317954-d9c2-81f9-9472-fdb4858f55e8",
                            rootId: "22317954-d9c2-81f9-9472-fdb4858f55e8",
                            spaceId: a(54353).rQ
                        },
                        "vi-VN": {
                            previewRootId: "22317954-d9c2-81b0-a305-eff50acb3864",
                            rootId: "22317954-d9c2-81b0-a305-eff50acb3864",
                            spaceId: a(54353).rQ
                        },
                        "th-TH": {
                            previewRootId: "22317954-d9c2-81f4-a6bd-f0eda23061c7",
                            rootId: "22317954-d9c2-81f4-a6bd-f0eda23061c7",
                            spaceId: a(54353).rQ
                        },
                        "ar-SA": {
                            rootId: "2b817954-d9c2-8087-ac1a-c8f8ae60bfdb",
                            previewRootId: "2b817954-d9c2-8087-ac1a-c8f8ae60bfdb",
                            spaceId: a(54353).rQ
                        },
                        "he-IL": {
                            rootId: "2b817954-d9c2-803f-88fc-cb42d429b01d",
                            previewRootId: "2b817954-d9c2-803f-88fc-cb42d429b01d",
                            spaceId: a(54353).rQ
                        }
                    },
                    nameMessage: a(647414).DZ.getStartedPage
                },
                i = {
                    sources: {
                        "en-US": {
                            previewRootId: "30fa18a6-609e-4f5b-af3d-31906c46fe23",
                            rootId: "30fa18a6-609e-4f5b-af3d-31906c46fe23",
                            spaceId: a(54353).rQ
                        },
                        "ko-KR": {
                            previewRootId: "3afd60d5-3ce7-431a-b812-2c836b7596a3",
                            rootId: "3afd60d5-3ce7-431a-b812-2c836b7596a3",
                            spaceId: a(54353).rQ
                        },
                        "ja-JP": {
                            previewRootId: "dd2f1d05-d4ef-48a0-899c-10fe0346a447",
                            rootId: "dd2f1d05-d4ef-48a0-899c-10fe0346a447",
                            spaceId: a(54353).rQ
                        },
                        "fr-FR": {
                            previewRootId: "ac411712-ee48-4589-828d-b4e5827efc17",
                            rootId: "ac411712-ee48-4589-828d-b4e5827efc17",
                            spaceId: a(54353).rQ
                        },
                        "de-DE": {
                            previewRootId: "0c5be7d7-cfcf-417b-824a-1a280254a58e",
                            rootId: "0c5be7d7-cfcf-417b-824a-1a280254a58e",
                            spaceId: a(54353).rQ
                        },
                        "es-ES": {
                            previewRootId: "35c18cd6-99a8-47f3-91ee-40dbfec922fa",
                            rootId: "35c18cd6-99a8-47f3-91ee-40dbfec922fa",
                            spaceId: a(54353).rQ
                        },
                        "es-LA": {
                            previewRootId: "017372b2-9d34-4118-ad13-9b8e15c30ebd",
                            rootId: "017372b2-9d34-4118-ad13-9b8e15c30ebd",
                            spaceId: a(54353).rQ
                        },
                        "pt-BR": {
                            previewRootId: "035cfcde-4292-4905-82b2-6517e58a28b9",
                            rootId: "035cfcde-4292-4905-82b2-6517e58a28b9",
                            spaceId: a(54353).rQ
                        },
                        "nb-NO": {
                            previewRootId: "42a8570d-5be6-4be4-9ca3-0569f54863bf",
                            rootId: "42a8570d-5be6-4be4-9ca3-0569f54863bf",
                            spaceId: a(54353).rQ
                        },
                        "fi-FI": {
                            previewRootId: "5f103e1f-2659-4c6a-bb30-705d2dae0774",
                            rootId: "5f103e1f-2659-4c6a-bb30-705d2dae0774",
                            spaceId: a(54353).rQ
                        },
                        "sv-SE": {
                            previewRootId: "811aca42-41c0-4f83-9e08-e795d7a5f803",
                            rootId: "811aca42-41c0-4f83-9e08-e795d7a5f803",
                            spaceId: a(54353).rQ
                        },
                        "da-DK": {
                            previewRootId: "7643a79b-68c8-46af-ae10-f089cb1ae62b",
                            rootId: "7643a79b-68c8-46af-ae10-f089cb1ae62b",
                            spaceId: a(54353).rQ
                        },
                        "nl-NL": {
                            previewRootId: "6e5d9018-2dc0-4dc7-802c-be95d99f1660",
                            rootId: "6e5d9018-2dc0-4dc7-802c-be95d99f1660",
                            spaceId: a(54353).rQ
                        },
                        "zh-CN": {
                            previewRootId: "289fe37a-a3fc-4cec-b690-a6f99dec65a8",
                            rootId: "289fe37a-a3fc-4cec-b690-a6f99dec65a8",
                            spaceId: a(54353).rQ
                        },
                        "zh-TW": {
                            previewRootId: "a9fef1fc-6a95-45fc-9a7f-137790c06105",
                            rootId: "a9fef1fc-6a95-45fc-9a7f-137790c06105",
                            spaceId: a(54353).rQ
                        },
                        "en-GB": {
                            previewRootId: "22317954-d9c2-8168-b83f-ebfc302217e4",
                            rootId: "22317954-d9c2-8168-b83f-ebfc302217e4",
                            spaceId: a(54353).rQ
                        },
                        "id-ID": {
                            previewRootId: "22317954-d9c2-812b-acae-d320272c9931",
                            rootId: "22317954-d9c2-812b-acae-d320272c9931",
                            spaceId: a(54353).rQ
                        },
                        "vi-VN": {
                            previewRootId: "22317954-d9c2-81c3-ade9-cfcadf726253",
                            rootId: "22317954-d9c2-81c3-ade9-cfcadf726253",
                            spaceId: a(54353).rQ
                        },
                        "th-TH": {
                            previewRootId: "22317954-d9c2-81ae-abe1-c77fb13e32c2",
                            rootId: "22317954-d9c2-81ae-abe1-c77fb13e32c2",
                            spaceId: a(54353).rQ
                        },
                        "ar-SA": {
                            rootId: "2b817954-d9c2-801e-9e31-f0ad39acb40d",
                            previewRootId: "2b817954-d9c2-801e-9e31-f0ad39acb40d",
                            spaceId: a(54353).rQ
                        },
                        "he-IL": {
                            rootId: "2b817954-d9c2-80e2-8969-d8a70ea19101",
                            previewRootId: "2b817954-d9c2-80e2-8969-d8a70ea19101",
                            spaceId: a(54353).rQ
                        }
                    },
                    nameMessage: a(647414).DZ.getStartedPage
                },
                d = {
                    sources: {
                        "en-US": {
                            previewRootId: "bd0b93b9-a0e9-4582-a164-98acdc7a5b45",
                            rootId: "bd0b93b9-a0e9-4582-a164-98acdc7a5b45",
                            spaceId: a(54353).rQ
                        },
                        "ko-KR": {
                            previewRootId: "ecdfe65a-28ee-46d2-a82b-99573e3dd63d",
                            rootId: "ecdfe65a-28ee-46d2-a82b-99573e3dd63d",
                            spaceId: a(54353).rQ
                        },
                        "ja-JP": {
                            previewRootId: "56dd4a06-5073-46d2-8aca-8e37d90e5610",
                            rootId: "56dd4a06-5073-46d2-8aca-8e37d90e5610",
                            spaceId: a(54353).rQ
                        },
                        "fr-FR": {
                            previewRootId: "1f8febec-2e84-4be2-a67d-7b5165845a4b",
                            rootId: "1f8febec-2e84-4be2-a67d-7b5165845a4b",
                            spaceId: a(54353).rQ
                        },
                        "de-DE": {
                            previewRootId: "ee67a0e4-8343-4dd6-9636-9504cae6c573",
                            rootId: "ee67a0e4-8343-4dd6-9636-9504cae6c573",
                            spaceId: a(54353).rQ
                        },
                        "es-ES": {
                            previewRootId: "eabf4d1f-9a77-441f-88fb-de9e9e0dc26e",
                            rootId: "eabf4d1f-9a77-441f-88fb-de9e9e0dc26e",
                            spaceId: a(54353).rQ
                        },
                        "es-LA": {
                            previewRootId: "56ba9c1f-2a28-4d05-910c-e89fb051327d",
                            rootId: "56ba9c1f-2a28-4d05-910c-e89fb051327d",
                            spaceId: a(54353).rQ
                        },
                        "pt-BR": {
                            previewRootId: "07ffa801-adfb-41f3-809b-87f69ae9e9cd",
                            rootId: "07ffa801-adfb-41f3-809b-87f69ae9e9cd",
                            spaceId: a(54353).rQ
                        },
                        "nb-NO": {
                            previewRootId: "62f63581-5683-49a3-8812-32e2de74a6a6",
                            rootId: "62f63581-5683-49a3-8812-32e2de74a6a6",
                            spaceId: a(54353).rQ
                        },
                        "fi-FI": {
                            previewRootId: "f01bdcc5-d573-4790-b605-988df0f3a5ea",
                            rootId: "f01bdcc5-d573-4790-b605-988df0f3a5ea",
                            spaceId: a(54353).rQ
                        },
                        "sv-SE": {
                            previewRootId: "e404919f-5dda-4fc3-a28f-6550e70cee12",
                            rootId: "e404919f-5dda-4fc3-a28f-6550e70cee12",
                            spaceId: a(54353).rQ
                        },
                        "da-DK": {
                            previewRootId: "cee1de64-79f4-45b4-85d5-1ffae9624a8e",
                            rootId: "cee1de64-79f4-45b4-85d5-1ffae9624a8e",
                            spaceId: a(54353).rQ
                        },
                        "nl-NL": {
                            previewRootId: "86ecfb21-c0ed-42cb-864c-83890d49cb51",
                            rootId: "86ecfb21-c0ed-42cb-864c-83890d49cb51",
                            spaceId: a(54353).rQ
                        },
                        "zh-CN": {
                            previewRootId: "244bca5a-9931-40fb-91cd-bbcd97f1e8be",
                            rootId: "244bca5a-9931-40fb-91cd-bbcd97f1e8be",
                            spaceId: a(54353).rQ
                        },
                        "zh-TW": {
                            previewRootId: "802eb5a0-67f1-4f31-a058-938206b68f1c",
                            rootId: "802eb5a0-67f1-4f31-a058-938206b68f1c",
                            spaceId: a(54353).rQ
                        },
                        "en-GB": {
                            previewRootId: "22317954-d9c2-8179-944e-cebc376a24f1",
                            rootId: "22317954-d9c2-8179-944e-cebc376a24f1",
                            spaceId: a(54353).rQ
                        },
                        "id-ID": {
                            previewRootId: "22317954-d9c2-8174-8225-c55b3053258c",
                            rootId: "22317954-d9c2-8174-8225-c55b3053258c",
                            spaceId: a(54353).rQ
                        },
                        "vi-VN": {
                            previewRootId: "22317954-d9c2-81b4-844e-dfaa568db972",
                            rootId: "22317954-d9c2-81b4-844e-dfaa568db972",
                            spaceId: a(54353).rQ
                        },
                        "th-TH": {
                            previewRootId: "22317954-d9c2-817b-b9b4-cbd055e05ba6",
                            rootId: "22317954-d9c2-817b-b9b4-cbd055e05ba6",
                            spaceId: a(54353).rQ
                        },
                        "ar-SA": {
                            rootId: "2b817954-d9c2-8018-8891-c7de9ab4efc1",
                            previewRootId: "2b817954-d9c2-8018-8891-c7de9ab4efc1",
                            spaceId: a(54353).rQ
                        },
                        "he-IL": {
                            rootId: "2b817954-d9c2-80d4-a4ba-f35b66365d8b",
                            previewRootId: "2b817954-d9c2-80d4-a4ba-f35b66365d8b",
                            spaceId: a(54353).rQ
                        }
                    },
                    nameMessage: a(647414).DZ.getStartedPage
                },
                s = {
                    sources: {
                        "en-US": {
                            previewRootId: "2e568628-70b1-4f35-934e-81ea4263d0e8",
                            rootId: "2e568628-70b1-4f35-934e-81ea4263d0e8",
                            spaceId: a(54353).rQ
                        },
                        "ko-KR": {
                            previewRootId: "3d8c8d33-f904-41f7-a3ff-b6272c633079",
                            rootId: "3d8c8d33-f904-41f7-a3ff-b6272c633079",
                            spaceId: a(54353).rQ
                        },
                        "ja-JP": {
                            previewRootId: "9aefc3b4-f172-4917-b1c7-495c26ec37f9",
                            rootId: "9aefc3b4-f172-4917-b1c7-495c26ec37f9",
                            spaceId: a(54353).rQ
                        },
                        "fr-FR": {
                            previewRootId: "4453c56e-831c-4203-83fc-9736e276b7dc",
                            rootId: "4453c56e-831c-4203-83fc-9736e276b7dc",
                            spaceId: a(54353).rQ
                        },
                        "de-DE": {
                            previewRootId: "6239e7bb-e6a6-4cb4-b4fa-236035bad7f7",
                            rootId: "6239e7bb-e6a6-4cb4-b4fa-236035bad7f7",
                            spaceId: a(54353).rQ
                        },
                        "es-ES": {
                            previewRootId: "95dafcd5-6243-4838-bea1-8e19b0596f6f",
                            rootId: "95dafcd5-6243-4838-bea1-8e19b0596f6f",
                            spaceId: a(54353).rQ
                        },
                        "es-LA": {
                            previewRootId: "34d8ae09-8161-49ec-ae2d-c188c477bb90",
                            rootId: "34d8ae09-8161-49ec-ae2d-c188c477bb90",
                            spaceId: a(54353).rQ
                        },
                        "pt-BR": {
                            previewRootId: "cb2a5d30-074f-4c07-97b5-61147e0ea504",
                            rootId: "cb2a5d30-074f-4c07-97b5-61147e0ea504",
                            spaceId: a(54353).rQ
                        },
                        "zh-CN": {
                            previewRootId: "72e66598-65f8-47ec-ba84-000d7321b482",
                            rootId: "72e66598-65f8-47ec-ba84-000d7321b482",
                            spaceId: a(54353).rQ
                        },
                        "zh-TW": {
                            previewRootId: "ec8b7591-22e8-41e6-9342-b44c1190b855",
                            rootId: "ec8b7591-22e8-41e6-9342-b44c1190b855",
                            spaceId: a(54353).rQ
                        },
                        "en-GB": {
                            previewRootId: "22317954-d9c2-8147-ab85-d82ae2e2590a",
                            rootId: "22317954-d9c2-8147-ab85-d82ae2e2590a",
                            spaceId: a(54353).rQ
                        },
                        "id-ID": {
                            previewRootId: "22317954-d9c2-81ca-9be8-efc8add2fab4",
                            rootId: "22317954-d9c2-81ca-9be8-efc8add2fab4",
                            spaceId: a(54353).rQ
                        },
                        "vi-VN": {
                            previewRootId: "22317954-d9c2-81b1-9d4c-c3571789c534",
                            rootId: "22317954-d9c2-81b1-9d4c-c3571789c534",
                            spaceId: a(54353).rQ
                        },
                        "th-TH": {
                            previewRootId: "22317954-d9c2-81c5-9a7c-ce158660ac68",
                            rootId: "22317954-d9c2-81c5-9a7c-ce158660ac68",
                            spaceId: a(54353).rQ
                        },
                        "ar-SA": {
                            rootId: "2b817954-d9c2-8014-8867-f5e5cbf2c71c",
                            previewRootId: "2b817954-d9c2-8014-8867-f5e5cbf2c71c",
                            spaceId: a(54353).rQ
                        },
                        "he-IL": {
                            rootId: "2b817954-d9c2-809d-bb3d-f9c22caad3de",
                            previewRootId: "2b817954-d9c2-809d-bb3d-f9c22caad3de",
                            spaceId: a(54353).rQ
                        }
                    },
                    nameMessage: a(647414).DZ.getStartedPageEvernote
                },
                n = {
                    desktopPersonal: r,
                    desktopTeamCreate: i,
                    desktopTeamJoin: d,
                    mobile: {
                        sources: {
                            "en-US": {
                                previewRootId: "16017954-d9c2-806e-8eba-d994c71414b9",
                                rootId: "16017954-d9c2-806e-8eba-d994c71414b9",
                                spaceId: a(54353).rQ
                            },
                            "ko-KR": {
                                previewRootId: "1a817954-d9c2-80ee-a7cc-f06b312607c6",
                                rootId: "1a817954-d9c2-80ee-a7cc-f06b312607c6",
                                spaceId: a(54353).rQ
                            },
                            "ja-JP": {
                                previewRootId: "1a817954-d9c2-80ab-b876-ce0540bcbc50",
                                rootId: "1a817954-d9c2-80ab-b876-ce0540bcbc50",
                                spaceId: a(54353).rQ
                            },
                            "de-DE": {
                                previewRootId: "1a817954-d9c2-809c-be16-eada2bec6449",
                                rootId: "1a817954-d9c2-809c-be16-eada2bec6449",
                                spaceId: a(54353).rQ
                            },
                            "fr-FR": {
                                previewRootId: "1a817954-d9c2-80e4-a2f7-cbc04084b700",
                                rootId: "1a817954-d9c2-80e4-a2f7-cbc04084b700",
                                spaceId: a(54353).rQ
                            },
                            "es-ES": {
                                previewRootId: "1a817954-d9c2-80ba-a1d2-f116653c87e7",
                                rootId: "1a817954-d9c2-80ba-a1d2-f116653c87e7",
                                spaceId: a(54353).rQ
                            },
                            "es-LA": {
                                previewRootId: "1a817954-d9c2-8009-ace4-c7a8be973d30",
                                rootId: "1a817954-d9c2-8009-ace4-c7a8be973d30",
                                spaceId: a(54353).rQ
                            },
                            "pt-BR": {
                                previewRootId: "1a817954-d9c2-8013-97f7-c8514ce9ca72",
                                rootId: "1a817954-d9c2-8013-97f7-c8514ce9ca72",
                                spaceId: a(54353).rQ
                            },
                            "nb-NO": {
                                previewRootId: "1b417954-d9c2-802c-8aad-ead5bdae042e",
                                rootId: "1b417954-d9c2-802c-8aad-ead5bdae042e",
                                spaceId: a(54353).rQ
                            },
                            "nl-NL": {
                                previewRootId: "1b417954-d9c2-8040-99cd-f6f24a7b664e",
                                rootId: "1b417954-d9c2-8040-99cd-f6f24a7b664e",
                                spaceId: a(54353).rQ
                            },
                            "da-DK": {
                                previewRootId: "1b417954-d9c2-8000-bc82-e5b055b64bfd",
                                rootId: "1b417954-d9c2-8000-bc82-e5b055b64bfd",
                                spaceId: a(54353).rQ
                            },
                            "sv-SE": {
                                previewRootId: "1b417954-d9c2-8083-934b-e38126f120e2",
                                rootId: "1b417954-d9c2-8083-934b-e38126f120e2",
                                spaceId: a(54353).rQ
                            },
                            "fi-FI": {
                                previewRootId: "1b417954-d9c2-8011-b27a-e0ad995bd435",
                                rootId: "1b417954-d9c2-8011-b27a-e0ad995bd435",
                                spaceId: a(54353).rQ
                            },
                            "zh-CN": {
                                previewRootId: "1b417954-d9c2-8014-bc84-cf44da811cf8",
                                rootId: "1b417954-d9c2-8014-bc84-cf44da811cf8",
                                spaceId: a(54353).rQ
                            },
                            "zh-TW": {
                                previewRootId: "1a817954-d9c2-80a9-bb6f-f39ba79e7dcc",
                                rootId: "1a817954-d9c2-80a9-bb6f-f39ba79e7dcc",
                                spaceId: a(54353).rQ
                            },
                            "en-GB": {
                                previewRootId: "22317954-d9c2-81fa-b3bc-e876ef8712aa",
                                rootId: "22317954-d9c2-81fa-b3bc-e876ef8712aa",
                                spaceId: a(54353).rQ
                            },
                            "id-ID": {
                                previewRootId: "22317954-d9c2-8135-ba53-c91462db2bd9",
                                rootId: "22317954-d9c2-8135-ba53-c91462db2bd9",
                                spaceId: a(54353).rQ
                            },
                            "vi-VN": {
                                previewRootId: "22317954-d9c2-8120-af12-dbf6ca2ad3c8",
                                rootId: "22317954-d9c2-8120-af12-dbf6ca2ad3c8",
                                spaceId: a(54353).rQ
                            },
                            "th-TH": {
                                previewRootId: "22317954-d9c2-816e-a1db-ede575b22b4b",
                                rootId: "22317954-d9c2-816e-a1db-ede575b22b4b",
                                spaceId: a(54353).rQ
                            },
                            "ar-SA": {
                                rootId: "2b817954-d9c2-80c3-bd3a-c079ca7962cb",
                                previewRootId: "2b817954-d9c2-80c3-bd3a-c079ca7962cb",
                                spaceId: a(54353).rQ
                            },
                            "he-IL": {
                                rootId: "2b817954-d9c2-8064-846c-f5466598e98d",
                                previewRootId: "2b817954-d9c2-8064-846c-f5466598e98d",
                                spaceId: a(54353).rQ
                            }
                        },
                        nameMessage: a(647414).DZ.getStartedPageMobile
                    },
                    evernote: s,
                    web: o
                },
                c = {
                    teamsHomepage: {
                        emoji: "🏠",
                        nameMessage: a(647414).DZ.teamsHomepage,
                        sources: {
                            "en-US": {
                                previewRootId: "4cd0eced-e273-46c2-84f5-a7efd7fbdd2f",
                                rootId: "4cd0eced-e273-46c2-84f5-a7efd7fbdd2f",
                                spaceId: a(54353).rQ
                            },
                            "ko-KR": {
                                previewRootId: "82be252e-5184-44cd-a91b-a7d6ffdefac6",
                                rootId: "82be252e-5184-44cd-a91b-a7d6ffdefac6",
                                spaceId: a(54353).rQ
                            },
                            "ja-JP": {
                                previewRootId: "bea8efd0-61d7-495b-a255-5c1f40753cf7",
                                rootId: "bea8efd0-61d7-495b-a255-5c1f40753cf7",
                                spaceId: a(54353).rQ
                            },
                            "fr-FR": {
                                previewRootId: "12a6eaa5-30f7-419b-aee7-1be2dbc7278c",
                                rootId: "12a6eaa5-30f7-419b-aee7-1be2dbc7278c",
                                spaceId: a(54353).rQ
                            },
                            "de-DE": {
                                previewRootId: "75db54d0-46ad-43b1-8ef0-7556ce0e9069",
                                rootId: "75db54d0-46ad-43b1-8ef0-7556ce0e9069",
                                spaceId: a(54353).rQ
                            },
                            "es-ES": {
                                previewRootId: "9ac64262-cad7-44f3-bfae-96dabec9e770",
                                rootId: "9ac64262-cad7-44f3-bfae-96dabec9e770",
                                spaceId: a(54353).rQ
                            },
                            "es-LA": {
                                previewRootId: "5b51de44-604b-4a96-b421-9f3e3cf470d2",
                                rootId: "5b51de44-604b-4a96-b421-9f3e3cf470d2",
                                spaceId: a(54353).rQ
                            },
                            "pt-BR": {
                                previewRootId: "b9626438-4451-441c-9608-35ab50e3b182",
                                rootId: "b9626438-4451-441c-9608-35ab50e3b182",
                                spaceId: a(54353).rQ
                            }
                        }
                    }
                }
        },
        614886: (e, t, a) => {
            a.d(t, {
                m: () => s,
                y: () => d
            }), a(16280);
            var o = () => a(546605);
            class r extends o().Store {
                getInitialState() {
                    return {
                        jobs: {}
                    }
                }
                getJob(e) {
                    return this.state.jobs[e]
                }
                registerJob(e, t) {
                    this.setState({
                        jobs: { ...this.state.jobs,
                            [e]: {
                                jobId: e,
                                status: "running",
                                pageId: t,
                                startedAt: Date.now()
                            }
                        }
                    })
                }
                completeJob(e) {
                    let t = this.state.jobs[e];
                    t && this.setState({
                        jobs: { ...this.state.jobs,
                            [e]: { ...t,
                                status: "completed",
                                finishedAt: Date.now()
                            }
                        }
                    })
                }
                failJob(e, t) {
                    let a = this.state.jobs[e];
                    a && this.setState({
                        jobs: { ...this.state.jobs,
                            [e]: { ...a,
                                status: "failed",
                                error: t,
                                finishedAt: Date.now()
                            }
                        }
                    })
                }
                removeJob(e) {
                    let {
                        [e]: t, ...a
                    } = this.state.jobs;
                    this.setState({
                        jobs: a
                    })
                }
            }
            let i = new r;

            function d(e) {
                let {
                    fileType: t,
                    spaceId: o,
                    analyticsFrom: r,
                    importLocation: i
                } = e;
                a(717089).e.setState({
                    open: !0,
                    currentStep: "uploadFile",
                    fileType: t,
                    fileName: "",
                    fileUrl: "",
                    fileSize: 0,
                    isLoading: !1,
                    error: void 0,
                    uploadProgress: 0,
                    importLocation: i ? ? {
                        type: "privatePage"
                    },
                    spaceId: o,
                    analyticsFrom: r || "modal"
                })
            }
            async function s(e) {
                let {
                    environment: t,
                    fileUrl: o,
                    signedToken: r,
                    fileName: d,
                    fileType: s,
                    spaceStore: n,
                    spaceViewStore: c,
                    importLocation: l,
                    analyticsFrom: p
                } = e, m = performance.now();
                try {
                    let e, f, u;
                    a(717089).e.setLoading(!0), a(717089).e.setStep("importing");
                    let g = a(47797).A.getOrCreateFlowId(),
                        I = a(175448).R.getOrCreateImportId(),
                        b = (0, a(92513).JW)(),
                        v = await a(194050).n3({
                            environment: t,
                            spaceStore: n,
                            spaceViewStore: c,
                            uploadType: s,
                            fileCount: 1,
                            fileName: d,
                            importLocation: l
                        }),
                        h = (0, a(714350).P)(),
                        w = "genericImporter" === s ? "file" : s;
                    a(691968).Pd({
                        import_source: w,
                        flowId: g,
                        import_instance_id: b
                    });
                    let _ = d.toLowerCase().endsWith(".zip"),
                        y = "genericImporter" === s && _ && a(218744).default.checkGate({
                            gateName: "zip_importer_v2_enabled"
                        }),
                        R = y ? (e = {
                            fileURL: o,
                            fileName: d,
                            spaceId: v.spaceId,
                            rootPageId: v.pageId,
                            rootTableId: a(832375).evP,
                            signedToken: r,
                            importInstanceId: b,
                            importId: I,
                            flowId: g,
                            userTimeZone: h,
                            importEntryPoint: p || "modal"
                        }, a(691968).mM({
                            import_source: w,
                            flowId: g,
                            data: e
                        }), a(259242).UT({
                            environment: t,
                            eventName: a(563126).Z,
                            request: e,
                            multiCellRouting: {
                                spaceIds: [v.spaceId]
                            }
                        })) : (f = a(717089).e.state.open ? a(717089).e.state.fileSize : void 0, u = {
                            importType: v.importType,
                            fileURL: o,
                            fileName: d,
                            block: {
                                id: v.pageId,
                                spaceId: v.spaceId
                            },
                            spaceId: v.spaceId,
                            flowId: g,
                            userTimeZone: h,
                            signedToken: r,
                            importEntryPoint: p || "modal",
                            importId: I,
                            importInstanceId: b,
                            ...f ? {
                                fileSize: f
                            } : {}
                        }, a(691968).mM({
                            import_source: w,
                            flowId: g,
                            data: u
                        }), a(259242).UT({
                            environment: t,
                            eventName: a(540234).V,
                            request: u,
                            multiCellRouting: {
                                spaceIds: [v.spaceId]
                            }
                        }));
                    return a(717089).e.setImportJobInfo(b, v.pageId), a(717089).e.setLoading(!1), ! function(e) {
                        let {
                            jobId: t,
                            pageId: a,
                            taskStream: o,
                            onComplete: r,
                            onError: d
                        } = e;
                        i.registerJob(t, a), (async () => {
                            try {
                                for await (let a of o) {
                                    var s;
                                    if (a.error) {
                                        let e = "object" == typeof a.error && "message" in a.error ? a.error.message : "Import failed";
                                        i.failJob(t, e), null == d || d(t, e);
                                        return
                                    }
                                    null == (s = e.onProgress) || s.call(e, t, a)
                                }
                                i.completeJob(t), null == r || r(t, a)
                            } catch (a) {
                                let e = a instanceof Error ? a.message : "Unknown error occurred";
                                i.failJob(t, e), null == d || d(t, e)
                            }
                        })()
                    }({
                        jobId: b,
                        pageId: v.pageId,
                        taskStream: R,
                        onProgress: (e, t) => {
                            if (y && !t.error && t.value && "isComplete" in t.value && !t.value.isComplete) {
                                let {
                                    status: e
                                } = t.value, o = "messageValues" in e ? e.messageValues : "interpolatedValues" in e ? e.interpolatedValues : void 0;
                                a(717089).e.setProgressMessage(a(962299).A.formatMessage(e.message, o))
                            }
                        },
                        onComplete: (e, o) => {
                            (0, a(194050).BA)(t, {
                                uploadType: s,
                                importType: v.importType,
                                importLatencies: {
                                    overallTimeTaken: performance.now() - m
                                },
                                fileNames: [d]
                            });
                            let r = a(970831).B.createChildStore(n, {
                                table: a(832375).evP,
                                id: v.pageId
                            });
                            a(549960).vH(t, {
                                from: "import",
                                type: "page",
                                new_page_id: r.id,
                                creating_block_id: r.id,
                                parent_collection_id: r.getParentCollectionIdUpToTwoLevels()
                            });
                            let i = a(717089).e.state;
                            i.open && i.jobId === e && "importing" === i.currentStep && a(717089).e.setStep("completed")
                        },
                        onError: (e, t) => {
                            let o = a(717089).e.state;
                            o.open && o.jobId === e && "importing" === o.currentStep && (a(717089).e.setError(t), a(717089).e.setStep("failed"))
                        }
                    }), {
                        success: !0,
                        pageId: v.pageId
                    }
                } catch (t) {
                    let e;
                    return e = t instanceof a(101787).mvP && t.clientData && "type" in t.clientData && (0, a(722371).O)(a(194314)._, t.clientData.type) ? a(962299).A.formatMessage(a(194314)._[t.clientData.type]) : (0, a(161179).A)(t).message, a(717089).e.setError(e), a(717089).e.setLoading(!1), a(717089).e.setStep("failed"), {
                        success: !1,
                        error: e
                    }
                }
            }(0, a(202146).exposeDebugValue)("importJobManagerStore", i)
        },
        713834: (e, t, a) => {
            a.d(t, {
                m: () => o
            });
            let o = (0, a(109939).YK)({
                csv_import_inconsistent_columns: {
                    id: "csvImportErrors.inconsistentColumns.message",
                    defaultMessage: "Inconsistent number of columns in CSV file, {numBadRows} rows had problems. Header row had {numTitleColumns} columns. Row {firstBadRowIndex} was first inconsistent row with {firstBadRowLength} columns. Parsed row {firstBadRowIndex}: {firstBadRow}"
                }
            })
        },
        717089: (e, t, a) => {
            a.d(t, {
                e: () => i
            });
            var o = () => a(546605);
            class r extends o().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
                setFileMetadata(e, t, a, o) {
                    this.state.open && this.setState({ ...this.state,
                        fileName: e,
                        fileUrl: t,
                        fileSize: a,
                        signedToken: o
                    })
                }
                setFile(e) {
                    this.state.open && this.setState({ ...this.state,
                        file: e
                    })
                }
                setLoading(e) {
                    this.state.open && this.setState({ ...this.state,
                        isLoading: e
                    })
                }
                setUploadProgress(e) {
                    if (!this.state.open) return;
                    let t = Number.isFinite(e) ? Math.min(100, Math.max(0, e)) : 0,
                        a = 0 === t ? 0 : this.state.isLoading && this.state.uploadProgress > 0 ? Math.max(this.state.uploadProgress, t) : t;
                    this.setState({ ...this.state,
                        uploadProgress: a
                    })
                }
                setError(e) {
                    this.state.open && this.setState({ ...this.state,
                        error: e
                    })
                }
                setStep(e) {
                    this.state.open && this.setState({ ...this.state,
                        currentStep: e,
                        progressMessage: "completed" === e || "failed" === e ? void 0 : this.state.progressMessage
                    })
                }
                setImportLocation(e) {
                    this.state.open && this.setState({ ...this.state,
                        importLocation: e
                    })
                }
                setSpaceId(e) {
                    this.state.open && this.setState({ ...this.state,
                        spaceId: e
                    })
                }
                setImportJobInfo(e, t) {
                    this.state.open && this.setState({ ...this.state,
                        jobId: e,
                        importedPageId: t
                    })
                }
                setProgressMessage(e) {
                    this.state.open && this.setState({ ...this.state,
                        progressMessage: e
                    })
                }
                close(e) {
                    this.setState({ ...this.getInitialState()
                    })
                }
            }
            let i = new r;
            (0, a(202146).exposeDebugValue)("fileImporterStore", i)
        },
        721174: (e, t, a) => {
            a.d(t, {
                nH: () => g,
                v7: () => l,
                ew: () => m
            }), a(16280), a(944114), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(823215), a(354520), a(672577), a(581454);
            var o = () => a(218744),
                r = () => a(970831),
                i = () => a(832375),
                d = () => a(381453);
            let s = ["templates", "teamspaceTemplates"],
                n = {
                    templates: "private",
                    teamspaceTemplates: "teamspace"
                };

            function c(e) {
                if (!e) return [];
                let t = [];
                for (let a of s)
                    for (let o of e[a] ? ? []) t.push({
                        name: o,
                        installLocation: n[a]
                    });
                return t
            }

            function l(e) {
                let {
                    userContext: t
                } = e;
                for (let e of o().default.getConfigKey("getting_started_unified_config", t.deviceType)) {
                    let {
                        eligibilityConditions: r,
                        locales: i
                    } = e;
                    if (!(r.every(e => (function(e, t) {
                            let a = function(e) {
                                for (let t of ["onboardingFlowName", "spaceJoinOrCreate", "planType", "deviceType", "calendarSignupStatus", "featureIntent", "domainType", "isNewUserOnboarding", "acceptedTimedTrialOffer", "spaceSubscriptionTier", "isSpaceSalesAssisted"])
                                    if (t === e) return t
                            }(e.key);
                            if (!a) return !1;
                            let o = t[a];
                            if (void 0 === o) return !1;
                            switch (e.operator) {
                                case "equals":
                                    return `${o}` == `${e.value}`;
                                case "notEquals":
                                    return `${o}` != `${e.value}`;
                                case "in":
                                    return Array.isArray(e.value) && e.value.map(e => `${e}`).includes(`${o}`);
                                case "exists":
                                    return void 0 !== o;
                                default:
                                    return !1
                            }
                        })(e, t)) && (!i || i.includes(t.locale)))) continue;
                    let {
                        experiments: n = []
                    } = e;
                    for (let e of n) {
                        var a;
                        let r = (a = e, o().default.getEligibleGroup({
                            experimentId: a.experimentName,
                            defaultGroup: "ineligible",
                            disableExposureLogging: !0
                        }));
                        if (!(function(e) {
                                let t;
                                for (let a of e.experimentGroups)
                                    for (let e of s)
                                        for (let r of a[e] ? ? []) {
                                            let e = o().default.getConfigKey("getting_started_templates", r);
                                            if (!e || !e.spaceId) continue;
                                            let a = new Set(Object.keys(e.localizedTemplates));
                                            t = t ? t.intersection(a) : a
                                        }
                                return t ? ? new Set
                            })(e).has(t.locale)) continue;
                        let i = r ? function(e) {
                            let {
                                experimentConfig: t,
                                variant: a
                            } = e;
                            return c(t.experimentGroups.find(e => e.groupName === a))
                        }({
                            experimentConfig: e,
                            variant: r
                        }) : [];
                        if (!i.length) {
                            "control" === r && o().default.manuallyLogExperimentExposure(e.experimentName);
                            continue
                        }
                        let n = p(i, t);
                        if (n) return o().default.manuallyLogExperimentExposure(e.experimentName), d().$z(n, "options.installLocation")
                    }
                    let l = c(e);
                    if (l.length > 0) {
                        let e = p(l, t);
                        if (e) return d().$z(e, "options.installLocation")
                    }
                }
            }

            function p(e, t) {
                let a = null == e ? void 0 : e.map(e => {
                    var a;
                    let r = o().default.getConfigKey("getting_started_templates", e.name);
                    if (!r || !r.spaceId) return;
                    let i = null == (a = r.localizedTemplates) ? void 0 : a[t.locale];
                    return i ? {
                        templateName: e.name,
                        spaceId: r.spaceId,
                        pageId: i,
                        options: {
                            isLandingPage: r.isLandingPage,
                            relativeDatesDefinition: i ? o().default.getConfigKey("getting_started_collection_subpage_relative_dates_definition", i) : void 0,
                            installLocation: e.installLocation
                        }
                    } : void 0
                }).filter(e => void 0 !== e);
                if (0 !== a.length && a.length === e.length) return a
            }

            function m(e) {
                let {
                    environment: t,
                    pageStore: o,
                    originalToDuplicate: d,
                    relativeDatesDefinition: s,
                    transaction: n
                } = e;
                if (!s) return;
                let c = [];
                for (let [e, l] of Object.entries(s)) {
                    let s = {
                            id: e,
                            table: i().evP,
                            spaceId: o.getSpaceId()
                        },
                        p = d.get(s);
                    if (!p) {
                        c.push(e);
                        continue
                    }! function(e) {
                        let {
                            environment: t,
                            targetPageStore: o,
                            dateTransformation: r,
                            transaction: i
                        } = e;
                        if (!o.isDefined()) return !1;
                        let d = o.getAssociatedCollectionStore();
                        if (!d || !(d instanceof a(356912).m)) return !1;
                        let s = d.getSchema();
                        if (!s) return !1;
                        let n = [];
                        for (let [e, t] of Object.entries(s)) t && "date" === t.type && n.push(e);
                        if (0 === n.length) return !1; {
                            let e, {
                                    startDateOffset: d,
                                    duration: s,
                                    roundUpToNearest: c,
                                    type: l,
                                    reminder: p
                                } = r,
                                m = (0, a(714350).P)(),
                                g = Date.now();
                            c && c > 0 && (g = Math.ceil(g / c) * c);
                            let I = g + d;
                            e = "date" === l && s ? a(25825).Mk(I, I + s, m) : "date" === l ? a(25825).p6(I, m) : s ? a(25825).NC(I, I + s, m) : a(25825).KQ(I, m), p && (e = (0, a(943003).$P)(e) || (0, a(943003).oM)(e) ? { ...e,
                                reminder: f
                            } : { ...e,
                                reminder: u
                            });
                            let b = (0, a(561872).m5)(e),
                                v = {};
                            for (let e of n) v[e] = b;
                            (0, a(249487).C)({
                                environment: t,
                                store: o,
                                properties: v,
                                transaction: i
                            })
                        }
                    }({
                        environment: t,
                        targetPageStore: r().B.createChildStore(o, p),
                        dateTransformation: l,
                        transaction: n
                    }) && c.push(e)
                }
                c.length && a(419750).Fg(Error("Getting started relative date application failed"), {
                    data: {
                        pageStoreId: o.id,
                        relativeDatesDefinition: s,
                        invalidPageIds: c
                    }
                })
            }
            let f = {
                    unit: "day",
                    value: 0,
                    time: a(943003).lM,
                    defaultTimeZone: (0, a(714350).P)()
                },
                u = {
                    unit: "minute",
                    value: 0
                };

            function g(e) {
                let {
                    spaceId: t,
                    rootId: o
                } = (0, a(322095).B)(a(606430).y[e], a(962299).A.getIntl());
                return {
                    templateName: e,
                    spaceId: t,
                    pageId: o
                }
            }
        },
        730137: (e, t, a) => {
            a.d(t, {
                U: () => o
            }), a(16280);
            async function o(e) {
                let t, {
                        environment: o,
                        spaceStore: r,
                        spaceViewStore: i,
                        userSettingsStore: d,
                        from: s
                    } = e,
                    {
                        templateName: n,
                        spaceId: c,
                        pageId: l,
                        options: p
                    } = e.template;
                if (!a(205885).A.state.online) return;
                let m = await o.api.callCellCompatibleApi({
                    eventName: "loadBlockSubtree",
                    environment: o,
                    data: {
                        block: {
                            id: l,
                            spaceId: c
                        },
                        shallow: !1
                    },
                    cellNavigation: {
                        spaceId: c
                    }
                });
                if ("failed" === m.type) return void(0, a(434107).x)(o, {
                    getting_started_page_type: n,
                    errorType: "loadBlockSubtreeFailed",
                    spaceId: r.id,
                    errorMessage: m.error.message,
                    copyPageId: l
                });
                t = a(412951).RecordMapWithRole.create(m.data.subtreeRecordMap);
                let {
                    loadLocalSubtree: f,
                    localDuplicate: u
                } = await (0, a(411648).D6)(), {
                    messages: {
                        createAndDuplicatePageError: g
                    }
                } = await (0, a(411648).nd)(), I = "spaceActions.createGettingStartedPageInSpace", {
                    performResult: b,
                    serverCommitResult: v
                } = (0, a(377796).createAndCommit)({
                    userAction: I,
                    environment: o,
                    cellTarget: {
                        spaceWithId: r.id
                    },
                    canUndo: !0,
                    isTemplateInstantiationTransaction: !0,
                    perform: e => {
                        let s = a(964232).IT({
                            environment: o,
                            spaceStore: r,
                            spaceViewStore: i,
                            parent: "private",
                            prepend: !0,
                            transaction: e
                        });
                        (0, a(31069)._)({
                            currentUserId: o.currentUser.id,
                            defaultRecordCache: o.defaultRecordCache,
                            inMemoryRecordCache: s.inMemoryRecordCache,
                            recordMap: t,
                            debugSource: I,
                            isPendingTransactionForRecord: a(941701).transactionQueue.isPendingTransactionForRecord.bind(a(941701).transactionQueue)
                        });
                        let c = f({
                            environment: o,
                            blockId: l,
                            inMemoryRecordCache: s.inMemoryRecordCache,
                            options: {
                                allowCopyCollections: !0,
                                requireFullSubtree: !1,
                                skipTransclusionContainerChildren: !1,
                                allowCopyExternalObjectInstances: !0,
                                includeLegacyTransclusionBlockValues: !0
                            }
                        }).recordMap;
                        if (!c) throw (0, a(434107).x)(o, {
                            getting_started_page_type: n,
                            errorType: "createAndDuplicatePageFailed",
                            spaceId: r.id
                        }), Error(a(962299).A.formatMessage(g));
                        let {
                            targetBlockStore: m,
                            originalToDuplicate: b
                        } = u({
                            environment: o,
                            sourceBlockId: l,
                            targetBlockPointer: s.pointer,
                            sourceBlockSubtree: c,
                            targetInMemoryRecordCache: s.inMemoryRecordCache,
                            transaction: e,
                            templateInstallationMetadata: {
                                source: "onboarding"
                            },
                            from: "create_getting_started",
                            destinationTable: a(832375).NXh,
                            options: {
                                allowRedundancy: !0,
                                deepCopyTransclusionContainers: !0,
                                isTemplateInstantiation: !0,
                                resolveTemplateVariables: !0,
                                preventLegacyTransclusions: !0
                            }
                        });
                        null != p && p.relativeDatesDefinition && (0, a(721174).ew)({
                            environment: o,
                            pageStore: m,
                            originalToDuplicate: b,
                            relativeDatesDefinition: p.relativeDatesDefinition,
                            transaction: e
                        });
                        let v = {},
                            h = {};
                        return "evernote" === n ? h.created_evernote_getting_started = !0 : v.created_getting_started = !0, Object.keys(v).length > 0 && (0, a(173157).z)({
                            store: i,
                            data: v,
                            transaction: e
                        }), Object.keys(h).length > 0 && (0, a(173157).z)({
                            store: d.getSettingsStore(),
                            data: h,
                            transaction: e
                        }), s
                    }
                });
                return v.then(() => {
                    (0, a(887470).K)(o, {
                        getting_started_page_type: n,
                        getting_started_page_id: l,
                        duplicated_from_page_id: l,
                        duplicated_to_page_id: b.id,
                        from: s
                    })
                }), b
            }
        },
        887470: (e, t, a) => {
            a.d(t, {
                K: () => o
            });

            function o(e, t) {
                (0, a(195857).DO_NOT_USE_trackLegacy)("getting_started_page_create", t)
            }
        }
    }
]);