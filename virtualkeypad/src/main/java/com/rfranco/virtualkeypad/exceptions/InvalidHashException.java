package com.rfranco.virtualkeypad.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
public class InvalidHashException extends RuntimeException{
    public InvalidHashException(String message){
        super(message);
    }
    public InvalidHashException(String message, Throwable source){
        super(message,source);
    }

}