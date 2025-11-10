# Calculadora (Web + BDD)

Projeto de calculadora simples com:
- Interface web (`HTML`, `CSS`, `JS`) servida via `http.server`.
- Testes BDD com `Behave` para a lógica Python e para a UI web usando `Selenium`.

## Pré-requisitos
- `Python 3.10+` instalado (Windows, macOS ou Linux).
- Navegador instalado: **Google Chrome** ou **Microsoft Edge**.
- Acesso à internet para que o `webdriver-manager` faça o download do driver do navegador.

## Instalação
1) Clonar ou copiar o projeto para sua máquina.
2) (Opcional, recomendado) Criar e ativar um ambiente virtual.
- Windows:
  - `python -m venv .venv`
  - `.venv\Scripts\activate`
- macOS/Linux:
  - `python -m venv .venv`
  - `source .venv/bin/activate`
3) Instalar dependências:
- `pip install -r requirements.txt`

## Executar a calculadora web
1) Iniciar o servidor na pasta `web/`:
- `cd web`
- `python -m http.server 8000`
2) Abrir no navegador:
- `http://localhost:8000/`

## Executar os testes BDD
- Na raiz do projeto:
  - `python -m behave`

Os testes cobrem:
- Lógica de cálculo (`features/calculadora.feature`).
- UI web com Selenium (`features/ui_calculadora.feature`).

Para rodar apenas os cenários da UI:
- `python -m behave features/ui_calculadora.feature`

## Estrutura do projeto
```
Calculadora/
├── features/
│   ├── calculadora.feature              # BDD da lógica Python
│   ├── ui_calculadora.feature          # BDD da UI web (Selenium)
│   └── steps/
│       ├── calculadora_steps.py        # Steps da lógica Python
│       └── ui_steps.py                 # Steps da UI com Selenium
├── src/
│   └── calculadora.py                  # Classe Calculadora (Python)
└── web/
    ├── index.html                      # UI da calculadora
    ├── styles.css                      # Estilos
    └── app.js                          # Lógica da UI
```

## Notas sobre o WebDriver
- O projeto usa `webdriver-manager` para baixar e gerenciar automaticamente o driver do navegador.
- Por padrão, tenta abrir **Chrome**; se falhar, faz fallback para **Edge**.
- Garanta que ao menos um deles esteja instalado.

## Solução de problemas
- Erro ao iniciar Selenium/driver:
  - Verifique se o navegador (Chrome/Edge) está instalado e atualizado.
  - Reinstale dependências: `pip install -r requirements.txt`.
- Porta já em uso ao iniciar o servidor:
  - Use outra porta: `python -m http.server 8080` e acesse `http://localhost:8080/`.
- Behave não encontra cenários:
  - Execute pela raiz do projeto e confira caminhos dos arquivos `.feature`.

## Desenvolvimento
- Ajuste textos dos steps para refletir exatamente os cenários Gherkin.
- Para novos cenários (ex.: limpar com `C`, números multi-dígitos), adicione-os em `features/ui_calculadora.feature` e implemente o passo correspondente em `features/steps/ui_steps.py`.