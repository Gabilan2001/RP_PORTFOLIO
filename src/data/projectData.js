export const projectInfo = {
  title: "TomatoDoc",
  subtitle: "AI-Powered Tomato Plant Health Monitoring System",
  tagline: "Helping Sri Lankan tomato farmers detect crop problems earlier, treat smarter, and sell at the right time.",
  university: "Sri Lanka Institute of Information Technology",
  faculty: "Faculty of Computing",
  year: "2026",
  groupCode: "R26-SE-032",
  supervisor: "Bimal Gunapala",
  coSupervisor: "Eishan Weerasinghe",
  supervisorEmail: "bimal.g@sliit.lk",
  coSupervisorEmail: "eishan.w@sliit.lk",
};

export const team = [
  { name: "Sivanesangabilan Gabilan", id: "IT22060426", role: "Team Leader", component: "Nutrient Deficiency and Fruit Disease Detection", email: "it22060426@my.sliit.lk", initials: "SG" },
  { name: "A.L.M. Farthas", id: "IT22190734", role: "Member", component: "Leaf Disease Detection with Co-occurrence Awareness", email: "it22190734@my.sliit.lk", initials: "AF" },
  { name: "Vithusha Pathmanathan", id: "IT22208262", role: "Member", component: "Disease Treatment Efficacy Monitoring", email: "IT22208262@my.sliit.lk", initials: "VP" },
  { name: "Rashad M.P.M", id: "IT22295842", role: "Member", component: "Tomato Market Price Forecasting", email: "it22295842@my.sliit.lk", initials: "RM", github: "https://github.com/...", linkedin: "https://linkedin.com/in/..." },
];

export const components = [
  { number: "01", title: "Nutrient Deficiency Detection", description: "MobileNetV2 transfer learning model that detects six types of tomato leaf nutrient deficiency from a smartphone photograph. Classes are Nitrogen, Potassium, Phosphorus, Iron Deficiency, N+K Combined, and Healthy.", tech: ["MobileNetV2", "PyTorch", "Transfer Learning", "Flask", "RAG"], accuracy: "93.30%", accuracyLabel: "Test Accuracy", gap: "0.92%", gapLabel: "Train-Val Gap", color: "green" },
  { number: "02", title: "Fruit Disease Detection", description: "Second MobileNetV2 model that detects five fruit disease classes from tomato fruit photographs. Classes are Anthracnose, Bacterial Spot, Blossom End Rot, Spotted Wilt Virus, and Healthy Tomato.", tech: ["MobileNetV2", "PyTorch", "Transfer Learning", "Flask"], accuracy: "93.14%", accuracyLabel: "Test Accuracy", gap: "2.97%", gapLabel: "Train-Val Gap", color: "red" },
  { number: "03", title: "Leaf Disease Co-occurrence Detection", description: "YOLOv8s object detection model that localises disease symptoms at the lesion level across four classes. Detects Early Blight and Late Blight simultaneously on the same leaf and reports both conditions.", tech: ["YOLOv8s", "EfficientNet-B0", "ChromaDB", "Groq", "RAG"], accuracy: "0.737", accuracyLabel: "mAP@0.5", gap: "76.3%", gapLabel: "Co-occurrence Rate", color: "yellow" },
  { number: "04", title: "Treatment Efficacy Monitoring", description: "U-Net semantic segmentation model that tracks disease severity as a pixel percentage over a seven-day treatment window. Classifies treatment response as Improving, Stable, Worsening, or Recovering.", tech: ["U-Net", "ResNet34", "FastAPI", "SQLite", "OpenWeatherMap"], accuracy: "75-80%", accuracyLabel: "Completion", gap: "Day 1/3/7", gapLabel: "Monitoring Window", color: "blue" },
  { number: "05", title: "Market Price Forecasting", description: "Deep sequential forecasting engine utilizing Direct Multi-Output Bidirectional LSTM corroborated with exogenous agro-meteorological indicators across major Sri Lankan DECs to provide multi-horizon price projections and SHAP-based explainability.", tech: ["BiLSTM", "LSTM", "GRU", "XGBoost", "SHAP", "FastAPI / Flask", "PostgreSQL"], accuracy: "< 8.5% MAPE", accuracyLabel: "14-Day Horizon Error", gap: "4 DECs / < 85ms", gapLabel: "Coverage & Latency", color: "purple" },
];

