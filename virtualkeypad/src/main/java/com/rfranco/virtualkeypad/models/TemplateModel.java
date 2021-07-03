package com.rfranco.virtualkeypad.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "template",schema = "public" )
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TemplateModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "template_id")
    private long templateId;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private UserModel user;

    @Column(name = "name")
    private String name;

    @Column(name = "creationdate")
    private LocalDate creationdate;

    @Column(name= "background")
    private String background;

    @Column(name= "image")
    private String image;

    @Column(name = "buttons")
    private String buttons;

    @Column(name = "texts")
    private String texts;

    @Column(name="token")
    private String token;

}
