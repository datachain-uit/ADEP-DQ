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
![Framework](/src/Workflow.png)

The workflow includes:
1. **Data Collection**: Gathering data from the MOOCCubeX dataset, including learner profiles, course details, and interaction data
2. **Data Preprocessing and Imputation**: Performing preprocessing steps with a focus on HetGNN-based imputation to handle missing values and ensure data quality for modeling
3. **Model Training**: Implementing the HetGNN-KGAT model to generate personalized course recommendations, trained on the preprocessed data
4. **Evaluation and Visualization**: Assessing data quality and model performance using metrics like direct evaluation (Completeness, Consistency), indirect evaluation include (Precision@K, Recall@K, F1 Score ..)

## Getting Started
## Usage
## Contributors
