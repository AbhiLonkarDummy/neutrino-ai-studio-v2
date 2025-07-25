const usecaseDataById = {
  "0001": {
    title: "Smart Triage",
    description:
      "Leverage AI to quickly categorize patients based on urgency, improving ER efficiency and patient outcomes.",
    imageUrl: "usecasePhotos/image1.jpg",
    link: "/usecases/healthcare/smart-triage",
    category: "Healthcare",
    problem:
      "Emergency rooms face overwhelming patient loads and difficulty in triaging effectively.",
    solution:
      "AI models analyze symptoms and history in real-time to assign priority levels.",
    benefits: [
      "Faster patient prioritization",
      "Reduced wait times",
      "Improved patient outcomes",
    ],
    testimonials: [
      {
        name: "Dr. Aisha Patel",
        role: "ER Physician",
        feedback:
          "Smart Triage has transformed our intake process. We can now identify critical cases much faster.",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      },
      {
        name: "Mark Jensen",
        role: "Hospital Administrator",
        feedback:
          "Triage times dropped by 40% since integrating this solution.",
        avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      },
      {
        name: "Sandra Liu",
        role: "Patient Experience Lead",
        feedback:
          "Patients report feeling seen and treated quicker. It's a game changer.",
        avatar: "https://randomuser.me/api/portraits/women/47.jpg",
      },
    ],
  },
  "0002": {
    title: "Remote Monitoring",
    description:
      "Continuously monitor patient vitals remotely to reduce hospital visits and enhance chronic care management.",
    imageUrl: "usecasePhotos/image2.jpg",
    link: "/usecases/healthcare/remote-monitoring",
    category: "Healthcare",
    problem:
      "Chronic care patients require frequent monitoring, overwhelming healthcare systems.",
    solution:
      "Remote devices transmit real-time vitals, enabling proactive care.",
    benefits: [
      "Early intervention in critical cases",
      "Lower readmission rates",
      "Higher patient convenience",
    ],
    testimonials: [
      {
        name: "Julia Mendes",
        role: "Chronic Care Nurse",
        feedback:
          "Remote monitoring gives us real-time data to support patients without hospital visits.",
        avatar: "https://randomuser.me/api/portraits/women/49.jpg",
      },
      {
        name: "Dr. Eric Hoffman",
        role: "Pulmonologist",
        feedback:
          "I can track trends over time and adjust treatment much faster.",
        avatar: "https://randomuser.me/api/portraits/men/50.jpg",
      },
      {
        name: "Anita Rao",
        role: "Patient",
        feedback:
          "I feel safe knowing my condition is being watched even when I’m at home.",
        avatar: "https://randomuser.me/api/portraits/women/51.jpg",
      },
    ],
  },
  "0003": {
    title: "AI Diagnosis",
    description:
      "Assist doctors by analyzing medical data and suggesting likely diagnoses, improving accuracy and speed.",
    imageUrl: "usecasePhotos/image3.jpg",
    link: "/usecases/healthcare/ai-diagnosis",
    category: "Healthcare",
    problem:
      "Doctors face increasing diagnostic complexity with time constraints.",
    solution:
      "AI models process vast amounts of patient data and medical literature to provide diagnostic support.",
    benefits: [
      "Improved diagnostic accuracy",
      "Faster treatment decisions",
      "Reduced diagnostic errors",
    ],
    testimonials: [
      {
        name: "Dr. Rachel Gomez",
        role: "Radiologist",
        feedback:
          "AI helps us catch conditions we might otherwise miss, especially in complex cases.",
        avatar: "https://randomuser.me/api/portraits/women/52.jpg",
      },
      {
        name: "James Underwood",
        role: "Clinic Manager",
        feedback:
          "We’ve seen a marked drop in second-opinion consultations. AI gives confidence.",
        avatar: "https://randomuser.me/api/portraits/men/53.jpg",
      },
      {
        name: "Maya Singh",
        role: "Health Policy Analyst",
        feedback: "This sets a new benchmark in healthcare diagnostics.",
        avatar: "https://randomuser.me/api/portraits/women/54.jpg",
      },
    ],
  },
  "0004": {
    title: "Drug Discovery",
    description:
      "Use AI to forecast patient no-shows and optimize appointment scheduling in clinics.",
    imageUrl: "usecasePhotos/image4.jpg",
    link: "/usecases/healthcare/predictive-scheduling",
    category: "Healthcare",
    problem:
      "No-shows and scheduling inefficiencies cost clinics time and revenue.",
    solution:
      "AI predicts attendance likelihood, enabling smarter scheduling buffers.",
    benefits: [
      "Higher appointment efficiency",
      "Reduced waitlists",
      "Increased patient throughput",
    ],
    testimonials: [
      {
        name: "Nina Patel",
        role: "Clinic Receptionist",
        feedback:
          "Fewer no-shows and smoother days — this has changed how we operate.",
        avatar: "https://randomuser.me/api/portraits/women/55.jpg",
      },
      {
        name: "Dr. Leo Williams",
        role: "General Practitioner",
        feedback:
          "We now see more patients each week without overwhelming staff.",
        avatar: "https://randomuser.me/api/portraits/men/56.jpg",
      },
      {
        name: "Grace Montgomery",
        role: "Operations Lead",
        feedback: "We improved efficiency by 30% with predictive scheduling.",
        avatar: "https://randomuser.me/api/portraits/women/57.jpg",
      },
    ],
  },
  "0005": {
    title: "Inventory Forecasting",
    description:
      "Predict demand for medical supplies using historical usage patterns and seasonal trends.",
    imageUrl: "usecasePhotos/image5.jpg",
    link: "/usecases/supplychain/inventory-forecasting",
    category: "Supply Chain",
    problem:
      "Hospitals often overstock or understock critical medical supplies.",
    solution:
      "AI models analyze past usage and predict future demand with high accuracy.",
    benefits: [
      "Reduced wastage",
      "Cost-effective inventory management",
      "Improved supply availability",
    ],
    testimonials: [
      {
        name: "Thomas Evans",
        role: "Procurement Manager",
        feedback:
          "Our stockouts dropped by 70% since we started using this AI tool.",
        avatar: "https://randomuser.me/api/portraits/men/58.jpg",
      },
      {
        name: "Linda Zhou",
        role: "Warehouse Lead",
        feedback:
          "Fewer emergencies, less rush ordering. The system just works.",
        avatar: "https://randomuser.me/api/portraits/women/59.jpg",
      },
      {
        name: "Henry Miller",
        role: "Logistics Director",
        feedback:
          "Forecasts are eerily accurate. We trust the AI more than spreadsheets.",
        avatar: "https://randomuser.me/api/portraits/men/60.jpg",
      },
    ],
  },
  "0006": {
    title: "Route Optimization",
    description:
      "Streamline the procurement process with AI-driven vendor matching and approval routing.",
    imageUrl: "usecasePhotos/image6.jpg",
    link: "/usecases/supplychain/procurement-automation",
    category: "Supply Chain",
    problem: "Manual procurement is slow, error-prone, and lacks transparency.",
    solution:
      "Automated workflows and smart matching reduce manual load and delays.",
    benefits: [
      "Faster approvals",
      "Reduced procurement errors",
      "Better vendor selection",
    ],
    testimonials: [
      {
        name: "Carlos Ramirez",
        role: "Procurement Officer",
        feedback: "We cut down cycle time from 8 days to 2 with automation.",
        avatar: "https://randomuser.me/api/portraits/men/61.jpg",
      },
      {
        name: "Simran Kaur",
        role: "Finance Controller",
        feedback:
          "Tracking is clear, consistent, and error-free. This is real progress.",
        avatar: "https://randomuser.me/api/portraits/women/62.jpg",
      },
      {
        name: "Jordan Clarke",
        role: "Vendor Manager",
        feedback: "Vendor selection is fair and data-driven now. Less hassle.",
        avatar: "https://randomuser.me/api/portraits/men/63.jpg",
      },
    ],
  },
  "0007": {
    title: "Demand Planning",
    description:
      "Identify at-risk customers and proactively retain them using predictive analytics.",
    imageUrl: "usecasePhotos/image7.jpg",
    link: "/usecases/enterprise/customer-churn",
    category: "Enterprise Platforms",
    problem: "Losing customers without understanding why hurts growth.",
    solution:
      "AI detects early signs of churn and suggests retention strategies.",
    benefits: [
      "Higher customer retention",
      "Targeted outreach",
      "Better customer insights",
    ],
    testimonials: [
      {
        name: "Divya Krishnan",
        role: "Customer Success Lead",
        feedback:
          "Churn rates dropped significantly — we’re finally ahead of the curve.",
        avatar: "https://randomuser.me/api/portraits/women/64.jpg",
      },
      {
        name: "Chris Allen",
        role: "CRM Specialist",
        feedback: "We now know who’s leaving before they even tell us.",
        avatar: "https://randomuser.me/api/portraits/men/65.jpg",
      },
      {
        name: "Grace Li",
        role: "Growth Marketer",
        feedback: "Retention campaigns are smarter and way more effective now.",
        avatar: "https://randomuser.me/api/portraits/women/66.jpg",
      },
    ],
  },
  "0008": {
    title: "AI Recommender",
    description:
      "Automate repetitive business operations using AI-driven workflows to save time and reduce error.",
    imageUrl: "usecasePhotos/image8.jpg",
    link: "/usecases/enterprise/process-automation",
    category: "Enterprise Platforms",
    problem:
      "Manual tasks slow down productivity and are prone to human error.",
    solution: "AI bots automate routine tasks across departments.",
    benefits: [
      "Faster task execution",
      "Fewer manual errors",
      "Free up team resources",
    ],
    testimonials: [
      {
        name: "Kiran Patel",
        role: "Operations Director",
        feedback:
          "We automated our document workflows and saved 30 hours per week.",
        avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      },
      {
        name: "Lena Zhu",
        role: "Compliance Analyst",
        feedback: "Automation reduced our processing errors by half.",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      },
      {
        name: "Harold Dean",
        role: "IT Manager",
        feedback:
          "Setting up workflows was easy and impactful across all departments.",
        avatar: "https://randomuser.me/api/portraits/men/69.jpg",
      },
    ],
  },
  "0009": {
    title: "Personalized UX",
    description:
      "Deploy intelligent chatbots and voice assistants to handle customer inquiries instantly and around the clock.",
    imageUrl: "usecasePhotos/image9.jpg",
    link: "/usecases/customer-support/ai-chatbots",
    category: "Customer Service",
    problem: "Customer queries are delayed due to limited human resources.",
    solution: "AI bots manage FAQs, support tickets, and routing.",
    benefits: [
      "24/7 support",
      "Faster issue resolution",
      "Lower support costs",
    ],
    testimonials: [
      {
        name: "Isla Fernandez",
        role: "Customer Experience Head",
        feedback: "Support wait times dropped by 60% with AI in place.",
        avatar: "https://randomuser.me/api/portraits/women/70.jpg",
      },
      {
        name: "Noah Grant",
        role: "Support Lead",
        feedback: "We’ve scaled our support team without hiring more agents.",
        avatar: "https://randomuser.me/api/portraits/men/71.jpg",
      },
      {
        name: "Ritika Shah",
        role: "VP of Customer Success",
        feedback:
          "Customers love getting instant responses. CSAT scores went up.",
        avatar: "https://randomuser.me/api/portraits/women/72.jpg",
      },
    ],
  },
  "0010": {
    title: "Fraud Detection",
    description:
      "Spot suspicious transactions and behavior patterns in real-time to protect your business from fraud.",
    imageUrl: "usecasePhotos/image10.jpg",
    link: "/usecases/security/fraud-detection",
    category: "Security",
    problem: "Traditional systems fail to detect modern fraud quickly enough.",
    solution: "AI models analyze transactions and flag anomalies instantly.",
    benefits: [
      "Real-time fraud alerts",
      "Reduced financial loss",
      "Enhanced security trust",
    ],
    testimonials: [
      {
        name: "Michelle Wong",
        role: "Risk Analyst",
        feedback: "Fraud attempts have been cut in half since implementation.",
        avatar: "https://randomuser.me/api/portraits/women/73.jpg",
      },
      {
        name: "Derek Yates",
        role: "Security Engineer",
        feedback: "AI catches patterns no human ever would.",
        avatar: "https://randomuser.me/api/portraits/men/74.jpg",
      },
      {
        name: "Angela Park",
        role: "Compliance Officer",
        feedback:
          "It’s reliable, fast, and integrates with all our internal tools.",
        avatar: "https://randomuser.me/api/portraits/women/75.jpg",
      },
    ],
  },
  "0011": {
    title: "Workforce Planning",
    description:
      "Anticipate customer demand using predictive analytics to optimize production and reduce surplus.",
    imageUrl: "usecasePhotos/image11.jpg",
    link: "/usecases/supplychain/demand-forecasting",
    category: "Supply Chain",
    problem:
      "Inaccurate demand forecasts lead to overproduction or missed opportunities.",
    solution:
      "AI models forecast demand by analyzing trends, seasons, and external factors.",
    benefits: [
      "Optimized inventory levels",
      "Improved production planning",
      "Reduced overhead costs",
    ],
    testimonials: [
      {
        name: "Nadia Chen",
        role: "Inventory Manager",
        feedback:
          "Our forecast accuracy has never been better. Overstocking is down by 35%.",
        avatar: "https://randomuser.me/api/portraits/women/76.jpg",
      },
      {
        name: "Liam Boyd",
        role: "Supply Chain Analyst",
        feedback:
          "We’ve shifted from reactive to proactive planning—huge shift for us.",
        avatar: "https://randomuser.me/api/portraits/men/77.jpg",
      },
      {
        name: "Sophia Marin",
        role: "Logistics Head",
        feedback:
          "AI insights help us better align supply with real market demand.",
        avatar: "https://randomuser.me/api/portraits/women/78.jpg",
      },
    ],
  },
  "0012": {
    title: "Process Automation",
    description:
      "Use AI to extract insights from customer support calls, sales conversations, and feedback loops.",
    imageUrl: "usecasePhotos/image12.jpg",
    link: "/usecases/analytics/voice-analytics",
    category: "Analytics",
    problem: "Voice data is underutilized and hard to analyze manually.",
    solution:
      "Natural Language Processing turns calls into structured insights.",
    benefits: [
      "Identify customer pain points",
      "Improve sales performance",
      "Enhance compliance monitoring",
    ],
    testimonials: [
      {
        name: "Reema Nair",
        role: "Sales Ops Lead",
        feedback:
          "We now coach sales reps based on real voice trends. It’s data-driven training.",
        avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      },
      {
        name: "Omar Velasquez",
        role: "Call Center Manager",
        feedback:
          "We detect emotion and sentiment shifts to improve agent response.",
        avatar: "https://randomuser.me/api/portraits/men/80.jpg",
      },
      {
        name: "Claire Bouchard",
        role: "CX Strategist",
        feedback:
          "Voice analytics gave us patterns we never saw with manual audits.",
        avatar: "https://randomuser.me/api/portraits/women/81.jpg",
      },
    ],
  },
  "0013": {
    title: "Sales Dashboard",
    description:
      "Reduce power usage and carbon footprint through smart AI-powered monitoring and automation.",
    imageUrl: "usecasePhotos/image13.jpg",
    link: "/usecases/operations/energy-optimization",
    category: "Operations",
    problem:
      "Businesses struggle with high energy costs and inefficient systems.",
    solution:
      "AI continuously analyzes usage and recommends energy-saving actions.",
    benefits: [
      "Lower utility costs",
      "Reduced environmental impact",
      "Improved operational efficiency",
    ],
    testimonials: [
      {
        name: "Daniel Braun",
        role: "Facilities Manager",
        feedback:
          "Energy bills dropped 20% within 3 months of using this system.",
        avatar: "https://randomuser.me/api/portraits/men/82.jpg",
      },
      {
        name: "Harpreet Dhillon",
        role: "Sustainability Officer",
        feedback:
          "We’re hitting our ESG targets thanks to these energy insights.",
        avatar: "https://randomuser.me/api/portraits/women/83.jpg",
      },
      {
        name: "Marco Ricci",
        role: "Plant Supervisor",
        feedback:
          "Automated controls mean we waste less without lifting a finger.",
        avatar: "https://randomuser.me/api/portraits/men/84.jpg",
      },
    ],
  },
  "0014": {
    title: "Customer Insights",
    description:
      "Automate resume screening, employee onboarding, and feedback analysis to speed up HR processes.",
    imageUrl: "usecasePhotos/image14.jpg",
    link: "/usecases/operations/hr-automation",
    category: "Operations",
    problem: "HR teams are overwhelmed by repetitive, manual tasks.",
    solution:
      "AI automates resume parsing, onboarding steps, and sentiment analysis from employee surveys.",
    benefits: [
      "Faster hiring process",
      "Better candidate matches",
      "Improved employee retention",
    ],
    testimonials: [
      {
        name: "Jenna Morrison",
        role: "HR Director",
        feedback:
          "We reduced screening time from days to hours—huge productivity boost.",
        avatar: "https://randomuser.me/api/portraits/women/85.jpg",
      },
      {
        name: "Robert Hayes",
        role: "Recruitment Lead",
        feedback:
          "The AI highlights top candidates we might’ve overlooked before.",
        avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      },
      {
        name: "Emily Wang",
        role: "People Ops Manager",
        feedback: "New hires report smoother onboarding thanks to automation.",
        avatar: "https://randomuser.me/api/portraits/women/87.jpg",
      },
    ],
  },
  "0015": {
    title: "Threat Detection",
    description:
      "Use machine learning to group customers by behavior, demographics, and preferences for targeted marketing.",
    imageUrl: "usecasePhotos/image15.jpg",
    link: "/usecases/analytics/customer-segmentation",
    category: "Analytics",
    problem: "Generic campaigns fail to connect with diverse customer bases.",
    solution:
      "AI segments customers for personalized experiences and better engagement.",
    benefits: [
      "Higher marketing ROI",
      "Improved customer retention",
      "Better product-market alignment",
    ],
    testimonials: [
      {
        name: "Tanvi Shah",
        role: "Marketing Strategist",
        feedback:
          "We’ve doubled our conversion rates through precise segmentation.",
        avatar: "https://randomuser.me/api/portraits/women/88.jpg",
      },
      {
        name: "George Kim",
        role: "Growth Manager",
        feedback:
          "The clusters AI built were far more nuanced than we could do manually.",
        avatar: "https://randomuser.me/api/portraits/men/89.jpg",
      },
      {
        name: "Isabella Romero",
        role: "Customer Success Lead",
        feedback:
          "Our retention programs now speak to each segment’s real needs.",
        avatar: "https://randomuser.me/api/portraits/women/90.jpg",
      },
    ],
  },
  "0016": {
    title: "Access Control",
    description:
      "Detect anomalies and fraudulent activity in real-time using AI-powered monitoring systems.",
    imageUrl: "usecasePhotos/image16.jpg",
    link: "/usecases/security/fraud-detection",
    category: "Security",
    problem:
      "Manual fraud detection is too slow and error-prone in fast-moving transactions.",
    solution:
      "AI flags suspicious patterns instantly using behavior-based analysis.",
    benefits: [
      "Real-time fraud alerts",
      "Lower financial losses",
      "Improved trust and compliance",
    ],
    testimonials: [
      {
        name: "Vikram Joshi",
        role: "Risk Analyst",
        feedback:
          "We catch fraud attempts before any damage is done. It’s a must-have.",
        avatar: "https://randomuser.me/api/portraits/men/91.jpg",
      },
      {
        name: "Sarah Whitman",
        role: "Security Operations Lead",
        feedback:
          "Accuracy is phenomenal—false positives have dropped significantly.",
        avatar: "https://randomuser.me/api/portraits/women/92.jpg",
      },
      {
        name: "Luis Moreno",
        role: "Compliance Manager",
        feedback:
          "Our audits are cleaner and faster since implementing this system.",
        avatar: "https://randomuser.me/api/portraits/men/93.jpg",
      },
    ],
  },
  "0017": {
    title: "Meeting Summarizer",
    description:
      "Deploy AI chatbots to handle customer queries, support, and routing with human-like interaction.",
    imageUrl: "usecasePhotos/image17.jpg",
    link: "/usecases/productivity/smart-chatbots",
    category: "Productivity",
    problem:
      "Customer support teams are overwhelmed with repetitive questions and high ticket volumes.",
    solution:
      "AI chatbots manage FAQs, triage complex queries, and escalate only when necessary.",
    benefits: [
      "24/7 instant support",
      "Reduced support costs",
      "Improved customer satisfaction",
    ],
    testimonials: [
      {
        name: "Olivia Freeman",
        role: "Customer Experience Lead",
        feedback:
          "Support response time dropped by 60% after launching the chatbot.",
        avatar: "https://randomuser.me/api/portraits/women/94.jpg",
      },
      {
        name: "Daniel Koch",
        role: "Tech Support Manager",
        feedback:
          "The bot resolves over 70% of queries without human intervention.",
        avatar: "https://randomuser.me/api/portraits/men/95.jpg",
      },
      {
        name: "Mei Lin",
        role: "Product Manager",
        feedback:
          "We customized the bot to reflect our brand voice—it’s seamless.",
        avatar: "https://randomuser.me/api/portraits/women/96.jpg",
      },
    ],
  },
  "0018": {
    title: "Focus Assistant",
    description:
      "Predict equipment failure before it happens to schedule proactive maintenance and reduce downtime.",
    imageUrl: "usecasePhotos/image18.jpg",
    link: "/usecases/operations/maintenance-forecasting",
    category: "Operations",
    problem:
      "Unexpected equipment failures disrupt production and increase repair costs.",
    solution:
      "AI models analyze usage patterns and sensor data to forecast maintenance needs.",
    benefits: [
      "Reduced unplanned downtime",
      "Lower maintenance costs",
      "Extended equipment lifespan",
    ],
    testimonials: [
      {
        name: "Carlos Ng",
        role: "Factory Manager",
        feedback:
          "We’ve seen a 30% drop in breakdown incidents since adopting this system.",
        avatar: "https://randomuser.me/api/portraits/men/97.jpg",
      },
      {
        name: "Fatima Malik",
        role: "Operations Analyst",
        feedback:
          "It helps us plan ahead instead of constantly reacting to failures.",
        avatar: "https://randomuser.me/api/portraits/women/98.jpg",
      },
      {
        name: "David Shore",
        role: "Mechanical Engineer",
        feedback: "Maintenance is now smart and predictable, not guesswork.",
        avatar: "https://randomuser.me/api/portraits/men/99.jpg",
      },
    ],
  },
  "0019": {
    title: "Chatbots",
    description:
      "Integrate intelligent voice interfaces into applications for hands-free control and accessibility.",
    imageUrl: "usecasePhotos/image19.jpg",
    link: "/usecases/productivity/voice-assistants",
    category: "Productivity",
    problem:
      "Manual input is time-consuming and limits accessibility for some users.",
    solution:
      "Voice assistants understand and respond to commands, performing tasks via speech.",
    benefits: [
      "Hands-free interaction",
      "Enhanced accessibility",
      "Faster task execution",
    ],
    testimonials: [
      {
        name: "Noah Bennett",
        role: "Product Designer",
        feedback: "Voice commands have boosted app engagement and ease-of-use.",
        avatar: "https://randomuser.me/api/portraits/men/100.jpg",
      },
      {
        name: "Sofia Alvarez",
        role: "UX Researcher",
        feedback: "Users love the speed and accessibility it offers.",
        avatar: "https://randomuser.me/api/portraits/women/101.jpg",
      },
      {
        name: "Ethan Ray",
        role: "App Developer",
        feedback:
          "Adding voice support helped us stand out in a crowded market.",
        avatar: "https://randomuser.me/api/portraits/men/102.jpg",
      },
    ],
  },
  "0020": {
    title: "Sentiment Analysis",
    description:
      "Automatically assess risk across transactions, user behavior, or loan profiles using AI-driven insights.",
    imageUrl: "usecasePhotos/image20.jpg",
    link: "/usecases/security/ai-risk-scoring",
    category: "Security",
    problem:
      "Manual risk assessment is slow, inconsistent, and prone to human error.",
    solution:
      "AI evaluates large datasets to generate real-time risk scores based on patterns and anomalies.",
    benefits: [
      "Faster risk assessment",
      "Reduced fraud and exposure",
      "Better decision-making",
    ],
    testimonials: [
      {
        name: "Angela Curtis",
        role: "Risk Officer",
        feedback:
          "We spot fraud attempts much earlier with this AI risk engine.",
        avatar: "https://randomuser.me/api/portraits/women/103.jpg",
      },
      {
        name: "Ravi Sharma",
        role: "Financial Analyst",
        feedback:
          "Risk scoring accuracy has improved drastically—this is next-gen.",
        avatar: "https://randomuser.me/api/portraits/men/104.jpg",
      },
      {
        name: "Lucy Martin",
        role: "Compliance Lead",
        feedback:
          "Our audits are now backed by data-driven scores, reducing subjectivity.",
        avatar: "https://randomuser.me/api/portraits/women/105.jpg",
      },
    ],
  },
  "0021": {
    title: "Voice Assistants",
    description:
      "Automate repetitive business workflows across departments to boost efficiency and reduce errors.",
    imageUrl: "usecasePhotos/image21.jpg",
    link: "/usecases/productivity/workflow-automation",
    category: "Productivity",
    problem:
      "Teams waste hours on repetitive manual tasks, delaying core work.",
    solution:
      "AI-powered tools automate tasks like approvals, data entry, and notifications.",
    benefits: [
      "Faster task completion",
      "Fewer manual errors",
      "More time for strategic work",
    ],
    testimonials: [
      {
        name: "Julian Park",
        role: "Operations Director",
        feedback:
          "Automation has cut processing time by 50%—our team can now focus on growth.",
        avatar: "https://randomuser.me/api/portraits/men/106.jpg",
      },
      {
        name: "Nina Wadhwa",
        role: "HR Manager",
        feedback:
          "Leave approvals, onboarding, and payroll—all automated now. Total game changer.",
        avatar: "https://randomuser.me/api/portraits/women/107.jpg",
      },
      {
        name: "Arjun Verma",
        role: "IT Lead",
        feedback:
          "Setting up cross-departmental workflows took days before. Now it’s drag and drop.",
        avatar: "https://randomuser.me/api/portraits/men/108.jpg",
      },
    ],
  },
};

export default usecaseDataById;
