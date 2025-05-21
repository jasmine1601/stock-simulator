# Stock Simulator

**Stock Simulator** is a **full stack web application** that simulates buying and selling stocks.
It features a **Java Spring Boot backend** and a **ReactJS frontend**, allowing users to view stock data and manage portfolios.

---

## Features

* View available stocks and their prices
* View a user's portfolio
* Backend support for buying and selling stocks
* React frontend with interactive UI and pie charts
* RESTful APIs powered by Spring Boot
* In-memory H2 database for easy setup

---

## Tech Stack

### Frontend

* ReactJS

### Backend

* Java 21, Spring Boot 3.2.2, Spring Data JPA
* **Database**: H2 (In-memory)
* **Build Tool**: Maven

---

## Getting Started

### Prerequisites

* Java 21
* Maven 3+
* Node.js (v18+)
* npm or yarn

---

### Steps to Run Locally

1. **Clone the repository**

```sh
git clone https://github.com/jasmine1601/stock-simulator.git
cd stock-simulator
```

---

### Run Backend

```sh
cd backend
mvn clean install
mvn spring-boot:run
```

* Access H2 Console: [http://localhost:8080/h2-console](http://localhost:8080/h2-console)

  * JDBC URL: `jdbc:h2:mem:testdb`
  * Username: `sa`
  * Password: *(leave blank)*

---

### Run Frontend

```sh
cd ../frontend
npm install
npm start
```

* App will be served at: [http://localhost:3000](http://localhost:3000)

---

## API Endpoints (Backend)

### **Stock APIs**

| Method | Endpoint                           | Description         |
| ------ | ---------------------------------- | ------------------- |
| `GET`  | `/stocks`                          | Get all stocks      |
| `GET`  | `/stocks/{symbol}`                 | Get stock by symbol |
| `PUT`  | `/stocks/{symbol}/price?price=100` | Update stock price  |

### **Portfolio APIs**

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| `GET`  | `/portfolio/{user}` | Get user portfolio |
| `POST` | `/portfolio/buy`    | Buy stocks         |
| `POST` | `/portfolio/sell`   | Sell stocks        |

## Example API Usage

### **1. Get All Stocks**
```sh
curl -X GET http://localhost:8080/stocks
```

### **2. Buy Stock**
```sh
curl -X POST "http://localhost:8080/portfolio/buy?user=John&symbol=AAPL&quantity=10"
```

### **3. Sell Stock**
```sh
curl -X POST "http://localhost:8080/portfolio/sell?user=John&symbol=AAPL&quantity=5"
```
---

## **Project Structure**

```
stock-simulator/
│
├── backend/
│   ├── src/main/java/org/jas/stocksimulator/
│   ├── src/main/resources/
│   └── pom.xml
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## **Improvements & Future Enhancements**

- Add UI support for buying and selling stocks.
- Enhance UI/UX design for a more modern, intuitive, and responsive interface using styling libraries.
- Replace H2 with a persistent database like **PostgreSQL** or **MySQL**.
- Add **user authentication** and roles (e.g., admin, trader).
- Implement **real-time stock price updates** via WebSockets.
- Introduce **asynchronous messaging** using Kafka or RabbitMQ.
- Enhance **error handling** and validation for API requests.
- Improve test coverage with **unit and integration tests**.
- Containerize app using Docker and set up CI/CD.

---

## Contributing

This repository is contribution friendly. Refer to [Contribution Guidelines](.github/contributing.md).

---

## License
This project is licensed under the GNU General Public License v3.0

---