import image from "@/images/resource/lines-of-code.jpeg";
import featuredImage from "@/images/resource/planning-strategy-min.jpg";
import image2 from "@/images/resource/graphic-designing.jpg";
import image3 from "@/images/resource/Digitalmarketing3.jpg";
import image4 from "@/images/resource/UIUX5.jpg";
// import image5 from "@/images/resource/Ebooks4.jpg";

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
      title: "Graphic Designing",
      href: "/graphic-designing",
    },
    {
      id: 5,
      title: "UI/UX Designing",
      href: "/ui-designing",
    },
    {
      id: 6,
      title: "E-Book Conversion",
      href: "/e-book-conversion",
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
  subHeading1: "Website Development, ",
  subHeading2: "Front-End Development, ",
  subHeading3: "Back-End Development, ",
  subHeading4: "Security Development, ",
  subHeading5: "Performance Optimization, ",
  subHeading6: "Website Development, ",
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
  subHeading1: "Logo Designing, ",
  subHeading2: "Graphic Designing, ",
  subHeading3: "Website Design, ",
  subHeading4: "Mobile app Design, ",
  subHeading5: "Print Design, ",
  subHeading6: "Social Media Design, ",
  displayPlanning: false,
  text1:
    "is an essential aspect of any visual communication, including websites, mobile apps, brochures, and other marketing materials. Our software agency offers a full range of graphic design services to help clients create a strong visual identity and effectively communicate their message to their target audience.",
  title: "Graphic Designing",
  text2:
    "A logo is the cornerstone of a company's visual identity, and our software agency offers logo design services to help clients create a unique and memorable logo that represents their brand. The team will work with the client to understand their brand personality, target audience, and design preferences to create a logo that stands out from the competition.",
  text3:
    " Our software agency offers website design services to help clients create a website that is engaging, user-friendly, and optimized for search engines. The team will work with the client to understand their brand, target audience, and website goals to create a website that effectively communicates the client's message and provides a positive user experience.",
  text4:
    "Our software agency specializes in developing mobile applications that are engaging, user-friendly, and optimized for mobile devices. The team will work with the client to understand their brand, target audience, and app goals to create a mobile app that delivers a seamless experience on mobile devices.",
  text5:
    "Our software agency offers social media design services to help clients create engaging and effective social media content, including posts, advertisements, and graphics. The team will work with the client to understand their brand, target audience, and social media goals to create social media content that effectively communicates the client's message.",
};

export const digitalMarketing = {
  ...common,
  image: image3,
  title: "Digital Marketing",
  subHeading1: "Digital Marketing, ",
  subHeading2: "Search engine optimization (SEO), ",
  subHeading3: "Pay-per-click (PPC) advertising, ",
  subHeading4: "Social media marketing, ",
  subHeading5: "Email marketing, ",
  subHeading6: "Content marketing, ",
  displayPlanning: false,
  text1:
    "refers to the promotion of products or services using digital channels, including search engines, social media, email, and other online platforms. Our software agency offers a full range of digital marketing services to help clients reach their target audience and achieve their marketing goals.",
  text2:
    "SEO is the process of optimizing a website to rank higher in search engine results pages (SERPs). Your software agency offers SEO services to help clients improve their website's visibility and drive more traffic to their site. The team will work with the client to understand their target audience, keywords, and competition to create an effective SEO strategy.",
  text3:
    "PPC advertising involves paying for ads that appear on search engine results pages (SERPs) and other websites. Our software agency offers PPC advertising services to help clients reach their target audience and achieve their marketing goals. The team will work with the client to understand their target audience, keywords, and competition to create an effective PPC strategy.",
  text4:
    "Social media marketing involves using social media platforms to promote a brand, product, or service. Our software agency offers social media marketing services to help clients reach their target audience and achieve their marketing goals. The team will work with the client to understand their target audience, keywords, and competition to create an effective social media strategy.",
  text5:
    "Email marketing involves sending emails to a list of subscribers to promote a brand, product, or service. Our software agency offers email marketing services to help clients reach their target audience and achieve their marketing goals. The team will work with the client to understand their target audience, keywords, and competition to create an effective email marketing strategy.",
  text6:
    "Content marketing involves creating and sharing valuable content to attract and retain a target audience. Our software agency offers content marketing services to help clients reach their target audience and achieve their marketing goals. The team will work with the client to understand their target audience, keywords, and competition to create an effective content marketing strategy.",
};

export const seo = {
  ...common,
  title: "SEO & Content Writing",
};

