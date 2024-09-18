import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchSellers } from '@/app/lib/data';

export default async function CreateInvoicePage() {
  const sellers = await fetchSellers();

  return (
    <main>
      <div className="rounded-xl bg-neutral-900 p-6">
        <Breadcrumbs
          breadcrumbs={[
            { label: 'Invoices', href: '/dashboard/invoices' },
            {
              label: 'Create Invoice',
              href: '/dashboard/invoices/create',
              active: true,
            },
          ]}
        />
        <Form sellers={sellers} />
      </div>
    </main>
  );
}
  