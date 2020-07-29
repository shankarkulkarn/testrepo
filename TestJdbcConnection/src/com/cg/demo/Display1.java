package com.cg.demo;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.cg.util.DBUtil;

public class Display1 {
	

	

	public static void main(String[] args) {
		
		
String  qry ="select empid,empname,empsal from employee_tbl";
        
        try
        {
        Connection con = DBUtil.getConnection();
        
        PreparedStatement  pstmt = con.prepareStatement(qry);
        
        
        ResultSet rst =pstmt.executeQuery();
        
        ArrayList<Employee> list = new ArrayList<Employee>();
        while(rst.next()) 
        {
        	int   id = rst.getInt("empid");
        	String name = rst.getString("empname");
        	double salary = rst.getDouble("empsal");
        	Employee   employee = new Employee(id,name,salary);
        	list.add(employee);
        }
        TestConnection obj = new TestConnection();
        obj.printEmployeeInfo(list);
        con.close();
        }
        catch(ClassNotFoundException e)
        {
        	e.printStackTrace();
        }
        catch(SQLException e)
        {
        	System.out.println(e.getMessage());
        }
	}

}
