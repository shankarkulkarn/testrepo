package com.cg.ems.dao;

import java.util.List;

import javax.persistence.EntityManager;

import com.cg.ems.bean.Employee;
import com.cg.ems.exception.EmployeeException;
import com.cg.ems.util.JPAUtil;

public class EmployeeDaoJpaImpl implements EmployeeDao
{

	@Override
	public int createEmployee(Employee employee) throws EmployeeException {
		EntityManager  em = JPAUtil.getEntityManager();
		
		em.close();
		return 0;
	}

	@Override
	public Employee findEmployeeById(int employeeId) throws EmployeeException {
		// TODO Auto-generated method stub
		return null;
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
