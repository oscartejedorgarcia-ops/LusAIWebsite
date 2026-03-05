import { landingContent as enLandingContent } from '../content/en';
import { useCases as englishUseCases } from '../data/useCases';
import { Locale, TranslationPack, UIStrings, UseCaseText } from './types';

const englishUI: UIStrings = {
  nav: {
    home: 'Home',
    useCases: 'Use Cases',
    contact: 'Contact',
    language: 'Language',
    languageOptions: {
      en: 'English',
      es: 'Español',
      pt: 'Português'
    }
  },
  home: {
    examples: 'Examples',
    keyDifferentiatorsAria: 'Key differentiators',
    lusAIDeliveryAria: 'LusAI delivery approach',
    useCasesEyebrow: 'Use Cases',
    exploreSolutions: 'Explore Solutions',
    contactEyebrow: 'Contact',
    getInTouch: 'Get In Touch',
    emailLabel: 'Email',
    internationalLabel: 'International'
  },
  useCase: {
    viewDetails: 'View details',
    detailEyebrow: 'Use Case Detail',
    backToUseCases: 'Back to Use Cases',
    notFoundTitle: 'Use case not found',
    notFoundMessage: 'Please return to the use cases section and select a valid card.'
  },
  qualityPreview: {
    ariaLabel: 'Gas meter installation quality checks preview',
    imageAlt: 'Home gas meter installation',
    checksTitle: 'Checks',
    check1: '1. Meter mounted securely - Passed',
    check2: '2. Pipe connections sealed - Passed',
    check3: '3. Leak pressure test - Failed'
  }
};

const spanishUI: UIStrings = {
  nav: {
    home: 'Inicio',
    useCases: 'Casos de Uso',
    contact: 'Contacto',
    language: 'Idioma',
    languageOptions: {
      en: 'Inglés',
      es: 'Español',
      pt: 'Portugués'
    }
  },
  home: {
    examples: 'Ejemplos',
    keyDifferentiatorsAria: 'Diferenciadores clave',
    lusAIDeliveryAria: 'Enfoque de entrega de LusAI',
    useCasesEyebrow: 'Casos de Uso',
    exploreSolutions: 'Explorar Soluciones',
    contactEyebrow: 'Contacto',
    getInTouch: 'Ponte en Contacto',
    emailLabel: 'Correo',
    internationalLabel: 'Internacional'
  },
  useCase: {
    viewDetails: 'Ver detalles',
    detailEyebrow: 'Detalle del Caso de Uso',
    backToUseCases: 'Volver a Casos de Uso',
    notFoundTitle: 'Caso de uso no encontrado',
    notFoundMessage: 'Vuelve a la sección de casos de uso y selecciona una tarjeta válida.'
  },
  qualityPreview: {
    ariaLabel: 'Vista previa de controles de calidad de instalación del contador de gas',
    imageAlt: 'Instalación de contador de gas doméstico',
    checksTitle: 'Controles',
    check1: '1. Contador montado de forma segura - Correcto',
    check2: '2. Conexiones de tubería selladas - Correcto',
    check3: '3. Prueba de presión de fugas - Fallo'
  }
};

const portugueseUI: UIStrings = {
  nav: {
    home: 'Início',
    useCases: 'Casos de Uso',
    contact: 'Contato',
    language: 'Idioma',
    languageOptions: {
      en: 'Inglês',
      es: 'Espanhol',
      pt: 'Português'
    }
  },
  home: {
    examples: 'Exemplos',
    keyDifferentiatorsAria: 'Diferenciais principais',
    lusAIDeliveryAria: 'Abordagem de entrega da LusAI',
    useCasesEyebrow: 'Casos de Uso',
    exploreSolutions: 'Explorar Soluções',
    contactEyebrow: 'Contato',
    getInTouch: 'Entre em Contato',
    emailLabel: 'Email',
    internationalLabel: 'Internacional'
  },
  useCase: {
    viewDetails: 'Ver detalhes',
    detailEyebrow: 'Detalhe do Caso de Uso',
    backToUseCases: 'Voltar para Casos de Uso',
    notFoundTitle: 'Caso de uso não encontrado',
    notFoundMessage: 'Volte para a seção de casos de uso e selecione um cartão válido.'
  },
  qualityPreview: {
    ariaLabel: 'Pré-visualização de verificações de qualidade da instalação do medidor de gás',
    imageAlt: 'Instalação de medidor de gás residencial',
    checksTitle: 'Verificações',
    check1: '1. Medidor montado com segurança - Aprovado',
    check2: '2. Conexões da tubulação vedadas - Aprovado',
    check3: '3. Teste de pressão de vazamento - Reprovado'
  }
};

