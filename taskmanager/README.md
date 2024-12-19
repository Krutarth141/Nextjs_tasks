<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1f4b586 (day3 taskly)
Summary:-
The task manager application allows users to add, view, and manage tasks with a simple user interface. The application is designed to work seamlessly on both desktop and mobile screens. Here's a breakdown of its key features and structure:
•	Add Task: Users can input a task title and description. Upon clicking "Add Task," the task is added to a list with a default status of "In Progress."
•	Task List: The added tasks are displayed below the input form. Each task has its own card, showing the task title, description, and status.
•	Responsive Layout: The layout adapts to different screen sizes, ensuring a consistent experience across mobile and desktop devices.
•	Styling: The page has a simple yet modern design with background and task cards styled for easy readability and user interaction.

Core logic:-
State Management:
•	The app uses React's useState hook to manage the state of tasks and the new task form's inputs (newTitle and newDescription).
•	When a task is added, the task data (including title, description, and status) is stored in the tasks state array.
Add Task Functionality:
•	The handleAddTask function is triggered when the user clicks the "Add Task" button.
•	It checks if both newTitle and newDescription are filled. If valid, it:
o	Adds the task to the tasks state array with a unique id based on Date.now().
o	Resets the input fields to empty strings (newTitle and newDescription).
Displaying Tasks:
•	The tasks are mapped over using the tasks.map() function and passed as props to the TaskCard component.
•	Each TaskCard is responsible for displaying the task information (title, description, and status).
Styling:
•	The page is styled using CSS with a focus on creating a responsive and user-friendly layout.
•	The background and task cards are styled to improve user interaction, with a clean, minimal look.
•	The page and input elements are designed to be mobile-responsive and centered on all screen sizes.
Responsive Design:
•	The use of relative units (such as percentages and rem) and Flexbox ensures that the layout adapts to various screen sizes, including mobile devices.
•	An optional media query can be added to further optimize the app for mobile screens.

<<<<<<< HEAD
=======
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> 48ca0e9 (day3 taskly)
>>>>>>> 1f4b586 (day3 taskly)
