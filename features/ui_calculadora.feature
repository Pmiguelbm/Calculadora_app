Feature: Calculadora Web
    Como um usuário
    Eu quero realizar operações básicas na calculadora web
    Para obter resultados de soma, subtração, multiplicação e divisão

    Background:
        Given que estou na calculadora web

    Scenario: Somar dois números
        When clico nos botões 5, +, 3, =
        Then o visor deve mostrar 8

    Scenario: Subtrair dois números
        When clico nos botões 9, -, 4, =
        Then o visor deve mostrar 5

    Scenario: Multiplicar dois números
        When clico nos botões 7, *, 6, =
        Then o visor deve mostrar 42

    Scenario: Dividir dois números
        When clico nos botões 8, /, 2, =
        Then o visor deve mostrar 4

    Scenario: Divisão por zero
        When clico nos botões 5, /, 0, =
        Then o visor deve mostrar Erro