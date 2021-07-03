package com.rfranco.virtualkeypad.configurations;

import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;


@Configuration
@Getter
@Setter
public class VirtualKeypadConfiguration implements WebMvcConfigurer {

    @Bean
    public PasswordEncoder enconder(){
        return new BCryptPasswordEncoder();
    }

    @Value("${virtualkeypad.jwt.expirantion:600000}")
    private long jwtExpirationInMillis;

    @Value("${virtualkeypad.jwt.secret}")
    private String secretKey;

    @Bean
    public WebMvcConfigurer corsConfigurer(){
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**");
            }
        };
    }
}
