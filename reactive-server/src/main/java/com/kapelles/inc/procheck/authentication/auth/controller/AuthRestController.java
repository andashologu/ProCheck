package com.kapelles.inc.procheck.authentication.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.kapelles.inc.procheck.authentication.user.model.UserEntity;
import com.kapelles.inc.procheck.authentication.user.model.UserRepository;

import reactor.core.publisher.Mono;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class AuthRestController {

  @Autowired
  UserRepository userRepository;

  @PostMapping("/login")//verifying login without security
  public ResponseEntity<Mono<String>> login(@RequestAttribute("username") String username, @RequestAttribute("password") String password) {
    if(userRepository.findByUsernameAndPassword(username, password) != null)
      return  ResponseEntity
        .status(HttpStatus.ACCEPTED)
        .header("X-Reason", "Login success")
        .body(Mono.just("Authentication passed successfully"));
    else
      return ResponseEntity
      .status(HttpStatus.FORBIDDEN)
      .header("X-Reason", "Login failer")
      .body(Mono.just("Invalid username or password"));
  }

  @GetMapping("/signup")// fix! Still unaccessible
  public Mono<String> signup() {
    System.out.println("Tring to access signup page");
    return Mono.just("you are tring to access signup page");
  }

  @PostMapping("/signup")
  @ResponseStatus(HttpStatus.CREATED)
  public Mono<UserEntity> signup(@RequestBody UserEntity user) {
    return userRepository.save(user);
  }

}


