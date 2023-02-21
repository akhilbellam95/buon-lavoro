import image from "@/images/resource/lines-of-code.jpeg";
import featuredImage from "@/images/resource/planning-strategy-min.jpg";
import image2 from "@/images/resource/graphic-designing.jpg";

export const sidebar = {
  title: "All Services",
  title2: "need Buon help?",
  text: "Prefer speaking with a human to filling out a form? call corporate office and we will connect you with a team member who can help.",
  phone: "958 109 8888",
  navItems: [
    {
      id: 1,
      title: "Website Development",
      href: "/web-development",
    },
    {
      id: 2,
      title: "App Development",
      href: "/app-development",
    },
    {
      id: 3,
      title: "Digital Marketing",
      href: "/digital-marketing",
    },
    {
      id: 4,
      title: "SEO & Content Writing",
      href: "/seo",
    },
    {
      id: 5,
      title: "Graphic Designing",
      href: "/graphic-designing",
    },
    {
      id: 6,
      title: "UI/UX Designing",
      href: "/ui-designing",
    },
  ],
};

const common = {
  image,
  text1:
    "is the process of building and maintaining websites and web applications. It involves a range of tasks and skills, including web design, web content development, client-side/server-side scripting, and network security configuration. Web development technologies and tools include HTML, CSS, JavaScript, server-side languages, databases, and content management systems. Web developers use these technologies to create and manage websites and web applications that are accessible and user-friendly.",
  featuredTitle: "planning & strategy",
  featuredText: "",
  featuredImage,
  features: [
    "Define the goals and objectives of the website or web application",
    "Identify the target audience",
    "Determine the scope of the project and the features to be included",
    "Choose the appropriate technologies",
    "Test and iterate",
  ],
  text2:
    "also known as client-side development, involves building the user interface of a website or web application. This includes the layout, design, and interactivity of the site. Front-end developers use languages such as HTML, CSS, and JavaScript to create the visual elements of a website or web application.",
  text3:
    "also known as server-side development, involves building the underlying infrastructure of a website or web application. This includes the server-side logic and database management. Back-end developers use programming languages such as PHP, Python, and Ruby to build the back-end of a website or web application.",
  text4:
    "is an important aspect of web development. This includes implementing measures to protect against cyber threats such as hacking and data breaches. This may involve using secure servers, encrypting data, and implementing authentication and authorization protocols.",
  text5:
    "Performance optimization involves ensuring that a website or web application loads quickly and efficiently. This may involve optimizing the code, minimizing the use of resources, and using caching techniques to reduce the load on the server.",
  text6:
    "may involve working on a wide range of projects, including creating static websites, dynamic websites, e-commerce platforms, and web applications. It may also involve working with a variety of technologies and tools, including content management systems (CMS), databases, and version control systems.",
};

export const webDevelopment = {
  ...common,
  title: "Website Development",
  text2:
    "also known as client-side development, involves building the user interface of a website or web application. This includes the layout, design, and interactivity of the site. Front-end developers use languages such as HTML, CSS, and JavaScript to create the visual elements of a website or web application.",
  text3:
    "also known as server-side development, involves building the underlying infrastructure of a website or web application. This includes the server-side logic and database management. Back-end developers use programming languages such as PHP, Python, and Ruby to build the back-end of a website or web application.",
  text4:
    "is an important aspect of web development. This includes implementing measures to protect against cyber threats such as hacking and data breaches. This may involve using secure servers, encrypting data, and implementing authentication and authorization protocols.",
  text5:
    "Performance optimization involves ensuring that a website or web application loads quickly and efficiently. This may involve optimizing the code, minimizing the use of resources, and using caching techniques to reduce the load on the server.",
  text6:
    "may involve working on a wide range of projects, including creating static websites, dynamic websites, e-commerce platforms, and web applications. It may also involve working with a variety of technologies and tools, including content management systems (CMS), databases, and version control systems.",
};

export const graphicDesigning = {
  ...common,
  image: image2,
  text1:
    "is an essential aspect of any visual communication, including websites, mobile apps, brochures, and other marketing materials. Your software agency offers a full range of graphic design services to help clients create a strong visual identity and effectively communicate their message to their target audience.",
  title: "Graphic Designing",
};

export const digitalMarketing = {
  ...common,
  title: "Digital Marketing",
};

export const seo = {
  ...common,
  title: "SEO & Content Writing",
};

export const appDevelopment = {
  ...common,
  title: "App Development",
  text1:
    "is the process of creating software for devices such as phones, tablets, and wearable technology. The goal of mobile application development is to create applications that are functional, perform well, and provide a good user experience on a wide range of mobile devices.",
  text2:
    "also known as client-side development, involves building the user interface of a website or web application. This includes the layout, design, and interactivity of the site. Front-end developers use languages such as HTML, CSS, and JavaScript to create the visual elements of a website or web application.",
  text3:
    "also known as server-side development, involves building the underlying infrastructure of a website or web application. This includes the server-side logic and database management. Back-end developers use programming languages such as PHP, Python, and Ruby to build the back-end of a website or web application.",
  text4:
    "is an important aspect of web development. This includes implementing measures to protect against cyber threats such as hacking and data breaches. This may involve using secure servers, encrypting data, and implementing authentication and authorization protocols.",
  text5:
    "Performance optimization involves ensuring that a website or web application loads quickly and efficiently. This may involve optimizing the code, minimizing the use of resources, and using caching techniques to reduce the load on the server.",
  text6:
    "may involve working on a wide range of projects, including creating static websites, dynamic websites, e-commerce platforms, and web applications. It may also involve working with a variety of technologies and tools, including content management systems (CMS), databases, and version control systems.",
};

export const uiDesigning = {
  ...common,
  title: "UI/UX Designing",
};