const spanishLandingContent: TranslationPack['landingContent'] = {
  hero: {
    eyebrow: 'Lus AI (Learning Understanding Systems)',
    title: 'Servicios de consultoría en IA, Datos y LLM para resultados reales de negocio',
    subtitle:
      'Ofrecemos consultoría de IA ajustada al contexto, estrategia de datos e integración de LLM con entrega segura por diseño. Las soluciones se alinean con la soberanía europea y pueden ejecutarse on-premises, en nube privada, nube pública o en el edge.',
    primaryCta: {
      label: 'Agendar una llamada',
      href: '#contact'
    },
    secondaryCta: {
      label: 'Solicitar una evaluación',
      href: '#contact'
    }
  },
  benefits: {
    title: 'Beneficios',
    items: [
      {
        title: 'Optimización de procesos',
        imageUrl:
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Equipo revisando paneles operativos en una oficina moderna',
        description:
          'Automatiza y simplifica operaciones complejas con servicios de IA y datos. Mejora la consistencia, la velocidad y el rendimiento medible con una transformación digital práctica.'
      },
      {
        title: 'Flexibilidad',
        imageUrl:
          'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Infraestructura de servidores segura que representa despliegue on-premises y nube privada',
        description:
          'Despliega soluciones de IA y LLM en tu propia infraestructura, nube privada, nube pública o en el edge. Define casos de uso a medida y mantén control total sobre tus datos.'
      },
      {
        title: 'Soberanía',
        imageUrl:
          'https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Puerta de bóveda bancaria que simboliza protección sólida de datos empresariales',
        description:
          'Reduce la dependencia de terceros. Mantén la gestión de plataforma, operaciones y servicios de datos críticos bajo la gobernanza exclusiva de tu organización.'
      },
      {
        title: 'Personalización',
        imageUrl:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Ingenieros colaborando en una integración de IA personalizada',
        description:
          'Integra modelos de IA adaptados a cada caso de uso, desde generación de código hasta interacción con usuarios y copilotos de dominio, según tus requisitos operativos y de cumplimiento.'
      }
    ]
  },
  expertise: {
    title: 'Nuestra Experiencia',
    items: [
      {
        id: 'machine-learning',
        title: 'Machine Learning',
        description:
          'Construimos soluciones de machine learning ajustadas al contexto y enfocadas en resultados operativos medibles. Los proyectos se diseñan para un manejo seguro de datos y un alcance realista de implementación.',
        examples: [
          'Pronóstico de demanda para equipos de planificación',
          'Scoring de riesgo de abandono para retención de clientes',
          'Detección de anomalías de calidad en operaciones'
        ]
      },
      {
        id: 'text-to-speech',
        title: 'Text-to-Speech',
        description:
          'Implementamos pipelines seguros de text-to-speech para canales internos y de cliente. Los despliegues pueden ejecutarse on-premises o en nube privada con flujos de voz y datos controlados.',
        examples: [
          'Asistentes de voz para mesas de servicio',
          'Resúmenes automáticos de llamadas en formato audio',
          'Narración de accesibilidad para plataformas digitales'
        ]
      },
      {
        id: 'computer-vision',
        title: 'Computer Vision',
        description:
          'Entregamos sistemas prácticos de visión por computador que mejoran la inspección y el soporte a decisiones. Las soluciones se adaptan al contexto regulatorio, restricciones de dispositivo y políticas de gobernanza del cliente.',
        examples: [
          'Detección visual de defectos en producción',
          'Clasificación y extracción de imágenes de documentos',
          'Controles de cumplimiento de seguridad desde cámaras'
        ]
      },
      {
        id: 'generative-ai',
        title: 'IA Generativa (GenAI)',
        description:
          'Diseñamos asistentes y flujos GenAI seguros, con límites claros, control de costes y supervisión humana. Las integraciones con LLM priorizan valor de negocio sobre complejidad innecesaria.',
        examples: [
          'Asistentes internos de conocimiento para equipos',
          'Generación de borradores para propuestas e informes',
          'Copilotos de apoyo al código con guardrails de políticas'
        ]
      }
    ]
  },
  differentiators: {
    title: 'Diferenciadores Clave',
    items: [
      'Confidencialidad total de los datos para reducir riesgo de fuga y proteger información empresarial sensible.',
      'Servicios adaptables de IA, datos y LLM para cualquier industria, incluidos sectores altamente regulados.',
      'Tecnología de origen europeo para organizaciones que requieren soberanía digital por diseño.'
    ]
  },
  howWeWork: {
    title: 'Cómo trabajamos',
    steps: [
      'Análisis rápido (Gratis)',
      'Análisis de impacto',
      'Desarrollo',
      'Despliegue y mejora continua'
    ]
  }
};

