package com.kapelles.inc.procheck.authentication.user.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Data
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table("users")
public class UserEntity {

    @Id
    @Column("id")
    private Long id;

    @Column("firstname")
    private String firstname;

    @Column("lastname")
    private String lastname;

    @Column("email")
    private String email;

    @Column("username")
    private String username;

    @Column("password")
    private String password;
}
