export interface UseCase {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
}

export const useCases: UseCase[] = [
  {
    id: 'smart-intake',
    title: 'Smart Document Processing',
    shortDescription: 'Capture and route incoming files to the right business workflow in seconds.',
    longDescription:
      'This workflow receives files from multiple channels, validates formats, extracts key metadata, and routes each item to the right team. Teams can add custom validation rules, audit notes, and escalation triggers without touching core code.',
    imageUrl: '/images/smart-document-processing.svg'
  },
  {
    id: 'support-assist',
    title: 'Support Agent Assist',
    shortDescription: 'Provide response suggestions and context summaries during live support sessions.',
    longDescription:
      'Agent Assist analyzes incoming requests and surfaces response drafts, relevant policy snippets, and historical context. It is designed to reduce response time while keeping human review in control for quality and compliance.',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'sales-insights',
    title: 'Customer Care Insights',
    shortDescription: 'Turn call notes into prioritized follow-ups, risks, and opportunity highlights.',
    longDescription:
      'This use case converts raw call notes into structured action plans. It classifies buyer signals, highlights blockers, and proposes next actions. The output format is intentionally simple so teams can adapt it to CRM pipelines quickly.',
    imageUrl: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'knowledge-search',
    title: 'Automated Quality Control',
    shortDescription:
      'Using computer vision, technicians can validate installations automatically and improve first-time-right performance.',
    longDescription:
      'Using computer vision, technicians can validate installations automatically, detect quality issues earlier, and ensure installations are first time right. This approach reduces rework, speeds up field operations, and provides consistent quality evidence for compliance and service audits.',
    imageUrl: 'https://picsum.photos/seed/knowledge-search/600/400'
  },
  {
    id: 'ops-monitoring',
    title: 'Inventory Management Automation',
    shortDescription: 'Summarize events, anomalies, and likely root causes for operations teams.',
    longDescription:
      'Monitoring Summary ingests event streams and creates readable incident narratives. It groups similar alerts, suggests likely causes, and tracks unresolved items. The structure is optimized for fast handoffs during shift changes.',
    imageUrl: 'https://picsum.photos/seed/ops-monitoring/600/400'
  },
  {
    id: 'customer-onboarding',
    title: 'Customer Onboarding Flow',
    shortDescription: 'Guide new customers through setup milestones with adaptive checklists.',
    longDescription:
      'This onboarding flow personalizes setup steps based on account profile and implementation goals. It gives users progress tracking, contextual tips, and milestone reminders while preserving a clear path for manual intervention when needed.',
    imageUrl: 'https://picsum.photos/seed/customer-onboarding/600/400'
  }
];

export const CONTACT = {
  emailDisplay: 'info@lus-ai.com',
  emailHref: 'mailto:info@lus-ai.com',
  phoneLocal: '651091406',
  phoneFormatted: '+31 651091406'
};
