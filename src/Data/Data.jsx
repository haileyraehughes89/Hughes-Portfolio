import EmployeeTracker from "/assets/Employee-Database.png";
import NoteTaker from "/public/assets/Note-Taker.png";
import WineDine from "/assets/Recipe-API.png"
import Ecommerce from "/assets/E-Commerce.png";
import WeatherApi from "/assets/Weather-API.png"
import ApplicationTracker from "/assets/Application-Tracker.png"

export const About = 
{
    welcome: "Hello and Welcome!",
    text: "My name is Hailey. I am an MCU enthusiast Swiftie, and below average baker. My love of learning has led me on a journey rich in information ranging from my time studying Mathematics and Spanish in my undergraduate programs, change systems in my graduate courses and most recently, software engineering. 10 years in education has empowered me with the resilience and determination I have needed to produce clear, efficient and scalable code. I am well versed in solving complex problems through the collaboration of ideas and diverse experience. What has drawn me to programming is the vastness in possibility. What has helped me persist is the work I have accomplished alongside veteran and emerging developers. What I can dream up pales in comparison to what the collective can envision and, together, accomplish. So have a look around, and if you like what you see, let’s collaborate on a project. I look forward to an opportunity to learn with you!",

}; 

export const Portfolio = [
    {
        title: "Wine and Dine",
        description: "Save Yourself a Grocery Trip",
        text: "This was a collaborative project in which I focused on working with the spoonacular API. Spoonacular offers a robust set of tools and resources for working with culinary data, recipes, and nutritional information. My role in the project was centered around utilizing the spoonacular API to retrieve and manipulate recipe data, allowing us to create an innovative culinary-related application. During the project, I successfully integrated the spoonacular API into our application, enabling users to search for recipes based on various criteria such as ingredients, dietary restrictions, and cuisine types. This involved making API requests, handling responses, and displaying the retrieved data in a user-friendly format. In addition to the technical implementation, I collaborated closely with my team members to ensure seamless integration and a cohesive user experience. Through effective communication and teamwork, we were able to leverage the capabilities of the spoonacular API to create a feature-rich and engaging application that catered to culinary enthusiasts and those seeking cooking inspiration.",
        img: WineDine,
        link: "https://github.com/rtm713/WiningAndDining",
        // type: front
    },
    {
        title: "Weather Dashboard",
        description: "Save Yourself a Grocery Trip",
        text: "This was a collaborative project in which I focused on working with the spoonacular API. Spoonacular offers a robust set of tools and resources for working with culinary data, recipes, and nutritional information. My role in the project was centered around utilizing the spoonacular API to retrieve and manipulate recipe data, allowing us to create an innovative culinary-related application. During the project, I successfully integrated the spoonacular API into our application, enabling users to search for recipes based on various criteria such as ingredients, dietary restrictions, and cuisine types. This involved making API requests, handling responses, and displaying the retrieved data in a user-friendly format. In addition to the technical implementation, I collaborated closely with my team members to ensure seamless integration and a cohesive user experience. Through effective communication and teamwork, we were able to leverage the capabilities of the spoonacular API to create a feature-rich and engaging application that catered to culinary enthusiasts and those seeking cooking inspiration.",
        img: WeatherApi,
        link: "https://github.com/haileyraehughes89/Weather-Dashboard",
        // type: front
    },
    {
        title: "Employee Database",
        description: "Organize Efficiently",
        text: "I developed a command-line application as a content management system (CMS) to manage a company's employee database. The application was built from scratch using Node.js, Inquirer, and MySQL. The goal was to create an interface that enables non-developers to easily view and interact with data stored in databases. The database schema consisted of three tables: department, role, and employee. The structure of these tables included relevant attributes such as id, name, title, salary, department_id, first_name, last_name, role_id, and manager_id. The application allowed users to perform various operations on the database, such as viewing employees, roles, and departments, as well as adding new entries and updating existing ones.",
        img: EmployeeTracker,
        link: "https://github.com/haileyraehughes89/challenge-12-Employee-Tracker",
        // type: back
        
    },
    {
        title: "E-commerce Database",
        description: "Save Yourself a Grocery Trip",
        text: "This was a collaborative project in which I focused on working with the spoonacular API. Spoonacular offers a robust set of tools and resources for working with culinary data, recipes, and nutritional information. My role in the project was centered around utilizing the spoonacular API to retrieve and manipulate recipe data, allowing us to create an innovative culinary-related application. During the project, I successfully integrated the spoonacular API into our application, enabling users to search for recipes based on various criteria such as ingredients, dietary restrictions, and cuisine types. This involved making API requests, handling responses, and displaying the retrieved data in a user-friendly format. In addition to the technical implementation, I collaborated closely with my team members to ensure seamless integration and a cohesive user experience. Through effective communication and teamwork, we were able to leverage the capabilities of the spoonacular API to create a feature-rich and engaging application that catered to culinary enthusiasts and those seeking cooking inspiration.",
        img: Ecommerce,
        link: "https://github.com/haileyraehughes89/back-end-e-commerce-website"
        // type: back
    },
    {
        title: "Daily Task List",
        description: "Don't Let your Day get Away from You",
        text: "I undertook the challenge of developing an application aimed at streamlining note-taking and organizational tasks. The primary objective was to establish a user-friendly platform for writing and preserving notes. The application's structure consisted of an Express.js backend responsible for managing note data storage and retrieval from a JSON file. While the front-end of the application was pre-existing, my task encompassed building and integrating the backend components, as well as deploying the entire application on Heroku to ensure accessibility.",
        img: NoteTaker,
        link: "https://github.com/haileyraehughes89/Note-Taker",
        // type: full
    },
    {
        title: "Application Tracker",
        description: "Save Yourself a Grocery Trip",
        text: "This was a collaborative project in which I focused on working with the spoonacular API. Spoonacular offers a robust set of tools and resources for working with culinary data, recipes, and nutritional information. My role in the project was centered around utilizing the spoonacular API to retrieve and manipulate recipe data, allowing us to create an innovative culinary-related application. During the project, I successfully integrated the spoonacular API into our application, enabling users to search for recipes based on various criteria such as ingredients, dietary restrictions, and cuisine types. This involved making API requests, handling responses, and displaying the retrieved data in a user-friendly format. In addition to the technical implementation, I collaborated closely with my team members to ensure seamless integration and a cohesive user experience. Through effective communication and teamwork, we were able to leverage the capabilities of the spoonacular API to create a feature-rich and engaging application that catered to culinary enthusiasts and those seeking cooking inspiration.",
        img: ApplicationTracker,
        link: "https://github.com/DaveFMiranda/job-huntr"
        // type: full
    }
]

