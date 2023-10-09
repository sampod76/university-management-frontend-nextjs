"use client"
import ActionBar from '@/components/ui/ActionBar';
import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import { getUserInfo } from '@/services/auth.service';
import { Button } from 'antd';
import Link from 'next/link';

const DepartmentPage = () => {
    const { role } = getUserInfo() as any;
    return (
      <div>
        <UMBreadCrumb
          items={[
            {
              label: `${role}`,
              link: `/${role}`,
            },
            // {
            //   label: "student",
            //   link: `/${role}/student`,
            // },
          ]}
        />
        {/* <h1>Manage student page</h1> */}
        <ActionBar title="Department List">
          <Link href="/super_admin/department/create">
            <Button type="primary">Create</Button>
          </Link>
        </ActionBar>
      </div>)
};

export default DepartmentPage;