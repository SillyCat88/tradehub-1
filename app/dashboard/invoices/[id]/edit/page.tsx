import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchSellers, fetchInvoiceById } from '@/app/lib/data';

export default async function EditInvoicePage({ params }: { params: { id: string } }) {
  const id = params.id;

  const [invoice, sellers] = await Promise.all([
    fetchInvoiceById(id),
    fetchSellers(),    
  ]);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} sellers={sellers} />
    </main>
  );
}
  