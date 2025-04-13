# Learn Lingo - Language Learning Platform

Learn Lingo is a modern web application that helps users find and connect with qualified language tutors for various learning purposes. The platform offers an intuitive user interface, smooth animations, and light/dark theme support to enhance the user experience.

## Features

- 🔍 **Browse Teachers:** View a list of available teachers and apply filters for targeted searches.
- ❤️ **Favorites:** Save favorite teachers to easily find them later (Requires authentication).
- 🔐 **Authentication:** Users can log in or register using Firebase Authentication.
- 🌑 **Light/Dark Theme:** Switch between light and dark mode with a smooth transition.
- 📋 **Dynamic Forms:** Validated forms for booking lessons.
- 🚀 **Smooth Animations:** Animated UI using Framer Motion and AOS (Animate On Scroll).
- 💾 **Persistent State:** Teacher filters and user favorites are saved in localStorage.

## Installation

1. Clone the repository:

```bash
 git clone https://github.com/Serhii-Briushyn/learn-lingo.git
```

2. Install dependencies:

```bash
 cd learn-lingo
 npm install
```

3. Start the development server:

```bash
 npm run dev
```

## Technologies Used

- **React & TypeScript** – For building a type-safe user interface.
- **React Router** – For handling navigation between pages.
- **Tailwind CSS** – For styling and dark mode support.
- **Framer Motion** – For animations and smooth transitions.
- **AOS (Animate On Scroll)** – For scroll-triggered animations.
- **React Hook Form & Yup** – For form handling and validation.
- **Firebase Authentication** – For user registration and login.
- **Firebase Firestore** – For storing user favorites.
- **Vite** – For fast development build.

## Configuration

Create a `.env` file in the root directory and add your Firebase configuration:

```bash
 VITE_API_KEY=your_api_key
 VITE_AUTH_DOMAIN=your_auth_domain
 VITE_PROJECT_ID=your_project_id
 VITE_STORAGE_BUCKET=your_storage_bucket
 VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
 VITE_APP_ID=your_app_id
```

## Project Structure

### `src/pages`

- `Home`: Home page displaying an introduction and call-to-action.
- `Teachers`: List of available teachers with filters and dynamic loading.
- `Favorites`: Page displaying user's favorite teachers (requires authentication).
- `NotFoundPage`: Catch-all route for undefined pages.

### `src/service`

- Contains API services for fetching teacher data and interacting with Firebase.

### `src/context`

- `FavoritesContext`: Provides state management for user's favorite teachers.
- `TeachersContext`: Provides state management for fetched teachers and their filtering.

### `src/components`

- `Header`: Handles navigation, theme toggling, and authentication controls.
- `Navigation`: Provides navigation links for different pages.
- `AuthNav`: Displays login and register buttons or logout based on authentication state.
- `ThemeToggle`: Allows switching between light and dark modes.
- `TeacherCard`: Displays individual teacher information, including details, levels, reviews, and booking options.
- `TeacherList`: Renders a list of `TeacherCard` components.
- `AuthModal`: Manages user authentication via login and registration forms.
- `BookingModal`: Allows users to book a trial lesson with a teacher, displaying teacher info and user inputs.
- `Loader`: Shows a loading spinner during data fetching or authentication loading states.
- `Dropdown`, `Input`, `ColorPicker`, `CustomRadio`, etc.: Small reusable components enhancing UI interactions.
- `ModalWrapper`: A wrapper component for displaying modals with background overlay and accessibility handling.

### `src/types`

- Contains TypeScript type definitions used throughout the application.

### `src/hooks`

- Custom hooks for handling authentication, modals, and UI interactions.

### `src/utils`

- Contains utility functions like teacher filtering.

## Usage

- Visit `/teachers` to view available teachers.
- Click the heart icon on teacher cards to add/remove them from favorites (Requires authentication).
- Use the theme toggle to switch between light and dark mode.
- Open a teacher's profile to book a lesson.

## Author
Learn Lingo is developed and maintained by **Serhii Briushyn**.

## License

This project is licensed under the MIT License.

