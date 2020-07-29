package com.cg.ems.service;

import java.util.List;

import com.cg.ems.bean.Employee;
import com.cg.ems.dao.EmployeeDao;
import com.cg.ems.dao.EmployeeDaoImpl;
import com.cg.ems.dao.EmployeeDaoJpaImpl;
import com.cg.ems.exception.EmployeeException;

public class EmployeeServiceImpl implements EmployeeService {

	EmployeeDao  employeeDao =new EmployeeDaoJpaImpl(); 
	
	@Override
	public int createEmployee(Employee employee) throws EmployeeException {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Employee findEmployeeById(int employeeId) throws EmployeeException {
		// TODO Auto-generated method stub
		
		
		return employeeDao.findEmployeeById(employeeId);
	}

	
	@Override
	public Employee deleteEmployeeById(int employeeId) throws EmployeeException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Employee> findAll() throws EmployeeException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Employee updateEmployeeById(Employee employee) throws EmployeeException {
		// TODO Auto-generated method stub
		return null;
	}

}
