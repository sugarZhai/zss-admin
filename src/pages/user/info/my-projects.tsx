import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Grid } from '@arco-design/web-react';
import ProjectCard, { ProjectProps } from './blocks/project';

function MyProject() {
  const [data, setData] = useState<ProjectProps[]>(new Array(6).fill({}));
  const [loading, setLoading] = useState(false);

  const { Row, Col } = Grid;

  const getData = async () => {
    // setLoading(true);
    // const { data } = await axios.get('/api/user/projectList').finally(() => {
    //   setLoading(false);
    // });
    // setData(data);
    setData([
      ...new Array(6).fill(null).map((_item, index) => ({
        id: index,
        enTitle: [
          'ZMBD Design System',
          'The Volcano Engine',
          'OCR text recognition',
          'Content resource management',
          'Toutiao content management',
          'Intelligent Robot Project',
        ][index],
        title: [
          '企业级产品设计系统',
          '火山引擎智能应用',
          'OCR文本识别',
          '内容资源管理',
          '今日头条内容管理',
          '智能机器人',
        ][index],
        contributors: [],
        contributorsLength: Math.floor(Math.random() * (100 - 5 + 1)) + 5,
      })),
    ]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Row gutter={12}>
      {data.map((item, index) => (
        <Col
          key={index}
          span={8}
          style={
            index > data.length - 4 && index < data.length
              ? { marginTop: '16px' }
              : {}
          }
        >
          <ProjectCard {...item} loading={loading} />
        </Col>
      ))}
    </Row>
  );
}

export default MyProject;
