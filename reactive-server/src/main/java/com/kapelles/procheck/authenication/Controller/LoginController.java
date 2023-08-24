package com.kapelles.procheck.authenication.Controller;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class LoginController {

  @PostMapping("/login")
  @ResponseStatus(HttpStatus.OK)
  public void login() {
      //verify login and return a status
  }

  @PostMapping("/login")
  @ResponseStatus(HttpStatus.OK)
  public void signup() {
      //verify signup and return a status
  }
}


