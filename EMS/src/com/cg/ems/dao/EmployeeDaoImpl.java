package com.cg.ems.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;

import com.cg.ems.bean.Employee;
import com.cg.ems.exception.EmployeeException;
import com.cg.ems.util.DBUtil;

public class EmployeeDaoImpl implements EmployeeDao {

	@Override
	public int createEmployee(Employee employee) throws EmployeeException {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Employee findEmployeeById(int employeeId) throws EmployeeException {

		Employee employee;
		try {
			Connection con = DBUtil.getConnection();
			String qry = "select empid,empname,empsal from employee_tbl where empid=?";
			PreparedStatement pstmt = con.prepareStatement(qry);
			pstmt.setInt(1, employeeId);
			ResultSet rst = pstmt.executeQuery();
			if (rst.next()) {
				employee = new Employee(rst.getInt(1), rst.getString(2), rst.getDouble(3));
			} else {
				throw new EmployeeException(" ID NOT FOUND ");
			}

		} catch (Exception e) {
	   throw new EmployeeException(" Exception occur Dao findEmployee :- "+e.getMessage());
		}
		return employee;
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
