#  Personal Portfolio – HTML & CSS Assignment

> **Author:** Tony Muriuki  
> **Course:** CodeKenya Software Engineering Program  
> **Assignment Objective:** Build a complete personal portfolio using semantic HTML and modern CSS techniques.
>
> 
> <img width="1359" height="615" alt="image" src="https://github.com/user-attachments/assets/9535fd32-6502-447e-874b-e429bcf98f42" />
<img width="1359" height="615" alt="image" src="https://github.com/user-attachments/assets/ecaad343-147f-4966-a6df-b184d400358c" />
<img width="1359" height="615" alt="image" src="https://github.com/user-attachments/assets/f98a02b2-08e8-44b7-9cbb-e84412264f3e" />



---

##  Project Overview

This project is a **frontend development assignment** for the CodeKenya SWE Curriculum. The objective is to showcase HTML5, CSS3, and responsive design skills by building a **developer portfolio** that includes navigation, projects, contact form integration, and visually accessible styling using CSS variables.

The project was built from scratch using **pure HTML and CSS**—no frameworks or JavaScript for core functionality—highlighting fundamental frontend development skills.

---

##  Project Structure

```
.
├── assets/
│   └── img/
│       ├── lang/
│       │   ├── css3.png
│       │   ├── html.png
│       │   └── js.png
│       └── projects/
│           ├── codekenya.png
│           └── usapp.png
├── css-practice.css              # Additional styling experiments
├── css-practice.html            # Practice file for layout and styles
├── index-nojs copy.html         # Version without JavaScript interaction
├── index-nostyle-nojs.html      # Pure semantic HTML version
├── style.css                    # Main stylesheet with color palette
└── README.md                    # Project documentation
```

---

##  Key Features

-  Semantic HTML layout
-  SVG hamburger menu icon for mobile navigation
-  Sticky navigation bar
-  Smooth scrolling between sections
-  Contact form integrated with [Formspree](https://formspree.io/)
-  Responsive design for all screen sizes
-  Custom CSS variables for theming

---

##  How to Run Locally

1. Clone the repository:
   ```bash
   git clone (https://github.com/Tony-Muriuki/CodeKenya-Portfolio.git)
   cd portfolio-assignment
   ```

2. Open in your browser:
   - Double click `css-practice.html` or `index-nojs copy.html`
   - Or open in VS Code and use Live Server

---

##  Contact Form

The contact section uses **Formspree** for simple backend-less form submissions:

```html
<form action="https://formspree.io/f/[your_form_id]" method="POST">
  ...
</form>
```

Replace `[your_form_id]` with your actual Formspree form endpoint.

---

## Author

**Tony Muriuki**  
- Frontend Developer | Software Engineering Trainee  
- Nyeri, Kenya  
---

## License

- This project is licensed under the **MIT License**.  
- Feel free to reuse and adapt for personal or educational use.

---

## Acknowledgements

- Thanks to **CodeKenya** and the curriculum team for this practical hands-on assignment.
- All icons and images are used under free or educational use licensing.
