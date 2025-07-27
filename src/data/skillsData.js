const skills = [
        {
            "name": "Node.js",
            "description": "A JavaScript runtime built on Chrome's V8 JavaScript engine, used for server-side applications and scalable network applications.",
            "level": "Advanced",
            "icon": "M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z",
            "category": "Web Dev"
        },
        {
            "name": "Node-RED",
            "description": "A flow-based programming tool for visual programming, wiring together hardware devices, APIs, and online services.",
            "level": "Advanced",
            "icon": "M3 0C1.338 0 0 1.338 0 3v6.107h2.858c1.092 0 1.97.868 1.964 1.96v.021c.812-.095 1.312-.352 1.674-.683.416-.382.69-.91 1.016-1.499.325-.59.71-1.244 1.408-1.723.575-.395 1.355-.644 2.384-.686v-.45c0-1.092.88-1.976 1.972-1.976h7.893c1.091 0 1.974.884 1.974 1.976v1.942c0 1.091-.883 2.029-1.974 2.029h-7.893c-1.092 0-1.972-.938-1.972-2.03v-.453c-.853.037-1.408.236-1.798.504-.48.33-.774.802-1.086 1.368-.312.565-.63 1.22-1.222 1.763l-.077.069c3.071.415 4.465 1.555 5.651 2.593 1.39 1.215 2.476 2.275 6.3 2.288v-.46c0-1.092.894-1.946 1.986-1.946H24V3c0-1.662-1.338-3-3-3zm10.276 5.41c-.369 0-.687.268-.687.637v1.942c0 .368.318.636.687.636h7.892a.614.614 0 0 0 .635-.636V6.047a.614.614 0 0 0-.635-.636zM0 10.448v3.267h2.858a.696.696 0 0 0 .678-.69v-1.942c0-.368-.31-.635-.678-.635zm4.821 1.67v.907A1.965 1.965 0 0 1 2.858 15H0v6c0 1.662 1.338 3 3 3h18c1.662 0 3-1.338 3-3v-1.393h-2.942c-1.092 0-1.986-.913-1.986-2.005v-.445c-4.046-.032-5.598-1.333-6.983-2.544-1.437-1.257-2.751-2.431-7.268-2.496zM21.058 15a.644.644 0 0 0-.647.66v1.942c0 .368.278.612.647.612H24V15z",
            "category": "IoT"
        },
        {
            "name": "Python",
            "description": "A versatile, high-level programming language widely used for web development, data analysis, AI, and automation.",
            "level": "Advanced",
            "icon": "M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-1.5 3.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm10.5-3c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z", // Placeholder for Python icon - please replace with actual Python SVG path
            "category": "Web Dev"
        },
        {
            "name": "MQTT",
            "description": "A lightweight messaging protocol for IoT devices, enabling efficient communication between constrained devices.",
            "level": "Advanced",
            "icon": "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 3.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm10.5-3c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z", // Placeholder for MQTT icon - please replace with actual MQTT SVG path
            "category": "IoT"
        },
        {
            "name": "JavaScript",
            "description": "The foundational programming language of the web, essential for interactive front-end and powerful back-end development.",
            "level": "Advanced",
            "icon": "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 3.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm10.5-3c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z", // Placeholder for JavaScript icon - please replace with actual JavaScript SVG path
            "category": "Web Dev"
        },
        {
            "name": "HTML5",
            "description": "The latest standard for structuring and presenting content on the World Wide Web, forming the backbone of web pages.",
            "level": "Advanced",
            "icon": "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 3.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm10.5-3c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z", // Placeholder for HTML5 icon - please replace with actual HTML5 SVG path
            "category": "Web Dev"
        },
        {
            "name": "CSS3",
            "description": "The styling language used for describing the presentation of a document written in HTML, enabling responsive and visually appealing designs.",
            "level": "Advanced",
            "icon": "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 3.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm10.5-3c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z", // This is a placeholder icon, please replace with actual CSS3 SVG path
            "category": "Web Dev"
        },
        {
            "name": "Express.js",
            "description": "A fast, unopinionated, minimalist web framework for Node.js, used for building robust APIs and web applications.",
            "level": "Advanced",
            "icon": "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 3.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm10.5-3c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z", // This is a placeholder icon, please replace with actual Express.js SVG path
            "category": "Web Dev"
        },
        {
            "name": "React",
            "description": "A JavaScript library for building user interfaces, known for its component-based architecture and declarative approach.",
            "level": "Advanced",
            "icon": "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 3.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm10.5-3c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z", // This is a placeholder icon, please replace with actual React SVG path
            "category": "Web Dev"
        },
        {
            "name": "MongoDB",
            "description": "A popular NoSQL database program, which uses JSON-like documents with optional schemas for flexible data storage.",
            "level": "Advanced",
            "icon": "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 3.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm10.5-3c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z", // This is a placeholder icon, please replace with actual MongoDB SVG path
            "category": "Database"
        },
        {
            "name": "PostgreSQL",
            "description": "A powerful, open-source object-relational database system with a strong reputation for reliability, feature robustness, and performance.",
            "level": "Advanced",
            "icon": "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 3.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm10.5-3c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z", // This is a placeholder icon, please replace with actual PostgreSQL SVG path
            "category": "Database"
        },
        {
            "name": "MySQL",
            "description": "An open-source relational database management system (RDBMS) widely used for web applications, known for its speed and reliability.",
            "level": "Advanced",
            "icon": "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 3.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm10.5-3c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z", // This is a placeholder icon, please replace with actual MySQL SVG path
            "category": "Database"
        },
        {
            "name": "Arduino IDE",
            "description": "An open-source software for writing and uploading code to Arduino boards, simplifying microcontroller programming.",
            "level": "Advanced",
            "icon": "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 3.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm10.5-3c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z", // This is a placeholder icon, please replace with actual Arduino IDE SVG path
            "category": "IoT"
        },
        {
            "name": "Grafana",
            "description": "An open-source platform for monitoring and observability, allowing you to query, visualize, alert on, and explore your metrics, logs, and traces.",
            "level": "Advanced",
            "icon": "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 3.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm10.5-3c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z", // This is a placeholder icon, please replace with actual Grafana SVG path
            "category": "IoT"
        },
        {
            "name": "PHP",
            "description": "A popular general-purpose scripting language that is especially suited to web development, often embedded into HTML.",
            "level": "Advanced",
            "icon": "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 3.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm10.5-3c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z", // This is a placeholder icon, please replace with actual PHP SVG path
            "category": "Web Dev"
        },
        {
            "name": "Laravel",
            "description": "A free, open-source PHP web framework, intended for the development of web applications following the model–view–controller (MVC) architectural pattern.",
            "level": "Advanced",
            "icon": "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 3.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm10.5-3c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z", // This is a placeholder icon, please replace with actual Laravel SVG path
            "category": "Web Dev"
        }
];
export default skills;