export const ebook = {
  ...common,
  image: image4,
  title: "E-Book Conversion",
  subHeading1: "E-Book Conversion, ",
  subHeading2: "Manuscript Editing, ",
  subHeading3: "eBook Formatting, ",
  subHeading4: "eBook Conversion, ",
  subHeading5: "Cover Design, ",
  subHeading6: "eBook Distribution, ",
  displayPlanning: false,
  text1:
    "Our team of experienced professionals works closely with authors and publishers to understand their unique needs and provide customized solutions that meet their specific requirements. We use the latest technologies and industry best practices to ensure that our clients' eBooks are of the highest quality, and are optimized for maximum reader engagement and sales.",
  text2:
    "Our team of professional editors will work with you to ensure that your manuscript is error-free and ready for publication. We will provide feedback on structure, grammar, spelling, punctuation, and syntax to help you refine your manuscript and improve its overall quality.",
  text3:
    "We will format your manuscript to meet the specific requirements of different eBook platforms, such as Kindle, Nook, and iBooks. Our team will ensure that your eBook looks great on all devices, and is optimized for readability and user engagement.",
  text4:
    "We will convert your manuscript into various eBook formats, including ePub, mobi, and PDF. Our eBook conversion process is designed to ensure that your eBook is compatible with all major eBook platforms and devices.",
  text5:
    "We will work with you to create a professional and eye-catching eBook cover that accurately reflects the content and style of your book.",
  text6:
    "We will help you distribute your eBook to major eBook retailers such as Amazon, Barnes & Noble, and Apple iBooks. Our team will ensure that your eBook is listed correctly and is easily discoverable by readers.",
};

export const appDevelopment = {
  ...common,
  title: "App Development",
  featuredTitle: "Our Services Include",
  appTypes: [
    {
      title: "Native App Development",
      desc: "We specialize in developing native mobile applications for iOS and Android platforms. Our team of experts will work closely with you to develop a customized app that meets your business needs.",
    },
    {
      title: "Hybrid App Development",
      desc: "We also offer hybrid app development services that allow for faster development and deployment of your mobile application, while maintaining the performance and functionality of a native app.",
    },
    {
      title: "Web App Development",
      desc: "Our team can develop web-based mobile applications that can be accessed from any device with a web browser, providing your business with a cost-effective and efficient solution.",
    },
  ],
  subHeading1: "App Development",
  subHeading2: "Planning and Requirements Gathering, ",
  subHeading3: "Design, ",
  subHeading4: "Development, ",
  subHeading5: "Testing, ",
  subHeading6: "Deployment and Mainatainence, ",
  displayPlanning: false,
  text1:
    "Our team will work with you to identify your business needs and goals, and determine the key features and functionality required for your mobile application.",
  text2:
    "We will create wireframes and design concepts for your mobile application that align with your brand identity and target audience. Our designers will work with you to ensure that the design is visually appealing, intuitive, and user-friendly.",
  text3:
    "also known as server-side development, involves building the underlying infrastructure of a website or web application. This includes the server-side logic and database management. Back-end developers use programming languages such as PHP, Python, and Ruby to build the back-end of a website or web application.",
  text4:
    "Our team of experienced developers will use the latest technologies and programming languages to build your mobile application. We will ensure that your app is optimized for performance, security, and scalability, and that it meets the highest standards of quality.",
  text5:
    "We will conduct rigorous testing of your mobile application to ensure that it is free of bugs and errors, and that it functions as intended. Our testing process includes functional testing, performance testing, usability testing, and security testing.",
  text6:
    "Once your mobile application has been tested and approved, we will deploy it to the app store and ensure that it is listed correctly. We will also provide ongoing maintenance and support to ensure that your app continues to function optimally and is updated with new features and bug fixes as needed.",
};

export const uiDesigning = {
  ...common,
  image: image4,
  title: "UI/UX Designing",
  displayPlanning: false,
  subHeading1: "UI/UX Designing, ",
  subHeading2: "User Research, ",
  subHeading3: "Wire Framing & Prototyping, ",
  subHeading4: "User Interface Design, ",
  subHeading5: "User Experience Design, ",
  subHeading6: "UI/UX Designing ",
  text2:
    "Our software agency offers user research services to help clients understand their target audience, their needs, and their preferences. The team will conduct user interviews, surveys, and other research methods to gather insights into the target audience and inform the design process.",
  text3:
    "Wireframing and prototyping are critical stages in the UI/UX design process. Our software agency offers wireframing and prototyping services to help clients create low-fidelity representations of their product and test its usability and functionality.",
  text4:
    "User interface design refers to the design of the visual elements of a product, including buttons, icons, and other interface elements. Our software agency offers user interface design services to help clients create a user-friendly and engaging interface that effectively communicates the product's functionality and value proposition.",
  text5:
    "User experience design refers to the overall experience of using a product, including its usability, accessibility, and overall appeal. Our software agency offers user experience design services to help clients create products that are easy to use, accessible, and engaging, providing a positive experience for the end-user.",
  text6:
    "is a critical aspect of product design, and our software agency has the expertise to deliver high-quality UI/UX design services that help clients create products that are user-friendly, engaging, and effective.",
};
