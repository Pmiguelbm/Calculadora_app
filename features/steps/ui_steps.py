from behave import given, when, then
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.edge.service import Service as EdgeService
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.microsoft import EdgeChromiumDriverManager


def create_driver():
    try:
        return webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()))
    except Exception:
        return webdriver.Edge(service=EdgeService(EdgeChromiumDriverManager().install()))


@given('que estou na calculadora web')
def step_open_calculator(context):
    context.driver = create_driver()
    context.driver.get('http://localhost:8000/')


def click_button_by_value(driver, value):
    value = value.strip()
    btn = driver.find_element(By.CSS_SELECTOR, f"button[data-value='{value}']")
    btn.click()


@when('clico nos botões {sequence}')
def step_click_sequence(context, sequence):
    for item in [s.strip() for s in sequence.split(',')]:
        click_button_by_value(context.driver, item)


@then('o visor deve mostrar {esperado}')
def step_assert_display(context, esperado):
    display = context.driver.find_element(By.ID, 'display')
    assert display.text == esperado, f"Esperado {esperado}, obtido {display.text}"
    context.driver.quit()