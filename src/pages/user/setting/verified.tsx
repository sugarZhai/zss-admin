import React, { useEffect, useState } from 'react';
import {
  Descriptions,
  Table,
  Typography,
  Skeleton,
  Tag,
  Space,
  Button,
  Badge,
} from '@arco-design/web-react';
import useLocale from '@/utils/useLocale';
import locale from './locale';
import axios from 'axios';
import styles from './style/index.module.less';

function Verified() {
  const t = useLocale(locale);
  const [data, setData] = useState({
    accountType: '',
    isVerified: true,
    verifiedTime: '',
    legalPersonName: '',
    certificateType: '',
    certificationNumber: '',
    enterpriseName: '',
    enterpriseCertificateType: '',
    organizationCode: '',
  });

  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState([]);
  const [tableLoading, setTableLoading] = useState(true);

  const getData = async () => {
    // const { data } = await axios
    //   .get('/api/user/verified/enterprise')
    //   .finally(() => setLoading(false));
    // setData(data);
    setData({
      accountType: '企业账号',
      isVerified: true,
      verifiedTime: new Date().toISOString().slice(0, 19).replace('T', ' '),
      legalPersonName: `${
        ['王', '李', '张', '刘', '陈', '杨'][Math.floor(Math.random() * 6)]
      }**`,
      certificateType: '中国身份证',
      certificationNumber: `${/[1-9]{3}[*]{12}[0-9]{3}/}`,
      enterpriseName: `${
        ['最强', '第一', '领先'][
          ~~(Math.random() * ['最强', '第一', '领先'].length)
        ]
      }${
        ['科技', '游戏', '汽车'][
          ~~(Math.random() * ['科技', '游戏', '汽车'].length)
        ]
      }`,
      enterpriseCertificateType: '企业营业执照',
      organizationCode: `${/[1-9]{1}[*]{7}[0-9]{1}/}`,
    });

    // const { data: tableData } = await axios
    //   .get('/api/user/verified/authList')
    //   .finally(() => setTableLoading(false));
    // setTableData(tableData);
    setTableData([
      ...new Array(3).fill('0').map(() => ({
        authType: '企业证件认证',
        authContent:
          `企业证件认证，法人姓名` +
          `${
            ['王', '李', '张', '刘', '陈', '杨'][Math.floor(Math.random() * 6)]
          }**`,
        authStatus: Math.floor(Math.random() * 1),
        createdTime: new Date().toISOString().slice(0, 19).replace('T', ' '),
      })),
    ]);
  };

  useEffect(() => {
    getData();
  }, []);

  const loadingNode = <Skeleton text={{ rows: 1 }} />;

  return (
    <div className={styles.verified}>
      <Typography.Title heading={6}>
        {t['userSetting.verified.enterprise']}
      </Typography.Title>
      <Descriptions
        className={styles['verified-enterprise']}
        labelStyle={{ textAlign: 'right' }}
        layout="inline-horizontal"
        colon="："
        column={3}
        data={Object.entries(data).map(([key, value]) => ({
          label: t[`userSetting.verified.label.${key}`],
          value: loading ? (
            loadingNode
          ) : typeof value === 'boolean' ? (
            value ? (
              <Tag color="green">{t['userSetting.value.verified']}</Tag>
            ) : (
              <Tag color="red">{t['userSetting.value.notVerified']}</Tag>
            )
          ) : (
            value
          ),
        }))}
      />

      <Typography.Title heading={6}>
        {t['userSetting.verified.records']}
      </Typography.Title>
      <Table
        columns={[
          { title: t['userSetting.verified.authType'], dataIndex: 'authType' },
          {
            title: t['userSetting.verified.authContent'],
            dataIndex: 'authContent',
          },
          {
            title: t['userSetting.verified.authStatus'],
            dataIndex: 'authStatus',
            render(x) {
              return x ? (
                <Badge
                  status="success"
                  text={t['userSetting.verified.status.success']}
                ></Badge>
              ) : (
                <span>
                  <Badge
                    status="processing"
                    text={t['userSetting.verified.status.waiting']}
                  ></Badge>
                </span>
              );
            },
          },
          {
            title: t['userSetting.verified.createdTime'],
            dataIndex: 'createdTime',
          },
          {
            title: t['userSetting.verified.operation'],
            headerCellStyle: { paddingLeft: '15px' },
            render: (_, x) => {
              if (x.authStatus) {
                return (
                  <Button type="text">
                    {t['userSetting.verified.operation.view']}
                  </Button>
                );
              }
              return (
                <Space>
                  <Button type="text">
                    {t['userSetting.verified.operation.view']}
                  </Button>
                  <Button type="text">
                    {t['userSetting.verified.operation.revoke']}
                  </Button>
                </Space>
              );
            },
          },
        ]}
        data={tableData}
        loading={tableLoading}
      />
    </div>
  );
}

export default Verified;
