package com.cg.pms.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.pms.dao.ProductDao;
import com.cg.pms.entity.Product;
import com.cg.pms.exception.ProductException;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductDao  productDao ;
	
	@Override
	public Product findProductById(int productId) throws ProductException {
		
		Optional<Product> optional = productDao.findById(productId);
		Product product = null;
		if(optional.isPresent())
		{
			product = optional.get();
		}
		else
		{
			throw new ProductException(productId+" ID NOT FOUND");
		}
		
		return product;
	}

}
