import { ExperienceItem, ProjectItem, SkillCategory, EducationItem, CertificationItem, AwardItem } from './types';
import avatarImage from './assets/images/akshatha_avatar_1784016217157.jpg';
import heroBgImage from './assets/images/data_pipelines_1784016231338.jpg';

export const personalInfo = {
  name: 'Akshatha',
  title: 'Data Engineer | Analytics Engineer',
  location: 'Bremen, Germany',
  email: 'kulalakshatha142@gmail.com',
  linkedin: 'https://www.linkedin.com/in/akshatha-aa7410132/',
  github: 'https://github.com/aakshatha02',
  avatarPath: avatarImage,
  heroBgPath: heroBgImage,
  summary: "I'm a Data Engineer and Data Science graduate with experience across data operations, analytics, and engineering roles. I build and maintain reliable ETL/ELT pipelines, develop cloud-based data solutions, and create data-driven Power BI dashboards. I enjoy working with Python, SQL, Azure, and modern data tools to deliver scalable and efficient data solutions, with a strong focus on performance, data quality, and automation."
};

export const experiences: ExperienceItem[] = [
  {
    id: 'exp1',
    company: 'Heilig Consulting',
    role: 'Analytics Engineer - Working Student',
    location: '',
    period: 'May 2023 – Aug 2024',
    highlights: [],
    tags: []
  },
  {
    id: 'exp2',
    company: 'Tata Consultancy Services',
    role: 'Data Engineer',
    location: '',
    period: 'Mar 2022 – Aug 2022',
    highlights: [],
    tags: []
  },
  {
    id: 'exp3',
    company: 'DXC Technology',
    role: 'Data Operations Engineer',
    location: '',
    period: 'Jun 2020 – Mar 2022',
    highlights: [],
    tags: []
  },
  {
    id: 'exp4',
    company: 'DXC Technology',
    role: 'Websphere Administrator',
    location: '',
    period: 'Oct 2018 – Jun 2020',
    highlights: [],
    tags: []
  },
  {
    id: 'exp5',
    company: 'Foiwe Info Global Solutions',
    role: 'System Analyst',
    location: '',
    period: 'May 2018 – Oct 2018',
    highlights: [],
    tags: []
  },
  {
    id: 'exp6',
    company: 'OneCity Media Pvt. Ltd',
    role: 'Sales Executive',
    location: '',
    period: 'Oct 2017 – Apr 2018',
    highlights: [],
    tags: []
  }
];

