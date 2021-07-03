package com.example.snake;
import java.lang.reflect.Type;

import java.lang.String;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaders;
import org.springframework.messaging.simp.stomp.StompSession;
import org.springframework.messaging.simp.stomp.StompSessionHandlerAdapter;

public class SessionHandler extends StompSessionHandlerAdapter {



    @Override
    public void afterConnected(StompSession session, StompHeaders connectedHeaders) {

        session.subscribe("/queue/1a279e52-d78a-4540-8298-22a31457b1c4", this);
    }

    @Override
    public void handleException(StompSession session, StompCommand command, StompHeaders headers, byte[] payload, Throwable exception) {
        System.out.println("Got an exception" + exception.getMessage());
    }

    @Override
    public Type getPayloadType(StompHeaders headers) {
        return String.class;
    }

    @Override
    public void handleFrame(StompHeaders headers, Object payload) {
        Board.command = payload.toString();
        System.out.println("Received : " + payload.toString());
    }
}