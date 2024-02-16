# Smart Healthcare Centre Locating System

## Overview

The Smart Healthcare Centre Locating System is a web application aimed at addressing the coordination gaps in the Indian healthcare system. It focuses on efficiently locating healthcare centers based on patients' signs/symptoms and providing essential information such as referrals, triage services, and insurance provisions. This system aims to improve patient access to timely and appropriate care, especially considering the challenges posed by the fragmented nature of the healthcare system in India.

## Problem Statement

In India, the lack of coordination among healthcare providers often leads to challenges for patients in accessing timely and appropriate care. Factors such as the fragmented nature of the healthcare system, absence of electronic health records, and insufficient financial incentives for collaboration contribute to this issue. Patients may not be aware of the need for referrals, and financial constraints might hinder them from seeking specialist care promptly, resulting in delayed or neglected treatment.

## Solution

The Smart Healthcare Centre Locating System is designed to bridge the coordination gaps in the Indian healthcare system by providing a user-friendly web application. This application will enable users to input their signs/symptoms and receive recommendations for nearby healthcare centers that can address their specific needs. Additionally, the system will provide information about referrals, triage services, and insurance provisions to facilitate seamless access to healthcare services.

## Features

- **Symptom-Based Search:** Users can input their signs/symptoms, and the system will recommend nearby healthcare centers based on their specific needs.
- **Referral Information:** The application provides information about referrals, enabling patients to navigate the healthcare system more effectively.
- **Triage Services:** Users can access information about triage services offered at healthcare centers to prioritize care based on urgency.
- **Insurance Provisions:** The system provides details about insurance provisions accepted at different healthcare centers, helping patients make informed decisions about their healthcare options.

## Technologies Used

- NextJs
- Tailwind CSS
- Redis for Caching
- QStash
- nodeMailer
- OpenAi api
- PlanetScale Database (MySQL)
- Prisma ORM

## Installation and Setup

1. Clone the repository: `git clone https://github.com/AtharvPorate1/shcls`
2. Navigate to the project directory: `cd shcls`
3. Install dependencies: `npm install`
4. Set up environment variables :. `Setup OpenAi api, Redis, PlanetScale database api`
5. Start the server: `npm run dev`
6. Connect to Database: `pscale connect healthcare dev --port 3309`
7. Access the application through your web browser at `http://localhost:3000`.

