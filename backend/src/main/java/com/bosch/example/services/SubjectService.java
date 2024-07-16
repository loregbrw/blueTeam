package com.bosch.example.services;

import java.util.List;

import org.springframework.http.HttpStatusCode;

import com.bosch.example.model.SubjectData;

public interface SubjectService {
    SubjectData createSubject(Long id, String name, Long expectedDuration);
    List<SubjectData> getSubjectByName(String name);
    List<SubjectData> getAllSubjects();
    SubjectData updateSubject(Long id, String name, Long expectedDuration);
    HttpStatusCode deleteSubject(Long id);
    List<SubjectData> getSubjectByCourseSubject(Long courseSubjectId);
}