export const projects: ProjectItem[] = [
  {
    id: 'proj1',
    title: 'End-to-End Retail Data Pipeline',
    period: 'Ongoing',
    description: 'Building an end-to-end ELT pipeline using Apache Airflow, Snowflake, and dbt to ingest, load, and transform retail data from external sources. Developing modular Airflow workflows with reusable Python utilities for automated data ingestion and Snowflake loading. Designing a layered data warehouse architecture (RAW → STAGING → MART) and implementing dbt models to clean, standardize, and prepare data for analytics. Containerizing the platform using Docker to create a scalable and maintainable data engineering environment.',
    highlights: [],
    techStack: ['dbt', 'Apache Airflow', 'Snowflake', 'Docker', 'Python', 'Dimensional Modeling', 'SQL'],
    metrics: undefined,
    category: 'pipelines',
    githubUrl: 'https://github.com/aakshatha02/Retail-Data-Engineering-Pipeline-dbt-Airflow-Snowflake'
  },
  {
    id: 'proj2',
    title: 'Real-time Data Streaming with Kafka and Cassandra',
    period: '',
    description: 'Designed and developed a real-time data pipeline framework using a modern data engineering stack, integrating Apache Airflow for automated data ingestion from external APIs and Apache Kafka for scalable event streaming. Implemented Zookeeper for distributed coordination and Cassandra as a NoSQL storage solution to support high availability and efficient data management. Containerized the entire infrastructure using Docker to enable seamless deployment, scalability, and service orchestration. Integrated Schema Registry and Control Center to ensure data consistency, schema management, and effective monitoring of the streaming workflow.',
    highlights: [],
    techStack: ['Apache Kafka', 'Cassandra', 'Data Streaming', 'Real-time Processing', 'Python', 'NoSQL Database'],
    metrics: undefined,
    category: 'streaming',
    githubUrl: 'https://github.com/aakshatha02/Realtime-Data-Streaming-with-Kafka-and-Cassandra'
  },
  {
    id: 'proj3',
    title: 'Snowflake dbt Project',
    period: '',
    description: 'Developed an end-to-end data analytics pipeline using the Olist eCommerce dataset, integrating Snowflake as a cloud data warehouse, dbt for data transformation and modeling, and Tableau for business intelligence reporting. Designed and implemented SQL-based transformations to convert raw CSV data into structured analytical data marts for revenue analysis, customer behavior tracking, and business trend evaluation.',
    highlights: [],
    techStack: ['dbt', 'Snowflake', 'Tableau', 'SQL', 'Data Warehousing', 'ELT'],
    metrics: undefined,
    category: 'cloud',
    githubUrl: 'https://github.com/aakshatha02/Snowflake-dbt-project'
  },
  {
    id: 'proj4',
    title: 'Star Schema & Dimension Modeling',
    period: '',
    description: 'Designed and implemented a data warehouse solution using PostgreSQL and Python, transforming raw retail data into a structured Star Schema with multiple dimension tables and a centralized fact table. Developed ETL workflows to automate data ingestion and transformation from staging environments into analytical models using Python libraries such as Pandas and psycopg2. Implemented Slowly Changing Dimension (SCD) Type 2 methodology to maintain historical customer data and enable accurate trend analysis over time. Created SQL scripts for database schema design and developed analytical queries to extract business insights and evaluate performance metrics.',
    highlights: [],
    techStack: ['PostgreSQL', 'Python', 'Pandas', 'psycopg2', 'Dimensional Modeling', 'Star Schema'],
    metrics: undefined,
    category: 'pipelines',
    githubUrl: 'https://github.com/aakshatha02/Star-Schema-Dimension-Modeling'
  },
  {
    id: 'proj5',
    title: "McDonald's Data Analysis",
    period: '',
    description: "Developed a customer analytics project analyzing McDonald's data from the Yelp public dataset, leveraging Databricks, Polars, and Python to process and analyze large-scale business, check-in, and review data. Implemented DistilBERT-based sentiment analysis to evaluate customer feedback and identify service-related trends. Built interactive Power BI dashboards to visualize customer behavior patterns, sentiment insights, and key business metrics, enabling data-driven decision-making.",
    highlights: [],
    techStack: ['Databricks', 'Python', 'Polars', 'DistilBERT', 'Power BI', 'Sentiment Analysis', 'Data Analytics'],
    metrics: undefined,
    category: 'analytics',
    githubUrl: 'https://github.com/aakshatha02/McDonald-s-Data-Analysis'
  },
  {
    id: 'proj6',
    title: 'Germany Renewable Energy Analysis (2015-2020)',
    period: '',
    description: 'Conducted an energy analytics project using Python and Open Power System Data to analyze Germany’s renewable energy transition from 2015 to 2020. Processed and analyzed electricity generation datasets to evaluate wind and solar energy trends, seasonal variations, and renewable adoption patterns. Visualized key insights demonstrating the growth of renewable energy contribution to the national power grid and the impact of sustainability initiatives on reducing carbon emissions.',
    highlights: [],
    techStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Open Power System Data', 'Energy Analytics'],
    metrics: undefined,
    category: 'analytics',
    githubUrl: 'https://github.com/aakshatha02/Germany-Renewable-Energy-Analysis-2015-2020'
  },
  {
    id: 'proj8',
    title: 'Retail Data ETL with Azure',
    period: '',
    description: 'Developed an end-to-end retail analytics pipeline using Microsoft Azure, implementing Azure Data Factory to automate data extraction, transformation, and loading from on-premise sources to cloud storage. Designed ETL workflows to process and transform raw data before loading it into Azure SQL Database as a centralized analytics layer. Created Power BI dashboards to visualize key business metrics, including profit margins, sales trends, and customer behavior insights, enabling data-driven decision-making.',
    highlights: [],
    techStack: ['Azure Data Factory', 'Azure Dataflow', 'Azure SQL', 'Power BI', 'ETL Pipelines', 'Retail Analytics'],
    metrics: undefined,
    category: 'pipelines',
    githubUrl: 'https://github.com/aakshatha02/Retail-Data-ETL-with-Azure'
  },
  {
    id: 'proj9',
    title: 'Automated ETL Pipeline with ELK Stack and Docker',
    period: '',
    description: 'Developed an automated ETL pipeline for FDA food recall data using Docker, Logstash, Jenkins, Elasticsearch, and Kibana. Integrated OpenFDA API data extraction and transformation workflows, with Jenkins-based scheduling to automate monthly data processing. Stored processed data in Elasticsearch and created Kibana dashboards for monitoring and visual analysis, enabling efficient and reliable food safety data management.',
    highlights: [],
    techStack: ['Docker', 'Logstash', 'Jenkins', 'Elasticsearch', 'Kibana', 'ELK Stack', 'API Integration', 'ETL Pipelines'],
    metrics: undefined,
    category: 'pipelines',
    githubUrl: 'https://github.com/aakshatha02/Automated-ETL-Pipeline-with-ELK-Stack-and-Docker'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming',
    skills: ['Python', 'SQL', 'HiveQL', 'PySpark'],
    icon: 'Code'
  },
  {
    category: 'Cloud & Data Platforms',
    skills: ['Microsoft Azure', 'GCP'],
    icon: 'Cloud'
  },
  {
    category: 'Big Data Processing & Orchestration',
    skills: ['Apache Kafka', 'Apache Airflow', 'Databricks'],
    icon: 'Cpu'
  },
  {
    category: 'Databases & Warehousing',
    skills: ['Snowflake', 'PostgreSQL', 'MySQL', 'Cassandra'],
    icon: 'Server'
  },
  {
    category: 'Data Visualization & Analytics',
    skills: ['Power BI', 'Tableau', 'DBT', 'DAX', 'Power Query'],
    icon: 'BarChart'
  },
  {
    category: 'DevOps & Tools',
    skills: ['Git / GitHub', 'Jenkins', 'Docker', 'Terraform'],
    icon: 'Settings'
  }
];

