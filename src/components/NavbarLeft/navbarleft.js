import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faBoxesStacked, faMoneyBill, faMoneyBillTrendUp, faUserGroup, faBuilding, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavigationBar = styled.div`
    background-color: #E0E0E0;
    width: 170px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    border-right: 2px solid grey;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    .nav-options {
        width: 130px;
        padding: 7px;
        display: flex;
        align-items: center;
        color: black;
        margin: 10px 0;
        gap: 10px;
        cursor: pointer;
        transition: all .4s ease;
        border-radius: 8px;
        text-decoration: none;
    }

    .nav-options:hover {
        background-color: black;
        color: white;
    }
`;

function NavbarLeft() {
    return (
        <NavigationBar>
            <Link to="/home" className="nav-options">
                <FontAwesomeIcon icon={faChartSimple} />
                Dashboard
            </Link>
            <Link to="/produtos" className="nav-options">
                <FontAwesomeIcon icon={faBoxesStacked} />
                Produtos
            </Link>
            <Link to="/caixa" className="nav-options">
                <FontAwesomeIcon icon={faCartShopping} />
                Caixa
            </Link>
            <Link to="/entrada" className="nav-options">
                <FontAwesomeIcon icon={faMoneyBillTrendUp} />
                Entrada
            </Link>
            <Link to="/saida" className="nav-options">
                <FontAwesomeIcon icon={faMoneyBill} />
                Saída
            </Link>
            <Link to="/clientes" className="nav-options">
                <FontAwesomeIcon icon={faUserGroup} />
                Clientes
            </Link>
            <Link to="/fornecedores" className="nav-options">
                <FontAwesomeIcon icon={faBuilding} />
                Fornecedores
            </Link>
        </NavigationBar>
    );
}

export default NavbarLeft;
