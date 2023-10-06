import { Breadcrumb } from "antd";
import Link from "next/link";
import { HomeOutlined } from "@ant-design/icons";

interface IUMBItems {
  items: {
    label: string;
    link: string;
  }[];
}

const UMBreadCrumb = ({ items }: IUMBItems) => {
  const breadCrumbItems = [
    {
      title: (
        <Link href={"/"}>
          <HomeOutlined />
        </Link>
      ),
    },
    ...items.map((item) => {
      return {
        title: item.link ? (
          <Link href={item.link}>{item.label}</Link>
        ) : (
          <span>{item.label}</span>
        ),
      };
    }),
  ];
  return <Breadcrumb items={breadCrumbItems}></Breadcrumb>;;
};

export default UMBreadCrumb;
