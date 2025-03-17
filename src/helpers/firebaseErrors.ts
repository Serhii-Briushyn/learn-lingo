const FIREBASE_ERRORS: Record<string, string> = {
  "auth/email-already-in-use": "This email is already in use.",
  "auth/user-not-found": "No user found with this email.",
  "auth/wrong-password": "Incorrect password. Please try again.",
  "auth/too-many-requests": "Too many attempts. Please try later.",
  "auth/invalid-email": "Invalid email address format.",
  "auth/weak-password": "Password should be at least 6 characters.",
  "auth/network-request-failed": "Network error. Please check your connection.",
};

export default FIREBASE_ERRORS;
