package org.jas.stocksimulator.controller;

import org.jas.stocksimulator.model.Portfolio;
import org.jas.stocksimulator.service.PortfolioService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/portfolio")
public class PortfolioController {
    private final PortfolioService portfolioService;

    public PortfolioController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GetMapping("/{userName}")
    public List<Portfolio> getPortfolioByUser(@PathVariable String userName) {
        return portfolioService.getUserPortfolio(userName);
    }

    @PostMapping("/buy")
    public void buyStock(@RequestParam String userName, @RequestParam String symbol, @RequestParam int quantity) {
        portfolioService.buyStock(userName, symbol, quantity);
    }

    @PostMapping("/sell")
    public void sellStock(@RequestParam String userName, @RequestParam String symbol, @RequestParam int quantity) {
        portfolioService.sellStock(userName, symbol, quantity);
    }
}