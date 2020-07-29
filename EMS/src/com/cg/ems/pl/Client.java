package com.cg.ems.pl;

import java.util.Scanner;

import com.cg.ems.bean.Employee;
import com.cg.ems.exception.EmployeeException;
import com.cg.ems.service.EmployeeService;
import com.cg.ems.service.EmployeeServiceImpl;

public class Client {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		EmployeeService service = new EmployeeServiceImpl();
		while (true) {
			System.out.println("1.CREATE EMPLOYEE");
			System.out.println("2.Find Employeee ");
			System.out.println("3.Delete Employee ");
			System.out.println("4.List all Employee ");
			System.out.println("5. Update Employee ");
			System.out.println("6. EXIT ");
			System.out.println(" Enter your choice ");
			int choice = scanner.nextInt();
			switch (choice) {
			case 1:
				break;
			case 2:
				System.out.println(" Enter Id to search");
				int id = scanner.nextInt();
				try {
					Employee emp = service.findEmployeeById(id);
					System.out.println(emp.getEmployeeId() + " " + emp.getEmployeeName() + " " + emp.getSalary());
				} catch (EmployeeException e) {
					System.out.println(e.getMessage());
				}

				break;
			case 3:
				break;
			case 4:
				break;
			case 5:
				break;
			case 6:
				System.exit(0);

			}
		}

	}

}
