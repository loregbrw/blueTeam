package com.bosch.example.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "ReportData")
public class ReportData {
    
    public ReportData(UserData userId, UserData authorId, String description) {
        this.userId = userId;
        this.authorId = authorId;
        this.description = description;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany
    @JoinColumn(name = "userId", referencedColumnName = "id")
    private UserData userId;

    @OneToMany
    @JoinColumn(name = "authorId", referencedColumnName = "id")
    private UserData authorId;

    @Column(name = "description")
    private String description;
}