const portugueseLandingContent: TranslationPack['landingContent'] = {
  hero: {
    eyebrow: 'Lus AI (Learning Understanding Systems)',
    title: 'Serviços de consultoria em IA, Dados e LLM para resultados reais de negócio',
    subtitle:
      'Oferecemos consultoria de IA sob medida, estratégia de dados e integração de LLM com entrega segura por design. As soluções são alinhadas à soberania europeia e podem rodar on-premises, nuvem privada, nuvem pública ou na borda.',
    primaryCta: {
      label: 'Agendar uma chamada',
      href: '#contact'
    },
    secondaryCta: {
      label: 'Solicitar uma avaliação',
      href: '#contact'
    }
  },
  benefits: {
    title: 'Benefícios',
    items: [
      {
        title: 'Otimização de processos',
        imageUrl:
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Equipe revisando dashboards operacionais em um escritório moderno',
        description:
          'Automatize e simplifique operações complexas com serviços de IA e dados. Melhore consistência, velocidade e desempenho mensurável por meio de transformação digital prática.'
      },
      {
        title: 'Flexibilidade',
        imageUrl:
          'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Infraestrutura segura de servidores representando implantação on-premises e nuvem privada',
        description:
          'Implante soluções de IA e LLM na sua própria infraestrutura, nuvem privada, nuvem pública ou na borda. Defina casos de uso sob medida e mantenha controle total dos seus dados.'
      },
      {
        title: 'Soberania',
        imageUrl:
          'https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Porta de cofre bancário simbolizando forte proteção dos dados da empresa',
        description:
          'Reduza a dependência de terceiros. Mantenha gestão de plataforma, operações e serviços críticos de dados sob governança exclusiva da sua organização.'
      },
      {
        title: 'Personalização',
        imageUrl:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Engenheiros colaborando na integração de IA personalizada',
        description:
          'Integre modelos de IA adaptados a cada caso de uso, de geração de código à interação com usuários e copilotos de domínio, com base em requisitos operacionais e de conformidade.'
      }
    ]
  },
  expertise: {
    title: 'Nossa Especialização',
    items: [
      {
        id: 'machine-learning',
        title: 'Machine Learning',
        description:
          'Construímos soluções de machine learning sob medida, focadas em resultados operacionais mensuráveis. Os projetos são desenhados para tratamento seguro de dados e escopo realista de implementação.',
        examples: [
          'Previsão de demanda para equipes de planejamento',
          'Score de risco de churn para retenção de clientes',
          'Detecção de anomalias de qualidade em operações'
        ]
      },
      {
        id: 'text-to-speech',
        title: 'Text-to-Speech',
        description:
          'Implementamos pipelines seguros de text-to-speech para canais internos e de clientes. As implantações podem rodar on-premises ou em nuvem privada com fluxos de voz e dados controlados.',
        examples: [
          'Assistentes de voz para service desk',
          'Resumos automáticos de chamadas em áudio',
          'Narração de acessibilidade para plataformas digitais'
        ]
      },
      {
        id: 'computer-vision',
        title: 'Computer Vision',
        description:
          'Entregamos sistemas práticos de visão computacional que melhoram inspeção e suporte à decisão. As soluções são adaptadas ao contexto regulatório, limitações de dispositivos e políticas de governança do cliente.',
        examples: [
          'Detecção visual de defeitos na produção',
          'Classificação e extração de imagens de documentos',
          'Verificações de conformidade de segurança por câmeras'
        ]
      },
      {
        id: 'generative-ai',
        title: 'IA Generativa (GenAI)',
        description:
          'Desenhamos assistentes e fluxos GenAI seguros com limites claros, controle de custos e supervisão humana. Integrações com LLM priorizam valor de negócio em vez de complexidade desnecessária.',
        examples: [
          'Assistentes internos de conhecimento para equipes',
          'Geração de rascunhos para propostas e relatórios',
          'Copilotos de apoio a código com guardrails de políticas'
        ]
      }
    ]
  },
  differentiators: {
    title: 'Diferenciais Principais',
    items: [
      'Confidencialidade total dos dados para reduzir risco de vazamento e proteger informações sensíveis do negócio.',
      'Serviços adaptáveis de IA, dados e LLM para qualquer setor, incluindo ambientes altamente regulados.',
      'Tecnologia de origem europeia para organizações que exigem soberania digital por design.'
    ]
  },
  howWeWork: {
    title: 'Como trabalhamos',
    steps: ['Análise rápida (Grátis)', 'Análise de impacto', 'Desenvolvimento', 'Implantação e melhoria contínua']
  }
};

