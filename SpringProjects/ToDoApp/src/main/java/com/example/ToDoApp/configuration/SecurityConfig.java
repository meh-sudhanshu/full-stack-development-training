package com.example.ToDoApp.configuration;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;


@Configuration
public class SecurityConfig {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http.authorizeHttpRequests(configure ->
                    configure.requestMatchers(HttpMethod.POST,"/public/**").permitAll().
                            requestMatchers(HttpMethod.POST,"/admin/**").hasRole("ADMIN").
                            requestMatchers(HttpMethod.POST,"/user/**").hasRole("USER")
                );

        http.httpBasic(Customizer.withDefaults());
        http.csrf(AbstractHttpConfigurer :: disable);

        return http.build();
    }
}
