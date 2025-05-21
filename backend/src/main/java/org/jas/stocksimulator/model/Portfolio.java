package org.jas.stocksimulator.model;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
public class Portfolio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "USERNAME")
    private String userName;
    private String stockSymbol;
    private int quantity;
    private BigDecimal totalInvestment;

    public Portfolio() {
    }

    public Portfolio(String userName, String stockSymbol, int quantity, BigDecimal totalInvestment) {
        this.userName = userName;
        this.stockSymbol = stockSymbol;
        this.quantity = quantity;
        this.totalInvestment = totalInvestment;
    }

    public Long getId() {
        return id;
    }

    public String getUser() {
        return userName;
    }

    public String getStockSymbol() {
        return stockSymbol;
    }

    public int getQuantity() {
        return quantity;
    }

    public BigDecimal getTotalInvestment() {
        return totalInvestment;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public void setTotalInvestment(BigDecimal totalInvestment) {
        this.totalInvestment = totalInvestment;
    }
}
