import React, { useEffect } from "react";
import { styled } from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import { useGlobalContext } from "../../context/globalContext";
import IncomeItem from "../incomeItem/incomeItem";
import ExpenseForm from "./ExpenseForm";

function Expenses() {
    const { addExpense,  expenses, getExpenses, deleteExpense, totalExpense} = useGlobalContext()

    useEffect(() =>{
        getExpenses()
    }, [])
    return (
        <ExpensesStyled>
            <InnerLayout>
                <h1>Expenses</h1>
                <h2 className="total-expense">Total Expenses: <span>${totalExpense()}</span></h2>
                <div className="expense-content">
                    <div className="form-container">
                        <ExpenseForm/>
                    </div>
                    <div className="expenses">
                        {expenses.map((expense) =>{
                            const{_id, title, amount, date, category, type, description} = expense;
                            return <IncomeItem
                                key={_id}
                                id={_id}
                                title={title}
                                description={description}
                                amount={amount}
                                date={date}
                                type={type}
                                category={category}
                                indicatorColor={'var(--color-delete)'}
                                deleteItem={deleteExpense}
                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
        </ExpensesStyled>
    )
}

const ExpensesStyled = styled.div`
    display: flex;
    overflow: auto;
    .total-expense{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-delete);
        }
    }
    .expense-content{
        display: flex;
        gap: 2rem;
        .expenses{
            flex: 1;
        }
    }
`;

export default Expenses