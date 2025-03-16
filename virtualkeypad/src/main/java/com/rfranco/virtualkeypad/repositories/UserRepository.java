package com.rfranco.virtualkeypad.repositories;

import com.rfranco.virtualkeypad.models.UserModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<UserModel, Long>{
    Optional<UserModel> findByEmail(String email);
    Optional<UserModel> findByUserName(String userName);

}
