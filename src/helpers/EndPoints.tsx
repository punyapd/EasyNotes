const APIS = {
  //Authentication
  REGISTER: `/user/signup/`,
  VERIFY_OTP: `/user/verify_account/`,
  LOGIN: `/token/create/`,
  FORGOT_PASSWORD: `user/forget_password/`,

  //user profile
  USER_PROFILE: `/user-profile/`,

  //
  CURRENT_USER: `/user/me/`,
  AUTHORS: `/teacher/`,
  READERS: `/student/`,
  USER: `/user/`,
  NOTES: `/pdf-note/`,
  CONTACT_US: `/contact/`,
  CATEGORY: `/category/`,
  USERPROFILE: `/user-profile/`,

  //enroll student notes
  ENROLL_PDF_NOTES: `/student-online-enroll/`,

  //trendingNotes
  TRENDING_NOTES: `/pdf-note/trending-notes/`,

  //pdf filter by user
  PDF_FILER_USER: `/pdf-note/pdf-filter-by-user/`,

  //admin transition data
  ADMIN_TRANSITION: `/pdf-note/admin-transition-data/`
};
export default APIS;
