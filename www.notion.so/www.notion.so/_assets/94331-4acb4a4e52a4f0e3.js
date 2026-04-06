"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [94331], {
        716712: (e, a, t) => {
            t.d(a, {
                p: () => x
            }), t(378347), t(814603), t(147566), t(198721);
            let s = {
                    calendar: t(896221).A.images.customAgentConnections.googleCalendarVignettePng,
                    mail: t(896221).A.images.customAgentConnections.gmailVignettePng,
                    figma: t(896221).A.images.customAgentConnections.figmaVignettePng,
                    github: t(896221).A.images.customAgentConnections.githubVignettePng,
                    cursor: t(896221).A.images.customAgentConnections.cursorVignettePng,
                    hex: t(896221).A.images.customAgentConnections.hexVignettePng,
                    intercom: t(896221).A.images.customAgentConnections.intercomVignettePng,
                    linear: t(896221).A.images.customAgentConnections.linearVignettePng,
                    amplitude: t(896221).A.images.customAgentConnections.amplitudeVignettePng,
                    attio: t(896221).A.images.customAgentConnections.attioVignettePng,
                    clay: t(896221).A.images.customAgentConnections.clayVignettePng,
                    hubspot: t(896221).A.images.customAgentConnections.hubspotVignettePng,
                    wiz: t(896221).A.images.customAgentConnections.wizVignettePng,
                    ramp: t(896221).A.images.customAgentConnections.rampVignettePng,
                    canva: t(896221).A.images.customAgentConnections.canvaVignettePng,
                    sentry: t(896221).A.images.customAgentConnections.sentryVignettePng,
                    stripe: t(896221).A.images.customAgentConnections.stripeVignettePng,
                    slack: t(896221).A.images.customAgentConnections.slackVignettePng,
                    salesforce: t(896221).A.images.customAgentConnections.salesforceVignettePng,
                    gong: t(896221).A.images.customAgentConnections.gongVignettePng,
                    miro: t(896221).A.images.customAgentConnections.miroVignettePng,
                    n8n: t(896221).A.images.customAgentConnections.n8NVignettePng,
                    snowflake: t(896221).A.images.customAgentConnections.snowflakeVignettePng
                },
                o = (0, t(109939).YK)({
                    useCasesTitle: {
                        id: "workflow.agent.addConnectionModal.details.useCasesTitle",
                        defaultMessage: "Use cases"
                    },
                    suggestedPromptsTitle: {
                        id: "workflow.agent.addConnectionModal.details.suggestedPromptsTitle",
                        defaultMessage: "Suggested prompts"
                    },
                    capabilitiesTitle: {
                        id: "workflow.agent.addConnectionModal.details.capabilitiesTitle",
                        defaultMessage: "Capabilities"
                    },
                    triggersTitle: {
                        id: "workflow.agent.addConnectionModal.details.triggersTitle",
                        defaultMessage: "Triggers"
                    },
                    calendarOverview: {
                        id: "workflow.agent.addConnectionModal.details.calendarOverview",
                        defaultMessage: "Connect your agent to your calendar provider to help manage and refine your schedule, book meetings, and balance your day."
                    },
                    calendarCapabilityReadCreateUpdateEvents: {
                        id: "workflow.agent.addConnectionModal.details.calendarCapability.readCreateUpdateEvents",
                        defaultMessage: "Read, create, and update events"
                    },
                    calendarCapabilityFindTimeWithParticipants: {
                        id: "workflow.agent.addConnectionModal.details.calendarCapability.findTimeWithParticipants",
                        defaultMessage: "Find time with participants"
                    },
                    calendarCapabilityOptimizeSchedule: {
                        id: "workflow.agent.addConnectionModal.details.calendarCapability.optimizeSchedule",
                        defaultMessage: "Optimize your schedule for focus time and breaks"
                    },
                    calendarCapabilityProvideOverview: {
                        id: "workflow.agent.addConnectionModal.details.calendarCapability.provideOverview",
                        defaultMessage: "Provide schedule overviews, detect conflicts, and reschedule meetings"
                    },
                    calendarCapabilityManageMultipleAccounts: {
                        id: "workflow.agent.addConnectionModal.details.calendarCapability.manageMultipleAccounts",
                        defaultMessage: "Manage multiple calendar accounts"
                    },
                    calendarTriggerEventCreated: {
                        id: "workflow.agent.addConnectionModal.details.calendarTrigger.eventCreated",
                        defaultMessage: "Event created"
                    },
                    calendarTriggerEventUpdated: {
                        id: "workflow.agent.addConnectionModal.details.calendarTrigger.eventUpdated",
                        defaultMessage: "Event updated"
                    },
                    calendarTriggerEventCanceled: {
                        id: "workflow.agent.addConnectionModal.details.calendarTrigger.eventCanceled",
                        defaultMessage: "Event canceled"
                    },
                    mailOverview: {
                        id: "workflow.agent.addConnectionModal.details.mailOverview",
                        defaultMessage: "Connect your agent to a mail provider to manage your inbox, draft emails based on your Notion knowledge, and automate email tasks."
                    },
                    mailCapabilityManageMultipleAddresses: {
                        id: "workflow.agent.addConnectionModal.details.mailCapability.manageMultipleAddresses",
                        defaultMessage: "Manage multiple Gmail addresses"
                    },
                    mailCapabilityReadDraftReply: {
                        id: "workflow.agent.addConnectionModal.details.mailCapability.readDraftReply",
                        defaultMessage: "Read, draft, and reply to emails with your confirmation"
                    },
                    mailCapabilitySearchInboxes: {
                        id: "workflow.agent.addConnectionModal.details.mailCapability.searchInboxes",
                        defaultMessage: "Search across all your inboxes"
                    },
                    mailCapabilityPrioritizeOrganize: {
                        id: "workflow.agent.addConnectionModal.details.mailCapability.prioritizeOrganize",
                        defaultMessage: "Prioritize and organize inboxes"
                    },
                    mailCapabilityExtractConnectNotion: {
                        id: "workflow.agent.addConnectionModal.details.mailCapability.extractConnectNotion",
                        defaultMessage: "Extract email information and connect it with Notion knowledge"
                    },
                    mailTriggerEmailsReceived: {
                        id: "workflow.agent.addConnectionModal.details.mailTrigger.emailsReceived",
                        defaultMessage: "Emails received"
                    },
                    mailTriggerEmailsSent: {
                        id: "workflow.agent.addConnectionModal.details.mailTrigger.emailsSent",
                        defaultMessage: "Emails sent"
                    },
                    mailTriggerEmailsReceivedOrSent: {
                        id: "workflow.agent.addConnectionModal.details.mailTrigger.emailsReceivedOrSent",
                        defaultMessage: "Emails received or sent"
                    },
                    mailTriggerLabelApplied: {
                        id: "workflow.agent.addConnectionModal.details.mailTrigger.labelApplied",
                        defaultMessage: "Label applied"
                    },
                    figmaOverview: {
                        id: "workflow.agent.addConnectionModal.details.figmaOverview",
                        defaultMessage: "Connect your agent to Figma MCP to create and read FigJam diagrams directly from Notion."
                    },
                    figmaUseCaseDocsToFigJam: {
                        id: "workflow.agent.addConnectionModal.details.figmaUseCase.docsToFigJam",
                        defaultMessage: "Turn Notion docs into FigJam diagrams"
                    },
                    figmaUseCaseOrganizeFigJamToNotion: {
                        id: "workflow.agent.addConnectionModal.details.figmaUseCase.organizeFigJamToNotion",
                        defaultMessage: "Organize content from FigJam into Notion pages"
                    },
                    figmaUseCaseTransformPrds: {
                        id: "workflow.agent.addConnectionModal.details.figmaUseCase.transformPrds",
                        defaultMessage: "Transform PRDs into flowcharts and system diagrams"
                    },
                    figmaSuggestedPromptFlowchart: {
                        id: "workflow.agent.addConnectionModal.details.figmaSuggestedPrompt.flowchart",
                        defaultMessage: "Create a flowchart of our user onboarding process"
                    },
                    figmaSuggestedPromptArchitectureDiagram: {
                        id: "workflow.agent.addConnectionModal.details.figmaSuggestedPrompt.architectureDiagram",
                        defaultMessage: "Turn my doc into a system architecture diagram in FigJam"
                    },
                    figmaSuggestedPromptFigJamStickies: {
                        id: "workflow.agent.addConnectionModal.details.figmaSuggestedPrompt.figJamStickies",
                        defaultMessage: "Organize FigJam board stickies into a Notion database"
                    },
                    githubOverview: {
                        id: "workflow.agent.addConnectionModal.details.githubOverview",
                        defaultMessage: "Connect your agent to GitHub MCP to read and write issues, pull requests, code reviews, and security alerts."
                    },
                    githubUseCaseTrackPrs: {
                        id: "workflow.agent.addConnectionModal.details.githubUseCase.trackPrs",
                        defaultMessage: "Track PRs with code change analysis"
                    },
                    githubUseCaseCreateIssuesFromAlerts: {
                        id: "workflow.agent.addConnectionModal.details.githubUseCase.createIssuesFromAlerts",
                        defaultMessage: "Create GitHub issues from Notion tasks or docs"
                    },
                    githubUseCaseWeeklySummaries: {
                        id: "workflow.agent.addConnectionModal.details.githubUseCase.weeklySummaries",
                        defaultMessage: "Generate weekly project status summaries"
                    },
                    githubUseCaseUpdateCommentPrs: {
                        id: "workflow.agent.addConnectionModal.details.githubUseCase.updateCommentPrs",
                        defaultMessage: "Update or comment on PRs from Notion workflows"
                    },
                    githubSuggestedPromptCreateIssueFromTask: {
                        id: "workflow.agent.addConnectionModal.details.githubSuggestedPrompt.createIssueFromTask",
                        defaultMessage: "Create a GitHub issue from this Notion task"
                    },
                    githubSuggestedPromptSummarizeOpenPrs: {
                        id: "workflow.agent.addConnectionModal.details.githubSuggestedPrompt.summarizeOpenPrs",
                        defaultMessage: "Summarize open PRs and flag ones for review"
                    },
                    githubSuggestedPromptMonitorSecretScanning: {
                        id: "workflow.agent.addConnectionModal.details.githubSuggestedPrompt.monitorSecretScanning",
                        defaultMessage: "Monitor security alerts and classify high-priority issues"
                    },
                    githubSuggestedPromptPostStatusUpdate: {
                        id: "workflow.agent.addConnectionModal.details.githubSuggestedPrompt.postStatusUpdate",
                        defaultMessage: "Post a status update on PR #N from this meeting note"
                    },
                    cursorOverview: {
                        id: "workflow.agent.addConnectionModal.details.cursorOverview",
                        defaultMessage: "Connect your agent to Cursor to build features, fix bugs, and open pull requests from Notion."
                    },
                    boxyOverview: {
                        id: "workflow.agent.addConnectionModal.details.boxyOverview",
                        defaultMessage: "Connect your agent to Boxy to spin up Boxy workspaces, start coding threads, and continue implementation work from Notion."
                    },
                    cursorUseCaseCreatePrsFromNotion: {
                        id: "workflow.agent.addConnectionModal.details.cursorUseCase.createPrsFromNotion",
                        defaultMessage: "Create PRs from a Notion page, task, or comment"
                    },
                    boxyUseCaseCreateBoxForTask: {
                        id: "workflow.agent.addConnectionModal.details.boxyUseCase.createBoxForTask",
                        defaultMessage: "Create a Boxy workspace for a Notion task or spec"
                    },
                    boxyUseCaseStartThreadForImplementation: {
                        id: "workflow.agent.addConnectionModal.details.boxyUseCase.startThreadForImplementation",
                        defaultMessage: "Start a Boxy thread to implement or debug code"
                    },
                    boxyUseCaseContinueExistingThread: {
                        id: "workflow.agent.addConnectionModal.details.boxyUseCase.continueExistingThread",
                        defaultMessage: "Continue an existing coding thread with follow-up instructions"
                    },
                    cursorUseCaseMentionAgentCreatePrs: {
                        id: "workflow.agent.addConnectionModal.details.cursorUseCase.mentionAgentCreatePrs",
                        defaultMessage: "@mention your agent to create PRs"
                    },
                    cursorUseCaseTrackProgressAsync: {
                        id: "workflow.agent.addConnectionModal.details.cursorUseCase.trackProgressAsync",
                        defaultMessage: "Track progress asynchronously and check back later"
                    },
                    cursorSuggestedPromptCreatePrFromSpec: {
                        id: "workflow.agent.addConnectionModal.details.cursorSuggestedPrompt.createPrFromSpec",
                        defaultMessage: "Create a PR from this spec in [repo URL]"
                    },
                    boxySuggestedPromptCreateBox: {
                        id: "workflow.agent.addConnectionModal.details.boxySuggestedPrompt.createBox",
                        defaultMessage: "Create a Boxy workspace for this task and start implementing it in Boxy."
                    },
                    boxySuggestedPromptCheckBoxStatus: {
                        id: "workflow.agent.addConnectionModal.details.boxySuggestedPrompt.checkBoxStatus",
                        defaultMessage: "Check whether box [box id] is ready yet."
                    },
                    boxySuggestedPromptContinueThread: {
                        id: "workflow.agent.addConnectionModal.details.boxySuggestedPrompt.continueThread",
                        defaultMessage: "Send this follow-up to Boxy thread [thread id]."
                    },
                    cursorSuggestedPromptStartBackground: {
                        id: "workflow.agent.addConnectionModal.details.cursorSuggestedPrompt.startBackground",
                        defaultMessage: "Start this in the background. Open a PR when it’s ready."
                    },
                    cursorSuggestedPromptFixBugUpdateTask: {
                        id: "workflow.agent.addConnectionModal.details.cursorSuggestedPrompt.fixBugUpdateTask",
                        defaultMessage: "Fix the bug described in this task and update the task"
                    },
                    intercomOverview: {
                        id: "workflow.agent.addConnectionModal.details.intercomOverview",
                        defaultMessage: "Connect your agent to Intercom MCP to track customer sentiment and triage customer support tickets."
                    },
                    intercomUseCaseConvertConversations: {
                        id: "workflow.agent.addConnectionModal.details.intercomUseCase.convertConversations",
                        defaultMessage: "Convert conversations into classified tickets and next actions"
                    },
                    intercomUseCaseIdentifyAtRisk: {
                        id: "workflow.agent.addConnectionModal.details.intercomUseCase.identifyAtRisk",
                        defaultMessage: "Identify at-risk customers and track engagement patterns."
                    },
                    intercomUseCaseCollectCommonQuestions: {
                        id: "workflow.agent.addConnectionModal.details.intercomUseCase.collectCommonQuestions",
                        defaultMessage: "Collect common questions to build a CX knowledge base"
                    },
                    intercomSuggestedPromptBuildFaq: {
                        id: "workflow.agent.addConnectionModal.details.intercomSuggestedPrompt.buildFaq",
                        defaultMessage: "Build FAQ from conversations about billing refunds"
                    },
                    intercomSuggestedPromptReviewPriority: {
                        id: "workflow.agent.addConnectionModal.details.intercomSuggestedPrompt.reviewPriority",
                        defaultMessage: "Review conversations and flag any that need escalation"
                    },
                    intercomSuggestedPromptCustomerHealth: {
                        id: "workflow.agent.addConnectionModal.details.intercomSuggestedPrompt.customerHealth",
                        defaultMessage: "Give me the health status for customer Lumi Labs"
                    },
                    linearOverview: {
                        id: "workflow.agent.addConnectionModal.details.linearOverview",
                        defaultMessage: "Connect your agent to Linear MCP to manage issues, track project progress, and automate your development workflows."
                    },
                    linearUseCasePrdsToProjects: {
                        id: "workflow.agent.addConnectionModal.details.linearUseCase.prdsToProjects",
                        defaultMessage: "Summarize project progress"
                    },
                    linearUseCaseProgressSummaries: {
                        id: "workflow.agent.addConnectionModal.details.linearUseCase.progressSummaries",
                        defaultMessage: "Create Linear issues from Notion docs"
                    },
                    linearUseCaseGenerateIssues: {
                        id: "workflow.agent.addConnectionModal.details.linearUseCase.generateIssues",
                        defaultMessage: "Turn Notion PRDs into structured Linear projects"
                    },
                    linearSuggestedPromptPrdToProject: {
                        id: "workflow.agent.addConnectionModal.details.linearSuggestedPrompt.prdToProject",
                        defaultMessage: "Use my PRD for the mobile app to create a Linear project"
                    },
                    linearSuggestedPromptWeeklyMilestones: {
                        id: "workflow.agent.addConnectionModal.details.linearSuggestedPrompt.weeklyMilestones",
                        defaultMessage: "Give me a summary of this week’s milestones and blockers"
                    },
                    linearSuggestedPromptTasksNeedDocs: {
                        id: "workflow.agent.addConnectionModal.details.linearSuggestedPrompt.tasksNeedDocs",
                        defaultMessage: "Pull all Linear tasks that need documentation"
                    },
                    amplitudeOverview: {
                        id: "workflow.agent.addConnectionModal.details.amplitudeOverview",
                        defaultMessage: "Connect your agent to Amplitude MCP to search and analyze product data, experiments, and user behavior in Notion."
                    },
                    amplitudeUseCaseFormattedReports: {
                        id: "workflow.agent.addConnectionModal.details.amplitudeUseCase.formattedReports",
                        defaultMessage: "Generate streamlined recurring analytics reports"
                    },
                    amplitudeUseCaseTrackExperiments: {
                        id: "workflow.agent.addConnectionModal.details.amplitudeUseCase.trackExperiments",
                        defaultMessage: "Track A/B tests and experiments and share findings"
                    },
                    amplitudeUseCasePullAnalytics: {
                        id: "workflow.agent.addConnectionModal.details.amplitudeUseCase.pullAnalytics",
                        defaultMessage: "Pull product analytics to inform marketing copy and plan"
                    },
                    amplitudeSuggestedPromptMonthlyExecutiveSummary: {
                        id: "workflow.agent.addConnectionModal.details.amplitudeSuggestedPrompt.monthlyExecutiveSummary",
                        defaultMessage: "Create a monthly executive summary showing key metrics"
                    },
                    amplitudeSuggestedPromptOnboardingStatus: {
                        id: "workflow.agent.addConnectionModal.details.amplitudeSuggestedPrompt.onboardingStatus",
                        defaultMessage: "What’s the current status of the onboarding experiment?"
                    },
                    amplitudeSuggestedPromptCreateExperiment: {
                        id: "workflow.agent.addConnectionModal.details.amplitudeSuggestedPrompt.createExperiment",
                        defaultMessage: "Create a new experiment, set up tracking in our database"
                    },
                    amplitudeSuggestedPromptCreateCohorts: {
                        id: "workflow.agent.addConnectionModal.details.amplitudeSuggestedPrompt.createCohorts",
                        defaultMessage: "Create cohorts for each acquisition channel"
                    },
                    attioOverview: {
                        id: "workflow.agent.addConnectionModal.details.attioOverview",
                        defaultMessage: "Connect your agent to Attio MCP to search and update CRM records and activities like calls, notes, emails, and tasks."
                    },
                    attioUseCaseCreateUpdateDeals: {
                        id: "workflow.agent.addConnectionModal.details.attioUseCase.createUpdateDeals",
                        defaultMessage: "Create and update Attio deals, notes, and tasks"
                    },
                    attioUseCaseSearchCallRecordings: {
                        id: "workflow.agent.addConnectionModal.details.attioUseCase.searchCallRecordings",
                        defaultMessage: "Search call recordings, transcripts and meeting notes"
                    },
                    attioUseCaseTrackEngagement: {
                        id: "workflow.agent.addConnectionModal.details.attioUseCase.trackEngagement",
                        defaultMessage: "Track engagement with customers and prospects"
                    },
                    attioSuggestedPromptUpdateDeal: {
                        id: "workflow.agent.addConnectionModal.details.attioSuggestedPrompt.updateDeal",
                        defaultMessage: "Update the Acme deal based on today’s meeting notes"
                    },
                    attioSuggestedPromptSummarizeFeedback: {
                        id: "workflow.agent.addConnectionModal.details.attioSuggestedPrompt.summarizeFeedback",
                        defaultMessage: "Summarize feedback mentioning pricing concerns"
                    },
                    attioSuggestedPromptReportInteractions: {
                        id: "workflow.agent.addConnectionModal.details.attioSuggestedPrompt.reportInteractions",
                        defaultMessage: "Create a report of our interactions with Lumi Labs"
                    },
                    clayOverview: {
                        id: "workflow.agent.addConnectionModal.details.clayOverview",
                        defaultMessage: "Connect your agent to Clay MCP to transform your account research, prospecting and outreach workflows."
                    },
                    clayUseCaseResearchProspecting: {
                        id: "workflow.agent.addConnectionModal.details.clayUseCase.researchProspecting",
                        defaultMessage: "Run end-to-end account research and prospecting"
                    },
                    clayUseCaseEnrichProspects: {
                        id: "workflow.agent.addConnectionModal.details.clayUseCase.enrichProspects",
                        defaultMessage: "Enrich prospects with work history and tech stack"
                    },
                    clayUseCaseDraftEmails: {
                        id: "workflow.agent.addConnectionModal.details.clayUseCase.draftEmails",
                        defaultMessage: "Draft personalized emails using account context"
                    },
                    claySuggestedPromptAccountReport: {
                        id: "workflow.agent.addConnectionModal.details.claySuggestedPrompt.accountReport",
                        defaultMessage: "Create a report on Acme Corp’s priorities and recent launches"
                    },
                    claySuggestedPromptPopulateDatabase: {
                        id: "workflow.agent.addConnectionModal.details.claySuggestedPrompt.populateDatabase",
                        defaultMessage: "Populate my database with decision maker names and contact info"
                    },
                    claySuggestedPromptDraftOutreach: {
                        id: "workflow.agent.addConnectionModal.details.claySuggestedPrompt.draftOutreach",
                        defaultMessage: "Draft outreach emails to all founders in the databas"
                    },
                    hubspotOverview: {
                        id: "workflow.agent.addConnectionModal.details.hubspotOverview",
                        defaultMessage: "Connect your agent to HubSpot MCP to contextualize your sales processes with HubSpot contacts, companies, or deals."
                    },
                    hubspotUseCasePipelineReporting: {
                        id: "workflow.agent.addConnectionModal.details.hubspotUseCase.pipelineReporting",
                        defaultMessage: "Automate sales pipeline reporting"
                    },
                    hubspotUseCaseSyncMeetingNotes: {
                        id: "workflow.agent.addConnectionModal.details.hubspotUseCase.syncMeetingNotes",
                        defaultMessage: "Enrich meeting notes with HubSpot records"
                    },
                    hubspotUseCaseQueryDeals: {
                        id: "workflow.agent.addConnectionModal.details.hubspotUseCase.queryDeals",
                        defaultMessage: "Query the latest deal status by stage, value, or date"
                    },
                    hubspotSuggestedPromptWeeklySalesSummary: {
                        id: "workflow.agent.addConnectionModal.details.hubspotSuggestedPrompt.weeklySalesSummary",
                        defaultMessage: "Generate this week’s enterprise sales summary"
                    },
                    hubspotSuggestedPromptDealsOver50k: {
                        id: "workflow.agent.addConnectionModal.details.hubspotSuggestedPrompt.dealsOver50k",
                        defaultMessage: "Pull all deals over $50K that closed this month"
                    },
                    hubspotSuggestedPromptAssociateDealContact: {
                        id: "workflow.agent.addConnectionModal.details.hubspotSuggestedPrompt.associateDealContact",
                        defaultMessage: "Associate this deal with the primary contact in HubSpot"
                    },
                    discordOverview: {
                        id: "workflow.agent.addConnectionModal.details.discordOverview",
                        defaultMessage: "Connect your agent to Discord so it can send messages, react to messages, and search across your server’s channels."
                    },
                    discordCapabilitySendMessages: {
                        id: "workflow.agent.addConnectionModal.details.discordCapability.sendMessages",
                        defaultMessage: "Send messages to channels"
                    },
                    discordCapabilityUpdateMessages: {
                        id: "workflow.agent.addConnectionModal.details.discordCapability.updateMessages",
                        defaultMessage: "Update messages sent by the bot"
                    },
                    discordCapabilityReactWithEmoji: {
                        id: "workflow.agent.addConnectionModal.details.discordCapability.reactWithEmoji",
                        defaultMessage: "React to messages with emoji"
                    },
                    discordCapabilitySearchDiscord: {
                        id: "workflow.agent.addConnectionModal.details.discordCapability.searchDiscord",
                        defaultMessage: "Search information in Discord"
                    },
                    slackOverview: {
                        id: "workflow.agent.addConnectionModal.details.slackOverview",
                        defaultMessage: "Connect your agent to Slack so it can read, respond to, and take action on messages across your team’s channels."
                    },
                    slackCapabilityReadSendReply: {
                        id: "workflow.agent.addConnectionModal.details.slackCapability.readSendReply",
                        defaultMessage: "Read, send, and reply to messages"
                    },
                    slackCapabilityReactWithEmoji: {
                        id: "workflow.agent.addConnectionModal.details.slackCapability.reactWithEmoji",
                        defaultMessage: "React to messages with emoji"
                    },
                    slackCapabilityRespondToMentions: {
                        id: "workflow.agent.addConnectionModal.details.slackCapability.respondToMentions",
                        defaultMessage: "Respond to direct mentions"
                    },
                    slackCapabilitySearchSlack: {
                        id: "workflow.agent.addConnectionModal.details.slackCapability.searchSlack",
                        defaultMessage: "Search information in Slack"
                    },
                    slackTriggerMessagePosted: {
                        id: "workflow.agent.addConnectionModal.details.slackTrigger.messagePosted",
                        defaultMessage: "Message posted to Slack channel"
                    },
                    slackTriggerReactionAdded: {
                        id: "workflow.agent.addConnectionModal.details.slackTrigger.reactionAdded",
                        defaultMessage: "Emoji reaction added to a message"
                    },
                    slackTriggerAgentMentioned: {
                        id: "workflow.agent.addConnectionModal.details.slackTrigger.agentMentioned",
                        defaultMessage: "Agent mentioned in message"
                    },
                    salesforceOverview: {
                        id: "workflow.agent.addConnectionModal.details.salesforceOverview",
                        defaultMessage: "Connect your agent to Salesforce so it can search your CRM, look up accounts and contacts, and answer questions about your pipeline—using only the data the connected user can access."
                    },
                    salesforceCapabilitySearch: {
                        id: "workflow.agent.addConnectionModal.details.salesforceCapability.search",
                        defaultMessage: "Search your Salesforce data in plain language"
                    },
                    salesforceCapabilitySoqlQuery: {
                        id: "workflow.agent.addConnectionModal.details.salesforceCapability.soqlQuery",
                        defaultMessage: "Query accounts, contacts, opportunities, and more"
                    },
                    salesforceCapabilityLoadRecord: {
                        id: "workflow.agent.addConnectionModal.details.salesforceCapability.loadRecord",
                        defaultMessage: "Pull up full record details"
                    },
                    salesforceCapabilityFindUsers: {
                        id: "workflow.agent.addConnectionModal.details.salesforceCapability.findUsers",
                        defaultMessage: "Look up users by name or email"
                    },
                    salesforceCapabilityGetSample: {
                        id: "workflow.agent.addConnectionModal.details.salesforceCapability.getSample",
                        defaultMessage: "Browse object types and sample data"
                    },
                    salesforceSuggestedPromptFindAccount: {
                        id: "workflow.agent.addConnectionModal.details.salesforceSuggestedPrompt.findAccount",
                        defaultMessage: "Find the Acme Corp account and summarize recent activity"
                    },
                    salesforceSuggestedPromptRunReport: {
                        id: "workflow.agent.addConnectionModal.details.salesforceSuggestedPrompt.runReport",
                        defaultMessage: "What are our open opportunities this quarter?"
                    },
                    salesforceSuggestedPromptFindUser: {
                        id: "workflow.agent.addConnectionModal.details.salesforceSuggestedPrompt.findUser",
                        defaultMessage: "Who owns the Enterprise deal?"
                    },
                    wizOverview: {
                        id: "workflow.agent.addConnectionModal.details.wizOverview",
                        defaultMessage: "Connect your agent to Wiz MCP to investigate cloud security issues and remediate vulnerabilities."
                    },
                    wizUseCaseCloudInventory: {
                        id: "workflow.agent.addConnectionModal.details.wizUseCase.cloudInventory",
                        defaultMessage: "Query cloud inventory and security issues"
                    },
                    wizUseCaseInvestigateThreats: {
                        id: "workflow.agent.addConnectionModal.details.wizUseCase.investigateThreats",
                        defaultMessage: "Investigate threats and assess blast radius"
                    },
                    wizUseCaseAnalyzeVulnerabilities: {
                        id: "workflow.agent.addConnectionModal.details.wizUseCase.analyzeVulnerabilities",
                        defaultMessage: "Analyze code vulnerabilities"
                    },
                    wizUseCaseGeneratePr: {
                        id: "workflow.agent.addConnectionModal.details.wizUseCase.generatePr",
                        defaultMessage: "Generate remediation pull requests"
                    },
                    wizSuggestedPromptCriticalIssues: {
                        id: "workflow.agent.addConnectionModal.details.wizSuggestedPrompt.criticalIssues",
                        defaultMessage: "What critical issues exist in production?"
                    },
                    wizSuggestedPromptPublicS3: {
                        id: "workflow.agent.addConnectionModal.details.wizSuggestedPrompt.publicS3",
                        defaultMessage: "Find all public S3 buckets with sensitive data"
                    },
                    wizSuggestedPromptCreatePr: {
                        id: "workflow.agent.addConnectionModal.details.wizSuggestedPrompt.createPr",
                        defaultMessage: "Create a PR to fix this vulnerability"
                    },
                    rampOverview: {
                        id: "workflow.agent.addConnectionModal.details.rampOverview",
                        defaultMessage: "Connect your agent to Ramp MCP to analyze spend data and track expenses across your organization."
                    },
                    rampUseCaseAnalyzeSpending: {
                        id: "workflow.agent.addConnectionModal.details.rampUseCase.analyzeSpending",
                        defaultMessage: "Analyze spending by department or vendor"
                    },
                    rampUseCaseTrackTransactions: {
                        id: "workflow.agent.addConnectionModal.details.rampUseCase.trackTransactions",
                        defaultMessage: "Track transactions and reimbursements"
                    },
                    rampUseCaseMonitorLimits: {
                        id: "workflow.agent.addConnectionModal.details.rampUseCase.monitorLimits",
                        defaultMessage: "Monitor spend limits across teams"
                    },
                    rampUseCaseReviewCards: {
                        id: "workflow.agent.addConnectionModal.details.rampUseCase.reviewCards",
                        defaultMessage: "Review corporate card usage"
                    },
                    rampSuggestedPromptSoftwareSpend: {
                        id: "workflow.agent.addConnectionModal.details.rampSuggestedPrompt.softwareSpend",
                        defaultMessage: "What did we spend on software last quarter?"
                    },
                    rampSuggestedPromptTopVendors: {
                        id: "workflow.agent.addConnectionModal.details.rampSuggestedPrompt.topVendors",
                        defaultMessage: "Show me our top vendors by spend"
                    },
                    rampSuggestedPromptLimits: {
                        id: "workflow.agent.addConnectionModal.details.rampSuggestedPrompt.limits",
                        defaultMessage: "Which teams are closest to their limits?"
                    },
                    canvaOverview: {
                        id: "workflow.agent.addConnectionModal.details.canvaOverview",
                        defaultMessage: "Connect your agent to Canva MCP to generate, search, and export designs directly from your creative workspace."
                    },
                    canvaUseCaseGenerateDesigns: {
                        id: "workflow.agent.addConnectionModal.details.canvaUseCase.generateDesigns",
                        defaultMessage: "Generate designs from text descriptions"
                    },
                    canvaUseCaseSearchDesigns: {
                        id: "workflow.agent.addConnectionModal.details.canvaUseCase.searchDesigns",
                        defaultMessage: "Search existing designs and presentations"
                    },
                    canvaUseCaseOrganizeAssets: {
                        id: "workflow.agent.addConnectionModal.details.canvaUseCase.organizeAssets",
                        defaultMessage: "Organize assets into folders"
                    },
                    canvaSuggestedPromptLinkedInPost: {
                        id: "workflow.agent.addConnectionModal.details.canvaSuggestedPrompt.linkedInPost",
                        defaultMessage: "Create a LinkedIn post announcing our new feature"
                    },
                    canvaSuggestedPromptInstagramStory: {
                        id: "workflow.agent.addConnectionModal.details.canvaSuggestedPrompt.instagramStory",
                        defaultMessage: "Generate an Instagram story for our upcoming sale"
                    },
                    canvaSuggestedPromptSearchCampaigns: {
                        id: "workflow.agent.addConnectionModal.details.canvaSuggestedPrompt.searchCampaigns",
                        defaultMessage: "Search recent campaign designs and put in a database"
                    },
                    stripeOverview: {
                        id: "workflow.agent.addConnectionModal.details.stripeOverview",
                        defaultMessage: "Connect your agent to Stripe MCP to manage payments, customers, and billing operations for your business."
                    },
                    stripeUseCaseCreatePaymentLinks: {
                        id: "workflow.agent.addConnectionModal.details.stripeUseCase.createPaymentLinks",
                        defaultMessage: "Create payment links and invoices"
                    },
                    stripeUseCaseLookupCustomers: {
                        id: "workflow.agent.addConnectionModal.details.stripeUseCase.lookupCustomers",
                        defaultMessage: "Look up customer and subscription data"
                    },
                    stripeUseCaseManageRefunds: {
                        id: "workflow.agent.addConnectionModal.details.stripeUseCase.manageRefunds",
                        defaultMessage: "Process refunds and manage disputes"
                    },
                    stripeUseCaseCreateProducts: {
                        id: "workflow.agent.addConnectionModal.details.stripeUseCase.createProducts",
                        defaultMessage: "Create products and pricing"
                    },
                    stripeSuggestedPromptPaymentLink: {
                        id: "workflow.agent.addConnectionModal.details.stripeSuggestedPrompt.paymentLink",
                        defaultMessage: "Create a payment link for our $99 plan"
                    },
                    stripeSuggestedPromptFailedPayments: {
                        id: "workflow.agent.addConnectionModal.details.stripeSuggestedPrompt.failedPayments",
                        defaultMessage: "Show me failed payments from last week"
                    },
                    stripeSuggestedPromptInvoice: {
                        id: "workflow.agent.addConnectionModal.details.stripeSuggestedPrompt.invoice",
                        defaultMessage: "Generate an invoice for Acme Corp"
                    },
                    sentryOverview: {
                        id: "workflow.agent.addConnectionModal.details.sentryOverview",
                        defaultMessage: "Connect your agent to Sentry MCP to investigate errors, analyze issues, and debug application performance."
                    },
                    sentryUseCaseInvestigateErrors: {
                        id: "workflow.agent.addConnectionModal.details.sentryUseCase.investigateErrors",
                        defaultMessage: "Investigate errors and stack traces"
                    },
                    sentryUseCaseRootCause: {
                        id: "workflow.agent.addConnectionModal.details.sentryUseCase.rootCause",
                        defaultMessage: "Get AI-powered root cause analysis"
                    },
                    sentryUseCaseSearchErrors: {
                        id: "workflow.agent.addConnectionModal.details.sentryUseCase.searchErrors",
                        defaultMessage: "Search errors in specific files"
                    },
                    sentryUseCaseMonitorHealth: {
                        id: "workflow.agent.addConnectionModal.details.sentryUseCase.monitorHealth",
                        defaultMessage: "Monitor project health across teams"
                    },
                    sentrySuggestedPromptCheckoutErrors: {
                        id: "workflow.agent.addConnectionModal.details.sentrySuggestedPrompt.checkoutErrors",
                        defaultMessage: "What’s causing errors on the checkout page?"
                    },
                    sentrySuggestedPromptUseSeer: {
                        id: "workflow.agent.addConnectionModal.details.sentrySuggestedPrompt.useSeer",
                        defaultMessage: "Use Seer to analyze the latest crash"
                    },
                    sentrySuggestedPromptUnresolvedIssues: {
                        id: "workflow.agent.addConnectionModal.details.sentrySuggestedPrompt.unresolvedIssues",
                        defaultMessage: "Show me unresolved issues from this week"
                    },
                    gongOverview: {
                        id: "workflow.agent.addConnectionModal.details.gongOverview",
                        defaultMessage: "Connect your agent to Gong MCP to access call intelligence and revenue insights."
                    },
                    gongUseCaseSurfaceObjections: {
                        id: "workflow.agent.addConnectionModal.details.gongUseCase.surfaceObjections",
                        defaultMessage: "Surface objections, risks, and competitors from call transcripts"
                    },
                    gongUseCaseExtractActionItems: {
                        id: "workflow.agent.addConnectionModal.details.gongUseCase.extractActionItems",
                        defaultMessage: "Extract action items and next steps from conversations"
                    },
                    gongUseCaseBuildAccountBriefs: {
                        id: "workflow.agent.addConnectionModal.details.gongUseCase.buildAccountBriefs",
                        defaultMessage: "Build account briefs with AI strategy insights"
                    },
                    gongSuggestedPromptTopObjections: {
                        id: "workflow.agent.addConnectionModal.details.gongSuggestedPrompt.topObjections",
                        defaultMessage: "What are the top objections raised by Acme Corp?"
                    },
                    gongSuggestedPromptAccountBrief: {
                        id: "workflow.agent.addConnectionModal.details.gongSuggestedPrompt.accountBrief",
                        defaultMessage: "Create an account brief for Lumi Labs"
                    },
                    gongSuggestedPromptTomorrowsCalls: {
                        id: "workflow.agent.addConnectionModal.details.gongSuggestedPrompt.tomorrowsCalls",
                        defaultMessage: "What should I know before tomorrow’s customer calls?"
                    },
                    miroOverview: {
                        id: "workflow.agent.addConnectionModal.details.miroOverview",
                        defaultMessage: "Connect your agent to Miro MCP to create visuals and read boards directly from Notion."
                    },
                    miroUseCaseBoardToNotion: {
                        id: "workflow.agent.addConnectionModal.details.miroUseCase.boardToNotion",
                        defaultMessage: "Turn Miro board content into Notion docs"
                    },
                    miroUseCaseGenerateDiagrams: {
                        id: "workflow.agent.addConnectionModal.details.miroUseCase.generateDiagrams",
                        defaultMessage: "Generate diagrams from PRDs"
                    },
                    miroUseCaseVisualDocs: {
                        id: "workflow.agent.addConnectionModal.details.miroUseCase.visualDocs",
                        defaultMessage: "Create visual documentation from technical specs"
                    },
                    miroSuggestedPromptArchitectureDiagram: {
                        id: "workflow.agent.addConnectionModal.details.miroSuggestedPrompt.architectureDiagram",
                        defaultMessage: "Generate a system architecture diagram based on this PRD"
                    },
                    miroSuggestedPromptFlowchart: {
                        id: "workflow.agent.addConnectionModal.details.miroSuggestedPrompt.flowchart",
                        defaultMessage: "Visualize this technical spec as a flowchart on Miro"
                    },
                    miroSuggestedPromptRoadmap: {
                        id: "workflow.agent.addConnectionModal.details.miroSuggestedPrompt.roadmap",
                        defaultMessage: "Turn brainstorm session notes into a structured roadmap"
                    },
                    n8nOverview: {
                        id: "workflow.agent.addConnectionModal.details.n8nOverview",
                        defaultMessage: "Connect your agent to n8n MCP to automate workflows across your entire stack."
                    },
                    n8nUseCaseSearchWorkflows: {
                        id: "workflow.agent.addConnectionModal.details.n8nUseCase.searchWorkflows",
                        defaultMessage: "Search for MCP-enabled n8n workflows"
                    },
                    n8nUseCaseTriggerWorkflows: {
                        id: "workflow.agent.addConnectionModal.details.n8nUseCase.triggerWorkflows",
                        defaultMessage: "Trigger and run exposed workflows"
                    },
                    n8nUseCaseRetrieveMetadata: {
                        id: "workflow.agent.addConnectionModal.details.n8nUseCase.retrieveMetadata",
                        defaultMessage: "Retrieve workflow metadata and trigger information"
                    },
                    n8nSuggestedPromptSheetsStripe: {
                        id: "workflow.agent.addConnectionModal.details.n8nSuggestedPrompt.sheetsStripe",
                        defaultMessage: "Pull my Google Sheets and Stripe data into one view"
                    },
                    n8nSuggestedPromptNotionStatusChange: {
                        id: "workflow.agent.addConnectionModal.details.n8nSuggestedPrompt.notionStatusChange",
                        defaultMessage: "Run my n8n workflow whenever the Notion page status changes"
                    },
                    n8nSuggestedPromptEmailAutomation: {
                        id: "workflow.agent.addConnectionModal.details.n8nSuggestedPrompt.emailAutomation",
                        defaultMessage: "Trigger email automation workflow for new CRM database entries"
                    },
                    snowflakeOverview: {
                        id: "workflow.agent.addConnectionModal.details.snowflakeOverview",
                        defaultMessage: "Query data, run analytics, and manage your data warehouse."
                    },
                    snowflakeUseCaseQueryData: {
                        id: "workflow.agent.addConnectionModal.details.snowflakeUseCase.queryData",
                        defaultMessage: "Query data using natural language"
                    },
                    snowflakeUseCaseSearchDocuments: {
                        id: "workflow.agent.addConnectionModal.details.snowflakeUseCase.searchDocuments",
                        defaultMessage: "Search unstructured documents"
                    },
                    snowflakeUseCaseAnalyzeData: {
                        id: "workflow.agent.addConnectionModal.details.snowflakeUseCase.analyzeData",
                        defaultMessage: "Analyze data with semantic models"
                    },
                    snowflakeUseCaseManageDatabases: {
                        id: "workflow.agent.addConnectionModal.details.snowflakeUseCase.manageDatabases",
                        defaultMessage: "Manage databases and warehouses"
                    },
                    snowflakeSuggestedPromptTopSelling: {
                        id: "workflow.agent.addConnectionModal.details.snowflakeSuggestedPrompt.topSelling",
                        defaultMessage: "What were our top-selling products last month?"
                    },
                    snowflakeSuggestedPromptSupportTickets: {
                        id: "workflow.agent.addConnectionModal.details.snowflakeSuggestedPrompt.supportTickets",
                        defaultMessage: "Search support tickets for shipping complaints"
                    },
                    snowflakeSuggestedPromptRevenueByRegion: {
                        id: "workflow.agent.addConnectionModal.details.snowflakeSuggestedPrompt.revenueByRegion",
                        defaultMessage: "Show me revenue by region"
                    },
                    securityOverview: {
                        id: "workflow.agent.addConnectionModal.details.securityOverview",
                        defaultMessage: "Detect threats, search audit logs, and monitor agent security across your workspace."
                    },
                    securityCapabilitySearchAuditLogs: {
                        id: "workflow.agent.addConnectionModal.details.securityCapability.searchAuditLogs",
                        defaultMessage: "Search security audit logs"
                    },
                    securityCapabilityGetAuditLogEntry: {
                        id: "workflow.agent.addConnectionModal.details.securityCapability.getAuditLogEntry",
                        defaultMessage: "View detailed audit log entries"
                    },
                    securityTriggerThreatDetected: {
                        id: "workflow.agent.addConnectionModal.details.securityTrigger.threatDetected",
                        defaultMessage: "When a security threat is detected"
                    },
                    securityUseCaseReviewThreats: {
                        id: "workflow.agent.addConnectionModal.details.securityUseCase.reviewThreats",
                        defaultMessage: "Review and triage security threats across agents"
                    },
                    securityUseCaseAuditCompliance: {
                        id: "workflow.agent.addConnectionModal.details.securityUseCase.auditCompliance",
                        defaultMessage: "Audit agent activity for compliance reviews"
                    },
                    securityUseCaseMonitorAgents: {
                        id: "workflow.agent.addConnectionModal.details.securityUseCase.monitorAgents",
                        defaultMessage: "Monitor agent behavior and detect anomalies"
                    }
                }),
                i = {
                    vignetteSrc: s.calendar,
                    overview: o.calendarOverview,
                    sections: [{
                        title: o.capabilitiesTitle,
                        icon: t(971730).checkmarkSmallIcon,
                        items: [o.calendarCapabilityReadCreateUpdateEvents, o.calendarCapabilityFindTimeWithParticipants, o.calendarCapabilityOptimizeSchedule, o.calendarCapabilityProvideOverview, o.calendarCapabilityManageMultipleAccounts]
                    }, {
                        title: o.triggersTitle,
                        icon: t(449837).f,
                        items: [o.calendarTriggerEventCreated, o.calendarTriggerEventUpdated, o.calendarTriggerEventCanceled]
                    }]
                },
                n = {
                    vignetteSrc: s.mail,
                    overview: o.mailOverview,
                    sections: [{
                        title: o.capabilitiesTitle,
                        icon: t(971730).checkmarkSmallIcon,
                        items: [o.mailCapabilityReadDraftReply, o.mailCapabilitySearchInboxes, o.mailCapabilityPrioritizeOrganize, o.mailCapabilityExtractConnectNotion, o.mailCapabilityManageMultipleAddresses]
                    }, {
                        title: o.triggersTitle,
                        icon: t(449837).f,
                        items: [o.mailTriggerEmailsReceived, o.mailTriggerEmailsSent, o.mailTriggerEmailsReceivedOrSent, o.mailTriggerLabelApplied]
                    }]
                },
                r = {
                    vignetteSrc: s.figma,
                    overview: o.figmaOverview,
                    sections: [{
                        title: o.useCasesTitle,
                        icon: t(971730).checkmarkSmallIcon,
                        items: [o.figmaUseCaseDocsToFigJam, o.figmaUseCaseOrganizeFigJamToNotion, o.figmaUseCaseTransformPrds]
                    }, {
                        title: o.suggestedPromptsTitle,
                        icon: t(534965).n,
                        italic: !0,
                        items: [o.figmaSuggestedPromptFlowchart, o.figmaSuggestedPromptArchitectureDiagram, o.figmaSuggestedPromptFigJamStickies]
                    }]
                },
                d = {
                    vignetteSrc: s.github,
                    overview: o.githubOverview,
                    sections: [{
                        title: o.useCasesTitle,
                        icon: t(971730).checkmarkSmallIcon,
                        items: [o.githubUseCaseTrackPrs, o.githubUseCaseCreateIssuesFromAlerts, o.githubUseCaseWeeklySummaries, o.githubUseCaseUpdateCommentPrs]
                    }, {
                        title: o.suggestedPromptsTitle,
                        icon: t(534965).n,
                        italic: !0,
                        items: [o.githubSuggestedPromptCreateIssueFromTask, o.githubSuggestedPromptSummarizeOpenPrs, o.githubSuggestedPromptMonitorSecretScanning, o.githubSuggestedPromptPostStatusUpdate]
                    }]
                },
                l = {
                    vignetteSrc: s.cursor,
                    overview: o.cursorOverview,
                    sections: [{
                        title: o.useCasesTitle,
                        icon: t(971730).checkmarkSmallIcon,
                        items: [o.cursorUseCaseCreatePrsFromNotion, o.cursorUseCaseMentionAgentCreatePrs, o.cursorUseCaseTrackProgressAsync]
                    }, {
                        title: o.suggestedPromptsTitle,
                        icon: t(534965).n,
                        italic: !0,
                        items: [o.cursorSuggestedPromptCreatePrFromSpec, o.cursorSuggestedPromptStartBackground, o.cursorSuggestedPromptFixBugUpdateTask]
                    }]
                },
                g = {
                    overview: o.boxyOverview,
                    sections: [{
                        title: o.useCasesTitle,
                        icon: t(971730).checkmarkSmallIcon,
                        items: [o.boxyUseCaseCreateBoxForTask, o.boxyUseCaseStartThreadForImplementation, o.boxyUseCaseContinueExistingThread]
                    }, {
                        title: o.suggestedPromptsTitle,
                        icon: t(534965).n,
                        italic: !0,
                        items: [o.boxySuggestedPromptCreateBox, o.boxySuggestedPromptCheckBoxStatus, o.boxySuggestedPromptContinueThread]
                    }]
                },
                c = {
                    vignetteSrc: s.hex,
                    sections: []
                },
                u = {
                    vignetteSrc: s.intercom,
                    overview: o.intercomOverview,
                    sections: [{
                        title: o.useCasesTitle,
                        icon: t(971730).checkmarkSmallIcon,
                        items: [o.intercomUseCaseConvertConversations, o.intercomUseCaseIdentifyAtRisk, o.intercomUseCaseCollectCommonQuestions]
                    }, {
                        title: o.suggestedPromptsTitle,
                        icon: t(534965).n,
                        italic: !0,
                        items: [o.intercomSuggestedPromptBuildFaq, o.intercomSuggestedPromptReviewPriority, o.intercomSuggestedPromptCustomerHealth]
                    }]
                },
                m = {
                    vignetteSrc: s.linear,
                    overview: o.linearOverview,
                    sections: [{
                        title: o.useCasesTitle,
                        icon: t(971730).checkmarkSmallIcon,
                        items: [o.linearUseCasePrdsToProjects, o.linearUseCaseProgressSummaries, o.linearUseCaseGenerateIssues]
                    }, {
                        title: o.suggestedPromptsTitle,
                        icon: t(534965).n,
                        italic: !0,
                        items: [o.linearSuggestedPromptPrdToProject, o.linearSuggestedPromptWeeklyMilestones, o.linearSuggestedPromptTasksNeedDocs]
                    }]
                },
                p = {
                    vignetteSrc: s.amplitude,
                    overview: o.amplitudeOverview,
                    sections: [{
                        title: o.useCasesTitle,
                        icon: t(971730).checkmarkSmallIcon,
                        items: [o.amplitudeUseCaseFormattedReports, o.amplitudeUseCaseTrackExperiments, o.amplitudeUseCasePullAnalytics]
                    }, {
                        title: o.suggestedPromptsTitle,
                        icon: t(534965).n,
                        italic: !0,
                        items: [o.amplitudeSuggestedPromptMonthlyExecutiveSummary, o.amplitudeSuggestedPromptOnboardingStatus, o.amplitudeSuggestedPromptCreateExperiment, o.amplitudeSuggestedPromptCreateCohorts]
                    }]
                },
                C = {
                    vignetteSrc: s.attio,
                    overview: o.attioOverview,
                    sections: [{
                        title: o.useCasesTitle,
                        icon: t(971730).checkmarkSmallIcon,
                        items: [o.attioUseCaseCreateUpdateDeals, o.attioUseCaseSearchCallRecordings, o.attioUseCaseTrackEngagement]
                    }, {
                        title: o.suggestedPromptsTitle,
                        icon: t(534965).n,
                        italic: !0,
                        items: [o.attioSuggestedPromptUpdateDeal, o.attioSuggestedPromptSummarizeFeedback, o.attioSuggestedPromptReportInteractions]
                    }]
                },
                w = {
                    vignetteSrc: s.clay,
                    overview: o.clayOverview,
                    sections: [{
                        title: o.useCasesTitle,
                        icon: t(971730).checkmarkSmallIcon,
                        items: [o.clayUseCaseResearchProspecting, o.clayUseCaseEnrichProspects, o.clayUseCaseDraftEmails]
                    }, {
                        title: o.suggestedPromptsTitle,
                        icon: t(534965).n,
                        italic: !0,
                        items: [o.claySuggestedPromptAccountReport, o.claySuggestedPromptPopulateDatabase, o.claySuggestedPromptDraftOutreach]
                    }]
                },
                f = {
                    vignetteSrc: s.hubspot,
                    overview: o.hubspotOverview,
                    sections: [{
                        title: o.useCasesTitle,
                        icon: t(971730).checkmarkSmallIcon,
                        items: [o.hubspotUseCasePipelineReporting, o.hubspotUseCaseSyncMeetingNotes, o.hubspotUseCaseQueryDeals]
                    }, {
                        title: o.suggestedPromptsTitle,
                        icon: t(534965).n,
                        italic: !0,
                        items: [o.hubspotSuggestedPromptWeeklySalesSummary, o.hubspotSuggestedPromptDealsOver50k, o.hubspotSuggestedPromptAssociateDealContact]
                    }]
                },
                M = {
                    vignetteSrc: s.wiz,
                    overview: o.wizOverview,
                    sections: [{
                        title: o.useCasesTitle,
                        icon: t(971730).checkmarkSmallIcon,
                        items: [o.wizUseCaseCloudInventory, o.wizUseCaseInvestigateThreats, o.wizUseCaseAnalyzeVulnerabilities, o.wizUseCaseGeneratePr]
                    }, {
                        title: o.suggestedPromptsTitle,
                        icon: t(534965).n,
                        italic: !0,
                        items: [o.wizSuggestedPromptCriticalIssues, o.wizSuggestedPromptPublicS3, o.wizSuggestedPromptCreatePr]
                    }]
                },
                k = {
                    vignetteSrc: s.ramp,
                    overview: o.rampOverview,
                    sections: [{
                        title: o.useCasesTitle,
                        icon: t(971730).checkmarkSmallIcon,
                        items: [o.rampUseCaseAnalyzeSpending, o.rampUseCaseTrackTransactions, o.rampUseCaseMonitorLimits, o.rampUseCaseReviewCards]
                    }, {
                        title: o.suggestedPromptsTitle,
                        icon: t(534965).n,
                        italic: !0,
                        items: [o.rampSuggestedPromptSoftwareSpend, o.rampSuggestedPromptTopVendors, o.rampSuggestedPromptLimits]
                    }]
                },
                S = {
                    vignetteSrc: s.canva,
                    overview: o.canvaOverview,
                    sections: [{
                        title: o.useCasesTitle,
                        icon: t(971730).checkmarkSmallIcon,
                        items: [o.canvaUseCaseGenerateDesigns, o.canvaUseCaseSearchDesigns, o.canvaUseCaseOrganizeAssets]
                    }, {
                        title: o.suggestedPromptsTitle,
                        icon: t(534965).n,
                        italic: !0,
                        items: [o.canvaSuggestedPromptLinkedInPost, o.canvaSuggestedPromptInstagramStory, o.canvaSuggestedPromptSearchCampaigns]
                    }]
                },
                y = {
                    vignetteSrc: s.sentry,
                    overview: o.sentryOverview,
                    sections: [{
                        title: o.useCasesTitle,
                        icon: t(971730).checkmarkSmallIcon,
                        items: [o.sentryUseCaseInvestigateErrors, o.sentryUseCaseRootCause, o.sentryUseCaseSearchErrors, o.sentryUseCaseMonitorHealth]
                    }, {
                        title: o.suggestedPromptsTitle,
                        icon: t(534965).n,
                        italic: !0,
                        items: [o.sentrySuggestedPromptCheckoutErrors, o.sentrySuggestedPromptUseSeer, o.sentrySuggestedPromptUnresolvedIssues]
                    }]
                },
                v = {
                    vignetteSrc: s.stripe,
                    overview: o.stripeOverview,
                    sections: [{
                        title: o.useCasesTitle,
                        icon: t(971730).checkmarkSmallIcon,
                        items: [o.stripeUseCaseCreatePaymentLinks, o.stripeUseCaseLookupCustomers, o.stripeUseCaseManageRefunds, o.stripeUseCaseCreateProducts]
                    }, {
                        title: o.suggestedPromptsTitle,
                        icon: t(534965).n,
                        italic: !0,
                        items: [o.stripeSuggestedPromptPaymentLink, o.stripeSuggestedPromptFailedPayments, o.stripeSuggestedPromptInvoice]
                    }]
                },
                h = {
                    vignetteSrc: s.gong,
                    overview: o.gongOverview,
                    sections: [{
                        title: o.useCasesTitle,
                        icon: t(971730).checkmarkSmallIcon,
                        items: [o.gongUseCaseSurfaceObjections, o.gongUseCaseExtractActionItems, o.gongUseCaseBuildAccountBriefs]
                    }, {
                        title: o.suggestedPromptsTitle,
                        icon: t(534965).n,
                        italic: !0,
                        items: [o.gongSuggestedPromptTopObjections, o.gongSuggestedPromptAccountBrief, o.gongSuggestedPromptTomorrowsCalls]
                    }]
                },
                P = {
                    vignetteSrc: s.miro,
                    overview: o.miroOverview,
                    sections: [{
                        title: o.useCasesTitle,
                        icon: t(971730).checkmarkSmallIcon,
                        items: [o.miroUseCaseBoardToNotion, o.miroUseCaseGenerateDiagrams, o.miroUseCaseVisualDocs]
                    }, {
                        title: o.suggestedPromptsTitle,
                        icon: t(534965).n,
                        italic: !0,
                        items: [o.miroSuggestedPromptArchitectureDiagram, o.miroSuggestedPromptFlowchart, o.miroSuggestedPromptRoadmap]
                    }]
                },
                b = {
                    vignetteSrc: s.n8n,
                    overview: o.n8nOverview,
                    sections: [{
                        title: o.useCasesTitle,
                        icon: t(971730).checkmarkSmallIcon,
                        items: [o.n8nUseCaseSearchWorkflows, o.n8nUseCaseTriggerWorkflows, o.n8nUseCaseRetrieveMetadata]
                    }, {
                        title: o.suggestedPromptsTitle,
                        icon: t(534965).n,
                        italic: !0,
                        items: [o.n8nSuggestedPromptSheetsStripe, o.n8nSuggestedPromptNotionStatusChange, o.n8nSuggestedPromptEmailAutomation]
                    }]
                },
                U = {
                    vignetteSrc: s.snowflake,
                    overview: o.snowflakeOverview,
                    sections: [{
                        title: o.useCasesTitle,
                        icon: t(971730).checkmarkSmallIcon,
                        items: [o.snowflakeUseCaseQueryData, o.snowflakeUseCaseSearchDocuments, o.snowflakeUseCaseAnalyzeData, o.snowflakeUseCaseManageDatabases]
                    }, {
                        title: o.suggestedPromptsTitle,
                        icon: t(534965).n,
                        italic: !0,
                        items: [o.snowflakeSuggestedPromptTopSelling, o.snowflakeSuggestedPromptSupportTickets, o.snowflakeSuggestedPromptRevenueByRegion]
                    }]
                },
                T = {
                    vignetteSrc: s.salesforce,
                    overview: o.salesforceOverview,
                    sections: [{
                        title: o.capabilitiesTitle,
                        icon: t(971730).checkmarkSmallIcon,
                        items: [o.salesforceCapabilitySearch, o.salesforceCapabilitySoqlQuery, o.salesforceCapabilityLoadRecord, o.salesforceCapabilityFindUsers, o.salesforceCapabilityGetSample]
                    }, {
                        title: o.suggestedPromptsTitle,
                        icon: t(534965).n,
                        italic: !0,
                        items: [o.salesforceSuggestedPromptFindAccount, o.salesforceSuggestedPromptRunReport, o.salesforceSuggestedPromptFindUser]
                    }]
                },
                A = {
                    "app.hex.tech": c,
                    "api.githubcopilot.com": d,
                    "mcp.amplitude.com": p,
                    "mcp.eu.amplitude.com": p,
                    "mcp.attio.com": C,
                    "mcp.canva.com": S,
                    "mcp.clay.com": w,
                    "mcp.figma.com": r,
                    "mcp.hubspot.com": f,
                    "mcp.intercom.com": u,
                    "mcp.app.wiz.io": M,
                    "mcp.linear.app": m,
                    "api.gong.io": h,
                    "mcp.miro.com": P,
                    "mcp.ramp.com": k,
                    "mcp.sentry.dev": y,
                    "mcp.stripe.com": v,
                    "ramp-mcp-remote.ramp.com": k,
                    "demo-mcp.ramp.com": k
                },
                O = {
                    calendar: i,
                    boxy: g,
                    cursor: l,
                    discord: {
                        overview: o.discordOverview,
                        sections: [{
                            title: o.capabilitiesTitle,
                            icon: t(971730).checkmarkSmallIcon,
                            items: [o.discordCapabilitySendMessages, o.discordCapabilityUpdateMessages, o.discordCapabilityReactWithEmoji, o.discordCapabilitySearchDiscord]
                        }]
                    },
                    github: d,
                    linear: m,
                    mail: n,
                    security: {
                        overview: o.securityOverview,
                        sections: [{
                            title: o.capabilitiesTitle,
                            icon: t(971730).checkmarkSmallIcon,
                            items: [o.securityCapabilitySearchAuditLogs, o.securityCapabilityGetAuditLogEntry]
                        }, {
                            title: o.triggersTitle,
                            icon: t(449837).f,
                            items: [o.securityTriggerThreatDetected]
                        }, {
                            title: o.useCasesTitle,
                            icon: t(534965).n,
                            items: [o.securityUseCaseReviewThreats, o.securityUseCaseAuditCompliance, o.securityUseCaseMonitorAgents]
                        }]
                    },
                    slack: {
                        vignetteSrc: s.slack,
                        overview: o.slackOverview,
                        sections: [{
                            title: o.capabilitiesTitle,
                            icon: t(971730).checkmarkSmallIcon,
                            items: [o.slackCapabilityReadSendReply, o.slackCapabilityReactWithEmoji, o.slackCapabilityRespondToMentions, o.slackCapabilitySearchSlack]
                        }, {
                            title: o.triggersTitle,
                            icon: t(449837).f,
                            items: [o.slackTriggerMessagePosted, o.slackTriggerReactionAdded, o.slackTriggerAgentMentioned]
                        }]
                    },
                    salesforce: T
                },
                R = {
                    n8n: b,
                    snowflake: U
                };

            function x(e) {
                if ("mcpServer" === e.type) {
                    let a = function(e) {
                            if (e) try {
                                return new URL(e).hostname.toLowerCase()
                            } catch {
                                return
                            }
                        }(e.url),
                        t = a ? A[a] : void 0;
                    if (t) return t;
                    let s = e.name.toLowerCase();
                    return Object.hasOwn(R, s) ? R[s] : void 0
                }
                if ("module" === e.type && e.moduleType) return O[e.moduleType]
            }
        }
    }
]);