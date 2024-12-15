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


## 🗂️ Dataset Description

The dataset contains hotel reviews and metadata sourced from [Jiwei Li et al. (2013)](http://www.cs.cmu.edu/~jiweil/html/hotel-review.html). Below is the structure of the dataset:

| Column Name           | Description                                                                                  |
|-----------------------|----------------------------------------------------------------------------------------------|
| `hotel_id`            | Unique identifier for each hotel.                                                           |
| `user_id`             | Unique identifier for the user who wrote the review.                                        |
| `title`               | Title of the review.                                                                        |
| `text`                | Full text of the review.                                                                    |
| `review`              | Combined text: `title` + `text`.                                                            |
| `overall`             | Overall rating given by the user (1-5 scale).                                               |
| `cleanliness`         | Rating for cleanliness (1-5 scale).                                                         |
| `value`               | Rating for value for money (1-5 scale).                                                     |
| `location`            | Rating for location (1-5 scale).                                                            |
| `rooms`               | Rating for the quality of rooms (1-5 scale).                                                |
| `sleep_quality`       | Rating for sleep quality (1-5 scale).                                                       |
| `service`             | Rating for service quality (1-5 scale).                                                     |
| `date_stayed`         | Date when the user stayed at the hotel.                                                     |
| `date`                | Date when the review was posted.                                                            |
| `offering_id`         | Unique identifier for the hotel's offering.                                                 |
| `num_helpful_votes`   | Number of votes indicating how helpful the review was.                                       |
| `author.location`     | Location of the user who wrote the review.                                                  |
| `mobility_related`    | (Derived) Whether the review mentions mobility/accessibility-related terms (True/False).     |
| `mobility_keywords`   | (Derived) List of matched mobility-related keywords from the review.                        |
| `sentiment_score`     | (Derived) Sentiment polarity score for the review (range: -1 to 1).                          |
| `sentiment`           | (Derived) Sentiment classification: `positive`, `neutral`, or `negative`.                   |
| `text_processed`      | (Derived) Cleaned and lemmatized version of the review text for analysis.                    |

---

## 🌟 Key Features
- **Keyword Matching**: Extract and analyze mobility-related terms with a comprehensive keyword list.
- **Sentiment Analysis**: Classify reviews into positive, neutral, or negative categories.
- **Reusable Code**: Modularized functions for text preprocessing, sentiment analysis, and visualizations.
- **Comprehensive Output**: Generate datasets, charts, and summaries for actionable insights.

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

