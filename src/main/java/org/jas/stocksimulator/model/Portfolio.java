package org.jas.stocksimulator.model;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
public class Portfolio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String user;
    private String stockSymbol;
    private int quantity;
    private BigDecimal totalInvestment;

    public Portfolio() {}

    public Portfolio(String user, String stockSymbol, int quantity, BigDecimal totalInvestment) {
        this.user = user;
        this.stockSymbol = stockSymbol;
        this.quantity = quantity;
        this.totalInvestment = totalInvestment;
    }

    public Long getId() { return id; }
    public String getUser() { return user; }
    public String getStockSymbol() { return stockSymbol; }
    public int getQuantity() { return quantity; }
    public BigDecimal getTotalInvestment() { return totalInvestment; }

    public void setQuantity(int quantity) { this.quantity = quantity; }
    public void setTotalInvestment(BigDecimal totalInvestment) { this.totalInvestment = totalInvestment; }
}
