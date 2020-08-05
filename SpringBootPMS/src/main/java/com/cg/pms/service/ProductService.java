package com.cg.pms.service;

import com.cg.pms.entity.Product;
import com.cg.pms.exception.ProductException;

public interface ProductService {

	public Product findProductById(int productId) throws ProductException;
}
