create table profiles (
  id uuid references auth.users on delete cascade,
  handle text unique not null,
  created_at timestamptz default now(),
  primary key (id)
);

alter table profiles enable row level security;

create policy "Users can view profiles" on profiles
for select using (true);

create policy "Users can insert own profile" on profiles
for insert with check (auth.uid() = id);

create policy "Users can update own profile" on profiles
for update using (auth.uid() = id);
