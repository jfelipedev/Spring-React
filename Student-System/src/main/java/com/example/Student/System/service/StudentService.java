package com.example.Student.System.service;

import com.example.Student.System.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent (Student student);
    public List<Student> getAllStudents();
}