export const results = [
  { label: "Nutrient Model Test Accuracy", value: "93.30%", color: "green", description: "MobileNetV2 Model 1 on 94 test images" },
  { label: "Fruit Disease Test Accuracy", value: "93.14%", color: "red", description: "MobileNetV2 Model 2 on 481 test images" },
  { label: "YOLOv8s mAP@0.5", value: "0.737", color: "yellow", description: "Four class leaf disease detection" },
  { label: "Co-occurrence Detection", value: "76.3%", color: "blue", description: "38 image co-occurrence test partition" },
  { label: "Leaf Gate Accuracy", value: "98.67%", color: "purple", description: "EfficientNet-B0 independent test" },
  { label: "Train-Val Gap Model 1", value: "0.92%", color: "green", description: "Confirms no overfitting" },
  { label: "Price Forecast Best MAPE", value: "7.95%", color: "purple", description: "Direct BiLSTM across 14-day horizon" },
  { label: "Price Inference Latency", value: "< 85ms", color: "green", description: "Containerized Flask/FastAPI microservice" },
];

export const architectureComparison = [
  { model: "CNN from Scratch", leafAcc: "43.21%", fruitAcc: "41.87%", size: "8 MB", selected: false },
  { model: "VGG16", leafAcc: "89.87%", fruitAcc: "88.34%", size: "528 MB", selected: false },
  { model: "ResNet50", leafAcc: "91.24%", fruitAcc: "90.64%", size: "102 MB", selected: false },
  { model: "MobileNetV2", leafAcc: "93.30%", fruitAcc: "93.14%", size: "14 MB", selected: true },
];

export const milestones = [
  { date: "November 2025", title: "Project Initialisation", marks: "To be confirmed", description: "Project initialisation and research project setup.", details: "Initial project activities completed according to the assessment schedule.", status: "completed", completed: true },
  { date: "January 2026", title: "Topic Assessment Form (TAF)", marks: "To be confirmed", description: "Topic Assessment Form submitted for the research project.", details: "The research topic, problem scope, objectives, and initial plan were assessed.", status: "completed", completed: true },
  { date: "March 2026", title: "Project Proposal (Presentation and Report)", marks: "Proposal report: 5% · Presentation: To be confirmed", description: "Project proposal presentation and report assessment.", details: "The proposed TomatoDoc solution, research gap, and methodology were presented and documented.", status: "completed", completed: true },
  { date: "May 2026 (exact date to be confirmed)", title: "Progress Presentation 1", marks: "15%", description: "First progress presentation and evaluation.", details: "Initial implementation progress, datasets, and model development were reviewed.", status: "completed", completed: true },
  { date: "September 2026 (exact date to be confirmed)", title: "Progress Presentation 2", marks: "To be confirmed", description: "Second progress presentation and evaluation.", details: "The integrated research application and the progress of all system components were reviewed.", status: "completed", completed: true },
  { date: "4 September 2026 (ICAC 2026 submission deadline)", title: "Research Paper", marks: "To be confirmed", description: "Research paper submission for the ICAC 2026 deadline.", details: "The group research paper documents the research contribution, methodology, and results.", status: "completed", completed: true },
  { date: "Date to be confirmed", title: "System Completion", marks: "To be confirmed", description: "Completion of the integrated TomatoDoc system.", details: "Final integration, testing, documentation, and deployment activities are in progress.", status: "in-progress", completed: false },
  { date: "October 2026", title: "Research Portfolio Website", marks: "To be confirmed", description: "Completion of the research portfolio website.", details: "The public research showcase website is being prepared with project information and supporting documents.", status: "in-progress", completed: false },
  { date: "Drafts: October 2026 · Final: Date to be confirmed", title: "Thesis (Individual and Group Reports)", marks: "To be confirmed", description: "Preparation and submission of individual and group thesis reports.", details: "Draft reports are planned for October 2026, followed by final submission on the confirmed date.", status: "in-progress", completed: false },
  { date: "Date to be confirmed", title: "Final Presentation and Viva", marks: "To be confirmed", description: "Final presentation and viva assessment.", details: "The completed TomatoDoc system will be demonstrated and evaluated by the assessment panel.", status: "upcoming", completed: false },
];

