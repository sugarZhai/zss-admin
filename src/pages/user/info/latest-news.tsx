import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { List, Typography, Skeleton, Avatar } from '@arco-design/web-react';
import styles from './style/index.module.less';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalState } from '@/store';
const { Paragraph } = Typography;
interface INews {
  title?: string;
  description?: string;
  avatar?: string;
}
function LatestNews() {
  const { lastNewsList } = useSelector((state: GlobalState) => state);
  const [data, setData] = useState<INews[]>();
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setData([...lastNewsList]);
    // const { data } = await axios
    //   .get('/api/user/latestNews')
    //   .finally(() => setLoading(false));
    // setData(data);
    // setData(lastNewsList)
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <List
      dataSource={data}
      render={(item, index) => {
        return (
          <List.Item key={index} style={{ padding: '24px 20px 24px 0px' }}>
            {loading ? (
              <Skeleton
                animation
                text={{ width: ['60%', '90%'], rows: 2 }}
                image={{ shape: 'circle' }}
              />
            ) : (
              <List.Item.Meta
                className={styles['list-meta-ellipsis']}
                avatar={
                  <Avatar size={48}>
                    <img src={item.avatar} />
                  </Avatar>
                }
                title={item.title}
                description={
                  <Paragraph
                    ellipsis={{ rows: 1 }}
                    type="secondary"
                    style={{ fontSize: '12px', margin: 0 }}
                  >
                    {item.description}
                  </Paragraph>
                }
              />
            )}
          </List.Item>
        );
      }}
    />
  );
}

export default LatestNews;
