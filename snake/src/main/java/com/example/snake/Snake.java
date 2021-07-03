package com.example.snake;

import org.springframework.beans.factory.annotation.Autowired;

import javax.swing.*;
import java.awt.*;
import java.util.concurrent.ExecutionException;


public class Snake extends JFrame {


    public Snake() throws ExecutionException, InterruptedException {
        initUI();
    }
    
    private void initUI() throws ExecutionException, InterruptedException {
        
        add(new Board());
               
        setResizable(false);
        pack();
        
        setTitle("Snake");
        setLocationRelativeTo(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }


    public void main(String[] args) {

        EventQueue.invokeLater(() -> {
            JFrame ex = null;
            try {
                ex = new Snake();
            } catch (ExecutionException e) {
                e.printStackTrace();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            ex.setVisible(true);
        });
    }
}
