# JOBSTER

JOBSTER is a comprehensive web application designed to help users track their job applications, manage interviews, and organize their job search process efficiently. With a user-friendly interface and powerful features, JOBSTER aims to streamline the job-hunting experience.

## Features

- **Job Application Tracking**: Keep track of all your job applications in one place, including details such as company name, position, application date, and status.
- **Interview Management**: Schedule and manage upcoming interviews, set reminders, and keep notes on each interview.
- **Customizable Dashboard**: Get an overview of your job search progress with a customizable dashboard that shows key metrics and upcoming activities.
- **Notifications and Reminders**: Receive notifications and reminders for important dates and tasks to ensure you never miss a follow-up or interview.
- **Secure and Private**: All your data is securely stored and only accessible by you.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/cli/install).
### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/jelimo-charity/JOBSTER
    ```

2. Navigate to the project directory:

    ```bash
    cd jobster
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your environment variables:

    ```bash
    MONGODB_URI=your_mongodb_uri
    PORT=your_port
    ```

5. Start the development server:

    ```bash
    npm start
    ```

6. Open your browser and go to `http://localhost:your_port` to see the application running.

## Usage

- **Dashboard**: Get an overview of your job search progress.
- **Add Job**: Add new job applications to your tracker.
- **Manage Interviews**: Schedule and manage your interviews.
- **Tasks**: Create tasks and set reminders.
- **Profile**: Update your profile and manage your account settings.

## Project Structure

Here’s a brief overview of the project structure:


- **public/**: Contains the public assets and the main HTML file.
- **src/**: Contains the main source code for the React application.
  - **assets/**: Static assets like images, icons, etc.
  - **components/**: Reusable React components.
  - **contexts/**: Context API for state management.
  - **hooks/**: Custom hooks.
  - **pages/**: Components for different pages.
  - **services/**: API calls and service functions.
  - **utils/**: Utility functions.

## Contributing

Contributions are always welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a pull request.

Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



---

Thank you for using JOBSTER! We hope it makes your job search process easier and more organized.
