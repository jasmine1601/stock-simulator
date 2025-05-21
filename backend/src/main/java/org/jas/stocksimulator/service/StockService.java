package org.jas.stocksimulator.service;

import org.jas.stocksimulator.model.Stock;
import org.jas.stocksimulator.repository.StockRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public class StockService {
    private final StockRepository stockRepository;

    public StockService(StockRepository stockRepository) {
        this.stockRepository = stockRepository;
    }

    public List<Stock> getAllStocks() {
        return stockRepository.findAll();
    }

    public Optional<Stock> getStockBySymbol(String symbol) {
        return stockRepository.findBySymbol(symbol);
    }

    public void updateStockPrice(String symbol, BigDecimal newPrice) {
        stockRepository.findBySymbol(symbol).ifPresent(stock -> {
            stock.setPrice(newPrice);
            stockRepository.save(stock);
        });
    }
}
