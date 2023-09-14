package com.kapelles.inc.procheck.authentication.user.model;

import org.springframework.data.r2dbc.repository.R2dbcRepository;


import reactor.core.publisher.Flux;

public interface UserRepository extends R2dbcRepository<UserEntity, Long> {
    
    Flux<UserEntity> findByUsernameAndPassword(String username, String password);
}
