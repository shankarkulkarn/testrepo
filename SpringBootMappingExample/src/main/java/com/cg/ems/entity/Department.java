package com.cg.ems.entity;

import java.util.ArrayList;
import java.util.List;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
@Table(name="department_tbl")
public class Department {

	@Id
	@GeneratedValue(generator="dseq",strategy=GenerationType.SEQUENCE)
	@SequenceGenerator(name="dseq",sequenceName="department_seq",allocationSize=1)
	@Column(name="deptid")
	private int departmentId;
	
	@Column(name="dname")
	private String departmentName;
	
	
	//@OneToMany(mappedBy="department")
	//@JsonIgnore
	//private List<Employee>  Employee=new ArrayList<Employee>();

	

	public Department() {
		super();
	}

	public int getDepartmentId() {
		return departmentId;
	}

	public void setDepartmentId(int departmentId) {
		this.departmentId = departmentId;
	}

	public String getDepartmentName() {
		return departmentName;
	}

	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}

	
	
	
	
}
