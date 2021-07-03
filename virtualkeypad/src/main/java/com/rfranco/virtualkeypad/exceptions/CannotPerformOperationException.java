package com.rfranco.virtualkeypad.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.INTERNAL_SERVER_ERROR, reason = "Internal error")
public class CannotPerformOperationException extends RuntimeException{
    public CannotPerformOperationException(String message){
        super(message);
    }
    public CannotPerformOperationException(String message, Throwable source){
        super(message,source);
    }

}
