import { LanguageLevel, LANGUAGES_LEVELS_CONST } from '../config';

export class Language {
  id: number;
  name: string;
  level: string;

  constructor(createDefault = false, language: any = null) {
    if (createDefault) {
      this.id = 0;
      this.name = '';
      this.level = '';
    }
    if (language) {
      this.id = language.id;
      this.name = language?.language?.name || '';
      this.level = this.getLanguageLevel(language.proficiency_level) || '';
    }
  }

  getLanguageLevel(level: number): string {
    switch (level) {
      case LanguageLevel.beginner:
        return LANGUAGES_LEVELS_CONST.beginner;
      case LanguageLevel.elementary:
        return LANGUAGES_LEVELS_CONST.elementary;
      case LanguageLevel.intermediate:
        return LANGUAGES_LEVELS_CONST.intermediate;
      case LanguageLevel.upperIntermediate:
        return LANGUAGES_LEVELS_CONST.upperIntermediate;
      case LanguageLevel.advanced:
        return LANGUAGES_LEVELS_CONST.advanced;
      case LanguageLevel.proficient:
        return LANGUAGES_LEVELS_CONST.proficient;
      default:
        return '';
    }
  }
}
