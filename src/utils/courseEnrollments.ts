
export interface EnrollmentData {
  courseId: number;
  courseTitle: string;
  instructor: string;
  enrolledAt: string;
  progress: number;
  lastAccessed: string;
}

export const getCourseEnrollments = (): EnrollmentData[] => {
  const enrollments = localStorage.getItem('courseEnrollments');
  return enrollments ? JSON.parse(enrollments) : [];
};

export const addCourseEnrollment = (courseId: number, courseTitle: string, instructor: string): void => {
  const enrollments = getCourseEnrollments();
  const newEnrollment: EnrollmentData = {
    courseId,
    courseTitle,
    instructor,
    enrolledAt: new Date().toISOString(),
    progress: 0,
    lastAccessed: new Date().toISOString()
  };
  
  // Check if already enrolled
  const existingIndex = enrollments.findIndex(e => e.courseId === courseId);
  if (existingIndex === -1) {
    enrollments.push(newEnrollment);
    localStorage.setItem('courseEnrollments', JSON.stringify(enrollments));
  }
};

export const updateCourseProgress = (courseId: number, progress: number): void => {
  const enrollments = getCourseEnrollments();
  const enrollmentIndex = enrollments.findIndex(e => e.courseId === courseId);
  
  if (enrollmentIndex !== -1) {
    enrollments[enrollmentIndex].progress = progress;
    enrollments[enrollmentIndex].lastAccessed = new Date().toISOString();
    localStorage.setItem('courseEnrollments', JSON.stringify(enrollments));
  }
};

export const isEnrolledInCourse = (courseId: number): boolean => {
  const enrollments = getCourseEnrollments();
  return enrollments.some(e => e.courseId === courseId);
};
