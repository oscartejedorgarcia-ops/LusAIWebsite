import { landingContent as englishLandingContent } from '../content/en';
import { UseCase } from '../data/useCases';

export type Locale = 'en' | 'es' | 'pt';

export type LandingContent = typeof englishLandingContent;

export type UseCaseText = Pick<UseCase, 'title' | 'shortDescription' | 'longDescription'>;

export interface UIStrings {
  nav: {
    home: string;
    useCases: string;
    contact: string;
    language: string;
    languageOptions: Record<Locale, string>;
  };
  home: {
    examples: string;
    keyDifferentiatorsAria: string;
    lusAIDeliveryAria: string;
    useCasesEyebrow: string;
    exploreSolutions: string;
    contactEyebrow: string;
    getInTouch: string;
    emailLabel: string;
    internationalLabel: string;
  };
  useCase: {
    viewDetails: string;
    detailEyebrow: string;
    backToUseCases: string;
    notFoundTitle: string;
    notFoundMessage: string;
  };
  qualityPreview: {
    ariaLabel: string;
    imageAlt: string;
    checksTitle: string;
    check1: string;
    check2: string;
    check3: string;
  };
}

export interface TranslationPack {
  landingContent: LandingContent;
  ui: UIStrings;
  useCases: Record<string, UseCaseText>;
}
