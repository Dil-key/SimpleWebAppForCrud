package com.example.SimpleWebApp.entity;

import javax.persistence.*;

@Entity
@Table(name = "pastuser")

public class PastUser {

    @Id
    @Column(name = "userno")
    private Integer userno;

    @Column(name = "name")
    private String name;

    @Column(name = "address")
    private String address;

    @Column(name = "type")
    private String type;

    @Column(name = "total")
    private String total;

    public PastUser(){

    }

    public PastUser(Integer userno, String name, String address, String type, String total) {
        this.userno = userno;
        this.name = name;
        this.address = address;
        this.type = type;
        this.total = total;
    }

    public Integer getUserno() {
        return userno;
    }

    public void setUserno(Integer userno) {
        this.userno = userno;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getTotal() {
        return total;
    }

    public void setTotal(String total) {
        this.total = total;
    }
}
