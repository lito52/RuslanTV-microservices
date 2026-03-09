# Project Title

📺 RuslanTV

## Description

RuslanTV is a pet project aimed at building a YouTube-like video platform using a microservices architecture. The project focuses on scalable backend design, gRPC-based inter-service communication, asynchronous messaging, and observability.

RuslanTV demonstrates real-world backend patterns such as service decomposition, message queues, distributed monitoring, and cloud-ready storage solutions. The system is containerized and designed to be easily deployable and extensible. 

This project was built primarily for learning and experimenting with modern backend technologies and infrastructure.

## System Design

<img width="7302" height="2832" alt="excali" src="https://github.com/user-attachments/assets/abe52063-349f-4d08-a461-64733e910b4e" />

## 🚀 Features

### 📺 Video Management
- Video upload and metadata management
- Video storage using **S3-compatible object storage**

### 👤 Authentication & Authorization
- Session-based authentication
- OAuth 2.0 support for third-party login providers
- Secure session handling with Redis-backed storage

### 🧩 Microservice Architecture
- Each domain implemented as an independent service
- Clear separation of responsibilities (auth, users, videos, notifications, etc.)
- Designed for scalability and independent deployment

### ⚡ Inter-Service Communication
- High-performance communication via **gRPC**
- Strongly typed contracts using **Protocol Buffers**
- Minimal latency between services

### 📬 Asynchronous Messaging
- Event-driven communication with **RabbitMQ**
- Background jobs and domain events handled asynchronously
- Improves system resilience and decoupling

### 🧠 Caching
- **Redis** used for:
  - Session storage
  - Caching frequently accessed data
  - Reducing database load

### 📧 Email Notifications
- Email delivery service integrated
- **MailHog** used in development for safe email testing

### 📊 Observability & Monitoring
- Metrics collection with **Prometheus**
- Centralized visualization via **Grafana**
- **Pushgateway** for short-lived and batch jobs
- Designed to resemble production monitoring setups

## 🔁 CI/CD Pipelines

Each microservice in **RuslanTV** is integrated with CI/CD pipelines for fast feedback and quality control:

- ✅ **Linting**, **unit tests**, and **build checks** run on every PR
- 🐳 Docker builds and caching ensure consistent environments
- 🧪 Test coverage reporting helps enforce code quality
- ⚙️ Future deployment pipelines (e.g., staging/production) can be integrated via GitHub Actions or other CI tools

> The pipeline is configured to validate each service individually, ensuring independence and modularity across the architecture.

---

---

## 🏗️ Architecture Overview

- Each service runs independently in its own container
- Services communicate synchronously via **gRPC**
- Asynchronous workflows and events are handled via **RabbitMQ**
- Centralized observability stack for metrics and monitoring
- Fully containerized and orchestrated using **Docker Compose**

The architecture is designed to mimic real-world backend systems and emphasize clean service boundaries.

---

## 🛠️ Tech Stack

### Backend
- **TypeScript**
- **Node.js**
- **NestJS**
- **gRPC**
- **Protocol Buffers**

### Databases & Storage
- **PostgreSQL**
- **Prisma ORM**
- **Redis**
- **S3-compatible object storage**

### Messaging & Queues
- **RabbitMQ**

### Authentication
- Session-based authentication
- **OAuth 2.0**

### Observability
- **Prometheus**
- **Grafana**
- **Pushgateway**

### DevOps & Tooling
- **Docker**
- **Docker Compose**
- **GitHub Actions**
- **MailHog** (email testing)

## 🚀 Getting Started

```bash
git clone https://github.com/lito52/RuslanTV-microservices.git
cd ruslantv-microservices

```

## Stay in touch

Directored by lito52
