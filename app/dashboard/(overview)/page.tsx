import CardWrapper from '@/app/components/dashboard/cards';
import RevenueChart from '@/app/components/dashboard/revenue-chart';
import LatestInvoices from '@/app/components/dashboard/latest-invoices';
import { lusitana } from '@/app/lib/fonts';
import { Suspense } from 'react';
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from '@/app/components/skeletons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          {/* @ts-expect-error Server Component */}
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          {/* @ts-expect-error Server Component */}
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          {/* @ts-expect-error Server Component */}
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}