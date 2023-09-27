export class Review {
  id: number;
  student: any;
  classroom: any;
  totalRate: number;
  expertInTheSubject: number;
  presentComplexTopicsClearlyAndEasily: number;
  skillfulInEngagingStudents: number;
  alwaysOnTime: number;
  feedback: string;
  createdDate: string;

  constructor(createDefault = false, review: any = null) {
    if (createDefault) {
      this.id = 0;
      this.student = null;
      this.classroom = null;
      this.totalRate = 0;
      this.expertInTheSubject = 0;
      this.presentComplexTopicsClearlyAndEasily = 0;
      this.skillfulInEngagingStudents = 0;
      this.alwaysOnTime = 0;
      this.feedback = '';
      this.createdDate = '';
    }
    if (review) {
      this.id = review.id;
      this.student = review.student;
      this.classroom = review.batch;
      this.totalRate = review.total_rate || 0;
      this.expertInTheSubject = review.expert_in_the_subject || 0;
      this.presentComplexTopicsClearlyAndEasily =
        review.present_complex_topics_clearly_and_easily || 0;
      this.skillfulInEngagingStudents =
        review.skillful_in_engaging_students || 0;
      this.alwaysOnTime = review.always_on_time || 0;
      this.feedback = review.feedback || '';
      this.createdDate = review.created_date || '';
    }
  }
}
