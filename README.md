## Overview
This repository contains resources related to the development of a comprehensive baseline for data processing on MoocCubeX.
The data processing pipeline and baseline demonstration are available at the [link]
## Repository Structure

```
|-- src/
|   |-- data/                        # Main datasets used in the paper (e.g., MOOCCubeX)
|       |-- LO/                      # Experimental scripts and notebooks (Learning Objects)
|           |-- baseline_model/      # Implementation and checkpoints of baseline models
|           |-- dataset/
|           |-- process/            /# Processed data splits specific to these experiments
|       |-- CQ/                      # Experimental scripts and notebooks (Course Quality)
|           |-- baseline_model/      
|           |-- dataset/             
|           |-- process/
            # Data preprocessing scripts and intermediate logs
|   |-- website_demo/                # Source code for web application
|       |-- frontend/                # Client-side code 
|       |-- backend/                 # Server-side code
|-- README.md                        # Project documentation and setup guide
```

## Contents
### 1. src

- **data/**: Contains the **MOOCCubeX** dataset and task-specific experimental resources, including detailed entities (learners, courses, concepts) and attributes (e.g., `course_field`, `user_course_num_comments`).
    - **LO/ (Learning Objects)**: Experimental scripts and notebooks focused on Learning Objects.
        - `baseline_model/`: Implementation and checkpoints for the baseline models.
        - `dataset/`: Processed data splits specifically tailored for LO experiments.
        - `process/`: Data preprocessing scripts and intermediate logs for LO tasks.
    - **CQ/ (Course Quality)**: Experimental scripts and notebooks focused on evaluating course quality.
        - `baseline_model/`: Models and training checkpoints for CQ evaluation.
        - `dataset/`: Processed datasets and metadata specifically curated for quality analysis.
        - `process/`: Data preprocessing scripts and intermediate logs for CQ tasks.

- **website_demo/**: Source code for the **EduPath** simulated web application.
    - **frontend/**: Built with **React** and **CoreUI**, providing an intuitive interface for educational administrators to visualize learner/course analytics and personalized recommendations.
    - **backend/**: Built with **Django** and **Django REST Framework**, providing RESTful APIs for learner/course data, recommendation engines, and dashboard metrics.

---
### 2. Documentation

- **README.md**: Comprehensive project documentation, environment setup guide, and usage instructions for the MoocCubeX baseline.
## Workflow
The following diagram illustrates the workflow of baseline:
![ADEP-DQ-V2-Framework](https://github.com/user-attachments/assets/3c3d2e5e-6a76-442f-9c9c-f5b67c9066a0)

ADEP-DQ 2.0 follows an end-to-end workflow: 
- (1) **Problem Scoping** defines prediction targets, constraints, and evaluation criteria; 
- (2) **Multi-Source Ingestion** consolidates heterogeneous MOOC data streams; 
- (3) **Early-Aware Data Preparation** structures temporal-ready inputs for DL; 
- (4) **Automated DQ Measurement** computes conventional DQ dimensions; 
- (5) **Adaptive DQ Intervention** applies targeted corrections and enhancements; 
- (6) **Temporal DL Modeling** trains early-prediction models; 
- (7) **Automated DQ Measurement** extends to advanced DQ dimensions linked to model performance;
- (8) **Continuous DQ Monitoring and Early Intervention** establishes ongoing governance to detect degradation and trigger timely interventions during operation.

## Getting Started

## Usage

## Contributors
- **Leader**: M.Sc. IT. Thu Nguyen
- **Members**: Man Nguyen, Ngoc Nguyen, Luan Nguyen, Anh Tran, Huong Lai