export const technologies = [
  { name: "React Native", category: "Mobile Frontend" }, { name: "Flask", category: "Backend API" }, { name: "FastAPI", category: "Backend API" }, { name: "PyTorch 2.5.1", category: "AI Framework" }, { name: "MobileNetV2", category: "AI Model" }, { name: "YOLOv8s", category: "AI Model" }, { name: "U-Net ResNet34", category: "AI Model" }, { name: "ChromaDB", category: "Vector Database" }, { name: "MongoDB Atlas", category: "Database" }, { name: "SQLite", category: "Database" }, { name: "Groq Llama 3 8B", category: "LLM" }, { name: "LSTM", category: "Deep Learning" }, { name: "XGBoost", category: "Machine Learning" }, { name: "SHAP", category: "Explainable AI" }, { name: "JWT Auth", category: "Security" }, { name: "Render.com", category: "Deployment" }, { name: "PostgreSQL", category: "Database" }, { name: "BiLSTM / GRU", category: "Deep Sequential Model" },
];

export const researchDomain = {
  background: "Tomato cultivation is one of the most economically important agricultural activities in Sri Lanka. However, smallholder farmers consistently face challenges that span the entire crop production cycle. Nutrient deficiencies such as Nitrogen, Potassium, Phosphorus, and Iron all cause similar leaf yellowing symptoms, making accurate visual diagnosis nearly impossible without laboratory testing. Fruit diseases including Anthracnose, Bacterial Spot, Blossom End Rot, and Spotted Wilt Virus cause 30 to 40 percent post-harvest losses annually. Leaf diseases like Early Blight and Late Blight frequently appear together on the same leaf, yet most detection systems can only return one label per image. Market price volatility makes selling decisions extremely difficult, with prices recorded swinging from LKR 7 to LKR 220 per kilogram within the same season.",
  gap: "Our systematic search across eight major platforms including Kaggle, Roboflow, Mendeley Data, Zenodo, IEEE Dataport, GitHub, HuggingFace, and Figshare confirmed that no publicly available dataset exists for Phosphorus deficiency in tomato leaves. Additionally, no existing system combines nutrient deficiency detection, co-occurrence-aware leaf disease detection, treatment efficacy monitoring, and market price forecasting in a single unified platform designed for Sri Lankan tomato farmers. TomatoDoc is the first system to address all four problems together.",
  problem: "Sri Lankan tomato farmers have no affordable, accessible tool that can diagnose plant health problems from a smartphone photograph, track whether treatment is working, and advise when to sell their harvest for maximum profit - all in one place.",
  objectives: ["Detect six tomato leaf nutrient deficiency classes using MobileNetV2 Transfer Learning with 93 percent or higher test accuracy", "Detect and localise leaf disease symptoms including co-occurring conditions using YOLOv8s object detection", "Monitor seven-day treatment response using U-Net pixel-level severity segmentation and classify treatment outcome", "Forecast wholesale tomato market prices across 1 to 14-day horizons using Direct Multi-Output BiLSTM, LSTM, and XGBoost corroborated with agro-meteorological features and SHAP-based explainable recommendations"],
};

export const literatureSurvey = [
  { reference: "[1]", authors: "S. P. Mohanty, D. P. Hughes, and M. Salathe", title: "Using deep learning for image-based plant disease detection", journal: "Frontiers in Plant Science", year: "2016", summary: "Demonstrated CNN classification of 26 crop diseases with high accuracy under controlled conditions." },
  { reference: "[2]", authors: "J. G. A. Barbedo", title: "Factors influencing deep learning for plant disease recognition", journal: "Biosystems Engineering", year: "2018", summary: "Found that field conditions reduce performance due to clutter, overlapping symptoms, and uneven lighting." },
  { reference: "[3]", authors: "M. Brahimi, K. Boukhalfa, and A. Moussaoui", title: "Deep learning for tomato diseases", journal: "Applied Artificial Intelligence", year: "2017", summary: "Confirmed CNN superiority over classical machine learning for tomato disease classification." },
  { reference: "[4]", authors: "K. P. Ferentinos", title: "Deep learning models for plant disease detection", journal: "Computers and Electronics in Agriculture", year: "2018", summary: "Showed that ImageNet pretrained models generalise well on small agricultural datasets." },
  { reference: "[5]", authors: "A. Kamilaris and F. X. Prenafeta-Boldu", title: "Deep learning in agriculture: A survey", journal: "Computers and Electronics in Agriculture", year: "2018", summary: "Identified MobileNet variants as useful for mobile agricultural deployment." },
  { reference: "[6]", authors: "L. Zhang, et al.", title: "Agricultural commodity price forecasting using deep learning with multi-source factors", journal: "Computers and Electronics in Agriculture", year: "2021", summary: "Demonstrated that combining recurrent neural architectures (LSTM/BiLSTM) with exogenous weather features significantly reduces multi-step forecasting error compared to univariate baselines." },
  { reference: "[7]", authors: "S. M. Lundberg and S.-I. Lee", title: "A unified approach to interpreting model predictions", journal: "Advances in Neural Information Processing Systems (NeurIPS)", year: "2017", summary: "Formulated SHAP framework to explain complex machine learning predictions, enabling transparent feature importance ranking for agricultural decision support." },
];