const spanishUseCases: Record<string, UseCaseText> = {
  'smart-intake': {
    title: 'Procesamiento Inteligente de Documentos',
    shortDescription:
      'Procesa todos los datos del documento de extremo a extremo, transformando información interna oculta en insights estructurados listos para IA para flujos posteriores.',
    longDescription:
      'Este flujo ingiere archivos desde múltiples canales, valida su formato y analiza la estructura documental para detectar texto, tablas, imágenes, gráficos y contenido escaneado. Extrae información significativa y metadatos para estructurar documentos para Retrieval-Augmented Generation (RAG) y enruta cada elemento al equipo adecuado. Los equipos pueden añadir reglas de validación, notas de auditoría y disparadores de escalado sin cambiar el código base.'
  },
  'support-assist': {
    title: 'Asistente para Agentes de Soporte',
    shortDescription: 'Proporciona sugerencias de respuesta y resúmenes de contexto durante sesiones de soporte en vivo.',
    longDescription:
      'Agent Assist monitoriza continuamente datos en streaming entrantes, revisando y validando la información en tiempo real. Analiza cada solicitud, identifica posibles incidencias y procesa los datos en consecuencia. Cuando se detectan irregularidades, el sistema puede marcar advertencias o clasificar eventos como incidentes. En esos casos, Agent Assist aporta insights contextuales, referencias de políticas relevantes y acciones sugeridas, ayudando a los equipos operativos a comprender la situación rápidamente y resolverla de forma eficiente. Al combinar análisis automatizado con supervisión humana, Agent Assist reduce el tiempo de respuesta y garantiza precisión, cumplimiento y fiabilidad operativa.'
  },
  'sales-insights': {
    title: 'Insights de Atención al Cliente',
    shortDescription: 'Convierte notas de llamadas en seguimientos priorizados, riesgos y oportunidades destacadas.',
    longDescription:
      'Este caso de uso analiza conversaciones entre operadores y clientes transcribiendo llamadas y extrayendo insights accionables del diálogo. El sistema evalúa si el operador siguió el proceso o guion definido, valora la claridad de la comunicación e identifica acciones abiertas que aún deben atenderse. También analiza el sentimiento del cliente y la dinámica de la conversación para detectar posibles problemas, malentendidos u oportunidades de mejora. Estos insights ayudan a los equipos a mejorar la calidad del servicio, asegurar el cumplimiento de los procedimientos operativos y obtener una visión más clara de las interacciones con clientes. Los resultados se entregan en un formato estructurado y fácil de revisar, permitiendo a los equipos de operaciones y calidad identificar riesgos rápidamente, monitorizar el rendimiento y dar seguimiento a acciones pendientes.'
  },
  'knowledge-search': {
    title: 'Control de Calidad Automatizado',
    shortDescription:
      'Con visión por computador, los técnicos pueden validar instalaciones automáticamente y mejorar la tasa de acierto a la primera.',
    longDescription:
      'Con visión por computador, los técnicos pueden validar instalaciones automáticamente, detectar incidencias de calidad antes y asegurar instalaciones correctas a la primera. Este enfoque reduce retrabajos, acelera operaciones de campo y aporta evidencia de calidad consistente para cumplimiento y auditorías de servicio.'
  },
  'ops-monitoring': {
    title: 'Automatización de Gestión de Inventario',
    shortDescription: 'Resume eventos, anomalías y causas probables para equipos operativos.',
    longDescription:
      'Este flujo usa IA para auditar y validar datos de inventario antes de registrarlos en el sistema. Analiza registros entrantes para verificar completitud, consistencia y exactitud, ayudando a evitar información incorrecta o incompleta en el inventario. El sistema también puede revisar datos de inventario existentes para detectar inconsistencias, atributos faltantes o elementos mal registrados. Cuando se identifican incidencias, las destaca y sugiere acciones correctivas, ayudando a los equipos a mantener registros de inventario fiables y actualizados.'
  },
  'customer-onboarding': {
    title: 'Gemelo digital',
    shortDescription:
      'Utiliza un gemelo digital para simular escenarios operativos y evaluar cambios antes de llegar a producción. Valida estrategias, anticipa riesgos y optimiza el rendimiento en un entorno seguro y controlado.',
    longDescription:
      'Este flujo de onboarding personaliza pasos de configuración según el perfil de la cuenta y los objetivos de implementación. Ofrece seguimiento de progreso, recomendaciones contextuales y recordatorios de hitos, manteniendo una ruta clara para la intervención manual cuando sea necesaria.'
  }
};