export const educationList: EducationItem[] = [
  {
    id: 'edu1',
    degree: 'M.Sc. in Data Science',
    major: '',
    institution: 'Constructor University',
    location: '',
    period: '2022–2024',
    details: []
  },
  {
    id: 'edu2',
    degree: 'B.Tech in Electronics and Communication',
    major: '',
    institution: 'Visveswaraya Technological University',
    location: '',
    period: '2013–2017',
    details: []
  }
];

export const certifications: CertificationItem[] = [
  {
    id: 'cert1',
    name: 'Microsoft Certified: Azure Data Engineer Associate',
    issuer: 'Microsoft',
    date: '2024'
  },
  {
    id: 'cert2',
    name: 'Snowflake Hands-on Essentials',
    issuer: 'Snowflake',
    date: '2024'
  }
];

export const awards: AwardItem[] = [
  {
    id: 'award1',
    title: 'DXC Champs Award',
    description: 'Recognized for outstanding performance and customer impact.',
    issuer: 'DXC Technology',
    year: '2021'
  },
  {
    id: 'award2',
    title: 'DXC Collaborators Award',
    description: 'Awarded for strong teamwork and cross-functional contribution.',
    issuer: 'DXC Technology',
    year: '2021'
  },
  {
    id: 'award3',
    title: 'Eco-Club Leader',
    description: 'Led sustainability initiatives and community projects.',
    issuer: '',
    year: '2021'
  }
];

export const languages = [
  { name: 'English', level: 'C1 (Professional/Fluent)', percent: 90 },
  { name: 'Kannada', level: 'C1 (Native/Fluent)', percent: 95 },
  { name: 'Hindi', level: 'B2 (Professional/Fluent)', percent: 80 },
  { name: 'Deutsch (German)', level: 'B1 (Intermediate)', percent: 60 }
];

export const journeyParagraphs = [
  "If someone had told me during my bachelor's in Electronics and Communication that I would one day be building data pipelines and designing data solutions, I probably wouldn't have believed them.",
  "My career didn't begin with data engineering, it began with curiosity. I started at DXC Technology as an MDM Administrator for the Kaiser Permanente project, where, to be honest, I didn't fully understand what was happening behind the scenes. But as I worked with data every day, I became fascinated by how databases, systems, and information flowed across an organization.",
  "That curiosity led me to a new project for Procter & Gamble, where I was responsible for maintaining ETL/ELT pipelines, troubleshooting production issues, onboarding new data sources, and working with cloud platforms for the first time. It was here that everything started to click. I realized I enjoyed solving data problems and understanding how information moved from one system to another.",
  "As my confidence grew, I transitioned into a Data Engineering role. I found myself enjoying every part of the process, integrating data from multiple sources, designing efficient ELT pipelines, optimizing performance, and collaborating with stakeholders to build reliable solutions.",
  "But I wanted to understand more than just how data moves, I wanted to understand how businesses use data to make decisions. That motivation led me to pursue a Master's in Data Science. Along the way, I explored machine learning, natural language processing, and predictive modeling, while also working as a Data Analyst. Analyzing large datasets taught me an important lesson: even the best models and dashboards are only as good as the quality of the data behind them.",
  "Today, I enjoy working across the entire data lifecycle, from connecting data sources and building scalable pipelines to transforming data into meaningful insights through dashboards. I love finding solutions that are not only technically sound but also efficient in terms of performance, storage, and cost. Looking back, my journey was never a straight path, and I wouldn't change that. Every transition, from managing data systems to engineering scalable pipelines and exploring data science, has shaped the way I approach problems today.",
  "I bring a combination of hands-on data engineering experience, analytical thinking, and a strong understanding of how data can create business value. I am now excited to continue this journey by contributing to teams where I can build reliable data solutions, solve meaningful problems, and keep learning along the way."
];

