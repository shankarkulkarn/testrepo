package com.cg.pms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

//@SpringBootApplication
@Configuration
@ComponentScan("com.cg.pms.*")
@EnableAutoConfiguration
public class SpringBootPmsjpaApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootPmsjpaApplication.class, args);
	}

	
}
