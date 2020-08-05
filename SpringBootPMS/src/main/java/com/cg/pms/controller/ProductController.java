package com.cg.pms.controller;

import java.time.LocalDateTime;

import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.cg.pms.entity.Product;
import com.cg.pms.exception.ErrorInfo;
import com.cg.pms.exception.ProductException;
import com.cg.pms.service.ProductService;

@RestController
public class ProductController {

	@Autowired
	ProductService productService;
	
	@GetMapping("product/{pid}")
	public ResponseEntity<Product> findProductById(@PathVariable("pid") int productId) throws ProductException
	{
		   Product product = null;
		   
product = productService.findProductById(productId);
		  
ResponseEntity<Product>  re = new ResponseEntity<Product>(product,HttpStatus.OK);
return re;
		   
		   
	}
	
	
}
