package com.rfranco.virtualkeypad.repositories;

import com.rfranco.virtualkeypad.models.TemplateModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TemplateRepository extends CrudRepository<TemplateModel,Long> {

}
