create schema private;

insert into storage.buckets (id, name)
values ('files', 'files');
on conflict do nothing;

create policy "Authenticated users can upload files"
on storage.objects for insert to authenticated with check (
  bucket_id = 'files' and owner = auth.uid()
);

create policy "Users can view their own files"
on storage.objects for select to authenticated using (
  bucket_id = 'files' and owner = auth.uid()
);

create policy "Users can update their own files"
on storage.objects for update to authenticated with check (
  bucket_id = 'files' and owner = auth.uid()
);

create policy "Users can delete their own files"
on storage.objects for delete to authenticated using (
  bucket_id = 'files' and owner = auth.uid()
);