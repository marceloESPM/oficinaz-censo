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

## Hospedagem (Vercel)
O projeto está pronto para rodar instantaneamente na Vercel. 
A conexão do GitHub com a Vercel garante que qualquer push neste repositório atualize o site no ar imediatamente.
