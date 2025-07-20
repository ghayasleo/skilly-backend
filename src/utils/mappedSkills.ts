const mappedSkills = [
  {
    "Database Administrator": [
      "SQL",
      "Database Backup & Recovery",
      "Performance Tuning",
      "Data Security",
      "Oracle/MySQL/PostgreSQL",
      "Database Design"
    ]
  },
  {
    "Hardware Engineer": ["Computer Architecture", "PCB Design", "Embedded Systems", "Troubleshooting", "Hardware Testing", "Circuit Design"]
  },
  {
    "Application Support Engineer": [
      "Issue Troubleshooting",
      "SQL/Database Knowledge",
      "Scripting (Shell/Python)",
      "Application Monitoring Tools",
      "ITIL Processes",
      "Customer Communication"
    ]
  },
  {
    "Cyber Security Specialist": [
      "Network Security",
      "Penetration Testing",
      "Incident Response",
      "Firewall Management",
      "SIEM Tools",
      "Encryption Techniques"
    ]
  },
  {
    "Networking Engineer": [
      "TCP/IP",
      "Routing & Switching",
      "Firewall Configuration",
      "Network Monitoring Tools",
      "VPN & Remote Access",
      "Cisco/Juniper Devices"
    ]
  },
  {
    "Software Developer": [
      "Programming Languages (e.g. Java, Python)",
      "Data Structures & Algorithms",
      "Version Control (Git)",
      "Debugging",
      "APIs & Web Services",
      "Database Integration"
    ]
  },
  {
    "API Specialist": ["REST & SOAP APIs", "Postman/Swagger", "API Security", "JSON & XML", "API Documentation", "OAuth & Authentication"]
  },
  {
    "Project Manager": [
      "Project Planning",
      "Agile/Scrum Methodologies",
      "Risk Management",
      "Stakeholder Communication",
      "Budgeting",
      "Project Management Tools (e.g. Jira, MS Project)"
    ]
  },
  {
    "Information Security Specialist": [
      "Security Audits",
      "Risk Assessment",
      "Compliance (ISO 27001, GDPR)",
      "Vulnerability Management",
      "Security Tools (Nessus, Wireshark)",
      "Access Control Policies"
    ]
  },
  {
    "Technical Writer": [
      "Technical Documentation",
      "Markdown/LaTeX",
      "Research & Analysis",
      "Tools like MS Word, Confluence",
      "API Documentation",
      "Clarity in Writing"
    ]
  },
  {
    "AI ML Specialist": [
      "Machine Learning Algorithms",
      "Python (NumPy, Pandas, scikit-learn)",
      "Model Training & Evaluation",
      "Data Preprocessing",
      "Deep Learning (TensorFlow/PyTorch)",
      "Mathematics & Statistics"
    ]
  },
  {
    "Software tester": [
      "Manual Testing",
      "Automation Tools (Selenium, JUnit)",
      "Test Case Design",
      "Bug Tracking Systems (Jira)",
      "Performance Testing",
      "Regression Testing"
    ]
  },
  {
    "Business Analyst": [
      "Requirements Gathering",
      "Stakeholder Communication",
      "Data Analysis",
      "Process Modeling (BPMN)",
      "Documentation",
      "Tools (Excel, Power BI, Jira)"
    ]
  },
  {
    "Customer Service Executive": ["Communication Skills", "CRM Software", "Problem Solving", "Empathy", "Conflict Resolution", "Time Management"]
  },
  {
    "Helpdesk Engineer": [
      "Technical Troubleshooting",
      "Remote Support Tools",
      "Operating Systems",
      "Ticketing Systems",
      "Basic Networking",
      "Customer Support"
    ]
  },
  {
    "Graphics Designer": ["Adobe Photoshop/Illustrator", "Color Theory", "Typography", "UI/UX Principles", "Creative Thinking", "Figma/Sketch/Canva"]
  }
];

export const getMappedSkills = (skill: string) => {
  const mappedSkill = mappedSkills.find((item) => Object.keys(item)[0] === skill);
  if (mappedSkill) {
    return mappedSkill[skill];
  }
  return [];
};

export default getMappedSkills;

// Database Administrator
// Hardware Engineer
// Application Support Engineer
// Cyber Security Specialist
// Networking Engineer
// Software Developer
// API Specialist
// Project Manager
// Information Security Specialist
// Technical Writer
// AI ML Specialist
// Software tester
// Business Analyst
// Customer Service Executive
// Helpdesk Engineer
// Graphics Designer
