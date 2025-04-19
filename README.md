# Cloud_Resume_Challenge
# ☁️ Cloud Resume Challenge – Emmanuel Stephen

Welcome to my Cloud Resume Challenge project! This resume is **fully hosted on AWS**, backed by **serverless infrastructure**, and built to showcase not just my experience — but my hands-on cloud engineering skills.



## 📄 What is This?

Inspired by [Forrest Brazeal's Cloud Resume Challenge](https://cloudresumechallenge.dev/), this is a cloud-native, interactive resume built using:

- **HTML, CSS, JavaScript** frontend
- **AWS S3 + CloudFront** for static hosting & HTTPS
- **AWS API Gateway + Lambda + DynamoDB** for visitor count backend
- All within the **AWS Free Tier** (₹0 cost project)

---

## 👨‍💻 About Me

**Emmanuel Stephen**  
Aspiring Cloud Engineer | IoT Developer |  SDE  
📧 emmanuelstephen0804@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/emmanuel-stephen-7a35a2259/)  
🐙 [GitHub](https://github.com/immanuel2711)

---

## 🧰 Tech Stack

### Frontend
- HTML5
- CSS3 (Responsive Design)
- Vanilla JavaScript (for dynamic visitor counter)

### Cloud / Backend
- Amazon S3 (Static Website Hosting)
- Amazon CloudFront (HTTPS + CDN)
- AWS Lambda (Python)
- Amazon DynamoDB (Visitor Counter)
- Amazon API Gateway (REST API with CORS)

---



## 🚀 Deployment Architecture

```text
[S3 + CloudFront] ← HTML, CSS, JS
     |
     | visitor count JS
     ↓
[API Gateway] → [Lambda] → [DynamoDB]
