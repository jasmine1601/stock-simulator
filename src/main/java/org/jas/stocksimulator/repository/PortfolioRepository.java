package org.jas.stocksimulator.repository;

import org.jas.stocksimulator.model.Portfolio;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface PortfolioRepository extends JpaRepository<Portfolio, Long> {
    List<Portfolio> findByUser(String user);
    Optional<Portfolio> findByUserAndStockSymbol(String user, String stockSymbol);
}
