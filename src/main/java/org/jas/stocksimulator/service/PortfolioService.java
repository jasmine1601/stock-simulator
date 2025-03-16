package org.jas.stocksimulator.service;

import org.jas.stocksimulator.model.Portfolio;
import org.jas.stocksimulator.model.Stock;
import org.jas.stocksimulator.repository.PortfolioRepository;
import org.jas.stocksimulator.repository.StockRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public class PortfolioService {
    private final PortfolioRepository portfolioRepository;
    private final StockRepository stockRepository;

    public PortfolioService(PortfolioRepository portfolioRepository, StockRepository stockRepository) {
        this.portfolioRepository = portfolioRepository;
        this.stockRepository = stockRepository;
    }

    public List<Portfolio> getUserPortfolio(String user) {
        return portfolioRepository.findByUser(user);
    }

    public void buyStock(String user, String symbol, int quantity) {
        Stock stock = stockRepository.findBySymbol(symbol).orElseThrow();
        BigDecimal cost = stock.getPrice().multiply(BigDecimal.valueOf(quantity));

        Optional<Portfolio> portfolioOpt = portfolioRepository.findByUserAndStockSymbol(user, symbol);
        if (portfolioOpt.isPresent()) {
            Portfolio portfolio = portfolioOpt.get();
            portfolio.setQuantity(portfolio.getQuantity() + quantity);
            portfolio.setTotalInvestment(portfolio.getTotalInvestment().add(cost));
            portfolioRepository.save(portfolio);
        } else {
            portfolioRepository.save(new Portfolio(user, symbol, quantity, cost));
        }
    }

    public void sellStock(String user, String symbol, int quantity) {
        Portfolio portfolio = portfolioRepository.findByUserAndStockSymbol(user, symbol).orElseThrow();
        if (portfolio.getQuantity() < quantity) {
            throw new IllegalArgumentException("Not enough stock to sell.");
        }

        portfolio.setQuantity(portfolio.getQuantity() - quantity);
        portfolioRepository.save(portfolio);
    }
}
