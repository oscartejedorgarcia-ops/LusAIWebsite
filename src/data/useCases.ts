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
    shortDescription:
      'Process all document data end to end, transforming hidden internal information into structured, AI-ready insights for downstream workflows.',
    longDescription:
      'This workflow ingests files from multiple channels, validates their format, and analyzes document layout to detect text, tables, images, graphs, and scanned content. It extracts meaningful information and metadata to structure documents for Retrieval-Augmented Generation (RAG) and routes each item to the appropriate team. Teams can add validation rules, audit notes, and escalation triggers without changing core code.',
    imageUrl: '/images/smart-document-processing.svg'
  },
  {
    id: 'support-assist',
    title: 'Support Agent Assist',
    shortDescription: 'Provide response suggestions and context summaries during live support sessions.',
    longDescription:
      'Agent Assist continuously monitors incoming streaming data, reviewing and validating the information in real time. It analyzes each request, identifies potential issues, and processes the data accordingly. When irregularities are detected, the system can flag warnings or classify events as incidents. In those cases, Agent Assist provides contextual insights, relevant policy references, and suggested actions, helping operations employees quickly understand the situation and resolve it efficiently. By combining automated analysis with human oversight, Agent Assist helps reduce response time while ensuring accuracy, compliance, and operational reliability.',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'sales-insights',
    title: 'Customer Care Insights',
    shortDescription: 'Turn call notes into prioritized follow-ups, risks, and opportunity highlights.',
    longDescription:
      'This use case analyzes conversations between operators and clients by transcribing calls and extracting actionable insights from the dialogue. The system evaluates whether the operator followed the defined process or script, assesses how clearly information was communicated, and identifies any open actions that still need to be addressed. It also analyzes client sentiment and conversation dynamics to highlight potential issues, misunderstandings, or opportunities for improvement. These insights help teams improve service quality, ensure compliance with operational procedures, and gain a clearer understanding of customer interactions. The results are delivered in a structured and easy-to-review format, allowing operations and quality teams to quickly identify risks, monitor performance, and follow up on pending actions.',
    imageUrl: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'knowledge-search',
    title: 'Automated Quality Control',
    shortDescription:
      'Using computer vision, technicians can validate installations automatically and improve first-time-right performance.',
    longDescription:
      'Using computer vision, technicians can validate installations automatically, detect quality issues earlier, and ensure installations are first time right. This approach reduces rework, speeds up field operations, and provides consistent quality evidence for compliance and service audits.',
    imageUrl: '/images/automated-quality-control.svg'
  },
  {
    id: 'ops-monitoring',
    title: 'Inventory Management Automation',
    shortDescription: 'Summarize events, anomalies, and likely root causes for operations teams.',
    longDescription:
      'This workflow uses AI to audit and validate inventory data before it is recorded in the system. It analyzes incoming records to verify completeness, consistency, and accuracy, helping prevent incorrect or incomplete information from entering the inventory. The system can also review existing inventory data to detect inconsistencies, missing attributes, or incorrectly tracked items. When issues are identified, it highlights them and suggests corrective actions, helping teams maintain reliable and up-to-date inventory records.',
    imageUrl:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'customer-onboarding',
    title: 'Digital twin',
    shortDescription:
      'Use a digital twin to simulate operational scenarios and evaluate changes before they reach production. Validate strategies, anticipate risks, and optimize performance in a safe, controlled environment.',
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
