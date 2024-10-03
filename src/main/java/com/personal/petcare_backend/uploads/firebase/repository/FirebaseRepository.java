package com.personal.petcare_backend.uploads.firebase.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.personal.petcare_backend.uploads.firebase.models.FileRecord;

@Repository
public interface FirebaseRepository extends JpaRepository<FileRecord, Long>{
    
}
