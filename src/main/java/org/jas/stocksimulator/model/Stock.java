package org.jas.stocksimulator.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.math.BigDecimal;

@Entity
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String symbol;
    private BigDecimal price;

    public Stock() {}

    public Stock(String symbol, BigDecimal price) {
        this.symbol = symbol;
        this.price = price;
    }

    public Long getId() { return id; }
    public String getSymbol() { return symbol; }
    public BigDecimal getPrice() { return price; }
    public void setPrice(BigDecimal price) { this.price = price; }
}
