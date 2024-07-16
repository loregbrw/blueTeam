package com.bosch.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bosch.example.model.ReportData;

@Repository
public interface ReportJpaRepository extends JpaRepository<ReportData, Long> { }
