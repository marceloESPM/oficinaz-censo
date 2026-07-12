# Diagnóstico Oficinaz - Raio-X da Gestão

Este repositório contém a aplicação Front-end da campanha "Censo das Oficinas / Raio-X da Gestão".

## Tecnologias Utilizadas
- HTML5 / CSS3 Puro (Alta performance para mobile)
- Vanilla Javascript (Sem frameworks pesados para garantir velocidade nas redes sociais)
- Chart.js (Para os gráficos de radar/barras do Benchmarking)
- Integração ViaCEP API (Auto-complete de região)
- Preparado para Backend Supabase (Banco de Dados)

## Como Configurar o Banco de Dados (Supabase)
Como a campanha coleta leads sensíveis e impede preenchimento duplo (unique email/telefone), o backend deve ser configurado no Supabase.

1. Crie uma conta ou faça login no [Supabase](https://supabase.com/).
2. Crie um novo projeto (ex: `oficinaz-censo`).
3. Vá no painel do projeto em **SQL Editor**.
4. Cole e execute o código que está no arquivo `supabase/schema.sql` deste repositório. Ele criará a tabela `censo_leads` com as regras de `unique` e segurança (RLS).
5. Vá em **Project Settings > API** e copie a sua `URL` e sua `anon public key`.
6. No arquivo `app.js`, descomente o código do Supabase e insira essas chaves para que a pesquisa grave as respostas direto no banco.

## Hospedagem e Deploy

Este projeto está hospedado oficialmente no **Firebase Hosting**, garantindo alta velocidade e uma URL profissional curta (`.web.app`).

### Como publicar atualizações no Firebase:
1. Abra o terminal na pasta raiz do projeto.
2. Caso ainda não esteja logado, faça o login no CLI do Google:
   `npx firebase-tools login`
3. Dispare o comando oficial de deploy:
   `npx firebase-tools deploy`

*Nota: Os arquivos `firebase.json` e `.firebaserc` já estão configurados neste repositório. O projeto também continua 100% compatível com deploy na Vercel ou Netlify, bastando conectá-los a este repositório no GitHub.*
