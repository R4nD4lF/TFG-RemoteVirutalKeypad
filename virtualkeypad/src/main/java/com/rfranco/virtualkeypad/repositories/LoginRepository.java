package com.rfranco.virtualkeypad.repositories;

import com.rfranco.virtualkeypad.models.UserModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends CrudRepository<UserModel,Long> {

}
