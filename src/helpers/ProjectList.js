import static_site from "../assets/My_Project_Images/static_portfolio.png"
import library from "../assets/My_Project_Images/Tk_library_management_proj.png"

// blog site imports
import blog_post from "../assets/My_Project_Images/Blog_site/blog_site_post.png"
import blog_site_main from "../assets/My_Project_Images/Blog_site/blog_site_main.png"
import blog_site1 from "../assets/My_Project_Images/Blog_site/blog_site1.png"
import blog_video from "../assets/My_Project_Images/Blog_site/Boom Blogger _ Home - Google Chrome 2023-02-15 23-38-47.mp4"

// todo imports
import todo_site_list from "../assets/My_Project_Images/Todo_proj/Todo_site_list.png"
import todo_site_empty from "../assets/My_Project_Images/Todo_proj/Todo_site_emptylist.png"
import todo_site_login from "../assets/My_Project_Images/Todo_proj/Todo_site_login.png"
import todo_site_register from "../assets/My_Project_Images/Todo_proj/Todo_site_register.png"
import todo_site_video from "../assets/My_Project_Images/Todo_proj/Tasks _ Login - Google Chrome 2023-02-15 20-26-51.mp4"

// 
import oa_mainscreen from "../assets/My_Project_Images/Online_assessment_proj/oa_mainscreen.png"
import oa_register from "../assets/My_Project_Images/Online_assessment_proj/oa_register.png"
import oa_math from "../assets/My_Project_Images/Online_assessment_proj/oa_basic_math_test.png"
import oa_login from "../assets/My_Project_Images/Online_assessment_proj/oa_mainscreen.png"

export const ProjectList = [
  {
    id: 0,
    name: "Static Portfolio Site",
    image: static_site,
    images: [static_site],
    video: undefined,
    skills: ['HTML5', 'CSS3', 'JAVASCRIPT'],
    github: "https://github.com/eternal-elegance/Potfolio_site",
    desc: "The portfolio site I developed was a personal project that allowed me to explore my interest in web designing and gain practical experience in the field. The site was built entirely from scratch, using HTML, CSS, and JavaScript, and was focused on showcasing my skills and interests."
  },
  {
    id: 1,
    name: "Library Management Application",
    image: library,
    images: [library],
    video: undefined,
    skills: ['Python', 'Tkinter'],
    github: "https://github.com/eternal-elegance/Library-management-system",
    desc: 'The Library Management Software that I developed as part of an assignment for a course in Python was a comprehensive application that utilized the Tkinter library to create a user-friendly desktop interface.'
  },
  {
    id: 2,
    name: "Blog Post Site",
    image: blog_post,
    images: [blog_post, blog_site_main, blog_site1],
    video: blog_video,
    skills: ["Django", "HTML5", "CSS3", "Javascript", "BootStrap3", "DTL"],
    github: "https://github.com/eternal-elegance/Blog-site",
    desc: 'The blog site that I developed as part of learning Django was an exciting project that allowed me to apply the concepts I learned in the course to a real-world scenario. The site was designed to be a platform for sharing ideas and knowledge, where users could create accounts, write blog posts, and interact with other users through comments.'
  },
  {
    id: 3,
    name: "Todo List site",
    image: todo_site_list,
    images: [todo_site_list, todo_site_empty, todo_site_login, todo_site_register],
    video: todo_site_video,
    skills: ["Django", "HTML5", "CSS3", "Javascript", "BootStrap3", "DTL"],
    github: "https://github.com/eternal-elegance/Django-to-do-app",
    desc: 'The TODO List site that I developed as part of learning Django was an exciting project that allowed me to apply the concepts I learned in the course to a practical use case. The site was designed to help users keep track of their daily tasks, with the ability to create, manage, and complete tasks on the go.'
  },
  {
    id: 4,
    name: "Online Assessment Platform",
    image: oa_mainscreen,
    images: [oa_mainscreen, oa_register, oa_math, oa_login],
    video: undefined,
    skills: ["Django", "HTML5", "CSS3", "Javascript", "BootStrap3", "DTL"],
    github: "https://github.com/eternal-elegance/walkover_final_assesment",
    desc: 'During my internship at Walkover Web Solutions, I had the opportunity to work on this online assessment web app, which allowed companies to conduct assessments for potential candidates. The project was developed using Python and Django framework, along with various web frontend technologies.'
  },
  // {
  //   name: "Mobile Game",
  //   image: Proj6,
  //   skills: "React Native,JavaScript,HTML,CSS",
  // },
];
