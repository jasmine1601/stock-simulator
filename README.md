# Stock Simulator

Stock Simulator is a **Spring Boot** application that simulates buying and selling stocks.  
It provides REST APIs for managing stocks, updating prices, and handling user portfolios.

## Features
- REST API for stock market simulation
- Buy and sell stocks with real-time updates
- Manage user portfolios
- Uses **Spring Boot, JPA, and H2 Database**
- In-memory storage for quick testing

## Tech Stack
- **Backend**: Java 21, Spring Boot 3.2.2, Spring Data JPA
- **Database**: H2 (In-memory)
- **Build Tool**: Maven

## Installation

### Prerequisites
- Java 21
- Maven 3+

### Steps to Run
1. **Clone the repository**
   ```sh
   git clone https://github.com/jasmine1601/stock-simulator.git
   cd stock-simulator
   ```
2. **Build the project**
   ```sh
   mvn clean install
   ```
3. **Run the application**
   ```sh
   mvn spring-boot:run
   ```
4. **Access H2 Database Console**  
   Open: [http://localhost:8080/h2-console](http://localhost:8080/h2-console)
    - JDBC URL: `jdbc:h2:mem:testdb`
    - Username: `sa`
    - Password: (leave empty)

## API Endpoints

### **Stock APIs**
| Method | Endpoint            | Description             |
|--------|---------------------|-------------------------|
| `GET`  | `/stocks`           | Get all stocks         |
| `GET`  | `/stocks/{symbol}`  | Get stock by symbol    |
| `PUT`  | `/stocks/{symbol}/price?price=100` | Update stock price |

### **Portfolio APIs**
| Method | Endpoint             | Description           |
|--------|----------------------|-----------------------|
| `GET`  | `/portfolio/{user}`  | Get user portfolio   |
| `POST` | `/portfolio/buy`     | Buy stocks           |
| `POST` | `/portfolio/sell`    | Sell stocks          |

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
├── src/main/java/org/jas/stocksimulator/
│   ├── StockSimulatorApplication.java
│   ├── controller/
│   │   ├── StockController.java
│   │   └── PortfolioController.java
│   ├── model/
│   │   ├── Stock.java
│   │   └── Portfolio.java
│   ├── repository/
│   │   ├── StockRepository.java
│   │   └── PortfolioRepository.java
│   ├── service/
│   │   ├── StockService.java
│   │   └── PortfolioService.java
│
├── src/main/resources/
│   ├── application.properties
│   └── data.sql
│
└── pom.xml
```

---

## **Improvements & Future Enhancements**
- Replace H2 with a persistent database like **PostgreSQL** or **MySQL**.
- Add **user authentication** and roles (e.g., admin, trader).
- Implement **real-time stock price updates** via WebSockets.
- Introduce **asynchronous messaging** using Kafka or RabbitMQ.
- Enhance **error handling** and validation for API requests.
- Improve test coverage with **unit and integration tests**.

---
## Contributing

This repository is contribution friendly. Refer to [Contribution Guidelines](.github/contributing.md).

---

## License
This project is licensed under the GNU General Public License v3.0

---
