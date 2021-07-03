package com.example.snake;

import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
@Getter
@Setter
public class ProjectConfiguration  {

    @Value("${snake.token.direction}")
    private String tokenRoute;
}
