"use client"
import Form from '@/components/Forms/Form';
import ActionBar from '@/components/ui/ActionBar';
import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import { getUserInfo } from '@/services/auth.service';



const CreateUserpage = () => {
    const { role } = getUserInfo() as any;
    const onSubmit = async (data: any) => {
        try {
          console.log(data);
        } catch (err: any) {
          console.error(err.message);
        }
      };
    return (
      <div>
        <UMBreadCrumb
          items={[
            {
              label: `${role}`,
              link: `/${role}`,
            },
            {
              label: "user",
              link: `/${role}/user`,
            },
          ]}
        />
        <h1>student create page</h1>
       <div>
        {/* <Form submitHandler={}></Form> */}
       </div>
      </div>
    );
};

export default CreateUserpage;