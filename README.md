# Cloud-Based Application Pipeline

## Overview
This project is a cloud-based application pipeline. It involves setting up and deploying a MongoDB-backed application to the cloud, integrating automated testing, and creating a continuous deployment pipeline using Jenkins. The pipeline will be configured to trigger automatically upon new changes to the repository, ensuring proper software installation, deployment, testing, and Slack notifications.

## Technology stack
![Jenkins](https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)
![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)

- **MongoDB Atlas** - Cloud-hosted MongoDB for database storage.
- **Jenkins** - Automation server for continuous integration and deployment.
- **Render** - Cloud platform for deploying the application.
- **Slack** - Communication tool for pipeline notifications.


## Milestones

### Milestone 1: Set Up
1. **Fork and Clone the Repo**
   - Fork and clone the provided repository (already a working application).
   
2. **MongoDB Atlas Setup**
   - The application uses a database. To deploy it to Render, MongoDB Atlas (cloud-hosted MongoDB service) will be used.
   - Follow the provided video tutorial to set up a cluster and database user on MongoDB Atlas.
   - Update the `_config.js` file by replacing `<USERNAME>` and `<PASSWORD>` with your MongoDB Atlas username and password.

### Milestone 2: Basic Pipeline
1. **Set Up Jenkins Pipeline**
   - The repository does not have tests by default. A Jenkins pipeline will be created to:
     - Trigger automatically when changes are pushed to the repository.
     - Ensure all required software is installed (use `npm install`).
     - Deploy the application to Render, where the server can be started using `node server`.

2. **Landing Page Update**
   - Modify the landing page of the website to display **“MILESTONE 2”** in a visible manner.
   - Push the changes and ensure the Render deployment reflects the update.

### Milestone 3: Tests
1. **Locate and Run Tests**
   - Switch to the `test` branch to access the available tests.
   - Run the tests locally using `npm test` to verify they work as expected.

2. **Update Jenkins Pipeline**
   - Merge the `test` branch with the `main` branch.
   - Update the Jenkins pipeline to run the tests as part of the build process.
   - If the tests fail, send an email notification as per the project guidelines.

3. **Landing Page Update**
   - Modify the landing page again to display **“MILESTONE 3”**.
   - Push the changes and ensure the Render deployment reflects the updates, showing **MILESTONE 2** and **MILESTONE 3**.

### Milestone 4: Slack Integration
1. **Slack Channel Setup**
   - Create a Slack channel named `YourFirstName_IP1` and invite your team members to the channel.

2. **Integrate Slack with Jenkins**
   - Update the Jenkins pipeline so that on a successful deployment, a Slack message is sent to the created channel.
   - The message should include:
     - The build ID.
     - The link to the deployed site on Render.

3. **Landing Page Update**
   - Make the final change to the landing page to display **“MILESTONE 4”**.
   - Push the changes and ensure the Render deployment reflects the updates, showing **MILESTONE 2**, **MILESTONE 3**, and **MILESTONE 4**.


## Instructions
1. Fork and clone this repository.
2. Set up MongoDB Atlas and update `_config.js` with your credentials.
3. Set up the Jenkins pipeline to handle:
   - Software installation (e.g., `npm install`).
   - Deployment to Render.
   - Test execution.
   - Slack notifications on successful deployment.
4. Update the landing page at each milestone to reflect the progress.

## How to Contribute
1. Fork the repository.
2. Create a new branch for your changes.
3. Implement the changes according to the milestone instructions.
4. Push your changes and create a pull request for review.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


