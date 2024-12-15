# 🏨 Hotel Reviews Analysis and Sentiment Study

This project analyzes hotel reviews from a publicly available dataset to extract insights related to accessibility and sentiment. The primary focus is on identifying mobility-related keywords in reviews, performing sentiment analysis, and visualizing trends across the top 50 hotels with the highest number of reviews.

![Python](https://img.shields.io/badge/Python-3.10-blue)
![pandas](https://img.shields.io/badge/pandas-1.5.0-green)
![spaCy](https://img.shields.io/badge/spaCy-3.5.0-orange)
![matplotlib](https://img.shields.io/badge/matplotlib-3.6.0-red)

---

## 📑 Table of Contents
- [Key Objectives](#key-objectives)
- [Workflow Summary](#workflow-summary)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Outputs and Results](#outputs-and-results)
- [How to Run](#how-to-run)
- [Acknowledgments](#acknowledgments)

---

## 🎯 Key Objectives
1. **Top Hotels Identification**:
   - Focus the analysis on the top 50 hotels based on the number of reviews.
2. **Text Preprocessing**:
   - Clean and preprocess review text using lemmatization and keyword matching.
3. **Mobility-Related Reviews**:
   - Flag reviews containing accessibility-related keywords (e.g., "wheelchair," "ADA compliant").
4. **Sentiment Analysis**:
   - Perform sentiment analysis to classify reviews as positive, neutral, or negative.
5. **Data Visualization**:
   - Visualize trends through word clouds, sentiment charts, and keyword frequency graphs.
6. **Data Export and Reusability**:
   - Save processed and filtered datasets for reproducibility and future use.

---

## 🛠️ Workflow Summary
1. **Data Loading**: Load hotel reviews from a JSON file.
2. **Top 50 Hotels**: Identify the top 50 hotels with the highest number of reviews.
3. **Text Preprocessing**: Clean and lemmatize review text.
4. **Keyword Matching**: Flag reviews containing mobility-related keywords using efficient text-processing techniques.
5. **Sentiment Analysis**: Calculate sentiment polarity scores and classify reviews.
6. **Visualization**: Generate word clouds, sentiment distribution pie charts, and keyword frequency bar charts.
7. **Export Results**: Save processed reviews, filtered datasets, and summaries in CSV and zipped formats.

---

## 🌟 Key Features
- **Keyword Matching**: Extract and analyze mobility-related terms with a comprehensive keyword list.
- **Sentiment Analysis**: Classify reviews into positive, neutral, or negative categories.
- **Reusable Code**: Modularized functions for text preprocessing, sentiment analysis, and visualizations.
- **Comprehensive Output**: Generate datasets, charts, and summaries for actionable insights.

---

## 🖥️ Technologies Used
- **Programming Language**: Python
- **Libraries**:
  - `pandas` for data manipulation
  - `numpy` for numerical operations
  - `spacy` for text preprocessing
  - `textblob` for sentiment analysis
  - `matplotlib` and `seaborn` for data visualization
  - `tqdm` for progress tracking
  - `wordcloud` for generating word clouds
  - `flashtext` for efficient keyword matching
- **File Formats**: JSON, CSV, Pickle, Parquet
- **Visualization Tools**: Word clouds, pie charts, bar charts

---

## 📊 Outputs and Results
1. **Processed Data**:
   - A cleaned and lemmatized dataset of hotel reviews.
   - Filtered mobility-related reviews with extracted keywords.
2. **Visualizations**:
   - **Word Cloud**: Common words in mobility-related reviews.
   - **Sentiment Distribution**: Pie chart showing the sentiment breakdown.
   - **Keyword Frequency**: Bar chart of top mobility-related keywords.
3. **Exported Files**:
   - `processed_reviews_top_50.pkl`: Preprocessed data for top 50 hotels.
   - `mobility_related_reviews_top_50.csv`: Filtered mobility-related reviews.
   - `mobility_reviews_top_50.zip`: Zipped results for portability.

---

## 🚀 How to Run

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/voyageable/LLM-hackathon.git
   cd LLM-hackathon

