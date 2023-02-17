import static_site from "../assets/My_Project_Images/static_portfolio.png"
import library from "../assets/My_Project_Images/Tk_library_management_proj.png"
import blog_post from "../assets/My_Project_Images/Blog_site/blog_site_post.png"
import todo_site from "../assets/My_Project_Images/Todo_proj/Todo_site_list.png"
import oa_mainscreen from "../assets/My_Project_Images/Online_assessment_proj/oa_mainscreen.png"

export const ProjectList = [
  {
    id: 1,
    name: "Static Portfolio Site",
    main_image: static_site,
    skills: ['HTML5', 'CSS3', 'JAVASCRIPT'],
    github: "link_text"
  },
  {
    id: 2,
    name: "Library Management Application",
    image: library,
    skills: ['React', 'Node.js', 'MongoDB'],
    github: "link_text"
  },
  {
    id: 3,
    name: "Blog Post Site",
    image: blog_post,
    skills: ["Django", "HTML5", "CSS3", "Javascript", "BootStrap3", "DTL"],
    github: "link_text"
  },
  {
    id: 4,
    name: "Todo List site",
    image: todo_site,
    skills: ["Django", "HTML5", "CSS3", "Javascript", "BootStrap3", "DTL"],
    github: "link_text"
  },
  {
    id: 5,
    name: "Online Assessment Platform",
    image: oa_mainscreen,
    skills: ["Django", "HTML5", "CSS3", "Javascript", "BootStrap3", "DTL"],
    github: "link_text"
  },
  // {
  //   name: "Mobile Game",
  //   image: Proj6,
  //   skills: "React Native,JavaScript,HTML,CSS",
  // },
];
