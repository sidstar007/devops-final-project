# DevOps Project Report: CI/CD Pipeline and Microservices

## Project Overview

This project centers around designing and building a **Continuous Integration and Continuous Deployment (CI/CD) pipeline** in parallel with developing **microservices**. The objective is to create an efficient, automated software delivery process utilizing industry-standard tools and technologies such as **Linux**, **Git**, **GitHub**, **Docker**, and **Jenkins**. The project aims to showcase how automation and modular development can streamline workflows, minimize errors, and improve deployment reliability.


### Project Objectives

- **Minimize Manual Intervention**: Develop a fully automated CI/CD pipeline.
- **Reliable Deployments**: Ensure consistent and swift application deployments.
- **Develop Microservices**:
  - Design modular and scalable services with a focus on separating concerns.
  - Improve maintainability and adaptability by isolating different functionalities into individual microservices.
- **Leverage Modern DevOps Tools**:
  - Apply the latest technologies for version control, containerization, and automation.
- **Demonstrate Proficiency in Linux**:
  - Utilize system administration expertise for hosting projects and scripting tasks.
- **Implement Git Best Practices**:
  - Adopt an efficient branching strategy to collaboratively manage the code repository.
- **Create Dockerized Environments**:
  - Develop consistent and portable development environments using Docker.
- **Set Up Jenkins Pipelines**:
  - Automate build, testing, and deployment processes to minimize errors and maintain continuous delivery.

### Key Deliverables

1. **CI/CD Pipeline**:
   - Implement a fully functional CI/CD pipeline automating build, test, and deployment processes.
   - Ensure the pipeline triggers upon code commits to the GitHub repository.
2. **Microservices Architecture**:
   - Develop at least four Dockerized microservices:
     - User Service
     - Order Service
     - Product Service
     - Cart Service
3. **Documentation**:
   - Prepare a detailed project report including:
     - Project architecture and pipeline design.
     - Steps for building, deploying, and testing microservices.
     - Challenges encountered and solutions implemented.

### Expected Outcomes

- Gain practical experience in CI/CD pipeline design.
- Develop and deploy Dockerized microservices.
- Grasp key DevOps practices like continuous integration, testing, and deployment.
- Improve teamwork and collaboration skills through effective Git workflows.

## Team Members

1. **Siddhant Chalke** - 21BCS118
2. **Aryan Kumar** - 21BDS005
3. **Harsh Gupta** - 21BDS020
4. **Aman Chaudhary** - 21BEC004
5. **Shreya Talekar** - 21BEC051
6. **Bhanu Prakash** - 21BEC011

### Contributions by Team Members

- **Siddhant Chalke (21BCS118)**: Jenkins
- **Aryan Kumar (21BDS005)**: Kubernetes and Docker
- **Harsh Gupta (21BDS020)**: User Service and Jenkins
- **Aman Chaudhary (21BEC004)**: Product Service and Docker
- **Shreya Talekar (21BEC051)**: Cart Service and Order Service
- **Bhanu Prakash (21BEC011)**: Order Service

## Technologies and Tools Used

- **Linux**:
  - Serves as the base operating system for hosting the application and running automation scripts.
  - Tools like Bash scripting for automating tasks.
- **Git**:
  - Version control system for effectively tracking and managing code changes.
- **GitHub**:
  - A collaborative platform for hosting the repository, tracking issues, and reviewing code changes.
- **Docker**:
  - Facilitates the containerization of microservices, ensuring consistent and portable environments.
- **Jenkins**:
  - A powerful automation server used for setting up CI/CD pipelines and integrating seamlessly with other tools.

## Microservices Architecture

We built four distinct microservices for an e-commerce application, each designed for a specific function within the system. These microservices are independent, deployable, and scalable, contributing to a modular architecture:

- **Cart Service**
- **Order Service**
- **Product Service**
- **User Service**

### Building, Deploying, and Testing Microservices

1. **Containerization**:
   - Containerize each microservice using Docker for consistency across environments.
2. **Deployment**:
   - Deploy microservices using Docker Compose or Kubernetes for orchestration.
3. **Testing**:
   - Use tools like Postman or Swagger for API testing.
   - Utilize frameworks like xUnit or JUnit for unit tests.

## CI/CD Pipeline with Jenkins

### Pipeline Overview

Jenkins is configured for seamless CI/CD, pulling code through GitHub webhooks and building, testing, and deploying services. Credentials (GitHub PATs and Docker Hub credentials) are securely stored in Jenkins and masked during use.

### Pipeline Stages

1. **Code Checkout**:
   - Automatically triggered by code pushes to the GitHub repository.
2. **Build and Test**:
   - Runs build commands and executes unit tests.
3. **Docker Image Build and Push**:
   - Builds Docker images and pushes them to Docker Hub with version tagging.
4. **Deployment**:
   - Uses Docker Compose or Kubernetes to deploy and monitor services.

### Enhancements and Benefits

- **Automated Workflow**: Reduces manual errors and speeds up deployment.
- **Consistent Builds**: Ensures uniform deployment across environments.
- **Immediate Feedback**: Quick error detection.
- **Portability**: Dockerized services run across platforms.
- **Scalability**: Microservices can be scaled independently as needed.

## Dockerization

Each microservice is isolated in its own Docker container, ensuring environment consistency and seamless production deployments. Dockerfiles are provided for each service to define the build process and dependencies.

## Running the Application

Follow these steps to run the application:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/sidstar007/devops-final-project.git
   cd devops-final-project

Build Docker Images:
 docker-compose build


Run Docker Containers:
  docker-compose up -d


Access the Application:

Open your browser and navigate to the backend service.
Register new users through the frontend.
Create admin accounts using Swagger.
Ensure MongoDB is Running:

Make sure the MongoDB service is up and running for database operations.
