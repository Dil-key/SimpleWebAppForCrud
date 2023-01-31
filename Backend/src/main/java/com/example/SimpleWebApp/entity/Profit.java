package com.example.SimpleWebApp.entity;
import javax.persistence.*;

@Entity
@Table(name = "profit")

public class Profit {
    @Id
    @Column(name = "id")
    private Integer id;

    @Column(name = "date")
    private String date;

    @Column(name = "income")
    private String income;

    @Column(name = "expense")
    private String expense;

    @Column(name = "profit")
    private String profit;

    public Profit() {
    }

    public Profit(Integer id, String date, String income, String expense, String profit) {
        this.id = id;
        this.date = date;
        this.income = income;
        this.expense = expense;
        this.profit = profit;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getIncome() {
        return income;
    }

    public void setIncome(String income) {
        this.income = income;
    }

    public String getExpense() {
        return expense;
    }

    public void setExpense(String expense) {
        this.expense = expense;
    }

    public String getProfit() {
        return profit;
    }

    public void setProfit(String profit) {
        this.profit = profit;
    }
}
