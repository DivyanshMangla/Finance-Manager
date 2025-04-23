import React from 'react';
import { CreateAccountDrawer } from '../../../components/create-account-drawer';
import { Card, CardContent } from '../../../components/ui/card';
import { Plus } from 'lucide-react';
import { getUserAccounts } from '../../../actions/dashboard'
import { Account } from '@prisma/client';
import { AccountCard } from "./_components/account-card";

export default async DashboardPage() {
    const [accounts, transactions] = await Promise.all([
        getUserAccounts(),
        getDashboardData(),
      ]);
    
      const defaultAccount = accounts?.find((account : Account) => account.isDefault);
    return (
        <div className='px-5'>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <CreateAccountDrawer>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed">
                        <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
                            <Plus className="h-10 w-10 mb-2" />
                            <p className="text-sm font-medium">Add New Account</p>
                        </CardContent>
                    </Card>
                </CreateAccountDrawer>
                {accounts.length > 0 &&
                    accounts?.map((account: Account) => (
                        <AccountCard key={account.id} account={account} />
                    ))}
            </div>
        </div>
    )
}

export default DashboardPage