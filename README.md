<div align="center">
  <h1>🚀 Module 34 – AWS CI/CD Infrastructure</h1>
  <h3>Cloud-Native Infrastructure as Code with AWS CDK & GitHub Actions</h3>
  <p><strong>Built with ❤️ by Itoje Dollars</strong></p>

  <p>
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
    <img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" />
    <img src="https://img.shields.io/badge/AWS_CDK-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white" />
    <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" />
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  </p>
</div>

---

## 📖 Overview

This project demonstrates a **production-style CI/CD pipeline** using AWS CDK and GitHub Actions.  
It automates infrastructure deployment on AWS using Infrastructure as Code (IaC) principles.

The goal is to build a **repeatable, scalable, and cloud-native deployment workflow**.

---

## 🧠 Tech Stack

- Programming Languages: TypeScript, JavaScript  
- Cloud Provider: Amazon Web Services (AWS)  
- Infrastructure as Code: AWS CDK  
- CI/CD: GitHub Actions  
- Runtime: Node.js  

---

## ☁️ Cloud Architecture

```mermaid
graph TD;
    Dev[Developer] --> GitHub[GitHub Repository]

    GitHub --> Actions[GitHub Actions CI/CD Pipeline]

    Actions --> Build[Build & Test Stage]
    Actions --> Deploy[CDK Deploy Stage]

    Deploy --> AWS[AWS Cloud]

    AWS --> CF[CloudFormation]
    CF --> Stack[CDK Stack Resources]

    Stack --> S3[S3 Buckets / Lambda / IAM / VPC (as defined)]
⚙️ CDK Workflow
Developer pushes code to GitHub
GitHub Actions triggers pipeline
Code is built and tested
AWS CDK synthesizes CloudFormation template
Stack is deployed to AWS automatically
🚀 Useful Commands
npm install        # Install dependencies
npm run build      # Compile TypeScript
npm run test       # Run unit tests
npx cdk synth      # Generate CloudFormation
npx cdk deploy     # Deploy to AWS
npx cdk diff       # Compare changes
🔐 Key Features
Infrastructure as Code (IaC)
Fully automated CI/CD pipeline
AWS-native deployment (CloudFormation under the hood)
Scalable cloud architecture
Version-controlled infrastructure
🧠 Author

Itoje Dollars
Cloud & DevOps Enthusiast | Software Developer
