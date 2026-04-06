"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [55940], {
        62899: (e, t, o) => {
            o.d(t, {
                DZ: () => a,
                HS: () => l,
                Jt: () => p,
                MX: () => n,
                ST: () => d,
                _2: () => u,
                ak: () => s,
                f9: () => c,
                sM: () => r
            });
            let a = (0, o(109939).YK)({
                    sprintsCollectionName: {
                        defaultMessage: "Sprints",
                        id: "appTemplates.sprints.sprintsCollectionName"
                    },
                    tasksCollectionName: {
                        defaultMessage: "Tasks",
                        id: "appTemplates.sprints.tasksCollectionName"
                    },
                    sprintsCollectionEmptyTitle: {
                        defaultMessage: "No sprints",
                        id: "appTemplates.projects.sprintsCollectionEmptyTitle"
                    },
                    sprintsCollectionEmptyDescription: {
                        defaultMessage: "Sprints define periods of time, that you can organize Tasks and Projects into.",
                        id: "appTemplates.projects.sprintsCollectionEmptyDescription"
                    },
                    sprintsCollectionDescription: {
                        defaultMessage: "Learn how to use Sprints",
                        id: "pageDescription.sprintBoard.message"
                    },
                    sprintsCollectionEmptyButtonTitle: {
                        defaultMessage: "New sprint",
                        id: "appTemplates.projects.sprintsCollectionEmptyButtonTitle"
                    },
                    sprintsTimelineView: {
                        id: "appTemplates.sprints.sprintsTimelineView",
                        defaultMessage: "Timeline"
                    },
                    sprintsTimelineViewDescription: {
                        defaultMessage: "Timeline of sprints",
                        id: "appTemplates.tasks.sprintsTimelineViewDescription"
                    },
                    sprint1: {
                        id: "appTemplates.sprints.sprint1",
                        defaultMessage: "Sprint 1"
                    },
                    sprint2: {
                        id: "appTemplates.sprints.sprint2",
                        defaultMessage: "Sprint 2"
                    },
                    sprint3: {
                        id: "appTemplates.sprints.sprint3",
                        defaultMessage: "Sprint 3"
                    },
                    sprintTitleProperty: {
                        id: "appTemplates.tasks.sprintTitleProperty",
                        defaultMessage: "Sprint name"
                    },
                    datesProperty: {
                        defaultMessage: "Dates",
                        id: "appTemplates.sprints.timelineProperty"
                    },
                    uniqueIdProperty: {
                        defaultMessage: "Sprint ID",
                        id: "appTemplatesSprintsV2.sprints.uniqueIdProperty"
                    },
                    sprintStatus: {
                        id: "appTemplatesSprintsV2.sprints.sprintStatus",
                        defaultMessage: "Sprint status"
                    },
                    sprintStatusDescription: {
                        id: "appTemplates.sprints.sprintStatusDescription",
                        defaultMessage: "Track if a sprint is the current active sprint."
                    },
                    allSprintsViewDescription: {
                        defaultMessage: "Table of all sprints",
                        id: "appTemplates.tasks.allSprintsViewDescription"
                    },
                    allSprintsViewName: {
                        defaultMessage: "All sprints",
                        id: "appTemplates.sprints.allSprintsViewName"
                    },
                    next: {
                        id: "appTemplatesSprintsV2.sprints.next",
                        defaultMessage: "Next"
                    },
                    last: {
                        id: "appTemplatesSprintsV2.sprints.last",
                        defaultMessage: "Last"
                    },
                    past: {
                        id: "appTemplatesSprintsV2.sprints.past",
                        defaultMessage: "Past"
                    },
                    future: {
                        id: "appTemplatesSprintsV2.sprints.future",
                        defaultMessage: "Future"
                    },
                    current: {
                        id: "appTemplatesSprintsV2.sprints.current",
                        defaultMessage: "Current"
                    },
                    tasksFeatureDescription: {
                        defaultMessage: "Database for more granular pieces of work. Track tasks for each sprint.",
                        id: "appTemplates.sprints.tasksFeatureDescription"
                    },
                    totalTasksCompletedInSprint: {
                        defaultMessage: "Total Tasks",
                        id: "appTemplatesSprintsV2.projects.totalTasksCompletedInSprint"
                    }
                }),
                i = {
                    name: o(962299).A.formatMessage(a.sprintStatus),
                    type: "status",
                    groups: [{
                        id: o(11448).du,
                        name: o(998833).nX,
                        color: "blue",
                        optionIds: [o(11448).Xk]
                    }, {
                        id: o(11448).fv,
                        name: o(998833).p7,
                        color: "gray",
                        optionIds: [o(11448).tO, o(11448).Jd]
                    }, {
                        id: o(11448).nl,
                        name: o(998833).P0,
                        color: "green",
                        optionIds: [o(11448).el, o(11448).aJ]
                    }],
                    options: [{
                        id: o(11448).Xk,
                        color: "blue",
                        value: o(962299).A.formatMessage(a.current)
                    }, {
                        id: o(11448).tO,
                        color: "purple",
                        value: o(962299).A.formatMessage(a.next)
                    }, {
                        id: o(11448).Jd,
                        color: "gray",
                        value: o(962299).A.formatMessage(a.future)
                    }, {
                        id: o(11448).el,
                        color: "yellow",
                        value: o(962299).A.formatMessage(a.last)
                    }, {
                        id: o(11448).aJ,
                        color: "brown",
                        value: o(962299).A.formatMessage(a.past)
                    }],
                    defaultOption: o(962299).A.formatMessage(a.future)
                };

            function r() {
                return [{
                    uri: o(11448).IE,
                    type: "collection_view_block",
                    name: o(962299).A.formatMessage(a.sprintsCollectionName),
                    defaultViewsOrder: [`${o(11448).IB}/sprints_view`, `${o(11448).IB}/sprints_timeline_view`]
                }, {
                    uri: o(11448).av,
                    type: "collection",
                    value: {
                        name: (0, o(247438).x9d)(o(962299).A.formatMessage(a.sprintsCollectionName)),
                        description: (0, o(247438).lux)((0, o(247438).x9d)(o(962299).A.formatMessage(a.sprintsCollectionDescription)), (0, o(442564).x)("guides.sprintPlanning")),
                        schema: (0, o(11448).Qr)(o(962299).A.intl),
                        format: {
                            property_visibility: [{
                                property: o(11448).Hx.StatusV2,
                                visibility: "show"
                            }, {
                                property: o(11448).Hx.Dates,
                                visibility: "show"
                            }, {
                                property: o(11448).Hx.CompletedTasksRollup,
                                visibility: "show"
                            }, {
                                property: o(11448).Hx.SprintToTaskRelation,
                                visibility: "section"
                            }, {
                                property: o(11448).Hx.UniqueId,
                                visibility: "hide"
                            }, {
                                property: o(11448).Hx.TotalTasksRollup,
                                visibility: "hide"
                            }],
                            collection_page_properties: [{
                                property: o(11448).Hx.StatusV2
                            }, {
                                property: o(11448).Hx.Dates
                            }, {
                                property: o(11448).Hx.CompletedTasksRollup
                            }],
                            collection_page_sections: [{
                                section: o(11448).Hx.SprintToTaskRelation,
                                visibility: "minimal"
                            }]
                        },
                        icon: "/icons/database_lightgray.svg"
                    },
                    collectionViewBlockUri: o(11448).IE,
                    emptyIcon: o(896221).A.images.appPackages.projectsProjectsEmptyIconPng,
                    emptyTitle: o(962299).A.formatMessage(a.sprintsCollectionEmptyTitle),
                    emptyDescription: o(962299).A.formatMessage(a.sprintsCollectionEmptyDescription),
                    emptyButtonTitle: o(962299).A.formatMessage(a.sprintsCollectionEmptyButtonTitle)
                }]
            }

            function s() {
                return [{
                    uri: `${o(11448).IB}/sprints_timeline_view`,
                    type: "collection_view",
                    collectionUri: o(11448).av,
                    description: o(962299).A.formatMessage(a.sprintsTimelineViewDescription),
                    value: {
                        type: "timeline",
                        name: o(962299).A.formatMessage(a.sprintsTimelineView),
                        format: {
                            list_properties: [{
                                visible: !0,
                                property: o(11448).Hx.Dates
                            }],
                            table_properties: [{
                                width: 141,
                                visible: !0,
                                property: "title"
                            }, {
                                width: 147,
                                visible: !0,
                                property: o(11448).Hx.StatusV2
                            }, {
                                width: 269,
                                visible: !0,
                                property: o(11448).Hx.Dates
                            }, {
                                width: 269,
                                visible: !1,
                                property: o(11448).Hx.UniqueId
                            }, {
                                width: 269,
                                visible: !1,
                                property: o(11448).Hx.TotalTasksRollup
                            }],
                            timeline_preference: {
                                zoomLevel: "quarter",
                                centerTimestamp: (0, o(25825).ln)((0, o(25825).Ec)((0, o(714350).P)()), (0, o(714350).P)())
                            },
                            timeline_properties: [{
                                visible: !0,
                                property: "title"
                            }, {
                                visible: !1,
                                property: o(11448).Hx.StatusV2
                            }, {
                                visible: !0,
                                property: o(11448).Hx.Dates
                            }, {
                                visible: !1,
                                property: o(11448).Hx.UniqueId
                            }, {
                                visible: !1,
                                property: o(11448).Hx.TotalTasksRollup
                            }],
                            timeline_show_table: !0,
                            timeline_table_properties: [{
                                width: 151,
                                visible: !0,
                                property: "title"
                            }, {
                                width: 200,
                                visible: !1,
                                property: o(11448).Hx.Dates
                            }, {
                                width: 132,
                                visible: !0,
                                property: o(11448).Hx.StatusV2
                            }, {
                                width: 200,
                                visible: !1,
                                property: o(11448).Hx.UniqueId
                            }, {
                                width: 200,
                                visible: !1,
                                property: o(11448).Hx.TotalTasksRollup
                            }]
                        },
                        page_sort: ["notion://projects/tutorial/sprints/sprint1", "notion://projects/tutorial/sprints/sprint2", "notion://projects/tutorial/sprints/sprint3"],
                        query2: {
                            timeline_by: o(11448).Hx.Dates,
                            aggregations: [{
                                property: "title",
                                aggregator: "count"
                            }],
                            sort: [{
                                property: o(11448).Hx.StatusV2,
                                direction: "ascending"
                            }]
                        }
                    },
                    collectionViewBlockUri: o(11448).IE
                }]
            }

            function p() {
                return [{
                    uri: `${o(11448).IB}/sprints_view`,
                    type: "collection_view",
                    collectionUri: o(11448).av,
                    description: o(962299).A.formatMessage(a.allSprintsViewDescription),
                    value: {
                        type: "table",
                        name: o(962299).A.formatMessage(a.allSprintsViewName),
                        format: {
                            table_properties: [{
                                width: 167,
                                visible: !0,
                                property: "title"
                            }, {
                                width: 137,
                                visible: !0,
                                property: o(11448).Hx.StatusV2
                            }, {
                                width: 259,
                                visible: !0,
                                property: o(11448).Hx.Dates
                            }, {
                                width: 75,
                                visible: !1,
                                property: o(11448).Hx.UniqueId
                            }, {
                                width: 112,
                                visible: !0,
                                property: o(11448).Hx.TotalTasksRollup
                            }, {
                                width: 158,
                                visible: !0,
                                property: o(11448).Hx.CompletedTasksRollup
                            }, {
                                width: 184,
                                visible: !1,
                                property: o(11448).Hx.SprintToTaskRelation
                            }]
                        },
                        query2: {
                            sort: [{
                                property: o(11448).Hx.StatusV2,
                                direction: "ascending"
                            }]
                        },
                        page_sort: ["notion://projects/tutorial/sprints/sprint1", "notion://projects/tutorial/sprints/sprint2", "notion://projects/tutorial/sprints/sprint3"]
                    },
                    collectionViewBlockUri: o(11448).IE
                }]
            }

            function n() {
                return [...(0, o(869828).Ow)()]
            }

            function l() {
                return {
                    uri: `${o(11448).IB}/status_feature`,
                    name: o(962299).A.formatMessage(a.sprintStatus),
                    description: o(962299).A.formatMessage(a.sprintStatusDescription),
                    collectionUri: o(11448).av,
                    icon: o(896221).A.images.appPackages.featureStatusSvg,
                    dependencies: [{
                        uri: o(11448).Hx.StatusV2,
                        type: "property",
                        collectionUri: o(11448).av,
                        name: o(962299).A.formatMessage(a.sprintStatus),
                        propertySchema: i
                    }]
                }
            }

            function c() {
                return {
                    uri: `${o(11448).IB}/sprints_timeline_feature`,
                    name: o(962299).A.formatMessage(a.sprintsTimelineView),
                    description: o(962299).A.formatMessage(a.sprintsTimelineViewDescription),
                    icon: o(896221).A.images.appPackages.featureGanttSvg,
                    dependencies: [...s()],
                    collectionUri: o(11448).av
                }
            }

            function u() {
                return {
                    uri: `${o(11448).IB}/sprints_table_feature`,
                    name: o(962299).A.formatMessage(a.allSprintsViewName),
                    description: o(962299).A.formatMessage(a.allSprintsViewDescription),
                    dependencies: [...p()],
                    collectionUri: o(11448).av
                }
            }

            function d() {
                let e = [...(0, o(355940).KO)(), ...(0, o(355940).Fs)(!1), ...(0, o(355940).Of)(!1), ...(0, o(355940).qt)(), {
                    uri: o(11448).Hx.TotalTasksRollup,
                    type: "property",
                    collectionUri: o(11448).av,
                    name: o(962299).A.formatMessage(a.totalTasksCompletedInSprint),
                    description: o(962299).A.formatMessage(a.totalTasksCompletedInSprint),
                    propertySchema: {
                        type: "rollup",
                        name: o(962299).A.formatMessage(a.totalTasksCompletedInSprint),
                        aggregation: "count_values",
                        target_property: o(11448).yx.Status,
                        relation_property: o(11448).Hx.SprintToTaskRelation,
                        target_property_type: "status"
                    }
                }];
                return {
                    uri: `${o(11448).IB}/sprints_with_tasks_feature`,
                    name: o(962299).A.formatMessage(a.tasksCollectionName),
                    description: o(962299).A.formatMessage(a.tasksFeatureDescription),
                    icon: o(896221).A.images.appPackages.taskDbIconSvg,
                    dependencies: e,
                    collectionUri: o(11448).av
                }
            }
        },
        188326: (e, t, o) => {
            o.d(t, {
                Y: () => a
            });
            let a = {
                name: "github_app_pull",
                regex: "^(?<site>https\\:\\/\\/github\\.com)\\/(?<owner>[a-zA-Z0-9-_\\.]+)\\/(?<repo>[a-zA-Z0-9-_\\.]+)\\/pull\\/(?<pullReqNo>[0-9]+)(\\/.*)?$",
                attributes: [{
                    id: "title",
                    name: "Title",
                    type: "inline",
                    values: ["$<pullReqNo>"]
                }, {
                    id: "owner_and_repo",
                    name: "Owner and Repo",
                    type: "inline",
                    values: ["$<owner>/$<repo>"]
                }],
                additional_types: {
                    connectedRelation: !0
                },
                connected_relation_properties: {
                    user: {
                        uri: "notion://user-defined-collection/github:users",
                        name: "Related Github Creator",
                        type: "relation"
                    },
                    reviewers: {
                        uri: "notion://user-defined-collection/github:users",
                        name: "Related Github Reviewers",
                        type: "relation"
                    },
                    state: {
                        uri: "notion://user-defined-collection/github:states",
                        name: "State",
                        type: "relation"
                    },
                    title: {
                        name: "Title",
                        type: "title"
                    },
                    number: {
                        name: "PR Number",
                        type: "number"
                    },
                    closed_at: {
                        name: "Closed At",
                        type: "date"
                    },
                    merged_at: {
                        name: "Merged At",
                        type: "date"
                    },
                    created_at: {
                        name: "Created At",
                        type: "date"
                    },
                    updated_at: {
                        name: "Updated At",
                        type: "date"
                    },
                    assignees: {
                        uri: "notion://user-defined-collection/github:users",
                        name: "Related Github Assignees",
                        type: "relation"
                    },
                    description: {
                        name: "Description",
                        type: "text"
                    },
                    labels: {
                        name: "Labels",
                        type: "text"
                    }
                },
                connected_relation_sub_schemas: {
                    "notion://user-defined-collection/github:users": {
                        title: {
                            name: "Title",
                            type: "title"
                        },
                        avatar_url: {
                            name: "Avatar URL",
                            type: "url"
                        },
                        email_address: {
                            name: "Email Address",
                            type: "email"
                        }
                    },
                    "notion://user-defined-collection/github:states": {
                        title: {
                            name: "Title",
                            type: "title"
                        }
                    }
                }
            }
        },
        338486: (e, t, o) => {
            o.d(t, {
                $$: () => l,
                $k: () => b,
                EQ: () => g,
                FL: () => h,
                GN: () => j,
                I3: () => M,
                KS: () => v,
                M5: () => p,
                S4: () => T,
                Tb: () => y,
                Un: () => c,
                Uy: () => P,
                XP: () => k,
                ZB: () => s,
                nU: () => f,
                t_: () => m,
                u7: () => _,
                uj: () => d
            });
            let a = (0, o(109939).YK)({
                    projectsCollectionName: {
                        defaultMessage: "Projects",
                        id: "appTemplates.projects.projectsCollectionName"
                    },
                    tasksCollectionName: {
                        defaultMessage: "Tasks",
                        id: "appTemplates.projects.tasksCollectionName"
                    },
                    projectsCollectionEmptyTitle: {
                        defaultMessage: "No projects",
                        id: "appTemplates.projects.projectsCollectionEmptyTitle"
                    },
                    projectsCollectionEmptyDescription: {
                        defaultMessage: "Projects help your team organize tasks and view the bigger picture",
                        id: "appTemplates.projects.projectsCollectionEmptyDescription"
                    },
                    projectsCollectionEmptyButtonTitle: {
                        defaultMessage: "New project",
                        id: "appTemplates.projects.projectsCollectionEmptyButtonTitle"
                    },
                    projectTimelineFeatureDescription: {
                        defaultMessage: "Timeline of projects",
                        id: "appTemplates.projects.projectTimelineFeatureDescription"
                    },
                    myProjectsView: {
                        id: "appTemplates.tasks.myProjectsView",
                        defaultMessage: "Mine"
                    },
                    myProjectsFeature: {
                        id: "appTemplates.tasks.myProjectsFeature",
                        defaultMessage: "Mine"
                    },
                    myProjectsFeatureDescription: {
                        id: "appTemplates.tasks.myProjectsFeatureDescription",
                        defaultMessage: "Board of projects owned by viewer"
                    },
                    projectsBoardViewDescription: {
                        defaultMessage: "Board of projects",
                        id: "appTemplates.projects.projectsBoardViewDescription"
                    },
                    projectCalendarFeature: {
                        id: "appTemplates.tasks.projectCalendarFeature",
                        defaultMessage: "Calendar"
                    },
                    projectCalendarViewDescription: {
                        defaultMessage: "Calendar of projects",
                        id: "appTemplates.projects.projectCalendarFeature"
                    },
                    projectCalendarFeatureDescription: {
                        id: "appTemplates.tasks.projectCalendarFeatureDescription",
                        defaultMessage: "Schedule projects in a shared calendar"
                    },
                    projectsBoardFeature: {
                        id: "appTemplates.tasks.projectsBoardFeature",
                        defaultMessage: "Board"
                    },
                    projectsBoardFeatureDescription: {
                        id: "appTemplates.tasks.projectsBoardFeatureDescription",
                        defaultMessage: "Board of projects by status"
                    },
                    activeProjectsView: {
                        id: "appTemplates.tasks.activeProjectsView",
                        defaultMessage: "Active"
                    },
                    activeProjectsViewDescription: {
                        defaultMessage: "Board of projects in progress",
                        id: "appTemplates.tasks.activeProjectsViewDescription"
                    },
                    completionRollupName: {
                        id: "appTemplates.projects.completionRollupName",
                        defaultMessage: "Completion"
                    },
                    completionRollupDescription: {
                        id: "appTemplates.projects.completionRollupDescription",
                        defaultMessage: "Visualize progress of tasks completed for each project"
                    },
                    myProjectsViewDescription: {
                        defaultMessage: "Board of my projects",
                        id: "appTemplates.projects.myProjectsViewDescription"
                    },
                    projectsTimelineView: {
                        id: "appTemplates.tasks.projectsTimelineView",
                        defaultMessage: "Timeline"
                    },
                    projectsTimelineViewDescription: {
                        defaultMessage: "Timeline of projects",
                        id: "appTemplates.tasks.projectsTimelineViewDescription"
                    },
                    projectTimelineFeature: {
                        defaultMessage: "Timeline",
                        id: "appTemplates.projects.projectTimelineFeature"
                    },
                    backlog: {
                        id: "appTemplates.projects.backlog",
                        defaultMessage: "Backlog"
                    },
                    planned: {
                        id: "appTemplates.projects.planned",
                        defaultMessage: "Planning"
                    },
                    paused: {
                        defaultMessage: "Paused",
                        id: "appTemplates.projects.paused"
                    },
                    status: {
                        defaultMessage: "Status",
                        id: "appTemplates.projects.status"
                    },
                    statusFeatureDescription: {
                        defaultMessage: "Track progress of projects",
                        id: "appTemplates.projects.statusFeatureDescription"
                    },
                    archived: {
                        id: "appTemplates.projects.archived",
                        defaultMessage: "Archived"
                    },
                    cancelled: {
                        defaultMessage: "Cancelled",
                        id: "appTemplates.projects.cancelled"
                    },
                    allProjectsViewDescription: {
                        defaultMessage: "Table of all projects",
                        id: "appTemplates.tasks.allProjectsViewDescription"
                    },
                    allProjectsViewName: {
                        defaultMessage: "All",
                        id: "appTemplates.projects.allProjectsViewName"
                    },
                    projectsBoardViewName: {
                        defaultMessage: "Board",
                        id: "appTemplates.projects.projectsBoardViewName"
                    },
                    projectTemplate: {
                        id: "appTemplates.projects.projectTemplate",
                        defaultMessage: "New Project"
                    },
                    aboutThisProject: {
                        id: "appTemplates.projects.aboutThisProject",
                        defaultMessage: "About this project"
                    },
                    projectTasks: {
                        id: "appTemplates.projects.projectTasks",
                        defaultMessage: "Project tasks"
                    },
                    activeProjectsTableFeature: {
                        id: "appTemplates.tasks.activeProjectsGalleryFeature",
                        defaultMessage: "Active projects"
                    },
                    activeProjectsTableFeatureDescription: {
                        id: "appTemplates.tasks.activeProjectsGalleryFeatureDescription",
                        defaultMessage: "Gallery of projects in progress"
                    },
                    priorityProperty: {
                        defaultMessage: "Priority",
                        id: "appTemplates.projects.priorityProperty"
                    },
                    projectPriorityFeatureDescription: {
                        defaultMessage: "Triage projects by priority",
                        id: "appTemplates.projects.projectPriorityFeatureDescription"
                    },
                    description: {
                        defaultMessage: "Description",
                        id: "appTemplates.projects.description"
                    },
                    hmlPriority: {
                        defaultMessage: "High, Medium, Low",
                        id: "appTemplates.tasks.hmlPriority"
                    },
                    projectSummaryFeature: {
                        defaultMessage: "Summary",
                        id: "appTemplates.projects.summary"
                    },
                    projectSummaryFeatureDescription: {
                        defaultMessage: "Summarize projects with AI",
                        id: "appTemplates.projects.summaryDescription"
                    },
                    projectSummaryProperty: {
                        defaultMessage: "Summary",
                        id: "appTemplates.projects.summaryProperty"
                    },
                    tasksFeatureDescription: {
                        defaultMessage: "Link projects to tasks",
                        id: "appTemplates.projects.tasksFeatureDescription"
                    },
                    collaborators: {
                        defaultMessage: "Collaborators",
                        id: "appTemplates.projects.collaborators"
                    },
                    collaboratorsFeatureDescription: {
                        defaultMessage: "Project team members",
                        id: "appTemplates.projects.collaboratorsFeatureDescription"
                    },
                    projectDependenciesName: {
                        defaultMessage: "Dependencies",
                        id: "appTemplates.projects.projectDependenciesName"
                    },
                    projectDependenciesFeatureDescription: {
                        defaultMessage: "Mark blockers and shift dates",
                        id: "appTemplates.projects.projectDependenciesFeatureDescription"
                    },
                    projectBlockingName: {
                        defaultMessage: "Is Blocking",
                        id: "appTemplates.projects.projectBlockingName"
                    },
                    projectBlockedByName: {
                        defaultMessage: "Blocked By",
                        id: "appTemplates.projects.projectBlockedByName"
                    }
                }),
                i = "notion://projects",
                r = `${i}/tutorial`;

            function s() {
                return [{
                    uri: o(11448).bq,
                    type: "collection_view_block",
                    name: o(962299).A.formatMessage(a.projectsCollectionName),
                    defaultViewsOrder: [`${i}/active_projects_gallery_view`, `${i}/projects_timeline_view`, `${i}/projects_board_view`, `${i}/projects_table_view`]
                }, {
                    uri: o(11448).Tw,
                    type: "collection",
                    value: {
                        name: (0, o(247438).x9d)(o(962299).A.formatMessage(a.projectsCollectionName)),
                        schema: (0, o(11448).xh)(o(962299).A.intl),
                        format: {
                            uri: o(11448).Tw,
                            property_visibility: [{
                                property: o(11448).K4.Status,
                                visibility: "show"
                            }, {
                                property: o(11448).K4.People,
                                visibility: "show"
                            }, {
                                property: o(11448).K4.CompletionRollup,
                                visibility: "hide_if_empty"
                            }, {
                                property: o(11448).K4.ProjectDates,
                                visibility: "show"
                            }, {
                                property: o(11448).K4.ProjectToTaskRelation,
                                visibility: "hide"
                            }],
                            collection_page_sections: [{
                                section: o(11448).K4.ProjectToTaskRelation,
                                visibility: "inline"
                            }],
                            collection_page_properties: [{
                                visible: !1,
                                property: o(11448).K4.Status
                            }, {
                                visible: !1,
                                property: o(11448).K4.People
                            }, {
                                visible: !1,
                                property: o(11448).K4.CompletionRollup
                            }, {
                                visible: !1,
                                property: o(11448).K4.ProjectDates
                            }],
                            collection_relation_options: {
                                [o(11448).K4.ProjectToTaskRelation]: {
                                    related_properties: [{
                                        visible: !0,
                                        property: "title"
                                    }, {
                                        visible: !0,
                                        property: o(11448).yx.Status
                                    }, {
                                        visible: !0,
                                        property: o(11448).yx.Assign
                                    }, {
                                        visible: !0,
                                        property: o(11448).yx.DueDate
                                    }, {
                                        visible: !1,
                                        property: o(11448).yx.GithubPrsRelation
                                    }, {
                                        visible: !0,
                                        property: o(11448).yx.Priority
                                    }, {
                                        visible: !0,
                                        property: o(11448).yx.TaskToSprintRelation
                                    }, {
                                        visible: !1,
                                        property: o(11448).yx.Tags
                                    }, {
                                        visible: !1,
                                        property: o(11448).yx.SprintStatusRollup
                                    }, {
                                        visible: !1,
                                        property: o(11448).yx.TaskToProjectRelation
                                    }]
                                }
                            }
                        },
                        icon: o(896221).A.images.appPackages.projectsIconSvg
                    },
                    collectionViewBlockUri: o(11448).bq,
                    emptyIcon: o(896221).A.images.appPackages.projectsProjectsEmptyIconPng,
                    emptyTitle: o(962299).A.formatMessage(a.projectsCollectionEmptyTitle),
                    emptyDescription: o(962299).A.formatMessage(a.projectsCollectionEmptyDescription),
                    emptyButtonTitle: o(962299).A.formatMessage(a.projectsCollectionEmptyButtonTitle)
                }]
            }

            function p() {
                return [{
                    uri: `${i}/projects_table_view`,
                    type: "collection_view",
                    collectionUri: o(11448).Tw,
                    description: o(962299).A.formatMessage(a.allProjectsViewDescription),
                    value: {
                        type: "table",
                        name: o(962299).A.formatMessage(a.allProjectsViewName),
                        format: {
                            table_wrap: !1,
                            property_filters: [{
                                id: o(92513).JW(),
                                filter: {
                                    filter: {
                                        value: {
                                            type: "is_group",
                                            value: void 0
                                        },
                                        operator: "status_is"
                                    },
                                    property: o(11448).K4.Status
                                }
                            }, {
                                id: o(92513).JW(),
                                filter: {
                                    filter: {
                                        value: {
                                            type: "exact",
                                            value: void 0
                                        },
                                        operator: "person_contains"
                                    },
                                    property: o(11448).K4.People
                                }
                            }, {
                                id: o(92513).JW(),
                                filter: {
                                    filter: {
                                        value: {
                                            type: "exact",
                                            value: void 0
                                        },
                                        operator: "date_is"
                                    },
                                    property: o(11448).K4.ProjectDates
                                }
                            }],
                            table_properties: [{
                                width: 197,
                                visible: !0,
                                property: "title"
                            }, {
                                width: 121,
                                visible: !0,
                                property: o(11448).K4.Status
                            }, {
                                width: 143,
                                visible: !0,
                                property: o(11448).K4.People
                            }, {
                                width: 182,
                                visible: !0,
                                property: o(11448).K4.Collaborators
                            }, {
                                width: 200,
                                visible: !0,
                                property: o(11448).K4.ProjectDates
                            }, {
                                width: 100,
                                visible: !0,
                                property: o(11448).K4.Priority
                            }, {
                                width: 125,
                                visible: !0,
                                property: o(11448).K4.CompletionRollup
                            }, {
                                width: 191,
                                visible: !1,
                                property: o(11448).K4.ProjectToTaskRelation
                            }, {
                                width: 128,
                                visible: !0,
                                property: o(11448).K4.BlockedByRelation
                            }, {
                                width: 125,
                                visible: !1,
                                property: o(11448).K4.BlockingRelation
                            }, {
                                width: 312,
                                visible: !1,
                                property: o(11448).K4.AiSummary
                            }],
                            collection_groups: [{
                                value: {
                                    type: "status",
                                    value: {
                                        type: "by_group",
                                        group: o(998833).QV
                                    }
                                },
                                property: o(11448).K4.Status
                            }, {
                                value: {
                                    type: "status",
                                    value: {
                                        type: "by_group",
                                        group: o(998833).jc
                                    }
                                },
                                property: o(11448).K4.Status
                            }, {
                                value: {
                                    type: "status",
                                    value: {
                                        type: "by_group",
                                        group: o(998833).P0
                                    }
                                },
                                property: o(11448).K4.Status
                            }]
                        },
                        page_sort: [`${r}/projects/getting_started_with_projects`, `${r}/projects/project1`, `${r}/projects/project2`],
                        query2: {
                            aggregations: [{
                                property: o(11448).K4.Status,
                                aggregator: {
                                    operator: "count_per_group",
                                    groupName: o(998833).P0
                                }
                            }]
                        }
                    },
                    collectionViewBlockUri: o(11448).bq
                }]
            }
            let n = `${i}/project_template`;

            function l() {
                return [{
                    uri: n,
                    type: "database_template",
                    collectionUri: o(11448).Tw,
                    isDefault: !0,
                    blockValue: {
                        type: "page",
                        format: {
                            page_icon: "/icons/target_lightgray.svg"
                        },
                        properties: {
                            title: (0, o(247438).x9d)(o(962299).A.formatMessage(a.projectTemplate)),
                            [o(11448).K4.Status]: (0, o(561872).wb)(o(962299).A.formatMessage(a.backlog))
                        }
                    }
                }, {
                    uri: `${n}/header_block_0`,
                    type: "block",
                    parentUri: n,
                    parentType: "database_template",
                    blockValue: {
                        type: "sub_header",
                        properties: {
                            title: (0, o(247438).x9d)(o(962299).A.formatMessage(a.aboutThisProject))
                        }
                    }
                }, {
                    uri: `${n}/header_block_1`,
                    type: "block",
                    parentUri: n,
                    parentType: "database_template",
                    blockValue: {
                        type: "bulleted_list"
                    }
                }, {
                    uri: `${n}/header_block_3`,
                    type: "block",
                    parentUri: n,
                    parentType: "database_template",
                    blockValue: {
                        type: "text"
                    }
                }, {
                    uri: `${n}/header_block_4`,
                    type: "block",
                    parentUri: n,
                    parentType: "block",
                    blockValue: {
                        type: "sub_header",
                        properties: {
                            title: (0, o(247438).x9d)(o(962299).A.formatMessage(a.projectTasks))
                        }
                    }
                }, {
                    uri: `${n}/project_tasks_block`,
                    type: "block",
                    parentType: "database_template",
                    parentUri: n,
                    blockValue: {
                        type: "collection_view",
                        properties: {
                            title: (0, o(247438).x9d)(o(962299).A.formatMessage(a.tasksCollectionName))
                        }
                    }
                }, {
                    uri: `${n}/project_tasks_board_view`,
                    type: "collection_view",
                    collectionUri: o(11448).dC,
                    collectionViewBlockUri: `${n}/project_tasks_block`,
                    value: {
                        type: "board",
                        name: o(962299).A.formatMessage(a.projectsBoardViewName),
                        format: {
                            table_wrap: !1,
                            board_columns: [{
                                value: {
                                    type: "status",
                                    value: {
                                        type: "by_option",
                                        option: o(962299).A.formatMessage(o(998833).M_.statusOptionNotStarted)
                                    }
                                },
                                property: o(11448).yx.Status
                            }, {
                                value: {
                                    type: "status",
                                    value: {
                                        type: "by_option",
                                        option: o(962299).A.formatMessage(o(998833).M_.statusOptionInProgress)
                                    }
                                },
                                property: o(11448).yx.Status
                            }, {
                                value: {
                                    type: "status",
                                    value: {
                                        type: "by_option",
                                        option: o(962299).A.formatMessage(o(998833).M_.statusOptionDone)
                                    }
                                },
                                property: o(11448).yx.Status
                            }, {
                                value: {
                                    type: "status",
                                    value: {
                                        type: "by_option",
                                        option: o(962299).A.formatMessage(a.archived)
                                    }
                                },
                                hidden: !0,
                                property: o(11448).yx.Status
                            }],
                            board_columns_by: {
                                sort: {
                                    type: "ascending"
                                },
                                type: "status",
                                groupBy: "option",
                                property: o(11448).yx.Status,
                                disableBoardColorColumns: !1
                            },
                            board_properties: [{
                                visible: !0,
                                property: "title"
                            }, {
                                visible: !1,
                                property: o(11448).yx.TaskToProjectRelation
                            }, {
                                visible: !1,
                                property: o(11448).yx.TaskToSprintRelation
                            }, {
                                visible: !1,
                                property: o(11448).yx.SprintStatusRollup
                            }, {
                                visible: !1,
                                property: o(11448).yx.Status
                            }, {
                                visible: !0,
                                property: o(11448).yx.Assign
                            }, {
                                visible: !0,
                                property: o(11448).yx.DueDate
                            }, {
                                visible: !1,
                                property: o(11448).K4.AiSummary
                            }],
                            property_filters: [{
                                id: o(92513).JW(),
                                filter: {
                                    filter: {
                                        value: {
                                            type: "exact",
                                            value: n
                                        },
                                        operator: "relation_contains"
                                    },
                                    property: o(11448).yx.TaskToProjectRelation
                                }
                            }],
                            hide_linked_collection_name: !0
                        }
                    }
                }, {
                    uri: `${n}/project_tasks_view`,
                    type: "collection_view",
                    collectionUri: o(11448).dC,
                    collectionViewBlockUri: `${n}/project_tasks_block`,
                    value: {
                        type: "table",
                        name: o(962299).A.formatMessage(a.tasksCollectionName),
                        format: {
                            table_wrap: !1,
                            property_filters: [{
                                id: o(92513).JW(),
                                filter: {
                                    filter: {
                                        value: {
                                            type: "exact",
                                            value: n
                                        },
                                        operator: "relation_contains"
                                    },
                                    property: o(11448).yx.TaskToProjectRelation
                                }
                            }],
                            table_properties: o(355940).zZ,
                            hide_linked_collection_name: !0
                        }
                    }
                }]
            }

            function c() {
                return [{
                    uri: o(11448).K4.CompletionRollup,
                    type: "property",
                    collectionUri: o(11448).Tw,
                    propertySchema: {
                        type: "rollup",
                        icon: "/icons/activity_gray.svg",
                        name: o(962299).A.formatMessage(a.completionRollupName),
                        show_as: {
                            type: "bar",
                            color: "green",
                            maxValue: 1,
                            showValue: !0
                        },
                        aggregation: {
                            operator: "percent_per_group",
                            groupName: o(998833).P0
                        },
                        target_property: o(11448).yx.Status,
                        relation_property: o(11448).K4.ProjectToTaskRelation,
                        target_property_type: "status"
                    },
                    name: o(962299).A.formatMessage(a.completionRollupName),
                    description: o(962299).A.formatMessage(a.completionRollupDescription),
                    icon: o(896221).A.images.appPackages.featureRoadmapSvg
                }]
            }

            function u(e) {
                return [{
                    uri: o(11448).K4.Priority,
                    type: "property",
                    collectionUri: o(11448).Tw,
                    name: o(962299).A.formatMessage(a.priorityProperty),
                    description: o(962299).A.formatMessage(a.projectPriorityFeatureDescription),
                    icon: "/icons/priority-high_gray.svg",
                    propertySchema: e()
                }]
            }

            function d() {
                let e = (0, o(11448).xh)(o(962299).A.intl)[o(11448).K4.Status];
                return {
                    uri: "notion://projects/status_feature",
                    name: o(962299).A.formatMessage(a.status),
                    description: o(962299).A.formatMessage(a.statusFeatureDescription),
                    collectionUri: o(11448).Tw,
                    tooltipImage: {
                        img: o(896221).A.images.tooltips.properties.statusPng,
                        scale: .5
                    },
                    icon: o(896221).A.images.appPackages.featureStatusSvg,
                    dependencies: e ? [{
                        uri: o(11448).K4.Status,
                        type: "property",
                        collectionUri: o(11448).Tw,
                        name: o(962299).A.formatMessage(a.status),
                        propertySchema: e
                    }] : []
                }
            }

            function y() {
                return {
                    uri: `${i}/my_projects_feature`,
                    name: o(962299).A.formatMessage(a.myProjectsFeature),
                    description: o(962299).A.formatMessage(a.myProjectsFeatureDescription),
                    tooltipImage: {
                        img: o(896221).A.images.tooltips.views.myProjectsPng,
                        scale: .5
                    },
                    icon: o(896221).A.images.appPackages.featureMineSvg,
                    dependencies: [{
                        uri: `${i}/my_projects_view`,
                        type: "collection_view",
                        collectionUri: o(11448).Tw,
                        description: o(962299).A.formatMessage(a.myProjectsViewDescription),
                        value: {
                            type: "board",
                            name: o(962299).A.formatMessage(a.myProjectsView),
                            format: {
                                table_wrap: !1,
                                board_columns: [{
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: o(962299).A.formatMessage(a.planned)
                                        }
                                    },
                                    hidden: !1,
                                    property: o(11448).K4.Status,
                                    emptyHidden: !0
                                }, {
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: o(962299).A.formatMessage(o(998833).M_.statusOptionInProgress)
                                        }
                                    },
                                    hidden: !1,
                                    property: o(11448).K4.Status,
                                    emptyHidden: !0
                                }, {
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: o(962299).A.formatMessage(o(998833).M_.statusOptionDone)
                                        }
                                    },
                                    hidden: !1,
                                    property: o(11448).K4.Status,
                                    emptyHidden: !0
                                }, {
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: o(962299).A.formatMessage(a.backlog)
                                        }
                                    },
                                    hidden: !0,
                                    property: o(11448).K4.Status,
                                    emptyHidden: !0
                                }, {
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: o(962299).A.formatMessage(a.paused)
                                        }
                                    },
                                    hidden: !0,
                                    property: o(11448).K4.Status,
                                    emptyHidden: !0
                                }, {
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: o(962299).A.formatMessage(a.cancelled)
                                        }
                                    },
                                    hidden: !0,
                                    property: o(11448).K4.Status,
                                    emptyHidden: !0
                                }],
                                board_columns_by: {
                                    sort: {
                                        type: "ascending"
                                    },
                                    type: "status",
                                    groupBy: "option",
                                    property: o(11448).K4.Status,
                                    hideEmptyGroups: !0
                                },
                                board_properties: [{
                                    visible: !0,
                                    property: "title"
                                }, {
                                    visible: !1,
                                    property: o(11448).K4.Status
                                }, {
                                    visible: !0,
                                    property: o(11448).K4.CompletionRollup
                                }, {
                                    visible: !0,
                                    property: o(11448).K4.ProjectDates
                                }, {
                                    visible: !0,
                                    property: o(11448).K4.Priority
                                }, {
                                    visible: !1,
                                    property: o(11448).K4.People
                                }, {
                                    visible: !1,
                                    property: o(11448).K4.ProjectToTaskRelation
                                }, {
                                    visible: !1,
                                    property: o(11448).K4.AiSummary
                                }],
                                property_filters: [{
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: {
                                                type: "relative",
                                                value: "me"
                                            },
                                            operator: "person_contains"
                                        },
                                        property: o(11448).K4.People
                                    }
                                }, {
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: {
                                                type: "is_group",
                                                value: void 0
                                            },
                                            operator: "status_is"
                                        },
                                        property: o(11448).K4.Status
                                    }
                                }, {
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: {
                                                type: "exact",
                                                value: void 0
                                            },
                                            operator: "date_is"
                                        },
                                        property: o(11448).K4.ProjectDates
                                    }
                                }],
                                table_properties: [{
                                    wrap: !1,
                                    width: 226,
                                    visible: !0,
                                    property: "title"
                                }, {
                                    wrap: !1,
                                    width: 140,
                                    visible: !0,
                                    property: o(11448).K4.Status
                                }, {
                                    wrap: !1,
                                    width: 200,
                                    visible: !0,
                                    property: o(11448).K4.People
                                }, {
                                    wrap: !0,
                                    width: 200,
                                    visible: !0,
                                    property: o(11448).K4.ProjectDates
                                }, {
                                    wrap: !1,
                                    width: 138,
                                    visible: !0,
                                    property: o(11448).K4.CompletionRollup
                                }, {
                                    wrap: !0,
                                    width: 219,
                                    visible: !1,
                                    property: o(11448).K4.ProjectToTaskRelation
                                }, {
                                    wrap: !0,
                                    width: 312,
                                    visible: !1,
                                    property: o(11448).K4.AiSummary
                                }],
                                collection_groups: [{
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_group",
                                            group: o(998833).QV
                                        }
                                    },
                                    property: o(11448).K4.Status
                                }, {
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_group",
                                            group: o(998833).jc
                                        }
                                    },
                                    property: o(11448).K4.Status
                                }, {
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_group",
                                            group: o(998833).P0
                                        }
                                    },
                                    property: o(11448).K4.Status
                                }]
                            },
                            query2: {
                                aggregations: [{
                                    property: o(11448).K4.Status,
                                    aggregator: {
                                        operator: "count_per_group",
                                        groupName: o(998833).P0
                                    }
                                }],
                                sort: [{
                                    property: o(11448).K4.Priority,
                                    direction: "descending"
                                }]
                            },
                            page_sort: [`${r}/projects/getting_started_with_projects`, `${r}/projects/project1`, `${r}/projects/project2`]
                        },
                        collectionViewBlockUri: o(11448).bq
                    }],
                    collectionUri: o(11448).Tw
                }
            }

            function g() {
                return {
                    uri: `${i}/project_calendar_feature`,
                    name: o(962299).A.formatMessage(a.projectCalendarFeature),
                    description: o(962299).A.formatMessage(a.projectCalendarFeatureDescription),
                    tooltipImage: {
                        img: o(896221).A.images.tooltips.views.projectCalendarPng,
                        scale: .5
                    },
                    dependencies: [{
                        uri: `${i}/projects_calendar_view`,
                        type: "collection_view",
                        collectionUri: o(11448).Tw,
                        description: o(962299).A.formatMessage(a.projectCalendarViewDescription),
                        value: {
                            type: "calendar",
                            name: o(962299).A.formatMessage(a.projectCalendarFeature),
                            format: {
                                calendar_properties: [{
                                    property: o(11448).K4.Status,
                                    visible: !0
                                }, {
                                    property: o(11448).K4.People,
                                    visible: !0
                                }]
                            },
                            query2: {
                                calendar_by: o(11448).K4.ProjectDates
                            }
                        },
                        collectionViewBlockUri: o(11448).bq
                    }],
                    icon: o(896221).A.images.appPackages.featureCalendarSvg,
                    collectionUri: o(11448).Tw
                }
            }

            function _() {
                return {
                    uri: o(11448).rv,
                    name: o(962299).A.formatMessage(a.projectSummaryFeature),
                    description: o(962299).A.formatMessage(a.projectSummaryFeatureDescription),
                    icon: o(896221).A.images.appPackages.featureAiSummarizeSvg,
                    tooltipImage: {
                        img: o(896221).A.images.tooltips.properties.aiAutofillSummaryPng,
                        scale: .5
                    },
                    isAi: !0,
                    collectionUri: o(11448).Tw,
                    dependencies: [{
                        uri: o(11448).K4.AiSummary,
                        type: "property",
                        name: o(962299).A.formatMessage(a.projectSummaryProperty),
                        collectionUri: o(11448).Tw,
                        propertySchema: {
                            type: "text",
                            name: o(962299).A.formatMessage(a.projectSummaryProperty),
                            ai_inference: {
                                type: "summarize",
                                auto_update_on_edit: !0
                            }
                        }
                    }]
                }
            }

            function m() {
                return {
                    uri: `${i}/projects_board_feature`,
                    name: o(962299).A.formatMessage(a.projectsBoardFeature),
                    description: o(962299).A.formatMessage(a.projectsBoardFeatureDescription),
                    dependencies: [{
                        uri: `${i}/projects_board_view`,
                        type: "collection_view",
                        collectionUri: o(11448).Tw,
                        description: o(962299).A.formatMessage(a.projectsBoardViewDescription),
                        value: {
                            type: "board",
                            name: o(962299).A.formatMessage(a.projectsBoardViewName),
                            format: {
                                board_columns: [{
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: o(962299).A.formatMessage(a.planned)
                                        }
                                    },
                                    hidden: !1,
                                    property: o(11448).K4.Status
                                }, {
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: o(962299).A.formatMessage(o(998833).M_.statusOptionInProgress)
                                        }
                                    },
                                    hidden: !1,
                                    property: o(11448).K4.Status
                                }, {
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: o(962299).A.formatMessage(a.backlog)
                                        }
                                    },
                                    emptyHidden: !0,
                                    property: o(11448).K4.Status
                                }, {
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: o(962299).A.formatMessage(o(998833).M_.statusOptionDone)
                                        }
                                    },
                                    emptyHidden: !0,
                                    property: o(11448).K4.Status
                                }, {
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: o(962299).A.formatMessage(a.paused)
                                        }
                                    },
                                    emptyHidden: !0,
                                    property: o(11448).K4.Status
                                }, {
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: o(962299).A.formatMessage(a.cancelled)
                                        }
                                    },
                                    emptyHidden: !0,
                                    property: o(11448).K4.Status
                                }],
                                board_columns_by: {
                                    sort: {
                                        type: "manual"
                                    },
                                    type: "status",
                                    groupBy: "option",
                                    property: o(11448).K4.Status,
                                    disableBoardColorColumns: !1,
                                    hideEmptyGroups: !0
                                },
                                board_properties: [{
                                    visible: !0,
                                    property: "title"
                                }, {
                                    visible: !0,
                                    property: o(11448).K4.ProjectDates
                                }, {
                                    visible: !1,
                                    property: o(11448).K4.Status
                                }, {
                                    visible: !0,
                                    property: o(11448).K4.Priority
                                }, {
                                    visible: !0,
                                    property: o(11448).K4.CompletionRollup
                                }, {
                                    visible: !1,
                                    property: o(11448).K4.AiSummary
                                }],
                                hide_linked_collection_name: !0
                            },
                            query2: {
                                sort: [{
                                    property: o(11448).K4.Priority,
                                    direction: "descending"
                                }]
                            }
                        },
                        collectionViewBlockUri: o(11448).bq
                    }],
                    tooltipImage: {
                        img: o(896221).A.images.tooltips.views.projectBoardPng,
                        scale: .5
                    },
                    icon: o(896221).A.images.appPackages.featureBoardSvg,
                    collectionUri: o(11448).Tw
                }
            }

            function k() {
                return {
                    uri: `${i}/project_timeline_feature`,
                    name: o(962299).A.formatMessage(a.projectTimelineFeature),
                    description: o(962299).A.formatMessage(a.projectTimelineFeatureDescription),
                    dependencies: [{
                        uri: `${i}/projects_timeline_view`,
                        type: "collection_view",
                        collectionUri: o(11448).Tw,
                        description: o(962299).A.formatMessage(a.projectsTimelineViewDescription),
                        value: {
                            type: "timeline",
                            name: o(962299).A.formatMessage(a.projectsTimelineView),
                            format: {
                                timeline_arrows_by: {
                                    property: o(11448).K4.BlockingRelation
                                },
                                property_filters: [{
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: {
                                                type: "is_group",
                                                value: void 0
                                            },
                                            operator: "status_is"
                                        },
                                        property: o(11448).K4.Status
                                    }
                                }, {
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: {
                                                type: "exact",
                                                value: void 0
                                            },
                                            operator: "person_contains"
                                        },
                                        property: o(11448).K4.People
                                    }
                                }, {
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: {
                                                type: "exact",
                                                value: void 0
                                            },
                                            operator: "date_is"
                                        },
                                        property: o(11448).K4.ProjectDates
                                    }
                                }],
                                collection_group_by: {
                                    sort: {
                                        type: "ascending"
                                    },
                                    type: "status",
                                    groupBy: "group",
                                    property: o(11448).K4.Status
                                },
                                timeline_preference: {
                                    zoomLevel: "quarter",
                                    centerTimestamp: (0, o(25825).ln)((0, o(25825).Ec)((0, o(714350).P)()), (0, o(714350).P)())
                                },
                                timeline_properties: [{
                                    visible: !0,
                                    property: "title"
                                }, {
                                    visible: !0,
                                    property: o(11448).K4.Status
                                }, {
                                    visible: !0,
                                    property: o(11448).K4.People
                                }, {
                                    visible: !0,
                                    property: o(11448).K4.CompletionRollup
                                }, {
                                    visible: !1,
                                    property: o(11448).K4.ProjectDates
                                }, {
                                    visible: !1,
                                    property: o(11448).K4.ProjectToTaskRelation
                                }, {
                                    visible: !1,
                                    property: o(11448).K4.AiSummary
                                }],
                                timeline_show_table: !1,
                                timeline_table_properties: [{
                                    width: 192,
                                    visible: !0,
                                    property: "title"
                                }, {
                                    width: 200,
                                    visible: !1,
                                    property: o(11448).K4.CompletionRollup
                                }, {
                                    width: 200,
                                    visible: !1,
                                    property: o(11448).K4.ProjectDates
                                }, {
                                    width: 200,
                                    visible: !1,
                                    property: o(11448).K4.People
                                }, {
                                    width: 200,
                                    visible: !1,
                                    property: o(11448).K4.ProjectToTaskRelation
                                }, {
                                    width: 129,
                                    visible: !0,
                                    property: o(11448).K4.Status
                                }, {
                                    width: 200,
                                    visible: !1,
                                    property: o(11448).K4.AiSummary
                                }]
                            },
                            page_sort: [`${r}/projects/getting_started_with_projects`, `${r}/projects/project1`, `${r}/projects/project2`],
                            query2: {
                                timeline_by: o(11448).K4.ProjectDates,
                                aggregations: [{
                                    property: "title",
                                    aggregator: "count"
                                }]
                            }
                        },
                        collectionViewBlockUri: o(11448).bq
                    }],
                    tooltipImage: {
                        img: o(896221).A.images.tooltips.views.projectTimelinePng,
                        scale: .5
                    },
                    icon: o(896221).A.images.appPackages.featureGanttSvg,
                    collectionUri: o(11448).Tw
                }
            }

            function b() {
                return {
                    uri: `${i}/active_projects_gallery_feature`,
                    name: o(962299).A.formatMessage(a.activeProjectsTableFeature),
                    description: o(962299).A.formatMessage(a.activeProjectsTableFeatureDescription),
                    dependencies: [{
                        uri: `${i}/active_projects_gallery_view`,
                        type: "collection_view",
                        collectionUri: o(11448).Tw,
                        description: o(962299).A.formatMessage(a.activeProjectsViewDescription),
                        value: {
                            type: "table",
                            name: o(962299).A.formatMessage(a.activeProjectsView),
                            format: {
                                table_wrap: !1,
                                collection_view_icon: "/icons/token_gray.svg",
                                property_filters: [{
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: {
                                                type: "is_group",
                                                value: o(998833).jc
                                            },
                                            operator: "status_is"
                                        },
                                        property: o(11448).K4.Status
                                    }
                                }, {
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: {
                                                type: "exact",
                                                value: void 0
                                            },
                                            operator: "person_contains"
                                        },
                                        property: o(11448).K4.People
                                    }
                                }, {
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: {
                                                type: "exact",
                                                value: void 0
                                            },
                                            operator: "date_is"
                                        },
                                        property: o(11448).K4.ProjectDates
                                    }
                                }],
                                collection_group_by: {
                                    sort: {
                                        type: "ascending"
                                    },
                                    type: "status",
                                    groupBy: "option",
                                    property: o(11448).K4.Status,
                                    hideEmptyGroups: !0
                                },
                                collection_groups: [{
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: "Planning"
                                        }
                                    },
                                    property: `${i}/status_property`
                                }, {
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: o(962299).A.formatMessage(o(998833).M_.statusOptionInProgress)
                                        }
                                    },
                                    property: `${i}/status_property`
                                }, {
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: "Paused"
                                        }
                                    },
                                    property: `${i}/status_property`,
                                    emptyHidden: !0
                                }, {
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: "Backlog"
                                        }
                                    },
                                    property: `${i}/status_property`,
                                    emptyHidden: !0
                                }, {
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: o(962299).A.formatMessage(o(998833).M_.statusOptionDone)
                                        }
                                    },
                                    property: `${i}/status_property`,
                                    emptyHidden: !0
                                }, {
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: "Canceled"
                                        }
                                    },
                                    property: `${i}/status_property`,
                                    emptyHidden: !0
                                }],
                                table_properties: [{
                                    width: 290,
                                    visible: !0,
                                    property: "title"
                                }, {
                                    width: 121,
                                    visible: !0,
                                    property: o(11448).K4.Status
                                }, {
                                    width: 143,
                                    visible: !0,
                                    property: o(11448).K4.People
                                }, {
                                    width: 182,
                                    visible: !0,
                                    property: o(11448).K4.Collaborators
                                }, {
                                    width: 227,
                                    visible: !0,
                                    property: o(11448).K4.ProjectDates
                                }, {
                                    width: 100,
                                    visible: !0,
                                    property: o(11448).K4.Priority
                                }, {
                                    width: 125,
                                    visible: !0,
                                    property: o(11448).K4.CompletionRollup
                                }, {
                                    width: 191,
                                    visible: !1,
                                    property: o(11448).K4.ProjectToTaskRelation
                                }, {
                                    width: 189,
                                    visible: !0,
                                    property: o(11448).K4.BlockedByRelation
                                }, {
                                    width: 125,
                                    visible: !1,
                                    property: o(11448).K4.BlockingRelation
                                }, {
                                    width: 312,
                                    visible: !1,
                                    property: o(11448).K4.AiSummary
                                }],
                                collection_peek_mode: "side_peek",
                                hide_linked_collection_name: !0
                            },
                            page_sort: [`${r}/projects/getting_started_with_projects`, `${r}/projects/project1`, `${r}/projects/project2`]
                        },
                        collectionViewBlockUri: o(11448).bq
                    }],
                    tooltipImage: {
                        img: o(896221).A.images.tooltips.views.activeProjectsPng,
                        scale: .5
                    },
                    icon: o(896221).A.images.appPackages.featureGanttSvg,
                    collectionUri: o(11448).Tw
                }
            }

            function f() {
                return {
                    uri: `${i}/project_collaborators_feature`,
                    name: o(962299).A.formatMessage(a.collaborators),
                    description: o(962299).A.formatMessage(a.collaboratorsFeatureDescription),
                    dependencies: [{
                        uri: o(11448).K4.Collaborators,
                        type: "property",
                        collectionUri: o(11448).Tw,
                        name: o(962299).A.formatMessage(a.collaborators),
                        propertySchema: {
                            type: "person",
                            name: o(962299).A.formatMessage(a.collaborators)
                        }
                    }],
                    collectionUri: o(11448).Tw
                }
            }

            function j() {
                return {
                    uri: `${i}/project_description_feature`,
                    name: o(962299).A.formatMessage(a.description),
                    icon: "/icons/description_gray.svg",
                    dependencies: [{
                        uri: o(11448).K4.Description,
                        type: "property",
                        collectionUri: o(11448).Tw,
                        name: o(962299).A.formatMessage(a.description),
                        icon: "/icons/description_gray.svg",
                        propertySchema: {
                            type: "text",
                            name: o(962299).A.formatMessage(a.description)
                        }
                    }],
                    collectionUri: o(11448).Tw
                }
            }

            function T() {
                return {
                    uri: `${i}/project_hml_priority_feature`,
                    name: o(962299).A.formatMessage(a.hmlPriority),
                    icon: "/icons/priority-high_gray.svg",
                    dependencies: [...u(o(355940).uk)],
                    collectionUri: o(11448).Tw
                }
            }

            function P() {
                return {
                    uri: `${i}/project_p012_priority_feature`,
                    name: "P0, P1, P2",
                    icon: "/icons/priority-high_gray.svg",
                    dependencies: [...u(o(355940).a6)],
                    collectionUri: o(11448).Tw
                }
            }

            function v() {
                return {
                    uri: `${i}/project_priority_feature`,
                    name: o(962299).A.formatMessage(a.priorityProperty),
                    description: o(962299).A.formatMessage(a.projectPriorityFeatureDescription),
                    tooltipImage: {
                        img: o(896221).A.images.tooltips.properties.projectsPriorityPng,
                        scale: .5
                    },
                    icon: "/icons/priority-high_gray.svg",
                    variants: [T().uri, P().uri],
                    collectionUri: o(11448).Tw
                }
            }

            function h() {
                return {
                    uri: `${i}/projects_dependencies_feature`,
                    name: o(962299).A.formatMessage(a.projectDependenciesName),
                    description: o(962299).A.formatMessage(a.projectDependenciesFeatureDescription),
                    icon: "/icons/dependency_gray.svg",
                    dependencies: [{
                        uri: o(11448).K4.BlockingRelation,
                        type: "property",
                        collectionUri: o(11448).Tw,
                        name: o(962299).A.formatMessage(a.projectDependenciesName),
                        description: o(962299).A.formatMessage(a.projectDependenciesFeatureDescription),
                        icon: "/icons/dependency_gray.svg",
                        propertySchema: {
                            type: "relation",
                            name: o(962299).A.formatMessage(a.projectBlockingName),
                            collection_pointer: {
                                table: o(832375).VlP,
                                id: o(11448).Tw
                            },
                            property: o(11448).K4.BlockedByRelation,
                            version: "v2"
                        }
                    }, {
                        uri: o(11448).K4.BlockedByRelation,
                        type: "property",
                        collectionUri: o(11448).Tw,
                        name: o(962299).A.formatMessage(a.projectDependenciesName),
                        description: o(962299).A.formatMessage(a.projectDependenciesFeatureDescription),
                        icon: "/icons/dependency_gray.svg",
                        propertySchema: {
                            type: "relation",
                            icon: "/icons/no-entry_gray.svg",
                            name: o(962299).A.formatMessage(a.projectBlockedByName),
                            collection_pointer: {
                                table: o(832375).VlP,
                                id: o(11448).Tw
                            },
                            property: o(11448).K4.BlockingRelation,
                            version: "v2"
                        }
                    }],
                    collectionUri: o(11448).Tw
                }
            }

            function M() {
                return {
                    uri: `${i}/projects_and_tasks_feature`,
                    name: o(962299).A.formatMessage(a.tasksCollectionName),
                    description: o(962299).A.formatMessage(a.tasksFeatureDescription),
                    icon: "/icons/checkmark-square_gray.svg",
                    dependencies: [...(0, o(355940).jd)(), ...c(), ...(0, o(355940).Fs)(!1), ...(0, o(355940).Of)(!1), ...(0, o(355940).YB)("tasks_with_projects")],
                    collectionUri: o(11448).Tw
                }
            }
        },
        355940: (e, t, o) => {
            o.d(t, {
                Wo: () => h,
                e3: () => B,
                uk: () => y,
                DZ: () => n,
                bM: () => O,
                a6: () => g,
                QC: () => U,
                O: () => ea,
                md: () => D,
                AN: () => N,
                AG: () => G,
                E3: () => F,
                jS: () => Q,
                V5: () => Y,
                wB: () => H,
                Q2: () => E,
                iw: () => z,
                Bd: () => J,
                jj: () => v,
                J4: () => V,
                Yz: () => $,
                Uy: () => W,
                K_: () => C,
                mh: () => R,
                ps: () => L,
                qK: () => A,
                qF: () => q,
                oE: () => eo,
                Jb: () => es,
                On: () => ei,
                jd: () => k,
                KO: () => P,
                YB: () => f,
                Xq: () => K,
                Fs: () => l,
                hQ: () => x,
                qt: () => M,
                UN: () => ee,
                ei: () => X,
                FN: () => Z,
                mF: () => et,
                Of: () => c,
                zZ: () => b,
                kr: () => I,
                We: () => er
            });
            let a = (0, o(109939).YK)({
                    notionTasksNewTaskTemplate_0: {
                        id: "notionTasksNewTaskTemplate_0",
                        defaultMessage: "Task"
                    },
                    notionTasksNewTaskTemplate_0_0: {
                        id: "notionTasksNewTaskTemplate_0_0",
                        defaultMessage: "Description"
                    },
                    notionTasksNewFeatureRequestTemplate_0: {
                        id: "notionTasksNewFeatureRequestTemplate_0",
                        defaultMessage: "Feature Request"
                    },
                    notionTasksNewFeatureRequestTemplate_0_0: {
                        id: "notionTasksNewFeatureRequestTemplate_0_0",
                        defaultMessage: "Description"
                    },
                    notionTasksNewFeatureRequestTemplate_1_0: {
                        id: "notionTasksNewFeatureRequestTemplate_1_0",
                        defaultMessage: "[Description of feature request]"
                    },
                    notionTasksNewFeatureRequestTemplate_3_0: {
                        id: "notionTasksNewFeatureRequestTemplate_3_0",
                        defaultMessage: "User problem"
                    },
                    notionTasksNewFeatureRequestTemplate_4_0: {
                        id: "notionTasksNewFeatureRequestTemplate_4_0",
                        defaultMessage: "[Describe the problem this feature will solve]"
                    },
                    notionTasksNewFeatureRequestTemplate_6_0: {
                        id: "notionTasksNewFeatureRequestTemplate_6_0",
                        defaultMessage: "Screenshots / GIFs / Videos"
                    },
                    notionTasksNewFeatureRequestTemplate_10_0: {
                        id: "notionTasksNewFeatureRequestTemplate_10_0",
                        defaultMessage: "Additional Notes"
                    },
                    notionTasksNewFeatureRequestTemplate_11_0: {
                        id: "notionTasksNewFeatureRequestTemplate_11_0",
                        defaultMessage: "[Add anything else that might be helpful]"
                    },
                    notionTasksNewBugTemplate_0: {
                        id: "notionTasksNewBugTemplate_0",
                        defaultMessage: "Bug"
                    },
                    notionTasksNewBugTemplate_0_0: {
                        id: "notionTasksNewBugTemplate_0_0",
                        defaultMessage: "Description"
                    },
                    notionTasksNewBugTemplate_1_0: {
                        id: "notionTasksNewBugTemplate_1_0",
                        defaultMessage: "Description of what happened"
                    },
                    notionTasksNewBugTemplate_2_0: {
                        id: "notionTasksNewBugTemplate_2_0",
                        defaultMessage: "Expected behavior:"
                    },
                    notionTasksNewBugTemplate_3_0: {
                        id: "notionTasksNewBugTemplate_3_0",
                        defaultMessage: "Actual behavior:"
                    },
                    notionTasksNewBugTemplate_4_0: {
                        id: "notionTasksNewBugTemplate_4_0",
                        defaultMessage: "Screenshots / GIFs / Videos"
                    },
                    notionTasksNewBugTemplate_7_0: {
                        id: "notionTasksNewBugTemplate_7_0",
                        defaultMessage: "Steps to reproduce"
                    },
                    notionTasksNewBugTemplate_10_0: {
                        id: "notionTasksNewBugTemplate_10_0",
                        defaultMessage: "Additional information"
                    },
                    notionTasksNewBugTemplate_11_0: {
                        id: "notionTasksNewBugTemplate_11_0",
                        defaultMessage: `Source URL: 🔗`
                    },
                    notionTasksNewBugTemplate_12_0: {
                        id: "notionTasksNewBugTemplate_12_0",
                        defaultMessage: `Console logs: 🔗`
                    }
                }),
                i = "notion://tasks/new_feature_request_template",
                r = "notion://tasks/new_bug_template",
                s = "notion://tasks/new_task_template";

            function p() {
                return [{
                    uri: `${s}`,
                    type: "database_template",
                    collectionUri: o(11448).dC,
                    isDefault: !0,
                    blockValue: {
                        type: "page",
                        properties: {
                            title: [
                                [o(962299).A.formatMessage(a.notionTasksNewTaskTemplate_0)]
                            ],
                            [o(11448).yx.Status]: (0, o(561872).wb)("Not started")
                        },
                        format: {
                            page_icon: "/icons/clipping_lightgray.svg"
                        }
                    }
                }, {
                    uri: `${s}/0`,
                    type: "block",
                    parentUri: `${s}`,
                    parentType: "block",
                    blockValue: {
                        type: "sub_header",
                        properties: {
                            title: [
                                [o(962299).A.formatMessage(a.notionTasksNewTaskTemplate_0_0)]
                            ]
                        }
                    }
                }, {
                    uri: `${s}/1`,
                    type: "block",
                    parentUri: `${s}`,
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list"
                    }
                }]
            }
            let n = (0, o(109939).YK)({
                tasksCollectionName: {
                    defaultMessage: "Tasks",
                    id: "appTemplates.tasks.tasksCollectionName"
                },
                taskTitleProperty: {
                    id: "appTemplates.tasks.taskTitleProperty",
                    defaultMessage: "Task name"
                },
                assignProperty: {
                    defaultMessage: "Assignee",
                    id: "appTemplates.tasks.assignProperty"
                },
                statusProperty: {
                    defaultMessage: "Status",
                    id: "appTemplates.tasks.statusProperty"
                },
                statusFeatureDescription: {
                    defaultMessage: "Track progress of tasks",
                    id: "appTemplates.tasks.statusFeatureDescription"
                },
                dueDateProperty: {
                    defaultMessage: "Due",
                    id: "appTemplates.projects.dueDateProperty"
                },
                taskSummaryFeature: {
                    defaultMessage: "AI summary",
                    id: "appTemplates.tasks.summary"
                },
                taskSummaryFeatureDescription: {
                    defaultMessage: "Summarize tasks with AI",
                    id: "appTemplates.tasks.summaryDescription"
                },
                taskSummaryProperty: {
                    defaultMessage: "Summary",
                    id: "appTemplates.tasks.summaryProperty"
                },
                tasksCollectionEmptyTitle: {
                    defaultMessage: "No tasks",
                    id: "appTemplates.projects.tasksCollectionEmptyTitle"
                },
                tasksCollectionEmptyDescription: {
                    defaultMessage: "Track tasks, to-dos, bugs, and more",
                    id: "appTemplates.projects.tasksCollectionEmptyDescription"
                },
                tasksCollectionEmptyButtonTitle: {
                    defaultMessage: "New task",
                    id: "appTemplates.projects.tasksCollectionEmptyButtonTitle"
                },
                allTasksViewName: {
                    defaultMessage: "All tasks",
                    id: "appTemplates.tasks.allTasksViewName"
                },
                allTasksViewDescription: {
                    defaultMessage: "Table of all tasks",
                    id: "appTemplates.tasks.allTasksViewDescription"
                },
                boardViewName: {
                    defaultMessage: "Board",
                    id: "appTemplates.tasks.boardViewName"
                },
                tasksBoardViewDescription: {
                    defaultMessage: "Board of tasks",
                    id: "appTemplates.tasks.tasksBoardViewDescription"
                },
                tasksBoardByAssigneeViewName: {
                    id: "appTemplates.tasks.tasksBoardByAssigneeViewName",
                    defaultMessage: "Board of tasks by assignee"
                },
                tasksByDueDateViewName: {
                    id: "appTemplates.tasks.tasksByDueDateViewName",
                    defaultMessage: "Upcoming"
                },
                tasksByDueDateDescription: {
                    id: "appTemplates.tasks.tasksByDueDateDescription",
                    defaultMessage: "Table of tasks by due date"
                },
                tasksBoardByAssigneeDescription: {
                    id: "appTemplates.tasks.tasksBoardByAssigneeDescription",
                    defaultMessage: "Board of tasks by assignee"
                },
                tasksWithNoSprintViewDescription: {
                    defaultMessage: "Table of tasks in Backlog",
                    id: "appTemplates.tasks.tasksWithNoSprintViewDescription"
                },
                taskByPersonViewName: {
                    id: "appTemplates.tasks.taskByPersonViewName",
                    defaultMessage: "By assignee"
                },
                taskByPersonViewDescription: {
                    id: "appTemplates.tasks.tasksByPersonViewDescription",
                    defaultMessage: "Table of tasks by assignee"
                },
                taskByStatusViewName: {
                    id: "appTemplates.tasks.taskByStatusViewName",
                    defaultMessage: "By status"
                },
                taskByStatusViewDescription: {
                    id: "appTemplates.tasks.tasksByStatusViewDescription",
                    defaultMessage: "Chart of tasks by status"
                },
                myTasksViewDescription: {
                    id: "appTemplates.tasks.myTasksViewDescription",
                    defaultMessage: "Table of tasks assigned to me"
                },
                myTasks: {
                    id: "appTemplates.tasks.myTasks",
                    defaultMessage: "Mine"
                },
                subTaskName: {
                    defaultMessage: "Sub-tasks",
                    id: "appTemplates.projects.subTasksName"
                },
                subTaskFeatureDescription: {
                    defaultMessage: "Break down tasks into smaller pieces",
                    id: "appTemplates.projects.subTaskFeatureDescription"
                },
                markAsDuplicate: {
                    defaultMessage: "Mark as duplicate",
                    id: "appTemplates.projects.markAsDuplicate"
                },
                markAsDuplicateFeatureDescription: {
                    defaultMessage: "Mark task as duplicate of another task",
                    id: "appTemplates.projects.markAsDuplicateFeatureDescription"
                },
                taskIsDuplicateOfName: {
                    defaultMessage: "Is duplicate of",
                    id: "appTemplates.projects.taskIsDuplicateOfName"
                },
                taskDuplicatesName: {
                    defaultMessage: "Duplicates",
                    id: "appTemplates.projects.taskDuplicatesName"
                },
                taskDependencies: {
                    defaultMessage: "Dependencies",
                    id: "appTemplates.projects.taskDependenciesName"
                },
                taskDependenciesFeatureDescription: {
                    defaultMessage: "Mark blockers and shift dates",
                    id: "appTemplates.projects.taskDependenciesFeatureDescription"
                },
                taskBlockingName: {
                    defaultMessage: "Is blocking",
                    id: "appTemplates.projects.taskBlockingName"
                },
                taskBlockedByName: {
                    defaultMessage: "Blocked by",
                    id: "appTemplates.projects.taskBlockedByName"
                },
                priorityProperty: {
                    defaultMessage: "Priority",
                    id: "appTemplates.tasks.priorityProperty"
                },
                priorityLow: {
                    defaultMessage: "Low",
                    id: "appTemplates.tasks.priorityLow"
                },
                priorityMedium: {
                    defaultMessage: "Medium",
                    id: "appTemplates.tasks.priorityMedium"
                },
                priorityHigh: {
                    defaultMessage: "High",
                    id: "appTemplates.tasks.priorityHigh"
                },
                taskProjectRelationDependencyName: {
                    defaultMessage: "Projects — Tasks",
                    id: "appTemplates.projects.taskProjectRelationDependencyName"
                },
                taskProjectRelationName: {
                    defaultMessage: "Project",
                    id: "appTemplates.projects.taskProjectRelationName"
                },
                taskByProjectViewName: {
                    id: "appTemplates.tasks.taskByProjectViewName",
                    defaultMessage: "By Project"
                },
                projectsCollectionName: {
                    defaultMessage: "Projects",
                    id: "appTemplates.tasks.projectsCollectionName"
                },
                projectsFeatureDescription: {
                    defaultMessage: "Link tasks to projects",
                    id: "appTemplates.tasks.projectsFeatureDescription"
                },
                taskByProjectViewDescription: {
                    id: "appTemplates.tasks.taskByProjectViewDescription",
                    defaultMessage: "Table of tasks by project"
                },
                tasksWithSprintsFeatureDescription: {
                    defaultMessage: "Plan tasks in cycles with sprints",
                    id: "appTemplates.projects.tasksWithSprintsFeatureDescription"
                },
                sprintsCollectionName: {
                    defaultMessage: "Sprints",
                    id: "appTemplates.tasks.sprintsCollectionName"
                },
                sprintStatus: {
                    id: "appTemplates.tasks.sprintStatus",
                    defaultMessage: "Sprint status"
                },
                sprintsName: {
                    defaultMessage: "Sprint",
                    id: "appTemplates.projects.sprintsName"
                },
                tasksCurrentSprintV2ViewName: {
                    defaultMessage: "Current sprint",
                    id: "appTemplates.projects.tasksCurrentSprintV2ViewName"
                },
                tasksCurrentSprintV2ViewNamePrefix: {
                    defaultMessage: "Current",
                    id: "appTemplates.projects.tasksCurrentSprintV2ViewNamePrefix"
                },
                tasksNextSprintV2ViewNamePrefix: {
                    defaultMessage: "Next",
                    id: "appTemplates.projects.tasksNextSprintV2ViewNamePrefix"
                },
                tasksLastSprintV2ViewNamePrefix: {
                    defaultMessage: "Last",
                    id: "appTemplates.projects.tasksLastSprintV2ViewNamePrefix"
                },
                tasksCurrentSprintViewName: {
                    defaultMessage: "This sprint",
                    id: "appTemplates.projects.tasksCurrentSprintViewName"
                },
                tasksCurrentSprintViewDescription: {
                    defaultMessage: "Board of tasks in current sprint",
                    id: "appTemplates.projects.tasksCurrentSprintViewDescription"
                },
                backlog: {
                    id: "appTemplates.projects.backlog",
                    defaultMessage: "Backlog"
                },
                id: {
                    defaultMessage: "Task ID",
                    id: "appTemplates.projects.id"
                },
                tags: {
                    defaultMessage: "Tags",
                    id: "appTemplates.projects.tags"
                },
                tagsFeatureDescription: {
                    defaultMessage: "Categorize tasks with tags",
                    id: "appTemplates.projects.tagsFeatureDescription"
                },
                description: {
                    defaultMessage: "Description",
                    id: "appTemplates.tasks.description"
                },
                taskDescriptionFeatureDescription: {
                    defaultMessage: "Describe task in more detail",
                    id: "appTemplates.projects.taskDescriptionFeatureDescription"
                },
                simpleTaskFeatureDescription: {
                    defaultMessage: "Track to-dos in a simple list",
                    id: "appTemplates.projects.simpleTaskFeatureDescription"
                },
                taskByDueDateFeature: {
                    id: "appTemplates.tasks.taskByDueDateFeature",
                    defaultMessage: "By due date"
                },
                taskByDueDateFeatureDescription: {
                    id: "appTemplates.tasks.taskByDueDateFeatureDescription",
                    defaultMessage: "Table of tasks by due date"
                },
                taskBoardFeatureName: {
                    defaultMessage: "Task board",
                    id: "appTemplates.projects.tasksBoardFeatureName"
                },
                taskBoardFeatureDescription: {
                    id: "appTemplates.tasks.tasksBoardFeatureDescription",
                    defaultMessage: "Board of tasks by status"
                },
                taskByProjectFeatureName: {
                    id: "appTemplates.tasks.taskByProjectFeatureName",
                    defaultMessage: "By project"
                },
                taskByProjectFeatureDescription: {
                    id: "appTemplates.tasks.taskByProjectFeatureDescription",
                    defaultMessage: "Board of tasks grouped by project"
                },
                taskByPersonFeatureName: {
                    id: "appTemplates.tasks.taskByPersonFeatureName",
                    defaultMessage: "By assignee"
                },
                taskByPersonFeatureDescription: {
                    id: "appTemplates.tasks.taskByPersonFeatureDescription",
                    defaultMessage: "Table of tasks grouped by assignees"
                },
                taskByStatusFeatureName: {
                    id: "appTemplates.tasks.taskByStatusFeatureName",
                    defaultMessage: "By status"
                },
                taskByStatusFeatureDescription: {
                    id: "appTemplates.tasks.taskByStatusFeatureDescription",
                    defaultMessage: "Chart of tasks grouped by status"
                },
                taskReporter: {
                    defaultMessage: "Reporter",
                    id: "appTemplates.projects.taskReporter"
                },
                tshirtSizeEstimates: {
                    defaultMessage: "T-shirt Size",
                    id: "appTemplates.projects.tshirtSizeEstimates"
                },
                pointsEstimates: {
                    defaultMessage: "Points",
                    id: "appTemplates.projects.pointsEstimates"
                },
                estimatesProperty: {
                    defaultMessage: "Estimates",
                    id: "appTemplates.projects.estimateProperty"
                },
                myTasksFeature: {
                    id: "appTemplates.tasks.myTasksFeature",
                    defaultMessage: "Mine"
                },
                myTasksFeatureDescription: {
                    id: "appTemplates.tasks.myTasksFeatureDescription",
                    defaultMessage: "Board of tasks assigned to me"
                },
                taskTypeFeatureDescription: {
                    defaultMessage: "Create different types of tasks with templates",
                    id: "appTemplates.projects.taskTypeFeatureDescription"
                },
                estimatesFeatureDescription: {
                    defaultMessage: "Size tasks by effort points or level",
                    id: "appTemplates.projects.estimatesFeatureDescription"
                },
                taskPriorityFeatureDescription: {
                    defaultMessage: "Triage tasks by priority",
                    id: "appTemplates.projects.taskPriorityFeatureDescription"
                },
                hmlPriority: {
                    defaultMessage: "High, Medium, Low",
                    id: "appTemplates.tasks.hmlPriority"
                },
                taskDueDateFeature: {
                    defaultMessage: "Task Due Date",
                    id: "appTemplates.projects.taskDueDateFeature"
                },
                feature: {
                    defaultMessage: "Feature",
                    id: "appTemplates.projects.feature"
                },
                bug: {
                    defaultMessage: "Bug",
                    id: "appTemplates.projects.bug"
                },
                taskType: {
                    defaultMessage: "Task type",
                    id: "appTemplates.projects.taskType"
                },
                taskGithubPrsFeatureName: {
                    defaultMessage: "GitHub Pull Requests",
                    id: "appTemplates.projects.taskGithubPrRelationName"
                },
                taskGithubPrsFeatureDescription: {
                    defaultMessage: "Link PRs and set up automated task status updates based on PR changes",
                    id: "appTemplates.projects.taskGithubPrFeatureDescription"
                },
                taskGithubPrsDisabledFeatureDescription: {
                    defaultMessage: "Ask your workspace admin to configure the GitHub (Workspace) app in settings to use this feature",
                    id: "appTemplates.projects.taskGithubPrDisabledFeatureDescription"
                },
                parentTaskName: {
                    defaultMessage: "Parent-task",
                    id: "appTemplates.projects.parentTasksName"
                },
                totalTasksInSprint: {
                    defaultMessage: "Total tasks",
                    id: "appTemplatesSprintsV2.projects.totalTasksInSprint"
                },
                tasksCompletedInSprint: {
                    defaultMessage: "Completed tasks",
                    id: "appTemplatesSprintsV2.projects.tasksCompletedInSprint"
                },
                tasksCurrentSprintKanbanViewName: {
                    defaultMessage: "Current sprint kanban ",
                    id: "appTemplatesSprintsV2.projects.tasksCurrentSprintKanbanViewName"
                },
                tasksCurrentKanbanSprintViewDescription: {
                    defaultMessage: "Kanban view of tasks in current sprint",
                    id: "appTemplatesSprintsV2.projects.tasksCurrentKanbanSprintViewDescription"
                },
                tasksNextSprintViewName: {
                    defaultMessage: "Next sprint",
                    id: "appTemplatesSprintsV2.projects.tasksNextSprintViewName"
                },
                tasksNextSprintViewDescription: {
                    defaultMessage: "Table of tasks in the next sprint",
                    id: "appTemplatesSprintsV2.projects.tasksNextSprintViewDescription"
                },
                tasksLastSprintViewName: {
                    defaultMessage: "Last sprint",
                    id: "appTemplatesSprintsV2.projects.tasksLastSprintViewName"
                },
                tasksLastSprintViewDescription: {
                    defaultMessage: "Table of tasks in the last sprint",
                    id: "appTemplatesSprintsV2.projects.tasksLastSprintViewDescription"
                },
                tasksCurrentSprintOwnerViewDescription: {
                    defaultMessage: "Table of tasks in current sprint by owner",
                    id: "appTemplatesSprintsV2.projects.tasksCurrentSprintOwnerViewDescription"
                },
                tasksCurrentSprintOwnerViewName: {
                    defaultMessage: "Current sprint by owner ",
                    id: "appTemplatesSprintsV2.projects.tasksCurrentSprintOwnerViewName"
                },
                tasksSprintPlanningName: {
                    defaultMessage: "Sprint planning",
                    id: "appTemplatesSprintsV2.tasks.tasksSprintPlanningName"
                },
                tasksSprintPlanningDescription: {
                    defaultMessage: "Table of tasks in the current sprint, next sprint, and backlog",
                    id: "appTemplatesSprintsV2.tasks.tasksSprintPlanningDescription"
                },
                tasksTimelineViewDescription: {
                    defaultMessage: "Timeline of all tasks",
                    id: "appTemplates.tasks.tasksTimelineViewDescription"
                },
                tasksTimelineViewName: {
                    defaultMessage: "Timeline",
                    id: "appTemplates.tasks.tasksTimelineViewName"
                },
                tasksCalendarViewDescription: {
                    defaultMessage: "Calendar of all tasks",
                    id: "appTemplates.tasks.tasksCalendarViewDescription"
                },
                tasksCalendarViewName: {
                    defaultMessage: "Calendar",
                    id: "appTemplates.tasks.tasksCalendarViewName"
                },
                taskTagWebsite: {
                    defaultMessage: "Website",
                    id: "appTemplates.tasks.taskTagWebsite"
                },
                taskTagMobile: {
                    defaultMessage: "Mobile",
                    id: "appTemplates.tasks.taskTagMobile"
                },
                taskTagImprovement: {
                    defaultMessage: "Improvement",
                    id: "appTemplates.tasks.taskTagImprovement"
                }
            });

            function l(e) {
                return [{
                    uri: o(11448).d0,
                    type: "collection_view_block",
                    name: o(962299).A.formatMessage(n.tasksCollectionName),
                    defaultViewsOrder: e ? [o(11448).Zc, o(11448).Zy] : [o(11448).CY, o(11448).Lu, o(11448).JS, o(11448).vQ, o(11448).Zy, o(11448).Zc, o(11448).sP, o(11448).iJ, o(11448).Qx]
                }, {
                    uri: o(11448).dC,
                    type: "collection",
                    value: {
                        name: (0, o(247438).x9d)(o(962299).A.formatMessage(n.tasksCollectionName)),
                        schema: (0, o(11448).pE)(o(962299).A.intl),
                        format: {
                            subitem_property: o(11448).yx.SubTaskRelation,
                            collection_page_sections: [{
                                section: o(11448).yx.SubTaskRelation,
                                visibility: "inline"
                            }],
                            property_visibility: [{
                                property: o(11448).yx.Assign,
                                visibility: "show"
                            }, {
                                property: o(11448).yx.Status,
                                visibility: "show"
                            }, {
                                property: o(11448).yx.AiSummary,
                                visibility: "show"
                            }, {
                                property: o(11448).yx.DueDate,
                                visibility: "show"
                            }, {
                                property: o(11448).yx.TaskToProjectRelation,
                                visibility: "show"
                            }, {
                                property: o(11448).yx.TaskToSprintRelation,
                                visibility: "show"
                            }, {
                                property: o(11448).yx.SprintStatusRollup,
                                visibility: "hide"
                            }, {
                                property: o(11448).yx.SubTaskRelation,
                                visibility: "section"
                            }, {
                                property: o(11448).yx.ParentTaskRelation,
                                visibility: "hide_if_empty"
                            }, {
                                property: o(11448).yx.Priority,
                                visibility: "show"
                            }, {
                                property: o(11448).yx.Tags,
                                visibility: "show"
                            }],
                            collection_page_properties: [{
                                visible: !0,
                                property: o(11448).yx.Assign
                            }, {
                                visible: !0,
                                property: o(11448).yx.Status
                            }, {
                                visible: !0,
                                property: o(11448).yx.AiSummary
                            }, {
                                visible: !0,
                                property: o(11448).yx.DueDate
                            }, {
                                visible: !1,
                                property: o(11448).yx.TaskToProjectRelation
                            }, {
                                visible: !1,
                                property: o(11448).yx.TaskToSprintRelation
                            }, {
                                visible: !1,
                                property: o(11448).yx.SprintStatusRollup
                            }, {
                                visible: !1,
                                property: o(11448).yx.SubTaskRelation
                            }, {
                                visible: !1,
                                property: o(11448).yx.ParentTaskRelation
                            }, {
                                visible: !1,
                                property: o(11448).yx.Priority
                            }, {
                                visible: !1,
                                property: o(11448).yx.Tags
                            }],
                            collection_relation_options: {
                                [o(11448).yx.TaskToSprintRelation]: {
                                    related_properties: [{
                                        visible: !0,
                                        property: o(11448).Hx.StatusV2
                                    }, {
                                        visible: !0,
                                        property: o(11448).Hx.Dates
                                    }]
                                }
                            }
                        },
                        icon: o(896221).A.images.appPackages.taskDbIconSvg
                    },
                    collectionViewBlockUri: o(11448).d0,
                    emptyIcon: o(896221).A.images.appPackages.projectsProjectsEmptyIconPng,
                    emptyTitle: o(962299).A.formatMessage(n.tasksCollectionEmptyTitle),
                    emptyDescription: o(962299).A.formatMessage(n.tasksCollectionEmptyDescription),
                    emptyButtonTitle: o(962299).A.formatMessage(n.tasksCollectionEmptyButtonTitle)
                }]
            }

            function c(e) {
                return [{
                    uri: o(11448).Zc,
                    type: "collection_view",
                    collectionUri: o(11448).dC,
                    description: o(962299).A.formatMessage(n.allTasksViewDescription),
                    value: {
                        type: "table",
                        name: o(962299).A.formatMessage(n.allTasksViewName),
                        format: {
                            table_wrap: !1,
                            table_properties: e ? [{
                                width: 39,
                                visible: !0,
                                statusShowAs: "checkbox",
                                property: o(11448).yx.Status
                            }, {
                                width: 248,
                                visible: !0,
                                property: "title"
                            }, {
                                width: 158,
                                visible: !0,
                                property: o(11448).yx.Assign
                            }, {
                                width: 151,
                                visible: !0,
                                property: o(11448).yx.DueDate
                            }, {
                                width: 312,
                                visible: !1,
                                property: o(11448).yx.AiSummary
                            }, {
                                width: 200,
                                visible: !0,
                                property: o(11448).yx.TaskToProjectRelation
                            }, {
                                width: 113,
                                visible: !0,
                                property: o(11448).yx.TaskToSprintRelation
                            }, {
                                width: 180,
                                visible: !0,
                                property: o(11448).yx.GithubPrsRelation
                            }] : [{
                                width: 108,
                                visible: !0,
                                property: o(11448).yx.AutoIncrementId
                            }, {
                                width: 248,
                                visible: !0,
                                property: "title"
                            }, {
                                width: 133,
                                visible: !0,
                                property: o(11448).yx.Status
                            }, {
                                width: 158,
                                visible: !0,
                                property: o(11448).yx.Assign
                            }, {
                                width: 151,
                                visible: !0,
                                property: o(11448).yx.DueDate
                            }, {
                                width: 100,
                                visible: !0,
                                property: o(11448).yx.Priority
                            }, {
                                width: 142,
                                visible: !0,
                                property: o(11448).yx.Tags
                            }, {
                                width: 113,
                                visible: !0,
                                property: o(11448).yx.TaskToSprintRelation
                            }, {
                                width: 200,
                                visible: !0,
                                property: o(11448).yx.TaskToProjectRelation
                            }, {
                                width: 135,
                                visible: !1,
                                property: o(11448).yx.SprintStatusRollup
                            }, {
                                width: 130,
                                visible: !1,
                                property: o(11448).yx.ParentTaskRelation
                            }, {
                                width: 116,
                                visible: !1,
                                property: o(11448).yx.SubTaskRelation
                            }, {
                                width: 312,
                                visible: !1,
                                property: o(11448).yx.AiSummary
                            }, {
                                width: 180,
                                visible: !0,
                                property: o(11448).yx.GithubPrsRelation
                            }],
                            hide_linked_collection_name: !0
                        },
                        query2: {
                            aggregations: [{
                                property: "title",
                                aggregator: "count"
                            }]
                        },
                        page_sort: ["notion://projects/tutorial/tasks/task1", "notion://projects/tutorial/tasks/task2", "notion://projects/tutorial/tasks/task3", "notion://projects/tutorial/tasks/task4"]
                    },
                    collectionViewBlockUri: o(11448).d0
                }]
            }

            function u(e) {
                return [{
                    uri: o(11448).yx.Priority,
                    type: "property",
                    collectionUri: o(11448).dC,
                    name: o(962299).A.formatMessage(n.priorityProperty),
                    description: o(962299).A.formatMessage(n.taskPriorityFeatureDescription),
                    icon: "/icons/priority-high_gray.svg",
                    propertySchema: e()
                }]
            }

            function d(e) {
                return [{
                    uri: o(11448).yx.Estimates,
                    type: "property",
                    collectionUri: o(11448).dC,
                    name: o(962299).A.formatMessage(n.estimatesProperty),
                    description: o(962299).A.formatMessage(n.estimatesFeatureDescription),
                    icon: o(896221).A.images.appPackages.featureEstimationSvg,
                    propertySchema: e()
                }]
            }

            function y() {
                return {
                    type: "select",
                    name: o(962299).A.formatMessage(n.priorityProperty),
                    options: [{
                        id: "priority_low",
                        value: o(962299).A.formatMessage(n.priorityLow),
                        color: "green"
                    }, {
                        id: "priority_medium",
                        value: o(962299).A.formatMessage(n.priorityMedium),
                        color: "yellow"
                    }, {
                        id: "priority_high",
                        value: o(962299).A.formatMessage(n.priorityHigh),
                        color: "red"
                    }]
                }
            }

            function g() {
                return {
                    type: "select",
                    name: o(962299).A.formatMessage(n.priorityProperty),
                    options: [{
                        id: "p0",
                        value: "P0",
                        color: "red"
                    }, {
                        id: "p1",
                        value: "P1",
                        color: "yellow"
                    }, {
                        id: "p2",
                        value: "P2",
                        color: "green"
                    }]
                }
            }

            function _() {
                return {
                    type: "select",
                    name: o(962299).A.formatMessage(n.estimatesProperty),
                    options: [{
                        id: "xl",
                        value: "XL"
                    }, {
                        id: "l",
                        value: "L"
                    }, {
                        id: "m",
                        value: "M"
                    }, {
                        id: "s",
                        value: "S"
                    }, {
                        id: "xs",
                        value: "XS"
                    }]
                }
            }

            function m() {
                return {
                    type: "select",
                    name: o(962299).A.formatMessage(n.estimatesProperty),
                    options: [{
                        id: "1",
                        value: "1"
                    }, {
                        id: "2",
                        value: "2"
                    }, {
                        id: "3",
                        value: "3"
                    }, {
                        id: "5",
                        value: "5"
                    }, {
                        id: "8",
                        value: "8"
                    }]
                }
            }

            function k() {
                return [{
                    uri: o(11448).yx.TaskToProjectRelation,
                    type: "property",
                    collectionUri: o(11448).dC,
                    propertySchema: {
                        type: "relation",
                        icon: "/icons/target_gray.svg",
                        name: o(962299).A.formatMessage(n.taskProjectRelationName),
                        collection_pointer: {
                            table: o(832375).VlP,
                            id: o(11448).Tw
                        },
                        property: o(11448).K4.ProjectToTaskRelation,
                        version: "v2"
                    },
                    name: o(962299).A.formatMessage(n.taskProjectRelationDependencyName),
                    icon: "/icons/target_gray.svg"
                }, {
                    uri: o(11448).K4.ProjectToTaskRelation,
                    type: "property",
                    collectionUri: o(11448).Tw,
                    propertySchema: {
                        type: "relation",
                        icon: "/icons/checkmark_gray.svg",
                        name: o(962299).A.formatMessage(n.tasksCollectionName),
                        collection_pointer: {
                            table: o(832375).VlP,
                            id: o(11448).dC
                        },
                        property: o(11448).yx.TaskToProjectRelation,
                        version: "v2"
                    },
                    name: o(962299).A.formatMessage(n.taskProjectRelationDependencyName),
                    icon: "/icons/target_gray.svg"
                }]
            }
            let b = [{
                width: 108,
                visible: !0,
                property: o(11448).yx.AutoIncrementId
            }, {
                width: 240,
                visible: !0,
                property: "title"
            }, {
                width: 133,
                visible: !0,
                property: o(11448).yx.Status
            }, {
                width: 145,
                visible: !0,
                property: o(11448).yx.Assign
            }, {
                width: 143,
                visible: !0,
                property: o(11448).yx.DueDate
            }, {
                width: 100,
                visible: !0,
                property: o(11448).yx.Priority
            }, {
                width: 113,
                visible: !0,
                property: o(11448).yx.TaskToSprintRelation
            }, {
                width: 312,
                visible: !0,
                property: o(11448).yx.AiSummary
            }, {
                width: 142,
                visible: !1,
                property: o(11448).yx.Tags
            }, {
                width: 173,
                visible: !1,
                property: o(11448).yx.TaskToProjectRelation
            }, {
                width: 135,
                visible: !1,
                property: o(11448).yx.SprintStatusRollup
            }, {
                width: 180,
                visible: !0,
                property: o(11448).yx.GithubPrsRelation
            }];

            function f(e) {
                return [{
                    uri: o(11448).CY,
                    type: "collection_view",
                    collectionUri: o(11448).dC,
                    description: o(962299).A.formatMessage(n.taskByProjectViewDescription),
                    value: {
                        type: "table",
                        name: o(962299).A.formatMessage(n.taskByProjectViewName),
                        format: {
                            collection_view_icon: "/icons/target_gray.svg",
                            property_filters: [{
                                id: o(92513).JW(),
                                filter: {
                                    filter: {
                                        value: {
                                            type: "is_group",
                                            value: void 0
                                        },
                                        operator: "status_is"
                                    },
                                    property: o(11448).yx.Status
                                }
                            }, {
                                id: o(92513).JW(),
                                filter: {
                                    filter: {
                                        value: {
                                            type: "exact",
                                            value: void 0
                                        },
                                        operator: "person_contains"
                                    },
                                    property: o(11448).yx.Assign
                                }
                            }, {
                                id: o(92513).JW(),
                                filter: {
                                    filter: {
                                        value: {
                                            type: "exact",
                                            value: void 0
                                        },
                                        operator: "date_is"
                                    },
                                    property: o(11448).yx.DueDate
                                }
                            }, {
                                id: o(92513).JW(),
                                filter: {
                                    filter: {
                                        value: {
                                            type: "exact",
                                            value: void 0
                                        },
                                        operator: "relation_contains"
                                    },
                                    property: o(11448).yx.TaskToSprintRelation
                                }
                            }, {
                                id: o(92513).JW(),
                                filter: {
                                    filter: {
                                        value: {
                                            type: "exact",
                                            value: void 0
                                        },
                                        operator: "relation_contains"
                                    },
                                    property: o(11448).yx.TaskToProjectRelation
                                }
                            }],
                            table_properties: b,
                            collection_group_by: {
                                sort: {
                                    type: "ascending"
                                },
                                type: "relation",
                                property: o(11448).yx.TaskToProjectRelation,
                                hideEmptyGroups: !0
                            },
                            collection_groups: [{
                                value: {
                                    type: "relation",
                                    value: {
                                        id: "tasks_with_projects" === e ? "notion://projects/tutorial/projects/getting_started_with_projects" : "notion://projects/tutorial/projects/getting_started_with_agile",
                                        table: "block"
                                    }
                                },
                                property: o(11448).yx.TaskToProjectRelation
                            }, {
                                value: {
                                    type: "relation",
                                    value: {
                                        id: "notion://projects/tutorial/projects/project1",
                                        table: "block"
                                    }
                                },
                                property: o(11448).yx.TaskToProjectRelation
                            }, {
                                value: {
                                    type: "relation",
                                    value: {
                                        id: "notion://projects/tutorial/projects/project2",
                                        table: "block"
                                    }
                                },
                                property: o(11448).yx.TaskToProjectRelation
                            }, {
                                value: {
                                    type: "relation",
                                    value: void 0
                                },
                                property: o(11448).yx.TaskToProjectRelation,
                                emptyHidden: !0
                            }]
                        },
                        query2: {
                            aggregations: [{
                                property: o(11448).yx.Status,
                                aggregator: {
                                    operator: "count_per_group",
                                    groupName: o(998833).P0
                                }
                            }]
                        }
                    },
                    collectionViewBlockUri: o(11448).d0
                }]
            }
            let j = {
                    type: "rollup",
                    name: o(962299).A.formatMessage(n.tasksCompletedInSprint),
                    icon: "/icons/checklist_gray.svg",
                    aggregation: {
                        operator: "percent_per_group",
                        groupName: o(998833).P0
                    },
                    show_as: {
                        type: "ring",
                        color: "blue",
                        maxValue: 1,
                        showValue: !0
                    },
                    target_property: o(11448).yx.Status,
                    relation_property: o(11448).Hx.SprintToTaskRelation,
                    target_property_type: "status"
                },
                T = {
                    type: "rollup",
                    name: o(962299).A.formatMessage(n.totalTasksInSprint),
                    icon: "/icons/list_gray.svg",
                    aggregation: "count_values",
                    target_property: o(11448).yx.Status,
                    relation_property: o(11448).Hx.SprintToTaskRelation,
                    target_property_type: "status"
                };

            function P() {
                return [{
                    uri: o(11448).Hx.SprintToTaskRelation,
                    type: "property",
                    collectionUri: o(11448).av,
                    name: o(962299).A.formatMessage(n.tasksCollectionName),
                    description: o(962299).A.formatMessage(n.tasksWithSprintsFeatureDescription),
                    icon: o(896221).A.images.appPackages.taskDbIconSvg,
                    propertySchema: {
                        type: "relation",
                        name: o(962299).A.formatMessage(n.tasksCollectionName),
                        collection_pointer: {
                            table: o(832375).VlP,
                            id: o(11448).dC
                        },
                        property: o(11448).yx.TaskToSprintRelation,
                        version: "v2"
                    }
                }, {
                    uri: o(11448).yx.TaskToSprintRelation,
                    type: "property",
                    collectionUri: o(11448).dC,
                    name: o(962299).A.formatMessage(n.sprintsCollectionName),
                    description: o(962299).A.formatMessage(n.tasksWithSprintsFeatureDescription),
                    icon: "/icons/run_gray.svg",
                    propertySchema: {
                        type: "relation",
                        icon: "/icons/run_gray.svg",
                        name: o(962299).A.formatMessage(n.sprintsName),
                        collection_pointer: {
                            table: o(832375).VlP,
                            id: o(11448).av
                        },
                        property: o(11448).Hx.SprintToTaskRelation,
                        version: "v2",
                        limit: 1
                    }
                }]
            }
            let v = {
                    id: o(11448).IZ,
                    filter: {
                        filter: {
                            value: [{
                                type: "relative",
                                value: {
                                    type: "builtin",
                                    variable: "current"
                                }
                            }],
                            operator: "relation_contains"
                        },
                        property: o(11448).yx.TaskToSprintRelation
                    }
                },
                h = [v, {
                    id: o(92513).JW(),
                    filter: {
                        filter: {
                            value: {
                                type: "exact",
                                value: void 0
                            },
                            operator: "person_contains"
                        },
                        property: o(11448).yx.Assign
                    }
                }, {
                    id: o(92513).JW(),
                    filter: {
                        filter: {
                            value: [{
                                type: "exact",
                                value: void 0
                            }],
                            operator: "relation_contains"
                        },
                        property: o(11448).yx.TaskToProjectRelation
                    }
                }];

            function M() {
                return [{
                    uri: o(11448).Lu,
                    type: "collection_view",
                    collectionUri: o(11448).dC,
                    description: o(962299).A.formatMessage(n.tasksCurrentSprintViewDescription),
                    optionalProperties: [o(11448).yx.TaskToProjectRelation],
                    value: {
                        type: "board",
                        name: o(962299).A.formatMessage(n.tasksCurrentSprintV2ViewName),
                        format: {
                            collection_view_icon: "/icons/playback-play-button_gray.svg",
                            board_columns_by: {
                                sort: {
                                    type: "ascending"
                                },
                                type: "status",
                                groupBy: "option",
                                property: o(11448).yx.Status,
                                disableBoardColorColumns: !1
                            },
                            board_columns: [{
                                value: {
                                    type: "status",
                                    value: {
                                        type: "by_option",
                                        option: o(962299).A.formatMessage(o(998833).M_.statusOptionNotStarted)
                                    }
                                },
                                property: o(11448).yx.Status
                            }, {
                                value: {
                                    type: "status",
                                    value: {
                                        type: "by_option",
                                        option: o(962299).A.formatMessage(o(998833).M_.statusOptionInProgress)
                                    }
                                },
                                property: o(11448).yx.Status
                            }, {
                                value: {
                                    type: "status",
                                    value: {
                                        type: "by_option",
                                        option: o(962299).A.formatMessage(o(998833).M_.statusOptionDone)
                                    }
                                },
                                property: o(11448).yx.Status
                            }, {
                                value: {
                                    type: "status",
                                    value: {
                                        type: "by_option",
                                        option: o(962299).A.formatMessage(o(998833).M_.typedStatusOptionArchived)
                                    }
                                },
                                hidden: !0,
                                property: o(11448).yx.Status
                            }],
                            board_properties: [{
                                visible: !1,
                                property: o(11448).yx.SprintStatusRollup
                            }, {
                                visible: !1,
                                property: o(11448).yx.Status
                            }, {
                                visible: !0,
                                property: "title"
                            }, {
                                visible: !1,
                                property: o(11448).yx.DueDate
                            }, {
                                visible: !0,
                                property: o(11448).yx.Assign
                            }, {
                                visible: !0,
                                property: o(11448).yx.Priority
                            }, {
                                visible: !1,
                                property: o(11448).yx.TaskToSprintRelation
                            }, {
                                visible: !1,
                                property: o(11448).yx.TaskToProjectRelation
                            }, {
                                visible: !1,
                                property: o(11448).yx.AiSummary
                            }],
                            table_wrap: !1,
                            table_properties: [{
                                visible: !0,
                                property: "title"
                            }, {
                                visible: !0,
                                property: o(11448).yx.Status
                            }, {
                                visible: !0,
                                property: o(11448).yx.DueDate
                            }, {
                                visible: !0,
                                property: o(11448).yx.Assign
                            }, {
                                visible: !0,
                                property: o(11448).yx.TaskToSprintRelation
                            }, {
                                visible: !1,
                                property: o(11448).yx.TaskToProjectRelation
                            }, {
                                width: 312,
                                visible: !1,
                                property: o(11448).yx.AiSummary
                            }],
                            property_filters: h,
                            collection_group_by: {
                                sort: {
                                    type: "ascending"
                                },
                                type: "relation",
                                property: o(11448).yx.TaskToProjectRelation,
                                hideEmptyGroups: !1
                            },
                            collection_groups: [{
                                value: {
                                    type: "relation",
                                    value: {
                                        id: "notion://projects/tutorial/projects/getting_started_with_projects",
                                        table: "block"
                                    }
                                },
                                property: o(11448).yx.TaskToProjectRelation
                            }, {
                                value: {
                                    type: "relation",
                                    value: {
                                        id: "notion://projects/tutorial/projects/project1",
                                        table: "block"
                                    }
                                },
                                property: o(11448).yx.TaskToProjectRelation
                            }, {
                                value: {
                                    type: "relation",
                                    value: {
                                        id: "notion://projects/tutorial/projects/project2",
                                        table: "block"
                                    }
                                },
                                property: o(11448).yx.TaskToProjectRelation
                            }, {
                                value: {
                                    type: "relation",
                                    value: void 0
                                },
                                property: o(11448).yx.TaskToProjectRelation,
                                emptyHidden: !0
                            }],
                            hide_linked_collection_name: !0
                        }
                    },
                    collectionViewBlockUri: o(11448).d0
                }]
            }

            function w() {
                return [{
                    uri: o(11448).JS,
                    type: "collection_view",
                    collectionUri: o(11448).dC,
                    description: o(962299).A.formatMessage(n.tasksSprintPlanningDescription),
                    optionalProperties: [o(11448).yx.TaskToProjectRelation],
                    value: {
                        type: "table",
                        name: o(962299).A.formatMessage(n.tasksSprintPlanningName),
                        format: {
                            collection_view_icon: "/icons/meeting_gray.svg",
                            table_wrap: !0,
                            collection_group_by: {
                                sort: {
                                    type: "manual"
                                },
                                type: "relation",
                                property: o(11448).yx.TaskToSprintRelation,
                                hideEmptyGroups: !1
                            },
                            collection_groups: (0, o(11448).It)(!0),
                            hide_linked_collection_name: !0,
                            property_filters: [{
                                id: o(92513).JW(),
                                filter: {
                                    filter: {
                                        value: {
                                            type: "is_group",
                                            value: o(998833).P0
                                        },
                                        operator: "status_is_not"
                                    },
                                    property: o(11448).yx.Status
                                }
                            }, {
                                id: o(92513).JW(),
                                filter: {
                                    filter: {
                                        value: {
                                            type: "exact",
                                            value: void 0
                                        },
                                        operator: "person_contains"
                                    },
                                    property: o(11448).yx.Assign
                                }
                            }, {
                                id: o(92513).JW(),
                                filter: {
                                    filter: {
                                        value: [{
                                            type: "exact",
                                            value: void 0
                                        }],
                                        operator: "relation_contains"
                                    },
                                    property: o(11448).yx.TaskToProjectRelation
                                }
                            }],
                            table_properties: [{
                                width: 259,
                                visible: !0,
                                property: "title"
                            }, {
                                width: 121,
                                visible: !0,
                                property: o(11448).yx.Priority
                            }, {
                                width: 142,
                                visible: !0,
                                property: o(11448).yx.Status
                            }, {
                                width: 180,
                                visible: !0,
                                property: o(11448).yx.Assign
                            }, {
                                width: 232,
                                visible: !0,
                                property: o(11448).yx.TaskToProjectRelation
                            }, {
                                width: 312,
                                visible: !1,
                                property: o(11448).yx.AiSummary
                            }]
                        },
                        query2: {
                            filter: {
                                operator: "or",
                                filters: [{
                                    property: o(11448).yx.TaskToSprintRelation,
                                    filter: {
                                        operator: "relation_contains",
                                        value: [{
                                            type: "relative",
                                            value: {
                                                type: "builtin",
                                                variable: "current"
                                            }
                                        }, {
                                            type: "relative",
                                            value: {
                                                type: "builtin",
                                                variable: "next"
                                            }
                                        }, {
                                            type: "relative",
                                            value: {
                                                type: "builtin",
                                                variable: "last"
                                            }
                                        }]
                                    }
                                }, {
                                    property: o(11448).yx.TaskToSprintRelation,
                                    filter: {
                                        operator: "is_empty"
                                    }
                                }]
                            }
                        }
                    },
                    collectionViewBlockUri: o(11448).d0
                }]
            }

            function S() {
                return [{
                    uri: o(11448).vQ,
                    type: "collection_view",
                    collectionUri: o(11448).dC,
                    description: o(962299).A.formatMessage(n.tasksWithNoSprintViewDescription),
                    optionalProperties: [o(11448).yx.TaskToProjectRelation],
                    value: {
                        type: "table",
                        name: o(962299).A.formatMessage(n.backlog),
                        format: {
                            table_wrap: !1,
                            collection_view_icon: "/icons/inbox_gray.svg",
                            property_filters: [{
                                id: o(11448).QW,
                                filter: {
                                    filter: {
                                        operator: "is_empty"
                                    },
                                    property: o(11448).yx.TaskToSprintRelation
                                }
                            }, {
                                id: o(92513).JW(),
                                filter: {
                                    filter: {
                                        value: {
                                            type: "is_group",
                                            value: o(998833).P0
                                        },
                                        operator: "status_is_not"
                                    },
                                    property: o(11448).yx.Status
                                }
                            }, {
                                id: o(92513).JW(),
                                filter: {
                                    filter: {
                                        value: {
                                            type: "exact",
                                            value: void 0
                                        },
                                        operator: "person_contains"
                                    },
                                    property: o(11448).yx.Assign
                                }
                            }, {
                                id: o(92513).JW(),
                                filter: {
                                    filter: {
                                        value: [{
                                            type: "exact",
                                            value: void 0
                                        }],
                                        operator: "relation_contains"
                                    },
                                    property: o(11448).yx.TaskToProjectRelation
                                }
                            }],
                            table_properties: [{
                                width: 108,
                                visible: !0,
                                property: o(11448).yx.AutoIncrementId
                            }, {
                                width: 271,
                                visible: !0,
                                property: "title"
                            }, {
                                width: 131,
                                visible: !0,
                                property: o(11448).yx.Status
                            }, {
                                width: 125,
                                visible: !0,
                                property: o(11448).yx.Assign
                            }, {
                                width: 154,
                                visible: !1,
                                property: o(11448).yx.DueDate
                            }, {
                                width: 100,
                                visible: !0,
                                property: o(11448).yx.Priority
                            }, {
                                width: 141,
                                visible: !0,
                                property: o(11448).yx.Tags
                            }, {
                                width: 116,
                                visible: !0,
                                property: o(11448).yx.TaskToSprintRelation
                            }, {
                                width: 194,
                                visible: !0,
                                property: o(11448).yx.TaskToProjectRelation
                            }, {
                                width: 312,
                                visible: !1,
                                property: o(11448).yx.AiSummary
                            }],
                            hide_linked_collection_name: !0
                        },
                        query2: {
                            aggregations: [{
                                property: "title",
                                aggregator: "count"
                            }]
                        }
                    },
                    collectionViewBlockUri: o(11448).d0
                }]
            }

            function A() {
                let e = (0, o(11448).pE)(o(962299).A.intl)[o(11448).yx.Status];
                return {
                    uri: "notion://tasks/status_feature",
                    name: o(962299).A.formatMessage(n.statusProperty),
                    description: o(962299).A.formatMessage(n.statusFeatureDescription),
                    collectionUri: o(11448).dC,
                    tooltipImage: {
                        img: o(896221).A.images.tooltips.properties.statusPng,
                        scale: .5
                    },
                    icon: o(896221).A.images.appPackages.featureStatusSvg,
                    dependencies: e ? [{
                        uri: o(11448).yx.Status,
                        type: "property",
                        collectionUri: o(11448).dC,
                        name: o(962299).A.formatMessage(n.statusProperty),
                        propertySchema: e
                    }] : []
                }
            }

            function x() {
                return {
                    uri: "notion://projects/tasks_feature",
                    name: o(962299).A.formatMessage(n.tasksCollectionName),
                    description: o(962299).A.formatMessage(n.simpleTaskFeatureDescription),
                    dependencies: [...l(!1)],
                    icon: o(896221).A.images.appPackages.taskDbIconSvg,
                    collectionUri: o(11448).dC
                }
            }

            function V() {
                return {
                    uri: "notion://tasks/task_dependencies_feature",
                    name: o(962299).A.formatMessage(n.taskDependencies),
                    description: o(962299).A.formatMessage(n.taskDependenciesFeatureDescription),
                    tooltipImage: {
                        img: o(896221).A.images.tooltips.properties.dependenciesPng,
                        scale: .5
                    },
                    icon: "/icons/dependency_gray.svg",
                    dependencies: [{
                        uri: o(11448).yx.BlockingRelation,
                        type: "property",
                        collectionUri: o(11448).dC,
                        name: o(962299).A.formatMessage(n.taskDependencies),
                        description: o(962299).A.formatMessage(n.taskDependenciesFeatureDescription),
                        icon: "/icons/dependency_gray.svg",
                        propertySchema: {
                            type: "relation",
                            name: o(962299).A.formatMessage(n.taskBlockingName),
                            collection_pointer: {
                                table: o(832375).VlP,
                                id: o(11448).dC
                            },
                            property: o(11448).yx.BlockedRelation,
                            version: "v2"
                        }
                    }, {
                        uri: o(11448).yx.BlockedRelation,
                        type: "property",
                        collectionUri: o(11448).dC,
                        name: o(962299).A.formatMessage(n.taskDependencies),
                        description: o(962299).A.formatMessage(n.taskDependenciesFeatureDescription),
                        icon: "/icons/dependency_gray.svg",
                        propertySchema: {
                            type: "relation",
                            name: o(962299).A.formatMessage(n.taskBlockedByName),
                            collection_pointer: {
                                table: o(832375).VlP,
                                id: o(11448).dC
                            },
                            property: o(11448).yx.BlockingRelation,
                            version: "v2"
                        }
                    }],
                    collectionUri: o(11448).dC
                }
            }

            function D() {
                return {
                    uri: "notion://tasks/sub_task_feature",
                    name: o(962299).A.formatMessage(n.subTaskName),
                    description: o(962299).A.formatMessage(n.subTaskFeatureDescription),
                    icon: "/icons/list-indent_gray.svg",
                    tooltipImage: {
                        img: o(896221).A.images.tooltips.properties.subtasksPng,
                        scale: .5
                    },
                    dependencies: [{
                        uri: o(11448).yx.SubTaskRelation,
                        type: "property",
                        collectionUri: o(11448).dC,
                        name: o(962299).A.formatMessage(n.subTaskName),
                        description: o(962299).A.formatMessage(n.subTaskFeatureDescription),
                        icon: "/icons/list-indent_gray.svg",
                        propertySchema: {
                            type: "relation",
                            icon: "/icons/list-indent_gray.svg",
                            name: o(962299).A.formatMessage(n.subTaskName),
                            collection_pointer: {
                                table: o(832375).VlP,
                                id: o(11448).dC
                            },
                            property: o(11448).yx.ParentTaskRelation,
                            version: "v2"
                        }
                    }, {
                        uri: o(11448).yx.ParentTaskRelation,
                        type: "property",
                        collectionUri: o(11448).dC,
                        name: o(962299).A.formatMessage(n.subTaskName),
                        description: o(962299).A.formatMessage(n.subTaskFeatureDescription),
                        icon: "/icons/list-indent_gray.svg",
                        propertySchema: {
                            type: "relation",
                            name: o(962299).A.formatMessage(n.parentTaskName),
                            collection_pointer: {
                                table: o(832375).VlP,
                                id: o(11448).dC
                            },
                            property: o(11448).yx.SubTaskRelation,
                            version: "v2"
                        }
                    }],
                    collectionUri: o(11448).dC
                }
            }

            function N() {
                return {
                    uri: "notion://tasks/tshirt_size_estimates_feature",
                    name: o(962299).A.formatMessage(n.tshirtSizeEstimates),
                    icon: o(896221).A.images.appPackages.featureEstimationSvg,
                    dependencies: [...d(_)],
                    collectionUri: o(11448).dC
                }
            }

            function U() {
                return {
                    uri: "notion://tasks/points_estimates_feature",
                    name: o(962299).A.formatMessage(n.pointsEstimates),
                    icon: o(896221).A.images.appPackages.featureEstimationSvg,
                    dependencies: [...d(m)],
                    collectionUri: o(11448).dC
                }
            }

            function B() {
                return {
                    uri: "notion://projects/estimates_feature",
                    name: o(962299).A.formatMessage(n.estimatesProperty),
                    description: o(962299).A.formatMessage(n.estimatesFeatureDescription),
                    tooltipImage: {
                        img: o(896221).A.images.tooltips.properties.tasksEstimatesPng,
                        scale: .5
                    },
                    icon: "/icons/123_gray.svg",
                    variants: [N().uri, U().uri],
                    collectionUri: o(11448).dC
                }
            }

            function W() {
                return {
                    uri: "notion://projects/task_hml_priority_feature",
                    name: o(962299).A.formatMessage(n.hmlPriority),
                    icon: "/icons/priority-high_gray.svg",
                    dependencies: [...u(y)],
                    collectionUri: o(11448).dC
                }
            }

            function C() {
                return {
                    uri: "notion://projects/task_p012_priority_feature",
                    name: "P0, P1, P2",
                    icon: "/icons/priority-high_gray.svg",
                    dependencies: [...u(g)],
                    collectionUri: o(11448).dC
                }
            }

            function R() {
                return {
                    uri: "notion://projects/task_priority_feature",
                    name: o(962299).A.formatMessage(n.priorityProperty),
                    description: o(962299).A.formatMessage(n.taskPriorityFeatureDescription),
                    tooltipImage: {
                        img: o(896221).A.images.tooltips.properties.tasksPriorityPng,
                        scale: .5
                    },
                    icon: "/icons/priority-high_gray.svg",
                    variants: [W().uri, C().uri],
                    collectionUri: o(11448).dC
                }
            }

            function G() {
                return {
                    uri: "notion://projects/tags_feature",
                    name: o(962299).A.formatMessage(n.tags),
                    description: o(962299).A.formatMessage(n.tagsFeatureDescription),
                    tooltipImage: {
                        img: o(896221).A.images.tooltips.properties.tasksTagsPng,
                        scale: .5
                    },
                    icon: "/icons/tag_gray.svg",
                    dependencies: [{
                        uri: o(11448).yx.Tags,
                        type: "property",
                        collectionUri: o(11448).dC,
                        name: o(962299).A.formatMessage(n.tags),
                        icon: "/icons/tag_gray.svg",
                        propertySchema: {
                            type: "multi_select",
                            name: o(962299).A.formatMessage(n.tags),
                            icon: "/icons/tag_gray.svg",
                            options: [{
                                color: "purple",
                                value: o(962299).A.formatMessage(n.taskTagMobile),
                                id: "Mobile"
                            }, {
                                color: "blue",
                                value: o(962299).A.formatMessage(n.taskTagWebsite),
                                id: "Website"
                            }, {
                                color: "pink",
                                value: o(962299).A.formatMessage(n.taskTagImprovement),
                                id: "Improvement"
                            }]
                        }
                    }],
                    collectionUri: o(11448).dC
                }
            }

            function $() {
                return {
                    uri: "notion://projects/task_description_feature",
                    name: o(962299).A.formatMessage(n.description),
                    description: o(962299).A.formatMessage(n.taskDescriptionFeatureDescription),
                    icon: "/icons/description_gray.svg",
                    dependencies: [{
                        uri: o(11448).yx.Description,
                        type: "property",
                        collectionUri: o(11448).dC,
                        name: o(962299).A.formatMessage(n.description),
                        icon: "/icons/description_gray.svg",
                        propertySchema: {
                            type: "text",
                            name: o(962299).A.formatMessage(n.description)
                        }
                    }],
                    collectionUri: o(11448).dC
                }
            }

            function F() {
                return {
                    uri: "notion://tasks/task_summary_feature",
                    name: o(962299).A.formatMessage(n.taskSummaryFeature),
                    description: o(962299).A.formatMessage(n.taskSummaryFeatureDescription),
                    icon: o(896221).A.images.appPackages.featureAiSummarizeSvg,
                    tooltipImage: {
                        img: o(896221).A.images.tooltips.properties.aiAutofillSummaryPng,
                        scale: .5
                    },
                    isAi: !0,
                    collectionUri: o(11448).dC,
                    dependencies: [{
                        uri: o(11448).yx.AiSummary,
                        type: "property",
                        name: o(962299).A.formatMessage(n.taskSummaryProperty),
                        collectionUri: o(11448).dC,
                        propertySchema: {
                            type: "text",
                            name: o(962299).A.formatMessage(n.taskSummaryProperty),
                            ai_inference: {
                                type: "summarize",
                                auto_update_on_edit: !0
                            }
                        }
                    }]
                }
            }

            function K() {
                return {
                    uri: "notion://tasks/tasks_calendar_feature",
                    name: o(962299).A.formatMessage(n.tasksCalendarViewName),
                    description: o(962299).A.formatMessage(n.tasksCalendarViewDescription),
                    dependencies: [{
                        uri: "notion://tasks/tasks_calendar_view",
                        type: "collection_view",
                        collectionUri: o(11448).dC,
                        description: o(962299).A.formatMessage(n.tasksCalendarViewDescription),
                        value: {
                            type: "calendar",
                            name: o(962299).A.formatMessage(n.tasksCalendarViewName),
                            format: {
                                calendar_properties: [{
                                    property: o(11448).yx.Status,
                                    visible: !0
                                }, {
                                    property: o(11448).yx.Assign,
                                    visible: !0
                                }]
                            },
                            query2: {
                                calendar_by: o(11448).yx.DueDate
                            }
                        },
                        collectionViewBlockUri: o(11448).d0
                    }],
                    collectionUri: o(11448).dC,
                    tooltipImage: {
                        img: o(896221).A.images.tooltips.views.tasksCalendarPng,
                        scale: .5
                    },
                    icon: o(896221).A.images.appPackages.featureCalendarSvg
                }
            }

            function I() {
                return {
                    uri: "notion://tasks/tasks_timeline_feature",
                    name: o(962299).A.formatMessage(n.tasksTimelineViewName),
                    description: o(962299).A.formatMessage(n.tasksTimelineViewDescription),
                    tooltipImage: {
                        img: o(896221).A.images.tooltips.views.tasksTimelinePng,
                        scale: .5
                    },
                    dependencies: [{
                        uri: "notion://tasks/tasks_timeline_view",
                        type: "collection_view",
                        collectionUri: o(11448).dC,
                        description: o(962299).A.formatMessage(n.tasksTimelineViewDescription),
                        value: {
                            type: "timeline",
                            name: o(962299).A.formatMessage(n.tasksTimelineViewName),
                            format: {
                                collection_view_icon: "/icons/timeline_gray.svg",
                                timeline_show_table: !0,
                                timeline_table_properties: [{
                                    width: 206,
                                    visible: !0,
                                    property: "title"
                                }, {
                                    width: 141,
                                    visible: !0,
                                    property: o(11448).yx.Status
                                }, {
                                    width: 312,
                                    visible: !1,
                                    property: o(11448).yx.AiSummary
                                }],
                                timeline_properties: [{
                                    property: "title",
                                    visible: !0
                                }, {
                                    property: o(11448).yx.Assign,
                                    visible: !0
                                }, {
                                    property: o(11448).yx.AiSummary,
                                    visible: !1
                                }],
                                timeline_preference: {
                                    zoomLevel: "month",
                                    centerTimestamp: (0, o(25825).ln)((0, o(25825).Ec)((0, o(714350).P)()), (0, o(714350).P)())
                                }
                            },
                            query2: {
                                timeline_by: o(11448).yx.DueDate,
                                aggregations: [{
                                    property: "title",
                                    aggregator: "count"
                                }],
                                sort: [{
                                    property: o(11448).yx.Status,
                                    direction: "ascending"
                                }]
                            }
                        },
                        collectionViewBlockUri: o(11448).d0
                    }],
                    collectionUri: o(11448).dC,
                    icon: o(896221).A.images.appPackages.featureGanttSvg
                }
            }

            function H() {
                return {
                    uri: "notion://projects/task_board_no_grouping_feature",
                    name: o(962299).A.formatMessage(n.boardViewName),
                    description: o(962299).A.formatMessage(n.tasksBoardViewDescription),
                    dependencies: [{
                        uri: "notion://tasks/tasks_board_view",
                        type: "collection_view",
                        collectionUri: o(11448).dC,
                        description: o(962299).A.formatMessage(n.tasksBoardViewDescription),
                        value: {
                            type: "board",
                            name: o(962299).A.formatMessage(n.boardViewName),
                            format: {
                                table_wrap: !1,
                                board_columns: [{
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: o(962299).A.formatMessage(o(998833).M_.statusOptionNotStarted)
                                        }
                                    },
                                    property: o(11448).yx.Status
                                }, {
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: o(962299).A.formatMessage(o(998833).M_.statusOptionInProgress)
                                        }
                                    },
                                    property: o(11448).yx.Status
                                }, {
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: o(962299).A.formatMessage(o(998833).M_.statusOptionDone)
                                        }
                                    },
                                    property: o(11448).yx.Status
                                }, {
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: o(962299).A.formatMessage(o(998833).M_.typedStatusOptionArchived)
                                        }
                                    },
                                    property: o(11448).yx.Status,
                                    hidden: !0
                                }, {
                                    value: {
                                        type: "status",
                                        value: void 0
                                    },
                                    hidden: !0,
                                    property: o(11448).yx.Status
                                }],
                                board_columns_by: {
                                    sort: {
                                        type: "ascending"
                                    },
                                    type: "status",
                                    groupBy: "option",
                                    property: o(11448).yx.Status,
                                    disableBoardColorColumns: !1
                                },
                                board_properties: [{
                                    visible: !1,
                                    property: o(11448).yx.Status
                                }, {
                                    visible: !0,
                                    property: "title"
                                }, {
                                    visible: !0,
                                    property: o(11448).yx.Assign
                                }, {
                                    visible: !0,
                                    property: o(11448).yx.TaskToProjectRelation
                                }, {
                                    visible: !0,
                                    property: o(11448).yx.Priority
                                }, {
                                    visible: !1,
                                    property: o(11448).yx.DueDate
                                }, {
                                    visible: !1,
                                    property: o(11448).yx.AiSummary
                                }],
                                property_filters: [{
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: {
                                                type: "exact",
                                                value: void 0
                                            },
                                            operator: "person_contains"
                                        },
                                        property: o(11448).yx.Assign
                                    }
                                }, {
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: {
                                                type: "exact",
                                                value: void 0
                                            },
                                            operator: "date_is"
                                        },
                                        property: o(11448).yx.DueDate
                                    }
                                }],
                                hide_linked_collection_name: !0
                            },
                            query2: {
                                sort: [{
                                    direction: "descending",
                                    property: o(11448).yx.Priority
                                }]
                            }
                        },
                        collectionViewBlockUri: o(11448).d0
                    }],
                    tooltipImage: {
                        img: o(896221).A.images.tooltips.views.tasksByStatusPng,
                        scale: .5
                    },
                    icon: o(896221).A.images.appPackages.featureBoardSvg,
                    collectionUri: o(11448).dC
                }
            }

            function q(e) {
                return {
                    uri: "notion://projects/task_table_feature",
                    name: o(962299).A.formatMessage(n.allTasksViewName),
                    description: o(962299).A.formatMessage(n.allTasksViewDescription),
                    dependencies: [...c(e)],
                    collectionUri: o(11448).dC
                }
            }

            function E() {
                return {
                    uri: "notion://projects/task_by_person_feature",
                    name: o(962299).A.formatMessage(n.taskByPersonFeatureName),
                    description: o(962299).A.formatMessage(n.taskByPersonFeatureDescription),
                    dependencies: [{
                        uri: o(11448).Qx,
                        type: "collection_view",
                        collectionUri: o(11448).dC,
                        description: o(962299).A.formatMessage(n.taskByPersonViewDescription),
                        value: {
                            type: "table",
                            name: o(962299).A.formatMessage(n.taskByPersonViewName),
                            format: {
                                collection_view_icon: "/icons/groups_gray.svg",
                                property_filters: [{
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: {
                                                type: "is_group",
                                                value: void 0
                                            },
                                            operator: "status_is"
                                        },
                                        property: o(11448).yx.Status
                                    }
                                }, {
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: {
                                                type: "exact",
                                                value: void 0
                                            },
                                            operator: "person_contains"
                                        },
                                        property: o(11448).yx.Assign
                                    }
                                }, {
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: {
                                                type: "exact",
                                                value: void 0
                                            },
                                            operator: "date_is"
                                        },
                                        property: o(11448).yx.DueDate
                                    }
                                }, {
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: [{
                                                type: "exact",
                                                value: void 0
                                            }],
                                            operator: "relation_contains"
                                        },
                                        property: o(11448).yx.TaskToProjectRelation
                                    }
                                }, {
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: {
                                                type: "exact",
                                                value: void 0
                                            },
                                            operator: "relation_contains"
                                        },
                                        property: o(11448).yx.TaskToSprintRelation
                                    }
                                }],
                                table_properties: [{
                                    width: 312,
                                    visible: !0,
                                    property: "title"
                                }, {
                                    width: 134,
                                    visible: !0,
                                    property: o(11448).yx.Status
                                }, {
                                    width: 148,
                                    visible: !0,
                                    property: o(11448).yx.DueDate
                                }, {
                                    width: 178,
                                    visible: !0,
                                    property: o(11448).yx.TaskToProjectRelation
                                }, {
                                    width: 136,
                                    visible: !0,
                                    property: o(11448).yx.TaskToSprintRelation
                                }, {
                                    width: 200,
                                    visible: !1,
                                    property: o(11448).yx.Assign
                                }, {
                                    width: 200,
                                    visible: !1,
                                    property: o(11448).yx.SprintStatusRollup
                                }, {
                                    width: 312,
                                    visible: !1,
                                    property: o(11448).yx.AiSummary
                                }],
                                collection_group_by: {
                                    sort: {
                                        type: "manual"
                                    },
                                    type: "person",
                                    property: o(11448).yx.Assign
                                },
                                hide_linked_collection_name: !0
                            },
                            query2: {
                                sort: [{
                                    property: o(11448).yx.Status,
                                    direction: "ascending"
                                }],
                                aggregations: [{
                                    property: o(11448).yx.Status,
                                    aggregator: {
                                        operator: "count_per_group",
                                        groupName: o(998833).P0
                                    }
                                }]
                            }
                        },
                        collectionViewBlockUri: o(11448).d0
                    }],
                    tooltipImage: {
                        img: o(896221).A.images.tooltips.views.tasksByAssigneePng,
                        scale: .5
                    },
                    icon: o(896221).A.images.appPackages.featureGanttSvg,
                    collectionUri: o(11448).dC
                }
            }

            function J() {
                return {
                    uri: "notion://projects/task_by_status_feature",
                    name: o(962299).A.formatMessage(n.taskByStatusFeatureName),
                    description: o(962299).A.formatMessage(n.taskByStatusFeatureDescription),
                    dependencies: [{
                        uri: o(11448).fH,
                        type: "collection_view",
                        collectionUri: o(11448).dC,
                        description: o(962299).A.formatMessage(n.taskByStatusViewDescription),
                        value: {
                            type: "chart",
                            name: o(962299).A.formatMessage(n.taskByStatusViewName),
                            format: {
                                collection_view_icon: "/icons/chart-donut_gray.svg",
                                hide_linked_collection_name: !0,
                                chart_config: {
                                    type: "donut",
                                    dataConfig: {
                                        type: "groups_reducer",
                                        groupBy: {
                                            sort: {
                                                type: "ascending"
                                            },
                                            type: "status",
                                            groupBy: "group",
                                            property: o(11448).yx.Status
                                        },
                                        aggregationConfig: {
                                            aggregation: {
                                                aggregator: "count"
                                            }
                                        }
                                    },
                                    chartFormat: {
                                        mainSort: "y-descending",
                                        colorTheme: "colorful"
                                    }
                                }
                            }
                        },
                        collectionViewBlockUri: o(11448).d0
                    }],
                    tooltipImage: {
                        img: o(896221).A.images.tooltips.views.tasksByStatusChartPng,
                        scale: .5
                    },
                    icon: o(896221).A.images.appPackages.featurePieChartSvg,
                    collectionUri: o(11448).dC
                }
            }

            function O() {
                return {
                    uri: "notion://projects/my_tasks_feature",
                    name: o(962299).A.formatMessage(n.myTasksFeature),
                    description: o(962299).A.formatMessage(n.myTasksFeatureDescription),
                    tooltipImage: {
                        img: o(896221).A.images.tooltips.views.tasksMyTasksPng,
                        scale: .5
                    },
                    icon: o(896221).A.images.appPackages.featureMineSvg,
                    dependencies: [{
                        uri: o(11448).sP,
                        type: "collection_view",
                        collectionUri: o(11448).dC,
                        description: o(962299).A.formatMessage(n.myTasksViewDescription),
                        value: {
                            type: "table",
                            name: o(962299).A.formatMessage(n.myTasks),
                            format: {
                                collection_view_icon: "/icons/user-circle_gray.svg",
                                list_properties: [{
                                    visible: !0,
                                    property: o(11448).yx.Assign
                                }, {
                                    visible: !1,
                                    property: o(11448).yx.AiSummary
                                }],
                                property_filters: [{
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: {
                                                type: "relative",
                                                value: "me"
                                            },
                                            operator: "person_contains"
                                        },
                                        property: o(11448).yx.Assign
                                    }
                                }, {
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: {
                                                type: "is_group",
                                                value: void 0
                                            },
                                            operator: "status_is"
                                        },
                                        property: o(11448).yx.Status
                                    }
                                }, {
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: {
                                                type: "exact",
                                                value: void 0
                                            },
                                            operator: "date_is"
                                        },
                                        property: o(11448).yx.DueDate
                                    }
                                }, {
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: {
                                                type: "exact",
                                                value: void 0
                                            },
                                            operator: "relation_contains"
                                        },
                                        property: o(11448).yx.TaskToProjectRelation
                                    }
                                }, {
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: {
                                                type: "exact",
                                                value: void 0
                                            },
                                            operator: "relation_contains"
                                        },
                                        property: o(11448).yx.TaskToSprintRelation
                                    }
                                }],
                                table_properties: [{
                                    width: 81,
                                    visible: !0,
                                    property: o(11448).yx.Status,
                                    statusShowAs: "checkbox"
                                }, {
                                    width: 263,
                                    visible: !0,
                                    property: "title"
                                }, {
                                    width: 151,
                                    visible: !0,
                                    property: o(11448).yx.Assign
                                }, {
                                    width: 153,
                                    visible: !0,
                                    property: o(11448).yx.DueDate
                                }, {
                                    width: 231,
                                    visible: !0,
                                    property: o(11448).yx.TaskToProjectRelation
                                }, {
                                    width: 149,
                                    visible: !0,
                                    property: o(11448).yx.TaskToSprintRelation
                                }, {
                                    width: 100,
                                    visible: !1,
                                    property: o(11448).yx.Priority
                                }, {
                                    width: 142,
                                    visible: !1,
                                    property: o(11448).yx.Tags
                                }, {
                                    width: 159,
                                    visible: !1,
                                    property: o(11448).yx.SprintStatusRollup
                                }, {
                                    width: 312,
                                    visible: !1,
                                    property: o(11448).yx.AiSummary
                                }]
                            },
                            query2: {
                                aggregations: [{
                                    property: "title",
                                    aggregator: "count"
                                }],
                                sort: [{
                                    property: o(11448).yx.TaskToProjectRelation,
                                    direction: "ascending"
                                }]
                            }
                        },
                        collectionViewBlockUri: o(11448).d0
                    }],
                    collectionUri: o(11448).dC
                }
            }

            function z(e) {
                return {
                    uri: "notion://projects/task_by_project_feature",
                    name: o(962299).A.formatMessage(n.taskByProjectFeatureName),
                    description: o(962299).A.formatMessage(n.taskByProjectFeatureDescription),
                    dependencies: [...f(e)],
                    icon: o(896221).A.images.appPackages.featureGanttSvg,
                    collectionUri: o(11448).dC
                }
            }

            function L() {
                return {
                    uri: "notion://tasks/task_sprint_planning_feature",
                    name: "Spring planning tasks",
                    description: o(962299).A.formatMessage(n.tasksSprintPlanningDescription),
                    dependencies: [...w()],
                    icon: o(896221).A.images.appPackages.featureWorkloadSvg,
                    collectionUri: o(11448).dC
                }
            }

            function Y() {
                return {
                    uri: "notion://tasks/task_backlog_feature",
                    name: "Backlog tasks",
                    description: o(962299).A.formatMessage(n.tasksWithNoSprintViewDescription),
                    dependencies: [...S()],
                    icon: o(896221).A.images.appPackages.featureWorkloadSvg,
                    collectionUri: o(11448).dC
                }
            }

            function Q() {
                return {
                    uri: "notion://tasks/task_backlog_feature",
                    name: "Backlog tasks",
                    description: o(962299).A.formatMessage(n.tasksWithNoSprintViewDescription),
                    dependencies: [{
                        uri: o(11448).vQ,
                        type: "collection_view",
                        collectionUri: o(11448).dC,
                        description: o(962299).A.formatMessage(n.tasksWithNoSprintViewDescription),
                        value: {
                            type: "table",
                            name: o(962299).A.formatMessage(n.backlog),
                            format: {
                                collection_view_icon: "/icons/inbox_gray.svg",
                                table_wrap: !1,
                                board_columns: [{
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: o(962299).A.formatMessage(o(998833).M_.typedStatusOptionArchived)
                                        }
                                    },
                                    property: o(11448).yx.Status
                                }, {
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: o(962299).A.formatMessage(o(998833).M_.statusOptionNotStarted)
                                        }
                                    },
                                    property: o(11448).yx.Status
                                }, {
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: o(962299).A.formatMessage(o(998833).M_.statusOptionInProgress)
                                        }
                                    },
                                    property: o(11448).yx.Status
                                }, {
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: o(962299).A.formatMessage(o(998833).M_.statusOptionDone)
                                        }
                                    },
                                    property: o(11448).yx.Status
                                }],
                                board_columns_by: {
                                    sort: {
                                        type: "ascending"
                                    },
                                    type: "status",
                                    groupBy: "option",
                                    property: o(11448).yx.Status
                                },
                                property_filters: [{
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: {
                                                type: "is_group",
                                                value: void 0
                                            },
                                            operator: "status_is"
                                        },
                                        property: o(11448).yx.Status
                                    }
                                }, {
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: {
                                                type: "exact",
                                                value: void 0
                                            },
                                            operator: "person_contains"
                                        },
                                        property: o(11448).yx.Assign
                                    }
                                }, {
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: {
                                                type: "exact",
                                                value: void 0
                                            },
                                            operator: "date_is"
                                        },
                                        property: o(11448).yx.DueDate
                                    }
                                }, {
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: [{
                                                type: "exact",
                                                value: void 0
                                            }],
                                            operator: "relation_contains"
                                        },
                                        property: o(11448).yx.TaskToProjectRelation
                                    }
                                }, {
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: [{
                                                type: "exact",
                                                value: void 0
                                            }],
                                            operator: "relation_contains"
                                        },
                                        property: o(11448).yx.TaskToSprintRelation
                                    }
                                }],
                                table_properties: [{
                                    width: 271,
                                    visible: !0,
                                    property: "title"
                                }, {
                                    width: 131,
                                    visible: !0,
                                    property: o(11448).yx.Status
                                }, {
                                    width: 125,
                                    visible: !0,
                                    property: o(11448).yx.Assign
                                }, {
                                    width: 154,
                                    visible: !0,
                                    property: o(11448).yx.DueDate
                                }, {
                                    width: 116,
                                    visible: !0,
                                    property: o(11448).yx.TaskToSprintRelation
                                }, {
                                    width: 137,
                                    visible: !0,
                                    property: o(11448).yx.SprintStatusRollup
                                }, {
                                    width: 194,
                                    visible: !0,
                                    property: o(11448).yx.TaskToProjectRelation
                                }, {
                                    width: 312,
                                    visible: !1,
                                    property: o(11448).yx.AiSummary
                                }],
                                collection_group_by: {
                                    sort: {
                                        type: "ascending"
                                    },
                                    type: "relation",
                                    property: o(11448).yx.TaskToSprintRelation
                                },
                                hide_linked_collection_name: !0
                            },
                            query2: {
                                aggregations: [{
                                    property: "title",
                                    aggregator: "count"
                                }]
                            }
                        },
                        collectionViewBlockUri: o(11448).d0
                    }],
                    icon: o(896221).A.images.appPackages.featureWorkloadSvg,
                    collectionUri: o(11448).dC
                }
            }

            function Z() {
                return {
                    uri: "notion://tasks/tasks_in_next_sprint_feature",
                    name: o(962299).A.formatMessage(n.tasksNextSprintViewName),
                    description: o(962299).A.formatMessage(n.tasksNextSprintViewDescription),
                    dependencies: [{
                        uri: "notion://tasks/tasks_next_sprint_view",
                        type: "collection_view",
                        collectionUri: o(11448).dC,
                        description: o(962299).A.formatMessage(n.tasksNextSprintViewDescription),
                        optionalProperties: [o(11448).yx.TaskToProjectRelation],
                        value: {
                            type: "table",
                            name: o(962299).A.formatMessage(n.tasksNextSprintViewName),
                            format: {
                                table_wrap: !1,
                                collection_view_icon: "/icons/playback-next_gray.svg",
                                table_properties: [{
                                    visible: !1,
                                    property: o(11448).yx.SprintStatusRollup
                                }, {
                                    visible: !1,
                                    property: o(11448).yx.Status
                                }, {
                                    visible: !0,
                                    property: "title"
                                }, {
                                    visible: !0,
                                    property: o(11448).yx.DueDate
                                }, {
                                    visible: !1,
                                    property: o(11448).yx.Assign
                                }, {
                                    visible: !1,
                                    property: o(11448).yx.TaskToSprintRelation
                                }, {
                                    visible: !0,
                                    property: o(11448).yx.TaskToProjectRelation
                                }, {
                                    width: 312,
                                    visible: !1,
                                    property: o(11448).yx.AiSummary
                                }],
                                property_filters: [{
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: [{
                                                type: "relative",
                                                value: {
                                                    type: "builtin",
                                                    variable: "next"
                                                }
                                            }],
                                            operator: "relation_contains"
                                        },
                                        property: o(11448).yx.TaskToSprintRelation
                                    }
                                }],
                                collection_group_by: {
                                    sort: {
                                        type: "ascending"
                                    },
                                    type: "relation",
                                    property: o(11448).yx.TaskToProjectRelation,
                                    hideEmptyGroups: !0
                                },
                                hide_linked_collection_name: !0
                            }
                        },
                        collectionViewBlockUri: o(11448).d0
                    }],
                    icon: o(896221).A.images.appPackages.featureWorkloadSvg,
                    collectionUri: o(11448).dC
                }
            }

            function X() {
                return {
                    uri: "notion://tasks/tasks_in_last_sprint_feature",
                    name: o(962299).A.formatMessage(n.tasksLastSprintViewName),
                    description: o(962299).A.formatMessage(n.tasksLastSprintViewDescription),
                    dependencies: [{
                        uri: "notion://tasks/tasks_last_sprint_view",
                        type: "collection_view",
                        collectionUri: o(11448).dC,
                        description: o(962299).A.formatMessage(n.tasksLastSprintViewDescription),
                        optionalProperties: [o(11448).yx.TaskToProjectRelation],
                        value: {
                            type: "table",
                            name: o(962299).A.formatMessage(n.tasksLastSprintViewName),
                            format: {
                                table_wrap: !1,
                                collection_view_icon: "/icons/playback-previous_gray.svg",
                                table_properties: [{
                                    visible: !1,
                                    property: o(11448).yx.SprintStatusRollup
                                }, {
                                    visible: !0,
                                    property: "title"
                                }, {
                                    visible: !0,
                                    property: o(11448).yx.Assign
                                }, {
                                    visible: !0,
                                    property: o(11448).yx.Status
                                }, {
                                    visible: !0,
                                    property: o(11448).yx.Priority
                                }, {
                                    visible: !1,
                                    property: o(11448).yx.TaskToProjectRelation
                                }, {
                                    visible: !1,
                                    property: o(11448).yx.DueDate
                                }, {
                                    visible: !1,
                                    property: o(11448).yx.TaskToSprintRelation
                                }, {
                                    width: 312,
                                    visible: !1,
                                    property: o(11448).yx.AiSummary
                                }],
                                property_filters: [{
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: [{
                                                type: "relative",
                                                value: {
                                                    type: "builtin",
                                                    variable: "last"
                                                }
                                            }],
                                            operator: "relation_contains"
                                        },
                                        property: o(11448).yx.TaskToSprintRelation
                                    }
                                }, {
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: {
                                                type: "exact",
                                                value: void 0
                                            },
                                            operator: "person_contains"
                                        },
                                        property: o(11448).yx.Assign
                                    }
                                }, {
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: [{
                                                type: "exact",
                                                value: void 0
                                            }],
                                            operator: "relation_contains"
                                        },
                                        property: o(11448).yx.TaskToProjectRelation
                                    }
                                }],
                                collection_group_by: {
                                    sort: {
                                        type: "ascending"
                                    },
                                    type: "relation",
                                    property: o(11448).yx.TaskToProjectRelation,
                                    hideEmptyGroups: !0
                                },
                                hide_linked_collection_name: !0
                            }
                        },
                        collectionViewBlockUri: o(11448).d0
                    }],
                    icon: o(896221).A.images.appPackages.featureWorkloadSvg,
                    collectionUri: o(11448).dC
                }
            }

            function ee() {
                return {
                    uri: "notion://tasks/tasks_current_sprint_view_feature",
                    name: o(962299).A.formatMessage(n.tasksCurrentSprintViewName),
                    description: o(962299).A.formatMessage(n.tasksCurrentSprintViewDescription),
                    dependencies: [...M()],
                    icon: o(896221).A.images.appPackages.featureWorkloadSvg,
                    collectionUri: o(11448).dC
                }
            }

            function et() {
                return {
                    uri: "notion://projects/tasks_simple_database_template",
                    name: o(962299).A.formatMessage(n.tasksCollectionName),
                    description: o(962299).A.formatMessage(n.simpleTaskFeatureDescription),
                    dependencies: [...p()],
                    collectionUri: o(11448).dC
                }
            }

            function eo() {
                return {
                    uri: "notion://projects/tasks_agile_database_template",
                    name: o(962299).A.formatMessage(n.tasksCollectionName),
                    description: o(962299).A.formatMessage(n.simpleTaskFeatureDescription),
                    dependencies: [...p(), {
                        uri: `${r}`,
                        type: "database_template",
                        collectionUri: o(11448).dC,
                        isDefault: !1,
                        blockValue: {
                            type: "page",
                            properties: {
                                title: [
                                    [o(962299).A.formatMessage(a.notionTasksNewBugTemplate_0)]
                                ],
                                [o(11448).yx.Tags]: [
                                    ["Bug"]
                                ],
                                [o(11448).yx.Status]: (0, o(561872).wb)("Not started")
                            },
                            format: {
                                page_icon: "/icons/bug_purple.svg"
                            }
                        }
                    }, {
                        uri: `${r}/0`,
                        type: "block",
                        parentUri: `${r}`,
                        parentType: "block",
                        blockValue: {
                            type: "sub_header",
                            properties: {
                                title: [
                                    [o(962299).A.formatMessage(a.notionTasksNewBugTemplate_0_0)]
                                ]
                            }
                        }
                    }, {
                        uri: `${r}/1`,
                        type: "block",
                        parentUri: `${r}`,
                        parentType: "block",
                        blockValue: {
                            type: "quote",
                            properties: {
                                title: [
                                    [o(962299).A.formatMessage(a.notionTasksNewBugTemplate_1_0)]
                                ]
                            }
                        }
                    }, {
                        uri: `${r}/2`,
                        type: "block",
                        parentUri: `${r}`,
                        parentType: "block",
                        blockValue: {
                            type: "bulleted_list",
                            properties: {
                                title: [
                                    [o(962299).A.formatMessage(a.notionTasksNewBugTemplate_2_0)]
                                ]
                            }
                        }
                    }, {
                        uri: `${r}/3`,
                        type: "block",
                        parentUri: `${r}`,
                        parentType: "block",
                        blockValue: {
                            type: "bulleted_list",
                            properties: {
                                title: [
                                    [o(962299).A.formatMessage(a.notionTasksNewBugTemplate_3_0)]
                                ]
                            }
                        }
                    }, {
                        uri: `${r}/4`,
                        type: "block",
                        parentUri: `${r}`,
                        parentType: "block",
                        blockValue: {
                            type: "sub_header",
                            properties: {
                                title: [
                                    [o(962299).A.formatMessage(a.notionTasksNewBugTemplate_4_0)]
                                ]
                            }
                        }
                    }, {
                        uri: `${r}/5`,
                        type: "block",
                        parentUri: `${r}`,
                        parentType: "block",
                        blockValue: {
                            type: "image"
                        }
                    }, {
                        uri: `${r}/6`,
                        type: "block",
                        parentUri: `${r}`,
                        parentType: "block",
                        blockValue: {
                            type: "video"
                        }
                    }, {
                        uri: `${r}/7`,
                        type: "block",
                        parentUri: `${r}`,
                        parentType: "block",
                        blockValue: {
                            type: "sub_header",
                            properties: {
                                title: [
                                    [o(962299).A.formatMessage(a.notionTasksNewBugTemplate_7_0)]
                                ]
                            }
                        }
                    }, {
                        uri: `${r}/8`,
                        type: "block",
                        parentUri: `${r}`,
                        parentType: "block",
                        blockValue: {
                            type: "bulleted_list"
                        }
                    }, {
                        uri: `${r}/9`,
                        type: "block",
                        parentUri: `${r}`,
                        parentType: "block",
                        blockValue: {
                            type: "text"
                        }
                    }, {
                        uri: `${r}/10`,
                        type: "block",
                        parentUri: `${r}`,
                        parentType: "block",
                        blockValue: {
                            type: "sub_header",
                            properties: {
                                title: [
                                    [o(962299).A.formatMessage(a.notionTasksNewBugTemplate_10_0)]
                                ]
                            }
                        }
                    }, {
                        uri: `${r}/11`,
                        type: "block",
                        parentUri: `${r}`,
                        parentType: "block",
                        blockValue: {
                            type: "bulleted_list",
                            properties: {
                                title: [
                                    [o(962299).A.formatMessage(a.notionTasksNewBugTemplate_11_0)]
                                ]
                            }
                        }
                    }, {
                        uri: `${r}/12`,
                        type: "block",
                        parentUri: `${r}`,
                        parentType: "block",
                        blockValue: {
                            type: "bulleted_list",
                            properties: {
                                title: [
                                    [o(962299).A.formatMessage(a.notionTasksNewBugTemplate_12_0)]
                                ]
                            }
                        }
                    }, {
                        uri: `${r}/13`,
                        type: "block",
                        parentUri: `${r}`,
                        parentType: "block",
                        blockValue: {
                            type: "text"
                        }
                    }, {
                        uri: i,
                        type: "database_template",
                        collectionUri: o(11448).dC,
                        isDefault: !1,
                        blockValue: {
                            type: "page",
                            properties: {
                                title: [
                                    [o(962299).A.formatMessage(a.notionTasksNewFeatureRequestTemplate_0)]
                                ],
                                [o(11448).yx.Tags]: [
                                    ["Feature Request"]
                                ],
                                [o(11448).yx.Status]: (0, o(561872).wb)("Not started")
                            },
                            format: {
                                page_icon: "/icons/light-bulb_blue.svg"
                            }
                        }
                    }, {
                        uri: `${i}/0`,
                        type: "block",
                        parentUri: `${i}`,
                        parentType: "block",
                        blockValue: {
                            type: "sub_header",
                            properties: {
                                title: [
                                    [o(962299).A.formatMessage(a.notionTasksNewFeatureRequestTemplate_0_0), [
                                        ["b"]
                                    ]]
                                ]
                            }
                        }
                    }, {
                        uri: `${i}/1`,
                        type: "block",
                        parentUri: `${i}`,
                        parentType: "block",
                        blockValue: {
                            type: "text",
                            properties: {
                                title: [
                                    [o(962299).A.formatMessage(a.notionTasksNewFeatureRequestTemplate_1_0)]
                                ]
                            }
                        }
                    }, {
                        uri: `${i}/2`,
                        type: "block",
                        parentUri: `${i}`,
                        parentType: "block",
                        blockValue: {
                            type: "text"
                        }
                    }, {
                        uri: `${i}/3`,
                        type: "block",
                        parentUri: `${i}`,
                        parentType: "block",
                        blockValue: {
                            type: "sub_header",
                            properties: {
                                title: [
                                    [o(962299).A.formatMessage(a.notionTasksNewFeatureRequestTemplate_3_0)]
                                ]
                            }
                        }
                    }, {
                        uri: `${i}/4`,
                        type: "block",
                        parentUri: `${i}`,
                        parentType: "block",
                        blockValue: {
                            type: "text",
                            properties: {
                                title: [
                                    [o(962299).A.formatMessage(a.notionTasksNewFeatureRequestTemplate_4_0)]
                                ]
                            }
                        }
                    }, {
                        uri: `${i}/5`,
                        type: "block",
                        parentUri: `${i}`,
                        parentType: "block",
                        blockValue: {
                            type: "text"
                        }
                    }, {
                        uri: `${i}/6`,
                        type: "block",
                        parentUri: `${i}`,
                        parentType: "block",
                        blockValue: {
                            type: "sub_header",
                            properties: {
                                title: [
                                    [o(962299).A.formatMessage(a.notionTasksNewFeatureRequestTemplate_6_0)]
                                ]
                            }
                        }
                    }, {
                        uri: `${i}/7`,
                        type: "block",
                        parentUri: `${i}`,
                        parentType: "block",
                        blockValue: {
                            type: "image"
                        }
                    }, {
                        uri: `${i}/8`,
                        type: "block",
                        parentUri: `${i}`,
                        parentType: "block",
                        blockValue: {
                            type: "video"
                        }
                    }, {
                        uri: `${i}/9`,
                        type: "block",
                        parentUri: `${i}`,
                        parentType: "block",
                        blockValue: {
                            type: "text"
                        }
                    }, {
                        uri: `${i}/10`,
                        type: "block",
                        parentUri: `${i}`,
                        parentType: "block",
                        blockValue: {
                            type: "sub_header",
                            properties: {
                                title: [
                                    [o(962299).A.formatMessage(a.notionTasksNewFeatureRequestTemplate_10_0)]
                                ]
                            }
                        }
                    }, {
                        uri: `${i}/11`,
                        type: "block",
                        parentUri: `${i}`,
                        parentType: "block",
                        blockValue: {
                            type: "text",
                            properties: {
                                title: [
                                    [o(962299).A.formatMessage(a.notionTasksNewFeatureRequestTemplate_11_0)]
                                ]
                            }
                        }
                    }],
                    collectionUri: o(11448).dC
                }
            }

            function ea() {
                return {
                    uri: "notion://projects/simple_tasks_feature",
                    name: o(962299).A.formatMessage(n.tasksCollectionName),
                    description: o(962299).A.formatMessage(n.simpleTaskFeatureDescription),
                    dependencies: [...c(!0), ...l(!0)],
                    icon: o(896221).A.images.appPackages.taskDbIconSvg,
                    collectionUri: o(11448).dC
                }
            }

            function ei() {
                return {
                    uri: "notion://projects/tasks_and_projects_feature",
                    name: o(962299).A.formatMessage(n.projectsCollectionName),
                    description: o(962299).A.formatMessage(n.projectsFeatureDescription),
                    icon: "/icons/target_gray.svg",
                    dependencies: [...k(), ...f("tasks_with_projects"), ...(0, o(338486).ZB)(), ...(0, o(338486).M5)(), ...(0, o(338486).Un)(), ...(0, o(338486).$$)()],
                    collectionUri: o(11448).dC
                }
            }

            function er() {
                let e = [...(0, o(62899).sM)(), ...(0, o(62899).ak)(), ...P(), {
                    uri: o(11448).Hx.TotalTasksRollup,
                    type: "property",
                    collectionUri: o(11448).av,
                    name: o(962299).A.formatMessage(n.totalTasksInSprint),
                    description: o(962299).A.formatMessage(n.totalTasksInSprint),
                    propertySchema: T
                }, {
                    uri: o(11448).Hx.CompletedTasksRollup,
                    type: "property",
                    collectionUri: o(11448).av,
                    name: o(962299).A.formatMessage(n.tasksCompletedInSprint),
                    description: o(962299).A.formatMessage(n.tasksCompletedInSprint),
                    propertySchema: j
                }, ...M(), ...(0, o(62899).Jt)(), ...(0, o(62899).MX)(), ...w(), ...S(), ...(0, o(561071).E6)()];
                return {
                    uri: "notion://projects/tasks_with_sprints_feature",
                    name: o(962299).A.formatMessage(n.sprintsCollectionName),
                    description: o(962299).A.formatMessage(n.tasksWithSprintsFeatureDescription),
                    icon: "/icons/run_gray.svg",
                    tooltipImage: {
                        img: o(896221).A.images.tooltips.properties.sprintsPng,
                        scale: .5
                    },
                    dependencies: e,
                    collectionUri: o(11448).dC
                }
            }

            function es() {
                var e, t;
                return {
                    uri: "notion://tasks/tasks_and_github_prs_feature",
                    name: o(962299).A.formatMessage(n.taskGithubPrsFeatureName),
                    description: o(962299).A.formatMessage(n.taskGithubPrsFeatureDescription),
                    collectionUri: o(11448).dC,
                    dependencies: [...(e = o(49361).ob, [{
                        uri: o(11448).yx.GithubPrsRelation,
                        type: "property",
                        collectionUri: o(11448).dC,
                        propertySchema: {
                            type: "relation",
                            icon: "/icons/branch-merge_gray.svg",
                            name: o(962299).A.formatMessage(n.taskGithubPrsFeatureName),
                            collection_pointer: {
                                table: o(832375).VlP,
                                id: o(11448).BF
                            },
                            version: "v2",
                            connectedRelation: {
                                integration_id: e
                            },
                            property: o(11448).yx.GithubPrsToTaskRelation
                        },
                        name: o(962299).A.formatMessage(n.taskGithubPrsFeatureName),
                        icon: o(896221).A.images.externalIntegrations.githubIconPng,
                        isConnectedRelation: !0,
                        integrationId: e
                    }, {
                        uri: o(11448).yx.GithubPrsToTaskRelation,
                        type: "property",
                        collectionUri: o(11448).BF,
                        propertySchema: {
                            type: "relation",
                            name: o(962299).A.formatMessage(n.tasksCollectionName),
                            collection_pointer: {
                                table: o(832375).VlP,
                                id: o(11448).dC
                            },
                            version: "v2",
                            property: o(11448).yx.GithubPrsRelation
                        },
                        name: o(962299).A.formatMessage(n.tasksCollectionName),
                        icon: o(896221).A.images.externalIntegrations.githubIconPng,
                        integrationId: e
                    }]), ...(t = o(49361).ob, [{
                        uri: o(11448).BF,
                        relationUri: o(11448).yx.GithubPrsRelation,
                        type: "sub_external_collection",
                        parentCollectionUri: o(11448).dC,
                        integrationId: t,
                        pattern: o(188326).Y
                    }]), {
                        uri: o(11448).yx.AutoIncrementId,
                        type: "property",
                        collectionUri: o(11448).dC,
                        name: o(962299).A.formatMessage(n.id),
                        propertySchema: {
                            type: "auto_increment_id",
                            name: o(962299).A.formatMessage(n.id)
                        }
                    }],
                    icon: o(896221).A.images.externalIntegrations.githubIconPng,
                    tooltipImage: {
                        img: o(896221).A.images.tooltips.properties.githubSyncPullStatusPng,
                        scale: .5
                    },
                    integrationId: o(49361).ob,
                    canOnlyAdminAuth: {
                        disabledPropertyTooltipMessage: o(962299).A.formatMessage(n.taskGithubPrsDisabledFeatureDescription)
                    },
                    propertyIdCollectionSettingToNavigateTo: o(11448).yx.GithubPrsRelation
                }
            }
        },
        561071: (e, t, o) => {
            function a(e, t) {
                let a = (0, o(25825).HF)(e, (0, o(714350).P)()).plus({
                    days: t
                });
                return (0, o(25825).lN)(a)
            }

            function i(e, t) {
                let a = (0, o(714350).P)(),
                    i = (0, o(25825).iB)(e, 1, a);
                return (0, o(25825).Mk)(i.valueOf(), i.plus({
                    weeks: t
                }).minus({
                    days: 1
                }).valueOf(), a)
            }

            function r() {
                let e = o(962299).A.getIntl();
                return {
                    notionProjectsTutorialProjectsGettingStartedWithProjectsV2_AiSummary: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjectsV2_AiSummary",
                        defaultMessage: "This document introduces projects and tasks in Notion, including four core concepts: projects, tasks, properties, and views. Each has its own page and can be labeled using properties. Views allow for custom layouts and filters. For more customization options, visit the Notion help center."
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjectsV2_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjectsV2_0",
                        defaultMessage: "Getting started with Projects & Tasks"
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjectsV2_0_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjectsV2_0_0",
                        defaultMessage: "Notion tip: This guide is also a fully functional project page. Try changing properties or adding tasks to see how your set-up changes."
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjectsV2_1_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjectsV2_1_0",
                        defaultMessage: "Projects and Tasks are built with 4 core concepts"
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjectsV2_3_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjectsV2_3_0",
                        defaultMessage: "Projects — "
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjectsV2_3_1: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjectsV2_3_1",
                        defaultMessage: "Each project has its own page (like this one!) where you can add tasks and project details. All of your projects are also housed in your newly created Projects page."
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjectsV2_4_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjectsV2_4_0",
                        defaultMessage: "Tasks — "
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjectsV2_4_1: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjectsV2_4_1",
                        defaultMessage: "All of your tasks live in the Tasks page. Like projects, tasks open as their own pages where you can add subtasks and assign them to projects."
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjectsV2_5_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjectsV2_5_0",
                        defaultMessage: "Properties — "
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjectsV2_5_1: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjectsV2_5_1",
                        defaultMessage: "Label projects and tasks with relevant information like status, assignee, due date, and more — all in the form of properties."
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjectsV2_6_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjectsV2_6_0",
                        defaultMessage: "Views — "
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjectsV2_6_1: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjectsV2_6_1",
                        defaultMessage: "Visualize your work with custom layouts and filters. Each view uses the same underlying data but displays it in new ways so that you can quickly keep track of your team’s work."
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjectsV2_7_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjectsV2_7_0",
                        defaultMessage: "Learn more"
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjectsV2_8_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjectsV2_8_0",
                        defaultMessage: "You can customize your Projects and Tasks setup to match your team’s style of work. Learn more in our "
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjectsV2_8_1: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjectsV2_8_1",
                        defaultMessage: "help center →"
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithAgileV2_AiSummary: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithAgileV2_AiSummary",
                        defaultMessage: "This page outlines how to use the four core concepts in Notion for sprint planning: Projects, Tasks, Sprints, and the Sprint board. It also provides a brief guide for completing sprints and links to Notion's help center for more details."
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithAgileV2_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithAgileV2_0",
                        defaultMessage: "Getting started with Projects, Tasks & Sprints"
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithAgileV2_0_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithAgileV2_0_0",
                        defaultMessage: "Notion tip: This guide is also a fully functional projects page. Try changing properties or adding tasks to see how your workspace changes."
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithAgileV2_2_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithAgileV2_2_0",
                        defaultMessage: "Sprints in Notion are built with 4 core concepts"
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithAgileV2_3_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithAgileV2_3_0",
                        defaultMessage: "Projects — "
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithAgileV2_3_1: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithAgileV2_3_1",
                        defaultMessage: "Each project opens into its own page (like this one!) where you can add tasks and project details. All of your projects are also housed in your newly created Projects page."
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithAgileV2_4_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithAgileV2_4_0",
                        defaultMessage: "Tasks — "
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithAgileV2_4_1: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithAgileV2_4_1",
                        defaultMessage: "All of your tasks live in the Tasks page. Like projects, tasks open as their own pages where you can add subtasks and assign them to projects. They can also be assigned to sprints."
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithAgileV2_5_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithAgileV2_5_0",
                        defaultMessage: "Sprints — "
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithAgileV2_5_1: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithAgileV2_5_1",
                        defaultMessage: "Sprints are measurements of time that can contain any number of tasks. You can view and assign tasks to sprints on your Sprints page, or on any task page."
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithAgileV2_6_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithAgileV2_6_0",
                        defaultMessage: "Sprint board — "
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithAgileV2_6_1: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithAgileV2_6_1",
                        defaultMessage: "The Sprint board combines all of the concepts listed above so that you can view your tasks, grouped by project, and filtered according to your current sprint."
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithAgileV2_6_0_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithAgileV2_6_0_0",
                        defaultMessage: "Plus, use the sprint board to complete sprints automatically"
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithAgileV2_6_0_0_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithAgileV2_6_0_0_0",
                        defaultMessage: "On your sprint board, click the Complete sprint button to automatically move incomplete tasks, and start your next sprint."
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithAgileV2_7_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithAgileV2_7_0",
                        defaultMessage: "Learn more"
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithAgileV2_8_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithAgileV2_8_0",
                        defaultMessage: "You can customize your projects and tasks setup to match your team’s style of work. Learn more in our "
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithAgileV2_8_1: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithAgileV2_8_1",
                        defaultMessage: "help center → "
                    })
                }
            }

            function s() {
                let e = o(962299).A.getIntl();
                return {
                    task1: e.formatMessage({
                        id: "notionProjectsTutorial_task1",
                        defaultMessage: "Write project proposal"
                    }),
                    task1AiSummary: e.formatMessage({
                        id: "notionProjectsTutorial_task1AiSummary",
                        defaultMessage: "This project proposal aims to achieve cross-functional alignment on investing in mobile performance in Q3. Goals include adding user stories and specific problem statements, while non-goals include getting leadership sign-off and synthesizing user research learnings. Next steps include gathering feedback from the mobile team and creating awareness in appropriate Slack channels with internal comms."
                    }),
                    task1_0: e.formatMessage({
                        id: "notionProjectsTutorial_task1_0",
                        defaultMessage: "Goals:"
                    }),
                    task1_0_0: e.formatMessage({
                        id: "notionProjectsTutorial_task1_0_0",
                        defaultMessage: "Achieve cross-functional alignment on why and how we’re investing in mobile performance in Q3"
                    }),
                    task1_0_1: e.formatMessage({
                        id: "notionProjectsTutorial_task1_0_1",
                        defaultMessage: "Include more user stories, specific problem statements, and be crisp about what’s not in scope for now"
                    }),
                    task1_1: e.formatMessage({
                        id: "notionProjectsTutorial_task1_1",
                        defaultMessage: "Non-goals:"
                    }),
                    task1_1_0: e.formatMessage({
                        id: "notionProjectsTutorial_task1_1_0",
                        defaultMessage: "Get explicit leadership sign-off"
                    }),
                    task1_1_1: e.formatMessage({
                        id: "notionProjectsTutorial_task1_1_1",
                        defaultMessage: "Synthesize user research learnings (already captured in research team’s performance doc)"
                    }),
                    task1_2: e.formatMessage({
                        id: "notionProjectsTutorial_task1_2",
                        defaultMessage: "Next steps:"
                    }),
                    task1_2_0: e.formatMessage({
                        id: "notionProjectsTutorial_task1_2_0",
                        defaultMessage: "Gather feedback from mobile team"
                    }),
                    task1_2_1: e.formatMessage({
                        id: "notionProjectsTutorial_task1_2_1",
                        defaultMessage: "Work with internal comms to create awareness in the appropriate Slack channels"
                    }),
                    task2: e.formatMessage({
                        id: "notionProjectsTutorial_task2",
                        defaultMessage: "Schedule kick-off meeting"
                    }),
                    task2AiSummary: e.formatMessage({
                        id: "notionProjectsTutorial_task2AiSummary",
                        defaultMessage: 'This task is in progress and involves scheduling a kick-off meeting for the performance project, preparing meeting materials in advance, and inviting all stakeholders to the meeting. Non-goals include brainstorming additional performance projects. The due date is April 26, 2023, and the priority is medium. The task is tagged as "Mobile".'
                    }),
                    task2_0: e.formatMessage({
                        id: "notionProjectTutorial_task2_0",
                        defaultMessage: "Goals:"
                    }),
                    task2_0_0: e.formatMessage({
                        id: "notionProjectTutorial_task2_0_0",
                        defaultMessage: "Schedule kick-off meeting for the performance project"
                    }),
                    task2_0_1: e.formatMessage({
                        id: "notionProjectTutorial_task2_0_1",
                        defaultMessage: "Prep meeting materials in advance"
                    }),
                    task2_0_2: e.formatMessage({
                        id: "notionProjectTutorial_task2_0_2",
                        defaultMessage: "Meeting goal is to review the project proposal"
                    }),
                    task2_1: e.formatMessage({
                        id: "notionProjectTutorial_task2_1",
                        defaultMessage: "Non-goals:"
                    }),
                    task2_1_0: e.formatMessage({
                        id: "notionProjectTutorial_task2_1_0",
                        defaultMessage: "Brainstorm additional performance projects"
                    }),
                    task2_2: e.formatMessage({
                        id: "notionProjectTutorial_task2_2",
                        defaultMessage: "Next steps:"
                    }),
                    task2_2_0: e.formatMessage({
                        id: "notionProjectTutorial_task2_2_0",
                        defaultMessage: "Invite all stakeholders to the meeting"
                    }),
                    task2_2_1: e.formatMessage({
                        id: "notionProjectTutorial_task2_2_1",
                        defaultMessage: "Prepare meeting agenda"
                    }),
                    task3: e.formatMessage({
                        id: "notionProjectsTutorial_task3",
                        defaultMessage: "Review research results"
                    }),
                    task3AiSummary: e.formatMessage({
                        id: "notionProjectsTutorial_task3AiSummary",
                        defaultMessage: "This document outlines the goals and non-goals for a research task, which include understanding which product areas need more education and deprioritizing areas with high engagement. The next steps involve watching 10 interviews and sharing insights in Slack."
                    }),
                    task3_0: e.formatMessage({
                        id: "notionProjectsTutorial_task3_0",
                        defaultMessage: "Goals:"
                    }),
                    task3_0_0: e.formatMessage({
                        id: "notionProjectsTutorial_task3_0_0",
                        defaultMessage: "Understand which product areas need most education"
                    }),
                    task3_0_1: e.formatMessage({
                        id: "notionProjectsTutorial_task3_0_1",
                        defaultMessage: "Deprioritize product areas that already see high engagement"
                    }),
                    task3_1: e.formatMessage({
                        id: "notionProjectsTutorial_task3_1",
                        defaultMessage: "Non-goals:"
                    }),
                    task3_1_0: e.formatMessage({
                        id: "notionProjectsTutorial_task3_1_0",
                        defaultMessage: "Recommend UI changes for core product"
                    }),
                    task3_1_1: e.formatMessage({
                        id: "notionProjectsTutorial_task3_1_1",
                        defaultMessage: "Recommend changes to product roadmap"
                    }),
                    task3_2: e.formatMessage({
                        id: "notionProjectsTutorial_task3_2",
                        defaultMessage: "Next steps:"
                    }),
                    task3_2_0: e.formatMessage({
                        id: "notionProjectsTutorial_task3_2_0",
                        defaultMessage: "Watch all 10 interviews from research team"
                    }),
                    task3_2_1: e.formatMessage({
                        id: "notionProjectsTutorial_task3_2_1",
                        defaultMessage: "Write up insights and share in Slack"
                    }),
                    task4: e.formatMessage({
                        id: "notionProjectsTutorial_task4",
                        defaultMessage: "Build data dashboards"
                    }),
                    task4AiSummary: e.formatMessage({
                        id: "notionProjectsTutorial_task4AiSummary",
                        defaultMessage: "This task is to build data dashboards for measuring activation and retention against control groups and giving cross-functional partners the ability to self-serve information about tooltip effectiveness among new user cohorts. Next steps include asking Jonny for access to Hex and scheduling a cross-functional meeting for feedback and requests. The non-goal is to track how often tooltips are skipped."
                    }),
                    task4_0: e.formatMessage({
                        id: "notionProjectsTutorial_task4_0",
                        defaultMessage: "Goals:"
                    }),
                    task4_0_0: e.formatMessage({
                        id: "notionProjectsTutorial_task4_0_0",
                        defaultMessage: "Give cross-functional partners the ability to self serve info about tooltip effectiveness among new user cohorts"
                    }),
                    task4_0_1: e.formatMessage({
                        id: "notionProjectsTutorial_task4_0_1",
                        defaultMessage: "Measure activation and retention against control group"
                    }),
                    task4_1: e.formatMessage({
                        id: "notionProjectsTutorial_task4_1",
                        defaultMessage: "Non-goals:"
                    }),
                    task4_1_0: e.formatMessage({
                        id: "notionProjectsTutorial_task4_1_0",
                        defaultMessage: "Add new events to track new feature adoption"
                    }),
                    task4_1_1: e.formatMessage({
                        id: "notionProjectsTutorial_task4_1_1",
                        defaultMessage: "Track how often tooltips are skipped (blocked for now)"
                    }),
                    task4_2: e.formatMessage({
                        id: "notionProjectsTutorial_task4_2",
                        defaultMessage: "Next steps:"
                    }),
                    task4_2_0: e.formatMessage({
                        id: "notionProjectsTutorial_task4_2_0",
                        defaultMessage: "Ask Jonny for access to Hex"
                    }),
                    task4_2_1: e.formatMessage({
                        id: "notionProjectsTutorial_task4_2_1",
                        defaultMessage: "Schedule cross-functional meeting to collect any remaining feedback and requests"
                    }),
                    task5: e.formatMessage({
                        id: "notionProjectsTutorial_task5",
                        defaultMessage: "Scope tooltip project"
                    }),
                    task5AiSummary: e.formatMessage({
                        id: "notionProjectsTutorial_task5AiSummary",
                        defaultMessage: "This document outlines the scope of the tooltip project, including goals of uncovering technical blockers and estimating engineering time, as well as non-goals of evaluating new events and collecting feedback. The next steps include revisiting docs from a previous project and writing a tech spec to share with the product team email alias."
                    }),
                    task5_0: e.formatMessage({
                        id: "notionProjectsTutorial_task5_0",
                        defaultMessage: "Goals:"
                    }),
                    task5_0_0: e.formatMessage({
                        id: "notionProjectsTutorial_task5_0_0",
                        defaultMessage: "Uncover any technical blockers to building education tooltips"
                    }),
                    task5_0_1: e.formatMessage({
                        id: "notionProjectsTutorial_task5_0_1",
                        defaultMessage: "Estimate how long engineering will need to build tooltips"
                    }),
                    task5_1: e.formatMessage({
                        id: "notionProjectsTutorial_task5_1",
                        defaultMessage: "Non-goals:"
                    }),
                    task5_1_0: e.formatMessage({
                        id: "notionProjectsTutorial_task5_1_0",
                        defaultMessage: "Evaluate new events for data team to track"
                    }),
                    task5_1_1: e.formatMessage({
                        id: "notionProjectsTutorial_task5_1_1",
                        defaultMessage: "Collect feedback from cross-functional partners"
                    }),
                    task5_2: e.formatMessage({
                        id: "notionProjectsTutorial_task5_2",
                        defaultMessage: "Next steps:"
                    }),
                    task5_2_0: e.formatMessage({
                        id: "notionProjectsTutorial_task5_2_0",
                        defaultMessage: "Revisit docs from previous tooltip project from Q1"
                    }),
                    task5_2_1: e.formatMessage({
                        id: "notionProjectsTutorial_task5_2_1",
                        defaultMessage: "Write tech spec and share to product team email alias"
                    }),
                    getStartedTasksPage1: e.formatMessage({
                        id: "notionProjectsTutorial_getStartedTasksPage1",
                        defaultMessage: "Add a new task"
                    }),
                    getStartedTasksPage1AiSummary: e.formatMessage({
                        id: "notionProjectsTutorial_getStartedTasksPage1AiSummary",
                        defaultMessage: "This document provides instructions for adding a new task to a task tracking system. The task ID, assignee, status, due date, priority, and tags can be customized for each task."
                    }),
                    getStartedTasksPage1_0: e.formatMessage({
                        id: "notionProjectsTutorial_getStartedTasksPage1_0",
                        defaultMessage: "Ready to start tracking your tasks here? Start by clicking the blue “New” button at the top right of your table."
                    }),
                    getStartedTasksPage1_1: e.formatMessage({
                        id: "notionProjectsTutorial_getStartedTasksPage1_1",
                        defaultMessage: "Customize each task by populating the fields above, such as the task’s assignee, due date, and status."
                    }),
                    getStartedTasksPage2: e.formatMessage({
                        id: "notionProjectsTutorial_getStartedTasksPage2",
                        defaultMessage: "Invite team members"
                    }),
                    getStartedTasksPage2AiSummary: e.formatMessage({
                        id: "notionProjectsTutorial_getStartedTasksPage2AiSummary",
                        defaultMessage: 'This document provides instructions for inviting team members to collaborate on a task. Use the Share menu to invite team members and assign tasks using the "Assignee" field. Team members will receive a notification in their sidebar.'
                    }),
                    getStartedTasksPage2_0: e.formatMessage({
                        id: "notionProjectsTutorial_getStartedTasksPage2_0",
                        defaultMessage: "Ready to collaborate with your team? Use the Share menu at the top right."
                    }),
                    getStartedTasksPage2_1: e.formatMessage({
                        id: "notionProjectsTutorial_getStartedTasksPage2_1",
                        defaultMessage: "Use the “Assignee” field above to assign tasks to your teammates. They’ll see a notification in their sidebar."
                    }),
                    sprint1: e.formatMessage({
                        id: "notionProjectsTutorial_sprint1",
                        defaultMessage: "Sprint 1"
                    }),
                    sprint2: e.formatMessage({
                        id: "notionProjectsTutorial_sprint2",
                        defaultMessage: "Sprint 2"
                    }),
                    sprint3: e.formatMessage({
                        id: "notionProjectsTutorial_sprint3",
                        defaultMessage: "Sprint 3"
                    }),
                    project1: e.formatMessage({
                        id: "notionProjectsTutorial_project1",
                        defaultMessage: "Sample Project: Performance"
                    }),
                    project1AiSummary: e.formatMessage({
                        id: "notionProjectsTutorial_project1AiSummary",
                        defaultMessage: "The mobile team is prioritizing performance and investing in more native components across iOS and Android. Last year, the team successfully reduced page load times by 50%, leading to increased mobile usage and positive app store reviews. The project is currently in the planning stage, with performance dashboards and project tasks to be developed."
                    }),
                    project1_heading0: e.formatMessage({
                        id: "notionProjectsTutorial_project1_heading0",
                        defaultMessage: "About this project"
                    }),
                    project1_paragraph0: e.formatMessage({
                        id: "notionProjectsTutorial_project1_paragraph0",
                        defaultMessage: "Last year, the team prioritized mobile performance, and successfully reduced page load times by 50%. This directly correlated with increased mobile usage, and more positive app store reviews."
                    }),
                    project1_paragraph1: e.formatMessage({
                        id: "notionProjectsTutorial_project1_paragraph1",
                        defaultMessage: "This quarter, the mobile team is doubling down on performance, and investing in more native components across iOS and Android."
                    }),
                    project1_heading1: e.formatMessage({
                        id: "notionProjectsTutorial_project1_heading1",
                        defaultMessage: "Performance dashboards"
                    }),
                    project1_heading2: e.formatMessage({
                        id: "notionProjectsTutorial_project1_heading2",
                        defaultMessage: "Project tasks"
                    }),
                    project2: e.formatMessage({
                        id: "notionProjectsTutorial_project2",
                        defaultMessage: "Sample Project: User Education "
                    }),
                    project2AiSummary: e.formatMessage({
                        id: "notionProjectsTutorial_project2AiSummary",
                        defaultMessage: "The user education team is planning a project to redesign the onboarding flow for their app, with the goal of increasing 7 day retention by 25%. The current onboarding process is overwhelming for many users, and the team aims to create a more effective user journey. The project is scheduled to take place from May 8, 2023 to June 4, 2023."
                    }),
                    project2_heading1: e.formatMessage({
                        id: "notionProjectsTutorial_project2_heading1",
                        defaultMessage: "Proposed user journey"
                    }),
                    project2_paragraph0: e.formatMessage({
                        id: "notionProjectsTutorial_project2_paragraph0",
                        defaultMessage: "Because our app has so many features, and serves so many personas and use cases, many users find the current onboarding process overwhelming, and don’t experience their “a ha” moment quickly enough."
                    }),
                    project2_paragraph1: e.formatMessage({
                        id: "notionProjectsTutorial_project2_paragraph1",
                        defaultMessage: "This quarter, the user education team is investing in a holistically redesigned onboarding flow, with a goal of increasing 7 day retention by 25%."
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjectsAiSummary: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjectsAiSummary",
                        defaultMessage: "This document provides an introduction to organizing tasks, projects, and sprints using a project management tracker. It explains how to use the provided template, add custom fields, and customize views. Tasks are the smallest unit of work, projects represent larger bodies of work, and sprints are discrete cycles of time for completing tasks. The template includes common fields like task status and assignee, but users can add their own fields like priority and task type."
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjects_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjects_0",
                        defaultMessage: "Getting started with projects & tasks"
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjects_0_0_0_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjects_0_0_0_0",
                        defaultMessage: "Learn how to organize tasks by project, coordinate with your team, and track progress."
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjects_1_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjects_1_0",
                        defaultMessage: "How to use this template"
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjects_2_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjects_2_0",
                        defaultMessage: "This is your sample project tracker. It contains projects and tasks — you can click on the name of the project or task to open it up to its own page where you can add new detail."
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjects_3_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjects_3_0",
                        defaultMessage: "Click “+ New” below the sample tasks to add a new task. "
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjects_4_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjects_4_0",
                        defaultMessage: "Navigate views using tabs at the top of the database — each one uses the same underlying data but displays it in different ways so that you can quickly and easily keep track of all your team’s happenings."
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjects_5_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjects_5_0",
                        defaultMessage: "Tasks and Projects"
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjects_6_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjects_6_0",
                        defaultMessage: "We’ve pre-populated your template with different types of information housed in databases. Databases in Notion are collections of pages. In our case, projects and tasks are each their own "
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjects_6_1: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjects_6_1",
                        defaultMessage: "database"
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjects_6_2: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjects_6_2",
                        defaultMessage: ". Learn more about the general structure of a database, walk through the different menus and options, and deep dive into how to open and edit pages within a database "
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjects_6_3: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjects_6_3",
                        defaultMessage: "here."
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjects_7_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjects_7_0",
                        defaultMessage: "Tasks"
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjects_8_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjects_8_0",
                        defaultMessage: "Tasks are the smallest unit of work in your project management tracker. A Task represents a more granular piece of work, often assigned to just one person. Many Tasks can be organized into a Project."
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjects_9_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjects_9_0",
                        defaultMessage: "Projects"
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjects_10_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjects_10_0",
                        defaultMessage: "Projects are typically made up of tasks. A Project represents a large body of work, such as a product launch, or a team milestone. A Project can be broken down into many Tasks, and contain customizable properties such as Status. "
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjects_11_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjects_11_0",
                        defaultMessage: "Adding custom fields"
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjects_12_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjects_12_0",
                        defaultMessage: "We’ve pre-populated this template with the most common project management fields (like task status and assignee), but you can add your own when you are creating a new field. You’ll have options like priority, estimates, and task type."
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjects_14_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjects_14_0",
                        defaultMessage: "Learn more about database properties here:"
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjects_15_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjects_15_0",
                        defaultMessage: "Views, filters, and sorts"
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjects_16_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjects_16_0",
                        defaultMessage: "Views are customizable, flexible layouts to visualize your databases and properties as a table, board, calendar, timeline, or list. This template comes with several views of Projects and Tasks — you can customize each or create your own! "
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjects_18_0: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjects_18_0",
                        defaultMessage: "Learn more about Notion’s database layouts, including when to use each type of database view in this guide:"
                    }),
                    notionProjectsTutorialProjectsGettingStartedWithProjects_18_2: e.formatMessage({
                        id: "notionProjectsTutorialProjectsGettingStartedWithProjects_18_2",
                        defaultMessage: "."
                    }),
                    notionProjectsTutorialAgileGettingStartedWithProjects_0: e.formatMessage({
                        id: "notionProjectsTutorialAgileGettingStartedWithProjects_0",
                        defaultMessage: "Getting started with projects, tasks & sprints"
                    }),
                    notionProjectsTutorialAgileGettingStartedWithProjects_0_0_0_0: e.formatMessage({
                        id: "notionProjectsTutorialAgileGettingStartedWithProjects_0_0_0_0",
                        defaultMessage: "Learn how to organize tasks by project, coordinate with your team, and track progress."
                    }),
                    notionProjectsTutorialAgileGettingStartedWithProjects_1_0: e.formatMessage({
                        id: "notionProjectsTutorialAgileGettingStartedWithProjects_1_0",
                        defaultMessage: "How to use this template"
                    }),
                    notionProjectsTutorialAgileGettingStartedWithProjects_2_0: e.formatMessage({
                        id: "notionProjectsTutorialAgileGettingStartedWithProjects_2_0",
                        defaultMessage: "This is your sample project tracker. It contains projects, tasks, and sprints — you can click on the name of the project or task to open it up to its own page where you can add new detail."
                    }),
                    notionProjectsTutorialAgileGettingStartedWithProjects_3_0: e.formatMessage({
                        id: "notionProjectsTutorialAgileGettingStartedWithProjects_3_0",
                        defaultMessage: "Click “+ New” below the sample tasks to add a new task. "
                    }),
                    notionProjectsTutorialAgileGettingStartedWithProjects_4_0: e.formatMessage({
                        id: "notionProjectsTutorialAgileGettingStartedWithProjects_4_0",
                        defaultMessage: "Navigate views using tabs at the top of the database — each one uses the same underlying data but displays it in different ways so that you can quickly and easily keep track of all your team’s happenings."
                    }),
                    notionProjectsTutorialAgileGettingStartedWithProjects_5_0: e.formatMessage({
                        id: "notionProjectsTutorialAgileGettingStartedWithProjects_5_0",
                        defaultMessage: "Tasks, Sprints, and Projects "
                    }),
                    notionProjectsTutorialAgileGettingStartedWithProjects_6_0: e.formatMessage({
                        id: "notionProjectsTutorialAgileGettingStartedWithProjects_6_0",
                        defaultMessage: "We’ve pre-populated your template with different types of information housed in databases. Databases in Notion are collections of pages. In our case, projects and tasks are each their own "
                    }),
                    notionProjectsTutorialAgileGettingStartedWithProjects_6_1: e.formatMessage({
                        id: "notionProjectsTutorialAgileGettingStartedWithProjects_6_1",
                        defaultMessage: "database"
                    }),
                    notionProjectsTutorialAgileGettingStartedWithProjects_6_2: e.formatMessage({
                        id: "notionProjectsTutorialAgileGettingStartedWithProjects_6_2",
                        defaultMessage: ". Learn more about the general structure of a database, walk through the different menus and options, and deep dive into how to open and edit pages within a database "
                    }),
                    notionProjectsTutorialAgileGettingStartedWithProjects_7_0: e.formatMessage({
                        id: "notionProjectsTutorialAgileGettingStartedWithProjects_7_0",
                        defaultMessage: "Tasks"
                    }),
                    notionProjectsTutorialAgileGettingStartedWithProjects_8_0: e.formatMessage({
                        id: "notionProjectsTutorialAgileGettingStartedWithProjects_8_0",
                        defaultMessage: "Tasks are the smallest unit of work in your project management tracker. A Task represents a more granular piece of work, often assigned to just one person. Many Tasks can be organized into a Project, or added to a Sprint. "
                    }),
                    notionProjectsTutorialAgileGettingStartedWithProjects_9_0: e.formatMessage({
                        id: "notionProjectsTutorialAgileGettingStartedWithProjects_9_0",
                        defaultMessage: "Projects"
                    }),
                    notionProjectsTutorialAgileGettingStartedWithProjects_10_0: e.formatMessage({
                        id: "notionProjectsTutorialAgileGettingStartedWithProjects_10_0",
                        defaultMessage: "Projects are typically made up of tasks. A Project represents a large body of work, such as a product launch, or a team milestone. A Project can be broken down into many Tasks, and contain customizable properties such as Status. "
                    }),
                    notionProjectsTutorialAgileGettingStartedWithProjects_11_0: e.formatMessage({
                        id: "notionProjectsTutorialAgileGettingStartedWithProjects_11_0",
                        defaultMessage: "Sprints"
                    }),
                    notionProjectsTutorialAgileGettingStartedWithProjects_12_0: e.formatMessage({
                        id: "notionProjectsTutorialAgileGettingStartedWithProjects_12_0",
                        defaultMessage: "Sprints are another dimension by which you can organize tasks and projects, commonly used in Agile workflows. A sprint represents a discrete cycle of time in which tasks will be completed. You can configure start and end dates per Sprint, and assign each Task to a Sprint."
                    }),
                    notionProjectsTutorialAgileGettingStartedWithProjects_13_0: e.formatMessage({
                        id: "notionProjectsTutorialAgileGettingStartedWithProjects_13_0",
                        defaultMessage: "Adding custom fields "
                    }),
                    notionProjectsTutorialAgileGettingStartedWithProjects_14_0: e.formatMessage({
                        id: "notionProjectsTutorialAgileGettingStartedWithProjects_14_0",
                        defaultMessage: "We’ve pre-populated this template with the most common project management fields (like task status and assignee), but you can add your own when you are creating a new field. You’ll have options like priority, estimates, and task type."
                    }),
                    notionProjectsTutorialAgileGettingStartedWithProjects_16_0: e.formatMessage({
                        id: "notionProjectsTutorialAgileGettingStartedWithProjects_16_0",
                        defaultMessage: "Template settings really just toggle on and off different database properties. Learn more about database properties here: "
                    }),
                    notionProjectsTutorialAgileGettingStartedWithProjects_17_0: e.formatMessage({
                        id: "notionProjectsTutorialAgileGettingStartedWithProjects_17_0",
                        defaultMessage: "Views, filters, and sorts"
                    }),
                    notionProjectsTutorialAgileGettingStartedWithProjects_18_0: e.formatMessage({
                        id: "notionProjectsTutorialAgileGettingStartedWithProjects_18_0",
                        defaultMessage: "Views are customizable, flexible layouts to visualize your databases and properties as a table, board, calendar, timeline, or list. This template comes with several views of Projects, Tasks, and Sprints — you can customize each or create your own! "
                    }),
                    notionProjectsTutorialAgileGettingStartedWithProjects_20_0: e.formatMessage({
                        id: "notionProjectsTutorialAgileGettingStartedWithProjects_20_0",
                        defaultMessage: "Learn more about Notion’s database layouts, including when to use each type of database view in this guide: "
                    }),
                    notionProjectsTutorialAgileGettingStartedWithProjects_20_2: e.formatMessage({
                        id: "notionProjectsTutorialAgileGettingStartedWithProjects_20_2",
                        defaultMessage: "."
                    }),
                    future: e.formatMessage({
                        id: "appTemplatesSprintsV2.sprints.future",
                        defaultMessage: "Future"
                    }),
                    current: e.formatMessage({
                        id: "appTemplatesSprintsV2.sprints.current",
                        defaultMessage: "Current"
                    }),
                    backlog: e.formatMessage({
                        id: "appTemplatesSprintsV2.projects.backlog",
                        defaultMessage: "Backlog"
                    }),
                    next: e.formatMessage({
                        id: "appTemplatesSprintsV2.sprints.next",
                        defaultMessage: "Next"
                    }),
                    planning: e.formatMessage({
                        id: "notionProjectsTutorial_planning",
                        defaultMessage: "Planning"
                    })
                }
            }
            o.d(t, {
                cA: () => g,
                RJ: () => y,
                SG: () => _,
                zb: () => m,
                E6: () => c,
                xm: () => u,
                O1: () => d
            });
            let p = {
                amplitude: {
                    development: "0e1ef3bb-456a-48bf-b950-d49297607534",
                    staging: "18a195ab-8c44-44c6-b7ed-c33f77590456",
                    production: "9cd27a64-1c3b-4b1f-a769-a7d399ee4d32"
                },
                hex: {
                    development: "47c4d2e4-ae0d-4402-91f4-063d0a4c0c16",
                    staging: "47c4d2e4-ae0d-4402-91f4-063d0a4c0c16",
                    production: "47c4d2e4-ae0d-4402-91f4-063d0a4c0c16"
                },
                figma: {
                    development: o(49361).e1,
                    staging: o(49361).e1,
                    production: o(49361).e1
                },
                whimsical: {
                    development: "49f412ed-890c-4858-9f75-43515963d2d1",
                    staging: "cd3deffc-73ce-4dc5-81f1-4fc070928f39",
                    production: "1dc89ace-ecd7-453c-a4bf-b292840f0cee"
                }
            };

            function n(e) {
                let t = "notion://projects/tutorial/tasks/task1",
                    i = "notion://projects/tutorial/tasks/task2",
                    r = "notion://projects/tutorial/tasks/task3",
                    p = s();
                return [{
                    uri: t,
                    type: "block",
                    parentUri: o(11448).dC,
                    parentType: "collection",
                    blockValue: {
                        type: "page",
                        format: {
                            page_icon: "/icons/clipping_lightgray.svg"
                        },
                        properties: {
                            title: (0, o(247438).x9d)(p.task1),
                            [o(11448).yx.Status]: (0, o(561872).wb)(o(962299).A.formatMessage(o(998833).M_.statusOptionDone)),
                            [o(11448).yx.Assign]: (0, o(383431).h)([{
                                table: o(832375).oo9,
                                id: "replace_with_current_user"
                            }]),
                            [o(11448).yx.DueDate]: (0, o(561872).m5)((0, o(25825).jA)((0, o(714350).P)())),
                            [o(11448).yx.Priority]: (0, o(561872).U8)("Low"),
                            [o(11448).yx.Tags]: (0, o(561872).rK)(["Improvement"]),
                            ..."tasks" !== e ? {
                                [o(11448).yx.TaskToProjectRelation]: (0, o(561872).Ap)([{
                                    table: "block",
                                    id: "notion://projects/tutorial/projects/project1"
                                }])
                            } : {},
                            ..."tasks_with_projects_and_sprints" === e ? {
                                [o(11448).yx.TaskToSprintRelation]: (0, o(561872).Ap)([{
                                    table: "block",
                                    id: "notion://projects/tutorial/sprints/sprint1"
                                }])
                            } : {},
                            [o(11448).yx.AiSummary]: (0, o(247438).x9d)(p.task1AiSummary)
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task1_0",
                    type: "block",
                    parentUri: t,
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [p.task1_0]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task1_0_0",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task1_0",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [p.task1_0_0]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task1_0_1",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task1_0",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [p.task1_0_1]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task1_1",
                    type: "block",
                    parentUri: t,
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [p.task1_1]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task1_1_0",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task1_1",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [p.task1_1_0]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task1_1_1",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task1_1",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [p.task1_1_1]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task1_2",
                    type: "block",
                    parentUri: t,
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [p.task1_2]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task1_2_0",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task1_2",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [p.task1_2_0]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task1_2_1",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task1_2",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [p.task1_2_1]
                            ]
                        }
                    }
                }, {
                    uri: i,
                    type: "block",
                    parentUri: o(11448).dC,
                    parentType: "collection",
                    blockValue: {
                        type: "page",
                        format: {
                            page_icon: "/icons/clipping_lightgray.svg"
                        },
                        properties: {
                            title: (0, o(247438).x9d)(p.task2),
                            [o(11448).yx.Status]: (0, o(561872).wb)(o(962299).A.formatMessage(o(998833).M_.statusOptionInProgress)),
                            [o(11448).yx.Assign]: (0, o(383431).h)([{
                                table: o(832375).oo9,
                                id: "replace_with_current_user"
                            }]),
                            [o(11448).yx.DueDate]: (0, o(561872).m5)((0, o(25825).uf)((0, o(714350).P)())),
                            [o(11448).yx.Priority]: (0, o(561872).U8)("Medium"),
                            ..."tasks" !== e ? {
                                [o(11448).yx.TaskToProjectRelation]: (0, o(561872).Ap)([{
                                    table: "block",
                                    id: "notion://projects/tutorial/projects/project1"
                                }])
                            } : {},
                            ..."tasks_with_projects_and_sprints" === e ? {
                                [o(11448).yx.TaskToSprintRelation]: (0, o(561872).Ap)([{
                                    table: "block",
                                    id: "notion://projects/tutorial/sprints/sprint1"
                                }])
                            } : {},
                            [o(11448).yx.AiSummary]: (0, o(247438).x9d)(p.task2AiSummary)
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task2_0",
                    type: "block",
                    parentUri: i,
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [p.task2_0]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task2_0_0",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task2_0",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [p.task2_0_0]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task2_0_1",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task2_0",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [p.task2_0_1]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task2_0_2",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task2_0",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [p.task2_0_2]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task2_1",
                    type: "block",
                    parentUri: i,
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [p.task2_1]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task2_1_0",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task2_1",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [p.task2_1_0]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task2_2",
                    type: "block",
                    parentUri: i,
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [p.task2_2]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task2_2_0",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task2_2",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [p.task2_2_0]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task2_2_1",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task2_2",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [p.task2_2_1]
                            ]
                        }
                    }
                }, {
                    uri: r,
                    type: "block",
                    parentUri: o(11448).dC,
                    parentType: "collection",
                    blockValue: {
                        type: "page",
                        format: {
                            page_icon: "/icons/clipping_lightgray.svg"
                        },
                        properties: {
                            title: (0, o(247438).x9d)(p.task3),
                            [o(11448).yx.DueDate]: (0, o(561872).m5)(a((0, o(25825).En)((0, o(714350).P)()), 8)),
                            [o(11448).yx.Assign]: (0, o(383431).h)([{
                                table: o(832375).oo9,
                                id: "replace_with_current_user"
                            }]),
                            [o(11448).yx.Priority]: (0, o(561872).U8)("Medium"),
                            [o(11448).yx.Tags]: (0, o(561872).rK)(["Website"]),
                            ..."tasks" !== e ? {
                                [o(11448).yx.TaskToProjectRelation]: (0, o(561872).Ap)([{
                                    table: "block",
                                    id: "notion://projects/tutorial/projects/project2"
                                }])
                            } : {},
                            ..."tasks_with_projects_and_sprints" === e ? {
                                [o(11448).yx.TaskToSprintRelation]: (0, o(561872).Ap)([{
                                    table: "block",
                                    id: "notion://projects/tutorial/sprints/sprint2"
                                }])
                            } : {},
                            [o(11448).yx.AiSummary]: (0, o(247438).x9d)(p.task3AiSummary)
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task3_0",
                    type: "block",
                    parentUri: r,
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [p.task3_0]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task3_0_0",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task3_0",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [p.task3_0_0]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task3_0_1",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task3_0",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [p.task3_0_1]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task3_1",
                    type: "block",
                    parentUri: r,
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [p.task3_1]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task3_1_0",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task3_1",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [p.task3_1_0]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task3_1_1",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task3_1",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [p.task3_1_1]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task3_2",
                    type: "block",
                    parentUri: r,
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [p.task3_2]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task3_2_0",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task3_2",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [p.task3_2_0]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task3_2_1",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task3_2",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [p.task3_2_1]
                            ]
                        }
                    }
                }]
            }

            function l(e) {
                let t = s();
                return [{
                    uri: "notion://projects/tutorial/tasks/task4",
                    type: "block",
                    parentUri: o(11448).dC,
                    parentType: "collection",
                    blockValue: {
                        type: "page",
                        format: {
                            page_icon: "/icons/clipping_lightgray.svg"
                        },
                        properties: {
                            title: (0, o(247438).x9d)(t.task4),
                            [o(11448).yx.Assign]: (0, o(383431).h)([{
                                table: o(832375).oo9,
                                id: "replace_with_current_user"
                            }]),
                            [o(11448).yx.DueDate]: (0, o(561872).m5)(a((0, o(25825).uf)((0, o(714350).P)()), 3)),
                            [o(11448).yx.Priority]: (0, o(561872).U8)("Medium"),
                            [o(11448).yx.Tags]: (0, o(561872).rK)(["Website"]),
                            ..."tasks" !== e ? {
                                [o(11448).yx.TaskToProjectRelation]: (0, o(561872).Ap)([{
                                    table: "block",
                                    id: "notion://projects/tutorial/projects/project2"
                                }])
                            } : {},
                            ..."tasks_with_projects_and_sprints" === e ? {
                                [o(11448).yx.TaskToSprintRelation]: (0, o(561872).Ap)([{
                                    table: "block",
                                    id: "notion://projects/tutorial/sprints/sprint1"
                                }])
                            } : {},
                            [o(11448).yx.AiSummary]: (0, o(247438).x9d)(t.task4AiSummary)
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task4_0",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task4",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [t.task4_0]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task4_0_0",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task4_0",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [t.task4_0_0]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task4_0_1",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task4_0",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [t.task4_0_1]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task4_1",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task4",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [t.task4_1]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task4_1_0",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task4_1",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [t.task4_1_0]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task4_1_1",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task4_1",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [t.task4_1_1]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task4_2",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task4",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [t.task4_2]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task4_2_0",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task4_2",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [t.task4_2_0]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task4_2_1",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task4_2",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [t.task4_2_1]
                            ]
                        }
                    }
                }]
            }

            function c() {
                let e = s();
                return [{
                    uri: "notion://projects/tutorial/sprints/sprint1",
                    type: "block",
                    parentUri: o(11448).av,
                    parentType: "collection",
                    blockValue: {
                        type: "page",
                        format: {
                            page_icon: "/icons/run_lightgray.svg"
                        },
                        properties: {
                            title: (0, o(247438).x9d)(e.sprint1),
                            [o(11448).Hx.StatusV2]: (0, o(561872).wb)(e.current),
                            [o(11448).Hx.Dates]: (0, o(561872).m5)(i(Date.now(), 2))
                        }
                    }
                }, ...(0, o(869828).yH)("block", "notion://projects/tutorial/sprints/sprint1"), {
                    uri: "notion://projects/tutorial/sprints/sprint2",
                    type: "block",
                    parentUri: o(11448).av,
                    parentType: "collection",
                    blockValue: {
                        type: "page",
                        format: {
                            page_icon: "/icons/run_lightgray.svg"
                        },
                        properties: {
                            title: (0, o(247438).x9d)(e.sprint2),
                            [o(11448).Hx.StatusV2]: (0, o(561872).wb)(e.next)
                        }
                    }
                }, ...(0, o(869828).yH)("block", "notion://projects/tutorial/sprints/sprint2"), {
                    uri: "notion://projects/tutorial/sprints/sprint3",
                    type: "block",
                    parentUri: o(11448).av,
                    parentType: "collection",
                    blockValue: {
                        type: "page",
                        format: {
                            page_icon: "/icons/run_lightgray.svg"
                        },
                        properties: {
                            title: (0, o(247438).x9d)(e.sprint3),
                            [o(11448).Hx.StatusV2]: (0, o(561872).wb)(e.future)
                        }
                    }
                }, ...(0, o(869828).yH)("block", "notion://projects/tutorial/sprints/sprint3")]
            }

            function u(e) {
                let t = "tasks" === e ? n(e) : [...n(e), ...l(e)];
                return {
                    uri: `notion://projects/tasks${o(11448).no}/${e}`,
                    name: "Tasks tutorial content",
                    description: "Prefill the tasks db with tutorial content.",
                    dependencies: t,
                    collectionUri: o(11448).dC
                }
            }

            function d() {
                let e, t = [...n("tasks_with_projects_and_sprints"), ...l("tasks_with_projects_and_sprints"), ...(e = s(), [{
                    uri: "notion://projects/tutorial/tasks/task5",
                    type: "block",
                    parentUri: o(11448).dC,
                    parentType: "collection",
                    blockValue: {
                        type: "page",
                        format: {
                            page_icon: "/icons/clipping_lightgray.svg"
                        },
                        properties: {
                            title: (0, o(247438).x9d)(e.task5),
                            [o(11448).yx.Assign]: (0, o(383431).h)([{
                                table: o(832375).oo9,
                                id: "replace_with_current_user"
                            }]),
                            [o(11448).yx.DueDate]: (0, o(561872).m5)(a((0, o(25825).jA)((0, o(714350).P)()), 6)),
                            [o(11448).yx.TaskToProjectRelation]: (0, o(561872).Ap)([{
                                table: "block",
                                id: "notion://projects/tutorial/projects/project2"
                            }]),
                            [o(11448).yx.Tags]: (0, o(561872).rK)(["Mobile", "Website"]),
                            [o(11448).yx.Priority]: (0, o(561872).U8)("Low"),
                            [o(11448).yx.AiSummary]: (0, o(247438).x9d)(e.task5AiSummary)
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task5_0",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task5",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [e.task5_0]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task5_0_0",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task5_0",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [e.task5_0_0]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task5_0_1",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task5_0",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [e.task5_0_1]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task5_1",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task5",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [e.task5_1]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task5_1_0",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task5_1",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [e.task5_1_0]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task5_1_1",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task5_1",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [e.task5_1_1]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task5_2",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task5",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [e.task5_2]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task5_2_0",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task5_2",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [e.task5_2_0]
                            ]
                        }
                    }
                }, {
                    uri: "notion://projects/tutorial/tasks/task5_2_1",
                    type: "block",
                    parentUri: "notion://projects/tutorial/tasks/task5_2",
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [e.task5_2_1]
                            ]
                        }
                    }
                }])];
                return {
                    uri: `notion://projects/tasks${o(11448).no}/tasks_with_projects_and_sprints_v2`,
                    name: "Tasks tutorial content",
                    description: "Prefill the tasks db with tutorial content.",
                    dependencies: t,
                    collectionUri: o(11448).dC
                }
            }

            function y() {
                let e;
                return {
                    uri: `notion://projects/projects${o(11448).no}`,
                    name: "Projects tutorial content",
                    description: "Prefill the projects db with tutorial content.",
                    dependencies: [...(e = s(), [{
                        uri: "notion://projects/tutorial/projects/project1",
                        type: "block",
                        parentUri: o(11448).Tw,
                        parentType: "collection",
                        blockValue: {
                            type: "page",
                            format: {
                                page_icon: "📈"
                            },
                            properties: {
                                title: (0, o(247438).x9d)(e.project1),
                                [o(11448).K4.Status]: (0, o(561872).wb)(e.planning),
                                [o(11448).K4.ProjectDates]: (0, o(561872).m5)(i((0, o(25825).iB)(Date.now(), 1, (0, o(714350).P)()).valueOf(), 1)),
                                [o(11448).K4.ProjectToTaskRelation]: (0, o(561872).Ap)([{
                                    id: "notion://projects/tutorial/tasks/task1",
                                    table: "block"
                                }, {
                                    id: "notion://projects/tutorial/tasks/task2",
                                    table: "block"
                                }]),
                                [o(11448).K4.Priority]: (0, o(561872).U8)("Low"),
                                [o(11448).K4.People]: (0, o(383431).h)([{
                                    table: o(832375).oo9,
                                    id: "replace_with_current_user"
                                }]),
                                [o(11448).K4.BlockedByRelation]: (0, o(561872).Ap)([{
                                    table: "block",
                                    id: "notion://projects/tutorial/projects/getting_started_with_projects"
                                }]),
                                [o(11448).K4.BlockingRelation]: (0, o(561872).Ap)([{
                                    table: "block",
                                    id: "notion://projects/tutorial/projects/project2"
                                }]),
                                [o(11448).K4.AiSummary]: (0, o(247438).x9d)(e.project1AiSummary)
                            }
                        }
                    }, {
                        uri: "notion://projects/tutorial/projects/project1_header_block_0",
                        type: "block",
                        parentUri: "notion://projects/tutorial/projects/project1",
                        parentType: "block",
                        blockValue: {
                            type: "sub_header",
                            properties: {
                                title: (0, o(247438).x9d)(e.project1_heading0)
                            }
                        }
                    }, {
                        uri: "notion://projects/tutorial/projects/project1_paragraph0",
                        type: "block",
                        parentUri: "notion://projects/tutorial/projects/project1",
                        parentType: "block",
                        blockValue: {
                            type: "text",
                            properties: {
                                title: (0, o(247438).x9d)(e.project1_paragraph0)
                            }
                        }
                    }, {
                        uri: "notion://projects/tutorial/projects/project1_paragraph1",
                        type: "block",
                        parentUri: "notion://projects/tutorial/projects/project1",
                        parentType: "block",
                        blockValue: {
                            type: "text",
                            properties: {
                                title: (0, o(247438).x9d)(e.project1_paragraph1)
                            }
                        }
                    }, {
                        uri: "notion://projects/tutorial/projects/project1_header_block_1",
                        type: "block",
                        parentUri: "notion://projects/tutorial/projects/project1",
                        parentType: "block",
                        blockValue: {
                            type: "sub_header",
                            properties: {
                                title: (0, o(247438).x9d)(e.project1_heading1)
                            }
                        }
                    }, {
                        uri: "notion://projects/tutorial/projects/project1_integration0",
                        type: "block",
                        parentUri: "notion://projects/tutorial/projects/project1",
                        parentType: "block",
                        blockValue: {
                            type: "external_object_instance",
                            format: {
                                integration_id: p.amplitude.production,
                                is_placeholder: !0
                            }
                        }
                    }, {
                        uri: "notion://projects/tutorial/projects/project1_integration1",
                        type: "block",
                        parentUri: "notion://projects/tutorial/projects/project1",
                        parentType: "block",
                        blockValue: {
                            type: "external_object_instance",
                            format: {
                                integration_id: p.hex.production,
                                is_placeholder: !0
                            }
                        }
                    }, {
                        uri: "notion://projects/tutorial/projects/project1_header_block_2",
                        type: "block",
                        parentUri: "notion://projects/tutorial/projects/project1",
                        parentType: "block",
                        blockValue: {
                            type: "sub_header",
                            properties: {
                                title: (0, o(247438).x9d)(e.project1_heading2)
                            }
                        }
                    }, {
                        uri: "notion://projects/tutorial/projects/project1_tasks_block",
                        type: "block",
                        parentType: "block",
                        parentUri: "notion://projects/tutorial/projects/project1",
                        blockValue: {
                            type: "collection_view",
                            properties: {
                                title: (0, o(247438).x9d)("Tasks")
                            }
                        }
                    }, {
                        uri: "notion://projects/tutorial/projects/project1_tasks_board_view",
                        type: "collection_view",
                        collectionUri: o(11448).dC,
                        collectionViewBlockUri: "notion://projects/tutorial/projects/project1_tasks_block",
                        value: {
                            type: "board",
                            name: "Board",
                            format: {
                                table_wrap: !1,
                                board_columns: [{
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: o(962299).A.formatMessage(o(998833).M_.statusOptionNotStarted)
                                        }
                                    },
                                    property: o(11448).yx.Status
                                }, {
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: o(962299).A.formatMessage(o(998833).M_.statusOptionInProgress)
                                        }
                                    },
                                    property: o(11448).yx.Status
                                }, {
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: o(962299).A.formatMessage(o(998833).M_.statusOptionDone)
                                        }
                                    },
                                    property: o(11448).yx.Status
                                }, {
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: "Archived"
                                        }
                                    },
                                    hidden: !0,
                                    property: o(11448).yx.Status
                                }],
                                board_columns_by: {
                                    sort: {
                                        type: "ascending"
                                    },
                                    type: "status",
                                    groupBy: "option",
                                    property: o(11448).yx.Status,
                                    disableBoardColorColumns: !1
                                },
                                board_properties: [{
                                    visible: !0,
                                    property: "title"
                                }, {
                                    visible: !1,
                                    property: o(11448).yx.TaskToProjectRelation
                                }, {
                                    visible: !1,
                                    property: o(11448).yx.TaskToSprintRelation
                                }, {
                                    visible: !1,
                                    property: o(11448).yx.SprintStatusRollup
                                }, {
                                    visible: !1,
                                    property: o(11448).yx.Status
                                }, {
                                    visible: !0,
                                    property: o(11448).yx.Assign
                                }, {
                                    visible: !0,
                                    property: o(11448).yx.DueDate
                                }],
                                property_filters: [{
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: {
                                                type: "exact",
                                                value: "notion://projects/tutorial/projects/project1"
                                            },
                                            operator: "relation_contains"
                                        },
                                        property: o(11448).yx.TaskToProjectRelation
                                    }
                                }],
                                hide_linked_collection_name: !0
                            }
                        }
                    }, {
                        uri: "notion://projects/tutorial/projects/project1_tasks_view",
                        type: "collection_view",
                        collectionUri: o(11448).dC,
                        collectionViewBlockUri: "notion://projects/tutorial/projects/project1_tasks_block",
                        value: {
                            type: "table",
                            name: "All tasks",
                            format: {
                                table_wrap: !1,
                                property_filters: [{
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: {
                                                type: "exact",
                                                value: "notion://projects/tutorial/projects/project1"
                                            },
                                            operator: "relation_contains"
                                        },
                                        property: o(11448).yx.TaskToProjectRelation
                                    }
                                }],
                                table_properties: o(355940).zZ,
                                hide_linked_collection_name: !0
                            }
                        }
                    }, {
                        uri: "notion://projects/tutorial/projects/project2",
                        type: "block",
                        parentUri: o(11448).Tw,
                        parentType: "collection",
                        blockValue: {
                            type: "page",
                            format: {
                                page_icon: "🍏"
                            },
                            properties: {
                                title: (0, o(247438).x9d)(e.project2),
                                [o(11448).K4.Status]: (0, o(561872).wb)(e.planning),
                                [o(11448).K4.ProjectDates]: (0, o(561872).m5)(i((0, o(25825).iB)(Date.now(), 1, (0, o(714350).P)()).plus({
                                    week: 2
                                }).valueOf(), 4)),
                                [o(11448).K4.Priority]: (0, o(561872).U8)("Medium"),
                                [o(11448).K4.People]: (0, o(383431).h)([{
                                    table: o(832375).oo9,
                                    id: "replace_with_current_user"
                                }]),
                                [o(11448).K4.ProjectToTaskRelation]: (0, o(561872).Ap)([{
                                    id: "notion://projects/tutorial/tasks/task3",
                                    table: "block"
                                }, {
                                    id: "notion://projects/tutorial/tasks/task4",
                                    table: "block"
                                }]),
                                [o(11448).K4.BlockedByRelation]: (0, o(561872).Ap)([{
                                    table: "block",
                                    id: "notion://projects/tutorial/projects/project1"
                                }]),
                                [o(11448).K4.AiSummary]: (0, o(247438).x9d)(e.project2AiSummary)
                            }
                        }
                    }, {
                        uri: "notion://projects/tutorial/projects/project2_header_block_0",
                        type: "block",
                        parentUri: "notion://projects/tutorial/projects/project2",
                        parentType: "block",
                        blockValue: {
                            type: "sub_header",
                            properties: {
                                title: (0, o(247438).x9d)(e.project1_heading0)
                            }
                        }
                    }, {
                        uri: "notion://projects/tutorial/projects/project2_paragraph0",
                        type: "block",
                        parentUri: "notion://projects/tutorial/projects/project2",
                        parentType: "block",
                        blockValue: {
                            type: "text",
                            properties: {
                                title: (0, o(247438).x9d)(e.project2_paragraph0)
                            }
                        }
                    }, {
                        uri: "notion://projects/tutorial/projects/project2_paragraph1",
                        type: "block",
                        parentUri: "notion://projects/tutorial/projects/project2",
                        parentType: "block",
                        blockValue: {
                            type: "text",
                            properties: {
                                title: (0, o(247438).x9d)(e.project2_paragraph1)
                            }
                        }
                    }, {
                        uri: "notion://projects/tutorial/projects/project2_header_block_1",
                        type: "block",
                        parentUri: "notion://projects/tutorial/projects/project2",
                        parentType: "block",
                        blockValue: {
                            type: "sub_header",
                            properties: {
                                title: (0, o(247438).x9d)(e.project2_heading1)
                            }
                        }
                    }, {
                        uri: "notion://projects/tutorial/projects/project2_integration0",
                        type: "block",
                        parentUri: "notion://projects/tutorial/projects/project2",
                        parentType: "block",
                        blockValue: {
                            type: "external_object_instance",
                            format: {
                                integration_id: p.figma.production,
                                is_placeholder: !0
                            }
                        }
                    }, {
                        uri: "notion://projects/tutorial/projects/project2_integration1",
                        type: "block",
                        parentUri: "notion://projects/tutorial/projects/project2",
                        parentType: "block",
                        blockValue: {
                            type: "external_object_instance",
                            format: {
                                integration_id: p.whimsical.production,
                                is_placeholder: !0
                            }
                        }
                    }, {
                        uri: "notion://projects/tutorial/projects/project2_header_block_2",
                        type: "block",
                        parentUri: "notion://projects/tutorial/projects/project2",
                        parentType: "block",
                        blockValue: {
                            type: "sub_header",
                            properties: {
                                title: (0, o(247438).x9d)(e.project1_heading2)
                            }
                        }
                    }, {
                        uri: "notion://projects/tutorial/projects/project2_tasks_block",
                        type: "block",
                        parentType: "block",
                        parentUri: "notion://projects/tutorial/projects/project2",
                        blockValue: {
                            type: "collection_view",
                            properties: {
                                title: (0, o(247438).x9d)("Tasks")
                            }
                        }
                    }, {
                        uri: "notion://projects/tutorial/projects/project2_tasks_board_view",
                        type: "collection_view",
                        collectionUri: o(11448).dC,
                        collectionViewBlockUri: "notion://projects/tutorial/projects/project2_tasks_block",
                        value: {
                            type: "board",
                            name: "Board",
                            format: {
                                table_wrap: !1,
                                board_columns: [{
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: o(962299).A.formatMessage(o(998833).M_.statusOptionNotStarted)
                                        }
                                    },
                                    property: o(11448).yx.Status
                                }, {
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: o(962299).A.formatMessage(o(998833).M_.statusOptionInProgress)
                                        }
                                    },
                                    property: o(11448).yx.Status
                                }, {
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: o(962299).A.formatMessage(o(998833).M_.statusOptionDone)
                                        }
                                    },
                                    property: o(11448).yx.Status
                                }, {
                                    value: {
                                        type: "status",
                                        value: {
                                            type: "by_option",
                                            option: "Archived"
                                        }
                                    },
                                    hidden: !0,
                                    property: o(11448).yx.Status
                                }],
                                board_columns_by: {
                                    sort: {
                                        type: "ascending"
                                    },
                                    type: "status",
                                    groupBy: "option",
                                    property: o(11448).yx.Status,
                                    disableBoardColorColumns: !1
                                },
                                board_properties: [{
                                    visible: !0,
                                    property: "title"
                                }, {
                                    visible: !1,
                                    property: o(11448).yx.TaskToProjectRelation
                                }, {
                                    visible: !1,
                                    property: o(11448).yx.TaskToSprintRelation
                                }, {
                                    visible: !1,
                                    property: o(11448).yx.SprintStatusRollup
                                }, {
                                    visible: !1,
                                    property: o(11448).yx.Status
                                }, {
                                    visible: !0,
                                    property: o(11448).yx.Assign
                                }, {
                                    visible: !0,
                                    property: o(11448).yx.DueDate
                                }],
                                property_filters: [{
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: {
                                                type: "exact",
                                                value: "notion://projects/tutorial/projects/project2"
                                            },
                                            operator: "relation_contains"
                                        },
                                        property: o(11448).yx.TaskToProjectRelation
                                    }
                                }],
                                hide_linked_collection_name: !0
                            }
                        }
                    }, {
                        uri: "notion://projects/tutorial/projects/project2_tasks_view",
                        type: "collection_view",
                        collectionUri: o(11448).dC,
                        collectionViewBlockUri: "notion://projects/tutorial/projects/project2_tasks_block",
                        value: {
                            type: "table",
                            name: "All tasks",
                            format: {
                                table_wrap: !1,
                                property_filters: [{
                                    id: o(92513).JW(),
                                    filter: {
                                        filter: {
                                            value: {
                                                type: "exact",
                                                value: "notion://projects/tutorial/projects/project2"
                                            },
                                            operator: "relation_contains"
                                        },
                                        property: o(11448).yx.TaskToProjectRelation
                                    }
                                }],
                                table_properties: o(355940).zZ,
                                hide_linked_collection_name: !0
                            }
                        }
                    }])],
                    collectionUri: o(11448).Tw
                }
            }

            function g(e) {
                let t, p, n = [];
                if ("tasks_with_projects_and_sprints" === e) {
                    let e, t;
                    e = "notion://projects/tutorial/projects/getting_started_with_agile", n = [{
                        uri: `${e}`,
                        type: "block",
                        parentUri: "notion://projects_collection",
                        parentType: "collection",
                        blockValue: {
                            type: "page",
                            properties: {
                                title: [
                                    [(t = r()).notionProjectsTutorialProjectsGettingStartedWithAgileV2_0]
                                ],
                                [o(11448).K4.People]: (0, o(383431).h)([{
                                    table: o(832375).oo9,
                                    id: "replace_with_current_user"
                                }]),
                                [o(11448).K4.Status]: (0, o(561872).wb)(o(962299).A.formatMessage(o(998833).M_.statusOptionInProgress)),
                                [o(11448).K4.Priority]: (0, o(561872).U8)("High"),
                                [o(11448).K4.ProjectDates]: (0, o(561872).m5)(i((0, o(25825).iB)(Date.now(), 1, (0, o(714350).P)()).plus({
                                    week: -2
                                }).valueOf(), 1)),
                                [o(11448).K4.AiSummary]: [
                                    [t.notionProjectsTutorialProjectsGettingStartedWithAgileV2_AiSummary]
                                ],
                                [o(11448).K4.ProjectToTaskRelation]: (0, o(561872).Ap)([{
                                    id: "notion://projects/tutorial/tasks/create_a_project",
                                    table: "block"
                                }, {
                                    id: "notion://projects/tutorial/tasks/create_a_task",
                                    table: "block"
                                }]),
                                [o(11448).K4.BlockingRelation]: (0, o(561872).Ap)([{
                                    table: "block",
                                    id: "notion://projects/tutorial/projects/project1"
                                }])
                            },
                            format: {
                                page_icon: "/icons/arrow-right_blue.svg",
                                app_config_uri: "notion://projects/tutorial/projects/getting_started_with_projects"
                            }
                        }
                    }, {
                        uri: `${e}/0`,
                        type: "block",
                        parentUri: `${e}`,
                        parentType: "block",
                        blockValue: {
                            type: "callout",
                            properties: {
                                title: [
                                    [t.notionProjectsTutorialProjectsGettingStartedWithAgileV2_0_0]
                                ]
                            },
                            format: {
                                page_icon: "💡",
                                block_color: "gray_background"
                            }
                        }
                    }, {
                        uri: `${e}/1`,
                        type: "block",
                        parentUri: `${e}`,
                        parentType: "block",
                        blockValue: {
                            type: "image",
                            properties: {
                                size: [
                                    ["837.5KB"]
                                ],
                                title: [
                                    ["sprints (3).png"]
                                ],
                                source: [
                                    [o(896221).A.images.appPackages.projectsTasksSprintsGettingStartedPng]
                                ]
                            },
                            format: {
                                block_width: 4176,
                                display_source: o(896221).A.images.appPackages.projectsTasksSprintsGettingStartedPng,
                                block_full_width: !1,
                                block_page_width: !0,
                                block_aspect_ratio: .6360153256704981,
                                block_preserve_scale: !0
                            }
                        }
                    }, {
                        uri: `${e}/2`,
                        type: "block",
                        parentUri: `${e}`,
                        parentType: "block",
                        blockValue: {
                            type: "sub_sub_header",
                            properties: {
                                title: [
                                    [t.notionProjectsTutorialProjectsGettingStartedWithAgileV2_2_0]
                                ]
                            }
                        }
                    }, {
                        uri: `${e}/3`,
                        type: "block",
                        parentUri: `${e}`,
                        parentType: "block",
                        blockValue: {
                            type: "numbered_list",
                            properties: {
                                title: [
                                    [t.notionProjectsTutorialProjectsGettingStartedWithAgileV2_3_0, [
                                        ["b"]
                                    ]],
                                    [t.notionProjectsTutorialProjectsGettingStartedWithAgileV2_3_1]
                                ]
                            },
                            format: {}
                        }
                    }, {
                        uri: `${e}/4`,
                        type: "block",
                        parentUri: `${e}`,
                        parentType: "block",
                        blockValue: {
                            type: "numbered_list",
                            properties: {
                                title: [
                                    [t.notionProjectsTutorialProjectsGettingStartedWithAgileV2_4_0, [
                                        ["b"]
                                    ]],
                                    [t.notionProjectsTutorialProjectsGettingStartedWithAgileV2_4_1]
                                ]
                            },
                            format: {}
                        }
                    }, {
                        uri: `${e}/5`,
                        type: "block",
                        parentUri: `${e}`,
                        parentType: "block",
                        blockValue: {
                            type: "numbered_list",
                            properties: {
                                title: [
                                    [t.notionProjectsTutorialProjectsGettingStartedWithAgileV2_5_0, [
                                        ["b"]
                                    ]],
                                    [t.notionProjectsTutorialProjectsGettingStartedWithAgileV2_5_1]
                                ]
                            },
                            format: {}
                        }
                    }, {
                        uri: `${e}/6`,
                        type: "block",
                        parentUri: `${e}`,
                        parentType: "block",
                        blockValue: {
                            type: "numbered_list",
                            properties: {
                                title: [
                                    [t.notionProjectsTutorialProjectsGettingStartedWithAgileV2_6_0, [
                                        ["b"]
                                    ]],
                                    [t.notionProjectsTutorialProjectsGettingStartedWithAgileV2_6_1]
                                ]
                            },
                            format: {}
                        }
                    }, {
                        uri: `${e}/6/0`,
                        type: "block",
                        parentUri: `${e}/6`,
                        parentType: "block",
                        blockValue: {
                            type: "toggle",
                            properties: {
                                title: [
                                    [t.notionProjectsTutorialProjectsGettingStartedWithAgileV2_6_0_0, [
                                        ["i"]
                                    ]]
                                ]
                            },
                            format: {
                                toggleable: !0,
                                block_color: "default"
                            }
                        }
                    }, {
                        uri: `${e}/6/0/0`,
                        type: "block",
                        parentUri: `${e}/6/0`,
                        parentType: "block",
                        blockValue: {
                            type: "text",
                            properties: {
                                title: [
                                    [t.notionProjectsTutorialProjectsGettingStartedWithAgileV2_6_0_0_0]
                                ]
                            },
                            format: {}
                        }
                    }, {
                        uri: `${e}/6/0/1`,
                        type: "block",
                        parentUri: `${e}/6/0`,
                        parentType: "block",
                        blockValue: {
                            type: "image",
                            properties: {
                                size: [
                                    ["518.2KB"]
                                ],
                                title: [
                                    ["sprint automation.png"]
                                ],
                                source: [
                                    [o(896221).A.images.appPackages.sprintsAutomationModalPng]
                                ]
                            },
                            format: {
                                block_width: 4176,
                                display_source: o(896221).A.images.appPackages.sprintsAutomationModalPng,
                                block_full_width: !1,
                                block_page_width: !0,
                                block_aspect_ratio: .6360153256704981,
                                block_preserve_scale: !0
                            }
                        }
                    }, {
                        uri: `${e}/6/0/2`,
                        type: "block",
                        parentUri: `${e}/6/0`,
                        parentType: "block",
                        blockValue: {
                            type: "text",
                            properties: {},
                            format: {}
                        }
                    }, {
                        uri: `${e}/7`,
                        type: "block",
                        parentUri: `${e}`,
                        parentType: "block",
                        blockValue: {
                            type: "header",
                            properties: {
                                title: [
                                    [t.notionProjectsTutorialProjectsGettingStartedWithAgileV2_7_0]
                                ]
                            },
                            format: {
                                page_icon: "📎",
                                block_color: "default"
                            }
                        }
                    }, {
                        uri: `${e}/8`,
                        type: "block",
                        parentUri: `${e}`,
                        parentType: "block",
                        blockValue: {
                            type: "text",
                            properties: {
                                title: [
                                    [t.notionProjectsTutorialProjectsGettingStartedWithAgileV2_8_0],
                                    [t.notionProjectsTutorialProjectsGettingStartedWithAgileV2_8_1, [
                                        ["a", (0, o(442564).x)("guides.sprintPlanning")]
                                    ]]
                                ]
                            },
                            format: {}
                        }
                    }]
                } else {
                    let e, t, a;
                    e = "notion://projects/tutorial/projects/getting_started_with_projects", t = r(), a = o(962299).A.getIntl().locale.startsWith("en-") ? "https://www.notion.so/help/notion-academy/course/getting-started-projects" : "https://www.notion.so/help/guides/accomplish-more-with-connected-project-management", n = [{
                        uri: `${e}`,
                        type: "block",
                        parentUri: "notion://projects_collection",
                        parentType: "collection",
                        blockValue: {
                            type: "page",
                            properties: {
                                title: [
                                    [t.notionProjectsTutorialProjectsGettingStartedWithProjectsV2_0]
                                ],
                                [o(11448).K4.People]: (0, o(383431).h)([{
                                    table: o(832375).oo9,
                                    id: "replace_with_current_user"
                                }]),
                                [o(11448).K4.Status]: (0, o(561872).wb)(o(962299).A.formatMessage(o(998833).M_.statusOptionInProgress)),
                                [o(11448).K4.Priority]: (0, o(561872).U8)("High"),
                                [o(11448).K4.ProjectDates]: (0, o(561872).m5)(i((0, o(25825).iB)(Date.now(), 1, (0, o(714350).P)()).plus({
                                    week: -2
                                }).valueOf(), 1)),
                                [o(11448).K4.AiSummary]: [
                                    [t.notionProjectsTutorialProjectsGettingStartedWithProjectsV2_AiSummary]
                                ],
                                [o(11448).K4.ProjectToTaskRelation]: (0, o(561872).Ap)([{
                                    id: "notion://projects/tutorial/tasks/create_a_project",
                                    table: "block"
                                }, {
                                    id: "notion://projects/tutorial/tasks/create_a_task",
                                    table: "block"
                                }]),
                                [o(11448).K4.BlockingRelation]: (0, o(561872).Ap)([{
                                    table: "block",
                                    id: "notion://projects/tutorial/projects/project1"
                                }])
                            },
                            format: {
                                page_icon: "/icons/arrow-right_blue.svg",
                                app_config_uri: "notion://projects/tutorial/projects/getting_started_with_projects"
                            }
                        }
                    }, {
                        uri: `${e}/0`,
                        type: "block",
                        parentUri: `${e}`,
                        parentType: "block",
                        blockValue: {
                            type: "callout",
                            properties: {
                                title: [
                                    [t.notionProjectsTutorialProjectsGettingStartedWithProjectsV2_0_0]
                                ]
                            },
                            format: {
                                page_icon: "💡",
                                block_color: "gray_background"
                            }
                        }
                    }, {
                        uri: `${e}/1`,
                        type: "block",
                        parentUri: `${e}`,
                        parentType: "block",
                        blockValue: {
                            type: "sub_sub_header",
                            properties: {
                                title: [
                                    [t.notionProjectsTutorialProjectsGettingStartedWithProjectsV2_1_0]
                                ]
                            },
                            format: {}
                        }
                    }, {
                        uri: `${e}/2`,
                        type: "block",
                        parentUri: `${e}`,
                        parentType: "block",
                        blockValue: {
                            type: "image",
                            properties: {
                                size: [
                                    ["713.3KB"]
                                ],
                                title: [
                                    ["projects and tasks (3).png"]
                                ],
                                source: [
                                    [o(896221).A.images.appPackages.projectsAndTasksGettingStartedPng]
                                ]
                            },
                            format: {
                                block_width: 4176,
                                display_source: o(896221).A.images.appPackages.projectsAndTasksGettingStartedPng,
                                block_full_width: !1,
                                block_page_width: !0,
                                block_aspect_ratio: .6360153256704981,
                                block_preserve_scale: !0
                            }
                        }
                    }, {
                        uri: `${e}/3`,
                        type: "block",
                        parentUri: `${e}`,
                        parentType: "block",
                        blockValue: {
                            type: "numbered_list",
                            properties: {
                                title: [
                                    [t.notionProjectsTutorialProjectsGettingStartedWithProjectsV2_3_0, [
                                        ["b"]
                                    ]],
                                    [t.notionProjectsTutorialProjectsGettingStartedWithProjectsV2_3_1]
                                ]
                            },
                            format: {}
                        }
                    }, {
                        uri: `${e}/4`,
                        type: "block",
                        parentUri: `${e}`,
                        parentType: "block",
                        blockValue: {
                            type: "numbered_list",
                            properties: {
                                title: [
                                    [t.notionProjectsTutorialProjectsGettingStartedWithProjectsV2_4_0, [
                                        ["b"]
                                    ]],
                                    [t.notionProjectsTutorialProjectsGettingStartedWithProjectsV2_4_1]
                                ]
                            },
                            format: {
                                app_config_uri: "notion://projects/tutorial/projects/getting_started_with_projects/2"
                            }
                        }
                    }, {
                        uri: `${e}/5`,
                        type: "block",
                        parentUri: `${e}`,
                        parentType: "block",
                        blockValue: {
                            type: "numbered_list",
                            properties: {
                                title: [
                                    [t.notionProjectsTutorialProjectsGettingStartedWithProjectsV2_5_0, [
                                        ["b"]
                                    ]],
                                    [t.notionProjectsTutorialProjectsGettingStartedWithProjectsV2_5_1]
                                ]
                            },
                            format: {
                                app_config_uri: "notion://projects/tutorial/projects/getting_started_with_projects/2/1"
                            }
                        }
                    }, {
                        uri: `${e}/6`,
                        type: "block",
                        parentUri: `${e}`,
                        parentType: "block",
                        blockValue: {
                            type: "numbered_list",
                            properties: {
                                title: [
                                    [t.notionProjectsTutorialProjectsGettingStartedWithProjectsV2_6_0, [
                                        ["b"]
                                    ]],
                                    [t.notionProjectsTutorialProjectsGettingStartedWithProjectsV2_6_1]
                                ]
                            },
                            format: {
                                app_config_uri: "notion://projects/tutorial/projects/getting_started_with_projects/4"
                            }
                        }
                    }, {
                        uri: `${e}/7`,
                        type: "block",
                        parentUri: `${e}`,
                        parentType: "block",
                        blockValue: {
                            type: "header",
                            properties: {
                                title: [
                                    [t.notionProjectsTutorialProjectsGettingStartedWithProjectsV2_7_0]
                                ]
                            },
                            format: {
                                page_icon: "📎",
                                block_color: "default",
                                app_config_uri: "notion://projects/tutorial/projects/getting_started_with_projects/18"
                            }
                        }
                    }, {
                        uri: `${e}/8`,
                        type: "block",
                        parentUri: `${e}`,
                        parentType: "block",
                        blockValue: {
                            type: "text",
                            properties: {
                                title: [
                                    [t.notionProjectsTutorialProjectsGettingStartedWithProjectsV2_8_0],
                                    [t.notionProjectsTutorialProjectsGettingStartedWithProjectsV2_8_1, [
                                        ["a", a]
                                    ]]
                                ]
                            },
                            format: {}
                        }
                    }]
                }
                return {
                    uri: `notion://projects/${e}_get_started_data_feature`,
                    name: "Get started content",
                    description: "Prefill the projects db with tutorial content.",
                    dependencies: [...(t = s(), p = {}, "tasks_with_projects" === e ? p = {
                        [o(11448).yx.TaskToProjectRelation]: (0, o(561872).Ap)([{
                            table: "block",
                            id: "notion://projects/tutorial/projects/getting_started_with_projects"
                        }])
                    } : "tasks_with_projects_and_sprints" === e && (p = {
                        [o(11448).yx.TaskToProjectRelation]: (0, o(561872).Ap)([{
                            table: "block",
                            id: "notion://projects/tutorial/projects/getting_started_with_agile"
                        }])
                    }), [{
                        uri: o(11448).e4,
                        type: "block",
                        parentUri: o(11448).dC,
                        parentType: "collection",
                        blockValue: {
                            type: "page",
                            format: {
                                page_icon: "/icons/clipping_lightgray.svg"
                            },
                            properties: {
                                title: (0, o(247438).x9d)(t.getStartedTasksPage1),
                                [o(11448).yx.DueDate]: (0, o(561872).m5)(a((0, o(25825).uf)((0, o(714350).P)()), 5)),
                                [o(11448).yx.Assign]: (0, o(383431).h)([{
                                    table: o(832375).oo9,
                                    id: "replace_with_current_user"
                                }]),
                                [o(11448).yx.Priority]: (0, o(561872).U8)("High"),
                                ...p,
                                ..."tasks_with_projects_and_sprints" === e ? {
                                    [o(11448).yx.TaskToSprintRelation]: (0, o(561872).Ap)([{
                                        table: "block",
                                        id: "notion://projects/tutorial/sprints/sprint1"
                                    }])
                                } : {},
                                [o(11448).yx.AiSummary]: (0, o(247438).x9d)(t.getStartedTasksPage1AiSummary)
                            }
                        }
                    }, {
                        uri: "notion://projects/tutorial/tasks/create_a_task_0",
                        type: "block",
                        parentUri: "notion://projects/tutorial/tasks/create_a_task",
                        parentType: "block",
                        blockValue: {
                            type: "bulleted_list",
                            properties: {
                                title: [
                                    [t.getStartedTasksPage1_0]
                                ]
                            }
                        }
                    }, {
                        uri: "notion://projects/tutorial/tasks/create_a_task_1",
                        type: "block",
                        parentUri: "notion://projects/tutorial/tasks/create_a_task",
                        parentType: "block",
                        blockValue: {
                            type: "bulleted_list",
                            properties: {
                                title: [
                                    [t.getStartedTasksPage1_1]
                                ]
                            }
                        }
                    }, {
                        uri: "notion://projects/tutorial/tasks/create_a_project",
                        type: "block",
                        parentUri: o(11448).dC,
                        parentType: "collection",
                        blockValue: {
                            type: "page",
                            format: {
                                page_icon: "/icons/clipping_lightgray.svg"
                            },
                            properties: {
                                title: (0, o(247438).x9d)(t.getStartedTasksPage2),
                                [o(11448).yx.DueDate]: (0, o(561872).m5)(a((0, o(25825).wc)((0, o(714350).P)()), -2)),
                                [o(11448).yx.Assign]: (0, o(383431).h)([{
                                    table: o(832375).oo9,
                                    id: "replace_with_current_user"
                                }]),
                                [o(11448).yx.Priority]: (0, o(561872).U8)("High"),
                                ...p,
                                ..."tasks_with_projects_and_sprints" === e ? {
                                    [o(11448).yx.TaskToSprintRelation]: (0, o(561872).Ap)([{
                                        table: "block",
                                        id: "notion://projects/tutorial/sprints/sprint3"
                                    }])
                                } : {},
                                [o(11448).yx.AiSummary]: (0, o(247438).x9d)(t.getStartedTasksPage2AiSummary)
                            }
                        }
                    }, {
                        uri: "notion://projects/tutorial/tasks/create_a_project_0",
                        type: "block",
                        parentUri: "notion://projects/tutorial/tasks/create_a_project",
                        parentType: "block",
                        blockValue: {
                            type: "bulleted_list",
                            properties: {
                                title: [
                                    [t.getStartedTasksPage2_0]
                                ]
                            }
                        }
                    }, {
                        uri: "notion://projects/tutorial/tasks/create_a_project_1",
                        type: "block",
                        parentUri: "notion://projects/tutorial/tasks/create_a_project",
                        parentType: "block",
                        blockValue: {
                            type: "bulleted_list",
                            properties: {
                                title: [
                                    [t.getStartedTasksPage2_1]
                                ]
                            }
                        }
                    }]), ...n],
                    collectionUri: o(11448).Tw
                }
            }

            function _() {
                let e;
                return {
                    uri: `notion://projects/sprints${o(11448).no}`,
                    name: "Sprints tutorial content",
                    description: "Prefill the sprints db with tutorial content.",
                    dependencies: (e = s(), [{
                        uri: "notion://projects/tutorial/sprints/sprint1",
                        type: "block",
                        parentUri: o(11448).av,
                        parentType: "collection",
                        blockValue: {
                            type: "page",
                            format: {
                                page_icon: o(896221).A.images.appPackages.sprintsDbIconSvg
                            },
                            properties: {
                                title: (0, o(247438).x9d)(e.sprint1),
                                [o(11448).Hx.Dates]: (0, o(561872).m5)(i(Date.now(), 2))
                            }
                        }
                    }, {
                        uri: "notion://projects/tutorial/sprints/sprint2",
                        type: "block",
                        parentUri: o(11448).av,
                        parentType: "collection",
                        blockValue: {
                            type: "page",
                            format: {
                                page_icon: o(896221).A.images.appPackages.sprintsDbIconSvg
                            },
                            properties: {
                                title: (0, o(247438).x9d)(e.sprint2),
                                [o(11448).Hx.Dates]: (0, o(561872).m5)(i((0, o(25825).K1)({
                                    date: Date.now(),
                                    daysToAdd: 14
                                }), 2))
                            }
                        }
                    }, {
                        uri: "notion://projects/tutorial/sprints/sprint3",
                        type: "block",
                        parentUri: o(11448).av,
                        parentType: "collection",
                        blockValue: {
                            type: "page",
                            format: {
                                page_icon: o(896221).A.images.appPackages.sprintsDbIconSvg
                            },
                            properties: {
                                title: (0, o(247438).x9d)(e.sprint3),
                                [o(11448).Hx.Dates]: (0, o(561872).m5)(i((0, o(25825).K1)({
                                    date: Date.now(),
                                    daysToAdd: 28
                                }), 2))
                            }
                        }
                    }]),
                    collectionUri: o(11448).av
                }
            }

            function m() {
                return {
                    uri: `notion://projects/sprints${o(11448).no}-v2`,
                    name: "Sprints tutorial content",
                    description: "Prefill the sprints db with tutorial content.",
                    dependencies: c(),
                    collectionUri: o(11448).av
                }
            }
        },
        869828: (e, t, o) => {
            o.d(t, {
                Ow: () => r,
                yH: () => s
            });
            let a = (0, o(109939).YK)({
                    notionTasksNewSprintTemplate_0: {
                        id: "notionTasksNewSprintTemplate_0",
                        defaultMessage: "New sprint"
                    },
                    tasksInSprintBoardViewName: {
                        id: "notionTasksNewSprintTemplate_17_0",
                        defaultMessage: "By status"
                    },
                    tasksCollectionName: {
                        defaultMessage: "Tasks",
                        id: "notionTasksNewSprintTemplate_18_0"
                    },
                    tasksInSprintTableViewName: {
                        id: "notionTasksNewSprintTemplate_19_0",
                        defaultMessage: "By assignee"
                    },
                    notionSprintsNewSprintTemplate_0_0: {
                        id: "notionSprintsNewSprintTemplate_0_0",
                        defaultMessage: "Planning notes"
                    },
                    notionSprintsNewSprintTemplate_1_0_0: {
                        id: "notionSprintsNewSprintTemplate_1_0_0",
                        defaultMessage: "Team availability"
                    },
                    notionSprintsNewSprintTemplate_1_0_0_0: {
                        id: "notionSprintsNewSprintTemplate_1_0_0_0",
                        defaultMessage: "PTOs"
                    },
                    notionSprintsNewSprintTemplate_1_1_0: {
                        id: "notionSprintsNewSprintTemplate_1_1_0",
                        defaultMessage: "Last sprint review"
                    },
                    notionSprintsNewSprintTemplate_1_1_0_0: {
                        id: "notionSprintsNewSprintTemplate_1_1_0_0",
                        defaultMessage: "What went well"
                    },
                    notionSprintsNewSprintTemplate_1_1_1_0: {
                        id: "notionSprintsNewSprintTemplate_1_1_1_0",
                        defaultMessage: "What could have gone differently"
                    },
                    notionSprintsNewSprintTemplate_1_2_0: {
                        id: "notionSprintsNewSprintTemplate_1_2_0",
                        defaultMessage: "Sprint planning"
                    },
                    notionSprintsNewSprintTemplate_1_2_0_0: {
                        id: "notionSprintsNewSprintTemplate_1_2_0_0",
                        defaultMessage: "Current sprint goal"
                    },
                    notionSprintsNewSprintTemplate_1_2_1_0: {
                        id: "notionSprintsNewSprintTemplate_1_2_1_0",
                        defaultMessage: "Commit tasks to sprint"
                    }
                }),
                i = `${o(11448).IB}/new_sprint_template`;

            function r() {
                return [{
                    uri: `${i}`,
                    type: "database_template",
                    collectionUri: o(11448).av,
                    isDefault: !0,
                    blockValue: {
                        type: "page",
                        format: {
                            page_icon: "/icons/run_lightgray.svg",
                            app_config_uri: "notion://tasks/new_sprint_template"
                        },
                        properties: {
                            title: (0, o(247438).x9d)(o(962299).A.formatMessage(a.notionTasksNewSprintTemplate_0)),
                            [o(11448).Hx.StatusV2]: (0, o(561872).wb)(o(11448).Jd)
                        }
                    }
                }, ...s("database_template", i)]
            }

            function s(e, t) {
                return [{
                    uri: `${t}/sprint_tasks_block`,
                    type: "block",
                    parentType: e,
                    parentUri: t,
                    blockValue: {
                        type: "collection_view",
                        properties: {
                            title: (0, o(247438).x9d)(o(962299).A.formatMessage(a.tasksCollectionName))
                        }
                    }
                }, {
                    uri: `${t}/tasks_in_sprint_board_view`,
                    type: "collection_view",
                    collectionUri: o(11448).dC,
                    collectionViewBlockUri: `${t}/sprint_tasks_block`,
                    value: {
                        type: "board",
                        name: o(962299).A.formatMessage(a.tasksInSprintBoardViewName),
                        format: {
                            table_wrap: !0,
                            board_columns: [{
                                value: {
                                    type: "status",
                                    value: {
                                        type: "by_option",
                                        option: o(962299).A.formatMessage(o(998833).M_.statusOptionNotStarted)
                                    }
                                },
                                property: o(11448).yx.Status
                            }, {
                                value: {
                                    type: "status",
                                    value: {
                                        type: "by_option",
                                        option: o(962299).A.formatMessage(o(998833).M_.statusOptionInProgress)
                                    }
                                },
                                property: o(11448).yx.Status
                            }, {
                                value: {
                                    type: "status",
                                    value: {
                                        type: "by_option",
                                        option: o(962299).A.formatMessage(o(998833).M_.statusOptionDone)
                                    }
                                },
                                property: o(11448).yx.Status
                            }, {
                                value: {
                                    type: "status",
                                    value: {
                                        type: "by_option",
                                        option: o(962299).A.formatMessage(o(998833).M_.typedStatusOptionArchived)
                                    }
                                },
                                hidden: !0,
                                property: o(11448).yx.Status
                            }],
                            board_columns_by: {
                                sort: {
                                    type: "ascending"
                                },
                                type: "status",
                                groupBy: "option",
                                property: o(11448).yx.Status,
                                disableBoardColorColumns: !1
                            },
                            board_properties: [{
                                visible: !0,
                                property: "title"
                            }, {
                                visible: !1,
                                property: o(11448).yx.TaskToProjectRelation
                            }, {
                                visible: !1,
                                property: o(11448).yx.TaskToSprintRelation
                            }, {
                                visible: !1,
                                property: o(11448).yx.SprintStatusRollup
                            }, {
                                visible: !1,
                                property: o(11448).yx.Status
                            }, {
                                visible: !0,
                                property: o(11448).yx.Assign
                            }, {
                                visible: !0,
                                property: o(11448).yx.DueDate
                            }, {
                                visible: !1,
                                property: o(11448).K4.AiSummary
                            }],
                            property_filters: [{
                                id: o(92513).JW(),
                                filter: {
                                    filter: {
                                        value: {
                                            type: "exact",
                                            value: t
                                        },
                                        operator: "relation_contains"
                                    },
                                    property: o(11448).yx.TaskToSprintRelation
                                }
                            }],
                            hide_linked_collection_name: !0
                        }
                    }
                }, {
                    uri: `${t}/tasks_in_sprint_by_assignee_table_view`,
                    type: "collection_view",
                    collectionUri: o(11448).dC,
                    collectionViewBlockUri: `${t}/sprint_tasks_block`,
                    value: {
                        type: "table",
                        name: o(962299).A.formatMessage(a.tasksInSprintTableViewName),
                        format: {
                            table_wrap: !0,
                            collection_group_by: {
                                type: "person",
                                sort: {
                                    type: "manual"
                                },
                                property: o(11448).yx.Assign,
                                hideEmptyGroups: !0
                            },
                            table_properties: [{
                                visible: !0,
                                property: "title"
                            }, {
                                visible: !0,
                                property: o(11448).yx.Status,
                                width: 120
                            }, {
                                visible: !0,
                                property: o(11448).yx.TaskToProjectRelation
                            }, {
                                visible: !1,
                                property: o(11448).yx.TaskToSprintRelation
                            }, {
                                visible: !1,
                                property: o(11448).yx.SprintStatusRollup
                            }, {
                                visible: !1,
                                property: o(11448).yx.Assign
                            }, {
                                visible: !1,
                                property: o(11448).yx.DueDate
                            }, {
                                visible: !1,
                                property: o(11448).K4.AiSummary
                            }],
                            property_filters: [{
                                id: o(92513).JW(),
                                filter: {
                                    filter: {
                                        value: {
                                            type: "exact",
                                            value: t
                                        },
                                        operator: "relation_contains"
                                    },
                                    property: o(11448).yx.TaskToSprintRelation
                                }
                            }],
                            hide_linked_collection_name: !0
                        }
                    }
                }, {
                    uri: `${t}/1`,
                    type: "block",
                    parentUri: t,
                    parentType: "block",
                    blockValue: {
                        type: "sub_sub_header",
                        properties: {
                            title: [
                                [o(962299).A.formatMessage(a.notionSprintsNewSprintTemplate_0_0), [
                                    ["b"]
                                ]]
                            ]
                        },
                        format: {
                            toggleable: !0,
                            app_config_uri: "notion://sprints/new_sprint_template/0"
                        }
                    }
                }, {
                    uri: `${t}/1/0`,
                    type: "block",
                    parentUri: `${t}/1`,
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [o(962299).A.formatMessage(a.notionSprintsNewSprintTemplate_1_0_0)]
                            ]
                        }
                    }
                }, {
                    uri: `${t}/1/0/0`,
                    type: "block",
                    parentUri: `${t}/1/0`,
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [o(962299).A.formatMessage(a.notionSprintsNewSprintTemplate_1_0_0_0)]
                            ]
                        }
                    }
                }, {
                    uri: `${t}/1/1`,
                    type: "block",
                    parentUri: `${t}/1`,
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [o(962299).A.formatMessage(a.notionSprintsNewSprintTemplate_1_1_0)]
                            ]
                        }
                    }
                }, {
                    uri: `${t}/1/1/0`,
                    type: "block",
                    parentUri: `${t}/1/1`,
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [o(962299).A.formatMessage(a.notionSprintsNewSprintTemplate_1_1_0_0)]
                            ]
                        }
                    }
                }, {
                    uri: `${t}/1/1/1`,
                    type: "block",
                    parentUri: `${t}/1/1`,
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [o(962299).A.formatMessage(a.notionSprintsNewSprintTemplate_1_1_1_0)]
                            ]
                        }
                    }
                }, {
                    uri: `${t}/1/2`,
                    type: "block",
                    parentUri: `${t}/1`,
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [o(962299).A.formatMessage(a.notionSprintsNewSprintTemplate_1_2_0)]
                            ]
                        }
                    }
                }, {
                    uri: `${t}/1/2/0`,
                    type: "block",
                    parentUri: `${t}/1/2`,
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [o(962299).A.formatMessage(a.notionSprintsNewSprintTemplate_1_2_0_0)]
                            ]
                        }
                    }
                }, {
                    uri: `${t}/1/2/1`,
                    type: "block",
                    parentUri: `${t}/1/2`,
                    parentType: "block",
                    blockValue: {
                        type: "bulleted_list",
                        properties: {
                            title: [
                                [o(962299).A.formatMessage(a.notionSprintsNewSprintTemplate_1_2_1_0)]
                            ]
                        }
                    }
                }]
            }
        }
    }
]);