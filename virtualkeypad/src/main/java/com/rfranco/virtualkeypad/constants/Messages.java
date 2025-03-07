package com.rfranco.virtualkeypad.constants;

public final class Messages {

    public static final String EMAIL_INVALID = "The provided email is not valid";
    public static final String USER_ALREADY_EXISTS = "User with this email already exists";
    public static final String PASSWORD_TOO_WEAK = "Password must contain at least 8 characters, including a number and a special character";
    public static final String INTERNAL_ERROR = "An unexpected error occurred";
    public static final String BAD_USER_REQUEST = "User name, email and password cannot be empty";
    public static final String PASSWORD_INCORRECT = "Password incorrect";


    public static final String USER_CREATED_SUCCESS = "User created successfully";
    public static final String USER_UPDATED_SUCCESS = "User updated successfully";


    public static final String USER_NOT_FOUND = "User not found";
    public static final String UNAUTHORIZED_ACCESS = "Unauthorized access, please login";


    private Messages() {
        throw new UnsupportedOperationException("This is a constants class and cannot be instantiated");
    }
}