const portugueseUseCases: Record<string, UseCaseText> = {
  'smart-intake': {
    title: 'Processamento Inteligente de Documentos',
    shortDescription:
      'Processa todos os dados do documento de ponta a ponta, transformando informações internas ocultas em insights estruturados e prontos para IA em fluxos posteriores.',
    longDescription:
      'Este fluxo ingere arquivos de múltiplos canais, valida o formato e analisa a estrutura do documento para detectar texto, tabelas, imagens, gráficos e conteúdo digitalizado. Ele extrai informações relevantes e metadados para estruturar documentos para Retrieval-Augmented Generation (RAG) e direciona cada item para a equipe adequada. As equipes podem adicionar regras de validação, notas de auditoria e gatilhos de escalonamento sem alterar o código principal.'
  },
  'support-assist': {
    title: 'Assistente de Agente de Suporte',
    shortDescription: 'Fornece sugestões de resposta e resumos de contexto durante sessões de suporte ao vivo.',
    longDescription:
      'O Agent Assist monitora continuamente dados de streaming recebidos, revisando e validando as informações em tempo real. Ele analisa cada solicitação, identifica possíveis problemas e processa os dados conforme necessário. Quando irregularidades são detectadas, o sistema pode sinalizar alertas ou classificar eventos como incidentes. Nesses casos, o Agent Assist fornece insights contextuais, referências de políticas relevantes e ações sugeridas, ajudando equipes operacionais a entender rapidamente a situação e resolvê-la com eficiência. Ao combinar análise automatizada com supervisão humana, o Agent Assist reduz o tempo de resposta e garante precisão, conformidade e confiabilidade operacional.'
  },
  'sales-insights': {
    title: 'Insights de Atendimento ao Cliente',
    shortDescription: 'Transforma anotações de chamadas em follow-ups priorizados, riscos e oportunidades.',
    longDescription:
      'Este caso de uso analisa conversas entre operadores e clientes por meio da transcrição de chamadas e extração de insights acionáveis do diálogo. O sistema avalia se o operador seguiu o processo ou roteiro definido, verifica a clareza da comunicação e identifica ações em aberto que ainda precisam ser tratadas. Também analisa o sentimento do cliente e a dinâmica da conversa para destacar possíveis problemas, mal-entendidos ou oportunidades de melhoria. Esses insights ajudam as equipes a melhorar a qualidade do serviço, garantir conformidade com procedimentos operacionais e obter uma visão mais clara das interações com clientes. Os resultados são entregues em um formato estruturado e fácil de revisar, permitindo que equipes de operações e qualidade identifiquem riscos rapidamente, monitorem desempenho e acompanhem ações pendentes.'
  },
  'knowledge-search': {
    title: 'Controle de Qualidade Automatizado',
    shortDescription:
      'Com visão computacional, técnicos podem validar instalações automaticamente e melhorar a taxa de acerto na primeira execução.',
    longDescription:
      'Usando visão computacional, técnicos podem validar instalações automaticamente, detectar problemas de qualidade mais cedo e garantir instalações corretas na primeira vez. Essa abordagem reduz retrabalho, acelera operações de campo e fornece evidências consistentes de qualidade para conformidade e auditorias de serviço.'
  },
  'ops-monitoring': {
    title: 'Automação de Gestão de Inventário',
    shortDescription: 'Resume eventos, anomalias e causas prováveis para equipes operacionais.',
    longDescription:
      'Este fluxo usa IA para auditar e validar dados de inventário antes de serem registrados no sistema. Ele analisa registros recebidos para verificar completude, consistência e precisão, ajudando a evitar que informações incorretas ou incompletas entrem no inventário. O sistema também pode revisar dados de inventário existentes para detectar inconsistências, atributos ausentes ou itens rastreados incorretamente. Quando problemas são identificados, ele os destaca e sugere ações corretivas, ajudando as equipes a manter registros de inventário confiáveis e atualizados.'
  },
  'customer-onboarding': {
    title: 'Gêmeo digital',
    shortDescription:
      'Use um gêmeo digital para simular cenários operacionais e avaliar mudanças antes de chegarem à produção. Valide estratégias, antecipe riscos e otimize desempenho em um ambiente seguro e controlado.',
    longDescription:
      'Este fluxo de onboarding personaliza etapas de configuração com base no perfil da conta e nos objetivos de implementação. Ele oferece acompanhamento de progresso, dicas contextuais e lembretes de marcos, mantendo um caminho claro para intervenção manual quando necessário.'
  }
};

const buildUseCaseMap = (items: typeof englishUseCases): Record<string, UseCaseText> =>
  items.reduce<Record<string, UseCaseText>>((accumulator, item) => {
    accumulator[item.id] = {
      title: item.title,
      shortDescription: item.shortDescription,
      longDescription: item.longDescription
    };
    return accumulator;
  }, {});

export const translationPacks: Record<Locale, TranslationPack> = {
  en: {
    landingContent: enLandingContent,
    ui: englishUI,
    useCases: buildUseCaseMap(englishUseCases)
  },
  es: {
    landingContent: spanishLandingContent,
    ui: spanishUI,
    useCases: spanishUseCases
  },
  pt: {
    landingContent: portugueseLandingContent,
    ui: portugueseUI,
    useCases: portugueseUseCases
  }
};
