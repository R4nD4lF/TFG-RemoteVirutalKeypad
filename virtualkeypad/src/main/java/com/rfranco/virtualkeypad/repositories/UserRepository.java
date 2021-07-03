package com.rfranco.virtualkeypad.repositories;

import com.rfranco.virtualkeypad.models.UserModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<UserModel, Long> {
    List<UserModel> findByName(String name);
    UserModel findByEmail(String email);
    List<UserModel> findByLastname(String lastname);
    List<UserModel> findByNameAndEmail(String name, String email);
    List<UserModel> findByNameAndLastname(String name, String lastname);
    List<UserModel> findByEmailAndLastname(String email, String lastname);
    List<UserModel> findByNameAndEmailAndLastname(String name,String email, String lastname);
    UserModel findByUserName(String userName);

}
