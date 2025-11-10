from behave import given, when, then
from src.calculadora import Calculadora

@given('que iniciei a calculadora')
def step_iniciei_calculadora(context):
    context.calc = Calculadora()
    
@when('somo {a:d} e {b:d}')
def step_somar(context, a, b):
    context.resultado = context.calc.somar(a, b)

@then('o resultado deve ser {esperado:d}')
def step_verificar_resultado(context, esperado):
    assert context.resultado == esperado, f"Esperado {esperado}, mas obtido {context.resultado}"