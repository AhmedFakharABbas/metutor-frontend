import { generalConstants } from '../config';
import { COUNTRIES_LIST } from '../utils';
import { Language } from './language.model';
import { Review } from './review.model';
import { Subject } from './subject.model';

export class Tutor {
  id: number;
  name: string;
  username: string;
  firstName: string;
  secondName: string;
  thirdName: string;
  lastName: string;
  fullName: string;
  email: string;
  alternativeEmail: string;
  about: string;
  mobileNumber: string;
  phoneNumber: string;
  BOD: string;
  nationality: string;
  languages: any[];
  major: string;
  gender: string;
  certificationQualification: string;
  teachingExperienceYears: any;
  onlineTeachingExperienceYears: any;
  avatar: string;
  cover: string;
  expectedIncomeO2o: any;
  expectedIncomeGroup: any;
  groupTutoringInvolved_ind: boolean;
  currentJobTitle: any;
  currentEmployer: any;
  availabilityStartDate: any;
  availabilityEndDate: any;
  education: number;
  tutorGenderPreference: any;
  rate: number;
  status: string;
  university: string;
  country: string;
  reviewsCount: number;
  bio: string;
  studentNumber: number;
  courseNumber: number;
  subjects: Subject[];
  city: string;
  state: string;
  streetAddress: string;
  postcode: string;
  fields: any;
  computerSkills: any;
  dateJoined: string;
  badges: any;
  reviews: Review[];
  expertInTheSubjectRate: number;
  presentComplexTopicsClearlyAndEasilyRate: number;
  skillfulInEngagingStudentsRate: number;
  alwaysOnTimeRate: number;

  constructor(createDefault = false, tutor: any = null) {
    if (createDefault) {
      this.id = 0;
      this.name = '';
      this.major = '';
      this.avatar = generalConstants.defaultAvatarPath;
      this.cover = generalConstants.defaultCoverPath;
      this.rate = 0;
      this.status = '';
      this.university = '';
      this.country = '';
      this.reviewsCount = 0;
      this.bio = '';
      this.studentNumber = 0;
      this.courseNumber = 0;
      this.subjects = [];
      this.username = '';
      this.firstName = '';
      this.secondName = '';
      this.thirdName = '';
      this.lastName = '';
      this.fullName = '';
      this.email = '';
      this.alternativeEmail = '';
      this.about = '';
      this.mobileNumber = '';
      this.phoneNumber = '';
      this.BOD = '';
      this.nationality = '';
      this.languages = [];
      this.gender = '';
      this.certificationQualification = '';
      this.teachingExperienceYears = '';
      this.onlineTeachingExperienceYears = '';
      this.expectedIncomeO2o = '';
      this.expectedIncomeGroup = '';
      this.groupTutoringInvolved_ind = false;
      this.currentJobTitle = '';
      this.currentEmployer = '';
      this.availabilityStartDate = '';
      this.availabilityEndDate = '';
      this.education = 0;
      this.tutorGenderPreference = '';
      this.city = '';
      this.state = '';
      this.streetAddress = '';
      this.postcode = '';
      this.fields = '';
      this.computerSkills = '';
      this.dateJoined = '';
      this.badges = [];
      this.reviews = [];
      this.expertInTheSubjectRate = 0;
      this.presentComplexTopicsClearlyAndEasilyRate = 0;
      this.skillfulInEngagingStudentsRate = 0;
      this.alwaysOnTimeRate = 0;
    }
    if (tutor) {
      this.id = tutor.id;
      this.name = tutor.official_name;
      this.major = tutor.major || '';
      this.avatar = tutor.avatar || generalConstants.defaultAvatarPath;
      this.cover = tutor.cover_pic || generalConstants.defaultCoverPath;
      this.rate = tutor.rate || 0;
      this.status = tutor._online_status || '';
      this.university = tutor.university || '';
      this.country = COUNTRIES_LIST[tutor.country] || '';
      this.reviewsCount = tutor.total_reviews_count || 0;
      this.bio = tutor.bio || '';
      this.studentNumber = tutor.number_of_students || 0;
      this.courseNumber = tutor.total_courses_count || 0;
      this.subjects = tutor.tutoring_subjects || [];
      this.username = tutor.username || '';
      this.firstName = tutor.first_name || '';
      this.secondName = tutor.second_name || '';
      this.thirdName = tutor.third_name || '';
      this.lastName = tutor.last_name || '';
      this.fullName = tutor.first_name || '' + ' ' + tutor.last_name || '';
      this.email = tutor.email || '';
      this.alternativeEmail = tutor.alternative_email || '';
      this.about = tutor.about_me || '';
      this.mobileNumber = tutor.mobile_number || '';
      this.phoneNumber = tutor.phone_number || '';
      this.BOD = tutor.DOB || '';
      this.nationality = tutor.nationality || '';
      this.languages =
        tutor.languages && tutor.languages.length
          ? tutor.languages.map((item) => new Language(false, item))
          : [];
      this.gender = tutor.gender || '';
      this.certificationQualification =
        tutor.certification_and_qualification || '';
      this.teachingExperienceYears = tutor.teaching_experience_years || '';
      this.onlineTeachingExperienceYears =
        tutor.online_teaching_experience_years || '';
      this.expectedIncomeO2o = tutor.expected_income_o2o || '';
      this.expectedIncomeGroup = tutor.expected_income_group || '';
      this.groupTutoringInvolved_ind =
        tutor.group_tutoring_involved_ind || false;
      this.currentJobTitle = tutor.current_job_title || '';
      this.currentEmployer = tutor.current_employer || '';
      this.availabilityStartDate = tutor.availability_start_date || '';
      this.availabilityEndDate = tutor.availability_end_date || '';
      this.education = tutor.education || 0;
      this.tutorGenderPreference = tutor.tutor_gender_preference || '';
      this.city = tutor.city || '';
      this.state = tutor.state || '';
      this.streetAddress = tutor.street_address || '';
      this.postcode = tutor.postcode || '';
      this.fields = tutor.tutoring_fields || '';
      this.computerSkills = tutor.computer_skills || '';
      this.dateJoined = tutor.date_joined || new Date();
      this.badges = tutor.tutor_badges || [];
      this.reviews =
        tutor.reviews && tutor.reviews.length
          ? tutor.reviews.map((item) => new Review(false, item))
          : [];
      this.expertInTheSubjectRate = tutor.expert_in_the_subject_rate || 0;
      this.presentComplexTopicsClearlyAndEasilyRate =
        tutor.present_complex_topics_clearly_and_easily_rate || 0;
      this.skillfulInEngagingStudentsRate =
        tutor.skillful_in_engaging_students_rate || 0;
      this.alwaysOnTimeRate = tutor.always_on_time_rate || 0;
    }
  }
}
