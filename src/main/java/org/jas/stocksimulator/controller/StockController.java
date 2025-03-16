package org.jas.stocksimulator.controller;

import org.jas.stocksimulator.model.Stock;
import org.jas.stocksimulator.service.StockService;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/stocks")
public class StockController {
    private final StockService stockService;

    public StockController(StockService stockService) {
        this.stockService = stockService;
    }

    @GetMapping
    public List<Stock> getAllStocks() {
        return stockService.getAllStocks();
    }

    @GetMapping("/{symbol}")
    public Optional<Stock> getStock(@PathVariable String symbol) {
        return stockService.getStockBySymbol(symbol);
    }

    @PutMapping("/{symbol}/price")
    public void updateStockPrice(@PathVariable String symbol, @RequestParam BigDecimal price) {
        stockService.updateStockPrice(symbol, price);
    }
}
