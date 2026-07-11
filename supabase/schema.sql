-- Tabela de Leads e Respostas do Censo Oficinaz
create table public.censo_leads (
    id uuid default gen_random_uuid() primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    nome text not null,
    whatsapp text not null unique,
    email text not null unique,
    cep text not null,
    bairro text,
    cidade text,
    uf text,
    porte text not null,
    score_total integer not null,
    respostas jsonb not null
);

-- Habilitar RLS (Row Level Security)
alter table public.censo_leads enable row level security;

-- Política para permitir inserção anônima (usuários preenchendo o form)
create policy "Permitir inserção anônima" 
on public.censo_leads for insert 
with check (true);

-- Política para leitura apenas por administradores (pode ser ajustado conforme necessário)
create policy "Leitura apenas para admins" 
on public.censo_leads for select 
using (auth.role() = 'authenticated');
