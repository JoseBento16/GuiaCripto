# Guia Cripto 🪙

O **Guia Cripto** é um aplicativo móvel desenvolvido em React Native utilizando o ecossistema Expo. O objetivo do projeto é realizar requisições HTTP assíncronas para consumir dados de mercado de criptomoedas em tempo real, exibindo os resultados de forma otimizada para o usuário.

Este projeto foi desenvolvido como parte de uma atividade acadêmica para praticar o consumo de APIs públicas, manipulação de estados e renderização de listas performáticas.

---

## 🚀 Tecnologias Utilizadas

*   **React Native** & **Expo** (Estrutura base sem Router)
*   **TypeScript** (Tipagem estática dos dados)
*   **Fetch API** (Método nativo para requisições HTTP)
*   **FlatList** (Componente nativo para renderização eficiente de listas)
*   **ActivityIndicator** (Feedback visual de carregamento)

---

## 📸 Demonstração do Aplicativo

| Estado Inicial | Carregando Dados (Loading) | Listagem em Tempo Real |
| :---: | :---: | :---: |
|<img width="381" height="837" alt="tela inicial" src="https://github.com/user-attachments/assets/d932af83-d979-4b70-b9f8-7bef9dd0a1e8" />
Tela de Loading| <img width="378" height="837" alt="Captura de tela 2026-06-04 232601" src="https://github.com/user-attachments/assets/cfc650ed-b77a-4b83-ae62-886dbed9bdee" />
| !Lista de Criptomoedas|<img width="378" height="836" alt="Captura de tela 2026-06-04 232623" src="https://github.com/user-attachments/assets/da119101-e960-44d2-b57d-e6c5e5f73b97" />


> 💡 **Nota:** Para que os prints apareçam no GitHub, basta tirar capturas de tela do seu emulador ou celular, salvá-las dentro da pasta `assets/` com os nomes correspondentes (`print_inicial.png`, `print_loading.png` e `print_lista.png`) e realizar o commit.

---

## 🛠️ Funcionalidades e Requisitos Atendidos

*   **Consumo de API Pública:** Integração com a API open source da *CoinGecko* para buscar os preços atuais das criptomoedas em dólares sem a necessidade de chaves de autenticação.
*   **Exibição Otimizada (FlatList):** Renderização dinâmica dos dados trazendo o ícone oficial da moeda (`Image`), nome completo, símbolo em caixa alta e o preço formatado.
*   **Tratamento de Estados:** Controle rigoroso de fluxo com `try/catch/finally` para gerenciar quando a aplicação está em estado de espera ou quando ocorre algum erro de rede.
*   **Simulação de Latência (Delay):** Inclusão de uma função assíncrona de `delay` de 3 segundos para reter o estado de loading e demonstrar perfeitamente o funcionamento do componente visual de carregamento.
*   **Organização de Código:** Todo o fluxo lógico e de estilização foi centralizado no diretório `src/App.tsx`, mantendo a raiz do projeto limpa.

---

## 🔧 Como Rodar a Aplicação

1. Clone este repositório para a sua máquina:
```bash
   git clone [https://github.com/SEU_USUARIO/GuiaCripto.git](https://github.com/SEU_USUARIO/GuiaCripto.git)