export const methodology = [
  { step: "01", title: "Dataset Collection", description: "Collected tomato leaf nutrient deficiency and fruit disease images from public agricultural datasets." },
  { step: "02", title: "Data Preprocessing", description: "Split datasets before augmentation and applied image transformations to training data only." },
  { step: "03", title: "Model Training", description: "Compared CNN Scratch, VGG16, ResNet50, and MobileNetV2 before selecting the mobile-friendly model." },
  { step: "04", title: "Object Detection", description: "Trained YOLOv8s to localise multiple leaf disease symptoms and report co-occurring conditions." },
  { step: "05", title: "Treatment Monitoring", description: "Used U-Net segmentation to estimate disease severity across a seven-day monitoring window." },
  { step: "06", title: "Price Forecasting Pipeline", description: "Harmonized multi-year wholesale price indices from Sri Lankan DECs synchronized with Open-Meteo meteorological indicators. Trained SARIMA, Random Forest, XGBoost, GRU, and Direct Multi-Output BiLSTM models using walk-forward validation and SHAP explainability." },
  { step: "07", title: "RAG System", description: "Connected ChromaDB and Groq Llama to generate treatment advice grounded in agricultural guidelines." },
  { step: "08", title: "Mobile Application", description: "Integrated all AI components through Flask and FastAPI APIs in a React Native application." },
];

export const documents = [
  { title: "Proposal Report - IT22060426", id: "IT22060426", category: "Proposal", link: "/documents/proposal-it22060426.pdf" },
  { title: "Proposal Report - IT22190734", id: "IT22190734", category: "Proposal", link: "/documents/proposal-it22190734.pdf" },
  { title: "Proposal Report - IT22208262", id: "IT22208262", category: "Proposal", link: "/documents/proposal-it22208262.pdf" },
  { title: "Proposal Report - IT22295842", id: "IT22295842", category: "Proposal", link: "/documents/proposal-it22295842.pdf" },
  { title: "Final Report - IT22060426", id: "IT22060426", category: "Final Report", link: "/documents/final-it22060426.pdf" },
  { title: "Final Report - IT22190734", id: "IT22190734", category: "Final Report", link: "/documents/final-it22190734.pdf" },
  { title: "Final Report - IT22208262", id: "IT22208262", category: "Final Report", link: "/documents/final-it22208262.pdf" },
  { title: "Final Report - IT22295842", id: "IT22295842", category: "Final Report", link: "/documents/final-it22295842.pdf" },
  { title: "Final Group Report", id: "GROUP", category: "Final Report", link: "/documents/final-group-report.pdf" },
  { title: "Research Paper", id: "GROUP", category: "Other", link: "/documents/research-paper.pdf" },
  { title: "Checklist Document", id: "GROUP", category: "Other", link: "/documents/checklist-document.pdf" },
  { title: "Project Charter", id: "GROUP", category: "Other", link: "/documents/project-charter.pdf" },
];

export const presentations = [
  { title: "Proposal Presentation", date: "August 2024", link: "/documents/proposal-presentation.pdf", status: "available" },
  { title: "Progress Presentation 1", date: "December 2024", link: "/documents/progress-presentation-1.pdf", status: "available" },
  { title: "Progress Presentation 2", date: "March 2026", link: "/documents/progress-presentation-2.pdf", status: "available" },
  { title: "Final Presentation", date: "May 2026", link: "/documents/final-presentation.pdf", status: "upcoming" },
];

export const contactInfo = {
  email: "sivanesangabilan2001@gmail.com",
  department: "Department of Software Engineering",
};